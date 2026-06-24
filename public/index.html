<!DOCTYPE html>
<html lang="sv">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Alice botaniserar i tillfälliga hyllan</title>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
:root {
  --bg: #f7f5f2; --surface: #fff; --border: #e4dfd8; --border-h: #c8c0b4;
  --text: #1a1614; --muted: #6b6560; --hint: #a09890;
  --accent: #8b1a2f; --accent-l: #f5e8eb; --accent-t: #6b1224;
  --blue: #1a4f8a; --blue-l: #e8f0fa;
  --green: #1a6b3a; --green-l: #e8f5ee;
  --r: 10px; --rs: 6px;
}
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; font-size: 15px; line-height: 1.5; }
.app { max-width: 860px; margin: 0 auto; padding: 1.5rem 1rem 5rem; }

/* Header */
.header { margin-bottom: 1.5rem; }
.header h1 { font-size: 21px; font-weight: 700; letter-spacing: -.4px; }
.header h1 em { color: var(--accent); font-style: normal; }
.header p { font-size: 13px; color: var(--muted); margin-top: 3px; }

/* Controls */
.controls { display: flex; gap: 8px; margin-bottom: 1rem; flex-wrap: wrap; align-items: flex-start; }

/* Store picker */
.store-wrap { position: relative; flex: 1; min-width: 200px; }
.store-wrap input { width: 100%; height: 40px; padding: 0 36px 0 12px; border: 1px solid var(--border); border-radius: var(--rs); font-size: 14px; background: var(--surface); color: var(--text); }
.store-wrap input:focus { outline: none; border-color: var(--accent); }
.store-wrap .chevron { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); color: var(--hint); pointer-events: none; font-size: 12px; }
.store-dropdown { position: absolute; top: calc(100% + 4px); left: 0; right: 0; background: var(--surface); border: 1px solid var(--border); border-radius: var(--rs); box-shadow: 0 4px 16px rgba(0,0,0,.1); z-index: 100; max-height: 260px; overflow-y: auto; }
.store-option { padding: 9px 12px; font-size: 13px; cursor: pointer; border-bottom: 1px solid var(--border); }
.store-option:last-child { border-bottom: none; }
.store-option:hover, .store-option.highlighted { background: var(--accent-l); color: var(--accent-t); }
.store-option .city { font-size: 11px; color: var(--hint); margin-top: 1px; }
.store-option.highlighted .city { color: var(--accent-t); opacity: .7; }
.store-dropdown.hidden { display: none; }

/* Search */
.ctrl-search { flex: 1; min-width: 150px; position: relative; }
.ctrl-search input { width: 100%; height: 40px; padding: 0 12px 0 34px; border: 1px solid var(--border); border-radius: var(--rs); font-size: 14px; background: var(--surface); color: var(--text); }
.ctrl-search input:focus { outline: none; border-color: var(--accent); }
.ctrl-search .si { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); font-size: 14px; pointer-events: none; opacity: .4; }

select { height: 40px; padding: 0 8px; border: 1px solid var(--border); border-radius: var(--rs); font-size: 13px; background: var(--surface); color: var(--text); }
select:focus { outline: none; border-color: var(--accent); }

.fetch-btn { height: 40px; padding: 0 18px; background: var(--accent); color: #fff; border: none; border-radius: var(--rs); font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; gap: 7px; white-space: nowrap; flex-shrink: 0; }
.fetch-btn:hover { opacity: .88; }
.fetch-btn:disabled { opacity: .45; cursor: not-allowed; }
.spin { display: inline-block; width: 13px; height: 13px; border: 2px solid rgba(255,255,255,.3); border-top-color: #fff; border-radius: 50%; animation: rot .7s linear infinite; }
@keyframes rot { to { transform: rotate(360deg); } }
@keyframes slide { 0%{transform:translateX(-100%)} 100%{transform:translateX(350%)} }

/* Stats */
.stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 1rem; }
.stat { background: var(--surface); border: 1px solid var(--border); border-radius: var(--rs); padding: 10px 12px; }
.stat .sl { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .5px; }
.stat .sv { font-size: 20px; font-weight: 600; margin-top: 2px; }

/* Progress */
.progress-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 2rem 1.5rem; text-align: center; }
.progress-card h3 { font-size: 16px; font-weight: 600; margin-bottom: 6px; }
.progress-card p { font-size: 13px; color: var(--muted); margin-bottom: 1.25rem; }
.pbar { height: 4px; background: var(--border); border-radius: 2px; overflow: hidden; margin-bottom: 8px; position: relative; }
.pfill { height: 100%; background: var(--accent); border-radius: 2px; transition: width .4s ease; }
.ptext { font-size: 12px; color: var(--hint); }

/* List header */
.list-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: .6rem; }
.lh-count { font-size: 13px; color: var(--muted); }
.lh-note { font-size: 12px; color: var(--hint); }

