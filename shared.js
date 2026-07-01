'use strict';
// MG PACKING SYSTEM v3.2 — Shared JavaScript
var GAS_URL = 'https://script.google.com/macros/s/AKfycby8_VAWqIC9mp2NgHWX5bDlGYhD8PAdQZRYA6slp0yDl3mc8Hd50_1shgVbgu0woJ4/exec';

// Detect if running on GitHub Pages (static hosting) vs GAS
var IS_GITHUB_PAGES = window.location.hostname.indexOf('github.io') !== -1;

/* ── INJECT SHARED HTML (modals, icons, toast) — wait for body ── */
(function() {
  function inject() {
    if (!document.body) { requestAnimationFrame(inject); return; }
    if (document.getElementById('toast-container')) return;
    var div = document.createElement('div');
    div.innerHTML = '<svg style="display:none" xmlns="http://www.w3.org/2000/svg"><symbol id="ic-list" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></symbol><symbol id="ic-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></symbol><symbol id="ic-check-sq" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></symbol><symbol id="ic-db" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></symbol><symbol id="ic-alert" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></symbol><symbol id="ic-plus" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></symbol><symbol id="ic-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></symbol><symbol id="ic-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></symbol><symbol id="ic-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></symbol><symbol id="ic-edit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></symbol><symbol id="ic-refresh" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></symbol><symbol id="ic-back" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></symbol><symbol id="ic-image" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></symbol><symbol id="ic-box" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></symbol><symbol id="ic-activity" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></symbol><symbol id="ic-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></symbol><symbol id="ic-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></symbol><symbol id="ic-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol><symbol id="ic-file-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></symbol><symbol id="ic-file-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9.5 12.5 5 5"/><path d="m14.5 12.5-5 5"/></symbol><symbol id="ic-rotate" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></symbol><symbol id="ic-stamp" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11h10v8H7z"/><path d="M9 11V7a3 3 0 0 1 6 0v4"/><path d="M7 19h10"/><path d="M12 3v1"/></symbol><symbol id="ic-transfer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17V3h10v14"/><path d="m3 21 4-4"/><path d="m21 21-4-4"/><path d="M7 13h10"/></symbol><symbol id="ic-zoom" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6M8 11h6"/></symbol><symbol id="ic-package" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></symbol><symbol id="ic-missing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6" stroke-dasharray="2 2"/></symbol><symbol id="ic-lock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></symbol><symbol id="ic-unlock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></symbol><symbol id="ic-check-circle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></symbol><symbol id="ic-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></symbol><symbol id="ic-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></symbol></svg>' +
      '<div id="camera-modal" class="modal-backdrop hidden" style="z-index:300"><div style="width:100%;height:100%;display:flex;flex-direction:column;background:var(--scan-bg)"><div style="display:flex;align-items:center;justify-content:space-between;padding:16px 20px;background:rgba(0,0,0,.85);z-index:10;flex-shrink:0"><div style="font-weight:800;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:#fff;display:flex;align-items:center;gap:10px"><svg style="width:18px;height:18px"><use href="#ic-camera"/></svg><span id="camera-label">Scan Barcode</span></div><button onclick="closeCamera()" style="background:rgba(255,255,255,.15);border:none;color:#fff;border-radius:50%;width:40px;height:40px;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center"><svg style="width:16px;height:16px"><use href="#ic-x"/></svg></button></div><div style="flex:1;position:relative;background:var(--scan-bg);display:flex;align-items:center;justify-content:center;overflow:hidden"><div id="camera-video" style="width:100%;height:100%;background:var(--scan-bg)"></div><div class="scan-frame"><div class="scan-frame-inner"><div class="scan-line"></div></div></div><div class="camera-hint">Align barcode inside the frame</div></div><div style="padding:16px 20px;background:rgba(0,0,0,.85);flex-shrink:0"><div id="camera-error" class="hidden" style="color:var(--danger);font-size:13px;margin-bottom:10px;font-weight:600;text-align:center"></div><button class="btn btn-outline btn-full" onclick="closeCamera()" style="min-height:48px;font-size:15px;color:#fff;border-color:rgba(255,255,255,.3)"><svg style="width:16px;height:16px"><use href="#ic-x"/></svg>Close Scanner</button></div></div></div>' +
      '<div id="lightbox" class="hidden" onclick="if(event.target===this){var lb=document.getElementById(\'lightbox\');if(!lb.classList.contains(\'zoomed\'))closeLightbox();}"><button id="lightbox-close" onclick="document.getElementById(\'lightbox\').classList.remove(\'zoomed\');closeLightbox();">&#x2715;</button><img id="lightbox-img" src="" alt="Photo" onclick="event.stopPropagation();document.getElementById(\'lightbox\').classList.toggle(\'zoomed\');" /></div>' +
      '<div id="toast-container"></div>';
    document.body.appendChild(div);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();

/* ── THEME ── */
(function initTheme() {
  const saved = localStorage.getItem('mg-theme');
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
})();
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('mg-theme', next);
}

/* ── GAS HELPERS ── */
const apiCache = new Map();
const CACHE_TTL = 60000;
function cacheKey(params) { return JSON.stringify(params); }
function getCached(key) { const e = apiCache.get(key); if (!e) return null; if (Date.now() - e.ts > CACHE_TTL) { apiCache.delete(key); return null; } return e.data; }
function setCached(key, data) { apiCache.set(key, { data, ts: Date.now() }); }
function invalidateCache() { apiCache.clear(); }

async function gasGet(params, opts) {
  if (!GAS_URL) return null;
  const key = cacheKey(params);
  if (!opts || !opts.noCache) { const c = getCached(key); if (c) return c; }
  const url = GAS_URL + '?' + new URLSearchParams(params);
  for (let a = 1; a <= 2; a++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 25000);
      const r = await fetch(url, { signal: ctrl.signal, redirect: 'follow' });
      clearTimeout(t);
      const txt = await r.text();
      if (!txt || !txt.trim()) return null;
      if (txt.trim().startsWith('<')) { console.error('[gasGet] Got HTML for', params.action); return null; }
      try { const d = JSON.parse(txt); setCached(key, d); return d; } catch { return null; }
    } catch (err) { if (a < 2) await new Promise(r => setTimeout(r, 1500)); }
  }
  return null;
}

