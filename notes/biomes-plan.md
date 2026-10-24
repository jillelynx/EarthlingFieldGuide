# METAPROMPT: Earth's Biomes — make every platformer level look and play differently

You are continuing development of **Earthling Field Guide**, my browser game that preps Pennsylvania high school students for the Keystone Biology exam. It is built with three.js and plain JavaScript files (engine.js, world1.js … world5.js, world1-questions.js … world5-questions.js) and hosted on GitHub Pages. My Mac folder Earthling_Field_Guide holds the git copy that I push to github.com/jillelynx/EarthlingFieldGuide.

Act as a game-design team (level designer, environment artist, gameplay programmer, biology content reviewer, and QA tester) and reach one coherent plan.

## The problem

Students said the platformer levels look and feel the same. That is true: every level from 2-1 to 5-5 uses the same skeleton: flat ground running left to right, scan posts, a germ enemy, a three-step staircase to the rare specimen, a crumbling bridge, a mixed-review gate, a moving bridge, and the beam-up ending. Only the colors and the quiz rooms change, and the character moves the same way in all 25 levels. High schoolers will lose interest.

## The goal

Every level takes place in a **real, recognizable place on Earth**, and every level **plays** differently, not just looks different. A student should be able to describe a level from memory: "that's the one where I swam through the kelp forest" or "the one where I dug down through the fossil layers."

**The Earth rule:** the landscapes must be real and follow real Earth conditions. No floating islands, no impossible terrain. Anything unusual comes from **the alien's own abilities and gear**, not from the world. For example, the alien can hover on steam vents, breathe underwater in a bubble helmet, burrow with a drill, or cling to rock. The places stay true to life.

## The alien's new abilities (explained by alien technology)

Add these movement modes. Each one switches on automatically in the levels that need it, with a short visual cue the first time (an icon and a one-line field note), not a text tutorial.

| Ability | How it plays | Story reason |
|---|---|---|
| Bubble helmet (swim) | Move freely in any direction underwater, with currents that push you, an air meter refilled by air pockets or bubbles, and darker deep water | Alien tech; Earth water is real water |
| Hover pack (float) | Rise on real updrafts: steam vents, geyser plumes, warm air over sun-heated rock | The alien "floats"; the vents are real |
| Glide wings | Glide between real high places (rainforest canopy, cliff edges), with real wind gusts | Upgrade of the Explorer cape |
| Burrow drill (dig) | Dig through soft soil or sediment and tunnel down; hard rock blocks you; caves are dark, with a light circle around the alien | Alien tool; the layers are real geology |
| Gecko grip (climb) | Cling to and climb vertical surfaces: tree trunks, kelp stalks, limestone spires, honeycomb | Alien feet; the surfaces are real |
| Ice skates (slide) | Slide on real ice with low friction; stopping takes planning | Real ice physics |
| Heat and cold meter | Some biomes drain energy from heat or cold unless you find shade, water, or shelter | Teaches homeostasis through play |

Keep all existing moves (run, jump, double jump, duck, E), gear, Supply Shop items, and stars.

## Level-by-level plan (25 levels)

Each level keeps its **current learning activities** (scans, hunts, catch games, become-it doors, sequences, mazes, data charts, word banks, sort gates, Lab Locks, balances, bosses, Refuel Station). Move them into the new setting and **reskin them to fit** (for example, a membrane door becomes a sea-anemone gate in the tide pool). Biology facts about each place must be accurate.

