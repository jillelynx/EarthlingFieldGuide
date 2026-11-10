/* WORLD 5 GAME FILE: Environmental Pressure Drives Evolution (five levels).
   PA STEELS standards practiced here: 3.1.9-12.S, T, U, W, X (Module 2: Natural Selection and Evolution).
   Same building steps as World 1 (see world1.js for the full list). Content lives in world5-questions.js.
   The world is a changing island chain and a canyon full of fossils. The last level ends with a boss
   that mixes evolution questions with look-alike pairs from the whole world. */
FieldGuide.registerWorld({
  id: 5,
  title: 'Evolution',
  levels: [
    { id: '5-1', title: 'Survival of the Fittest', theme: 'island',
      log: 'Mission log: New world! An island chain where a drought just hit. The finches here are not all the same. Find out who survives, and why it matters for their offspring.',
      outro: 'Report sent: individuals vary, more are born than can survive, and those with helpful inherited traits survive and reproduce more. Over generations, natural selection makes helpful alleles more common.',
      build: function (b) {
        b.hint(5, 4.6, 'World 5: Evolution. Scan everything you see!').sparks(9, 1.2, 4).ground(16).review()
          .scan(4, 's5-variation').scan(9, 's5-adaptation').scan(14, 's5-fitness').ground(18).hsparks(-11, 6.2, 4)
          .gap(3.2).virus(5, 2.5, 1).qblock(10, 3.4, 'sparks').ground(14)
          .scan(3, 's5-pressure').scan(8, 's5-selection').scan(13, 's5-camouflage').ground(16)
          .hunt('selection-needs')
          .qblock(3, 3.4, 'boost').ground(8)
          .sequence('s-selection')
          .snapper(5, 3.6, 0).spikes(10, 1.8).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .refuel().scan(3, 's5-darwin').ground(6)
          .readData('d-finch')
          .become('b-moth')
          .wordbank('wb-selection')
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.R', '3.1.9-12.Q', '3.1.9-12.I', '3.1.9-12.W'])
          .virus(5, 2.4, 1.2).sparks(2, 3.2, 4).ground(12)
          .station(['w5q01', 'w5q04'])
          .goal();
      } },
    { id: '5-2', title: 'Four Factors', theme: 'island',
      log: 'Mission log: A storm hit the islands and food is scarce. Before I can explain how species change, I need the four factors that make evolution happen.',
      outro: 'Report sent: evolution mostly results from four factors: species can produce more offspring than can survive, individuals carry inherited variation from mutation and sexual reproduction, they compete for limited resources, and the better-suited ones survive and reproduce more.',
      build: function (b) {
        b.sparks(4, 1.2, 4).virus(9, 2, 1).ground(12).review()
          .scan(3, 's5-overproduce').scan(8, 's5-newallele').scan(13, 's5-shuffle').ground(16).hsparks(-10, 6.2, 4)
          .scan(3, 's5-competition').ground(6)
          .sequence('s-fourfactors')
          .readData('d-overproduce')
          .squeeze(3, 4).snapper(11, 3.4, 0.6).ground(15)
          .refuel().scan(3, 's5-limited').scan(8, 's5-heritable').scan(13, 's5-morekids').ground(21)
          .catchGame('c-factors')
          .become('b-factors')
          .bridge(11).virus(4, 2.5, 1.2).spikes(9, 1.8).qblock(13, 3.4, 'shield').ground(16)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.Q', '3.1.9-12.R', '3.1.9-12.W', '3.1.9-12.T'])
          .station(['w5q35', 'w5q37'])
          .goal();
      } },
    { id: '5-3', title: 'New Species', theme: 'canyon',
      log: 'Mission log: A giant canyon splits this land in two. The squirrels on each side look a little different. Is one species turning into two?',
      outro: 'Report sent: when a barrier like a canyon keeps populations apart, each one adapts to its own conditions and can become a new species. Changes in the environment can make some species increase, lead to new species over time, or drive others to extinction.',
      build: function (b) {
        b.hint(5, 4.6, 'Two sides, two populations. Scan them.').sparks(9, 1.2, 4).ground(14).review()
          .scan(3, 's5-species').scan(8, 's5-geographic').ground(11).hsparks(-11, 6.2, 4)
          .become('b-isolation')
          .scan(3, 's5-envchange').scan(8, 's5-ratechange').ground(11)
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .station([{ sort: 'env-change', n: 4 }])
          .scan(3, 's5-speciation').scan(8, 's5-radiation').scan(13, 's5-extinct').ground(16)
          .maze('maze-speciation')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .wordbank('wb-speciation')
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.I', '3.1.9-12.M', '3.1.9-12.W', '3.1.9-12.X'])
          .station(['w5q08', 'w5q47'])
          .bridge(12, { ay: 1.4, sp: 1.1 }).ground(5)
          .goal();
      } },
    { id: '5-4', title: 'Reading the Evidence', theme: 'canyon',
      log: 'Mission log: The canyon walls are a history book written in rock. With my hand drill I can dig down through the layers. The deeper I dig, the further back in time I go.',
      outro: 'Report sent: fossils in rock layers, transitional fossils, homologous and vestigial structures, similar embryos, matching DNA and proteins, and a universal genetic code all show that living things share common ancestors.',
      build: function (b) {
        /* FOSSIL DIG: evidence from living things up top, then dig freely DOWN through five rock layers, each older than the one above
           (law of superposition). Each layer is a block of rock to tunnel through: fossils and minerals are buried in it, hard boulders
           must be dug around, and loose boulders fall if you dig out what holds them up. Samples go into a bag (3 at a time) and up
           to the lab through a sample capsule. The layers are a "greatest hits" stack from real fossil sites, in true age order. */
        b.hint(5, 4.6, 'Evidence from living things first. Then dig down into the rock!').sparks(9, 1.2, 4).ground(14).review()
          .scan(3, 's5-embryo').scan(8, 's5-molecular').scan(13, 's5-code').ground(16).hsparks(-10, 6.2, 4)
          .readData('d-cytochrome')
          .scan(3, 's5-fossil').scan(8, 's5-layers').capsule(12.5).ground(15)
          .digField({ color: '#c8a878', fossils: [[3, 2, 's5r-mammoth']], ores: [[7, 1, 'quartz'], [1, 5, 'calcite']], boulders: [[5, 3, 1], [6, 3, 0], [8, 5, 0]] })
          .stratum({ name: 'Layer 1 · Ice Age', sub: 'About 20,000 years ago. Near the top = youngest.', color: '#c8a878' })
          .rockfall(9, 4.2, 0).capsule(14).ground(16)
          .become('b-homolog').ground(4)
          .digField({ color: '#b88a5a', fossils: [[5, 3, 's5r-ambulo']], ores: [[2, 1, 'gypsum'], [8, 4, 'hematite']], boulders: [[4, 1, 0], [1, 3, 1], [7, 2, 0], [3, 5, 0]] })
          .stratum({ name: 'Layer 2 · Early whales', sub: 'About 49 million years ago (fossils found in Pakistan)', color: '#b88a5a' })
          .scan(4, 's5-vestigial').scan(9, 's5-homologous').scan(14, 's5-analogous').capsule(18).ground(20)
          .refuel().station([{ sort: 'structures', n: 4 }]).ground(4)
          .digField({ color: '#9a6a4a', fossils: [[2, 2, 's5r-dino']], ores: [[6, 4, 'hematite'], [8, 1, 'quartz']], boulders: [[5, 1, 1], [5, 2, 0], [1, 4, 0], [7, 5, 1]] })
          .stratum({ name: 'Layer 3 · Dinosaurs', sub: 'About 68 million years ago (like Montana\'s Hell Creek rocks)', color: '#9a6a4a' })
          .rockfall(8, 3.6, 0.4).capsule(13).ground(16)
          .lablock('lock-5-4').ground(4)
          .digField({ color: '#8a7a6a', fossils: [[6, 3, 's5-transitional']], ores: [[2, 2, 'calcite'], [4, 5, 'pyrite']], boulders: [[3, 1, 0], [8, 2, 1], [1, 4, 0]] })
          .stratum({ name: 'Layer 4 · Fish with legs', sub: 'About 375 million years ago (Tiktaalik, Ellesmere Island, Canada)', color: '#8a7a6a' })
          .rockfall(9, 3.8, 1.2).capsule(13).ground(16)
          .mixed(2, ['3.1.9-12.A', '3.1.9-12.X', '3.1.9-12.S', '3.1.9-12.W'])
          .station(['w5q17', 'w5q22']).ground(4)
          .digField({ color: '#6a7a8a', fossils: [[3, 2, 's5r-trilobite']], ores: [[7, 3, 'pyrite'], [1, 5, 'calcite']], boulders: [[5, 2, 0], [6, 4, 1]],
            rare: [0, 6, { name: 'Hallucigenia fossil', fact: 'A tiny spiky Burgess Shale animal. Scientists first drew it upside down and back to front. New fossils showed them the mistake: science corrects itself with evidence.' }] })
          .stratum({ name: 'Layer 5 · Early sea animals', sub: 'About 500 million years ago (like the Burgess Shale, Canada)', color: '#6a7a8a' })
          .rockfall(9, 3.2, 1).capsule(13).ground(16)
          .sequence('s-layers').ground(3)
          .caveEnd().ground(10)
          .goal();
      } },
    { id: '5-5', title: 'Counting Traits', theme: 'island',
      log: 'Mission log: Last stop. I have counted these populations for many generations. Before sending the full report home, read the numbers: which traits are becoming more common, and why? Then face the final storm.',
      outro: 'Report sent: when an inherited trait gives an advantage, the share of the population with that trait tends to rise, generation after generation. Percents, averages, and graphs show natural selection at work.',
      build: function (b) {
        b.sparks(4, 1.2, 4).virus(8, 2, 1).ground(12).review()
          .scan(3, 's5-pocketmouse').scan(8, 's5-proportion').scan(13, 's5-generation').ground(16).hsparks(-12, 6.2, 4)
          .readData('d-mice')
          .scan(3, 's5-resist').scan(8, 's5-mean').ground(11)
          .sequence('s-resistance')
          .readData('d-resistance')
          .wordbank('wb-traits')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .station([{ sort: 'trait-trend', n: 4 }])
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(5, 'boom').mixed(2, ['3.1.9-12.W', '3.1.9-12.X', '3.1.9-12.T', '3.1.9-12.S', '3.1.9-12.U'])
          .qblock(3, 3.4, 'shield').hazard(8, 1.2, { ax: 2, sp: 1.3 }).ground(14)
          .hint(-3, 4.6, 'Boss ahead: The Selection Storm')
          .boss('The Selection Storm', 'boss', 5, 2, ['3.1.9-12.W', '3.1.9-12.T', '3.1.9-12.X', '3.1.9-12.S', '3.1.9-12.U'])
          .bridge(11).ground(5)
          .goal();
      } },
    { id: '5-6', title: 'Bonus: Reef Rush', theme: 'pxreef', bonus: true, par: 55,
      log: 'BONUS SPEED RUN! Dash along the coral reef floor. Bubbles, coins and lots of obstacles! Just for fun: no science questions. Grab the coins, dodge the obstacles and beat the time for 3 stars.',
      outro: 'Bonus speed run cleared! Beat the par time for 3 stars, then try again for a faster time.',
      build: function (b) {
        /* PIXEL BONUS SPEED RUN (v70): a fun 8-bit course in the Reef Rush habitat (pixelscape.js). No questions; stars come from the time (par = 3 stars). Optional: not needed for the certificates. */
        b.hint(4, 4.6, 'SPEED RUN! Grab coins, dodge obstacles, beat the time!').sparks(7, 1.2, 6).ground(18).hsparks(-12, 6.2, 5)
          .qblock(4, 3.4, 'sparks').gap(3).sparks(2, 2.6, 4).ground(10).virus(-5, 2.4, 0.9)
          .hplat(-6, 2.4, 3).hplat(-3.5, 4.8, 3).hplat(-1, 7.6, 2.6).hsparks(-1, 9, 3).ground(6)
          .gap(2.6).ground(5).gap(2.8).sparks(1, 1.2, 3).ground(6).virus(-3, 2.2, 1.2)
          .spikes(4, 1.8).sparks(2, 3.4, 5).snapper(10, 3.4, 0.5).ground(15)
          .qblock(3, 3.4, 'boost').rise(1.5).ground(6).rise(1.5).sparks(1, 1.2, 4).ground(6).rise(-3).gap(3).ground(8)
          .hazard(5, 1.2, { ax: 2, sp: 1.4 }).virus(10, 2.4, 1.3).sparks(2, 3.2, 6).ground(14)
          .crumbleBridge(4, 'crumble').sparks(1, 1.2, 5).ground(10).spikes(3, 1.6).virus(8, 2.4, 1.4).ground(12)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .bridge(10).ground(4).hazard(4, 1.0, { ax: 1.8, sp: 1.6 }).hazard(9, 3.0, { ax: 1.6, sp: 1.4, ay: 0.8 }).sparks(2, 1.2, 6).ground(14)
          .qblock(3, 3.4, 'life').gap(3.2).ground(6).gap(3.4).ground(6).snapper(4, 3.0, 0.8).virus(10, 2.4, 1.5).ground(14)
          .sparks(3, 1.2, 8).hsparks(0, 6, 6).ground(16)
          .goal();
      } }
  ]
});