async function gasPost(data) {
  if (!GAS_URL) return null;
  for (let a = 1; a <= 2; a++) {
    try {
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 25000);
      const r = await fetch(GAS_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(data), signal: ctrl.signal, redirect: 'follow' });
      clearTimeout(t);
      invalidateCache();
      const txt = await r.text();
      if (!txt || !txt.trim()) return null;
      if (txt.trim().startsWith('<')) { console.error('[gasPost] Got HTML for', data.action); return null; }
      try { return JSON.parse(txt); } catch { return null; }
    } catch (err) { if (a < 2) await new Promise(r => setTimeout(r, 1500)); }
  }
  return null;
}

/* ── FORMATTERS ── */
function escHtml(s) { if (s == null) return ''; return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function fmtDate(ts) { if (!ts) return '\u2014'; const d = new Date(ts); if (isNaN(d)) return String(ts).slice(0, 16); return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: '2-digit' }) + ' ' + d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); }
function fmtTime(ts) { if (!ts) return '\u2014'; const d = new Date(ts); if (isNaN(d)) return String(ts).slice(11, 16); return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }); }
function getThumbUrl(url, size) { if (!url) return ''; if (url.startsWith('data:')) return url; if (url.includes('drive.google.com') || url.includes('googleusercontent')) { const m = url.match(/[-\w]{25,}/); if (m) return 'https://drive.google.com/thumbnail?id=' + m[0] + '&sz=w' + size; } return url; }

/* ── TOAST ── */
function toast(msg, type) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    if (document.body) document.body.appendChild(container);
    else { console.log('[toast]', msg); return; }
  }
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.textContent = msg;
  container.appendChild(el);
  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, 3500);
}

/* ── BUTTON LOADING ── */
function setButtonLoading(btnId, loading) {
  const btn = typeof btnId === 'string' ? document.getElementById(btnId) : btnId;
  if (!btn) return;
  if (loading) {
    btn.disabled = true;
    if (!btn.dataset.originalHtml) btn.dataset.originalHtml = btn.innerHTML;
    btn.innerHTML = '<span class="spinner" style="width:14px;height:14px;margin-right:6px;border-color:currentColor;border-top-color:transparent"></span>Please wait...';
  } else {
    btn.disabled = false;
    if (btn.dataset.originalHtml) btn.innerHTML = btn.dataset.originalHtml;
  }
}

