# METAPROMPT: Build a Middle School version of Earthling Field Guide (PA STEELS, grades 6–8)

You are helping me, Jill Lynch, a science teacher, make a **new, separate middle school game** based on my high school game **Earthling Field Guide**. The high school game prepares students for the Keystone Biology exam. The new game must teach the **Pennsylvania STEELS standards for grades 6–8**. It must not change the high school game in any way.

## 1. Where the files are

- **The high school game (read only):** my Mac folder `~/Desktop/Earthling_Field_Guide`. It is also on GitHub at https://github.com/jillelynx/EarthlingFieldGuide, published with GitHub Pages.
- **The new game:** a new folder on my Desktop, named after the new game's name once I choose it (see section 5). Until then, call it `~/Desktop/MiddleSchool_Science_Game`. It gets its own git history and its own GitHub repository, which I will create and push myself.
- **How to reach the files:** this chat must be linked to my computer through the Claude desktop app, with both folders connected. If you can't reach them, tell me how to link this chat or ask me to attach the files. **Never write to, commit in, or push from the high school folder.** Copy what you need into the new folder.

### What to read first, in this order

These are all in the high school folder.

1. `notes/design-notes.md`: the full design history, rules and decisions.
2. `notes/NEXT_SESSION_NOTES.md`, `notes/biomes-plan.md`, `notes/STEELS_alignment.md`, and the newest `notes/session-metaprompt-*.md`.
3. `notes/PA_STEELS_grades6-8.md`: the exact wording of every grades 6–8 standard, copied from the official PDF.
4. `notes/K-12_STEELS_Standards_UA_3.pdf`: the official Pennsylvania standards document. This is the source of truth.
5. The code:
   - `index.html` (menus, settings, About, admin)
   - `engine.js` (the platformer engine, level builder, scans, questions, standards tables, progress)
   - `world1.js` to `world5.js` (levels) and `world1-questions.js` to `world5-questions.js` (question banks)
   - `cozy.js` (cozy exploring mode, Pennsylvania places, English/Spanish)
   - `biodome.js` and `domesim.js` (the closed Biodome challenge and its simulation)
   - `intro.js`, `creatures.js`, `fauna.js`, `birdmodels.js`, `ambient.js`, `earthtex.js`, `wordlab.js`, `namefilter.js`
   - Ignore the old `earthling-field-guide-vNN.zip` backups.

## 2. The most important rule: never guess at standards

- Use **only** the exact wording in `notes/K-12_STEELS_Standards_UA_3.pdf`.
- `notes/PA_STEELS_grades6-8.md` is a convenience copy. Check each standard against the PDF before you use it, and tell me if the two ever differ.
- Never write a standard code or its wording from memory.
- Never assume a question "fits" a standard. Quote the standard's words next to the question and show why it matches.
- **The PSSA Grade 8 Science test.** The official PSSA page is https://www.pa.gov/agencies/education/programs-and-services/instruction/elementary-and-secondary-education/assessment-and-accountability/pennsylvania-system-of-school-assessment-pssa (open the Science section). Read these official documents before planning, and quote them rather than summarizing from memory:
  - **2025 PSSA Science Test Design (Grades 5 & 8, STEELS Aligned):** https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa/test-designs/pssa-science-test-design.pdf

    A first reading (October 24, 2026) found these points. Re-check them in the PDF:
    - The grade 8 test counts 102 standards in four reporting categories:
      - Life Sciences and Environmental Literacy & Sustainability: 30
      - Physical Sciences: 19
      - Earth & Space Sciences: 15
      - Technology and Engineering: 38
    - Each category is 20% to 30% of the core test (6 to 14 items).
    - The test has 48 points: 39 autoscored items plus three 3-point open-ended items.
    - Item types are multiple choice, technology-enhanced, scenario sets, and 3-point open-ended.
  - **2025 Grade 8 Science Item and Scoring Sampler** (for question style): https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa/item-and-scoring-samples/2025%20pssa%20science%20grade%208%20item%20sampler.pdf
  - **Science Assessment Glossary:** https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa/scoring-guidelines-and-formula-sheets/science/science%20assessment%20glossary.pdf
  - **Grades 5 and 8 Science Reference Materials (2025–2026):** https://www.pa.gov/content/dam/copapwp-pagov/en/education/documents/instruction/assessment-and-accountability/pssa/test-administration-materials/reference-materials/gr%205%20and%208%20science%20scoring%20guidelines.pdf
  - Item samplers from before 2025 were written for the older science standards. Use them only for question style, never for content or codes.
  - If a link no longer works, ask me for the file. If you can't reach the web, ask me to download the PDFs into the `notes` folder.
- If something needs another source you don't have, stop and ask me for the official document. Do not fill the gap.
- Two codes are misprinted in the PDF: "3.56-8.CC" and "3.5.6-8LL". In the game, write them as 3.5.6-8.CC and 3.5.6-8.LL, and note the misprint in the standards table.
- Every question, scan card and activity in the new game carries its STEELS code. The About section keeps the admin-only standards table, now showing the 6–8 codes and their exact wording.

## 3. Your team and how to talk to me

Work as a small team that reaches one plan:

- a gameplay programmer
- a UI designer
- a middle school science content reviewer
- a reading-level reviewer
- a QA tester

How to talk to me:

- I am a teacher, not a developer. Use plain language and explain any technical word.
- After each step, tell me what you changed, what you tested, what doesn't work yet, and what I should try.
- Ask me before any big creative change. Keep backups so anything can be undone.

## 4. What stays the same

Carry these over from the high school game unless I say otherwise:

