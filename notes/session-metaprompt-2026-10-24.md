# METAPROMPT: Earthling Field Guide, session of October 24, 2026

You are continuing development of **Earthling Field Guide**, my browser game that helps Pennsylvania high school students prepare for the Keystone Biology exam. It is built with three.js and plain JavaScript (engine.js, world1.js to world5.js, the world question files, cozy.js, biodome.js, domesim.js, index.html) and hosted on GitHub Pages. My Mac folder **Earthling_Field_Guide** holds the git copy. The current version is **42**. My notes from last session are in `notes/NEXT_SESSION_NOTES.md`, with two reference pictures (`notes/idea-mining-game.png` and `notes/idea-home-planet-callisto.png`). The design history is in `notes/design-notes.md`, and the biome plan is in `notes/biomes-plan.md`. Read all of them first.

Act as a small game team: a gameplay programmer, a UI designer, a biology content reviewer, and a QA tester. Reach one plan.

## How to talk to me
I am a teacher, not a developer. Use plain language, with no unexplained jargon. Tell me what you changed and why, what you tested, what doesn't work yet, and what I should try. Ask before big creative changes. Keep backups so anything can be undone.

## Design rules that always apply
- **The Earth rule.** Platformer levels take place in real places on Earth and follow real Earth physics. Anything unusual comes from the alien's own gear or abilities.
- **The Biodome stays closed.** It is a sealed system the player must balance. Nothing ever opens it to the planet's air. Players may control how much sunlight gets in (more or less sun).
- **Keep what works:** the English/Spanish switch (cozy mode and Biodome), admin mode (password kept private: never write it in any file), the speedrun timer, saved progress, stars, gear, the Supply Shop, and the Low graphics setting. The platformer stays English-only.
- **Chromebooks:** everything must run smoothly on school Chromebooks.

## Part 1: Fix bugs I found (do these first)

**A. Words overlapping.**
- In level 5-4, each rock-layer sign has a big title ("Layer 2 · Early whales") and a smaller line under it. When the title wraps onto two lines, it covers the smaller line. My screenshot shows "whales" on top of "years ago (fossils found in Pakistan)".
- Fix it so stacked signs measure their real height and never overlap, at every Text size setting.
- Then check every level and both other modes for other overlapping words: ocean zone signs in 1-2, scan labels, hint signs, the Biodome panels, and cozy mode signs. Take a screenshot of each fix.

**B. The finished cell is hidden by its labels.**
- When a "Build a cell" model is finished, its part labels sit right on top of the cell and cover it.
- Move the labels off to the sides (left and right of the cell), each with a thin line pointing to its part, like a textbook diagram.
- When the cell is complete, make it **bigger, brighter and easy to see**: it should glow and light itself.
- This matters most now that level 1-2 takes place in the dark deep ocean. The finished cell must stand out clearly against dark water and still look good in bright levels.

**C. Cozy mode: no running jump forward** (note 1). Find out why and fix it, so jumping while running forward carries the alien forward.

**D. Cozy mode: water looks like it runs uphill** (note 3). Find every spot where a creek, stream or waterfall seems to flow uphill and fix the ground or the water so water always flows downhill. Show before-and-after screenshots.

## Part 2: The Biodome (notes 2, 6, 7, 8, 10)
1. **Panels block the view** (note 2). Let the supply list and the season box shrink to a small tab, or hide on their own while the player is looking around the dome, and come back with one click. Keep them easy to find for first-time players.
2. **A "Place all" button** (note 6) for the build step. It must still follow the rules for what has to go in first (for example, water and soil before plants, prey before predators). Explain anything it couldn't place.
3. **Rename "Dome cover"** (note 8) to something that says what it does, for example a sun shade with "more sun / less sun". Consider three light levels. Explain the trade-off in one line: less sun keeps the dome cooler and wetter, but plants grow and make oxygen more slowly.
4. **Keep the dome closed.** "Scoop out extra algae" currently dries the algae outside the dome. Change it so the algae stays inside, for example onto the compost pile, so the matter is recycled.
5. **When nothing is left in storage** (note 7):
   - Make sure the Fix panel always offers at least one tool that keeps everything inside the dome.
   - Add a "carbon sink" option (note 10): players can grow more producers from what is already in the dome, such as taking cuttings or spreading seeds from grass and wildflowers already growing. This removes carbon dioxide without bringing anything new in.
   - **Ask me** whether spare crates may still be added during the seasons (only what was packed, brought in through an airlock) or only during building.
6. Re-run the full Biodome test and confirm a balanced dome is still possible, and that the dome can still fail.

## Part 3: Bigger new features (plan first, then build one at a time with a checkpoint after each)
1. **Cave digging that plays like the mining game in my picture** (note 4).
   - The picture shows a side view where a drill vehicle tunnels through dirt, goes around hard boulders, collects ore, and has Drill, Cargo and Hull meters, with a surface base.
   - **Ask me** whether this is for platformer level 5-4 (the fossil dig), for the limestone cave planned in cozy mode, or a separate side game.
   - In every case, the "ore" should be real things to collect and learn from (fossils, minerals, or cave life), and the dig must follow the Earth rule (real rock layers).
2. **A longer trip home** (note 5). Replace the short flight to the Biodome with a short movie scene:
   - The ship leaves Earth, zooms far out past the solar system and the Milky Way, travels through a wormhole or tesseract, then zooms in on another galaxy and down to the home planet.
   - The player can skip it.
   - Remake the home planet to look like Jupiter's moon **Callisto** (dark, icy, covered in bright craters; see my picture). Keep the dome on its surface.
3. **A natural selection simulation** (note 9). Check whether the game already has one (World 5 has some selection activities). If not, propose one, for example peppered moths or finch beaks with a population that changes over generations as the environment changes, and say where it fits (a World 5 side game, or a Biodome event).

## Part 4: Ideas for side-game simulations (note 12)
Suggest 4 to 6 short side games (5 to 10 minutes each) that teach Keystone topics through play. Include protein folding and mutations, and add others, such as an enzyme and temperature lab, a Punnett square breeding game, an osmosis cell, a food web collapse game, and DNA replication. For each, give the Keystone Eligible Content code, how it plays, and how hard it is to build. **Do not build these yet**; I will choose.

## Work order and checkpoints
1. **Plan:** summarize what you found, list your questions (only the ones that change what you build), and wait for my answers.
2. **Build Parts 1 and 2.** Test, take screenshots, package as Version 43, and commit to my Earthling_Field_Guide folder.
3. **Part 3:** build one feature at a time, with screenshots and a checkpoint after each.
4. **Part 4:** a short written list of suggestions.

## Testing (every step)
- Run the automatic playthrough of the platformer levels you touched, plus any level that shares the changed code.
- Run the Biodome playthrough.
- Walk through cozy mode by hand: running jumps, water, signs.
- Check English and Spanish, and the Low graphics and Text size settings.
- Every level must still be finishable.
