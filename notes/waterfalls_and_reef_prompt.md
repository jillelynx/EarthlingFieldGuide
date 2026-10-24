# Add waterfalls and a coral reef with sea animals to Earthling Field Guide

Please add **waterfalls** and a **coral reef with sea animals** to Earthling Field Guide, using the recipes below. They come from "Liev's Cozy Cove" in my other game, Belly Button Adventure, where they look great. If I attached `cove_reference.js`, that is the original code. Read it and reuse its ideas and settings, but fit everything into how Earthling Field Guide is already built. **Read the game's code and notes first.**

Before building, tell me in plain words where you plan to put them, and wait for my OK. Some likely spots:
- **Waterfalls** in the cozy exploration mode (Willow Creek Reserve). A real Pennsylvania-style waterfall over rock ledges, with hemlocks, would fit the mountain ridge or old-growth hemlock forest areas.
- **A coral reef** wherever the game has (or will have) a coral reef biome: in a platformer world, in a 3D area, or both. A tropical reef does not belong in Pennsylvania, so it should not go in Willow Creek Reserve.

## Ground rules
- Three.js with plain ES modules and no build step. It's published on GitHub Pages and played in school browsers and on my M4 Mac.
- **Everything is made in code.** Use shapes, canvas-drawn textures and small shaders, with no downloaded models or images. Use a fixed random seed so the world looks the same every time.
- **Keep what exists.** Don't break the platformer, the cozy mode, the Biodome, saves, high scores, or the English/Spanish switch. Every new piece of text needs both English and Spanish.
- **Students' computers may be slow.** Draw repeated things (corals, fish, rocks, plants) with `InstancedMesh`. Use the game's quality setting, or add a Pretty/Fast one, and use fewer pieces on Fast. Aim for smooth play on an ordinary school Chromebook.
- **Match the ground.** Build the ground mesh from the same grid of heights that walking uses, so feet, water depth and the waterfall line up.
- **Water must always flow downhill.** Students have noticed water that looks like it runs uphill. The waterfall ribbon must start at the highest point and scroll downward, and any stream leading to it must slope down too. Check this in screenshots.
- **Never write the admin password into any file that goes to GitHub** (code, notes or commit messages). Store only a scrambled code of it, the way the game already does.
- Explain things to me in plain language. I'm a science teacher, not a developer.

## Real Earth rules (this is a science game)
- Landscapes and animals follow real Earth conditions. Anything that breaks physics is explained by the alien's abilities: it can float and doesn't need to breathe, so there is **no air meter**.
- Use real species with their real looks and behavior, for example:
  - **Reef:** green sea turtle or hawksbill, parrotfish (scrape algae off coral), blue tang, clownfish living in a sea anemone, cleaner shrimp, brain coral, staghorn coral, sea fans, seagrass.
  - **Pennsylvania stream and waterfall:** eastern hemlock, rhododendron, moss and ferns on wet rock, brook trout in the plunge pool, crayfish under stones, mayfly nymphs, an eastern hellbender hiding under a big flat rock.
- Keep it gentle. Animals are shy and move away; nothing attacks the player.
- If the reef shows a disruption such as coral bleaching, show it accurately (white coral, fewer fish) and let the player see what helps it recover.

