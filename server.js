const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const SYS_KEY = 'cfc702aed3094c86b92d6d4ff7a54c84';
const SYS_HEADERS = {
  'Ocp-Apim-Subscription-Key': SYS_KEY,
  'origin': 'https://www.systembolaget.se',
  'referer': 'https://www.systembolaget.se/',
  'user-agent': 'Mozilla/5.0'
};

// Systembolaget produkter — hämtar alla sidor + kollar lager per butik
app.get('/api/systembolaget', async (req, res) => {
  const { storeId } = req.query;
  if (!storeId) return res.status(400).json({ error: 'storeId kravs' });
  try {
    // Steg 1: Hämta alla tillfälliga viner nationellt (paginerat)
    const allProducts = [];
    let page = 1;
    let totalPages = 1;
    while (page <= totalPages) {
      const url = `https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?size=30&page=${page}&categoryLevel1=Vin&assortmentText=Tillf%C3%A4lligt+sortiment`;
      const r = await fetch(url, { headers: SYS_HEADERS });
      if (!r.ok) throw new Error(`Systembolaget svarade ${r.status}`);
      const data = await r.json();
      const products = data.products || [];
      allProducts.push(...products);
      const totalHits = (data.metadata && data.metadata.totalHits) || data.totalHits || products.length;
      totalPages = Math.ceil(totalHits / 30);
      if (page >= 20 || products.length === 0) break;
      page++;
    }

    // Steg 2: Kolla lagerstatus per produkt och butik i batchar om 10
    const BATCH = 10;
    const inStock = [];
    let debugLogged = false;
    for (let i = 0; i < allProducts.length; i += BATCH) {
      const batch = allProducts.slice(i, i + BATCH);
      const results = await Promise.all(batch.map(async (product) => {
        try {
          const url = `https://api-extern.systembolaget.se/sb-api-ecommerce/v1/stockbalance/store?ProductId=${product.productId}&StoreId=${storeId}`;
          const r = await fetch(url, { headers: SYS_HEADERS });
          if (!r.ok) return null;
          const data = await r.json();
          if (!debugLogged) {
            console.log('STOCKBALANCE SAMPLE:', JSON.stringify(data));
            debugLogged = true;
          }
          const item = Array.isArray(data) ? data[0] : data;
          const qty = item ? item.stock : 0;
          if (qty > 0) return product;
          return null;
        } catch (e) {
          return null;
        }
      }));
      inStock.push(...results.filter(Boolean));
    }

    res.json({ products: inStock, totalFetched: allProducts.length, totalInStock: inStock.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Claude proxy (wine info)
app.post('/api/claude', async (req, res) => {
  if (!ANTHROPIC_KEY) return res.status(500).json({ error: 'ANTHROPIC_API_KEY saknas' });
  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(req.body)
    });
    res.json(await r.json());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Kör på port ${PORT}`));
