/* WORLD 3 GAME FILE: Ecological Relations (five levels and a bonus speed run).
   Same building steps as World 1 (see world1.js for the full list). Content lives in world3-questions.js.
   Standards (PA STEELS): I (carrying capacity), L (biodiversity and populations), M (stable ecosystems and change).
   Each level teaches first (scan specimens), then lets players use what they learned (hunts, catches,
   doors, data, mazes, balances), with only a few question stations. Mixed review gates pull in earlier topics. */
FieldGuide.registerWorld({
  id: 3,
  title: 'Ecological Relations',
  levels: [
    { id: '3-1', title: 'Counting Life', theme: 'forest',
      log: 'Mission log: New world! Landed in a Pennsylvania forest. How many kinds of living things share it? Count them, compare the numbers, and find out what makes them go up or down.',
      outro: 'Report sent: a population is one species in one area, a community is all the species, and an ecosystem adds the nonliving surroundings. Counting samples, finding averages, and comparing trends shows that large, connected habitats with plenty of resources hold more species (higher biodiversity).',
      build: function (b) {
        b.hint(5, 4.6, 'World 3: Ecological Relations. Scan everything you see!').sparks(9, 1.2, 4).ground(16).review()
          .scan(4, 's3-organism').scan(9, 's3-population').scan(14, 's3-community').ground(18).hsparks(-11, 6.2, 4)
          .gap(3.2).virus(5, 2.5, 1).qblock(10, 3.4, 'sparks').ground(14)
          .scan(3, 's3-ecosystem').scan(8, 's3-richness').scan(13, 's3-sample').ground(16)
          .catchGame('c-levels')
          .qblock(3, 3.4, 'boost').ground(8)
          .scan(3, 's3-habitat').scan(8, 's3-fragment').ground(11)
          .hunt('biodiversity-up')
          .readData('d-patch')
          .snapper(5, 3.6, 0).spikes(10, 1.8).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .refuel().scan(3, 's3-average').scan(8, 's3-trend').ground(11)
          .wordbank('wb-habitat')
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.H', '3.1.9-12.K', '3.1.9-12.L'])
          .sequence('s-levels')
          .virus(5, 2.4, 1.2).sparks(2, 3.2, 4).ground(12)
          .station(['w3q01', 'w3q28'])
          .goal();
      } },
    { id: '3-2', title: 'Predators and Prey', theme: 'taiga',
      log: 'Mission log: A snowy northern forest in Canada. Lynx hunt snowshoe hares here, and their numbers rise and fall together. Find out what keeps each population in check.',
      outro: 'Report sent: predators, prey, and food supply limit each other. Hare and lynx numbers rise and fall in a cycle about every 10 years, and on Isle Royale wolves and moose have stayed within a range for over 60 years. In stable conditions, these interactions keep numbers relatively consistent.',
      build: function (b) {
        b.hint(5, 4.6, 'Predators and prey! Scan everything you see.').sparks(9, 1.2, 4).ground(16).review()
          .scan(3, 's3-lynx').scan(8, 's3-hare').scan(13, 's3-browse').ground(16).hsparks(-11, 6.2, 4)
          .hunt('hare-limits')
          .scan(3, 's3-cycle').scan(8, 's3-owl').scan(13, 's3-compete').ground(16)
          .readData('d-hare')
          .sequence('s-cycle')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .refuel().scan(3, 's3-moose').scan(8, 's3-isle').scan(13, 's3-range').ground(16)
          .become('b-hare')
          .wordbank('wb-predation')
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7, { name: 'Wolverine', fact: 'Wolverines roam huge areas of the northern forest and can climb, dig, and swim. They are rarely seen, so scientists often study them from tracks and camera traps.' })
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.I', '3.1.9-12.L', '3.1.9-12.H'])
          .station(['w3q41', 'w3q42'])
          .virus(5, 2.4, 1.2).sparks(2, 3.2, 4).ground(12)
          .station(['w3q43', 'w3q15'])
          .balance('bal-moose')
          .bridge(12, { ay: 1.4, sp: 1.1 }).ground(5)
          .goal();
      } },
    { id: '3-3', title: 'Limits to Growth', theme: 'pond',
      log: 'Mission log: The deer here keep multiplying. Can a population grow forever? Find out what holds it back.',
      outro: 'Report sent: limiting factors (food, water, space, predators, disease, weather) keep populations near the carrying capacity. Unlimited growth is exponential; limited growth levels off (logistic).',
      build: function (b) {
        b.hint(5, 4.6, 'How many can live here? Scan to find out.').sparks(9, 1.2, 4).ground(14).review()
          .scan(3, 's3-limit').scan(8, 's3-capacity').scan(13, 's3-expo').ground(16).hsparks(-11, 6.2, 4)
          .hunt('limiting')
          .scan(3, 's3-logistic').scan(8, 's3-dd').scan(13, 's3-di').ground(16)
          .readData('d-deer')
          .become('b-capacity')
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .wordbank('wb-growth')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.L', '3.1.9-12.I', '3.1.9-12.H'])
          .balance('bal-deer')
          .bridge(12, { ay: 1.4, sp: 1.1 }).ground(5)
          .goal();
      } },
    { id: '3-4', title: 'After the Fire', theme: 'forest',
      log: 'Mission log: A wildfire swept through here last year, and a volcano island rose nearby. Watch how life comes back.',
      outro: 'Report sent: after a disturbance, communities change in a predictable order (succession). Primary succession starts on bare rock with pioneer species; secondary succession starts where soil remains.',
      build: function (b) {
        b.sparks(4, 1.2, 4).hazard(9, 1.1, { ax: 1.8, sp: 1.2 }).ground(13).review()
          .scan(3, 's3-fire').scan(8, 's3-primary').scan(13, 's3-pioneer').ground(16).hsparks(-10, 6.2, 4)
          .become('b-pioneer')
          .maze('maze-succession')
          .sparks(0.5, 8.5, 4).ground(6)
          .scan(3, 's3-secondary').scan(8, 's3-climax').scan(13, 's3-keystone').ground(16)
          .sequence('s-secondary')
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .station([{ sort: 'succession', n: 4 }])
          .squeeze(3, 4).antibody(15, 8, 3.2, 0.5).ground(16)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.I', '3.1.9-12.M', '3.1.9-12.L'])
          .station(['w3q16', 'w3q17'])
          .bridge(11).ground(5)
          .goal();
      } },
    { id: '3-5', title: 'Ripple Effects', theme: 'valley',
      log: 'Mission log: Yellowstone National Park. Wolves came back in 1995, beavers are building dams, and the rivers are changing. Do the evidence and reasoning really support the claims people make?',
      outro: 'Report sent: complex interactions keep an ecosystem\'s numbers and types of organisms relatively steady while conditions are stable. When conditions change a lot (a new top predator, a beaver dam, water that stays too warm), a new ecosystem can form. Good scientists weigh the claim, the evidence, and the reasoning, and check other possible causes.',
      build: function (b) {
        b.hint(5, 4.6, 'One change can ripple through a whole ecosystem. Scan to find out how.').sparks(9, 1.2, 4).ground(16).review()
          .scan(3, 's3-wolfpack').scan(8, 's3-elk').scan(13, 's3-claim').ground(16).hsparks(-11, 6.2, 4)
          .readData('d-elk')
          .scan(3, 's3-evidence').scan(8, 's3-reasoning').ground(11)
          .station([{ sort: 'cer', n: 4 }])
          .snapper(5, 3.6, 0).spikes(10, 1.8).ground(15)
          .refuel().scan(3, 's3-beaver').scan(8, 's3-wetland').scan(13, 's3-bleach').ground(16)
          .sequence('s-beaver')
          .become('b-beaver')
          .wordbank('wb-ripple')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7, { name: 'American pika', fact: 'This small cousin of rabbits lives on rocky mountain slopes. All summer it gathers grass into haypiles to eat in winter. Pikas overheat easily, so warming summers are a changing condition for them.' })
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.M', '3.1.9-12.I', '3.1.9-12.L'])
          .station(['w3q45', 'w3q46'])
          .qblock(3, 3.4, 'shield').hazard(8, 1.2, { ax: 2, sp: 1.3 }).ground(14)
          .hint(-3, 4.6, 'Boss ahead: The Overgrazers')
          .balance('bal-elk')
          .goal();
      } },
    { id: '3-6', title: 'Bonus: Rainforest Run', theme: 'pxrain', bonus: true, par: 65,
      log: 'BONUS SPEED RUN! Swing through the jungle ledges under the vines. Grab every coin! Just for fun: no science questions. Grab the coins, dodge the obstacles and beat the time for 3 stars.',
      outro: 'Bonus speed run cleared! Beat the par time for 3 stars, then try again for a faster time.',
      build: function (b) {
        /* PIXEL BONUS SPEED RUN (v70): a fun 8-bit course in the Rainforest Run habitat (pixelscape.js). No questions; stars come from the time (par = 3 stars). Optional: not needed for the certificates. */
        b.hint(4, 4.6, 'SPEED RUN! Grab coins, dodge obstacles, beat the time!').sparks(7, 1.2, 6).ground(14)
          .power(3, 1.4, 'wall').ground(8)
          .hint(1, 4.6, 'Walk under the first wall, then jump back and forth between the two walls to climb!').tower(4, 8, 1.4, 2.6).tower(8, 11.5, 1.6).sparks(8.6, 12.6, 3).ground(14)
          .ground(16).virus(-13, 4.5, 1.1).virus(-5, 3.5, 1.4).sparks(-10, 1.2, 5)
          .snapper(4, 3.2, 0).snapper(9, 3.2, 1.2).sparks(2, 3.4, 6).ground(14)
          .gap(15).mover(-13.5, 0.4, 3, 2.2, 0, 1.2).mover(-7, 1.6, 3, 0, 1.6, 1.4).sparks(-7, 4.4, 3).ground(10)
          .brick(-8, 3.4, 5).sparks(-7.5, 4.8, 5).hazard(-3, 1.4, { ax: 1.8, sp: 1.5 })
          .gap(12).pillar(-10.2, 0).pillar(-6.6, 0.9).pillar(-3, 0.3).ground(10).virus(-6, 3, 1.6)
          .spikes(3, 1.8).sparks(2, 3.2, 4).ground(10).rise(2).ground(6).rise(-2).gap(3).ground(6)
          .crumbleBridge(4, 'crumble').ground(8).hazard(4, 1.2, { ax: 2, sp: 1.4 }).hazard(9, 3, { ax: 1.6, sp: 1.3, ay: 0.8 }).ground(12)
          .qblock(3, 3.4, 'life').checkpoint().ground(6)
          .hint(1, 4.6, 'BOSS AHEAD! Stomp it 3 times to open the gate.').bigboss(24)
          .sparks(2, 1.2, 6).ground(10)
          .goal();
      } }
  ]
});
