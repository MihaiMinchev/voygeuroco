/* ── DATA ── */
const places = [
  { id: 1, name: "Cathedral of the Assumption", category: "Tourist Place", description: "One of Bulgaria's largest cathedrals, consecrated in 1886. Its soaring neo-Byzantine domes dominate the Varna skyline and the interior is covered in spectacular frescoes and golden iconostases.", city: "Varna", lat: 43.2042, lng: 27.9163, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Varna_-_Cathedral_%281%29.jpg/800px-Varna_-_Cathedral_%281%29.jpg" },
  { id: 2, name: "Sea Garden", category: "Tourist Place", description: "An 80-hectare coastal park along the Black Sea established in the 1880s. Home to the Dolphinarium, Summer Theatre, Naval Museum, and miles of beautiful seaside walkways.", city: "Varna", lat: 43.2108, lng: 27.9333, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Varna_sea_garden.jpg/1280px-Varna_sea_garden.jpg" },
  { id: 3, name: "Archaeological Museum", category: "Tourist Place", description: "Houses the world's oldest processed gold treasure — the Varna Chalcolithic Necropolis collection, dating to 4600–4200 BC. An essential visit for anyone interested in ancient history.", city: "Varna", lat: 43.2089, lng: 27.9167, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Varna_Archaeological_Museum.jpg/800px-Varna_Archaeological_Museum.jpg" },
  { id: 4, name: "Roman Thermae", category: "Tourist Place", description: "The largest ancient Roman baths on the Balkan Peninsula, built in the 2nd–3rd century AD. The ruins cover 7,000 sq metres and still stand nearly 20 metres high in places.", city: "Varna", lat: 43.2081, lng: 27.9126, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Roman_Thermae_-_Varna_-_panoramio.jpg/800px-Roman_Thermae_-_Varna_-_panoramio.jpg" },
  { id: 5, name: "Euxinograd Palace", category: "Tourist Place", description: "A stunning Bulgarian royal residence set in a 120-hectare park on the Black Sea coast, built in 1882. Famous for its French-style gardens and award-winning estate winery.", city: "Varna", lat: 43.2583, lng: 27.9017, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Evksinograd_2.jpg/800px-Evksinograd_2.jpg" },
  { id: 6, name: "Varna Dolphinarium", category: "Tourist Place", description: "The oldest and largest dolphinarium in Bulgaria, open since 1984. Located in the Sea Garden, it hosts daily dolphin and seal performances in a spectacular Black Sea setting.", city: "Varna", lat: 43.2170, lng: 27.9390, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Varna_Dolphinarium_exterior.jpg/800px-Varna_Dolphinarium_exterior.jpg" },
  { id: 7, name: "Varna Farmers Market", category: "Local Business", description: "A vibrant daily open-air market in the heart of the city where local producers sell seasonal vegetables, artisan cheeses, honey, dried herbs, and traditional Bulgarian crafts.", city: "Varna", lat: 43.2097, lng: 27.9174, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Varna_Central_Market.jpg/800px-Varna_Central_Market.jpg" }
];

/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;

let planDays = 2;
let planDiff = 'moderate';
let planInterests = new Set(['history', 'food']);

/* ── NAVIGATION ── */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  const navLink = document.querySelector('[data-page="' + page + '"]');
  if (navLink) navLink.classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'directory') renderDirectory();
  if (page === 'map') initMap();
  if (page === 'blog') renderBlog?.();
  window.location.hash = page;
}

window.addEventListener('hashchange', () => {
  const h = window.location.hash.replace('#', '') || 'home';
  if (['home', 'directory', 'map', 'blog', 'plan'].includes(h)) navigate(h);
});

/* ── DIRECTORY ── */
function setDirFilter(f) { dirFilter = f; renderDirectory(); }
function renderDirectory() {
  const q = (document.getElementById('dir-search-input')?.value || '').toLowerCase();
  const filtered = places.filter(p => (dirFilter === 'all' || p.category === dirFilter) &&
                                     (!q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)));
  const grid = document.getElementById('dir-grid');
  if (!grid) return;
  if (filtered.length === 0) { grid.innerHTML = '<div class="dir-empty">No places found.</div>'; return; }
  grid.innerHTML = filtered.map((p,i) => `<div class="place-card" onclick="navigate('map'); setTimeout(() => selectPlace(${p.id}),400)">
    <div class="place-card-img" style="background-image:url('${p.image}');"></div>
    <div class="place-card-header"><div><span>${p.category}</span><div>${p.name}</div></div><span>${i+1}</span></div>
    <div class="place-card-body"><p>${p.description}</p></div></div>`).join('');
}

/* ── MAP ── */
function getMarkerColor(cat){ return cat==='Tourist Place'?'#c9a84c':cat==='Cafe'?'#5dcaa5':cat==='Restaurant'?'#e07a55':'#b0a8e8'; }
function createMarkerIcon(cat){ const color=getMarkerColor(cat); return L.divIcon({ className:'', html:`<svg width="28" height="36" viewBox="0 0 28 36"><path d="M14 0C6.27 0 0 6.27 0 14c0 9.9 14 22 14 22S28 23.9 28 14C28 6.27 21.73 0 14 0z" fill="${color}"/><circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/></svg>`, iconSize:[28,36], iconAnchor:[14,36], popupAnchor:[0,-36] }); }
function initMap(){
  if(mapInitialized) return; mapInitialized=true;
  leafletMap=L.map('leaflet-map').setView([43.2141,27.9212],13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap',maxZoom:19}).addTo(leafletMap);
  places.forEach(p=>{
    const marker=L.marker([p.lat,p.lng],{icon:createMarkerIcon(p.category)}).addTo(leafletMap)
      .bindPopup(`<div>${p.name}</div><div>${p.category}</div><div>${p.description.substring(0,100)}…</div>`);
    mapMarkers.push({id:p.id,marker,place:p});
  });
}

/* ── AI PLANNER ── */
function updateDays(val){ planDays=parseInt(val); document.getElementById('days-display').textContent=val+' days'; }
function setDiff(d){ planDiff=d; }
function toggleInterest(k){ planInterests.has(k)?planInterests.delete(k):planInterests.add(k); }

/* ── ERROR UI ── */
function showError(msg){ const el=document.getElementById('plan-error'); el.textContent=msg; el.classList.add('visible'); }
function hideError(){ document.getElementById('plan-error').classList.remove('visible'); }

/* ── GENERATE PLAN ── */
async function generatePlan(){
  if(planInterests.size===0){ showError('Please select at least one interest.'); return; }
  hideError();
  const btn=document.getElementById('plan-btn');
  const loading=document.getElementById('plan-loading');
  const result=document.getElementById('plan-result-body');
  const meta=document.getElementById('plan-result-meta');
  btn.disabled=true; loading.classList.add('visible'); result.innerHTML='';
  const interestMap={
    history:'Historical Sites (Cathedral of the Assumption, Roman Thermae, Archaeological Museum)',
    food:'Local food markets and traditional Bulgarian cuisine spots (Varna Farmers Market and local taverns)',
    culture:'Cultural Events & Venues (Sea Garden Summer Theatre, Dolphinarium, Varna Farmers Market)',
    romantic:'Romantic Spots (Euxinograd Palace & vineyard, Sea Garden sunset walk, Black Sea clifftop)',
    views:'Scenic Views (Sea Garden clifftop, Black Sea coast, Euxinograd gardens, Cathedral Square)'
  };
  const selectedInterests=[...planInterests].map(k=>interestMap[k]).join('\n- ');
  const diffText=planDiff==='relaxed'?'Relaxed (2–3 places/day)':
                 planDiff==='moderate'?'Moderate (4–5 places/day)':
                 'Intensive (6+ places/day)';
  const placesContext=places.map(p=>`- ${p.name} (${p.category}): ${p.description}`).join('\n');
  const now=new Date(); const monthName=now.toLocaleString('en-US',{month:'long'}); const year=now.getFullYear(); const month=now.getMonth()+1;
  const seasonInfo=month>=6&&month<=8?`SUMMER (${monthName}): Peak season, hot weather, beaches open.`:
                   month>=9&&month<=11?`AUTUMN (${monthName}): Shoulder season, warm and pleasant.`:
                   month>=12||month<=2?`WINTER (${monthName}): Off-season, cold weather.`:`SPRING (${monthName}): Mild weather.`;
  const prompt=`You are an expert AI travel guide for Varna, Bulgaria. Respond only in English.

CURRENT SEASON CONTEXT:
${seasonInfo}

Places available in our directory:
${placesContext}

Visitor wants a trip plan:
- Number of days: ${planDays}
- Pace: ${diffText}
- Interests:
- ${selectedInterests}

Create a detailed day-by-day itinerary (Day 1, Day 2, etc.) using places from the directory and supplementing with additional Varna recommendations suited to the current season.

For each day include: Morning, Lunch, Afternoon, and Evening sections. Include practical tips — transport, opening hours, approximate prices in Euros (€), and insider seasonal advice.

Format using HTML: use <h2> for each day title, <h3> for time-of-day sections, <p> for descriptions, <ul><li> for tips.`;

  try{
    const RENDER_URL="https://zuirhbackend.onrender.com";
    const response=await fetch(`${RENDER_URL}/api/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt})});
    if(!response.ok){ if(response.status===429) throw new Error('rate_limit'); throw new Error('api_error'); }
    const data=await response.json();
    const text=data.result||'No response from AI.';
    result.innerHTML=text;
    meta.textContent=`${planDays} ${planDays===1?'day':'days'} · ${planDiff.charAt(0).toUpperCase()+planDiff.slice(1)} pace · ${planInterests.size} interest${planInterests.size!==1?'s':''} · ${monthName} ${year}`;
    document.getElementById('plan-result').classList.add('visible');
    result.scrollIntoView({behavior:'smooth',block:'start'});
  }catch(err){
    if(err.message==='rate_limit') showError('Too many requests — wait 15–20 seconds.');
    else showError('Something went wrong while generating your plan. Please try again.');
    console.error(err);
  }finally{ btn.disabled=false; loading.classList.remove('visible'); }
}

/* ── INIT ── */
document.getElementById('plan-btn')?.addEventListener('click',generatePlan);
