/* Earthling Field Guide: PIXEL HABITATS for the retro bonus speed runs (v70).
   Five flat, 8-bit style landscapes inspired by the teacher's "Earth Expedition" art:
   pond edge (World 1), desert (World 2), rainforest (World 3), Pennsylvania ridge (World 4), tundra (World 5), coral reef (World 6).
   Everything is drawn by code on small canvases and shown with crisp pixels (no image files):
   - backdrop layers (sky, far land, near trees) on big flat panels behind the course, so they slide past at different speeds
   - the ground and ledges get pixel textures (dirt, sandstone, moss, snowy rock, reef rock) and a grassy, sandy or snowy lip
   - pixel plants and animals stand along the course (frog, cattails, cactus, lizard, toucan, vines, arctic hare, sea turtle, fish ...)
   The engine calls BQ.pixelScape(habitat, x0, x1, group, solids) instead of its normal 3D scenery, then BQ.pixelSkin(...). */
(function () {
'use strict';
const BQ = window.FieldGuide; if (!BQ) return;
let T = null;
let seed = 1; const R = function () { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
function cv(w, h) { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; }
function P(x, X, Y, w, h, c) { x.fillStyle = c; x.fillRect(Math.round(X), Math.round(Y), Math.max(1, Math.round(w)), Math.max(1, Math.round(h))); }
function blob(x, cx, cy, r, c, dith) { r = Math.round(r); for (let yy = -r; yy <= r; yy++) for (let xx = -r; xx <= r; xx++) { const d = xx * xx + yy * yy; if (d <= r * r) { if (dith && d > r * r * 0.65 && ((xx + yy) & 1)) continue; P(x, cx + xx, cy + yy, 1, 1, c); } } }
function oval(x, cx, cy, rx, ry, c) { for (let yy = -ry; yy <= ry; yy++) for (let xx = -rx; xx <= rx; xx++) if ((xx * xx) / (rx * rx) + (yy * yy) / (ry * ry) <= 1) P(x, cx + xx, cy + yy, 1, 1, c); }
function grad(x, w, h, stops) { const g = x.createLinearGradient(0, 0, 0, h); stops.forEach(function (s) { g.addColorStop(s[0], s[1]); }); x.fillStyle = g; x.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += 2) for (let X = (y / 2) & 1; X < w; X += 4) P(x, X, y, 1, 1, 'rgba(255,255,255,0.035)'); } /* light dithering, like old consoles */
function tex(c, rx, ry) { const t = new T.CanvasTexture(c); t.magFilter = T.NearestFilter; t.minFilter = T.NearestFilter; t.generateMipmaps = false; t.wrapS = T.RepeatWrapping; t.wrapT = (ry || 1) > 1 ? T.RepeatWrapping : T.ClampToEdgeWrapping; t.repeat.set(rx || 1, ry || 1); return t; }
/* a sprite from a text map: each letter is a color */
function sprite(map, pal) { const rows = map.trim().split('\n').map(function (s) { return s.trim(); }), c = cv(rows[0].length, rows.length), x = c.getContext('2d');
  rows.forEach(function (r, y) { Array.from(r).forEach(function (ch, X) { if (pal[ch]) P(x, X, y, 1, 1, pal[ch]); }); }); return c; }

/* ---------- sprites drawn with code ---------- */
const SP = {
  frog: function () { return sprite(`
....kk....kk....
...kGGk..kGGk...
...kGwk..kGwk...
..kGGGGkkGGGGk..
.kGGggGGGGggGGk.
.kGGGGGGGGGGGGk.
kGGGkkkkkkkkGGGk
kGGyyyyyyyyyyGGk
.kGyyyyyyyyyyGk.
kGGkyyyyyyyykGGk
kgggk.kkkk.kgggk
.kkk........kkk.`, { k: '#1e3a1a', G: '#5ab040', g: '#3a8a2a', w: '#101810', y: '#e8e0a0' }); },
  cattail: function () { const c = cv(12, 34), x = c.getContext('2d'); [[2, 6], [6, 2], [9, 8]].forEach(function (s) { P(x, s[0], s[1], 1, 34 - s[1], '#4a8a34'); P(x, s[0] - 1, s[1] + 2, 3, 7, '#7a4a28'); P(x, s[0], s[1] + 2, 1, 2, '#9a6a3c'); });
    for (let k = 0; k < 10; k++) { P(x, 1 + k % 3, 24 + k, 1, 10 - k, '#5ab04a'); P(x, 10 - k % 3, 22 + k, 1, 12 - k, '#3a8a2a'); } return c; },
  lily: function () { const c = cv(18, 7), x = c.getContext('2d'); oval(x, 9, 4, 8, 2, '#5ab040'); oval(x, 9, 3, 6, 1, '#7ad050'); P(x, 9, 2, 1, 3, '#2a6a2a');
    [[7, 0, '#ff9ac0'], [9, 0, '#ff6aa0'], [11, 0, '#ff9ac0'], [8, 1, '#ff6aa0'], [10, 1, '#ff6aa0'], [9, 1, '#ffd84a']].forEach(function (p) { P(x, p[0] - 1, p[1], 1, 2, p[2]); }); return c; },
  bigtree: function (leaf1, leaf2, trunk) { const c = cv(64, 80), x = c.getContext('2d'); seed = 77; P(x, 26, 30, 12, 50, trunk || '#6a4428'); P(x, 35, 30, 3, 50, '#8a5a34');
    for (let y = 30; y < 80; y += 3) P(x, 28 + (y * 7) % 8, y, 2, 2, '#583820'); P(x, 20, 76, 24, 4, trunk || '#6a4428');
    for (let k = 0; k < 22; k++) blob(x, 8 + R() * 48, 6 + R() * 30, 6 + R() * 5, R() < 0.5 ? (leaf1 || '#4f9a3a') : (leaf2 || '#6ab84a'), true); return c; },
  fungus: function () { const c = cv(16, 8), x = c.getContext('2d'); [[2, 1, 10], [5, 4, 9]].forEach(function (s) { P(x, s[0], s[1], s[2], 2, '#e8a868'); P(x, s[0] + 1, s[1] + 2, s[2] - 2, 1, '#a86838'); }); return c; },
  flowers: function (cols) { const c = cv(20, 10), x = c.getContext('2d'); seed = 5; for (let i = 0; i < 7; i++) { const X = 1 + R() * 17; P(x, X, 3 + R() * 3, 1, 6, '#3a7a2a'); P(x, X - 1, 2 + R() * 3, 2, 2, cols[i % cols.length]); } return c; },
  saguaro: function () { const c = cv(24, 44), x = c.getContext('2d'); const g = '#4a9a3a', d = '#2f6a2a', l = '#7ac05a';
    P(x, 9, 6, 6, 38, g); P(x, 9, 6, 1, 38, d); P(x, 13, 6, 1, 38, l); P(x, 10, 4, 4, 2, g);
    P(x, 2, 18, 4, 10, g); P(x, 2, 26, 8, 4, g); P(x, 2, 18, 1, 10, d); P(x, 18, 12, 4, 12, g); P(x, 14, 22, 8, 4, g); P(x, 21, 12, 1, 12, l);
    for (let y = 8; y < 42; y += 3) { P(x, 11, y, 1, 1, d); } P(x, 10, 1, 4, 3, '#ff6aa0'); P(x, 11, 0, 2, 1, '#ffb0d0'); return c; },
  barrel: function () { const c = cv(14, 13), x = c.getContext('2d'); oval(x, 7, 7, 6, 5, '#4a9a3a'); for (let k = 2; k < 13; k += 3) P(x, k, 3, 1, 9, '#2f6a2a'); P(x, 5, 0, 4, 3, '#ff6aa0'); P(x, 6, 1, 2, 1, '#ffd84a'); return c; },
  lizard: function () { return sprite(`
..........kk......
.kk......kyyk.....
kyyk....kyyyyk....
.kyyykkkyyyyyyk...
..kyyyyyyyyykyyk..
...kykyyyyky.kyyk.
...k.k.kk.k...kyyk
...............kkk`, { k: '#3a3a10', y: '#c8d84a' }); },
  shrub: function (col, col2) { const c = cv(18, 10), x = c.getContext('2d'); seed = 9; for (let i = 0; i < 9; i++) { const X = 2 + R() * 14; P(x, X, 3 + R() * 3, 1, 7, col2 || '#6a5a3a'); blob(x, X, 3 + R() * 2, 2, col, true); } return c; },
  toucan: function () { return sprite(`
.....kkkk...........
....kkkkkk..........
...kkwkkkkooooooo...
...kkkkkkkoooyyyyo..
...kyykkkkkooooooo..
..kkyyyykkk.........
..kkkkkkkkk.........
.kkkkkkkkkk.........
.kkkkkkkkk..........
.kkkkkkkk...........
..kkkkkk............
...kk.kk............
...nn.nn............`, { k: '#141414', w: '#f8f8f8', y: '#ffd84a', o: '#ff8a2a', n: '#6a4a2a' }); },
  hibiscus: function () { const c = cv(12, 12), x = c.getContext('2d'); [[6, 2], [2, 6], [10, 6], [4, 10], [8, 10]].forEach(function (p) { blob(x, p[0], p[1], 2, '#ff4a7a', false); }); blob(x, 6, 6, 2, '#ff7a9a', false); P(x, 6, 5, 1, 2, '#ffd84a'); return c; },
  fern: function (col) { const c = cv(26, 20), x = c.getContext('2d'); for (let f = 0; f < 5; f++) { const a = -1.2 + f * 0.6; for (let k = 0; k < 12; k++) { const X = 13 + Math.sin(a) * k, Y = 19 - Math.cos(a) * k * 1.4; P(x, X, Y, 1, 1, col || '#3a9a3a'); if (k % 2) { P(x, X - 1, Y, 1, 1, '#5ac04a'); P(x, X + 1, Y + 1, 1, 1, '#2a7a2a'); } } } return c; },
  vine: function () { const c = cv(8, 60), x = c.getContext('2d'); for (let y = 0; y < 60; y++) { const X = 3 + Math.round(Math.sin(y * 0.2) * 1.5); P(x, X, y, 1, 1, '#4a8a2a'); if (y % 6 === 0) { P(x, X + 1, y, 3, 2, '#7ac04a'); } if (y % 6 === 3) P(x, X - 3, y, 3, 2, '#5aa83a'); } return c; },
  ant: function () { return sprite(`
.k...k..
..kkk...
rrkrrkrr
.k.k.k..`, { k: '#3a1a10', r: '#b03a1a' }); },
  hare: function () { return sprite(`
........ww.ww...
........wpwwp...
........wpwwp...
.......wwwwww...
.......wwkwwwww.
......wwwwwwwww.
.wwwwwwwwwwwkw..
wwwwwwwwwwwww...
wwwwwwwwwwwww...
.wwwwwwwwwwww...
.wwwwwwwwwwww...
..ww.ww..wwww...`, { w: '#f4f8ff', p: '#ffb8c8', k: '#202838' }); },
  redshrub: function () { const c = cv(16, 9), x = c.getContext('2d'); seed = 31; for (let i = 0; i < 14; i++) { const X = R() * 15, Y = 2 + R() * 6; P(x, X, Y, 1, 9 - Y, '#7a3a2a'); P(x, X, Y, 2, 1, R() < 0.5 ? '#c83a3a' : '#e86a3a'); } return c; },
  turtle: function () { return sprite(`
.......kkkkkkk.........
.....kkbbbbbbbkk.......
....kbBbbBbbBbbbk......
...kbbbBbbbBbbbBbk..kk.
...kbBbbbBbbbBbbbkkgggk
..kgkbbbBbbBbbbbkkgwgk.
.kgggkkkkkkkkkkkgggggk.
kgggk.kgk...kgk..kkkk..
.kkk..kgk...kgk........
.......k.....k.........`, { k: '#1a2a1a', b: '#8a5a2a', B: '#c8963a', g: '#6ab04a', w: '#101010' }); },
  fish: function (c1, c2) { return sprite(`
....kkkkk.....
..kkaaaaakk.kk
.kaaabbbaaakak
kawaabbbaaaaak
.kaaabbbaaakak
..kkaaaaakk.kk
....kkkkk.....`, { k: '#1a1a3a', a: c1 || '#ff7ab0', b: c2 || '#7ae0ff', w: '#ffffff' }); },
  coral: function (col, col2) { const c = cv(22, 22), x = c.getContext('2d'); seed = col.length * 13; const br = function (X, Y, a, len, d) { for (let k = 0; k < len; k++) { X += Math.sin(a); Y -= Math.cos(a); P(x, X, Y, 2, 2, k % 3 ? col : col2); }
      if (d < 3) { br(X, Y, a - 0.5, len * 0.7, d + 1); br(X, Y, a + 0.5, len * 0.7, d + 1); } else blob(x, X, Y, 1, col2, false); }; br(11, 21, 0, 6, 0); return c; },
  brain: function () { const c = cv(20, 12), x = c.getContext('2d'); oval(x, 10, 7, 9, 5, '#d8b04a'); for (let k = 0; k < 6; k++) for (let X = 3; X < 18; X++) if ((X + k * 3) % 4 === 0) P(x, X, 3 + k, 1, 1, '#a87a2a'); return c; },
  star: function () { const c = cv(10, 10), x = c.getContext('2d'); [[5, 1], [5, 3], [1, 4], [3, 4], [7, 4], [9, 4], [5, 5], [3, 7], [7, 7], [2, 9], [8, 9]].forEach(function (p) { P(x, p[0], p[1], 1, 1, '#ff7a3a'); }); P(x, 4, 4, 3, 3, '#ff9a4a'); return c; },
  tube: function () { const c = cv(14, 18), x = c.getContext('2d'); [[2, 6], [6, 2], [10, 8]].forEach(function (s) { P(x, s[0], s[1], 3, 18 - s[1], '#9ac83a'); P(x, s[0], s[1], 3, 1, '#4a6a1a'); P(x, s[0] + 2, s[1] + 1, 1, 17 - s[1], '#c8e86a'); }); return c; },
  shell: function () { const c = cv(10, 7), x = c.getContext('2d'); oval(x, 5, 4, 4, 3, '#f4d8c0'); for (let k = 2; k < 9; k += 2) P(x, k, 2, 1, 5, '#c8a088'); return c; },
  /* Pennsylvania ridge (Version 76): eastern hemlock (state tree), mountain laurel (state flower), ruffed grouse (state bird) */
  hemlock: function () { const c = cv(30, 56), x = c.getContext('2d'); P(x, 14, 40, 3, 16, '#5a3a24'); P(x, 16, 40, 1, 16, '#7a5234');
    for (let t = 0; t < 7; t++) { const y = 4 + t * 6, hw = 3 + t * 2; for (let k = -hw; k <= hw; k++) { const droop = Math.round(Math.abs(k) * Math.abs(k) / (hw * 2.2)); P(x, 15 + k, y + droop, 1, 4, (k + t) % 3 ? '#24503a' : '#2f6a48'); P(x, 15 + k, y + droop + 4, 1, 1, '#18382a'); } }
    P(x, 15, 0, 1, 5, '#2f6a48'); return c; },
  laurel: function () { const c = cv(22, 14), x = c.getContext('2d'); seed = 19; for (let i = 0; i < 10; i++) blob(x, 2 + R() * 18, 6 + R() * 6, 2 + R() * 2, R() < 0.5 ? '#2f6a3a' : '#3f7a44', true);
    for (let i = 0; i < 9; i++) { const X = 2 + R() * 18, Y = 2 + R() * 7; blob(x, X, Y, 1, '#f8d8e8', false); P(x, X, Y, 1, 1, '#e86aa0'); } return c; },
  grouse: function () { return sprite(`
.....bb.........
....bbbb........
....bkbbb.......
...obbbbb.......
....bbBBBbb.....
....bBBBBBbbb...
...bBwBwBBBbbbb.
...bBBBBBBBbbbbb
....bBBBBBBBbbb.
.....bBBBBBbb...
......bbbbb.....
.......o..o.....`, { b: '#7a5234', B: '#a8784a', w: '#e8d8b8', k: '#101010', o: '#c8903a' }); },
  rock: function (col, top) { const c = cv(20, 12), x = c.getContext('2d'); oval(x, 10, 7, 9, 5, col || '#7a8282'); oval(x, 9, 5, 6, 2, '#9aa0a0'); if (top) P(x, 3, 2, 14, 2, top); return c; }
};

/* ---------- the six habitats ---------- */
const HAB = {
  pond: { bg: '#2c5a52',
    sky: function (x, w, h) { grad(x, w, h, [[0, '#2c5a52'], [0.6, '#3d6e5a'], [1, '#24463e']]); },
    far: function (x, w, h) { seed = 3; for (let i = 0; i < 14; i++) { const X = i * 20 + R() * 8; P(x, X, h * 0.35, 3, h, '#2f5a4c'); for (let k = 0; k < 5; k++) blob(x, X + 1 + (R() - 0.5) * 14, h * 0.3 + R() * 22, 6 + R() * 5, '#35644f', true); } },
    mid: function (x, w, h) { seed = 11; for (let i = 0; i < 7; i++) { const X = i * 38 + R() * 14; P(x, X, h * 0.25, 5, h, '#23463a'); for (let k = 0; k < 6; k++) blob(x, X + 2 + (R() - 0.5) * 22, h * 0.22 + R() * 26, 7 + R() * 5, k % 2 ? '#2a5a3a' : '#255034', true); }
      for (let i = 0; i < 30; i++) blob(x, R() * w, h * 0.8 + R() * 10, 4 + R() * 4, R() < 0.5 ? '#2f6a3c' : '#376f40', true); },
    rays: '#fff0a0',
    dirt: function (x, w, h) { P(x, 0, 0, w, h, '#7a4e2c'); seed = 4; for (let i = 0; i < 26; i++) blob(x, R() * w, R() * h, 2 + R() * 2, R() < 0.5 ? '#5a3a24' : '#8a5e3a', false); },
    lip: function (x, w, h) { P(x, 0, 0, w, 5, '#6ac04a'); P(x, 0, 0, w, 1, '#a8e870'); for (let i = 0; i < w; i++) { if ((i * 7) % 5 === 0) P(x, i, 5, 1, 2 + ((i * 3) % 5), '#4a9a34'); if ((i * 11) % 7 === 0) P(x, i, 0, 1, 1, '#d8ffa8'); } },
    deco: [['bigtree', 0.10, 11, -9, ['#4f9a3a', '#6ab84a']], ['cattail', 0.30, 3.2, -2.6], ['frog', 0.10, 1.4, -2.4, 'hop'], ['flowers', 0.35, 1.6, -2.8, ['#ffffff', '#b88ae8', '#ffe84a']], ['fern', 0.30, 2, -2.9], ['rock', 0.20, 1.6, -2.7, ['#7a8282', '#7ac04a']], ['fungus', 0.10, 1.4, -3]],
    fly: 'dragonfly' },
  desert: { bg: '#8ac8f0',
    sky: function (x, w, h) { grad(x, w, h, [[0, '#5aa8e8'], [0.55, '#a8d8f8'], [0.75, '#f8d8a8'], [1, '#e8b878']]); seed = 8; for (let i = 0; i < 5; i++) { const X = R() * w, Y = 8 + R() * 20; for (let k = 0; k < 4; k++) oval(x, X + k * 6, Y + (k % 2), 6, 3, '#ffffff'); } },
    far: function (x, w, h) { seed = 13; for (let i = 0; i < 6; i++) { const X = i * 45 + R() * 10, top = h * 0.5 + R() * 10, ww = 20 + R() * 20; P(x, X, top, ww, h, '#a86a6a'); P(x, X - 4, top + 6, ww + 8, h, '#985a5a'); P(x, X, top, ww, 2, '#c88a7a'); for (let y = top + 6; y < h; y += 5) P(x, X, y, ww, 1, '#8a4a4a'); } },
    mid: function (x, w, h) { seed = 17; for (let X = 0; X < w; X++) { const y = h * 0.75 + Math.sin(X * 0.04) * 6 + Math.sin(X * 0.11) * 2; P(x, X, y, 1, h - y, '#e8c088'); P(x, X, y, 1, 1, '#f8d8a0'); } for (let i = 0; i < 12; i++) { const X = R() * w; blob(x, X, h * 0.75 + 2, 2, '#8a8a4a', true); } },
    rays: '#fff8d0',
    dirt: function (x, w, h) { P(x, 0, 0, w, h, '#c87a3a'); for (let y = 0; y < h; y += 8) { P(x, 0, y, w, 1, '#8a4a20'); for (let X = ((y / 8) % 2) * 8; X < w; X += 16) P(x, X, y, 1, 8, '#8a4a20'); for (let X = 2; X < w; X += 5) P(x, X, y + 2, 2, 1, '#e8a060'); } },
    lip: function (x, w, h) { P(x, 0, 0, w, 4, '#f0c878'); P(x, 0, 0, w, 1, '#fff0b8'); for (let i = 0; i < w; i += 3) P(x, i, 4, 2, 1 + (i % 4), '#d8a058'); },
    deco: [['saguaro', 0.12, 5, -3.2], ['barrel', 0.2, 1.4, -2.6], ['lizard', 0.12, 1.2, -2.5, 'scurry'], ['shrub', 0.3, 1.6, -2.8, ['#8a9a4a', '#6a5a3a']], ['rock', 0.2, 1.6, -2.7, ['#8a7a6a']]],
    fly: null },
  rain: { bg: '#1e4a34',
    sky: function (x, w, h) { grad(x, w, h, [[0, '#1a3a2a'], [0.5, '#2a5a3a'], [1, '#183424']]); },
    far: function (x, w, h) { seed = 23; for (let i = 0; i < 12; i++) { const X = i * 22 + R() * 8; P(x, X, h * 0.2, 4, h, '#1e4030'); for (let k = 0; k < 6; k++) blob(x, X + (R() - 0.5) * 18, h * 0.2 + R() * 30, 7 + R() * 5, '#24503a', true); }
      for (let y = h * 0.3; y < h * 0.8; y++) { P(x, w * 0.6, y, 6, 1, (y % 4) ? '#a8e0f0' : '#e8ffff'); } },
    mid: function (x, w, h) { seed = 29; for (let i = 0; i < 9; i++) { const X = i * 30 + R() * 10; for (let y = 0; y < h * 0.6; y++) P(x, X + Math.round(Math.sin(y * 0.15) * 2), y, 1, 1, '#3a7a2a'); }
      for (let i = 0; i < 26; i++) blob(x, R() * w, h * 0.78 + R() * 12, 5 + R() * 5, R() < 0.5 ? '#2a6a34' : '#3a8a3a', true); },
    rays: '#f0ffa0',
    dirt: function (x, w, h) { P(x, 0, 0, w, h, '#5a3a24'); seed = 6; for (let i = 0; i < 26; i++) blob(x, R() * w, R() * h, 2 + R() * 2, R() < 0.5 ? '#4a2e1a' : '#6a4a2a', false); for (let i = 0; i < 6; i++) P(x, R() * w, R() * h, 1, 4, '#3a6a2a'); },
    lip: function (x, w, h) { P(x, 0, 0, w, 5, '#4aa83a'); P(x, 0, 0, w, 1, '#8ae05a'); for (let i = 0; i < w; i++) { if ((i * 5) % 4 === 0) P(x, i, 5, 1, 3 + ((i * 7) % 7), '#3a8a2a'); if ((i * 3) % 11 === 0) P(x, i, 5, 1, 9 + (i % 5), '#5ac04a'); } },
    deco: [['bigtree', 0.10, 12, -9, ['#2f7a2a', '#4a9a3a'], '#5a3a20'], ['vine', 0.25, 6, -3.4, 'hang'], ['toucan', 0.08, 1.6, -3, 'perch'], ['hibiscus', 0.2, 1, -2.6], ['fern', 0.4, 2.4, -2.9, '#2a8a3a'], ['ant', 0.15, 0.5, -2.2, 'march']],
    fly: 'drip' },
  tundra: { bg: '#a8d0f0',
    sky: function (x, w, h) { grad(x, w, h, [[0, '#6aa8e8'], [0.6, '#c8e4f8'], [1, '#e8f4ff']]); seed = 41; for (let i = 0; i < 5; i++) { const X = R() * w, Y = 6 + R() * 18; for (let k = 0; k < 4; k++) oval(x, X + k * 6, Y + (k % 2), 6, 3, '#ffffff'); } },
    far: function (x, w, h) { seed = 43; for (let i = 0; i < 7; i++) { const X = i * 40 + R() * 10, top = h * 0.35 + R() * 12, ww = 30 + R() * 16; for (let k = 0; k < ww; k++) { const y = top + Math.abs(k - ww / 2) * 1.1; P(x, X + k - ww / 2, y, 1, h - y, '#7a8aa8'); if (y < top + 8) P(x, X + k - ww / 2, y, 1, 6 - (y - top) * 0.5, '#f4f8ff'); } } },
    mid: function (x, w, h) { for (let X = 0; X < w; X++) { const y = h * 0.72 + Math.sin(X * 0.05) * 4; P(x, X, y, 1, h - y, '#e8f0f8'); P(x, X, y, 1, 1, '#ffffff'); } seed = 47; for (let i = 0; i < 20; i++) { const X = R() * w; P(x, X, h * 0.74 + R() * 8, 3, 2, R() < 0.5 ? '#c84a3a' : '#a8803a'); } },
    rays: null,
    dirt: function (x, w, h) { P(x, 0, 0, w, h, '#6a7078'); seed = 7; for (let i = 0; i < 22; i++) { const X = R() * w, Y = R() * h; oval(x, X, Y, 4, 3, R() < 0.5 ? '#7a8088' : '#5a6068'); P(x, X - 2, Y - 2, 3, 1, '#8a9098'); } },
    lip: function (x, w, h) { P(x, 0, 0, w, 5, '#f4f8ff'); P(x, 0, 5, w, 1, '#c8d8e8'); for (let i = 0; i < w; i++) { if ((i * 7) % 6 === 0) { const L = 2 + ((i * 3) % 6); for (let k = 0; k < L; k++) P(x, i, 6 + k, 1, 1, k > L - 2 ? '#a8d8f8' : '#d8f0ff'); } } },
    deco: [['hare', 0.1, 1.5, -2.6, 'hop'], ['redshrub', 0.35, 1.3, -2.7], ['rock', 0.25, 1.8, -2.8, ['#7a8088', '#f4f8ff']], ['shrub', 0.2, 1.2, -2.8, ['#c8a050', '#7a5a3a']]],
    fly: 'snow' },
  /* Pennsylvania's Ridge and Valley: rows of long blue ridges, hemlock and oak forest, mountain laurel, a trout brook, and hawks
     riding the wind along the ridges in fall migration (as at Hawk Mountain Sanctuary) */
  ridge: { bg: '#8ac0e8',
    sky: function (x, w, h) { grad(x, w, h, [[0, '#4a88d8'], [0.55, '#9ac8f0'], [0.8, '#f0e0c0'], [1, '#d8c0a0']]); seed = 71; for (let i = 0; i < 4; i++) { const X = R() * w, Y = 8 + R() * 20; for (let k = 0; k < 4; k++) oval(x, X + k * 6, Y + (k % 2), 6, 3, '#ffffff'); } },
    far: function (x, w, h) { [[0.38, '#6a8ab8', 3], [0.5, '#5a78a0', 7], [0.62, '#4a6888', 11]].forEach(function (r) { for (let X = 0; X < w; X++) { const y = h * r[0] + Math.sin(X * 0.02 + r[2]) * 3 + Math.sin(X * 0.07 + r[2]) * 1.2; P(x, X, y, 1, h - y, r[1]); } }); },
    mid: function (x, w, h) { seed = 73; for (let X = 0; X < w; X++) { const y = h * 0.55 + Math.sin(X * 0.03) * 5; P(x, X, y, 1, h - y, '#2f5a3a'); }
      for (let i = 0; i < 34; i++) { const X = R() * w, y = h * 0.5 + R() * 14; const col = ['#24503a', '#3a6a3a', '#c8783a', '#d8a83a', '#2f6a48'][i % 5]; blob(x, X, y, 4 + R() * 3, col, true); }
      for (let X = 0; X < w; X++) { const y = h * 0.88 + Math.sin(X * 0.05) * 1.5; P(x, X, y, 1, 2, (X % 6) ? '#6ab0d8' : '#d8f0ff'); } },
    rays: '#fff4c8',
    dirt: function (x, w, h) { P(x, 0, 0, w, h, '#6a5a48'); seed = 75; for (let i = 0; i < 18; i++) { const X = R() * w, Y = R() * h; oval(x, X, Y, 4, 2, R() < 0.5 ? '#7a6a58' : '#5a4a3a'); P(x, X - 2, Y - 1, 3, 1, '#8a7a68'); } for (let i = 0; i < 6; i++) P(x, R() * w, R() * h, 2, 1, '#4a7a3a'); },
    lip: function (x, w, h) { P(x, 0, 0, w, 5, '#4a8a3a'); P(x, 0, 0, w, 1, '#7ab85a'); for (let i = 0; i < w; i++) { if ((i * 5) % 7 === 0) P(x, i, 5, 1, 2 + ((i * 3) % 4), '#3a6a2a'); if ((i * 13) % 11 === 0) P(x, i, 0, 1, 1, '#c8783a'); } },
    deco: [['hemlock', 0.16, 9, -9], ['laurel', 0.35, 1.8, -2.8], ['grouse', 0.08, 1.3, -2.5, 'scurry'], ['fern', 0.3, 1.8, -2.9, '#3a8a3a'], ['rock', 0.25, 1.6, -2.7, ['#8a8a80', '#4a8a3a']], ['fungus', 0.08, 1.2, -3]],
    fly: 'hawk' },
  reef: { bg: '#1a6a9a', under: true,
    sky: function (x, w, h) { grad(x, w, h, [[0, '#5ac8e8'], [0.15, '#2a9ac8'], [0.6, '#1a6a9a'], [1, '#0e3a5a']]); for (let X = 0; X < w; X++) P(x, X, 4 + Math.round(Math.sin(X * 0.2) * 1.5), 1, 1, '#c8f8ff'); },
    far: function (x, w, h) { seed = 53; for (let i = 0; i < 16; i++) { const X = R() * w, y = h * 0.6 + R() * 16; blob(x, X, y, 6 + R() * 6, '#2a5a8a', true); P(x, X - 3, y, 6, h - y, '#2a5a8a'); } for (let i = 0; i < 3; i++) { const X = R() * w, Y = h * 0.3 + R() * 20; for (let k = 0; k < 14; k++) P(x, X + (k % 5) * 4, Y + Math.floor(k / 5) * 3, 2, 1, '#6ab0d8'); } },
    mid: function (x, w, h) { seed = 59; for (let X = 0; X < w; X++) { const y = h * 0.8 + Math.sin(X * 0.07) * 3; P(x, X, y, 1, h - y, '#c8b88a'); } for (let i = 0; i < 14; i++) { const X = R() * w; blob(x, X, h * 0.8, 3 + R() * 3, ['#c86aa8', '#e89a4a', '#8a6ad8'][i % 3], true); } },
    rays: '#c8f8ff',
    dirt: function (x, w, h) { P(x, 0, 0, w, h, '#6a6a8a'); seed = 61; for (let i = 0; i < 22; i++) { const X = R() * w, Y = R() * h; oval(x, X, Y, 4, 3, R() < 0.5 ? '#7a7a9a' : '#5a5a7a'); } for (let i = 0; i < 8; i++) P(x, R() * w, R() * h, 2, 2, ['#c86aa8', '#e8a04a', '#8ae05a'][i % 3]); },
    lip: function (x, w, h) { P(x, 0, 0, w, 4, '#e8d8a8'); P(x, 0, 0, w, 1, '#fff4d0'); for (let i = 0; i < w; i += 4) P(x, i, 4, 2, 1 + (i % 3), '#c8b888'); },
    deco: [['coral', 0.3, 2.6, -2.9, ['#ff7ab0', '#ffb0d0']], ['coral', 0.2, 2.2, -3.2, ['#e89a4a', '#ffd08a']], ['brain', 0.15, 1.6, -2.7], ['tube', 0.15, 2, -3], ['star', 0.15, 0.7, -2.3], ['shell', 0.12, 0.6, -2.2], ['coral', 0.15, 2, -3.4, ['#9a7ae8', '#c8b0ff']]],
    swim: [['turtle', 2.6, 12], ['fish', 1.6, 7, ['#ff7ab0', '#7ae0ff']], ['fish', 1.4, 6, ['#ffd84a', '#ff8a3a']], ['fish', 1.2, 5, ['#7ae0ff', '#ffffff']]],
    fly: 'bubble' }
};

/* ---------- build ---------- */
let TICK = [];
function plane(c, w, h, x, y, z, rx, ry, opts) { const t = tex(c, rx, ry), m = new T.Mesh(new T.PlaneGeometry(w, h), new T.MeshBasicMaterial(Object.assign({ map: t, transparent: true, alphaTest: 0.5, fog: false, depthWrite: true }, opts || {}))); m.position.set(x, y, z); return m; }
function groundTop(solids, x) { let best = null; solids.forEach(function (s) { if (s.off || x < s.x0 + 0.4 || x > s.x1 - 0.4) return; if (s.y1 - s.y0 < 6) return; if (best === null || s.y1 > best) best = s.y1; }); return best; }
BQ.pixelScape = function (name, x0, x1, grp, solids) {
  const C = BQ.core; T = C.T; const H = HAB[name] || HAB.pond; TICK = []; seed = 100;
  const span = x1 - x0 + 220, mx = (x0 + x1) / 2;
  /* sky: one big panel far back; far land and near trees on panels in front of it (they slide past at different speeds as the camera moves) */
  const sky = cv(64, 128); H.sky(sky.getContext('2d'), 64, 128); const sk = plane(sky, span * 3, 260, mx, 40, -260, 1, 1, { alphaTest: 0, transparent: false, depthWrite: false }); sk.renderOrder = -20; grp.add(sk);
  const far = cv(256, 96); H.far(far.getContext('2d'), 256, 96); const fm = plane(far, span * 1.6, 70, mx, 6, -90, span * 1.6 / 110, 1); fm.renderOrder = -15; grp.add(fm);
  const mid = cv(256, 80); H.mid(mid.getContext('2d'), 256, 80); const mm = plane(mid, span * 1.2, 42, mx, 2, -40, span * 1.2 / 70, 1); mm.renderOrder = -12; grp.add(mm);
  if (H.rays) { for (let i = 0; i < Math.max(4, Math.round((x1 - x0) / 30)); i++) { const m = new T.Mesh(new T.PlaneGeometry(4 + R() * 5, 80), new T.MeshBasicMaterial({ color: H.rays, transparent: true, opacity: 0.05 + R() * 0.04, depthWrite: false, fog: false, blending: T.AdditiveBlending })); m.position.set(x0 + R() * (x1 - x0), 14, -30); m.rotation.z = -0.35; grp.add(m);
    const ph = R() * 6; TICK.push(function (dt, t) { m.material.opacity = 0.05 + 0.03 * Math.sin(t * 0.5 + ph); }); } }
  /* plants and animals along the course */
  const MODES = ['hop', 'scurry', 'march', 'perch', 'hang'], sprites = {};
  const get = function (d) { const args = Array.isArray(d[4]) ? d[4] : (typeof d[4] === 'string' && d[4][0] === '#') ? [d[4]] : [], k = d[0] + args.join(',') + (d[5] || '');
    if (!sprites[k]) sprites[k] = d[0] === 'flowers' ? SP.flowers(args) : SP[d[0]](args[0], args[1], d[5]); return sprites[k]; };
  for (let x = x0 + 6; x < x1 - 4; x += 1.6) H.deco.forEach(function (d) { if (R() > d[1] * 0.55) return; const gy = groundTop(solids, x); if (gy === null) return;
    const c = get(d), hgt = d[2], wid = hgt * c.width / c.height, z = d[3] - R() * 0.6, m = plane(c, wid, hgt, x + (R() - 0.5), gy + hgt / 2 - (d[0] === 'bigtree' ? 0.5 : 0.05), z, 1, 1); grp.add(m);
    if (d[0] === 'vine') { m.position.y = gy + 7 + R() * 2; } const mode = d.find(function (v) { return MODES.indexOf(v) >= 0; });
    if (mode === 'hop' || mode === 'scurry' || mode === 'march' || mode === 'perch') { const bx = m.position.x, by = m.position.y, ph = R() * 9; TICK.push(function (dt, t) { const k = (t + ph) % 4;
      if (mode === 'hop') { m.position.y = by + (k < 0.4 ? Math.sin(k / 0.4 * Math.PI) * 0.6 : 0); }
      else if (mode === 'scurry') { m.position.x = bx + Math.sin((t + ph) * 0.7) * 1.2; m.scale.x = Math.cos((t + ph) * 0.7) > 0 ? 1 : -1; }
      else if (mode === 'march') { m.position.x = bx + ((t * 0.6 + ph) % 3) - 1.5; }
      else { m.position.y = by + (k < 0.2 ? 0.15 : 0); } }); } });
  /* swimmers (reef) and flyers */
  (H.swim || []).forEach(function (s, i) { for (let n = 0; n < Math.max(2, Math.round((x1 - x0) / 60)); n++) { const c = SP[s[0]](s[3] && s[3][0], s[3] && s[3][1]), hgt = s[1] * c.height / Math.max(c.width, c.height) * 2, m = plane(c, hgt * c.width / c.height, hgt, x0 + R() * (x1 - x0), 4 + R() * 6, -5 - R() * 6, 1, 1); grp.add(m);
    const bx = m.position.x, by = m.position.y, sp = 0.6 + R() * 0.8, ph = R() * 9; TICK.push(function (dt, t) { m.position.x = bx + Math.sin(t * 0.08 * sp + ph) * s[2]; m.scale.x = Math.cos(t * 0.08 * sp + ph) > 0 ? 1 : -1; m.position.y = by + Math.sin(t * sp + ph) * 0.4; }); } });
  if (H.fly === 'dragonfly') { for (let n = 0; n < Math.round((x1 - x0) / 40); n++) { const c = cv(14, 6), x = c.getContext('2d'); P(x, 0, 3, 11, 1, '#3a7ad8'); P(x, 11, 2, 2, 2, '#ffd84a'); P(x, 3, 0, 3, 2, '#d8f0ff'); P(x, 7, 0, 3, 2, '#d8f0ff'); P(x, 3, 4, 3, 2, '#b8d8f0'); P(x, 7, 4, 3, 2, '#b8d8f0');
    const m = plane(c, 1.4, 0.6, x0 + R() * (x1 - x0), 5, -2, 1, 1); grp.add(m); const bx = m.position.x, ph = R() * 9; TICK.push(function (dt, t) { m.position.x = bx + Math.sin(t * 0.5 + ph) * 5; m.position.y = 5 + Math.sin(t * 1.7 + ph) * 0.8; m.scale.x = Math.cos(t * 0.5 + ph) > 0 ? -1 : 1; }); } }
  if (H.fly === 'hawk') { for (let n = 0; n < Math.max(3, Math.round((x1 - x0) / 45)); n++) { const c = cv(16, 7), x = c.getContext('2d'); P(x, 0, 2, 6, 1, '#4a3424'); P(x, 1, 1, 4, 1, '#6a4a30'); P(x, 10, 2, 6, 1, '#4a3424'); P(x, 11, 1, 4, 1, '#6a4a30'); P(x, 6, 2, 4, 3, '#5a3a24'); P(x, 7, 5, 2, 2, '#b8582a'); P(x, 7, 1, 2, 1, '#e8d8b8');
    const m = plane(c, 2.2, 1, x0 + R() * (x1 - x0), 11 + R() * 4, -6 - R() * 4, 1, 1); grp.add(m); const bx = m.position.x, by = m.position.y, ph = R() * 9; TICK.push(function (dt, t) { m.position.x = bx + Math.sin(t * 0.12 + ph) * 9; m.position.y = by + Math.sin(t * 0.5 + ph) * 0.7; m.scale.x = Math.cos(t * 0.12 + ph) > 0 ? 1 : -1; }); } }
  if (H.fly === 'snow' || H.fly === 'bubble' || H.fly === 'drip') { const n = 160, pos = new Float32Array(n * 3); for (let i = 0; i < n; i++) pos.set([x0 + R() * (x1 - x0), R() * 16 - 2, -1 - R() * 8], i * 3);
    const g = new T.BufferGeometry(); g.setAttribute('position', new T.BufferAttribute(pos, 3)); const pts = new T.Points(g, new T.PointsMaterial({ color: H.fly === 'snow' ? '#ffffff' : H.fly === 'drip' ? '#c8f0ff' : '#d8faff', size: H.fly === 'drip' ? 0.12 : 0.2, transparent: true, opacity: 0.85, fog: false })); grp.add(pts);
    const dir = H.fly === 'bubble' ? 1 : -1, spd = H.fly === 'drip' ? 5 : 1; TICK.push(function (dt, t) { for (let i = 0; i < n; i++) { let y = pos[i * 3 + 1] + dir * dt * spd * (0.6 + (i % 5) * 0.2); if (y > 14) y = -2; if (y < -2) y = 14; pos[i * 3 + 1] = y; if (H.fly !== 'drip') pos[i * 3] += Math.sin(t + i) * dt * 0.3; } g.attributes.position.needsUpdate = true; }); }
  return { bg: H.bg, under: !!H.under, tick: function (dt, t) { TICK.forEach(function (f) { f(dt, t); }); } };
};
/* ground and ledge skins: pixel dirt on the front of every ground block and ledge, plus a grassy (sandy, snowy, mossy) lip along the top edge */
BQ.pixelSkin = function (name, grp, groundMat, topMat) {
  const C = BQ.core; T = C.T; const H = HAB[name] || HAB.pond, U = 2.4; /* world units per texture tile */
  const dc = cv(32, 32); H.dirt(dc.getContext('2d'), 32, 32); const lc = cv(32, 12); H.lip(lc.getContext('2d'), 32, 12);
  const lips = [];
  grp.children.slice().forEach(function (m) { if (!m.isMesh) return; const isG = m.material === groundMat, isT = m.material === topMat; if (!isG && !isT) return;
    const w = m.scale.x, h = m.scale.y; m.material = new T.MeshBasicMaterial({ map: tex(dc, Math.max(1, w / U), Math.max(1, h / U)), fog: false });
    if (isT || (isG && h < 4)) { const top = m.position.y + h / 2; lips.push([m.position.x, top, w, m.position.z + m.scale.z / 2 + 0.03]); } });
  lips.forEach(function (l) { const pl = plane(lc, l[2] + 0.2, 1.1, l[0], l[1] - 0.45, l[3], Math.max(1, l[2] / U), 1); grp.add(pl);
    const t2 = new T.Mesh(new T.PlaneGeometry(l[2] + 0.2, 7.2), new T.MeshBasicMaterial({ color: new T.Color(lc.getContext('2d').getImageData(4, 2, 1, 1).data.slice(0, 3).reduce(function (s, v) { return s + ('0' + v.toString(16)).slice(-2); }, '#')), fog: false }));
    t2.rotation.x = -Math.PI / 2; t2.position.set(l[0], l[1] + 0.01, l[3] - 3.6); grp.add(t2); });
};
})();