/* Wine cards */
.wine-list { display: flex; flex-direction: column; gap: 7px; }
.wine-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--r); padding: 14px 16px; display: flex; gap: 16px; align-items: flex-start; transition: border-color .15s; }
.wine-card:hover { border-color: var(--border-h); }

.wine-img { flex-shrink: 0; width: 44px; display: flex; align-items: flex-start; justify-content: center; padding-top: 2px; }
.wine-img img { width: 36px; object-fit: contain; border-radius: 3px; }
.wine-img .no-img { font-size: 26px; opacity: .4; line-height: 1; }

.wine-body { flex: 1; min-width: 0; }
.wine-name { font-size: 14px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.wine-thin { font-weight: 400; color: var(--muted); }
.wine-producer { font-size: 12px; color: var(--muted); margin-top: 1px; }
.wine-meta { font-size: 12px; color: var(--hint); margin-top: 3px; }
.wine-taste { font-size: 12px; color: var(--muted); margin-top: 5px; font-style: italic; line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.wine-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-top: 7px; align-items: center; }
.tag { font-size: 11px; padding: 2px 8px; border-radius: 20px; border: 1px solid var(--border); color: var(--muted); background: var(--bg); }
.tag-type { background: var(--accent-l); color: var(--accent-t); border-color: #e8c4cc; }
.tag-country { background: var(--blue-l); color: var(--blue); border-color: #ccddf0; }
.tag-eco { background: var(--green-l); color: var(--green); border-color: #b8dfc8; }

.wine-right { display: flex; flex-direction: column; align-items: flex-end; gap: 8px; flex-shrink: 0; min-width: 90px; }
.price { font-size: 15px; font-weight: 700; }

/* Info button & panel */
.info-btn { font-size: 12px; padding: 5px 11px; border-radius: var(--rs); border: 1px solid var(--border); background: var(--bg); color: var(--muted); cursor: pointer; white-space: nowrap; display: flex; align-items: center; gap: 5px; transition: all .15s; }
.info-btn:hover { background: var(--accent-l); color: var(--accent-t); border-color: #e8c4cc; }
.info-btn.loading { opacity: .6; cursor: not-allowed; }
.info-panel { margin-top: 10px; padding: 12px 14px; background: var(--accent-l); border-radius: var(--rs); border: 1px solid #e8c4cc; font-size: 13px; color: var(--text); line-height: 1.65; }
.info-panel .info-score { font-size: 18px; font-weight: 700; color: var(--accent); margin-bottom: 6px; }
.info-panel .info-source { font-size: 11px; color: var(--accent-t); margin-top: 8px; opacity: .7; }

.syst-btn { font-size: 11px; padding: 5px 10px; border-radius: var(--rs); border: 1px solid #ccddf0; background: var(--blue-l); color: var(--blue); text-decoration: none; display: flex; align-items: center; gap: 3px; white-space: nowrap; transition: all .15s; }
.syst-btn:hover { background: #d8e8f5; }

/* Empty/error */
.msg { text-align: center; padding: 4rem 2rem; color: var(--muted); }
.msg .mi { font-size: 44px; margin-bottom: .75rem; }
.msg h3 { font-size: 16px; font-weight: 600; color: var(--text); margin-bottom: 6px; }
.msg p { font-size: 13px; line-height: 1.6; max-width: 340px; margin: 0 auto; }

@media (max-width: 500px) {
  .stats { grid-template-columns: repeat(2, 1fr); }
  .wine-right { min-width: 75px; }
}
</style>
</head>
<body>
<div class="app">
  <div class="header">
    <h1>🌿 Alice <em>botaniserar i tillfälliga hyllan</em></h1>
    <p>Systembolagets tillfälliga vinsortiment · i lager just nu</p>
  </div>

  <div class="controls">
    <!-- Sökbar butikslista -->
    <div class="store-wrap" id="store-wrap">
      <input type="text" id="store-input" placeholder="Sök butik..." autocomplete="off"
        oninput="filterStores()" onfocus="openDropdown()" onblur="closeDropdown()" onkeydown="storeKeydown(event)" />
      <span class="chevron">▾</span>
      <div class="store-dropdown hidden" id="store-dropdown"></div>
    </div>

    <div class="ctrl-search">
      <span class="si">🔍</span>
      <input type="text" id="search" placeholder="Sök vin..." oninput="renderWines()" />
    </div>

    <select id="type-f" onchange="renderWines()">
      <option value="">Alla typer</option>
      <option value="Rött vin">Rött</option>
      <option value="Vitt vin">Vitt</option>
      <option value="Rosé">Rosé</option>
      <option value="Mousserande">Mousserande</option>
      <option value="Dessert">Dessert</option>
    </select>

    <select id="sort-s" onchange="renderWines()">
      <option value="price_asc">Pris ↑</option>
      <option value="price_desc">Pris ↓</option>
      <option value="name">Namn</option>
      <option value="country">Land</option>
    </select>

    <button class="fetch-btn" id="fetch-btn" onclick="startFetch()">🌿 Botanisera</button>
  </div>

  <div class="stats" id="stats" style="display:none;">
    <div class="stat"><div class="sl">Viner</div><div class="sv" id="s-count">–</div></div>
    <div class="stat"><div class="sl">Länder</div><div class="sv" id="s-countries">–</div></div>
    <div class="stat"><div class="sl">Billigast</div><div class="sv" id="s-min">–</div></div>
    <div class="stat"><div class="sl">Dyrast</div><div class="sv" id="s-max">–</div></div>
  </div>

  <div id="content">
    <div class="msg">
      <div class="mi">🌿</div>
      <h3>Välkommen, Alice</h3>
      <p>Välj butik och tryck "Botanisera" för att utforska det tillfälliga sortimentet.</p>
    </div>
  </div>
</div>

<script>
let wines = [];
let allStores = [];
let selectedStoreId = '0151';
let highlightedIdx = -1;

// ── Butikslista (hårdkodad) ───────────────────────────────────
const STORES = [
  {id:"0512",name:"Alingsås",city:"Alingsås"},
  {id:"0318",name:"Alvesta",city:"Alvesta"},
  {id:"0311",name:"Aneby",city:"Aneby"},
  {id:"0207",name:"Arboga",city:"Arboga"},
  {id:"0630",name:"Arjeplog",city:"Arjeplog"},
  {id:"0629",name:"Arvidsjaur",city:"Arvidsjaur"},
  {id:"0527",name:"Arvika",city:"Arvika"},
  {id:"0707",name:"Avesta",city:"Avesta"},
  {id:"0624",name:"Boden",city:"Boden"},
  {id:"0538",name:"Bollebygd",city:"Bollebygd"},
  {id:"0604",name:"Bollnäs",city:"Bollnäs"},
  {id:"0328",name:"Borgholm",city:"Borgholm"},
  {id:"0702",name:"Borlänge",city:"Borlänge"},
  {id:"0513",name:"Borås",city:"Borås"},
  {id:"0119",name:"Botkyrka",city:"Botkyrka"},
  {id:"0128",name:"Tullinge",city:"Botkyrka"},
  {id:"0424",name:"Burlöv",city:"Burlöv"},
  {id:"0117",name:"Mörby Centrum",city:"Danderyd"},
  {id:"0216",name:"Degerfors",city:"Degerfors"},
  {id:"0309",name:"Eksjö",city:"Eksjö"},
  {id:"0326",name:"Emmaboda",city:"Emmaboda"},
  {id:"0203",name:"Enköping",city:"Enköping"},
  {id:"0132",name:"Eskilstuna",city:"Eskilstuna"},
  {id:"0410",name:"Eslöv",city:"Eslöv"},
  {id:"0208",name:"Fagersta",city:"Fagersta"},
  {id:"0516",name:"Falkenberg",city:"Falkenberg"},
  {id:"0523",name:"Falköping",city:"Falköping"},
  {id:"0701",name:"Falun",city:"Falun"},
  {id:"0135",name:"Flen",city:"Flen"},
  {id:"0314",name:"Gislaved",city:"Gislaved"},
  {id:"0136",name:"Gnesta",city:"Gnesta"},
  {id:"0315",name:"Gnosjö",city:"Gnosjö"},
  {id:"0628",name:"Gällivare",city:"Gällivare"},
  {id:"0601",name:"Gävle",city:"Gävle"},
  {id:"0506",name:"Angered",city:"Göteborg"},
  {id:"0502",name:"Frölunda",city:"Göteborg"},
  {id:"0542",name:"Göteborg Bergsjön",city:"Göteborg"},
  {id:"0543",name:"Göteborg Nordstan",city:"Göteborg"},
  {id:"0544",name:"Göteborgs Centrum",city:"Göteborg"},
  {id:"0505",name:"Hisingen",city:"Göteborg"},
  {id:"0501",name:"Nordstan",city:"Göteborg"},
  {id:"0213",name:"Hallsberg",city:"Hallsberg"},
  {id:"0517",name:"Halmstad",city:"Halmstad"},
  {id:"0118",name:"Haninge",city:"Haninge"},
  {id:"0626",name:"Haparanda",city:"Haparanda"},
  {id:"0708",name:"Hedemora",city:"Hedemora"},
  {id:"0405",name:"Helsingborg",city:"Helsingborg"},
  {id:"0536",name:"Herrljunga",city:"Herrljunga"},
  {id:"0603",name:"Hofors",city:"Hofors"},
  {id:"0120",name:"Huddinge Centrum",city:"Huddinge"},
  {id:"0161",name:"Kungens Kurva",city:"Huddinge"},
  {id:"0606",name:"Hudiksvall",city:"Hudiksvall"},
  {id:"0331",name:"Hultsfred",city:"Hultsfred"},
  {id:"0218",name:"Hällefors",city:"Hällefors"},
  {id:"0609",name:"Härnösand",city:"Härnösand"},
  {id:"0508",name:"Härryda",city:"Härryda"},
  {id:"0545",name:"Mölnlycke",city:"Härryda"},
  {id:"0415",name:"Hässleholm",city:"Hässleholm"},
  {id:"0412",name:"Höör",city:"Höör"},
  {id:"0163",name:"Barkarby",city:"Järfälla"},
  {id:"0306",name:"Huskvarna",city:"Jönköping"},
  {id:"0305",name:"Jönköping",city:"Jönköping"},
  {id:"0625",name:"Kalix",city:"Kalix"},
  {id:"0324",name:"Kalmar",city:"Kalmar"},
  {id:"0217",name:"Karlskoga",city:"Karlskoga"},
  {id:"0323",name:"Karlskrona",city:"Karlskrona"},
  {id:"0525",name:"Karlstad",city:"Karlstad"},
  {id:"0133",name:"Katrineholm",city:"Katrineholm"},
  {id:"0627",name:"Kiruna",city:"Kiruna"},
  {id:"0413",name:"Klippan",city:"Klippan"},
  {id:"0610",name:"Kramfors",city:"Kramfors"},
  {id:"0406",name:"Kristianstad",city:"Kristianstad"},
  {id:"0526",name:"Kristinehamn",city:"Kristinehamn"},
  {id:"0615",name:"Krokom",city:"Krokom"},
  {id:"0214",name:"Kumla",city:"Kumla"},
  {id:"0507",name:"Kungsbacka",city:"Kungsbacka"},
  {id:"0546",name:"Kungsbacka Kungsmässan",city:"Kungsbacka"},
  {id:"0511",name:"Kungälv",city:"Kungälv"},
  {id:"0425",name:"Kavlinge",city:"Kävlinge"},
  {id:"0206",name:"Köping",city:"Köping"},
  {id:"0518",name:"Laholm",city:"Laholm"},
  {id:"0407",name:"Landskrona",city:"Landskrona"},
  {id:"0215",name:"Laxå",city:"Laxå"},
  {id:"0705",name:"Leksand",city:"Leksand"},
  {id:"0509",name:"Lerum",city:"Lerum"},
  {id:"0110",name:"Lidingö",city:"Lidingö"},
  {id:"0521",name:"Lidköping",city:"Lidköping"},
  {id:"0212",name:"Lindesberg",city:"Lindesberg"},
  {id:"0301",name:"Linköping",city:"Linköping"},
  {id:"0316",name:"Ljungby",city:"Ljungby"},
  {id:"0607",name:"Ljusdal",city:"Ljusdal"},
  {id:"0706",name:"Ludvika",city:"Ludvika"},
  {id:"0622",name:"Luleå",city:"Luleå"},
  {id:"0404",name:"Lund",city:"Lund"},
  {id:"0619",name:"Lycksele",city:"Lycksele"},
  {id:"0532",name:"Lysekil",city:"Lysekil"},
  {id:"0411",name:"Malmö City",city:"Malmö"},
  {id:"0403",name:"Malmö Emporia",city:"Malmö"},
  {id:"0402",name:"Malmö Mobilia",city:"Malmö"},
  {id:"0401",name:"Malmö Triangeln",city:"Malmö"},
  {id:"0710",name:"Malung",city:"Malung"},
  {id:"0524",name:"Mariestad",city:"Mariestad"},
  {id:"0320",name:"Markaryd",city:"Markaryd"},
  {id:"0514",name:"Marks",city:"Marks"},
  {id:"0304",name:"Mjölby",city:"Mjölby"},
  {id:"0703",name:"Mora",city:"Mora"},
  {id:"0303",name:"Motala",city:"Motala"},
  {id:"0533",name:"Munkedal",city:"Munkedal"},
  {id:"0503",name:"Mölndal",city:"Mölndal"},
  {id:"0329",name:"Mörbylånga",city:"Mörbylånga"},
  {id:"0106",name:"Nacka Forum",city:"Nacka"},
  {id:"0109",name:"Sickla",city:"Nacka"},
  {id:"0209",name:"Norberg",city:"Norberg"},
  {id:"0302",name:"Norrköping",city:"Norrköping"},
  {id:"0126",name:"Norrtälje",city:"Norrtälje"},
  {id:"0325",name:"Nybro",city:"Nybro"},
  {id:"0130",name:"Nyköping",city:"Nyköping"},
  {id:"0127",name:"Nynäshamn",city:"Nynäshamn"},
  {id:"0307",name:"Nässjö",city:"Nässjö"},
  {id:"0418",name:"Olofström",city:"Olofström"},
  {id:"0713",name:"Orsa",city:"Orsa"},
  {id:"0417",name:"Osby",city:"Osby"},
  {id:"0332",name:"Oskarshamn",city:"Oskarshamn"},
  {id:"0134",name:"Oxelösund",city:"Oxelösund"},
  {id:"0504",name:"Partille",city:"Partille"},
  {id:"0416",name:"Perstorp",city:"Perstorp"},
  {id:"0623",name:"Piteå",city:"Piteå"},
  {id:"0322",name:"Ronneby",city:"Ronneby"},
  {id:"0704",name:"Rättvik",city:"Rättvik"},
  {id:"0204",name:"Sala",city:"Sala"},
  {id:"0602",name:"Sandviken",city:"Sandviken"},
  {id:"0121",name:"Märsta",city:"Sigtuna"},
  {id:"0420",name:"Simrishamn",city:"Simrishamn"},
  {id:"0618",name:"Skellefteå",city:"Skellefteå"},
  {id:"0210",name:"Skinnskatteberg",city:"Skinnskatteberg"},
  {id:"0522",name:"Skövde",city:"Skövde"},
  {id:"0712",name:"Smedjebacken",city:"Smedjebacken"},
  {id:"0611",name:"Sollefteå",city:"Sollefteå"},
  {id:"0113",name:"Sollentuna Centrum",city:"Sollentuna"},
  {id:"0152",name:"Mall of Scandinavia",city:"Solna"},
  {id:"0114",name:"Solna",city:"Solna"},
  {id:"0423",name:"Staffanstorp",city:"Staffanstorp"},
  {id:"0510",name:"Stenungsund",city:"Stenungsund"},
  {id:"0151",name:"Bromma Blocks",city:"Stockholm"},
  {id:"0147",name:"Brommaplan",city:"Stockholm"},
  {id:"0101",name:"City",city:"Stockholm"},
  {id:"0108",name:"Farsta",city:"Stockholm"},
  {id:"0102",name:"Fältöversten",city:"Stockholm"},
  {id:"0156",name:"Globen",city:"Stockholm"},
  {id:"0155",name:"Gärdet",city:"Stockholm"},
  {id:"0162",name:"Hornstull",city:"Stockholm"},
  {id:"0164",name:"Hässelby",city:"Stockholm"},
  {id:"0103",name:"Hötorget",city:"Stockholm"},
  {id:"0116",name:"Järva",city:"Stockholm"},
  {id:"0112",name:"Kista",city:"Stockholm"},
  {id:"0154",name:"Liljeholmen",city:"Stockholm"},
  {id:"0160",name:"Lindhagensgatan",city:"Stockholm"},
  {id:"0153",name:"Marieberg",city:"Stockholm"},
  {id:"0157",name:"Skärholmen",city:"Stockholm"},
  {id:"0158",name:"Sköndal",city:"Stockholm"},
  {id:"0104",name:"Södermalm",city:"Stockholm"},
  {id:"0159",name:"Tensta",city:"Stockholm"},
  {id:"0105",name:"Vasastan",city:"Stockholm"},
  {id:"0107",name:"Vällingby",city:"Stockholm"},
  {id:"0165",name:"Älvsjö",city:"Stockholm"},
  {id:"0621",name:"Storuman",city:"Storuman"},
  {id:"0131",name:"Strängnäs",city:"Strängnäs"},
  {id:"0530",name:"Strömstad",city:"Strömstad"},
  {id:"0616",name:"Strömsund",city:"Strömsund"},
  {id:"0115",name:"Sundbyberg",city:"Sundbyberg"},
  {id:"0608",name:"Sundsvall",city:"Sundsvall"},
  {id:"0426",name:"Svedala",city:"Svedala"},
  {id:"0528",name:"Säffle",city:"Säffle"},
  {id:"0709",name:"Säter",city:"Säter"},
  {id:"0605",name:"Söderhamn",city:"Söderhamn"},
  {id:"0122",name:"Södertälje",city:"Södertälje"},
  {id:"0419",name:"Sölvesborg",city:"Sölvesborg"},
  {id:"0539",name:"Tibro",city:"Tibro"},
  {id:"0540",name:"Tidaholm",city:"Tidaholm"},
  {id:"0321",name:"Tingsryd",city:"Tingsryd"},
  {id:"0421",name:"Tomelilla",city:"Tomelilla"},
  {id:"0327",name:"Torsås",city:"Torsås"},
  {id:"0537",name:"Tranemo",city:"Tranemo"},
  {id:"0310",name:"Tranås",city:"Tranås"},
  {id:"0409",name:"Trelleborg",city:"Trelleborg"},
  {id:"0520",name:"Trollhättan",city:"Trollhättan"},
  {id:"0123",name:"Tyresö",city:"Tyresö"},
  {id:"0111",name:"Täby Centrum",city:"Täby"},
  {id:"0541",name:"Töreboda",city:"Töreboda"},
  {id:"0531",name:"Uddevalla",city:"Uddevalla"},
  {id:"0535",name:"Ulricehamn",city:"Ulricehamn"},
  {id:"0617",name:"Umeå",city:"Umeå"},
  {id:"0125",name:"Upplands Väsby",city:"Upplands Väsby"},
  {id:"0201",name:"Uppsala City",city:"Uppsala"},
  {id:"0202",name:"Uppsala Gränby",city:"Uppsala"},
  {id:"0313",name:"Vaggeryd",city:"Vaggeryd"},
  {id:"0711",name:"Vansbro",city:"Vansbro"},
  {id:"0515",name:"Varberg",city:"Varberg"},
  {id:"0129",name:"Vaxholm",city:"Vaxholm"},
  {id:"0422",name:"Vellinge",city:"Vellinge"},
  {id:"0308",name:"Vetlanda",city:"Vetlanda"},
  {id:"0620",name:"Vilhelmina",city:"Vilhelmina"},
  {id:"0330",name:"Vimmerby",city:"Vimmerby"},
  {id:"0534",name:"Vänersborg",city:"Vänersborg"},
  {id:"0124",name:"Värmdö",city:"Värmdö"},
  {id:"0312",name:"Värnamo",city:"Värnamo"},
  {id:"0334",name:"Gamleby",city:"Västervik"},
  {id:"0333",name:"Västervik",city:"Västervik"},
  {id:"0205",name:"Västerås",city:"Västerås"},
  {id:"0317",name:"Växjö",city:"Växjö"},
  {id:"0408",name:"Ystad",city:"Ystad"},
  {id:"0319",name:"Älmhult",city:"Älmhult"},
  {id:"0714",name:"Älvdalen",city:"Älvdalen"},
  {id:"0519",name:"Ängelholm",city:"Ängelholm"},
  {id:"0529",name:"Åmål",city:"Åmål"},
  {id:"0614",name:"Åre",city:"Åre"},
  {id:"0414",name:"Åstorp",city:"Åstorp"},
  {id:"0211",name:"Örebro",city:"Örebro"},
  {id:"0612",name:"Örnsköldsvik",city:"Örnsköldsvik"},
  {id:"0613",name:"Östersund",city:"Östersund"},
];

function loadStores() {
  allStores = STORES;
  const def = allStores.find(s => s.id === '0151');
  if (def) document.getElementById('store-input').value = def.name + ' – ' + def.city;
  selectedStoreId = '0151';
}

function getFilteredStores() {
  const q = document.getElementById('store-input').value.toLowerCase();
  return allStores.filter(s =>
    (s.name||'').toLowerCase().includes(q) || (s.city||'').toLowerCase().includes(q)
  ).slice(0, 40);
}

function renderDropdown(stores) {
  const dd = document.getElementById('store-dropdown');
  if (!stores.length) { dd.classList.add('hidden'); return; }
  dd.innerHTML = stores.map((s, i) =>
    `<div class="store-option${i===highlightedIdx?' highlighted':''}" data-id="${s.id}"
      onmousedown="selectStore('${s.id}', '${(s.name+' – '+s.city).replace(/'/g,"\\'")}')">
      ${s.name}<div class="city">${s.city}</div>
    </div>`
  ).join('');
  dd.classList.remove('hidden');
}

function filterStores() {
  highlightedIdx = -1;
  renderDropdown(getFilteredStores());
}

function openDropdown() {
  highlightedIdx = -1;
  renderDropdown(getFilteredStores());
}

function closeDropdown() {
  setTimeout(() => document.getElementById('store-dropdown').classList.add('hidden'), 150);
}

function selectStore(id, label) {
  selectedStoreId = id;
  document.getElementById('store-input').value = label;
  document.getElementById('store-dropdown').classList.add('hidden');
}

function storeKeydown(e) {
  const stores = getFilteredStores();
  if (e.key === 'ArrowDown') { highlightedIdx = Math.min(highlightedIdx+1, stores.length-1); renderDropdown(stores); e.preventDefault(); }
  else if (e.key === 'ArrowUp') { highlightedIdx = Math.max(highlightedIdx-1, 0); renderDropdown(stores); e.preventDefault(); }
  else if (e.key === 'Enter' && highlightedIdx >= 0) {
    const s = stores[highlightedIdx];
    selectStore(s.id, s.name + (s.city ? ' – '+s.city : ''));
    e.preventDefault();
  }
}

// ── Hämta sortiment ────────────────────────────────────────────
function setProgress(pct, msg, indeterminate = false) {
  const fillStyle = indeterminate
    ? 'width:40%;animation:slide 1.2s ease-in-out infinite'
    : `width:${pct}%`;
  document.getElementById('content').innerHTML = `
    <div class="progress-card">
      <h3>Alice letar...</h3>
      <p>${msg}</p>
      <div class="pbar"><div class="pfill" style="${fillStyle}"></div></div>
      <div class="ptext">${indeterminate ? 'Kollar lagerstatus i butiken...' : pct+'%'}</div>
    </div>`;
}

async function startFetch() {
  if (!selectedStoreId) { alert('Välj en butik först.'); return; }
  const btn = document.getElementById('fetch-btn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spin"></span> Letar...';
  document.getElementById('stats').style.display = 'none';
  wines = [];

  try {
    setProgress(10, 'Hämtar sortiment och kollar lager i butiken — tar 15–20 sekunder...', true);
    const r = await fetch(`/api/systembolaget?storeId=${selectedStoreId}`);
    if (!r.ok) throw new Error(`Serverfel: ${r.status}`);
    const data = await r.json();
    if (!r.ok) throw new Error(`Serverfel: ${r.status}`);
    const data = await r.json();
    if (data.error) throw new Error(data.error);

    setProgress(90, `Kollade lager för ${data.totalFetched || '?'} viner — ${data.totalInStock || 0} finns i butiken...`);
    let fetched = data.products || [];
    if (!fetched.length) throw new Error('Inga viner i lager på den butiken just nu.');
    wines = fetched.filter(w => w.productNameBold || w.productNameThin);

    setProgress(100, 'Klart!');
    updateStats();
    renderWines();
    document.getElementById('stats').style.display = 'grid';
  } catch(err) {
    document.getElementById('content').innerHTML = `
      <div class="msg"><div class="mi">⚠️</div><h3>Något gick fel</h3><p>${err.message}</p></div>`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = '🌿 Botanisera';
  }
}

// ── Info-sökning via Claude ────────────────────────────────────
async function fetchInfo(productId) {
  const btn = document.getElementById('info-btn-'+productId);
  const panel = document.getElementById('info-panel-'+productId);
  const wine = wines.find(w => w.productId === productId);
  if (!wine) return;

  btn.classList.add('loading');
  btn.textContent = '⏳ Söker...';
  panel.innerHTML = '<em style="color:var(--hint);font-size:13px;">Söker information...</em>';
  panel.style.display = 'block';

  const wineName = [wine.productNameBold, wine.productNameThin, wine.vintage].filter(Boolean).join(' ');
  const producer = wine.producerName || '';
  const country = wine.country || '';
  const grapes = (wine.grapes||[]).join(', ');

  try {
    const r = await fetch('/api/claude', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 600,
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{
          role: 'user',
          content: `Search for information about this wine: "${wineName}" by ${producer}, ${country}${grapes ? ', grapes: '+grapes : ''}.

Search broadly — wine critics, importer notes, wine blogs, any source. Do not focus on any specific rating site.

Reply in Swedish with 3-5 sentences. Include:
- What kind of wine this is and its character
- Taste and aroma
- Food pairing or when to drink it
- A score or rating only if you naturally come across one — don't search specifically for it

Tone: knowledgeable but casual, like a sommelier friend. No bullet points, just flowing text.`
        }]
      })
    });
    const data = await r.json();
    if (data.error) throw new Error(data.error.message || data.error);
    const text = (data.content||[]).filter(b => b.type==='text').map(b => b.text).join('').trim();
    panel.innerHTML = `<div>${text}</div><div class="info-source">via Claude · webben</div>`;
  } catch(e) {
    panel.innerHTML = `<em style="color:var(--hint);font-size:13px;">Kunde inte hämta info: ${e.message}</em>`;
  } finally {
    btn.classList.remove('loading');
    btn.innerHTML = '✦ Info';
  }
}

// ── Hjälpfunktioner ────────────────────────────────────────────
function getType(w) {
  const c = (w.categoryLevel2||'').toLowerCase();
  if (c.includes('rött')) return 'Rött vin';
  if (c.includes('vitt')||c.includes('vit')) return 'Vitt vin';
  if (c.includes('rosé')||c.includes('rose')) return 'Rosé';
  if (c.includes('mousserande')||c.includes('champagne')||c.includes('cava')||c.includes('prosecco')) return 'Mousserande';
  if (c.includes('dessert')||c.includes('port')||c.includes('sött')) return 'Dessert';
  return w.categoryLevel2 || 'Vin';
}

function systUrl(w) {
  const name = [w.productNameBold, w.productNameThin]
    .filter(Boolean).join('-').toLowerCase()
    .replace(/[^a-z0-9åäöéèêàüï]+/g,'-').replace(/^-+|-+$/g,'');
  const id = (w.productNumber||'').toString();
  return `https://www.systembolaget.se/produkt/vin/${name}-${id}/`;
}

function updateStats() {
  const prices = wines.map(w => parseFloat(w.price)).filter(p => p > 0);
  document.getElementById('s-count').textContent = wines.length;
  document.getElementById('s-countries').textContent = new Set(wines.map(w=>w.country).filter(Boolean)).size;
  document.getElementById('s-min').textContent = prices.length ? Math.min(...prices).toFixed(0)+' kr' : '–';
  document.getElementById('s-max').textContent = prices.length ? Math.max(...prices).toFixed(0)+' kr' : '–';
}

function renderWines() {
  if (!wines.length) return;
  const q = (document.getElementById('search').value||'').toLowerCase();
  const typeF = document.getElementById('type-f').value;
  const sort = document.getElementById('sort-s').value;

  let list = wines.filter(w => {
    const hay = `${w.productNameBold||''} ${w.productNameThin||''} ${w.producerName||''} ${w.country||''}`.toLowerCase();
    return (!q||hay.includes(q)) && (!typeF||getType(w)===typeF);
  });

  if (sort==='price_asc') list.sort((a,b)=>parseFloat(a.price||0)-parseFloat(b.price||0));
  else if (sort==='price_desc') list.sort((a,b)=>parseFloat(b.price||0)-parseFloat(a.price||0));
  else if (sort==='country') list.sort((a,b)=>(a.country||'').localeCompare(b.country||'','sv'));
  else list.sort((a,b)=>(a.productNameBold||'').localeCompare(b.productNameBold||'','sv'));

  if (!list.length) {
    document.getElementById('content').innerHTML = '<div class="msg"><div class="mi">🔍</div><h3>Inga träffar</h3><p>Prova ett annat filter.</p></div>';
    return;
  }

  const header = `<div class="list-header">
    <span class="lh-count">${list.length} viner${list.length<wines.length?' (filtrerat)':''}</span>
    <span class="lh-note">Tryck ✦ Info för smakprofil</span>
  </div>`;

  const cards = list.map((w, idx) => {
    const type = getType(w);
    const price = w.price ? parseFloat(w.price).toFixed(0)+' kr' : '';
    const vol = w.volume ? w.volume+' ml' : '';
    const alc = w.alcoholPercentage ? parseFloat(w.alcoholPercentage).toFixed(1)+'%' : '';
    const origin = [w.originLevel1, w.originLevel2].filter(Boolean).join(', ');
    const meta = [w.country, origin, w.vintage, vol, alc].filter(Boolean).join(' · ');
    const grapes = (w.grapes||[]).join(', ');
    const imgUrl = w.productId ? `https://product-cdn.systembolaget.se/productimages/${w.productId}/${w.productId}_400.png` : '';
    const typeIcon = type.includes('Mouss')?'🥂':type.includes('Rosé')?'🌸':type.includes('Vitt')?'🍾':type.includes('Dessert')?'🍯':'🍷';

    return `<div class="wine-card">
      <div class="wine-img">
        ${imgUrl
          ? `<img src="${imgUrl}" alt="" onerror="this.parentElement.innerHTML='<span class=\\'no-img\\'>${typeIcon}</span>'">`
          : `<span class="no-img">${typeIcon}</span>`}
      </div>
      <div class="wine-body">
        <div class="wine-name">${w.productNameBold||''}${w.productNameThin?` <span class="wine-thin">${w.productNameThin}</span>`:''}</div>
        ${w.producerName?`<div class="wine-producer">${w.producerName}</div>`:''}
        <div class="wine-meta">${meta}</div>
        ${grapes?`<div class="wine-meta">🍇 ${grapes}</div>`:''}
        ${w.taste?`<div class="wine-taste">${w.taste}</div>`:''}
        <div class="wine-tags">
          ${type?`<span class="tag tag-type">${type}</span>`:''}
          ${w.country?`<span class="tag tag-country">${w.country}</span>`:''}
          ${w.isOrganic?`<span class="tag tag-eco">🌿 Ekologisk</span>`:''}
        </div>
        <div id="info-panel-${w.productId}" class="info-panel" style="display:none;"></div>
      </div>
      <div class="wine-right">
        <div class="price">${price}</div>
        <button class="info-btn" id="info-btn-${w.productId}" onclick="fetchInfo('${w.productId}')">✦ Info</button>
        <a class="syst-btn" href="${systUrl(w)}" target="_blank">🛒 Bolaget</a>
      </div>
    </div>`;
  }).join('');

  document.getElementById('content').innerHTML = header + `<div class="wine-list">${cards}</div>`;
}

// Init
loadStores();
</script>
</body>
</html>