| Level | Real place on Earth | Main way to move | Why it fits the biology | Signature moment |
|---|---|---|---|---|
| 1-1 Signs of Life | Pocono vernal pool and spring forest (Pennsylvania) | Walk and hop across lily pads and logs | Is it alive? Frogs, eggs, moss, rocks | Frog eggs hatch into tadpoles as you pass |
| 1-2 Two Kinds of Cells | Deep-sea hydrothermal vent | Hover on vent plumes, swim | Prokaryotes (archaea, bacteria) vs eukaryotes (tubeworm cells) | Rising on a black smoker plume |
| 1-3 The Protein Factory | Bioluminescent bay at night (Puerto Rico) | Swim in the dark; glowing plankton light the way | Glowing comes from a protein (luciferase) built by ribosomes | Every stroke makes the water glow |
| 1-4 Membrane Gates | Rocky-shore tide pool (Maine or Oregon) | Part swim, part climb; the tide rises and falls | Osmosis and salt: why tide-pool life manages water and salt | The tide floods the level halfway through |
| 1-5 Body Balance | Desert heat (Mojave or Sahara dunes) | Walk and slide down dunes; heat meter; shade and water stops | Thermoregulation and water balance | Sandstorm: duck behind dunes |
| 2-1 Water and Carbon | Iceland: glacier, ice cave, hot spring | Ice skating and swimming under floating ice | Ice floats, specific heat, cohesion | Swim beneath a frozen lake, with light through the ice |
| 2-2 Building Blocks | Honeybee hive in a summer meadow | Gecko-grip climbing on honeycomb | Sugars (honey), lipids (wax), proteins (royal jelly) | Climb a giant wall of hexagon cells |
| 2-3 Enzyme Workshop | Yellowstone hot springs and geysers | Hover pack on geyser bursts (timed) | Heat-loving microbes' enzymes; temperature and pH | Ride Old Faithful's eruption |
| 2-4 Energy in Cells | Amazon rainforest, floor to canopy | Climb trunks and glide between treetops | Photosynthesis and competition for light | Burst out of the canopy into sunlight |
| 2-5 Food Webs and Cycles | African savanna | Run across plains; wildebeest stampede to dodge | Producers, herbivores, predators, decomposers | A stampede chase across the plain |
| 3-1 Levels of Life | Pennsylvania temperate deciduous forest | Climb up through forest layers (soil, floor, understory, canopy) | Organism → population → community → ecosystem | Zoom out from one deer to the whole valley |
| 3-2 Living Together | Coral reef (Great Barrier Reef) | Full swimming with currents | Clownfish and anemone, cleaner shrimp, sharks | Hide in an anemone while a predator passes |
| 3-3 Limits to Growth | Arctic tundra | Ice skating and snow; cold meter | Lemming and snowy owl cycles, carrying capacity | Blizzard whiteout: follow caribou tracks |
| 3-4 After the Fire | Hawaiian lava fields, then a burned forest | Chase: the screen scrolls; outrun the lava flow | Primary vs secondary succession | Escape the lava, then watch ferns return |
| 3-5 Human Footprints | Chesapeake Bay estuary and salt marsh | Wade and swim; muddy water is darker | Runoff, dead zones, oyster reefs, invasive species | Water clears as you plant the marsh grass |
| 4-1 Copy and Divide | Giant kelp forest (California) | Climb and swim up fast-growing kelp | Kelp grows fast by mitosis | Race up a kelp stalk to the sunlit surface |
| 4-2 Making Gametes | Alaskan salmon river | Swim upstream against the current; leap waterfalls | Spawning: eggs and sperm (gametes), meiosis | Jump a waterfall like a salmon |
| 4-3 Genes and Alleles | Andes terraced farms (Peru) | Climb terrace steps; llama ride | Thousands of potato and corn varieties (alleles) | Sort potato colors on the terraces |
| 4-4 Beyond Mendel | North American prairie and ranch | Run with wind gusts; tumbleweeds | Roan cattle (codominance), wildflower colors | Gusts push you across a sea of grass |
| 4-5 Mutations and Biotech | Himalayan high mountains | Climb with gecko grip; thin air; strong UV | UV light causes mutations; high-altitude adaptations | Summit at sunrise above the clouds |
| 5-1 Survival of the Fittest | Galápagos Islands | Walk lava shores, swim with marine iguanas | Finch beaks, natural selection | A drought changes which seeds are left |
| 5-2 Chance and Change | Madagascar tsingy (sharp limestone spires) | Climb and leap between karst spires | Island species, founder effect, genetic drift | A lemur leap between spires |
| 5-3 New Species | Grand Canyon | Climb canyon walls; river-raft section | Kaibab vs Abert's squirrels: geographic isolation | Ride the rapids between the two rims |
| 5-4 Reading the Evidence | Fossil cliffs and caverns (badlands, limestone caves) | Burrow drill: dig DOWN through rock layers | Deeper layers hold older fossils (law of superposition) | Dig past mammoths, dinosaurs, then trilobites |
| 5-5 How Science Knows | Antarctic research station and ice fields | Ice skating; drill an ice core | Observation, inference, hypothesis, theory, law | Read Earth's history in an ice core |

