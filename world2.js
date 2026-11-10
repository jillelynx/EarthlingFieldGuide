/* WORLD 2 GAME FILE: Matter and Energy in Organisms and Ecosystems (five levels).
   Same building steps as World 1 (see world1.js for the full list). Content lives in world2-questions.js.
   Each level teaches first (scan specimens), then lets players use what they learned (hunts, builds,
   doors, data, mazes), with only a few question stations. Mixed review gates pull in World 1 topics too.
   Standards (PA STEELS 9-12, tested on the Keystone Biology exam): 2-1 F, 2-2 E, 2-3 G, 2-4 J, 2-5 H and K. */
FieldGuide.registerWorld({
  id: 2,
  title: 'Matter and Energy',
  levels: [
    { id: '2-1', title: 'Carbon Builders', theme: 'shore',
      log: 'Mission log: New world! Landed on a rocky shore covered in seaweed. Most of every living thing here is built from atoms that were once part of sugar. Find out how.',
      outro: 'Report sent: carbon, hydrogen, and oxygen from sugar combine with elements like nitrogen to build amino acids and other large carbon-based molecules. Atoms are rearranged, never created or destroyed.',
      build: function (b) {
        b.hint(5, 4.6, 'World 2: Matter and Energy. Scan everything you see!').sparks(9, 1.2, 4).ground(16).review()
          .scan(4, 's2-algae').scan(9, 's2-pool').scan(14, 's2-snail').ground(18).hsparks(-11, 6.2, 4)
          .gap(3.2).virus(5, 2.5, 1).qblock(10, 3.4, 'sparks').ground(14)
          .scan(3, 's2-amino').scan(8, 's2-dna').scan(13, 's2-tree').ground(16)
          .hunt('f-build')
          .qblock(3, 3.4, 'boost').ground(8)
          .wordbank('wb-carbon')
          .snapper(5, 3.6, 0).spikes(10, 1.8).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .refuel().scan(3, 's2-carbon').scan(8, 's2-chain').ground(11)
          .station(['w2q06', 'w2q07'])
          .hint(3, 4.8, 'Middle school refresher: the big molecules of life!').scan(7, 's2-monomer').scan(12, 's2-polymer').scan(17, 's2-lipid').scan(22, 's2-protein').ground(25)
          .station([{ sort: 'macro', n: 3 }, 'w2q105'])
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.A', '3.1.9-12.B', '3.1.9-12.C', '3.1.9-12.F'])
          .virus(5, 2.4, 1.2).sparks(2, 3.2, 4).ground(12)
          .station(['w2q79', 'w2q80'])
          .goal();
      } },
    { id: '2-2', title: 'Capturing Light', theme: 'lab',
      log: 'Mission log: A plant research lab. Scientists are shining lamps on pondweed and leaves. Find out how producers turn light into stored food.',
      outro: 'Report sent: photosynthesis uses carbon dioxide, water, and light energy to make sugar and oxygen. Light energy becomes chemical energy stored in the sugar\'s bonds.',
      build: function (b) {
        b.sparks(4, 1.2, 4).virus(9, 2, 1).ground(12).review()
          .scan(3, 's2-photo').scan(8, 's2-stoma').scan(13, 's2-lamp').ground(16).hsparks(-10, 6.2, 4)
          .hunt('e-inputs')
          .sequence('s-photo-model')
          .squeeze(3, 4).snapper(11, 3.4, 0.6).ground(15)
          .scan(3, 's2-elodea').scan(8, 's2-co2').scan(13, 's2-sugar').scan(18, 's2-plant').ground(21)
          .catchGame('c-photo')
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .station([{ sort: 'e-io', n: 4 }])
          .scan(3, 's2-chloro').ground(6).station(['w2q110'])
          .bridge(11).virus(4, 2.5, 1.2).spikes(9, 1.8).qblock(13, 3.4, 'shield').ground(16)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.A', '3.1.9-12.B', '3.1.9-12.F', '3.1.9-12.E'])
          .station(['w2q36', 'w2q84'])
          .goal();
      } },
    { id: '2-3', title: 'Releasing Energy', theme: 'gut',
      log: 'Mission log: Inside a hungry runner. Lunch has been broken down into sugar, and every cell uses oxygen to release the sugar\'s energy. Follow it!',
      outro: 'Report sent: in cellular respiration, the bonds in sugar and oxygen break and new bonds form in carbon dioxide and water, releasing energy that cells use. Plants do it too.',
      build: function (b) {
        b.hint(5, 4.6, 'Find the 3 green clue terminals. They open a portal!').sparks(9, 1.2, 4).ground(14).review()
          .scan(3, 's2-meal').scan(8, 's2-resp').scan(13, 's2-react').ground(16).hsparks(-11, 6.2, 4)
          .become('b-glucose2')
          .scan(3, 's2-breath').ground(6)
          .wordbank('wb-resp')
          .clue(4, 'w2q70').virus(9, 2.4, 1).ground(13)
          .scan(3, 's2-bond').scan(8, 's2-runner').scan(13, 's2-mito').ground(16)
          .station(['w2q112'])
          .readData('d-breath')
          .refuel().station([{ sort: 'photo-resp', n: 4 }])
          .clue(3, 'w2q37').snapper(9, 3.4, 0.4).ground(13)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .sequence('s-resp-path')
          .clue(3, 'w2q40').ground(6).hint(1, 6.6, 'Portal! Its code is the letters of your 3 clue answers.').portal(6, 'golf').ground(11)
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.C', '3.1.9-12.F', '3.1.9-12.E', '3.1.9-12.G'])
          .bridge(12, { ay: 1.4, sp: 1.1 }).ground(5)
          .goal();
      } },
    { id: '2-4', title: 'With and Without Oxygen', theme: 'leaf',
      log: 'Mission log: A marsh plant in flooded mud. Its leaves wave in fresh air, but its roots sit where there is almost no oxygen. How do living things release energy in each place?',
      outro: 'Report sent: with oxygen (aerobic), cells release the most energy from sugar. Without oxygen (anaerobic), some cells, like yeast, release a little energy, and decomposers work slowly, so dead matter builds up as peat. Matter still cycles.',
      build: function (b) {
        b.sparks(4, 1.2, 4).hazard(9, 1.1, { ax: 1.8, sp: 1.2 }).ground(13).review()
          .scan(3, 's2-aerobic').scan(8, 's2-mud').scan(13, 's2-yeast').ground(16).hsparks(-10, 6.2, 4)
          .catchGame('c-oxy')
          .sparks(0.5, 8.5, 4).ground(6)
          .become('b-sugar-j')
          .scan(3, 's2-sprint').scan(8, 's2-compost').scan(13, 's2-peat').ground(16)
          .hunt('j-anaerobic')
          .qblock(3, 3.4, 'boost').ground(7)
          .catchGame('c-resp')
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .become('b-carbon-j')
          .squeeze(3, 4).antibody(15, 8, 3.2, 0.5).ground(16)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .station([{ sort: 'j-aer', n: 4 }])
          .sequence('s-bread')
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.A', '3.1.9-12.C', '3.1.9-12.E', '3.1.9-12.G', '3.1.9-12.J'])
          .bridge(11).ground(5)
          .goal();
      } },
    { id: '2-5', title: 'Food Webs and Cycles', theme: 'meadow',
      log: 'Mission log: Out in a wild meadow. Energy flows from the Sun through every living thing, and matter goes round and round. Track both.',
      outro: 'Report sent: energy flows one way, from the Sun through producers and consumers, with only about 10% passed up each level. Carbon cycles among living things, the air, the oceans, and rocks and fossil fuels.',
      build: function (b) {
        b.sparks(4, 1.2, 4).virus(8, 2, 1).ground(12).review()
          .scan(3, 's2-grass').scan(8, 's2-rabbit').scan(13, 's2-fox').scan(18, 's2-mushroom').ground(21).hsparks(-12, 6.2, 4)
          .hunt('producers')
          .maze('maze-trophic')
          .sparks(0.5, 8.5, 5).ground(7)
          .scan(3, 's2-pyramid').ground(6)
          .readData('d-pyramid')
          .sequence('s-food-chain')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .refuel().scan(3, 's2-sun').scan(8, 's2-cycle').scan(13, 's2-rock').ground(16)
          .catchGame('c-carbon')
          .sparks(0.5, 8.5, 4).ground(6)
          .wordbank('wb-cycles')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(5, 'boom').mixed(2, ['3.1.9-12.E', '3.1.9-12.G', '3.1.9-12.J', '3.1.9-12.C', '3.1.9-12.H', '3.1.9-12.K'])
          .qblock(3, 3.4, 'shield').hazard(8, 1.2, { ax: 2, sp: 1.3 }).ground(14)
          .hint(-3, 4.6, 'Boss ahead: The Carbon Imbalance')
          .balance('bal-carbon')
          .goal();
      } }
  ]
});