- **The real-places rule (adapted):** every level happens in a real place with real physics. Anything unusual comes from the alien's own gear or abilities.
  - In the high school game that place is always on Earth. Here, levels for space standards may take place in real places in the solar system, such as the Moon, Mars or Jupiter's moons, using that place's real gravity and conditions.
  - Propose how this works and ask me before building space levels.
- **The Biodome stays sealed:** nothing ever opens it to the outside air. Players may control how much sunlight gets in.
- **Features to keep:**
  - cozy mode and the Biodome, both in English and Spanish
  - admin mode (pick a new password and tell me)
  - speedrun timer, saved progress, stars, gear, the Supply Shop
  - the Low graphics and Text size settings
- **Chromebooks:** everything must run smoothly on school Chromebooks.
- **Saves:** use a different save key in browser storage from the high school game, so the two games never overwrite each other's saved progress.

## 5. What changes for middle school

- **Content:** rebuild the content around the grades 6–8 STEELS, which the grade 8 PSSA Science test now assesses.
  - The PSSA covers all four reporting categories, each 20% to 30% of the test:
    - Life Science plus Environmental Literacy (3.1 and 3.4)
    - Physical Science (3.2)
    - Earth and Space Science (3.3)
    - Technology and Engineering (3.5)
  - A game that prepares students for the PSSA therefore needs all four, not only biology.
  - **Ask me** whether the middle school game should cover:
    - (a) all four categories (PSSA prep), or
    - (b) Life Science and Environmental Literacy only, as a companion to my biology course.
  - The Biodome fits Environmental Literacy, the Technology and Engineering design standards (criteria and constraints, testing and improving a design), and 3.2 energy transfer.
  - Cozy mode's Pennsylvania places fit 3.4 (watersheds and wetlands, local environmental data, Pennsylvania environmental issues).
  - Many 6–8 standards ask students to *do* science: investigate, model, analyze data, argue from evidence. So favor activities where students collect data, build models and make claims.
  - Match the PSSA item types: multiple choice, drag-and-drop (technology-enhanced), short scenario sets, and some 3-point written answers that the game scores with a rubric checklist or saves for the teacher.
- **Reading level:** grades 6–8.
  - Use shorter sentences and everyday words first, with the science word bolded and defined in place.
  - Hints and feedback should explain *why*.
  - Have the reading-level reviewer check every new text.
- **Difficulty:** gentler platforming, more checkpoints, and clearer goals.
  - Keep the challenge optional through stars and the speedrun.
- **A new name.** The game needs its own name, because it covers more than Earth and biology. For example, 3.3.6-8.B and 3.3.6-8.C are about the solar system and galaxies (check the exact wording in the PDF).
  - Propose 4 to 6 names, each with a one-line reason and a title screen idea.
  - Names may keep the alien explorer idea, but must not be confused with "Earthling Field Guide".
  - I choose the name. The folder name and repository name follow from it, so **ask me before creating the folder**.
- **Language:** ask me whether the platformer should be English only (as in the high school game) or also Spanish.

## 6. A starting idea for the worlds (a draft for me to approve, not a decision)

Map each world to standards only after checking their wording in the PDF.

- **World 1, Cells:** what living things are made of, and how cell parts work together (3.1.6-8.A, B).
- **World 2, Body systems:** the body as interacting subsystems; senses and the brain (3.1.6-8.C, H).
- **World 3, Matter and energy in living things:** photosynthesis, and food rearranged into new molecules (3.1.6-8.F, G).
- **World 4, Ecosystems:** resources and populations, interactions, cycling of matter and energy, changes to ecosystems, biodiversity (3.1.6-8.I, J, K, L, U; possibly 3.4.6-8.C watersheds and wetlands, and 3.4.6-8.E local environmental data).
- **World 5, Heredity and change over time:** mutations, asexual and sexual reproduction, growth factors, reproduction behaviors and structures, fossils, anatomy, natural selection, technologies that change inheritance (3.1.6-8.D, E, M, N, O, P, Q, R, S, T).

If I choose all four PSSA categories, add worlds or side areas for Physical Science (3.2), Earth and Space Science (3.3) and Technology and Engineering (3.5). Propose where each fits (for example, the alien's ship and gear for forces and energy, the trip home for the Earth-sun-moon system, the Biodome for engineering design). Show how the question counts track the PSSA category percentages.

## 7. Work order and checkpoints

1. **Review:** read everything listed in section 1. Report back in plain language with:
   - how the high school game is built
   - which parts can be reused as they are (the engine, cozy mode, the Biodome, menus)
   - which parts need new content
   - which parts are tied to Keystone and must be replaced (question banks, scan cards, the Keystone standards tables, About text)
2. **Standards map:** make a table of every standard in the categories I approve. For each one, show:
   - its exact wording
   - the world and level that teaches it
   - the activity type
   - the question count

   Flag any standard the plan doesn't cover. **Wait for my approval.**
3. **Questions:** list only the questions whose answers change what you build, then wait for my answers.
4. **Set up the new folder:**
   - Copy the code.
   - Remove the Keystone content.
   - Give it the new name I chose, save key, version number (start at Version 1) and About page.
   - Make it run with placeholder levels.
   - Checkpoint with me.
5. **Build one world at a time,** with screenshots and a checkpoint after each. Then adapt cozy mode and the Biodome.
6. **Final check:** use a separate reviewer that hasn't seen the build. It checks every standard code and its wording in the game against the PDF.

## 8. Testing (every step)

- Run the automatic playthrough of every level you touched. Every level must be finishable.
- Run the Biodome playthrough. A balanced dome must be possible, and failure must still be possible.
- Walk through cozy mode by hand: running jumps, water, signs, discoveries.
- Check English and Spanish, Low graphics, every Text size, and words overlapping on signs and panels.
- Confirm that the high school folder was not changed. Its `git status` should be clean.
