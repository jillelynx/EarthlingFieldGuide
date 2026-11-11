/* WORLD 5 GAME FILE: Inheritance and Variation of Traits (five levels).
   Same building steps as World 1 (see world1.js for the full list). Content lives in world5-questions.js.
   Standards (PA STEELS, tested on the Keystone Biology exam): 5-1 D (mitosis and differentiation), 5-2 Q and P (meiosis,
   gametes, new combinations), 5-3 P and R (genes, alleles, probability), 5-4 R (inheritance patterns and trait distribution),
   5-5 Q (mutations). Level 5-5 opens with a short review of how a gene's DNA sets a protein's amino acid order (World 1)
   before mutations, and its portal leads to the Code Lab mini-game (DNA to mRNA to protein). */
FieldGuide.registerWorld({
  id: 5,
  title: 'Inheritance & Variation of Traits',
  levels: [
    { id: '5-1', title: 'Copy and Divide', theme: 'nucleus',
      log: 'Mission log: New world! Inside a growing Earthling. One cell became trillions, and they keep dividing to grow and heal. Find out how, and how cells become so different.',
      outro: 'Report sent: before a cell divides it copies its DNA (A pairs with T, G with C), so mitosis gives each new cell the same complete instructions. Mitosis makes cells for growth and repair, and stem cells differentiate into the many kinds of specialized cells in a body.',
      build: function (b) {
        b.hint(5, 4.6, 'World 5: Inheritance. Scan everything you see!').sparks(9, 1.2, 4).ground(16).review()
          .scan(4, 's4-dna').scan(9, 's4-replication').scan(14, 's4-chromosome').ground(18).hsparks(-11, 6.2, 4)
          .catchGame('c-basepair')
          .gap(3.2).virus(5, 2.5, 1).qblock(10, 3.4, 'sparks').ground(14)
          .hunt('replication-facts')
          .scan(3, 's4-mitosis').scan(8, 's4-repair').ground(11)
          .sequence('s-repair')
          .snapper(5, 3.6, 0).spikes(10, 1.8).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .refuel().scan(3, 's4-stemcell').scan(8, 's4-differentiation').ground(11)
          .sequence('s-differentiate')
          .readData('d-growth')
          .become('b-chromosomes')
          .bridge(11).hazard(4, 1.2, { ax: 1.6, sp: 1.3 }).ground(10)
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.A', '3.1.9-12.B', '3.1.9-12.D', '3.1.9-12.P'])
          .virus(5, 2.4, 1.2).sparks(2, 3.2, 4).ground(12)
          .station(['w4q04', 'w4q12', 'w4q48'])
          .goal();
      } },
    { id: '5-2', title: 'Making Gametes', theme: 'lab',
      log: 'Mission log: Earthlings come from TWO parents. Each parent sends half of its chromosomes. Find out how sex cells are made.',
      outro: 'Report sent: meiosis makes four haploid gametes. Crossing over and independent assortment make every gamete different, and fertilization joins two of them, so every offspring gets a new combination of alleles from its two parents.',
      build: function (b) {
        b.sparks(4, 1.2, 4).virus(9, 2, 1).ground(12).review()
          .scan(3, 's4-meiosis').scan(8, 's4-gamete').scan(13, 's4-diploid').scan(18, 's4-haploid').ground(21).hsparks(-10, 6.2, 4)
          .become('b-gamete')
          .scan(3, 's4-homolog').scan(8, 's4-crossover').scan(13, 's4-assort').ground(16)
          .sequence('s-meiosis')
          .squeeze(3, 4).snapper(11, 3.4, 0.6).ground(15)
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .station([{ sort: 'mit-mei', n: 4 }])
          .scan(3, 's4-fertilization').ground(6)
          .catchGame('c-meiosis')
          .bridge(11).virus(4, 2.5, 1.2).spikes(9, 1.8).qblock(13, 3.4, 'shield').ground(16)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .wordbank('wb-division')
          .crumbleBridge(4, 'mix').mixed(2, ['3.1.9-12.D', '3.1.9-12.P', '3.1.9-12.Q', '3.1.9-12.A'])
          .station(['w4q06', 'w4q24'])
          .goal();
      } },
    { id: '5-3', title: 'Genes and Alleles', theme: 'garden',
      log: 'Mission log: A garden of pea plants, like the ones a monk named Gregor Mendel studied. Some flowers are purple and some are white. Crack the code of inheritance.',
      outro: 'Report sent: genes are sections of DNA on chromosomes, and alleles are versions of a gene. Dominant alleles mask recessive ones. Punnett squares predict the chances of each genotype and phenotype.',
      build: function (b) {
        b.hint(5, 4.6, 'Purple or white? Scan the pea plants.').sparks(9, 1.2, 4).ground(14).review()
          .scan(3, 's4-gene').scan(8, 's4-allele').ground(11).hsparks(-11, 6.2, 4)
          .maze('maze-genes')
          .scan(3, 's4-dominant').scan(8, 's4-recessive').scan(13, 's4-genotype').scan(18, 's4-phenotype').ground(21)
          .wordbank('wb-genetics')
          .scan(3, 's4-homozygous').scan(8, 's4-heterozygous').ground(11)
          .hunt('hetero')
          .refuel().scan(3, 's4-punnett').ground(6)
          .become('b-punnett')
          .readData('d-punnett')
          .snapper(5, 3.6, 0).virus(10, 2.4, 1.2).ground(15)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .lablock('lock-5-3')
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.Q', '3.1.9-12.P', '3.1.9-12.R', '3.1.9-12.D'])
          .station(['w4q18', 'w4q19'])
          .bridge(12, { ay: 1.4, sp: 1.1 }).ground(5)
          .goal();
      } },
    { id: '5-4', title: 'Beyond Mendel', theme: 'garden',
      log: 'Mission log: Pink flowers? Spotted cattle? Four blood types? Not every trait follows the simple dominant and recessive rule. Investigate.',
      outro: 'Report sent: some traits show incomplete dominance (a blend) or codominance (both show). Blood type has multiple alleles. Sex-linked genes are on the X chromosome, and polygenic traits are controlled by many genes.',
      build: function (b) {
        b.sparks(4, 1.2, 4).hazard(9, 1.1, { ax: 1.8, sp: 1.2 }).ground(13).review()
          .scan(3, 's4-incomplete').scan(8, 's4-codominance').ground(11).hsparks(-10, 6.2, 4)
          .become('b-codominance')
          .scan(3, 's4-multiple').ground(6)
          .catchGame('c-blood')
          .sparks(0.5, 8.5, 4).ground(6)
          .scan(3, 's4-sexlinked').scan(8, 's4-polygenic').ground(11)
          .refuel().sparks(0.5, 8.5, 4).ground(6)
          .station([{ sort: 'pattern', n: 4 }])
          .squeeze(3, 4).antibody(15, 8, 3.2, 0.5).ground(16)
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .crumbleBridge(5, 'mix').mixed(2, ['3.1.9-12.Q', '3.1.9-12.P', '3.1.9-12.R', '3.1.9-12.D'])
          .station(['w4q22', 'w4q23'])
          .bridge(11).ground(5)
          .goal();
      } },
    { id: '5-5', title: 'Mutations', theme: 'nucleus',
      log: 'Mission log: Sometimes DNA changes. First, remember how a gene\'s DNA sets the order of amino acids in a protein. Then find out what causes mutations and what they do.',
      outro: 'Report sent: mutations are changes in the DNA sequence. They come from uncorrected copying errors and from environmental factors like UV light, radiation, and some chemicals. A mutation may change nothing, change one amino acid, or change many, and only mutations in gametes are passed to offspring, adding new variation.',
      build: function (b) {
        b.hint(5, 4.6, 'Find the 3 green clue terminals. They open a portal!').sparks(9, 1.2, 4).ground(14).review()
          .crumbleBridge(4, 'mix')
          .clue(4, 'w4q38').virus(9, 2.4, 1).ground(13)
          .scan(3, 's4-mutation').scan(8, 's4-substitution').scan(13, 's4-frameshift').ground(16).hsparks(-11, 6.2, 4)
          .become('b-frameshift')
          .catchGame('c-mutation')
          .clue(3, 'w4q39').snapper(9, 3.4, 0.4).ground(13)
          .refuel().scan(3, 's4-mutagen').scan(8, 's4-copyerror').scan(13, 's4-sickle').ground(16)
          .sequence('s-sunburn')
          .scan(3, 's4-bodycell').scan(8, 's4-gametemut').scan(13, 's4-helpful').ground(16)
          .hunt('mutation-causes')
          .hplat(-7, 2.4, 3).hplat(-4.5, 4.8, 3).hplat(-2, 8.4, 2.6).rare(-0.7, 9.7)
          .clue(3, 'w4q60').ground(6).hint(1, 6.6, 'Portal! Its code is the letters of your 3 clue answers.').portal(6, 'dna').ground(11)
          .qblock(3, 3.4, 'shield').hazard(8, 1.2, { ax: 2, sp: 1.3 }).ground(14)
          .hint(-3, 4.6, 'Boss ahead: The Mutation Storm')
          .boss('The Mutation Storm', 'boss', 5, 2, ['3.1.9-12.D', '3.1.9-12.P', '3.1.9-12.Q', '3.1.9-12.R'])
          .bridge(11).ground(5)
          .goal();
      } },
    { id: '5-6', title: 'Bonus: Tundra Sprint', theme: 'pxtundra', bonus: true, par: 70,
      log: 'BONUS SPEED RUN! Slide across the snowy rocks of the tundra. Do not fall in the icy gaps! Just for fun: no science questions. Grab the coins, dodge the obstacles and beat the time for 3 stars.',
      outro: 'Bonus speed run cleared! Beat the par time for 3 stars, then try again for a faster time.',
      build: function (b) {
        /* PIXEL BONUS SPEED RUN (v70): a fun 8-bit course in the Tundra Sprint habitat (pixelscape.js). No questions; stars come from the time (par = 3 stars). Optional: not needed for the certificates. */
        b.hint(4, 4.6, 'SPEED RUN! Grab coins, dodge obstacles, beat the time!').sparks(7, 1.2, 6).ground(14)
          .power(3, 1.4, 'glide').ground(8)
          .rise(4).ground(6).hint(-3, 4.6, 'Run off the edge and HOLD jump to glide across!').gap(17).sparks(-14, -1, 6).rise(-4).ground(12)
          .hint(1, 4.6, 'SLED RUN! Ride down the hill and fly off the ski jump!').ground(4).sled(30, 7, { kick: true }).sparks(-14, 4.4, 5).gap(10).sparks(-8, 4, 6).ground(8)
          .sled(24, 5).sparks(-14, 4.4, 4).sparks(-6, 2.4, 4).ground(4).sled(22, 6, { kick: true }).gap(11).sparks(-9, 4.5, 6).ground(10)
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