You may adjust a setting if a better real place fits the biology, but keep at least 18 different biomes and do not repeat a main way of moving in two levels in a row. Other real places you may use for bonus areas, secret rooms, or the Exploration mode later: mangroves, cloud forests, salt flats (Salar de Uyuni), beaches, karst towers (Guilin, Ha Long Bay), caverns, cenotes, the polar ice edge, deserts at night, northern lights.

## Variety rules (apply to every level)

1. **Layout:** no level may use the old skeleton. Mix horizontal, vertical (climb up or dig down), underwater, and chase sections. At least 8 levels must be mostly vertical or mostly underwater.
2. **Secrets:** move the rare specimen to a different kind of hiding spot in every level (a cave behind a waterfall, the bottom of the reef, the top of a spire, under the ice). Make it a real organism from that place (an axolotl, an anglerfish, a snow leopard, a trilobite fossil).
3. **Enemies and hazards:** replace the generic "germ" enemy with real dangers from that place: jellyfish, moray eels, falling icicles, lava, rockfall, quicksand, stinging nettles, a charging rhino in the stampede. Hazards cost energy; they never kill outright, and no gore.
4. **Look and sound:** each level gets its own sky, lighting, background layers, particles (snow, spray, ash, bubbles, fireflies, aurora) and music. Real landmarks in the background (Old Faithful, the Grand Canyon walls, Himalayan peaks).
5. **Learning stays in the play:** keep every activity and Keystone/STEELS tag. Where possible, make the new movement teach the idea (digging down = older fossils; climbing forest layers = levels of organization; swimming upstream = salmon spawning).
6. **Keep:** the mission log and report, scanning and the Journal, Refuel Stations, the speedrun timer, wrong-answer penalties, sort-it-out cell building, admin mode, stars, gear, Supply Shop, saved progress, the Biodome links, and the Mission Map. Rename level titles only if I approve.
7. **Performance:** must run smoothly on school Chromebooks. Respect the Low graphics setting and keep each level about 2–4 minutes long.

## How to work

**Phase A: plan, then wait for my approval.**
- Inspect the code and summarize, in plain language, how levels are built now and what would need to change.
- Confirm or adjust the 25-level table above.
- List the new abilities, hazards, and secrets per level.
- Point out anything risky, such as performance, accessibility, or keyboard and touch controls.

**Phase B: build the movement abilities first, as reusable pieces.**
- Build swim, hover, glide, dig, climb, slide, and the heat/cold meter.
- Prove each one in one sample level and show me before-and-after screenshots.

**Phase C: rebuild the levels, one world at a time.**
- After each world, send me screenshots of every level, a short "what's new" list, and test results.
- Pause for my feedback before starting the next world.

**Phase D: final check.**
- Re-run the automatic playthrough of all 25 levels.
- Confirm saved progress still loads.
- Update the level cheat sheet (setting, way of moving, challenges, hazards, secrets for each level).
- Package the files and commit them to my Earthling_Field_Guide folder.

## Testing (every phase)

- Every level must be finishable. Run the automatic player and also check by hand: entering and leaving water, climbing up and down, digging, sliding, and the chase sections.
- Check that the player can never get stuck, fall out of the world, or be trapped underwater without air.
- Check keyboard and touch controls, and the Low graphics setting.
- Biology review: every fact about each place and organism must be accurate. Flag anything you are unsure of.

## How to talk to me

I am a teacher, not a developer. Use plain language, and tell me what you changed and why, what you tested, what does not work yet, and what I should try. Ask before making big creative changes. Keep backups so anything can be undone.
