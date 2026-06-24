const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ANTHROPIC_KEY = process.env.ANTHROPIC_API_KEY;
const SYS_KEY = 'cfc702aed3094c86b92d6d4ff7a54c84';

// Proxy: Systembolaget
app.get('/api/systembolaget', async (req, res) => {
  const { storeId } = req.query;
  if (!storeId) return res.status(400).json({ error: 'storeId krävs' });

  try {
    const url = `https://api-extern.systembolaget.se/sb-api-ecommerce/v1/productsearch/search?size=100&page=1&categoryLevel1=Vin&assortmentText=Tillfälligt+sortiment&storeId=${storeId}`;
    const response = await fetch(url, {
      headers: {
        'Ocp-Apim-Subscription-Key': SYS_KEY,
        'origin': 'https://www.systembolaget.se',
        'referer': 'https://www.systembolaget.se/',
        'user-agent': 'Mozilla/5.0'
      }
    });
    if (!response.ok) throw new Error(`Systembolaget svarade ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Proxy: Anthropic (för Vivino-sökning via web search)
app.post('/api/claude', async (req, res) => {
  if (!ANTHROPIC_KEY) return res.status(500).json({ error: 'ANTHROPIC_API_KEY saknas på servern' });

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': ANTHROPIC_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Kör på port ${PORT}`));