/* ── IMAGE COMPRESSION ── */
function compressImage(file, maxPx, q) {
  maxPx = maxPx || 800; q = q || 0.68;
  return new Promise((res, rej) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      let w = img.width, h = img.height;
      if (w > h && w > maxPx) { h = Math.round(h * maxPx / w); w = maxPx; } else if (h > maxPx) { w = Math.round(w * maxPx / h); h = maxPx; }
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d').drawImage(img, 0, 0, w, h);
      res(c.toDataURL('image/jpeg', q));
    };
    img.onerror = rej;
    img.src = url;
  });
}

/* ── LIGHTBOX ── */
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('zoomed');
  document.getElementById('lightbox-img').src = getThumbUrl(src, 1200);
  lb.classList.remove('hidden');
}
function closeLightbox() { document.getElementById('lightbox').classList.add('hidden'); }

/* ── CAMERA / BARCODE ── */
let cameraCallback = null;
let cameraReader = null;
async function openCamera(label, cb) {
  cameraCallback = cb;
  document.getElementById('camera-label').textContent = 'Scan \u2014 ' + label;
  document.getElementById('camera-error').classList.add('hidden');
  document.getElementById('camera-modal').classList.remove('hidden');
  try {
    if (typeof Html5Qrcode === 'undefined') throw new Error('Scanner library not loaded.');
    if (cameraReader) { try { await cameraReader.stop(); } catch { } try { await cameraReader.clear(); } catch { } cameraReader = null; }
    await new Promise(r => setTimeout(r, 200));
    cameraReader = new Html5Qrcode('camera-video');
    const devices = await Html5Qrcode.getCameras();
    if (!devices || devices.length === 0) throw new Error('No camera found');
    const back = devices.find(d => /back|rear|environment/i.test(d.label));
    const cameraId = back ? { deviceId: back.id } : { facingMode: 'environment' };
    await cameraReader.start(cameraId,
      { fps: 10, qrbox: { width: 310, height: 240 }, aspectRatio: 1.7778, disableFlip: false, videoConstraints: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } },
      (decodedText) => { closeCamera(); cb(decodedText.trim().toUpperCase()); }, () => { }
    );
  } catch (e) {
    document.getElementById('camera-error').textContent = e.message.includes('Permission') ? 'Camera permission denied.' : 'Camera unavailable: ' + e.message;
    document.getElementById('camera-error').classList.remove('hidden');
  }
}
function closeCamera() {
  document.getElementById('camera-modal').classList.add('hidden');
  if (cameraReader) {
    try { cameraReader.stop().catch(() => { }); } catch { }
    try { cameraReader.clear().catch(() => { }); } catch { }
    setTimeout(() => { cameraReader = null; }, 100);
  }
}

/* ── NAVIGATION ── */
// GitHub Pages uses local .html files; GAS uses ?page= parameter
function goTo(page) {
  var target;
  if (IS_GITHUB_PAGES) {
    // On GitHub Pages: navigate to local HTML files
    var pageMap = { index: 'index.html', staff: 'staff.html', checker: 'checker.html', transfer: 'transfer.html', rejects: 'rejects.html', missing: 'missing.html' };
    target = './' + (pageMap[page] || page + '.html');
  } else {
    // On GAS: use page parameter
    var base = GAS_URL.replace(/\?.*$/, '').replace(/\/exec$/, '/exec');
    target = base + '?page=' + page;
  }
  window.location.href = target;
}
// For list detail navigation
function goToList(listRef) {
  if (IS_GITHUB_PAGES) {
    window.location.href = './list.html?ref=' + encodeURIComponent(listRef);
  } else {
    var base = GAS_URL.replace(/\?.*$/, '').replace(/\/exec$/, '/exec');
    window.location.href = base + '?page=list&ref=' + encodeURIComponent(listRef);
  }
}
function initSidebar(currentPage) {
  document.querySelectorAll('nav a[data-page]').forEach(a => { if (a.dataset.page === currentPage) a.classList.add('active'); });
}
