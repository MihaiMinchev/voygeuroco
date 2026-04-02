/* ── DATA ── */
const attractions = [
  { id: 1,  name: "Cathedral of the Assumption",  category: "Historical Spots",    description: "One of Bulgaria's largest cathedrals, consecrated in 1886. Its soaring neo-Byzantine domes dominate the Varna skyline and the interior is covered in spectacular frescoes and golden iconostases.", city: "Varna", lat: 43.2047, lng: 27.9100, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Varna_-_Cathedral_%281%29.jpg/800px-Varna_-_Cathedral_%281%29.jpg" },
  { id: 2,  name: "Sea Garden",                   category: "Scenic Places",       description: "An 80‑hectare coastal park along the Black Sea established in the 1880s. Home to the Dolphinarium, Summer Theatre, Naval Museum, and miles of beautiful seaside walkways.", city: "Varna", lat: 43.2045, lng: 27.9222, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Varna_sea_garden.jpg/1280px-Varna_sea_garden.jpg" },
  { id: 3,  name: "Archaeological Museum",         category: "Historical Spots",    description: "Houses the world's oldest processed gold treasure — the Varna Chalcolithic Necropolis collection, dating to 4600–4200 BC. An essential visit for anyone interested in ancient history.", city: "Varna", lat: 43.2074, lng: 27.9149, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Varna_Archaeological_Museum.jpg/800px-Varna_Archaeological_Museum.jpg" },
  { id: 4,  name: "Roman Thermae",                category: "Historical Spots",    description: "The largest ancient Roman baths on the Balkan Peninsula, built in the 2nd–3rd century AD. The ruins cover 7,000 sq metres and still stand nearly 20 metres high in places.", city: "Varna", lat: 43.2003, lng: 27.9175, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Roman_Thermae_-_Varna_-_panoramio.jpg/800px-Roman_Thermae_-_Varna_-_panoramio.jpg" },
  { id: 5,  name: "Euxinograd Palace",            category: "Romantic Places",     description: "A stunning Bulgarian royal residence set in a large park on the Black Sea coast, built in 1882. Famous for its French‑style gardens and award‑winning estate winery.", city: "Varna", lat: 43.2192, lng: 27.9892, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Evksinograd_2.jpg/800px-Evksinograd_2.jpg" },
  { id: 6,  name: "Varna Dolphinarium",           category: "Scenic Places",       description: "The oldest and largest dolphinarium in Bulgaria, open since 1984. Located in the Sea Garden, it hosts daily dolphin and seal performances in a spectacular Black Sea setting.", city: "Varna", lat: 43.2120, lng: 27.9472, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Varna_Dolphinarium_exterior.jpg/800px-Varna_Dolphinarium_exterior.jpg" },
  { id: 7,  name: "Varna Farmers Market",         category: "Local Food & Drinks", description: "A vibrant daily open‑air market in the heart of the city where local producers sell seasonal vegetables, artisan cheeses, honey, dried herbs, and traditional Bulgarian crafts.", city: "Varna", lat: 43.2065, lng: 27.9056, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Varna_Central_Market.jpg/800px-Varna_Central_Market.jpg" },
  { id: 8,  name: "Aladzha Monastery",            category: "Historical Spots",    description: "A medieval Orthodox cave monastery in the forest near Varna, with serene surroundings and historical significance.", city: "Varna", lat: 43.2778, lng: 28.0164, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Aladzha_monastery.jpg/800px-Aladzha_monastery.jpg" },
  { id: 9,  name: "Butterfly House Varna",        category: "Hidden Gems",         description: "A special museum with live butterflies in a beautiful garden. Quiet and colorful, perfect for families and photography.", city: "Varna", lat: 43.2327, lng: 28.0068, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Butterfly_House_Varna.jpg/800px-Butterfly_House_Varna.jpg" },
  { id: 10, name: "Retro Museum Varna",           category: "Hidden Gems",         description: "A small museum showcasing retro cars, motorcycles, and 20th-century memorabilia. Off the standard tourist track.", city: "Varna", lat: 43.2163, lng: 27.9048, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Retro_Museum_Varna.jpg/800px-Retro_Museum_Varna.jpg" },
  { id: 11, name: "Sea Casino Varna",             category: "Romantic Places",     description: "Historic building in the Sea Garden hosting exhibitions, concerts, and cultural events. Offers a great view of the sea.", city: "Varna", lat: 43.2019, lng: 27.9238, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Varna_Sea_Casino.jpg/800px-Varna_Sea_Casino.jpg" },
  { id: 12, name: "Asparuhov Park & Bridge",      category: "Scenic Places",       description: "A scenic park and bridge offering panoramic views and peaceful walking trails, away from the main tourist crowds.", city: "Varna", lat: 43.1852, lng: 27.8841, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Asparuhov_Bridge_Varna.jpg/800px-Asparuhov_Bridge_Varna.jpg" },
  { id: 13, name: "Varna Zoo",                   category: "Scenic Places",       description: "The central zoo of Varna – classic and well-known, located in the Sea Garden.", city: "Varna", lat: 43.2147, lng: 27.9353, image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Varna_Zoo.jpg" },
  { id: 14, name: "Talyana Art District",         category: "Hidden Gems",         description: "Street alley with graffiti and art installations in the historic center.", city: "Varna", lat: 43.2015, lng: 27.9150, image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Street_Art_Varna.jpg" },
  { id: 15, name: "Small Roman Thermae",          category: "Historical Spots",    description: "Small archaeological ruins of the Roman forum, a quiet spot in the Greek Quarter.", city: "Varna", lat: 43.2014, lng: 27.9201, image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Varna_Roman_Forum.jpg" },
  { id: 16, name: "St. Nicholas Church",          category: "Historical Spots",    description: "Beautiful Orthodox church near the pedestrian zone with a peaceful atmosphere.", city: "Varna", lat: 43.2025, lng: 27.9189, image: "https://upload.wikimedia.org/wikipedia/commons/0/02/St_Nicholas_Varna.jpg" },
  { id: 17, name: "Naval Museum Yard",            category: "Hidden Gems",         description: "Outdoor part of the Naval Museum featuring the Drazki ship and helicopters.", city: "Varna", lat: 43.2008, lng: 27.9221, image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Maritime_Museum_Varna.jpg" },
  { id: 18, name: "Sea Garden Alpinarium",        category: "Scenic Places",       description: "Hidden rocky garden with bridges, ideal for a peaceful walk.", city: "Varna", lat: 43.2085, lng: 27.9302, image: "https://upload.wikimedia.org" },
  { id: 19, name: "Varna State Archives",         category: "Historical Spots",    description: "Stunning historic building, a masterpiece of early 20th-century architecture.", city: "Varna", lat: 43.2038, lng: 27.9125, image: "https://upload.wikimedia.org" },
  { id: 20, name: "Underground Basilica Ruins",   category: "Historical Spots",    description: "Ancient basilica remains located below the modern street level.", city: "Varna", lat: 43.2018, lng: 27.9180, image: "https://upload.wikimedia.org" },
  { id: 21, name: "The Dragon Sculpture",         category: "Romantic Places",     description: "Bronze sculpture of two dragons, a famous local hidden spot near the sea.", city: "Varna", lat: 43.2005, lng: 27.9228, image: "https://upload.wikimedia.org" },
  { id: 22, name: "City Art Gallery",             category: "Hidden Gems",         description: "The Boris Georgiev gallery, set in a historic Gothic-style building.", city: "Varna", lat: 43.2068, lng: 27.9172, image: "https://upload.wikimedia.org" },
  { id: 23, name: "The Re-Born Tree",             category: "Hidden Gems",         description: "Artistic wood carving on a dead tree trunk, a unique sight in the park.", city: "Varna", lat: 43.2062, lng: 27.9268, image: "https://upload.wikimedia.org" },
  { id: 24, name: "Officer's Beach Viewpoint",    category: "Romantic Places",     description: "Panoramic terrace with an incredible view of the sea bay.", city: "Varna", lat: 43.2162, lng: 27.9405, image: "https://upload.wikimedia.org" },
  { id: 25, name: "Eco Park Varna",               category: "Scenic Places",       description: "University Botanical Garden – a vast park perfect for a nature escape.", city: "Varna", lat: 43.2325, lng: 28.0018, image: "https://upload.wikimedia.org" }
];
/* ── STATE ── */
let dirFilter = 'all';
let mapFilter = 'all';
let leafletMap = null;
let mapMarkers = [];
let selectedPlaceId = null;
let mapInitialized = false;



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
  if (page === 'blog') renderBlog();
  window.location.hash = page;
}

window.addEventListener('hashchange', () => {
  const h = window.location.hash.replace('#', '') || 'home';
  if (['home', 'directory', 'map', 'blog', 'plan'].includes(h)) navigate(h);
});

/* ── DIRECTORY ── */
function setDirFilter(f) {
  dirFilter = f;
  document.querySelectorAll('#page-directory .pill').forEach(p => {
    p.classList.toggle('active', p.dataset.filter === f);
  });
  renderDirectory();
}

function renderDirectory() {
  const q = (document.getElementById('dir-search-input').value || '').toLowerCase();
  const filtered = attractions.filter(p => {
    const matchCat = dirFilter === 'all' || p.category === dirFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  const grid = document.getElementById('dir-grid');
  if (!filtered.length) {
    grid.innerHTML = '<div class="dir-empty">No places found. Try a different search or filter.</div>';
    return;
  }
  grid.innerHTML = filtered.map((p,i) => {
    const catClass = p.category === 'Tourist Place' ? 'cat-tourist' : p.category === 'Cafe' ? 'cat-cafe' : p.category === 'Restaurant' ? 'cat-restaurant' : 'cat-business';
    return `<div class="place-card" onclick="navigate('map'); setTimeout(() => selectPlace(${p.id}), 400)">
      <div class="place-card-img" style="background-image: url('${p.image}'), linear-gradient(135deg, #1a2f45 0%, #0d1b2a 100%)"></div>
      <div class="place-card-header">
        <div><span class="place-card-cat ${catClass}">${p.category}</span><div class="place-card-name">${p.name}</div></div>
        <span class="place-card-number">${String(i+1).padStart(2,'0')}</span>
      </div>
      <div class="place-card-body">
        <p class="place-card-desc">${p.description}</p>
        <div class="place-card-footer">
          <svg viewBox="0 0 24 24"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>
          ${p.city}, Bulgaria
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ── MAP ── */
function getMarkerColor(cat) {
  return cat === 'Tourist Place' ? '#c9a84c' : cat === 'Cafe' ? '#5dcaa5' : cat === 'Restaurant' ? '#e07a55' : '#b0a8e8';
}

function createMarkerIcon(cat) {
  const color = getMarkerColor(cat);
  return L.divIcon({
    className: '',
    html: `<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.27 0 0 6.27 0 14c0 9.9 14 22 14 22S28 23.9 28 14C28 6.27 21.73 0 14 0z" fill="${color}"/><circle cx="14" cy="14" r="5" fill="white" opacity="0.9"/></svg>`,
    iconSize: [28,36], iconAnchor: [14,36], popupAnchor: [0,-36]
  });
}

function initMap() {
  if (mapInitialized) return;
  mapInitialized = true;
  setTimeout(() => {
    leafletMap = L.map('leaflet-map').setView([43.2141, 27.9212], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap', maxZoom: 19 }).addTo(leafletMap);
    attractions.forEach(p => {
      const marker = L.marker([p.lat, p.lng], { icon: createMarkerIcon(p.category) })
        .addTo(leafletMap)
        .bindPopup(`<div class="custom-popup-name">${p.name}</div><div class="custom-popup-cat" style="color:${getMarkerColor(p.category)}">${p.category}</div><div class="custom-popup-desc">${p.description.substring(0,100)}…</div>`, { maxWidth: 240 })
        .on('click', () => highlightSidebarItem(p.id));
      mapMarkers.push({ id: p.id, marker, place: p });
    });
    renderMapList();
  }, 200);
}

function setMapFilter(f) {
  mapFilter = f;
  document.querySelectorAll('#page-map .map-pill').forEach(p => p.classList.toggle('active', p.dataset.filter === f));
  filterMapPlaces();
}

function filterMapPlaces() {
  const q = (document.getElementById('map-search-input').value || '').toLowerCase();
  const filtered = attractions.filter(p => {
    const matchCat = mapFilter === 'all' || p.category === mapFilter;
    const matchQ = !q || p.name.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  mapMarkers.forEach(({ id, marker }) => {
    const visible = filtered.some(p => p.id === id);
    if (visible) { if (!leafletMap.hasLayer(marker)) marker.addTo(leafletMap); }
    else { if (leafletMap.hasLayer(marker)) leafletMap.removeLayer(marker); }
  });
  document.getElementById('map-count').textContent = `${filtered.length} place${filtered.length !== 1 ? 's' : ''} shown`;
  renderMapList(filtered);
}

function renderMapList(list) {
  const data = list || attractions;
  const container = document.getElementById('map-places-list');
  container.innerHTML = data.map(p => {
    const dotClass = p.category === 'Tourist Place' ? 'dot-tourist' : p.category === 'Cafe' ? 'dot-cafe' : p.category === 'Restaurant' ? 'dot-restaurant' : 'dot-business';
    return `<div class="map-place-item${selectedPlaceId === p.id ? ' selected' : ''}" id="map-item-${p.id}" onclick="selectPlace(${p.id})">
      <div class="map-place-dot ${dotClass}"></div>
      <div class="map-place-info"><div class="map-place-name">${p.name}</div><div class="map-place-cat">${p.category}</div></div>
    </div>`;
  }).join('');
}

function selectPlace(id) {
  const p = attractions.find(x => x.id === id);
  if (!p) return;
  selectedPlaceId = id;
  if (leafletMap) {
    leafletMap.setView([p.lat, p.lng], 16, { animate: true });
    const m = mapMarkers.find(x => x.id === id);
    if (m) m.marker.openPopup();
  }
  document.getElementById('map-selected-name').textContent = p.name;
  document.getElementById('map-selected-coords').textContent = `${p.lat.toFixed(4)}° N, ${p.lng.toFixed(4)}° E`;
  highlightSidebarItem(id);
}

function highlightSidebarItem(id) {
  selectedPlaceId = id;
  document.querySelectorAll('.map-place-item').forEach(el => el.classList.remove('selected'));
  const el = document.getElementById('map-item-' + id);
  if (el) { el.classList.add('selected'); el.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }
}

/* ── GLOBAL STATE ── */
let planDays = 2;
let planDiff = 'moderate';
let planInterests = new Set(['history']);

/* ── AI PLANNER FUNCTIONS ── */
function updateDays(val) {
  planDays = parseInt(val);
  const pct = ((val - 1) / 6 * 100).toFixed(1);
  const slider = document.getElementById('days-slider');
  slider.style.setProperty('--pct', pct + '%');
  document.getElementById('days-display').textContent = val == 1 ? '1 day' : val + ' days';
  document.querySelectorAll('.days-tick').forEach((t, i) => t.classList.toggle('active', i + 1 == val));
}

function setDays(val) {
  document.getElementById('days-slider').value = val;
  updateDays(val);
}

function setDiff(d) {
  planDiff = d;
  ['relaxed','moderate','intensive'].forEach(opt => {
    document.getElementById('diff-' + opt).classList.toggle('selected', opt === d);
  });
}

function toggleInterest(key) {
  const el = document.getElementById('int-' + key);
  if (planInterests.has(key)) {
    planInterests.delete(key);
    el.classList.remove('selected');
  } else {
    planInterests.add(key);
    el.classList.add('selected');
  }
}

function showError(msg) {
  const el = document.getElementById('plan-error');
  el.textContent = msg;
  el.classList.add('visible');
}

function hideError() {
  document.getElementById('plan-error').classList.remove('visible');
}

async function generatePlan() {
  hideError();

  if (planInterests.size === 0) {
    showError("Please select at least one interest to generate your plan.");
    return;
  }

  // Показваме loading
  const loading = document.getElementById('plan-loading');
  const result  = document.getElementById('plan-result');
  const btn     = document.getElementById('plan-btn');
  loading.classList.add('visible');
  result.classList.remove('visible');
  btn.disabled = true;

  // Строим промпта
  const interests = [...planInterests].join(', ');
  const prompt = `You are a travel guide for Varna, Bulgaria.
Create a detailed ${planDays}-day itinerary for a tourist with these interests: ${interests}.
Trip pace: ${planDiff} (relaxed = 2-3 places/day, moderate = 4-5 places/day, intensive = 6+ places/day).
Format the response with clear Day 1, Day 2 headings and bullet points for each place.
Include the place name, a short description, and why it matches the tourist's interests.
Write in English.`;

  try {
    const response = await fetch('https://YOUR-RENDER-URL.onrender.com/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (data.error) {
      showError("AI error: " + data.error);
      return;
    }

    // Показваме резултата
    document.getElementById('plan-result-meta').textContent =
      `${planDays} ${planDays === 1 ? 'day' : 'days'} · ${planDiff} pace · ${[...planInterests].join(', ')}`;
    document.getElementById('plan-results').innerHTML =
      data.result.replace(/\n/g, '<br>');
    result.classList.add('visible');

  } catch (err) {
    showError("Could not connect to the server. Please try again.");
    console.error(err);
  } finally {
    loading.classList.remove('visible');
    btn.disabled = false;
  }
}

  if (planInterests.size === 0) {
    showError("Please select at least one interest to generate your plan.");
    return;
  }

  const interestMap = {
    history:  ['Historical Spots'],
    romantic: ['Romantic Places'],
    scenic:   ['Scenic Places'],
    food:     ['Local Food & Drinks'],
    hidden:   ['Hidden Gems']
  };

  let filtered = attractions.filter(p =>
    [...planInterests].some(key => interestMap[key]?.includes(p.category))
  );

  if (!filtered.length) {
    showError("No places match your selected interests.");
    return;
  }

  // Shuffle
  filtered = filtered.sort(() => Math.random() - 0.5);

  // Distribute per day
  const plan = Array.from({ length: planDays }, () => []);
  filtered.forEach((place, i) => {
    plan[i % planDays].push(place);
  });

  // Relaxed mode
  if (planDiff === 'relaxed') {
    const maxPerDay = Math.floor(filtered.length / planDays) || 1;
    plan.forEach((day, i) => {
      plan[i] = day.slice(0, maxPerDay);
    });
  }

  // Render results
  const container = document.getElementById('plan-results');
  if (!container) return;

  container.innerHTML = plan.map((dayPlaces, i) => `
    <div class="plan-day">
      <h3>Day ${i + 1}</h3>
      ${dayPlaces.length
        ? `<ul>
            ${dayPlaces.map(p => `
              <li>
                <strong>${p.name}</strong> (${p.category})<br>
                ${(p.description ?? '').substring(0, 100)}…
              </li>
            `).join('')}
           </ul>`
        : '<p>No places scheduled for this day.</p>'
      }
    </div>
  `).join('');
}
