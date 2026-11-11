/* WORLD 4 GAME FILE: Ecosystem Disrupters (five levels and a bonus speed run).
   Same building steps as World 1 (see world1.js for the full list). Content lives in world4-questions.js.
   Standards (PA STEELS): N (design, evaluate, and refine solutions to human impacts), O (group behavior and survival),
   V (simulations that test solutions). 4-1 Human Footprints and 4-2 Living Together were levels 3-5 and 3-2 before
   Version 76 (the 6-unit course order). */
FieldGuide.registerWorld({
  id: 4,
  title: 'Ecosystem Disrupters',
  levels: [
    { id: '4-1', title: 'Human Footprints', theme: 'shore',
      log: 'Mission log: The coast is busy with humans. Some of their actions harm ecosystems, and some help them heal. Find out which.',
      outro: 'Report sent: habitat loss, pollution, invasive species, overharvesting, and climate change disrupt ecosystems. Biodiversity makes ecosystems more stable. People can design solutions, test them in simulations, and revise them to help ecosystems recover.',
      build: function (b) {
        b.hint(5, 4.6, 'World 4: Ecosystem Disrupters. Scan everything you see!').sparks(9, 1.2, 4).virus(12, 2, 1).ground(16).review()
          .scan(3, 's3-biodiv').scan(8, 's3-services').scan(13, 's3-invasive').ground(16).hsparks(-12, 6.2, 4)
          .hunt('invasive-traits')
          .scan(3, 's3-habloss').scan(8, 's3-pollution').scan(13, 's3-bloom').ground(16)
          .sequence('s-bloom')
          .readData('d-oxygen')
          .sequence('s-sim')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .refuel().scan(3, 's3-climate').scan(8, 's3-overharvest').scan(13, 's3-conserve').ground(16)
          .catchGame('c-impact')
          .become('b-solution')
          .station(['w3q37', 'w3q40'])
          .lablock('lock-4-1')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(5, 'boom').mixed(2, ['3.1.9-12.I', '3.1.9-12.M', '3.1.9-12.O', '3.1.9-12.K'])
          .qblock(3, 3.4, 'shield').hazard(8, 1.2, { ax: 2, sp: 1.3 }).ground(14)
          .hint(-3, 4.6, 'Boss ahead: The Algal Bloom')
          .balance('bal-bloom')
          .goal();
      } },
    { id: '4-2', title: 'Living Together', theme: 'reef',
      log: 'Mission log: A coral reef, the busiest neighborhood on Earth. Put on the bubble helmet and dive in. Who hunts whom, who competes, and why do so many animals stick together in groups?',
      outro: 'Report sent: predators and competition for limited resources keep populations in check. Many animals live in groups (schools, pods, packs, colonies): groups find food, spot danger, and raise young better, but crowding also brings more competition and disease.',
      build: function (b) {
        /* REEF LEVEL: a short dock, then everything happens under water (swim with jump and duck). Air bubbles mark refill spots. */
        b.hint(5, 4.6, 'The coral reef! Your bubble helmet lets you swim anywhere. Jump in!').sparks(8, 1.2, 3).ground(13).review()
          .sea(-0.6).gap(1).rise(-8)
          .bubbles(2).scan(5, 's3r-shark').scan(10, 's3r-prey').scan(15, 's3r-compete').hazard(12, 4.6, { look: 'shark', ax: 7, ay: 0.4, sp: 0.35 }).ground(19)
          .plat(2, 2.6, 4).plat(8, 4.6, 3).sparks(8.5, 5.6, 3).ground(13)
          .catchGame('c-behavior')
          .bubbles(2).scan(5, 's3r-school').scan(10, 's3r-pod').scan(15, 's3r-spawn').ground(19)
          .become('b-school')
          .snapper(6, 4, 0, 'eel').hazard(13, 3, { look: 'jelly', ax: 0.5, ay: 1.6, sp: 0.6 }).ground(18)
          .current(0, 24, 0.4, 6.8, 3.2, 0).bubbles(12).sparks(4, 3.5, 6).ground(24)
          .refuel().bubbles(1).ground(5)
          .station([{ sort: 'behavior', n: 4 }])
          .bubbles(2).scan(5, 's3r-cost').scan(10, 's3r-alone').hazard(14, 2.8, { look: 'jelly', ax: 1.2, ay: 1.2, sp: 0.5 }).ground(17)
          .ground(3).rise(-3).bubbles(2).rare(4, 0.9, { name: 'Pygmy seahorse', fact: 'It is about 2 cm long and lives on one kind of sea fan, matching its color and bumps: camouflage.' }).ground(6).rise(3)
          .squeeze(2, 6).snapper(11, 3.5, 1.5, 'eel').ground(14)
          .wordbank('wb-relations')
          .mixed(2, ['3.1.9-12.L', '3.1.9-12.H', '3.1.9-12.E'])
          .bubbles(2).hazard(9, 4.6, { look: 'shark', ax: 5, ay: 0.3, sp: 0.45 }).ground(14)
          .station(['w3q32', 'w3q33'])
          .current(0, 10, 0.2, 9, 0, 4).ground(10).rise(8).shore()
          .hint(3, 4.6, 'Back on the beach. Mothership ahead!').ground(10)
          .goal();
      } },
    { id: '4-3', title: 'Huddle Up', theme: 'ice',
      log: 'Mission log: Antarctica in winter, the coldest place on Earth. Penguins, krill, and orcas all live in groups here. Collect the evidence: does group behavior really help them survive and reproduce?',
      outro: 'Report sent: huddling saves heat, colonies protect chicks in the middle, swarms make each krill harder to catch, and orca pods hunt prey no single orca could catch. The evidence that counts compares how many individuals survive and raise young with and without the group behavior. Groups also have costs, such as competition and easy-to-find targets.',
      build: function (b) {
        b.hint(5, 4.6, 'Antarctica! Watch how animals work together. Scan everything.').sparks(9, 1.2, 4).ground(16).review()
          .scan(3, 's4-huddle').scan(8, 's4-colony').scan(13, 's4-krill').ground(16).hsparks(-11, 6.2, 4)
          .become('b-penguin')
          .readData('d-huddle')
          .snapper(5, 3.6, 0, 'eel').hazard(11, 1.4, { ax: 1.8, sp: 1.2 }).ground(15)
          .refuel().scan(3, 's4-orca').scan(8, 's4-survive').scan(13, 's4-reproduce').ground(16)
          .catchGame('c-groups')
          .station([{ sort: 'group-evidence', n: 4 }])
          .gap(3.2).virus(5, 2.5, 1).qblock(10, 3.4, 'sparks').ground(14)
          .scan(4, 's4-trade').ground(9)
          .wordbank('wb-groups')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7, { name: 'Snow petrel', fact: 'This pure-white seabird nests on rocky cliffs in Antarctica, sometimes hundreds of kilometers from the sea. It is one of only three birds that breed near the South Pole region.' })
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.O', '3.1.9-12.L', '3.1.9-12.I'])
          .station(['u4q01', 'u4q02'])
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .station(['u4q03', 'u4q04'])
          .goal();
      } },
    { id: '4-4', title: "Invaders in Penn's Woods", theme: 'autumn',
      log: 'Mission log: A Pennsylvania forest in the fall. Spotted lanternflies and hemlock woolly adelgids arrived from Asia and are harming trees and farms. Design, test, and improve solutions that protect the forest.',
      outro: 'Report sent: to reduce human-caused harm, engineers define the problem, list the criteria (what the solution must do) and constraints (limits like cost), test a design, and refine it. Circle traps replaced sticky bands that caught birds, tested beetles help control the adelgid, and quarantines slow the spread.',
      build: function (b) {
        b.hint(5, 4.6, "Penn's Woods are under attack! Scan the invaders.").sparks(9, 1.2, 4).ground(16).review()
          .scan(3, 's4-lanternfly').scan(8, 's4-heaven').scan(13, 's4-adelgid').ground(16).hsparks(-11, 6.2, 4)
          .hunt('good-fix')
          .scan(3, 's4-hemlock').scan(8, 's4-criteria').scan(13, 's4-constraint').ground(16)
          .station([{ sort: 'crit-con', n: 4 }])
          .sequence('s-design')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .refuel().scan(3, 's4-circle').scan(8, 's4-biocontrol').scan(13, 's4-quarantine').ground(16)
          .become('b-trap')
          .wordbank('wb-design')
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .lablock('lock-4-4')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7, { name: 'Eastern hellbender', fact: "Pennsylvania's state amphibian is a giant salamander up to about 60 cm long. It breathes mostly through its wrinkly skin, so it needs cool, clean, fast streams, like the ones hemlocks shade." })
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.N', '3.1.9-12.M', '3.1.9-12.O'])
          .station(['u4q06', 'u4q07'])
          .virus(5, 2.4, 1.2).sparks(2, 3.2, 4).ground(12)
          .station(['u4q08', 'u4q09'])
          .goal();
      } },
    { id: '4-5', title: 'Test It First', theme: 'marsh',
      log: 'Mission log: The Chesapeake Bay, where Pennsylvania\'s Susquehanna River meets the sea. Farm and lawn runoff feed algae that make dead zones. Build a simulation, test solutions in it, and revise it with real data.',
      outro: 'Report sent: a simulation is a model you can run to test solutions before changing a real ecosystem. Change one variable at a time, compare with a control, and revise the model when real data do not match. Tree buffers along Pennsylvania streams and restored oyster reefs both help the bay.',
      build: function (b) {
        b.hint(5, 4.6, 'The Chesapeake Bay! Scan to learn what is harming it.').sparks(9, 1.2, 4).ground(16).review()
          .scan(3, 's4-watershed').scan(8, 's4-deadzone').scan(13, 's4-buffer').ground(16).hsparks(-11, 6.2, 4)
          .scan(3, 's4-oyster').scan(8, 's4-model').scan(13, 's4-variable').ground(16)
          .sequence('s-simtest')
          .readData('d-sim')
          .snapper(5, 3.6, 0, 'eel').spikes(10, 1.8).ground(15)
          .refuel().scan(4, 's4-revise').ground(9)
          .station(['u4q11', 'u4q12'])
          .gap(3.2).virus(5, 2.5, 1).qblock(10, 3.4, 'sparks').ground(14)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7, { name: 'Diamondback terrapin', fact: 'This turtle lives only in salty marshes along the Atlantic coast, including the Chesapeake Bay. Each one has its own pattern of spots on its skin.' })
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.V', '3.1.9-12.N', '3.1.9-12.O'])
          .station(['u4q13', 'u4q10'])
          .qblock(3, 3.4, 'shield').hazard(8, 1.2, { ax: 2, sp: 1.3 }).ground(14)
          .hint(-3, 4.6, 'Boss ahead: The Dead Zone')
          .balance('bal-bay')
          .goal();
      } },
    { id: '4-6', title: 'Bonus: Ridge Run', theme: 'pxridge', bonus: true, par: 62,
      log: 'BONUS SPEED RUN! Race along a Pennsylvania mountain ridge past hemlocks (the state tree) and mountain laurel (the state flower) while hawks ride the wind overhead. Just for fun: no science questions. Grab the coins, dodge the obstacles and beat the time for 3 stars.',
      outro: 'Bonus speed run cleared! Beat the par time for 3 stars, then try again for a faster time.',
      build: function (b) {
        /* PIXEL BONUS SPEED RUN (v76): Pennsylvania's Ridge and Valley (pixelscape.js "ridge"). New move: Super Jump (stand still, hold down to charge, then jump).
           Two walls are too tall for a double jump and need the Super Jump. No questions; stars come from the time (par = 3 stars). Optional. */
        b.hint(4, 4.6, 'SPEED RUN on a Pennsylvania ridge! Grab coins, dodge obstacles, beat the time!').sparks(7, 1.2, 6).ground(14)
          .power(3, 1.4, 'super').ground(8)
          .hint(2, 4.6, 'Stand still and hold DOWN until you sparkle, then JUMP. Super jump up the ridge!').ground(6)
          .rise(8).sparks(2, 1.2, 5).ground(12)
          .rise(-8).ground(4)
          .ground(14).virus(-10, 4.5, 1.1).snapper(-5, 3.2, 0).sparks(-12, 1.2, 5)
          .gap(15).mover(-13.5, 0.4, 3, 2.2, 0, 1.2).mover(-7, 1.6, 3, 0, 1.6, 1.4).sparks(-7, 4.4, 3).ground(10)
          .hint(1, 4.6, 'Too tall for a double jump? Charge a Super Jump!').tower(5, 7.5, 1.6).sparks(5.6, 8.6, 3).ground(13)
          .brick(-5, 3.4, 4).sparks(-4.5, 4.8, 4)
          .gap(12).pillar(-10.2, 0).pillar(-6.6, 0.9).pillar(-3, 0.3).ground(10).virus(-6, 3, 1.6)
          .spikes(3, 1.8).sparks(2, 3.2, 4).ground(10)
          .hazard(4, 1.2, { ax: 2, sp: 1.4 }).hazard(9, 3, { ax: 1.6, sp: 1.3, ay: 0.8 }).ground(12)
          .qblock(3, 3.4, 'life').checkpoint().ground(6)
          .hint(1, 4.6, 'BOSS AHEAD! Stomp it 3 times to open the gate.').bigboss(24)
          .sparks(2, 1.2, 6).ground(10)
          .goal();
      } }
  ]
});
