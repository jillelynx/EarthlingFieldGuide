/* WORLD 6 QUESTION FILE: Natural Selection and Evolution
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
     World 6 uses S (evidence for common ancestry), T (the four factors of evolution), U (statistics of advantageous traits),
     W (natural selection leads to adaptation) and X (environmental change: increases, new species, extinction).
   - "topic" groups questions that can rotate with each other at stations and clue terminals.
   - In "questions", "answer" is the position of the correct option, counting from 0
     (0 = first option). The game shuffles the options, so the right answer can always go first.
   - "hint" shows after a wrong try. "explain" shows after the right answer.
   - "tags": ["boss"] marks boss-battle questions.
   - "Read the Data" numbers are illustrative, modeled on classroom examples; they are not real measurements.
   - Keep every comma, bracket, and quotation mark in place. */
FieldGuide.registerQuestions(6, {
 "tokens": [
  {
   "id": "selection-needs",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "Collect only what natural selection NEEDS in order to work",
   "good": [
    "Variation in a trait",
    "Variation that is inherited",
    "More offspring than can survive",
    "Some traits help survival or reproduction",
    "Many generations of time"
   ],
   "bad": [
    {
     "text": "Animals choosing to change their genes",
     "explain": "Individuals cannot choose their genes. Selection acts on variation that already exists."
    },
    {
     "text": "Traits gained during life, like big muscles",
     "explain": "Acquired traits are not in the DNA of gametes, so they are not inherited."
    },
    {
     "text": "Every individual exactly alike",
     "explain": "With no variation, there is nothing for selection to act on."
    },
    {
     "text": "One animal evolving during its lifetime",
     "explain": "Individuals do not evolve. Populations evolve over generations."
    }
   ]
  }
 ],
 "sorts": [
  {
   "id": "structures",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "What kind of structure is it?",
   "options": [
    "Homologous structure",
    "Analogous structure",
    "Vestigial structure"
   ],
   "hint": "Homologous: same bones, shared ancestor. Analogous: same job, different origins. Vestigial: reduced, with little or no use now.",
   "items": [
    {
     "text": "A human arm and a whale flipper",
     "answer": 0,
     "explain": "Same bones arranged the same way: homologous."
    },
    {
     "text": "A bird's wing and a butterfly's wing",
     "answer": 1,
     "explain": "Both are for flying but are built completely differently: analogous."
    },
    {
     "text": "The human tailbone (coccyx)",
     "answer": 2,
     "explain": "A reduced tail with little use: vestigial."
    },
    {
     "text": "A bat's wing and a cat's front leg",
     "answer": 0,
     "explain": "Same bone pattern from a shared mammal ancestor: homologous."
    },
    {
     "text": "A shark's fin and a dolphin's flipper",
     "answer": 1,
     "explain": "Similar shape for swimming, but a shark is a fish and a dolphin is a mammal: analogous."
    },
    {
     "text": "Tiny hip bones inside a whale",
     "answer": 2,
     "explain": "Leftover pelvis bones from land-living ancestors: vestigial."
    }
   ]
  },
  {
   "id": "env-change",
   "code": "3.1.9-12.X",
   "topic": "env-change",
   "prompt": "What is the most likely result of this change?",
   "options": [
    "Some species increase",
    "A new species forms over time",
    "A species goes extinct"
   ],
   "hint": "More of something? Two groups split and change for a very long time? A species loses everything it needs?",
   "items": [
    {
     "text": "Overfishing removes most cod, the main predator of a small shrimp",
     "answer": 0,
     "explain": "With fewer predators, the shrimp population can increase."
    },
    {
     "text": "A new river splits a beetle population, and each side adapts differently for thousands of years",
     "answer": 1,
     "explain": "Isolated populations that change separately can become new species."
    },
    {
     "text": "A volcano destroys the only island where a flightless bird lives",
     "answer": 2,
     "explain": "The bird has nowhere else to live, so the species goes extinct."
    },
    {
     "text": "A rainy decade gives a mosquito species many new puddles to breed in",
     "answer": 0,
     "explain": "More breeding sites let the mosquito population increase."
    },
    {
     "text": "Mountains slowly rise and split a plant population; after a long time the two groups cannot interbreed",
     "answer": 1,
     "explain": "Long isolation can lead to two separate species."
    },
    {
     "text": "A forest is cleared for farms, removing all the habitat of a frog found nowhere else",
     "answer": 2,
     "explain": "Losing all of its habitat can drive a species to extinction."
    }
   ]
  },
  {
   "id": "trait-trend",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "Is this trait most likely an advantage in this environment?",
   "options": [
    "Advantage: rising in proportion",
    "Disadvantage: falling in proportion"
   ],
   "hint": "Is the share of the population with the trait going up or down?",
   "items": [
    {
     "text": "Dark pocket mice on dark lava: 10% of the population, then 80% after 20 generations",
     "answer": 0,
     "explain": "Rising share: dark fur hides mice on dark rock."
    },
    {
     "text": "Light pocket mice on dark lava: 90%, then 20% after 20 generations",
     "answer": 1,
     "explain": "Falling share: light mice stand out to predators on dark rock."
    },
    {
     "text": "Antibiotic-resistant bacteria during treatment: 1%, then 90%",
     "answer": 0,
     "explain": "Rising share: resistance helps bacteria survive the antibiotic."
    },
    {
     "text": "Shallow-beaked finches after a drought leaves only hard seeds: 40%, then 15%",
     "answer": 1,
     "explain": "Falling share: shallow beaks cannot crack hard seeds."
    },
    {
     "text": "Light peppered moths on soot-darkened bark: common, then rare",
     "answer": 1,
     "explain": "Falling share: birds spot light moths on dark bark."
    },
    {
     "text": "Insects that resist a pesticide after years of spraying: 5%, then 70%",
     "answer": 0,
     "explain": "Rising share: resistant insects survive the spraying and reproduce."
    }
   ]
  }
 ],
 "questions": [
  {
   "id": "w5q01",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "Which statement best describes natural selection?",
   "options": [
    "Individuals with traits suited to their environment survive and reproduce more, so those traits become more common.",
    "Organisms change their traits because they need to.",
    "Every individual has the same chance of surviving.",
    "Traits gained during life are passed to offspring."
   ],
   "answer": 0,
   "hint": "Who leaves the most offspring?",
   "explain": "Natural selection: inherited traits that help survival and reproduction become more common over generations."
  },
  {
   "id": "w5q02",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "When pollution darkened tree bark in England, dark peppered moths became more common. Why?",
   "options": [
    "Birds ate more of the easy-to-see light moths, so dark moths survived and reproduced more.",
    "Light moths turned dark to hide.",
    "Pollution changed the moths' DNA directly.",
    "Dark moths moved in from another country."
   ],
   "answer": 0,
   "hint": "Which moths could birds see?",
   "explain": "Dark moths were camouflaged on dark bark, so they survived and passed on the dark allele."
  },
  {
   "id": "w5q03",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "In evolution, what does 'fitness' mean?",
   "options": [
    "how well an organism survives and reproduces in its environment",
    "how strong or fast an organism is",
    "how much exercise an organism gets",
    "how big an organism is"
   ],
   "answer": 0,
   "hint": "Fitness is measured in offspring.",
   "explain": "Evolutionary fitness is about passing on alleles: surviving and reproducing."
  },
  {
   "id": "w5q04",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "A rabbit population has brown fur and white fur. Snow now covers the ground for longer each year. What is most likely to happen over many generations?",
   "options": [
    "The allele for white fur becomes more common.",
    "All the rabbits become brown.",
    "The rabbits choose to turn white.",
    "Allele frequencies stay exactly the same."
   ],
   "answer": 0,
   "hint": "Which rabbits are hidden from predators in snow?",
   "explain": "White rabbits are better camouflaged in snow, survive more, and pass on the white allele."
  },
  {
   "id": "w5q05",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "Why do we say populations evolve, not individuals?",
   "options": [
    "An individual cannot change its genes; how common each allele is in the population changes over generations.",
    "Individuals evolve during their lifetime.",
    "Populations never change.",
    "Only one individual reproduces."
   ],
   "answer": 0,
   "hint": "Can one organism change its DNA on purpose?",
   "explain": "Evolution is a change in how common each allele is in a population across generations."
  },
  {
   "id": "w5q08",
   "code": "3.1.9-12.X",
   "topic": "speciation",
   "prompt": "Squirrels on the north and south rims of the Grand Canyon cannot reach each other and have become different over time. What separated them?",
   "options": [
    "geographic isolation (the canyon)",
    "competition for the same food",
    "camouflage",
    "a mutation in every squirrel"
   ],
   "answer": 0,
   "hint": "What is between the rims?",
   "explain": "A physical barrier like a canyon keeps the populations apart: geographic isolation. Each side then changes on its own."
  },
  {
   "id": "w5q11",
   "code": "3.1.9-12.X",
   "topic": "speciation",
   "prompt": "What usually has to happen for one species to split into two?",
   "options": [
    "The populations become reproductively isolated and change until they can no longer interbreed.",
    "The populations share more genes.",
    "One population goes extinct.",
    "Individuals decide to become a new species."
   ],
   "answer": 0,
   "hint": "Isolation first, then change.",
   "explain": "Speciation happens when isolated populations evolve differences that stop them from interbreeding."
  },
  {
   "id": "w5q12",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "What is the original source of all NEW alleles in a population?",
   "options": [
    "mutations in DNA",
    "natural selection",
    "the environment choosing traits",
    "competition alone"
   ],
   "answer": 0,
   "hint": "Selection can only choose among alleles that already exist.",
   "explain": "Mutations create new alleles. Natural selection then changes how common they are."
  },
  {
   "id": "w5q13",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "A mutation makes a bacterium resistant to an antibiotic. What happens when the antibiotic is used?",
   "options": [
    "The resistant bacteria survive and reproduce, so resistance spreads.",
    "All the bacteria die.",
    "The antibiotic makes every bacterium mutate.",
    "Resistance disappears."
   ],
   "answer": 0,
   "hint": "The antibiotic removes the bacteria that are NOT resistant.",
   "explain": "The mutation already existed. The antibiotic selects for it, so resistant bacteria take over."
  },
  {
   "id": "w5q14",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "Which mutations can be passed to offspring and affect evolution?",
   "options": [
    "mutations in gametes (sperm or egg cells)",
    "mutations in skin cells",
    "mutations in muscle cells",
    "any mutation in any cell"
   ],
   "answer": 0,
   "hint": "Which cells carry DNA to the next generation?",
   "explain": "Only mutations in gametes are inherited."
  },
  {
   "id": "w5q15",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "Besides mutation, which process creates new combinations of alleles in offspring?",
   "options": [
    "crossing over and independent assortment in meiosis",
    "mitosis",
    "digestion",
    "photosynthesis"
   ],
   "answer": 0,
   "hint": "It shuffles alleles when gametes form.",
   "explain": "Meiosis shuffles alleles into new combinations, adding variation for selection to act on."
  },
  {
   "id": "w5q16",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "Which statement about mutations is true?",
   "options": [
    "Most are neutral or harmful, but a few are helpful in certain environments.",
    "They are always helpful.",
    "They are always deadly.",
    "They happen because an organism needs them."
   ],
   "answer": 0,
   "hint": "Mutations are random.",
   "explain": "Mutations are random changes. Whether one helps depends on the environment."
  },
  {
   "id": "w5q17",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "In undisturbed rock layers, where are the oldest fossils usually found?",
   "options": [
    "in the bottom layers",
    "in the top layers",
    "only in the middle layer",
    "anywhere: layer order means nothing"
   ],
   "answer": 0,
   "hint": "Layers pile up over time.",
   "explain": "The law of superposition: lower layers formed first, so they hold older fossils."
  },
  {
   "id": "w5q18",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "A human arm, a bat wing, and a whale flipper have the same set of bones. What does this suggest?",
   "options": [
    "They evolved from a common ancestor (homologous structures).",
    "They all do the same job.",
    "They evolved separately with no relationship.",
    "Bones never change."
   ],
   "answer": 0,
   "hint": "Same bones, different jobs.",
   "explain": "Homologous structures share a bone pattern inherited from a common ancestor."
  },
  {
   "id": "w5q19",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "A bird's wing and a butterfly's wing do the same job but are built very differently. These are...",
   "options": [
    "analogous structures",
    "homologous structures",
    "vestigial structures",
    "transitional fossils"
   ],
   "answer": 0,
   "hint": "Same job, different origins.",
   "explain": "Analogous structures have similar functions but evolved separately."
  },
  {
   "id": "w5q20",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "Humans have a tailbone (coccyx) with little or no use. What is it, and what does it suggest?",
   "options": [
    "a vestigial structure; humans share ancestors with tailed animals",
    "a homologous structure that is fully functional",
    "an analogous structure; humans never had tails",
    "a brand-new structure that is still forming"
   ],
   "answer": 0,
   "hint": "A leftover from ancestors.",
   "explain": "Vestigial structures are reduced remnants of structures that were useful in ancestors."
  },
  {
   "id": "w5q21",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "Human and chimpanzee cytochrome c proteins are identical, but yeast cytochrome c is very different. What does this suggest?",
   "options": [
    "Humans are more closely related to chimpanzees than to yeast.",
    "Humans and yeast are closely related.",
    "Proteins are not evidence of evolution.",
    "Chimpanzees came directly from yeast."
   ],
   "answer": 0,
   "hint": "Fewer differences means a more recent common ancestor.",
   "explain": "The more similar two species' DNA and proteins are, the more closely related they are."
  },
  {
   "id": "w5q22",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "Almost all living things use the same genetic code (the same codons for the same amino acids). Why is this evidence for evolution?",
   "options": [
    "It suggests all life shares a common ancestor.",
    "It shows all organisms are identical.",
    "It proves DNA never mutates.",
    "It means every organism makes the same proteins."
   ],
   "answer": 0,
   "hint": "Why would bacteria and humans share one code?",
   "explain": "A universal genetic code is best explained by descent from a common ancestor."
  },
  {
   "id": "w5q23",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "Tiktaalik is a fossil with features of both fish and four-legged land animals. It is an example of...",
   "options": [
    "a transitional fossil",
    "a vestigial structure",
    "an analogous structure",
    "a modern species"
   ],
   "answer": 0,
   "hint": "It is in between two groups.",
   "explain": "Transitional fossils show features of both an ancestral group and its descendants."
  },
  {
   "id": "w5q29",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "Over many generations, giraffes with longer necks reached more food and had more offspring. Which statement is correct?",
   "options": [
    "The allele for longer necks became more common in the population.",
    "Each giraffe stretched its neck and passed the longer neck on.",
    "Giraffes grew longer necks because they wanted to.",
    "Neck length is not inherited."
   ],
   "answer": 0,
   "hint": "Selection changes how common alleles are in a population, not individuals.",
   "explain": "Giraffes with long-neck alleles left more offspring, so those alleles became more common.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w5q30",
   "code": "3.1.9-12.X",
   "topic": "speciation",
   "prompt": "Which situation is most likely to lead to a new species?",
   "options": [
    "A new river splits a population, and each group adapts to different conditions for thousands of years.",
    "Two populations keep interbreeding freely.",
    "One animal learns a new trick.",
    "A population stays in one unchanging place."
   ],
   "answer": 0,
   "hint": "Isolation plus time plus different pressures.",
   "explain": "Isolated populations under different pressures can evolve until they can no longer interbreed.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w5q31",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "prompt": "Which is the strongest evidence that whales evolved from land mammals?",
   "options": [
    "Fossil whales with small back legs, and tiny hip bones in living whales",
    "Whales live in the ocean",
    "Whales and sharks both have fins",
    "Whales are very large"
   ],
   "answer": 0,
   "hint": "Look for leftovers from land ancestors.",
   "explain": "Transitional fossils and vestigial hip bones point to four-legged ancestors.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w5q32",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "Why do brothers and sisters (except identical twins) look different from each other?",
   "options": [
    "Meiosis and fertilization create new combinations of alleles.",
    "They have completely different genes from their parents.",
    "Mitosis makes each child different.",
    "Children choose their traits."
   ],
   "answer": 0,
   "hint": "Each gamete gets a different mix.",
   "explain": "Crossing over, independent assortment, and random fertilization make each child's allele combination unique.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w5q34",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "prompt": "Why does using antibiotics when they are not needed (for example, for a cold caused by a virus) speed up antibiotic resistance?",
   "options": [
    "Each use kills bacteria that are not resistant, so resistant bacteria survive and multiply more often.",
    "Antibiotics turn viruses into bacteria.",
    "Bacteria decide to become resistant when they sense the drug.",
    "Antibiotics make people's own cells resistant."
   ],
   "answer": 0,
   "hint": "Every dose is another round of selection.",
   "explain": "Antibiotics do not work on viruses, but they still kill the bacteria in your body that are not resistant. The resistant ones survive and reproduce, so every unneeded use gives resistance another advantage.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w5q35",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "A female cod can lay millions of eggs in one season, but only a few of her young live to be adults. Which factor of evolution does this show?",
   "options": [
    "Species can produce more offspring than can survive.",
    "Individuals change their traits because they need to.",
    "All of her offspring are exactly alike.",
    "The ocean has unlimited food for every young fish."
   ],
   "answer": 0,
   "hint": "Compare how many are born with how many survive.",
   "explain": "Species can produce far more offspring than the environment can support, so many die before they can reproduce. That sets up a struggle to survive."
  },
  {
   "id": "w5q36",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "Two finch parents raise six chicks. Each chick's beak is slightly different. What best explains these differences?",
   "options": [
    "Sexual reproduction gave each chick a different mix of its parents' alleles.",
    "Each chick chose the beak size it wanted.",
    "The food the chicks ate changed their DNA.",
    "Mitosis made each chick different from its parents."
   ],
   "answer": 0,
   "hint": "Where do a chick's alleles come from?",
   "explain": "In sexual reproduction, each offspring gets a new combination of its parents' alleles. That inherited variation is what natural selection acts on."
  },
  {
   "id": "w5q37",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "During a drought, seeds become scarce and the finches on an island compete for them. Why does this competition matter for evolution?",
   "options": [
    "Not all finches can survive, so those with traits that help them get food leave more offspring.",
    "Competition makes every finch grow a bigger beak during its life.",
    "Competition gives every finch the same chance to survive.",
    "Competition stops finches from having any offspring at all."
   ],
   "answer": 0,
   "hint": "If there is not enough food for all, who survives?",
   "explain": "Limited resources mean not every individual survives. Individuals whose inherited traits help them compete leave more offspring, so those traits become more common."
  },
  {
   "id": "w5q38",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "A beetle population is 10% green and 90% brown. Birds spot green beetles more easily. If nothing else changes, what is the most likely result after many generations?",
   "options": [
    "Brown beetles make up even more than 90% of the population.",
    "Green beetles rise to about 50% of the population.",
    "The population stays exactly 10% green.",
    "All of the beetles turn green."
   ],
   "answer": 0,
   "hint": "Which color survives and reproduces more?",
   "explain": "Brown beetles survive and reproduce more, so the share of brown beetles keeps growing over the generations."
  },
  {
   "id": "w5q39",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "Which list includes all FOUR factors that drive evolution?",
   "options": [
    "More offspring than can survive, inherited variation, competition for limited resources, and better-suited individuals reproducing more",
    "Unlimited resources, identical offspring, no competition, and every individual reproducing equally",
    "Individuals changing their genes on purpose, inherited variation, competition, and more offspring than can survive",
    "Traits gained during life, competition, unlimited resources, and better-suited individuals reproducing more"
   ],
   "answer": 0,
   "hint": "Look for the list with no myths in it.",
   "explain": "Evolution mostly results from: (1) the potential to produce more offspring than can survive, (2) inherited variation, (3) competition for limited resources, and (4) better-suited individuals surviving and reproducing more."
  },
  {
   "id": "w5q40",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "prompt": "A gardener plants 200 seeds that are all genetically identical. A very dry summer follows. Why can natural selection NOT make this group better at surviving drought?",
   "options": [
    "There is no inherited variation for selection to act on.",
    "There are too many seeds.",
    "Dry weather never affects plants.",
    "The plants are competing for water."
   ],
   "answer": 0,
   "hint": "What do the seeds lack?",
   "explain": "Natural selection needs inherited variation. If every seed has the same alleles, no seed has a trait that helps it survive better and pass that trait on."
  },
  {
   "id": "w5q47",
   "code": "3.1.9-12.X",
   "topic": "env-change",
   "prompt": "A drought dries up most of the ponds in a region for many years. What is most likely to happen to frog species there that need ponds to lay their eggs?",
   "options": [
    "Their numbers drop, and some may go extinct in that region.",
    "Their numbers grow quickly.",
    "They stop needing water to reproduce.",
    "Nothing changes for them."
   ],
   "answer": 0,
   "hint": "What do these frogs need that the drought takes away?",
   "explain": "When the environment changes, species that depend on what was lost can decline or go extinct."
  },
  {
   "id": "w5q48",
   "code": "3.1.9-12.X",
   "topic": "env-change",
   "prompt": "Fertilizer runoff adds nutrients to a lake. Algae grow quickly, and fish that need lots of oxygen become rare. What does this show?",
   "options": [
    "A change in the environment can make some species increase and others decrease.",
    "Fertilizer has no effect on lake life.",
    "Every species in the lake increases.",
    "Fish can change their need for oxygen when they want to."
   ],
   "answer": 0,
   "hint": "Compare what happened to the algae and to the fish.",
   "explain": "Environmental changes help some species (the algae) and harm others (oxygen-loving fish), changing which species are common."
  },
  {
   "id": "w5q49",
   "code": "3.1.9-12.X",
   "topic": "env-change",
   "prompt": "Why is a very FAST change in the environment more likely to cause extinction than a slow change?",
   "options": [
    "A population may die out before helpful inherited traits can become common.",
    "Fast changes always help every species.",
    "Slow changes never affect species.",
    "Animals can change their genes faster during fast changes."
   ],
   "answer": 0,
   "hint": "Natural selection takes many generations.",
   "explain": "Natural selection needs generations to make helpful traits common. If conditions change too fast, a species may go extinct first."
  },
  {
   "id": "w5q50",
   "code": "3.1.9-12.X",
   "topic": "env-change",
   "prompt": "Most of the trees in a forest are cut down and the land becomes open grassland. Which species is most likely to INCREASE in number?",
   "options": [
    "a bird that nests on open ground and eats grass seeds",
    "an owl that nests in tree holes",
    "a squirrel that eats acorns",
    "a woodpecker that drills into tree bark"
   ],
   "answer": 0,
   "hint": "Which species does the new grassland help?",
   "explain": "Deforestation removes what forest species need, but species suited to open land can increase.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w5q41",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "On dark lava rock, dark-furred pocket mice made up 20% of a population at first and 80% after many generations. What best explains this change?",
   "options": [
    "Dark fur hid mice from predators on dark rock, so dark mice survived and reproduced more.",
    "Light mice turned dark to match the rock.",
    "The lava changed the color of the mice's fur directly.",
    "Dark mice are always more common in every habitat."
   ],
   "answer": 0,
   "hint": "Which mice are harder for owls to see on dark rock?",
   "explain": "Dark fur is an advantage on dark rock. Dark mice survive and reproduce more, so the PROPORTION of dark mice rises over the generations."
  },
  {
   "id": "w5q42",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "Over four years, the percent of finches with deep beaks on an island was 20%, 30%, 45%, and then 60%. Which conclusion do these data support?",
   "options": [
    "Deep beaks are increasing in proportion, so they probably give an advantage there.",
    "Deep beaks are becoming less common.",
    "The proportion of deep beaks did not change.",
    "Every finch on the island now has a deep beak."
   ],
   "answer": 0,
   "hint": "Is the percent going up, down, or staying the same?",
   "explain": "A trait that keeps rising as a share of the population is most likely an advantage in that environment."
  },
  {
   "id": "w5q43",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "Before a drought, the MEAN (average) beak depth of a finch population was 9.2 mm. Among the finches that survived the drought, the mean was 9.8 mm. What does this suggest?",
   "options": [
    "Finches with deeper beaks survived the drought better.",
    "Every finch grew a deeper beak during the drought.",
    "Beak depth had nothing to do with survival.",
    "Finches with shallow beaks survived better."
   ],
   "answer": 0,
   "hint": "Did the average go up or down among the survivors?",
   "explain": "The survivors' average beak was deeper, so deeper-beaked finches were more likely to survive and pass on their beak depth."
  },
  {
   "id": "w5q44",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "Why do scientists track the PERCENT of a population that has a trait, instead of only counting how many individuals have it?",
   "options": [
    "The population size can change, so a percent shows whether the trait is becoming more common compared with the others.",
    "Percents are always bigger numbers.",
    "Counting individuals is never allowed in science.",
    "A percent shows which individual is the strongest."
   ],
   "answer": 0,
   "hint": "What if the whole population doubles?",
   "explain": "If a population grows or shrinks, raw counts can mislead. The percent (proportion) shows whether the trait is gaining ground relative to the rest."
  },
  {
   "id": "w5q45",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "Near Manchester, England, dark peppered moths were very rare in the 1840s but made up about 98% of the moths by 1895, after soot darkened the tree bark. Which conclusion is best supported?",
   "options": [
    "Dark color became an advantage on sooty bark, so dark moths increased in proportion.",
    "Soot painted the moths dark.",
    "Light moths chose to stop reproducing.",
    "The change happened by chance and has no link to the bark."
   ],
   "answer": 0,
   "hint": "Which moths could birds see on dark bark?",
   "explain": "On soot-darkened bark, dark moths were hidden from birds, survived and reproduced more, and rose from rare to most of the population."
  },
  {
   "id": "w5q46",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "prompt": "Antibiotic-resistant bacteria made up 1% of a population before treatment and 90% after a week of treatment. Which statement is correct?",
   "options": [
    "The antibiotic killed most of the bacteria that were not resistant, so the resistant trait rose in proportion.",
    "The antibiotic made the bacteria become resistant.",
    "The resistant bacteria disappeared.",
    "The proportion of resistant bacteria stayed the same."
   ],
   "answer": 0,
   "hint": "Which bacteria survived the treatment?",
   "explain": "Resistance already existed in a few bacteria. The antibiotic removed the others, so the resistant share rose from 1% to 90%.",
   "tags": [
    "boss"
   ]
  }
 ],
 "pairs": [
  {
   "name": "Homologous or analogous?",
   "explain": "Homologous structures share bones from a common ancestor but may do different jobs. Analogous structures do the same job but evolved separately.",
   "members": [
    {
     "label": "Homologous",
     "level": "6-4",
     "ids": [
      "structures.0",
      "structures.3",
      "w5q18"
     ]
    },
    {
     "label": "Analogous",
     "level": "6-4",
     "ids": [
      "structures.1",
      "structures.4",
      "w5q19"
     ]
    }
   ]
  }
 ],
 "become": [
  {
   "id": "b-moth",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "you": "a peppered moth resting on soot-darkened tree bark in 1850s England",
   "short": "Moth",
   "color": "#5a5a5a",
   "goal": "Go through the door of the moth most likely to survive and have offspring.",
   "doors": [
    {
     "kind": "organelle",
     "label": "Dark moth: hidden from birds on dark bark",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Light moth: easy for birds to spot",
     "ok": false,
     "why": "On dark bark, light moths stand out, and birds eat them first."
    },
    {
     "kind": "vesicle",
     "label": "A moth that turns dark by trying hard",
     "ok": false,
     "why": "Moths cannot change their genes by effort. Selection acts on traits they already have."
    }
   ],
   "explain": "Dark moths survived and reproduced more, so the dark allele became more common: natural selection."
  },
  {
   "id": "b-isolation",
   "code": "3.1.9-12.X",
   "topic": "speciation",
   "you": "a Kaibab squirrel on the north rim of the Grand Canyon",
   "short": "Squirrel",
   "color": "#a8785a",
   "goal": "Go through the door that explains why you never mate with the Abert's squirrels on the south rim.",
   "doors": [
    {
     "kind": "organelle",
     "label": "The canyon keeps the two populations apart",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Squirrels only mate with squirrels of the exact same color",
     "ok": false,
     "why": "The two kinds of squirrel now look different, but color is not what keeps them apart. The canyon itself does."
    },
    {
     "kind": "vesicle",
     "label": "Squirrels never mate with other squirrels",
     "ok": false,
     "why": "Squirrels mate within their own population. The canyon stops the two populations from meeting."
    }
   ],
   "explain": "The canyon is a geographic barrier. Isolated populations evolve separately, which can lead to new species."
  },
  {
   "id": "b-homolog",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "you": "a whale's flipper",
   "short": "Flipper",
   "color": "#62b6cb",
   "goal": "Find the structure built from the same bones as you.",
   "doors": [
    {
     "kind": "organelle",
     "label": "A human arm",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "A shark's fin",
     "ok": false,
     "why": "A shark's fin has a similar shape for swimming, but different structure: analogous, not homologous."
    },
    {
     "kind": "vesicle",
     "label": "A butterfly's wing",
     "ok": false,
     "why": "Insect wings have no bones at all. They are not homologous to a flipper."
    }
   ],
   "explain": "A whale flipper and a human arm share the same bone pattern from a common mammal ancestor: homologous structures."
  },
  {
   "id": "b-factors",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "you": "a sea turtle egg, one of about 100 laid in the same nest on a beach",
   "short": "Egg",
   "color": "#f4f0e4",
   "goal": "Go through the door that best describes what will happen to your nest-mates.",
   "doors": [
    {
     "kind": "organelle",
     "label": "Most will not live to be adults: more are born than can survive",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "All 100 will grow up, because the sea has unlimited food",
     "ok": false,
     "why": "Food and safe places are limited. Predators and hunger mean only a few hatchlings grow up."
    },
    {
     "kind": "vesicle",
     "label": "Each hatchling will change its genes to fit the sea",
     "ok": false,
     "why": "Individuals cannot change their genes. Selection acts on the variation they are born with."
    }
   ],
   "explain": "Species produce more offspring than can survive. Which ones survive depends partly on their inherited traits: one of the four factors of evolution."
  }
 ],
 "catches": [
  {
   "id": "c-factors",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "short": "Four factors",
   "title": "Name the factor: grab the factor of evolution that matches each event.",
   "cueLabel": "Event",
   "builtLabel": "Named",
   "cueWord": "event",
   "tokenWord": "factor",
   "rule": "More offspring than survive, inherited variation, competition, and better-suited individuals reproducing more.",
   "choices": [
    "More offspring than can survive",
    "Inherited variation",
    "Competition for resources",
    "Better-suited reproduce more",
    "Succession",
    "Photosynthesis"
   ],
   "steps": [
    {
     "cue": "A salmon lays thousands of eggs, but few grow up",
     "need": "More offspring than can survive"
    },
    {
     "cue": "Sibling finches are born with different beak sizes",
     "need": "Inherited variation"
    },
    {
     "cue": "Finches crowd around the last seeds after a drought",
     "need": "Competition for resources"
    },
    {
     "cue": "Deep-beaked finches raise the most chicks",
     "need": "Better-suited reproduce more"
    }
   ],
   "hint": "Too many born? Born different? Not enough to go around? Who leaves more young?",
   "wrong": {
    "Succession": "Succession is how a community changes after a disturbance, not one of the four factors of evolution.",
    "Photosynthesis": "Photosynthesis makes sugar from light. It is not one of the four factors of evolution."
   },
   "explain": "Overproduction, inherited variation, competition for limited resources, and better-suited individuals reproducing more together drive evolution."
  }
 ],
 "data": [
  {
   "id": "d-finch",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "title": "Medium ground finches that survived a drought that left mostly large, hard seeds",
   "xlabel": "Beak depth",
   "ylabel": "Percent that survived",
   "categories": [
    "8 mm",
    "9 mm",
    "10 mm",
    "11 mm",
    "12 mm"
   ],
   "values": [
    10,
    20,
    35,
    55,
    70
   ],
   "questions": [
    {
     "prompt": "Which beak depth had the HIGHEST survival?",
     "answer": 4,
     "hint": "Find the tallest bar.",
     "explain": "Deep beaks crack large, hard seeds, so 12 mm finches survived best."
    },
    {
     "prompt": "Which beak depth had the LOWEST survival?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "Shallow beaks could not crack the hard seeds left after the drought."
    },
    {
     "prompt": "In which group did a little more than half of the finches survive?",
     "answer": 3,
     "hint": "Look for a bar just above 50.",
     "explain": "About 55% of 11 mm finches survived. Over generations, deeper beaks became more common."
    }
   ]
  },
  {
   "id": "d-resistance",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "title": "Bacteria that resist an antibiotic, measured while the antibiotic is in use",
   "xlabel": "Day",
   "ylabel": "Percent resistant",
   "categories": [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Day 5"
   ],
   "values": [
    2,
    10,
    35,
    70,
    95
   ],
   "questions": [
    {
     "prompt": "On which day were resistant bacteria the RAREST?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "At first only a few bacteria carried the resistance mutation."
    },
    {
     "prompt": "On which day did resistant bacteria first become MORE than half of the population?",
     "answer": 3,
     "hint": "Look for the first bar above 50.",
     "explain": "By Day 4, 70% were resistant: the antibiotic kept removing the others."
    },
    {
     "prompt": "On which day was the population almost entirely resistant?",
     "answer": 4,
     "hint": "Find the tallest bar.",
     "explain": "By Day 5, 95% were resistant. Natural selection favored the mutation."
    }
   ]
  },
  {
   "id": "d-cytochrome",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "title": "Amino acid differences between human cytochrome c and other organisms' cytochrome c",
   "xlabel": "Organism",
   "ylabel": "Number of differences",
   "categories": [
    "Chimpanzee",
    "Rhesus monkey",
    "Horse",
    "Chicken",
    "Yeast"
   ],
   "values": [
    0,
    1,
    12,
    13,
    44
   ],
   "questions": [
    {
     "prompt": "Which organism is MOST closely related to humans?",
     "answer": 0,
     "hint": "Fewest differences.",
     "explain": "Chimpanzee cytochrome c is identical to ours: we share a recent common ancestor."
    },
    {
     "prompt": "Which organism is LEAST closely related to humans?",
     "answer": 4,
     "hint": "Most differences.",
     "explain": "Yeast (a fungus) has 44 differences: our common ancestor lived very long ago."
    },
    {
     "prompt": "Which organism differs from humans by just one amino acid?",
     "answer": 1,
     "hint": "Look for the bar at 1.",
     "explain": "The rhesus monkey differs by one amino acid: another close primate relative."
    }
   ]
  },
  {
   "id": "d-overproduce",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "title": "What happened to 96 field mice born in one spring (illustrative numbers)",
   "xlabel": "Stage",
   "ylabel": "Mice alive",
   "categories": [
    "Born",
    "After 1 month",
    "After 3 months",
    "Lived to breed"
   ],
   "values": [
    96,
    48,
    24,
    12
   ],
   "questions": [
    {
     "prompt": "At which stage were the MOST mice alive?",
     "answer": 0,
     "hint": "Find the tallest bar.",
     "explain": "All 96 were alive at birth. Many more are born than the field can support."
    },
    {
     "prompt": "At which stage were HALF of the mice born still alive?",
     "answer": 1,
     "hint": "Half of 96 is 48.",
     "explain": "After 1 month only 48 of 96 (half) were alive: food, predators, and weather limit survival."
    },
    {
     "prompt": "At which stage were the FEWEST mice alive?",
     "answer": 3,
     "hint": "Find the shortest bar.",
     "explain": "Only 12 of 96 (1 in 8) lived to breed. The survivors pass their traits to the next generation."
    }
   ]
  },
  {
   "id": "d-mice",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "title": "Rock pocket mice with dark fur living on dark lava rock (illustrative numbers)",
   "xlabel": "Generation",
   "ylabel": "Percent with dark fur",
   "categories": [
    "Gen 1",
    "Gen 5",
    "Gen 10",
    "Gen 15",
    "Gen 20"
   ],
   "values": [
    10,
    25,
    45,
    65,
    80
   ],
   "questions": [
    {
     "prompt": "In which generation were dark mice LEAST common?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "At first only 10% of the mice had dark fur."
    },
    {
     "prompt": "In which generation did dark mice FIRST make up more than half of the population?",
     "answer": 3,
     "hint": "Look for the first bar above 50.",
     "explain": "By generation 15, 65% had dark fur: the proportion kept rising."
    },
    {
     "prompt": "In which generation did 4 out of 5 mice have dark fur?",
     "answer": 4,
     "hint": "4 out of 5 is 80%.",
     "explain": "By generation 20, 80% had dark fur. Dark fur is an advantage on dark rock, so it increased in proportion."
    }
   ]
  }
 ],
 "mazes": [
  {
   "id": "maze-speciation",
   "code": "3.1.9-12.X",
   "topic": "speciation",
   "title": "How one species becomes two: go through the doorway for the next step",
   "start": "One squirrel population",
   "steps": [
    {
     "label": "A canyon splits the population",
     "hint": "What separates them first?",
     "why": "A geographic barrier separates the population into two groups."
    },
    {
     "label": "Each group faces different conditions",
     "hint": "Are both sides exactly the same?",
     "why": "Different food, predators, or climate on each side mean different selection pressures."
    },
    {
     "label": "Allele frequencies change in each group",
     "hint": "Natural selection acts on each side separately.",
     "why": "Each group's inherited traits change on their own, shaped by its own conditions."
    },
    {
     "label": "They can no longer interbreed: two species",
     "hint": "What finally makes them separate species?",
     "why": "When they can no longer interbreed and produce fertile offspring, they are separate species."
    }
   ],
   "extra": [
    "They blend back into one",
    "Nothing changes"
   ],
   "explain": "Speciation: isolation, different conditions, separate changes in inherited traits, and finally the groups can no longer interbreed."
  }
 ],
 "sequences": [
  {
   "id": "s-selection",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "title": "Put the steps of natural selection in order",
   "steps": [
    "Individuals vary, and much of that variation is inherited",
    "More offspring are born than can survive",
    "Individuals with helpful traits survive and reproduce more",
    "Over generations, the helpful alleles become more common"
   ],
   "hint": "It starts with variation.",
   "explain": "Variation, overproduction, differential survival and reproduction, then a change in how common each allele is."
  },
  {
   "id": "s-resistance",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "title": "How antibiotic resistance spreads",
   "steps": [
    "A random mutation makes a few bacteria resistant",
    "The antibiotic kills most bacteria that are not resistant",
    "The resistant bacteria survive and reproduce",
    "Soon most of the population is resistant"
   ],
   "hint": "The mutation comes first, before the antibiotic.",
   "explain": "The antibiotic does not cause the mutation. It selects for resistant bacteria that already existed."
  },
  {
   "id": "s-layers",
   "code": "3.1.9-12.S",
   "topic": "evidence",
   "title": "Order the fossils from OLDEST (bottom layer) to YOUNGEST (top layer)",
   "steps": [
    "Trilobites (bottom layer)",
    "Armored fishes",
    "Dinosaurs",
    "Woolly mammoths (top layer)"
   ],
   "hint": "Lower layers formed first.",
   "explain": "The law of superposition: in undisturbed layers, the deepest fossils are the oldest."
  },
  {
   "id": "s-fourfactors",
   "code": "3.1.9-12.T",
   "topic": "four-factors",
   "title": "Put the four factors in order, as they play out in a finch population",
   "steps": [
    "Finches lay more eggs than the island can support",
    "The chicks vary, and their beak sizes are inherited",
    "The chicks compete for a limited supply of seeds",
    "Chicks with better-suited beaks survive and raise more young"
   ],
   "hint": "Start with how many are born.",
   "explain": "More offspring than can survive, inherited variation, competition for limited resources, then better-suited individuals reproduce more."
  }
 ],
 "wordbanks": [
  {
   "id": "wb-selection",
   "code": "3.1.9-12.W",
   "topic": "selection",
   "words": [
    "variation",
    "adaptation",
    "fitness",
    "natural selection",
    "selection pressure",
    "camouflage"
   ],
   "sentences": [
    {
     "text": "Differences among individuals in a population are called ___.",
     "answer": "variation",
     "code": "3.1.9-12.T",
     "explain": "Variation is the raw material for evolution."
    },
    {
     "text": "An inherited trait that helps an organism survive and reproduce is an ___.",
     "answer": "adaptation",
     "code": "3.1.9-12.W",
     "explain": "Adaptations, like camouflage, help organisms survive."
    },
    {
     "text": "How well an organism survives and reproduces is its ___.",
     "answer": "fitness",
     "code": "3.1.9-12.W",
     "explain": "Fitness is measured in offspring."
    },
    {
     "text": "Better-suited individuals leaving more offspring is ___.",
     "answer": "natural selection",
     "code": "3.1.9-12.W",
     "explain": "Natural selection changes how common each allele is over generations."
    },
    {
     "text": "A drought that makes hard seeds the only food is a ___.",
     "answer": "selection pressure",
     "code": "3.1.9-12.W",
     "explain": "Selection pressures decide which traits are helpful."
    }
   ]
  },
  {
   "id": "wb-speciation",
   "code": "3.1.9-12.X",
   "topic": "speciation",
   "words": [
    "species",
    "speciation",
    "geographic isolation",
    "extinction",
    "environmental change",
    "mutation"
   ],
   "sentences": [
    {
     "text": "A group that can interbreed and have fertile offspring is a ___.",
     "answer": "species",
     "code": "3.1.9-12.X",
     "explain": "Members of a species can interbreed in nature."
    },
    {
     "text": "The formation of a new species is called ___.",
     "answer": "speciation",
     "code": "3.1.9-12.X",
     "explain": "Speciation often follows isolation."
    },
    {
     "text": "When a canyon, river, or mountain keeps populations apart, there is ___.",
     "answer": "geographic isolation",
     "code": "3.1.9-12.X",
     "explain": "Separated populations change on their own and can become new species."
    },
    {
     "text": "When every member of a species dies, the species has gone through ___.",
     "answer": "extinction",
     "code": "3.1.9-12.X",
     "explain": "Most species that ever lived are now extinct."
    },
    {
     "text": "A drought, a flood, or cutting down a forest is an ___.",
     "answer": "environmental change",
     "code": "3.1.9-12.X",
     "explain": "Environmental changes can make some species increase, lead to new species, or cause extinctions."
    }
   ]
  },
  {
   "id": "wb-traits",
   "code": "3.1.9-12.U",
   "topic": "trait-stats",
   "words": [
    "proportion",
    "generation",
    "advantage",
    "mean",
    "increase",
    "percent"
   ],
   "sentences": [
    {
     "text": "If 30 of 100 mice have dark fur, the ___ of dark mice is 30%.",
     "answer": "proportion",
     "code": "3.1.9-12.U",
     "explain": "A proportion is the part of the whole, often written as a percent."
    },
    {
     "text": "Parents, then their offspring, then their offspring's offspring: each step is one ___.",
     "answer": "generation",
     "code": "3.1.9-12.U",
     "explain": "Natural selection shows up over many generations."
    },
    {
     "text": "A trait that helps an organism survive and reproduce gives it an ___.",
     "answer": "advantage",
     "code": "3.1.9-12.U",
     "explain": "Advantageous traits are passed on more often."
    },
    {
     "text": "Adding up all the beak depths and dividing by the number of finches gives the ___.",
     "answer": "mean",
     "code": "3.1.9-12.U",
     "explain": "The mean (average) can shift when some individuals survive better."
    },
    {
     "text": "Over generations, an advantageous inherited trait tends to ___ in proportion.",
     "answer": "increase",
     "code": "3.1.9-12.U",
     "explain": "Organisms with the trait leave more offspring, so its share grows."
    }
   ]
  }
 ],
 "lablocks": [
  {
   "id": "lock-6-4",
   "title": "Lab Lock",
   "clues": [
    {
     "prompt": "Clue 1: A cliff has 5 undisturbed rock layers. Counting from the TOP as layer 1, which layer holds the oldest fossils?",
     "answer": 5,
     "code": "3.1.9-12.S",
     "hint": "The deepest layer formed first.",
     "explain": "Layer 5, the bottom layer, is the oldest (law of superposition)."
    },
    {
     "prompt": "Clue 2: How many of these are homologous to a human arm? Bat wing, whale flipper, cat leg, butterfly wing.",
     "answer": 3,
     "code": "3.1.9-12.S",
     "hint": "Which ones have the same bones?",
     "explain": "Bat wing, whale flipper, and cat leg share our arm bones (3). Butterfly wings have no bones."
    },
    {
     "prompt": "Clue 3: How many organisms on the graph differ from humans by FEWER than 13 amino acids?",
     "answer": 3,
     "code": "3.1.9-12.S",
     "figure": {
      "type": "bars",
      "categories": [
       "Chimp",
       "Rhesus",
       "Horse",
       "Chicken",
       "Yeast"
      ],
      "values": [
       0,
       1,
       12,
       13,
       44
      ],
      "ylabel": "Differences"
     },
     "hint": "Count the bars below 13.",
     "explain": "Chimpanzee (0), rhesus monkey (1), and horse (12): 3 organisms."
    }
   ],
   "debrief": [
    "Clue 1 linked fossils to time: deeper layers are older.",
    "Clue 2 linked anatomy to ancestry: homologous structures share bones from a common ancestor.",
    "Clue 3 linked biochemistry to relationships: fewer protein differences means closer relatives."
   ]
  }
 ],
 "scans": [
  {
   "id": "s5-variation",
   "name": "Finch flock",
   "look": "critter",
   "color": "#a08060",
   "word": "Variation",
   "def": "Differences in traits among individuals of the same species.",
   "note": "These finches' beaks differ in size and shape. Without VARIATION, natural selection would have nothing to act on."
  },
  {
   "id": "s5-adaptation",
   "name": "Cactus finch",
   "look": "critter",
   "color": "#7a5a3a",
   "word": "Adaptation",
   "def": "An inherited trait that helps an organism survive and reproduce in its environment.",
   "note": "This finch's long, pointed beak reaches into cactus flowers: an ADAPTATION for its food."
  },
  {
   "id": "s5-fitness",
   "name": "Nest of chicks",
   "look": "eggs",
   "color": "#f4f0e4",
   "word": "Fitness",
   "def": "An organism's ability to survive and reproduce in its environment.",
   "note": "FITNESS is counted in offspring: the parent of this nest is passing on its alleles."
  },
  {
   "id": "s5-pressure",
   "name": "Dry season",
   "look": "sun",
   "color": "#ffb070",
   "word": "Selection pressure",
   "def": "A factor in the environment, like drought or predators, that affects which individuals survive.",
   "note": "A drought is a SELECTION PRESSURE: only finches that can crack the remaining hard seeds survive."
  },
  {
   "id": "s5-selection",
   "name": "Survivors",
   "look": "stack",
   "color": "#7be0ad",
   "word": "Natural selection",
   "def": "The process by which individuals with helpful inherited traits survive and reproduce more.",
   "note": "NATURAL SELECTION was explained by Charles Darwin and Alfred Russel Wallace in 1858."
  },
  {
   "id": "s5-camouflage",
   "name": "Peppered moth",
   "look": "critter",
   "color": "#5a5a5a",
   "word": "Camouflage",
   "def": "Coloring or shape that helps an organism blend into its surroundings.",
   "note": "Dark moths hid on soot-darkened bark. CAMOUFLAGE is an adaptation that protects prey from predators."
  },
  {
   "id": "s5-darwin",
   "name": "Giant tortoise",
   "look": "turtle",
   "color": "#7a6a4a",
   "word": "Common descent",
   "def": "The idea that all living things are related through shared ancestors.",
   "note": "Tortoises differ from island to island. Darwin's 1835 visit to the Galápagos helped him reason that species share COMMON ANCESTORS."
  },
  {
   "id": "s5-newallele",
   "name": "Mutated DNA",
   "look": "helix",
   "color": "#e85d5d",
   "word": "Mutation (source of variation)",
   "def": "A change in DNA; the original source of new alleles.",
   "note": "MUTATIONS are random. Most do little, but a few create alleles that selection can favor."
  },
  {
   "id": "s5-resist",
   "name": "Resistant bacteria",
   "look": "cell",
   "color": "#ff9f6e",
   "word": "Antibiotic resistance",
   "def": "The ability of some bacteria to survive an antibiotic, spread by natural selection.",
   "note": "Overusing antibiotics selects for RESISTANT bacteria. That is evolution happening right now."
  },
  {
   "id": "s5-species",
   "name": "Two squirrels",
   "look": "critter",
   "color": "#a8785a",
   "word": "Species",
   "def": "A group of organisms that can interbreed in nature and produce fertile offspring.",
   "note": "Kaibab and Abert's squirrels now look different, and the canyon keeps them apart. Are they becoming separate SPECIES?"
  },
  {
   "id": "s5-geographic",
   "name": "Canyon wall",
   "look": "rock",
   "color": "#c8784a",
   "word": "Geographic isolation",
   "def": "Separation of populations by a physical barrier, such as a canyon, river, or mountain.",
   "note": "The Grand Canyon is a barrier: GEOGRAPHIC ISOLATION."
  },
  {
   "id": "s5-speciation",
   "name": "Branching tree",
   "look": "stack",
   "color": "#7be0ad",
   "word": "Speciation",
   "def": "The formation of a new species.",
   "note": "SPECIATION happens when isolated populations evolve until they can no longer interbreed."
  },
  {
   "id": "s5-radiation",
   "name": "Many finches",
   "look": "critter",
   "color": "#a08060",
   "word": "Adaptive radiation",
   "def": "One ancestral species evolving into many species that fill different niches.",
   "note": "Darwin's finches spread into many niches: seed-crackers, insect-eaters, cactus-feeders. That is ADAPTIVE RADIATION."
  },
  {
   "id": "s5-extinct",
   "name": "Mammoth tusk",
   "look": "rock",
   "color": "#e8e0c8",
   "word": "Extinction",
   "def": "The death of every member of a species.",
   "note": "Woolly mammoths are EXTINCT. Most species that ever lived on Earth are now extinct."
  },
  {
   "id": "s5-fossil",
   "name": "Ammonite fossil",
   "look": "rock",
   "color": "#c8a070",
   "word": "Fossil",
   "def": "The preserved remains or traces of an organism that lived long ago.",
   "note": "FOSSILS show what ancient life looked like and how it changed over time."
  },
  {
   "id": "s5-layers",
   "name": "Rock layers",
   "look": "stack",
   "color": "#c8784a",
   "word": "Law of superposition",
   "def": "In undisturbed rock layers, lower layers are older than the layers above them.",
   "note": "Read the cliff from the bottom up: older to younger. That is the LAW OF SUPERPOSITION."
  },
  {
   "id": "s5-transitional",
   "name": "Tiktaalik",
   "look": "rock",
   "color": "#8a9a7a",
   "word": "Transitional fossil",
   "def": "A fossil with features of both an ancestral group and its descendants.",
   "note": "Tiktaalik had gills and scales like a fish, but a neck and sturdy fins like early four-legged animals: a TRANSITIONAL FOSSIL."
  },
  {
   "id": "s5-homologous",
   "name": "Forelimb bones",
   "look": "critter",
   "color": "#f4f0e4",
   "word": "Homologous structures",
   "def": "Structures with the same basic bones, inherited from a common ancestor, even if they do different jobs.",
   "note": "Your arm, a bat's wing, and a whale's flipper have the same bones: HOMOLOGOUS STRUCTURES."
  },
  {
   "id": "s5-analogous",
   "name": "Insect wing",
   "look": "critter",
   "color": "#7fd4ff",
   "word": "Analogous structures",
   "def": "Structures that do the same job but evolved separately and are built differently.",
   "note": "Butterfly wings and bird wings both fly, but are built differently: ANALOGOUS STRUCTURES."
  },
  {
   "id": "s5-vestigial",
   "name": "Whale hip bones",
   "look": "rock",
   "color": "#e8e0c8",
   "word": "Vestigial structure",
   "def": "A reduced structure with little or no use that was useful in an ancestor.",
   "note": "Whales have tiny hip bones left over from land-walking ancestors: a VESTIGIAL STRUCTURE."
  },
  {
   "id": "s5-embryo",
   "name": "Early embryos",
   "look": "eggs",
   "color": "#ffb3a7",
   "word": "Embryology",
   "def": "The study of how organisms develop before birth; similar early stages suggest shared ancestry.",
   "note": "Early fish, chicken, and human embryos all have a tail and throat pouches. EMBRYOLOGY reveals shared ancestry."
  },
  {
   "id": "s5-molecular",
   "name": "DNA comparison",
   "look": "helix",
   "color": "#c59cff",
   "word": "Molecular evidence",
   "def": "Similarities in DNA and protein sequences that show how closely species are related.",
   "note": "Human and chimpanzee DNA are about 98% alike. MOLECULAR EVIDENCE shows we share a recent ancestor."
  },
  {
   "id": "s5-code",
   "name": "Universal code",
   "look": "chain",
   "color": "#7be0ad",
   "word": "Universal genetic code",
   "def": "Nearly all organisms use the same codons for the same amino acids.",
   "note": "The same three-base codes stand for the same amino acids in bacteria, oak trees, and you. A UNIVERSAL GENETIC CODE points to one common ancestor."
  },
  {
   "id": "s5r-mammoth",
   "name": "Woolly mammoth tusk",
   "look": "rock",
   "color": "#f0e6d0",
   "word": "Youngest layer",
   "def": "Rock and ice near the top hold the most recent fossils.",
   "note": "Woolly mammoths lived in the last Ice Age. Some have been found frozen in Siberian permafrost. Near the top means YOUNG: only thousands of years old."
  },
  {
   "id": "s5r-ambulo",
   "name": "Ambulocetus fossil",
   "look": "critter",
   "color": "#c8b08a",
   "word": "Walking whale",
   "def": "Ambulocetus, about 49 million years old, found in Pakistan.",
   "note": "Ambulocetus had legs and webbed feet but a whale-like skull and ears. It is a TRANSITIONAL FOSSIL between land mammals and whales."
  },
  {
   "id": "s5r-dino",
   "name": "T. rex skull",
   "look": "rock",
   "color": "#9a7a5a",
   "word": "Deeper means older",
   "def": "T. rex lived about 68 to 66 million years ago. Many were dug up in Montana's Hell Creek rocks.",
   "note": "No human or mammoth fossil is ever found in the same layer as T. rex. The deeper the layer, the OLDER the fossils."
  },
  {
   "id": "s5r-trilobite",
   "name": "Trilobite fossil",
   "look": "critter",
   "color": "#7a8a9a",
   "word": "Oldest layer here",
   "def": "Trilobites were sea arthropods that lived from about 520 to 252 million years ago.",
   "note": "Trilobites in the Burgess Shale (Canada) and the Grand Canyon are over 500 million years old. The bottom layer holds the OLDEST animals in this dig."
  },
  {
   "id": "s5-overproduce",
   "name": "Turtle nest",
   "look": "eggs",
   "color": "#f4f0e4",
   "word": "Overproduction",
   "def": "Producing more offspring than the environment can support.",
   "note": "A sea turtle lays about 100 eggs, but only a few hatchlings grow up. Species can make far more offspring than can survive: OVERPRODUCTION."
  },
  {
   "id": "s5-shuffle",
   "name": "Finch chicks",
   "look": "critter",
   "color": "#c8a078",
   "word": "Variation from sexual reproduction",
   "def": "Each offspring gets a new mix of its parents' alleles, so siblings differ.",
   "note": "No two of these chicks are exactly alike. SEXUAL REPRODUCTION shuffles the parents' alleles into new combinations."
  },
  {
   "id": "s5-competition",
   "name": "Seed pile",
   "look": "sprout",
   "color": "#c8a050",
   "word": "Competition",
   "def": "When individuals struggle for the same limited resources, such as food, water, or space.",
   "note": "After a drought, finches crowd around the last seeds. Not all of them can win this COMPETITION."
  },
  {
   "id": "s5-limited",
   "name": "Dry stream",
   "look": "rock",
   "color": "#c8b090",
   "word": "Limited resources",
   "def": "Food, water, space, and mates are in short supply, so not every individual can survive and reproduce.",
   "note": "This stream ran dry. When RESOURCES ARE LIMITED, survival depends partly on inherited traits."
  },
  {
   "id": "s5-heritable",
   "name": "Beak family",
   "look": "critter",
   "color": "#a08060",
   "word": "Heritable variation",
   "def": "Differences among individuals that are coded in DNA and passed from parents to offspring.",
   "note": "Parents with deep beaks tend to have chicks with deep beaks. Only HERITABLE VARIATION can be passed on and selected."
  },
  {
   "id": "s5-morekids",
   "name": "Busy nest",
   "look": "eggs",
   "color": "#ffe8b0",
   "word": "Better-suited survivors",
   "def": "Individuals whose traits fit the environment best survive and leave the most offspring.",
   "note": "This finch's beak suits the hard seeds, so it raised a full nest. Its alleles show up in more of the next generation."
  },
  {
   "id": "s5-envchange",
   "name": "Flooded valley",
   "look": "rock",
   "color": "#7fa8c8",
   "word": "Environmental change",
   "def": "A change in conditions, such as drought, flood, deforestation, or fertilizer runoff.",
   "note": "This valley flooded. An ENVIRONMENTAL CHANGE can make some species increase, lead to new species over time, or drive others extinct."
  },
  {
   "id": "s5-ratechange",
   "name": "Melting ice",
   "look": "crystal",
   "color": "#bfe8ff",
   "word": "Rate of change",
   "def": "How fast the environment changes.",
   "note": "Slow changes give natural selection time to work. When the RATE OF CHANGE is very fast, species may go extinct before they can adapt."
  },
  {
   "id": "s5-pocketmouse",
   "name": "Rock pocket mouse",
   "look": "critter",
   "color": "#4a4440",
   "word": "Advantageous trait",
   "def": "An inherited trait that helps organisms survive and reproduce in a particular environment.",
   "note": "On dark lava, dark fur hides these mice from owls. An ADVANTAGEOUS TRAIT tends to increase in proportion over the generations."
  },
  {
   "id": "s5-proportion",
   "name": "Mouse count",
   "look": "stack",
   "color": "#7fd4ff",
   "word": "Proportion",
   "def": "The part of a population that has a trait, often written as a percent.",
   "note": "Here 45 of 100 mice are dark: a PROPORTION of 45%. Tracking the percent shows whether a trait is becoming more common."
  },
  {
   "id": "s5-generation",
   "name": "Three generations",
   "look": "chain",
   "color": "#c59cff",
   "word": "Generation",
   "def": "One step in a family line: parents, then their offspring, then their offspring's offspring.",
   "note": "Natural selection is measured across GENERATIONS, not within one lifetime."
  },
  {
   "id": "s5-mean",
   "name": "Beak gauge",
   "look": "crystal",
   "color": "#ffd166",
   "word": "Mean (average)",
   "def": "The sum of all the values divided by how many values there are.",
   "note": "If the MEAN beak depth of survivors is deeper than before, deeper beaks helped finches survive."
  }
 ],
 "vocab": [
  {
   "term": "Variation",
   "def": "Differences in traits among individuals of the same species."
  },
  {
   "term": "Adaptation",
   "def": "An inherited trait that helps an organism survive and reproduce in its environment."
  },
  {
   "term": "Fitness",
   "def": "An organism's ability to survive and reproduce in its environment."
  },
  {
   "term": "Selection pressure",
   "def": "A factor in the environment, like drought or predators, that affects which individuals survive."
  },
  {
   "term": "Natural selection",
   "def": "The process by which individuals with helpful inherited traits survive and reproduce more."
  },
  {
   "term": "Camouflage",
   "def": "Coloring or shape that helps an organism blend into its surroundings."
  },
  {
   "term": "Common descent",
   "def": "The idea that all living things are related through shared ancestors."
  },
  {
   "term": "Mutation (source of variation)",
   "def": "A change in DNA; the original source of new alleles."
  },
  {
   "term": "Antibiotic resistance",
   "def": "The ability of some bacteria to survive an antibiotic, spread by natural selection."
  },
  {
   "term": "Species",
   "def": "A group of organisms that can interbreed in nature and produce fertile offspring."
  },
  {
   "term": "Geographic isolation",
   "def": "Separation of populations by a physical barrier, such as a canyon, river, or mountain."
  },
  {
   "term": "Speciation",
   "def": "The formation of a new species."
  },
  {
   "term": "Adaptive radiation",
   "def": "One ancestral species evolving into many species that fill different niches."
  },
  {
   "term": "Extinction",
   "def": "The death of every member of a species."
  },
  {
   "term": "Fossil",
   "def": "The preserved remains or traces of an organism that lived long ago."
  },
  {
   "term": "Law of superposition",
   "def": "In undisturbed rock layers, lower layers are older than the layers above them."
  },
  {
   "term": "Transitional fossil",
   "def": "A fossil with features of both an ancestral group and its descendants."
  },
  {
   "term": "Homologous structures",
   "def": "Structures with the same basic bones, inherited from a common ancestor, even if they do different jobs."
  },
  {
   "term": "Analogous structures",
   "def": "Structures that do the same job but evolved separately and are built differently."
  },
  {
   "term": "Vestigial structure",
   "def": "A reduced structure with little or no use that was useful in an ancestor."
  },
  {
   "term": "Embryology",
   "def": "The study of how organisms develop before birth; similar early stages suggest shared ancestry."
  },
  {
   "term": "Molecular evidence",
   "def": "Similarities in DNA and protein sequences that show how closely species are related."
  },
  {
   "term": "Universal genetic code",
   "def": "Nearly all organisms use the same codons for the same amino acids."
  },
  {
   "term": "Youngest layer",
   "def": "Rock and ice near the top hold the most recent fossils."
  },
  {
   "term": "Walking whale",
   "def": "Ambulocetus, about 49 million years old, found in Pakistan."
  },
  {
   "term": "Deeper means older",
   "def": "T. rex lived about 68 to 66 million years ago. Many were dug up in Montana's Hell Creek rocks."
  },
  {
   "term": "Oldest layer here",
   "def": "Trilobites were sea arthropods that lived from about 520 to 252 million years ago."
  },
  {
   "term": "Overproduction",
   "def": "Producing more offspring than the environment can support."
  },
  {
   "term": "Variation from sexual reproduction",
   "def": "Each offspring gets a new mix of its parents' alleles, so siblings differ."
  },
  {
   "term": "Competition",
   "def": "When individuals struggle for the same limited resources, such as food, water, or space."
  },
  {
   "term": "Limited resources",
   "def": "Food, water, space, and mates are in short supply, so not every individual can survive and reproduce."
  },
  {
   "term": "Heritable variation",
   "def": "Differences among individuals that are coded in DNA and passed from parents to offspring."
  },
  {
   "term": "Better-suited survivors",
   "def": "Individuals whose traits fit the environment best survive and leave the most offspring."
  },
  {
   "term": "Environmental change",
   "def": "A change in conditions, such as drought, flood, deforestation, or fertilizer runoff."
  },
  {
   "term": "Rate of change",
   "def": "How fast the environment changes."
  },
  {
   "term": "Advantageous trait",
   "def": "An inherited trait that helps organisms survive and reproduce in a particular environment."
  },
  {
   "term": "Proportion",
   "def": "The part of a population that has a trait, often written as a percent."
  },
  {
   "term": "Generation",
   "def": "One step in a family line: parents, then their offspring, then their offspring's offspring."
  },
  {
   "term": "Mean (average)",
   "def": "The sum of all the values divided by how many values there are."
  }
 ]
});