## Learning layer (explore and discover, not quizzes)
- The game's goal is that students **learn by exploring**. Don't add quizzes that stop the flow, and don't add anything a student can get stuck on.
- When the alien gets close to a new animal, plant or feature (a coral, the turtle, the waterfall's plunge pool), it **scans** it. A short Field Guide entry pops up and is saved, in English and Spanish, using correct vocabulary in a sentence a beginner understands. Examples: symbiosis between coral and the algae living in it, mutualism between clownfish and anemone, a producer in a food web, a habitat or niche, or erosion carving the waterfall.
- **Do not assume which PA STEELS standards or Keystone Biology eligible content an entry teaches.** If you want to tag entries to standards, first find the exact official wording in the game's own standards files or notes. If you can't find it, leave the tag out and list for me which entries you'd like to tag.
- Discoveries can add to the score (high scores motivate students), and a counter shows how many entries are found in each area.

## Recipe 1: a waterfall (six parts)
1. **Cliff.** Make a raised, flat-topped rock shelf with a steep edge, about 6 m high over 6 m sideways. Use a 0-to-1 mask built from two smoothsteps, then take `height = max(height, top × mask)`. Color steep ground as rock when the normal's up part is below about 0.8 (fully rock below 0.6). Leave one gentle ramp (slope about 0.3) so players can walk up.
2. **Plunge pool.** Dig a round pool at the foot of the cliff that joins the lake or sea, so the main water covers it and swimming works:
   ```js
   const dp = Math.hypot(x - POOL.x, z - POOL.z);
   if (dp < 4.2) h = Math.min(h, -1.1 + (dp / 4.2) ** 2 * 1.7);
   ```
3. **Falling water that hugs the rocks (the secret).** Don't use a flat vertical plane. Make a ribbon from about 26 points along a line from just behind the cliff top down to the middle of the pool. Each point's height is the ground height (never below water level − 0.2) plus 0.14 m. Make it wider toward the bottom (half-width 1.15 + t × 0.9). For UVs, u goes across and v goes down the length.
   ```js
   for (let i = 0; i <= 26; i++) {
     const t = i / 26, x = TOP.x + t * (POOL.x - TOP.x), z = TOP.z + t * (POOL.z - TOP.z);
     pts.push([x, z, Math.max(height(x, z), WL - 0.2) + 0.14]);
   }
   ```
4. **Waterfall shader.** Two layers of value noise scroll down at different speeds, stretched into streaks:
   ```glsl
   float s = vn(vec2(vUv.x * 14.0, vUv.y * 9.0 - uTime * 2.6)) * 0.6
           + vn(vec2(vUv.x * 30.0, vUv.y * 20.0 - uTime * 4.0)) * 0.4;
   float edge = smoothstep(0.0, 0.18, vUv.x) * smoothstep(1.0, 0.82, vUv.x);
   vec3 col = mix(vec3(0.45, 0.75, 0.9), vec3(0.87, 0.96, 1.0), smoothstep(0.35, 0.8, s));
   float a = edge * (0.55 + 0.45 * s) * smoothstep(1.0, 0.86, vUv.y);
   gl_FragColor = vec4(col, a);
   #include <tonemapping_fragment>
   #include <colorspace_fragment>
   ```
   Use a `ShaderMaterial` with transparent on, depthWrite off, DoubleSide, and a renderOrder above the lake water.
5. **Mist.** About 140 `THREE.Points` dots at the pool, animated on the graphics card from a per-dot seed. Use normal blending at low strength:
   ```glsl
   float t = fract(uTime * (0.2 + seed * 0.2) + seed);
   vec3 p = position + vec3((seed - 0.5) * 2.0 * t, t * 2.2, sin(seed * 40.0) * t);
   gl_PointSize = uScale * (0.12 + t * 0.25) / -mv.z;   vA = (1.0 - t) * 0.25;
   ```
6. **Dressing.** Put 5 or 6 mossy boulders around the falls and pool. Make them from noise-bumped icosahedrons, flattened at the bottom, flat shaded, green where they face up. Make them solid, and climbable if low. Add a small spring pond on top so the water comes from somewhere. Optional: a "You found the Waterfall!" moment that adds a Field Guide entry (see Learning layer).

## Recipe 2: water you can see the reef through
- **Depth picture.** Once at load, make a 256×256 grayscale `DataTexture` over the ground. Each pixel stores `(waterLevel − groundHeight + 1) / 9`, clamped to 0..1.
- **Water surface.** One big plane (about 420 m, 168×168 squares) with a `ShaderMaterial`: transparent, depthWrite off, DoubleSide, and fog on (merge `THREE.UniformsLib.fog` and include the fog chunks).
  - Small sine waves in the vertex shader, about 0.045 m each.
  - Ripple normal from 3 layers of moving noise.
  - Color: `mix(uShallow, uDeep, smoothstep(0.3, 6.5, depth))`, brighter in the first 1.2 m.
  - Sky reflection by `pow(1 − dot(N, V), 3)`.
  - Sun sparkle: `pow(sd, 260) × 3 + pow(sd, 22) × 0.22`.
  - **Shoreline foam** where depth is under about 0.3 m, its edge breathing with `sin(time)`.
  - `alpha = mix(0.45, 0.95, smoothstep(0.0, 5.0, depth))`.
  - From underneath (`!gl_FrontFacing`), draw a pale blue-green shimmering ceiling.
- **Caustics (light net on the sea floor).** Add to ground, rocks, corals and animals with `onBeforeCompile` (pass the world position; give each material its own `customProgramCacheKey`):
  ```glsl
  float causticLine(vec2 p, float t) {
    vec2 i = p; float c = 1.0, inten = 0.005;
    for (int n = 0; n < 4; n++) {
      float tt = t * (1.0 - (3.5 / float(n + 1)));
      i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
      c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
    }
    c /= 4.0; c = 1.17 - pow(c, 1.4);
    return clamp(pow(abs(c), 8.0), 0.0, 1.0);
  }
  // before #include <opaque_fragment>:
  float uw = smoothstep(uWL + 0.05, uWL - 0.35, vWPos.y);
  float dpt = clamp((uWL - vWPos.y) / 7.0, 0.0, 1.0);
  outgoingLight += causticLine(vWPos.xz * 0.55, uTime * 0.5) * uw * (1.0 - dpt * 0.75)
                 * vec3(0.6, 0.9, 0.95) * 0.35 * (0.4 + 0.6 * outgoingLight);
  outgoingLight = mix(outgoingLight, outgoingLight * vec3(0.55, 0.85, 0.95), uw * (0.1 + dpt * 0.4));
  ```
- **Underwater.** When the camera goes below the water (and is near the player), switch the fog to blue-green (density about 0.048), show rising bubbles, and give a one-time tip about the swim keys.

## Recipe 3: the coral reef
- **Reef mounds.** 6 to 8 spots, each with a radius of 3 to 5 m and a top about 1.1 to 1.8 m under the surface: `h = max(h, bed + (top − bed) × (1 − q)²)`, where q = distance² ÷ radius².
- **Corals.** Use one `InstancedMesh` per kind, with a color per copy.
  - Brain coral: an icosahedron (detail 4) with wavy ridges `abs(sin(n.x·22 + …) × sin(n.z·20 + …))`, half buried, tan with darker grooves.
  - Branching coral: 3 trunks that split 2–3 ways for 3 levels, made of merged 5-sided cylinders, in two shapes. Colors `#FF6A2A #FF8A4A #F03A70 #FFC23A #9A5FF0 #3ED2D8`.
  - Sea fans: a flat square with a canvas lattice texture, `alphaTest: 0.4`, DoubleSide, purple or pink.
  - Tube sponges: 4 open cylinders. Starfish: an extruded 5-point star on the sand.
  - Seagrass: thin tapered blades 0.35 to 0.9 m tall on sand 0.9 to 4 m deep, in noise patches.
- **Swaying.** Give each vertex a `sway` value (0 at the bottom, 1 at the tip). Push it sideways by a sine wave whose timing depends on the plant's position. Underwater use speed about 0.8 and amount about 0.14 for seagrass. The same code can sway grass on land and bend it away from the player's feet.

## Recipe 4: reef animals
Every animal follows the same pattern: **a list of data, one shape, and a small update each frame.** Animals stay in the water, stay above the floor, and drift away when the player comes close.

**Fish schools.** One `InstancedMesh` for all fish: a white squashed-sphere body (about 0.09 × 0.12 × 0.3 m) plus a flat cone tail, with color from the instance color. Make 4 schools: yellow 34, blue 44, orange 14, teal 22. Each school has a center, radius, depth and speed (negative swims the other way).
```js
// per fish
{ school, a: randomAngle, rr: radius * (0.6..1.2), dy: -0.3..0.3, ph: randomPhase, sc: 0.55..0.95, off: new Vector3() }
// each frame
f.a += school.speed * dt * (1 + 0.2 * Math.sin(t + f.ph));
x = cx + cos(f.a) * f.rr;  z = cz + sin(f.a) * f.rr;
y = max(floor(x, z) + 0.35, school.y + f.dy + 0.15 * sin(t * 1.3 + f.ph));
if (distToPlayer < 2.2) off += awayFromPlayer * (2.2 - d) * 2.5 * dt;   off *= 1 - dt * 0.6;
position = (x, min(y, waterLevel - 0.25), z) + off;
heading  = direction around the circle + 0.15 * sin(t * 9 + f.ph);   // tail wiggle
```
Then set `instanceMatrix.needsUpdate = true`, and turn off frustum culling for the fish.

**Sea turtle.** A `Group` built from simple shapes, all casting shadows:
- Shell: icosahedron (detail 1, flat shading, `#6B7A3A`), scaled 1 × 0.38 × 1.25.
- Belly: pale `#E2D7A0`.
- Head: `#A8B87A`, with two tiny black eyes.
- Four flippers: each a very flat sphere inside its own pivot group, so it swings from the shoulder. Front flippers are long (0.5), back ones short (0.25).
```js
const a = t * 0.06, x = cx + Math.cos(a) * 11, z = cz + Math.sin(a) * 7;
turtle.position.set(x, Math.max(floor(x, z) + 0.6, -1.7 + Math.sin(t * 0.5) * 0.25), z);
turtle.rotation.y = Math.atan2(-Math.sin(a) * 11, Math.cos(a) * 7) + Math.PI / 2 + Math.PI;
for (const f of flippers) { const w = Math.sin(t * 2.2 + (f.front ? 0 : 1.5));
  f.pivot.rotation.z = f.side * w * (f.front ? 0.5 : 0.3); f.pivot.rotation.y = f.side * w * 0.25; }
```

**More animals (same pattern).** Each kind needs a home, a shape from simple pieces, a calm way of moving, and the rules: in the water, above the floor, shy. Use **real species with their real behavior** (see Real Earth rules). Pick a few:
- **Manta ray:** a flat diamond plus tail, gliding in slow figure-eights and flapping its wing tips.
- **Jellyfish:** a glowing see-through bell with wavy ribbons, pulsing up and sinking slowly, softly glowing at night.
- **Clownfish:** orange with white stripes, staying near a swaying anemone and darting into it when you come close.
- **Crab:** walks sideways on the sand and hides under a rock when you get near.
- **Octopus:** sits on a rock, slowly changes color, and puffs away with a little dark cloud.
- **Dolphins:** swim past the reef in pairs and make arcing jumps with splash rings.
- **Seahorse:** bobs by the seagrass.

Keep counts modest, use instancing for more than about 10 copies, and skip the per-animal lights (use glowing colors instead).

## Swimming (if the area doesn't have it yet)
- The area sets a `waterLevel`. The alien floats when the ground is lower than `waterLevel − height × 0.62`.
- **Space** swims up and **X** dives (about 2.4 m/s). With no key pressed, the alien drifts up to the surface, and never goes below the floor + 0.05. It never runs out of air.
- Swim speed is about 2.5 m/s (3.9 with Shift). Reaching shallow water walks you out.
- Lean forward while swimming (more when diving) and bob at the surface. If the alien's antennae glow, let them light up the water a little when diving deep.
- Jumping in plays a splash sound and shows a growing white ring.

## Speed, testing and reporting
- Instancing everywhere things repeat. See-through things (water, waterfall, mist) draw last with depthWrite off. Particles move on the graphics card.
- Write an automated Playwright test. It should check:
  - The pool is swimmable and joins the larger water.
  - Swim, dive, floor stop, surfacing and walking out all work.
  - Rocks are solid, and animals stay in the water.
  - Field Guide entries unlock in both English and Spanish, and the language switch still works.
  - There are no console errors, and the admin password does not appear in any file.
- Take screenshots of the waterfall and the reef (from the surface and underwater), look at them, and fix anything too pale, too dark, floating, sunk, or water that looks like it flows uphill.
- Copy the changed files into my **Earthling_Field_Guide** folder on my Mac Desktop. Raise the version number and tell me which version to look for. Report in plain words: what was added, where to find it, which keys to press, and which Field Guide entries students can discover. Then give me the `git add`, `git commit` and `git push` commands.
