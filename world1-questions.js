/* WORLD 1 QUESTION FILE: Structure and Function (PA STEELS 3.1.9-12.A, B, C)
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
   - "topic" groups questions that can rotate with each other on replays (same world, same topic).
   - In "questions", "answer" is the position of the correct option, counting from 0.
     (0 = first option, 1 = second, 2 = third, 3 = fourth.) The game shuffles the options.
   - "hint" shows after a wrong try. "explain" shows after the right answer.
   - Keep every comma, bracket, and quotation mark in place. */
FieldGuide.registerQuestions(1, {

  /* COLLECT sets: players grab the "good" items and avoid the "bad" ones. */
  "tokens": [
    {
      "id": "org-organs",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "Collect only ORGANS: structures made of different tissues working together",
      "good": [
        "Heart",
        "Lung",
        "Stomach",
        "Brain",
        "Skin",
        "Leaf",
        "Root"
      ],
      "bad": [
        {
          "text": "One muscle cell",
          "explain": "A single cell is the smallest level. An organ is made of many cells in several tissues."
        },
        {
          "text": "Muscle tissue",
          "explain": "Muscle tissue is one kind of tissue. An organ has several different tissues working together."
        },
        {
          "text": "Circulatory system",
          "explain": "That is an organ system: several organs (heart, blood vessels) working together."
        },
        {
          "text": "A whole frog",
          "explain": "A whole living thing is an organism, the top level of organization."
        }
      ]
    },
    {
      "id": "sys-oxygen",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A lanternfish swims hard to escape a predator. Collect the parts that work together to get oxygen to its swimming muscles",
      "good": [
        "Gills take in oxygen from the water",
        "The heart pumps blood",
        "Blood vessels carry blood to the muscles",
        "Blood carries the oxygen"
      ],
      "bad": [
        {
          "text": "The stomach breaks down food",
          "explain": "The digestive system supplies nutrients, not oxygen."
        },
        {
          "text": "The eyes sense light",
          "explain": "The eyes help the fish spot danger, but they do not deliver oxygen."
        },
        {
          "text": "Scales protect the skin",
          "explain": "Scales protect the body. They do not move oxygen."
        }
      ]
    },
    {
      "id": "sys-respond",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "An anglerfish senses prey near its glowing lure. Collect the parts that work together to make it snap its jaws",
      "good": [
        "Eyes sense the prey",
        "Nerves carry signals to the brain",
        "The brain sends a signal to the jaw muscles",
        "Jaw muscles contract",
        "The jaw bones move"
      ],
      "bad": [
        {
          "text": "Gills take in oxygen",
          "explain": "Gills supply oxygen to the body, but they do not carry the signal that triggers the snap."
        },
        {
          "text": "The stomach digests the meal",
          "explain": "Digestion happens after the catch. It does not make the jaws move."
        },
        {
          "text": "Fins steer slowly",
          "explain": "Fins help the fish swim, but the snap comes from nerves signaling the jaw muscles."
        }
      ]
    }
  ],

  /* SORT sets: every item uses the same answer choices. "answer" counts from 0. */
  "sorts": [
    {
      "id": "levels",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "Which level of organization is it?",
      "options": [
        "Cell",
        "Tissue",
        "Organ",
        "Organ system",
        "Organism"
      ],
      "hint": "Cells form tissues, tissues form organs, organs form organ systems, and the systems make one organism.",
      "items": [
        {
          "text": "One muscle cell from a frog's leg",
          "answer": 0,
          "explain": "A single cell is the basic unit, the smallest level."
        },
        {
          "text": "Many similar muscle cells working together in a frog's leg",
          "answer": 1,
          "explain": "Similar cells working together form a tissue."
        },
        {
          "text": "A frog's heart: muscle, nerve, and other tissues working together",
          "answer": 2,
          "explain": "Different tissues working together form an organ."
        },
        {
          "text": "A turtle's heart, blood vessels, and blood moving materials around its body",
          "answer": 3,
          "explain": "Several organs working together on one big job form an organ system."
        },
        {
          "text": "A whole turtle",
          "answer": 4,
          "explain": "One whole living thing, made of all its systems, is an organism."
        },
        {
          "text": "A lily pad leaf: several tissues that capture light and make food",
          "answer": 2,
          "explain": "A leaf is a plant organ made of several tissues."
        },
        {
          "text": "A cattail's stem and leaves working together as its shoot system to carry water up and make food",
          "answer": 3,
          "explain": "Several plant organs working together on one job form an organ system."
        },
        {
          "text": "A sheet of similar cells lining a fish's stomach",
          "answer": 1,
          "explain": "A group of similar cells doing the same job is a tissue."
        }
      ]
    },
    {
      "id": "jobs",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "Which body job is this?",
      "options": [
        "Getting oxygen",
        "Getting nutrients",
        "Moving in response to a signal",
        "Delivering materials"
      ],
      "hint": "Ask what the body gains: a gas, food, movement, or transport to every part.",
      "items": [
        {
          "text": "A fish's gills take oxygen out of the water.",
          "answer": 0,
          "explain": "Gills are where a fish takes in oxygen and gives off carbon dioxide."
        },
        {
          "text": "A sea turtle's stomach and intestines break down a jellyfish into small molecules.",
          "answer": 1,
          "explain": "The digestive system breaks food down so the body can take in nutrients."
        },
        {
          "text": "A squid feels a touch, and nerve signals make its body muscles squeeze water out so it jets away.",
          "answer": 2,
          "explain": "Nerves carry the signal and muscles respond with movement."
        },
        {
          "text": "A heart pumps blood through vessels to every part of a shark's body.",
          "answer": 3,
          "explain": "The circulatory system delivers oxygen and nutrients and carries wastes away."
        },
        {
          "text": "Nutrients from a whale's intestine pass into its blood.",
          "answer": 1,
          "explain": "Taking nutrients from digested food into the blood is nutrient uptake."
        },
        {
          "text": "An eel's eyes spot prey, and its brain signals its muscles to strike.",
          "answer": 2,
          "explain": "Senses, nerves, and muscles work together so the eel can respond."
        }
      ]
    }
  ],

  /* QUESTIONS: Keystone-style multiple choice. "tags": ["boss"] marks boss-battle questions. */
  "questions": [
    {
      "id": "w1q22",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "Complete the model: cell, ___, organ, organ system, organism.",
      "options": [
        "tissue",
        "molecule",
        "population",
        "community"
      ],
      "answer": 0,
      "hint": "What do you call a group of similar cells working together?",
      "explain": "Similar cells working together form a tissue."
    },
    {
      "id": "w1q23",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "The stomach contains muscle tissue, lining tissue, and nerve tissue working together to digest food. The stomach is an example of which level?",
      "options": [
        "organ",
        "tissue",
        "organ system",
        "cell"
      ],
      "answer": 0,
      "hint": "Several different tissues working together make up the next level above tissue.",
      "explain": "Different tissues working together form an organ."
    },
    {
      "id": "w1q42",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "Which list goes from the SMALLEST level of organization to the LARGEST?",
      "options": [
        "cell, tissue, organ, organ system",
        "organ, tissue, cell, organ system",
        "tissue, cell, organ system, organ",
        "organ system, organ, tissue, cell"
      ],
      "answer": 0,
      "hint": "Start with the building block that every tissue is made of.",
      "explain": "Cells form tissues, tissues form organs, and organs work together in organ systems."
    },
    {
      "id": "w1q44",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "The heart, blood, and blood vessels work together to move materials around the body. What level of organization is this?",
      "options": [
        "an organ system",
        "a tissue",
        "a single organ",
        "a cell"
      ],
      "answer": 0,
      "hint": "Several parts that each do part of a bigger job form which level?",
      "explain": "Several organs and tissues working together to do one big job make an organ system: the circulatory system."
    },
    {
      "id": "w1q76",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "The heart is made of muscle tissue, nerve tissue, and connective tissue working together. At which level of organization is the heart?",
      "options": [
        "organ",
        "cell",
        "tissue",
        "organ system"
      ],
      "answer": 0,
      "hint": "Different tissues working together form a...",
      "explain": "An organ is made of different tissues working together. The heart is part of the circulatory system, an organ system."
    },
    {
      "id": "w1q90",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "The muscle tissue in a frog's leg is made of many muscle cells working together. A frog's leg also contains bone, nerves, and blood vessels. Which statement best describes the muscle tissue?",
      "options": [
        "It is a tissue that works with other tissues in the leg.",
        "It is an organ system that works alone.",
        "It is a single cell that controls the leg.",
        "It is an organism inside the frog."
      ],
      "answer": 0,
      "hint": "Many similar cells working together form which level?",
      "explain": "A group of similar cells working together is a tissue. In the leg, muscle tissue works with bone, nerve, and blood tissues."
    },
    {
      "id": "w1q91",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "Which model best shows how a frog is organized, from smallest to largest?",
      "options": [
        "cells → tissues → organs → organ systems → frog",
        "frog → organ systems → organs → tissues → cells",
        "tissues → cells → organs → frog → organ systems",
        "organs → cells → organ systems → tissues → frog"
      ],
      "answer": 0,
      "hint": "Start with the smallest unit of life.",
      "explain": "Cells form tissues, tissues form organs, organs form organ systems, and all the systems together make the frog."
    },
    {
      "id": "w1q92",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "A pond plant's roots take in water, its stem carries the water up, and its leaves use it to make food. What does this show?",
      "options": [
        "Different organs work together as a system to do a job for the whole plant.",
        "Each organ works alone and does not depend on the others.",
        "Roots, stems, and leaves are all the same tissue.",
        "Only animals have organs that work together."
      ],
      "answer": 0,
      "hint": "Follow the water from the soil to the leaves.",
      "explain": "Roots, stem, and leaves are organs. They depend on each other to deliver water to where the plant needs it."
    },
    {
      "id": "w1q93",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "A turtle's heart stops pumping well. Which other part of its body would be affected FIRST?",
      "options": [
        "Its blood vessels would carry less blood, so its organs would get less oxygen.",
        "Only its heart would be affected.",
        "Its shell would stop growing right away.",
        "Nothing, because each organ works on its own."
      ],
      "answer": 0,
      "hint": "The heart is part of a system. What does it push blood through?",
      "explain": "The heart, blood vessels, and blood form the circulatory system. If the heart fails, less blood and oxygen reach every organ."
    },
    {
      "id": "w1q94",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A shark swims faster to chase prey. Which TWO systems must work together to get more oxygen to its muscles?",
      "options": [
        "the respiratory system (gills) and the circulatory system (heart and blood)",
        "the digestive system and the skeletal system",
        "the nervous system and the digestive system",
        "the skin and the skeletal system"
      ],
      "answer": 0,
      "hint": "One system takes in oxygen. Another carries it to the muscles.",
      "explain": "The gills take in oxygen from the water, and the heart and blood vessels carry it to the working muscles."
    },
    {
      "id": "w1q95",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A sea turtle eats a jellyfish. How do its digestive and circulatory systems work together?",
      "options": [
        "The digestive system breaks food into nutrients, and the blood carries the nutrients to the rest of the body.",
        "The circulatory system digests the food, and the digestive system pumps the blood.",
        "The digestive system sends nerve signals to the heart.",
        "They do not work together; each system has its own food."
      ],
      "answer": 0,
      "hint": "Breaking down food is one job. Delivering it everywhere is another.",
      "explain": "The digestive system breaks food down so nutrients can enter the blood, and the circulatory system delivers them to every organ."
    },
    {
      "id": "w1q96",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A squid touches a hot vent and quickly jets away. Which order of events best explains this?",
      "options": [
        "Sense the heat → nerves carry a signal → muscles contract → the squid moves away",
        "Muscles contract → the squid moves → nerves sense heat → the brain decides",
        "The stomach senses heat → blood carries a message → the squid moves",
        "The squid moves first, and the nerves sense the heat later"
      ],
      "answer": 0,
      "hint": "A response starts with sensing a change.",
      "explain": "Senses detect the change, nerves carry signals, and muscles respond. This is how the nervous and muscular systems interact."
    },
    {
      "id": "w1q97",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A gulper eel's gills are damaged and take in less oxygen. Which effect is most likely?",
      "options": [
        "Its muscles get less oxygen, so it cannot swim as hard.",
        "Its stomach digests food faster.",
        "Its eyes see better in the dark.",
        "Nothing changes, because each system works alone."
      ],
      "answer": 0,
      "hint": "Which body parts depend on oxygen from the gills?",
      "explain": "Body systems depend on each other. Less oxygen from the gills means less oxygen delivered by the blood to the muscles."
    },
    {
      "id": "w1q98",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "Why does a large animal need a circulatory system, while a tiny one-celled organism does not?",
      "options": [
        "In a large body, most cells are far from the outside, so blood must deliver materials to them.",
        "Large animals do not need oxygen.",
        "One-celled organisms have a heart inside them.",
        "Large animals make all their food inside each cell."
      ],
      "answer": 0,
      "hint": "Think about how far materials must travel in a big body.",
      "explain": "A single cell can exchange materials directly with its surroundings. In a big body, a system is needed to carry oxygen and nutrients to cells deep inside."
    },
    {
      "id": "w1q99",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A student models how an anglerfish catches prey. Which model shows the systems interacting correctly?",
      "options": [
        "Eyes (nervous) → brain (nervous) → jaw muscles (muscular) → jaw bones (skeletal)",
        "Jaw bones → stomach → eyes → heart",
        "Gills → stomach → scales → fins",
        "Heart → eyes → bones → brain"
      ],
      "answer": 0,
      "hint": "Follow the signal from the sense organ to the moving part.",
      "explain": "The nervous system senses and signals, the muscles contract, and they pull on bones. Three systems interact to make one fast movement."
    },
    {
      "id": "w1q100",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "A deep-sea fish has large, feathery gills with many thin folds. How does this structure help the whole fish?",
      "options": [
        "The folds give more surface for oxygen to pass into the blood, so more oxygen reaches the body.",
        "The folds help the fish digest food.",
        "The folds make the fish glow in the dark.",
        "The folds store fat for long trips."
      ],
      "answer": 0,
      "hint": "More surface touching the water means more of what can get in?",
      "explain": "More surface area lets more oxygen pass from the water into the blood, which delivers it to the rest of the body."
    },
    {
      "id": "w1q101",
      "code": "3.1.9-12.B",
      "topic": "systems",
      "prompt": "In a giant tube worm, a red plume takes in oxygen from the water, and blood vessels carry it to the rest of its body. What does this show?",
      "options": [
        "Structures that take in materials and a system that delivers them work together.",
        "The plume and blood vessels work on their own and do not depend on each other.",
        "The tube worm has no body systems.",
        "Only fish have systems that deliver oxygen."
      ],
      "answer": 0,
      "hint": "One part collects oxygen; another delivers it.",
      "explain": "Taking in oxygen and delivering it are separate jobs done by structures that work together, as in all animals with circulatory systems."
    },
    {
      "id": "w1q07",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "Stop 1, the nucleus. During transcription, the cell copies the code in a gene into which molecule?",
      "options": [
        "messenger RNA (mRNA)",
        "a protein",
        "an amino acid",
        "a ribosome"
      ],
      "answer": 0,
      "hint": "Transcription makes a copy that can leave the nucleus.",
      "explain": "Transcription copies the DNA code into messenger RNA."
    },
    {
      "id": "w1q08",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "A DNA strand reads T A C. Which mRNA codon is made from it during transcription?",
      "options": [
        "A U G",
        "A T G",
        "T A C",
        "U A C"
      ],
      "answer": 0,
      "hint": "Pair each base with its partner. RNA uses U (uracil) in place of T.",
      "explain": "T pairs with A, A pairs with U in RNA, and C pairs with G, giving A U G."
    },
    {
      "id": "w1q09",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "Stop 2. The mRNA leaves the nucleus. Which structure reads it and joins amino acids into a chain?",
      "options": [
        "ribosome",
        "the gene in the DNA",
        "the cell wall",
        "a single amino acid"
      ],
      "answer": 0,
      "hint": "This structure is the site of translation.",
      "explain": "Ribosomes read mRNA and link amino acids together. This is translation."
    },
    {
      "id": "w1q11",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "Bacteria, mushrooms, and humans all use the same codons for the same amino acids. What does this show?",
      "options": [
        "Transcription and translation work in a similar way in all organisms.",
        "All organisms have the same genes.",
        "Only animals can make proteins.",
        "Proteins are made inside the nucleus of every cell."
      ],
      "answer": 0,
      "hint": "A shared code means a shared process.",
      "explain": "All organisms read the genetic code the same way, so protein synthesis is similar in all of them."
    },
    {
      "id": "w1q46",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "A DNA template strand reads TAC GGA. What mRNA is made during transcription?",
      "options": [
        "AUG CCU",
        "ATG CCT",
        "TAC GGA",
        "UAC GGA"
      ],
      "answer": 0,
      "hint": "Pair each base: A with U, T with A, C with G, G with C. RNA has no T.",
      "explain": "Transcription pairs T to A, A to U, C to G, and G to C, so TAC GGA becomes AUG CCU."
    },
    {
      "id": "w1q47",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "Where does translation take place in every cell, from bacteria to humans?",
      "options": [
        "at ribosomes",
        "inside the DNA molecule",
        "in the cell wall",
        "inside the chromosomes"
      ],
      "answer": 0,
      "hint": "Find the protein-building structure found in all cells.",
      "explain": "All cells translate mRNA into protein at ribosomes. That is why every kind of cell, from bacteria to human cells, has ribosomes."
    },
    {
      "id": "w1q48",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "A gene's DNA is copied into mRNA. What does the order of the bases in that mRNA decide?",
      "options": [
        "the order of the amino acids in the protein",
        "how many chromosomes the cell has",
        "the size of the cell",
        "which organ the cell belongs to"
      ],
      "answer": 0,
      "hint": "Every three bases stand for one amino acid.",
      "explain": "The mRNA carries the gene's base order out to the ribosome. Each group of three bases stands for one amino acid, so the base order sets the amino acid order."
    },
    {
      "id": "w1q77",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "Two people have the same gene, except one base in it is different. Which molecule would be made differently FIRST?",
      "options": [
        "the mRNA copied from that gene",
        "the person's blood sugar",
        "the cell's water",
        "every protein in the body"
      ],
      "answer": 0,
      "hint": "What is copied straight from the gene's DNA?",
      "explain": "The gene is copied into mRNA first, so the mRNA carries the changed base. That change can then change one amino acid in the protein built from it."
    },
    {
      "id": "w1q78",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "prompt": "During translation, what determines the order of amino acids in a protein?",
      "options": [
        "the order of codons in the mRNA",
        "the order of sugars in the cell's food",
        "the size of the ribosome",
        "the amount of water in the cell"
      ],
      "answer": 0,
      "hint": "Each set of three mRNA bases codes for one amino acid.",
      "explain": "Each three-base codon in the mRNA codes for one amino acid, so the order of codons sets the order of amino acids."
    },
    {
      "id": "w1q102",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "prompt": "Why does the order of amino acids in a protein matter?",
      "options": [
        "The order decides how the chain folds, and the folded shape decides the protein's job.",
        "The order decides the color of the cell.",
        "The order has no effect on what the protein does.",
        "The order decides how many chromosomes the cell has."
      ],
      "answer": 0,
      "hint": "Think: order → shape → job.",
      "explain": "The amino acid order controls how the chain folds. A protein's shape lets it do its specific job."
    },
    {
      "id": "w1q103",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "prompt": "A change in a gene's DNA causes ONE different amino acid in a protein. What is the most likely result?",
      "options": [
        "The protein may fold into a different shape and not do its job as well.",
        "The protein will always work better.",
        "Nothing can change, because one amino acid never matters.",
        "The protein turns back into DNA."
      ],
      "answer": 0,
      "hint": "DNA sets the amino acid order, and the order sets the shape.",
      "explain": "Changing the DNA can change the amino acid order, which can change the shape and the function. Sickle cell disease is caused by one such change."
    },
    {
      "id": "w1q104",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "prompt": "Why does a cell need many different kinds of proteins?",
      "options": [
        "Proteins do many different jobs, such as speeding up reactions, carrying materials, building structures, and sending signals.",
        "All proteins do the same job, so the cell needs extra copies.",
        "Proteins store the cell's genetic instructions.",
        "Proteins are only used as food."
      ],
      "answer": 0,
      "hint": "Each protein has a shape that fits one job.",
      "explain": "Different proteins have different shapes and jobs, and a living thing needs all of those jobs done."
    },
    {
      "id": "w1q105",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "prompt": "Which sequence correctly shows how the structure of DNA determines the structure of a protein?",
      "options": [
        "DNA base order → mRNA base order → amino acid order → folded protein shape",
        "Protein shape → amino acid order → DNA → mRNA",
        "mRNA → DNA → folded protein → amino acids",
        "Amino acids → DNA → protein → mRNA"
      ],
      "answer": 0,
      "hint": "Start with the instructions stored in the gene.",
      "explain": "The DNA base order is copied into mRNA, the mRNA sets the amino acid order, and the chain folds into the protein's shape."
    },
    {
      "id": "w1q106",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "prompt": "Muscle cells and skin cells in the same person have the same DNA, but they make some different proteins. What best explains this?",
      "options": [
        "Different cells use different genes from the same DNA.",
        "Muscle cells have different DNA from skin cells.",
        "Skin cells have no genes.",
        "Proteins are made without DNA in muscle cells."
      ],
      "answer": 0,
      "hint": "Same instruction book, different pages being read.",
      "explain": "All body cells carry the same DNA, but each kind of cell uses the genes it needs, so it makes the proteins for its job."
    },
    {
      "id": "w1q107",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "prompt": "A student wants to test how exercise affects heart rate. Which plan is a fair test?",
      "options": [
        "Measure resting heart rate, do 2 minutes of jumping jacks, then measure again, keeping everything else the same.",
        "Measure heart rate once while running and once while eating lunch.",
        "Ask friends whether their hearts beat faster.",
        "Measure a different person before and after exercise."
      ],
      "answer": 0,
      "hint": "A fair test changes only one thing and compares to a starting value.",
      "explain": "A fair test measures a baseline, changes one variable (exercise), and keeps other conditions the same."
    },
    {
      "id": "w1q108",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "prompt": "In an investigation of how light affects pupil size, what is the INDEPENDENT variable?",
      "options": [
        "the brightness of the light",
        "the size of the pupil",
        "the person's age",
        "the time of day"
      ],
      "answer": 0,
      "hint": "The independent variable is the one you change on purpose.",
      "explain": "The student changes the light brightness on purpose, so it is the independent variable. Pupil size is what is measured."
    },
    {
      "id": "w1q109",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "prompt": "A student measures heart rate every minute after running. Which result is evidence of negative feedback?",
      "options": [
        "Heart rate falls back toward the resting rate after the run.",
        "Heart rate keeps rising after the run ends.",
        "Heart rate stays exactly the same the whole time.",
        "Heart rate is only measured once."
      ],
      "answer": 0,
      "hint": "Negative feedback brings a condition back toward its set point.",
      "explain": "When heart rate returns toward the resting value, the body is reversing the change caused by exercise: negative feedback."
    },
    {
      "id": "w1q110",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "prompt": "Why should a student measure a resting heart rate BEFORE exercise?",
      "options": [
        "It gives a baseline to compare the later measurements to.",
        "It makes the heart beat faster.",
        "It is the independent variable.",
        "It is not needed in a fair test."
      ],
      "answer": 0,
      "hint": "You can only tell something changed if you know where it started.",
      "explain": "The resting measurement is the baseline. Comparing to it shows how much exercise changed heart rate and whether it returned."
    },
    {
      "id": "w1q111",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "prompt": "A student puts one plant in moist air and one in very dry air, then counts open stomata (leaf pores). Which variable must she keep the SAME for both plants?",
      "options": [
        "the kind of plant and the amount of light",
        "the humidity of the air",
        "the number of open stomata",
        "whether the air is dry or moist"
      ],
      "answer": 0,
      "hint": "Controlled variables stay the same so only one thing changes.",
      "explain": "Only the humidity should change. Keeping the plant type and light the same makes it a fair test."
    },
    {
      "id": "w1q112",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "prompt": "The table shows a student's breathing rate. Which conclusion do the data support?",
      "options": [
        "Breathing rate rose during exercise and returned toward normal afterward.",
        "Exercise had no effect on breathing.",
        "Breathing rate kept rising after exercise.",
        "Breathing stopped after exercise."
      ],
      "answer": 0,
      "hint": "Compare the first and last rows to the exercise rows.",
      "explain": "Breathing sped up to bring in more oxygen during exercise, then slowed back toward the resting rate: feedback keeping the body balanced.",
      "figure": {
        "type": "table",
        "head": [
          "Time (min)",
          "Activity",
          "Breaths per minute"
        ],
        "rows": [
          [
            "0",
            "resting",
            "14"
          ],
          [
            "2",
            "jogging",
            "26"
          ],
          [
            "4",
            "jogging",
            "30"
          ],
          [
            "6",
            "resting",
            "20"
          ],
          [
            "8",
            "resting",
            "15"
          ]
        ]
      }
    },
    {
      "id": "w1q26",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "After a run, your body temperature rises. Which response helps bring it back to normal?",
      "options": [
        "Sweat is released and blood vessels near the skin widen.",
        "Muscles begin to shiver.",
        "Blood vessels near the skin narrow.",
        "The body stops releasing heat."
      ],
      "answer": 0,
      "hint": "The body needs to lose heat, not make more.",
      "explain": "Sweating and wider blood vessels release heat and cool the body."
    },
    {
      "id": "w1q27",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "On a cold day you start to shiver. How does shivering help maintain homeostasis?",
      "options": [
        "Muscle activity releases heat that warms the body.",
        "It releases heat from the body into the air.",
        "It lowers the amount of oxygen the body needs.",
        "It moves water out of the cells."
      ],
      "answer": 0,
      "hint": "Working muscles warm you up.",
      "explain": "Shivering muscles release heat, which raises body temperature toward normal."
    },
    {
      "id": "w1q28",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "The graph shows a person's blood glucose after a meal. What best explains the change after 30 minutes?",
      "figure": {
        "type": "line",
        "xlabel": "Minutes after meal",
        "ylabel": "Blood glucose (mg/dL)",
        "xmax": 120,
        "ymin": 60,
        "ymax": 160,
        "xticks": [
          0,
          30,
          60,
          90,
          120
        ],
        "yticks": [
          60,
          90,
          120,
          150
        ],
        "points": [
          [
            0,
            90
          ],
          [
            15,
            120
          ],
          [
            30,
            140
          ],
          [
            60,
            115
          ],
          [
            90,
            95
          ],
          [
            120,
            90
          ]
        ]
      },
      "options": [
        "The body signals cells to take in glucose, returning the level toward normal.",
        "The person ate a second meal.",
        "The body stopped using glucose for energy.",
        "Glucose can no longer leave the blood."
      ],
      "answer": 0,
      "hint": "The line falls back to where it started. Something is correcting the change.",
      "explain": "The body responds to high glucose by moving it into cells, which returns the level to normal."
    },
    {
      "id": "w1q29",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "The body senses a change, responds, and returns to its normal level. What is this kind of control called?",
      "options": [
        "a feedback mechanism that maintains homeostasis",
        "natural selection",
        "photosynthesis",
        "cell division"
      ],
      "answer": 0,
      "hint": "The response feeds back to correct the change.",
      "explain": "Feedback mechanisms sense a change and reverse it, which keeps the body stable."
    },
    {
      "id": "w1q30",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "You drink very little water on a hot day. How do your kidneys help keep your water balance?",
      "options": [
        "They return more water to the blood and make less urine.",
        "They release more water as urine.",
        "They stop filtering the blood.",
        "They add salt to the blood."
      ],
      "answer": 0,
      "hint": "The body needs to save water.",
      "explain": "The kidneys save water by returning more of it to the blood."
    },
    {
      "id": "w1q31",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "During hard exercise your breathing rate goes up. How does this help maintain homeostasis?",
      "options": [
        "It brings in more oxygen and removes more carbon dioxide.",
        "It lowers the amount of oxygen in the blood.",
        "It stops cells from using energy.",
        "It raises body temperature."
      ],
      "answer": 0,
      "hint": "Working muscles use more oxygen and make more carbon dioxide.",
      "explain": "Faster breathing keeps oxygen and carbon dioxide levels in the blood steady."
    },
    {
      "id": "w1q33",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "A student measures her body temperature during and after exercise. Which conclusion do the data support?",
      "figure": {
        "type": "table",
        "head": [
          "Time (min)",
          "Activity",
          "Temperature (°C)"
        ],
        "rows": [
          [
            "0",
            "resting",
            "37.0"
          ],
          [
            "10",
            "running",
            "37.6"
          ],
          [
            "20",
            "running",
            "38.1"
          ],
          [
            "30",
            "resting",
            "37.5"
          ],
          [
            "40",
            "resting",
            "37.0"
          ]
        ]
      },
      "options": [
        "Her body responded to bring the temperature back toward normal.",
        "Her temperature kept rising after she stopped.",
        "Her body has no way to control temperature.",
        "Exercise lowered her body temperature."
      ],
      "answer": 0,
      "hint": "Compare the first and last rows.",
      "explain": "Her temperature rose during exercise and returned to 37.0, which shows the body correcting the change."
    },
    {
      "id": "w1q66",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "After eating a salty meal, a person feels thirsty and drinks water. How does this help maintain homeostasis?",
      "options": [
        "It brings the body's water and salt balance back to normal.",
        "It raises the body's temperature.",
        "It increases blood sugar.",
        "It stops the kidneys from working."
      ],
      "answer": 0,
      "hint": "Thirst is a response to a change. What does drinking fix?",
      "explain": "Extra salt upsets water balance. Thirst makes you drink, which dilutes the salt and restores balance: negative feedback."
    },
    {
      "id": "w1q67",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "In a negative feedback loop, what does the response do to the original change?",
      "options": [
        "It reverses the change and brings the condition back toward the set point.",
        "It makes the change even bigger.",
        "It has no effect on the change.",
        "It stops the receptors from working."
      ],
      "answer": 0,
      "hint": "Negative means it works against the change.",
      "explain": "Negative feedback reverses a change, keeping conditions like temperature and blood sugar near a set point."
    },
    {
      "id": "w1q68",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "tags": [
        "boss"
      ],
      "prompt": "When blood glucose drops too low, the liver releases stored glucose into the blood. Which part of the feedback loop is the liver?",
      "options": [
        "the effector",
        "the stimulus",
        "the receptor",
        "the set point"
      ],
      "answer": 0,
      "hint": "Which part carries out the response?",
      "explain": "The liver carries out the response that raises blood glucose, so it is the effector."
    },
    {
      "id": "w1q89",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "prompt": "On hot, dry days, many plants close the stomata (tiny pores) on their leaves. What does this help the plant do?",
      "options": [
        "conserve water by reducing water loss",
        "take in more carbon dioxide",
        "make more glucose",
        "release more oxygen"
      ],
      "answer": 0,
      "hint": "Water vapor escapes through open stomata.",
      "explain": "Closing stomata reduces water loss through transpiration, which helps the plant keep its water balance."
    },
    {
      "id": "w1q113",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "A person's lungs take in oxygen, but the oxygen must reach the leg muscles. Which statement best explains how this happens?",
      "options": [
        "The respiratory system and the circulatory system work together: blood picks up oxygen in the lungs and carries it to the muscles.",
        "The lungs send oxygen through the bones to the legs.",
        "The leg muscles make their own oxygen.",
        "The digestive system carries oxygen to the legs."
      ],
      "answer": 0,
      "hint": "One system takes oxygen in; another delivers it.",
      "explain": "Body systems interact. The respiratory system takes in oxygen and the circulatory system carries it to every organ."
    },
    {
      "id": "w1q114",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "prompt": "An artery depends on muscle tissue and stretchy tissue to deliver the right amount of blood. What does this show?",
      "options": [
        "Tissues work together inside an organ, which works within an organ system.",
        "Each tissue works alone.",
        "Arteries are made of only one kind of cell.",
        "Blood moves without any help from tissues."
      ],
      "answer": 0,
      "hint": "Think about levels: tissues → organ → system.",
      "explain": "Different tissues work together in a blood vessel, and the vessels work with the heart as part of the circulatory system."
    }
  ],

  /* LOOK-ALIKE PAIRS: mixed-review gates put these back to back so students compare them. */
  "pairs": [
    {
      "name": "Transcription or translation?",
      "explain": "Transcription copies the DNA code into mRNA. Translation uses the mRNA to build a chain of amino acids at a ribosome.",
      "members": [
        {
          "label": "Transcription",
          "level": "1-3",
          "ids": [
            "w1q07",
            "w1q08"
          ]
        },
        {
          "label": "Translation",
          "level": "1-3",
          "ids": [
            "w1q09",
            "w1q47"
          ]
        }
      ]
    },
    {
      "name": "Organ or organ system?",
      "explain": "An organ is different tissues working together. An organ system is several organs working together on one big job.",
      "members": [
        {
          "label": "Organ",
          "level": "1-1",
          "ids": [
            "levels.2",
            "levels.5"
          ]
        },
        {
          "label": "Organ system",
          "level": "1-1",
          "ids": [
            "levels.3",
            "levels.6"
          ]
        }
      ]
    },
    {
      "name": "Tissue or organ?",
      "explain": "A tissue is similar cells working together. An organ is different tissues working together.",
      "members": [
        {
          "label": "Tissue",
          "level": "1-5",
          "ids": [
            "w1q22"
          ]
        },
        {
          "label": "Organ",
          "level": "1-5",
          "ids": [
            "w1q23"
          ]
        }
      ]
    },
    {
      "name": "Independent or dependent variable?",
      "explain": "The independent variable is what you change on purpose. The dependent variable is what you measure.",
      "members": [
        {
          "label": "Independent",
          "level": "1-4",
          "ids": [
            "w1q108"
          ]
        },
        {
          "label": "Baseline and fair test",
          "level": "1-4",
          "ids": [
            "w1q110",
            "w1q107"
          ]
        }
      ]
    },
    {
      "name": "Cooling or warming response?",
      "explain": "Too hot: sweating and wider blood vessels near the skin. Too cold: shivering and narrower blood vessels.",
      "members": [
        {
          "label": "Cooling",
          "level": "1-5",
          "ids": [
            "w1q26"
          ]
        },
        {
          "label": "Warming",
          "level": "1-5",
          "ids": [
            "w1q27"
          ]
        }
      ]
    }
  ],

  /* BECOME IT: the player becomes something and must pick the doorway that shows what really happens. */
  "become": [
    {
      "id": "b-fold",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "you": "a brand-new chain of amino acids",
      "short": "Chain",
      "color": "#c59cff",
      "goal": "What decides the shape you will fold into?",
      "doors": [
        {
          "kind": "protein",
          "label": "The order of my amino acids",
          "ok": true
        },
        {
          "kind": "flow",
          "label": "The size of the cell",
          "ok": false,
          "why": "Cell size does not set a protein's shape. The amino acid order does."
        },
        {
          "kind": "organelle",
          "label": "How many ribosomes are nearby",
          "ok": false,
          "why": "Ribosomes link amino acids, but the ORDER of the amino acids decides how the chain folds."
        }
      ],
      "explain": "The amino acid order, set by the DNA through mRNA, decides how the chain folds. The shape decides the job."
    },
    {
      "id": "b-job",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "you": "a protein whose gene changed, so one of your amino acids is different",
      "short": "Protein",
      "color": "#ffd166",
      "goal": "What happens to your job?",
      "doors": [
        {
          "kind": "protein",
          "label": "My shape may change, so I may not work right",
          "ok": true
        },
        {
          "kind": "flow",
          "label": "Nothing: one amino acid never matters",
          "ok": false,
          "why": "One amino acid can change how the protein behaves. In sickle cell disease, one change makes hemoglobin molecules stick together into long fibers."
        },
        {
          "kind": "organelle",
          "label": "I turn back into DNA",
          "ok": false,
          "why": "Proteins are not turned back into DNA. The change in the DNA is what changed the protein."
        }
      ],
      "explain": "DNA sets the amino acid order, the order sets the shape, and the shape sets the job. A DNA change can change all three."
    },
    {
      "id": "b-heart",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "you": "a runner's heart",
      "short": "Heart",
      "color": "#ff6b6b",
      "goal": "The runner's muscles need more oxygen during the race. What do you do?",
      "doors": [
        {
          "kind": "flow",
          "label": "Beat faster",
          "ok": true
        },
        {
          "kind": "pump",
          "label": "Beat slower",
          "ok": false,
          "why": "A slower heart would deliver LESS oxygen just when the muscles need more."
        },
        {
          "kind": "protein",
          "label": "Stop until the race ends",
          "ok": false,
          "why": "The heart must keep pumping. It speeds up to deliver more oxygen."
        }
      ],
      "explain": "Heart rate rises during exercise to deliver more oxygen. Afterward, feedback brings it back toward the resting rate."
    },
    {
      "id": "b-pupil",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "you": "the iris of an eye",
      "short": "Iris",
      "color": "#7fd4ff",
      "goal": "The room suddenly gets very bright. What do you do to the pupil?",
      "doors": [
        {
          "kind": "flow",
          "label": "Make the pupil smaller",
          "ok": true
        },
        {
          "kind": "pump",
          "label": "Make the pupil bigger",
          "ok": false,
          "why": "A bigger pupil lets in MORE light. In bright light the eye needs less."
        },
        {
          "kind": "protein",
          "label": "Do nothing",
          "ok": false,
          "why": "The eye responds to the change. The iris shrinks the pupil to let in less light."
        }
      ],
      "explain": "Negative feedback: bright light makes the pupil smaller, and dim light makes it bigger, keeping the light entering the eye in a good range."
    },
    {
      "id": "b-stomata-dry",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "you": "the tiny pores (stomata) on a leaf",
      "short": "Stomata",
      "color": "#7be06a",
      "goal": "The soil is very dry and the air is hot. What do you do?",
      "doors": [
        {
          "kind": "flow",
          "label": "Close to save water",
          "ok": true
        },
        {
          "kind": "pump",
          "label": "Open wide",
          "ok": false,
          "why": "Open stomata let water vapor escape. In dry conditions the plant would lose too much water."
        },
        {
          "kind": "protein",
          "label": "Do nothing",
          "ok": false,
          "why": "Plants respond to dry conditions. Closing the stomata slows water loss."
        }
      ],
      "explain": "Stomata close when water is scarce, which slows water loss and helps the plant keep its water balance."
    },
    {
      "id": "b-stomata-wet",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "you": "the tiny pores (stomata) on a leaf",
      "short": "Stomata",
      "color": "#7be06a",
      "goal": "Water is plentiful and the sun is shining. What do you do?",
      "doors": [
        {
          "kind": "flow",
          "label": "Open to let carbon dioxide in",
          "ok": true
        },
        {
          "kind": "pump",
          "label": "Close tightly all day",
          "ok": false,
          "why": "Closed stomata keep carbon dioxide out, so the plant could not make much food."
        },
        {
          "kind": "protein",
          "label": "Fall off the leaf",
          "ok": false,
          "why": "Stomata open and close. With plenty of water they open to take in carbon dioxide."
        }
      ],
      "explain": "With enough water, stomata open so carbon dioxide can enter for photosynthesis. When water runs low, they close."
    },
    {
      "id": "b-sweat",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "you": "the sweat glands in a player's skin",
      "short": "Sweat glands",
      "color": "#9fe0ff",
      "goal": "Body temperature rises above the set point during a game. What do you do?",
      "doors": [
        {
          "kind": "flow",
          "label": "Release sweat",
          "ok": true
        },
        {
          "kind": "pump",
          "label": "Stop releasing sweat",
          "ok": false,
          "why": "Without sweat, the body would keep heating up."
        },
        {
          "kind": "protein",
          "label": "Make the muscles shiver",
          "ok": false,
          "why": "Shivering makes heat. The body is already too warm."
        }
      ],
      "explain": "Sweat evaporates and cools the skin, bringing body temperature back toward the set point: negative feedback."
    },
    {
      "id": "b-variable",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "you": "a student planning a heart-rate investigation",
      "short": "You",
      "color": "#ffd166",
      "goal": "Which variable will you change on purpose?",
      "doors": [
        {
          "kind": "flow",
          "label": "Minutes of jumping jacks",
          "ok": true
        },
        {
          "kind": "pump",
          "label": "Heart rate",
          "ok": false,
          "why": "Heart rate is what you MEASURE, the dependent variable."
        },
        {
          "kind": "protein",
          "label": "Room temperature",
          "ok": false,
          "why": "Room temperature should stay the same. It is a controlled variable."
        }
      ],
      "explain": "The independent variable is the one you change (minutes of exercise). You measure heart rate and keep everything else the same."
    }
  ],

  /* CATCH GAMES (Build It): students jump into the answer that matches the highlighted cue. */
  "catches": [
    {
      "id": "c-transcribe",
      "code": "3.1.9-12.A",
      "topic": "dna-to-protein",
      "short": "Transcription",
      "title": "Copy the gene's DNA into mRNA.",
      "cueLabel": "DNA template",
      "builtLabel": "mRNA",
      "cueWord": "DNA letter",
      "tokenWord": "RNA base",
      "rule": "Pairing rule, DNA to RNA: A pairs with U, T pairs with A, G pairs with C, C pairs with G.",
      "choices": [
        "A",
        "U",
        "G",
        "C",
        "T"
      ],
      "steps": [
        {
          "cue": "T",
          "need": "A"
        },
        {
          "cue": "A",
          "need": "U"
        },
        {
          "cue": "C",
          "need": "G"
        },
        {
          "cue": "C",
          "need": "G"
        },
        {
          "cue": "G",
          "need": "C"
        },
        {
          "cue": "A",
          "need": "U"
        },
        {
          "cue": "A",
          "need": "U"
        },
        {
          "cue": "A",
          "need": "U"
        },
        {
          "cue": "A",
          "need": "U"
        }
      ],
      "hint": "Check the pairing rule for the highlighted DNA letter.",
      "wrong": {
        "T": "RNA has no T. It uses U (uracil) instead."
      },
      "explain": "Transcription: you copied the DNA code TAC CGA AAA into the mRNA AUG GCU UUU. The mRNA now carries the gene's instructions for the amino acid order."
    },
    {
      "id": "c-jobs",
      "code": "3.1.9-12.A",
      "topic": "protein-shape",
      "short": "Protein jobs",
      "title": "Each protein's shape fits a job. Grab the job that matches each protein.",
      "cueLabel": "Protein",
      "builtLabel": "Jobs matched",
      "cueWord": "protein",
      "tokenWord": "job",
      "rule": "Proteins speed up reactions, carry materials, build structures, and send signals.",
      "choices": [
        "Speeds up a reaction",
        "Carries materials",
        "Builds structure",
        "Sends a signal",
        "Stores genes"
      ],
      "steps": [
        {
          "cue": "A digestive protein that breaks food apart quickly",
          "need": "Speeds up a reaction"
        },
        {
          "cue": "A blood protein that carries oxygen",
          "need": "Carries materials"
        },
        {
          "cue": "A tough protein that makes tendons and skin strong",
          "need": "Builds structure"
        },
        {
          "cue": "A protein released by one organ that tells other organs what to do",
          "need": "Sends a signal"
        }
      ],
      "hint": "Ask what the protein does for the body.",
      "wrong": {
        "Stores genes": "Genes are stored in DNA, not in proteins."
      },
      "explain": "Different shapes, different jobs: proteins speed up reactions, carry materials, build structures, and send signals. That is why a cell needs many kinds."
    }
  ],

  /* READ THE DATA: a bar graph shown in the level (illustrative classroom-style numbers). Students stand under the bar that answers. */
  "data": [
    {
      "id": "d-heartrate",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "title": "Heart rate before, during, and after exercise",
      "xlabel": "Time",
      "ylabel": "Heart rate (beats per minute)",
      "categories": [
        "Resting",
        "1 min exercise",
        "3 min exercise",
        "2 min after",
        "5 min after"
      ],
      "values": [
        72,
        110,
        140,
        100,
        76
      ],
      "questions": [
        {
          "prompt": "Which bar is the baseline the student should compare the other measurements to?",
          "answer": 0,
          "hint": "The baseline is measured before anything is changed.",
          "explain": "The resting heart rate (72) is the baseline."
        },
        {
          "prompt": "When was the body's response to exercise the strongest?",
          "answer": 2,
          "hint": "Find the tallest bar.",
          "explain": "After 3 minutes of exercise the heart rate was highest (140), delivering the most oxygen to the muscles."
        },
        {
          "prompt": "Which bar is the best evidence that negative feedback brought the heart rate back toward normal?",
          "answer": 4,
          "hint": "Look for the measurement closest to the resting rate after exercise ended.",
          "explain": "Five minutes after exercise the heart rate (76) was almost back to the resting rate (72)."
        }
      ]
    }
  ],

  /* MAZE: walls of three doorways; only the doorway for the next step opens. */
  "mazes": [
    {
      "id": "maze-levels",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "title": "Zoom out through the body: go through the doorway for the next level up",
      "start": "Cell",
      "steps": [
        {
          "label": "Tissue",
          "hint": "What do many similar cells form when they work together?",
          "why": "Similar cells working together form a tissue, like heart muscle."
        },
        {
          "label": "Organ",
          "hint": "What is made of several kinds of tissue?",
          "why": "Different tissues together form an organ, like the heart."
        },
        {
          "label": "Organ system",
          "hint": "What do organs form when they work together?",
          "why": "Organs working together form an organ system, like the circulatory system."
        },
        {
          "label": "Organism",
          "hint": "What is the whole living thing made of all its systems?",
          "why": "All the organ systems together make one organism, a whole person."
        }
      ],
      "extra": [
        "Molecule",
        "Population"
      ],
      "explain": "Cells form tissues, tissues form organs, organs form organ systems, and organ systems make an organism."
    }
  ],

  /* SEQUENCE: touch the steps in the correct order. */
  "sequences": [
    {
      "id": "seq-levels",
      "code": "3.1.9-12.B",
      "topic": "organization",
      "title": "Zoom out: put the levels of organization in order, smallest first",
      "steps": [
        "Cell (a muscle cell)",
        "Tissue (heart muscle)",
        "Organ (the heart)",
        "Organ system (the circulatory system)",
        "Organism (a whole person)"
      ],
      "hint": "Start with the smallest unit of life and build up: each level is made of the one before it.",
      "explain": "Cells form tissues, tissues form organs, organs form organ systems, and organ systems make an organism."
    },
    {
      "id": "seq-loop",
      "code": "3.1.9-12.C",
      "topic": "feedback",
      "loop": true,
      "title": "Fix the feedback loop: connect the parts in order",
      "steps": [
        "Stimulus: body temperature rises above normal",
        "Receptors in the skin sense the change",
        "Control center: the brain compares it to the set point",
        "Effectors: sweat glands release sweat",
        "Response: body temperature drops back to normal"
      ],
      "hint": "Follow the signal: something changes, it is sensed, a decision is made, and the body acts.",
      "explain": "Negative feedback: the response reverses the change and brings the body back to its set point. The loop is ready to run again."
    },
    {
      "id": "s-plan",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "title": "Plan a fair test: how does exercise affect heart rate?",
      "steps": [
        "Ask a question: how does exercise change heart rate?",
        "Measure the resting heart rate (the baseline)",
        "Change one variable: do 2 minutes of jumping jacks",
        "Measure heart rate again, keeping everything else the same",
        "Keep measuring while resting to see if it returns to baseline",
        "Compare the data to the baseline and draw a conclusion"
      ],
      "hint": "Start with a question and a baseline. Change only one thing.",
      "explain": "A fair investigation has a baseline, one changed variable, the same conditions otherwise, and data that are compared at the end."
    },
    {
      "id": "s-pupil",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "loop": true,
      "title": "Bright light: put the feedback loop in order",
      "steps": [
        "Stimulus: bright light shines into the eye",
        "Receptors in the eye sense the extra light",
        "Control center: the brain compares it to what the eye needs",
        "Effector: muscles in the iris make the pupil smaller",
        "Response: less light enters the eye"
      ],
      "hint": "Change, sense, decide, act, result.",
      "explain": "Negative feedback: the pupil shrinks in bright light and widens in dim light, keeping the light reaching the eye in a safe range."
    }
  ],

  /* BALANCE: keep a body measurement inside its normal range by using the body's responses. */
  "balances": [
    {
      "id": "bal-glucose",
      "kind": "elevator",
      "code": "3.1.9-12.C",
      "title": "Keep blood glucose in the normal range. The platform rises and falls with it.",
      "what": "Blood glucose",
      "unit": "mg/dL",
      "start": 95,
      "min": 40,
      "max": 180,
      "band": [
        70,
        110
      ],
      "danger": [
        52,
        150
      ],
      "hold": 10,
      "drift": -2.5,
      "event": {
        "every": 6,
        "delta": 35,
        "msg": "You ate a snack: blood glucose is rising!"
      },
      "controls": [
        {
          "label": "Pancreas: tell cells to take in glucose",
          "delta": -28
        },
        {
          "label": "Liver: release stored glucose",
          "delta": 28
        }
      ],
      "tooHigh": "Too much glucose in the blood! Tell the cells to take some in.",
      "tooLow": "Blood glucose is too low! Release stored glucose.",
      "explain": "Negative feedback: when glucose rose, the body lowered it, and when it fell, the body raised it, keeping it near the set point.",
      "topic": "feedback"
    },
    {
      "id": "bal-temp",
      "kind": "boss",
      "name": "The Imbalance",
      "code": "3.1.9-12.C",
      "title": "The Imbalance keeps heating and chilling the body. Bring the temperature back to normal and hold it there.",
      "what": "Body temperature",
      "unit": "°C",
      "start": 37,
      "min": 34,
      "max": 40,
      "band": [
        36.5,
        37.5
      ],
      "danger": [
        35.4,
        38.6
      ],
      "hold": 4,
      "push": 0.22,
      "hp": 4,
      "set": 37,
      "controls": [
        {
          "label": "Sweat",
          "delta": -0.7
        },
        {
          "label": "Widen blood vessels near the skin",
          "delta": -0.5
        },
        {
          "label": "Shiver",
          "delta": 0.7
        },
        {
          "label": "Narrow blood vessels near the skin",
          "delta": 0.5
        }
      ],
      "wrongHot": "You are already too hot. That response makes more heat, so the temperature runs even higher.",
      "wrongCold": "You are already too cold. That response gets rid of heat, so the temperature drops even lower.",
      "tooHigh": "Overheating! Cool the body down.",
      "tooLow": "Too cold! Warm the body up.",
      "explain": "Negative feedback: sweating and widening blood vessels cool the body; shivering and narrowing blood vessels warm it. Each response reverses the change.",
      "topic": "feedback"
    }
  ],

  /* WORD BANK: grab the word that completes each sentence. Extra words are there on purpose. */
  "wordbanks": [
    {
      "id": "wb-investigate",
      "code": "3.1.9-12.C",
      "topic": "investigation",
      "words": [
        "independent variable",
        "dependent variable",
        "controlled variables",
        "baseline",
        "set point",
        "receptor"
      ],
      "sentences": [
        {
          "text": "In a heart-rate test, minutes of exercise is the ___ because the student changes it on purpose.",
          "answer": "independent variable",
          "code": "3.1.9-12.C",
          "explain": "The variable you change on purpose is the independent variable."
        },
        {
          "text": "Heart rate is the ___ because it is what the student measures.",
          "answer": "dependent variable",
          "code": "3.1.9-12.C",
          "explain": "The variable you measure is the dependent variable."
        },
        {
          "text": "The room temperature and type of exercise stay the same, so they are ___.",
          "answer": "controlled variables",
          "code": "3.1.9-12.C",
          "explain": "Controlled variables are kept the same so the test is fair."
        },
        {
          "text": "The heart rate measured before exercise is the ___ that later results are compared to.",
          "answer": "baseline",
          "code": "3.1.9-12.C",
          "explain": "The baseline is the starting measurement used for comparison."
        }
      ]
    }
  ],

  /* LAB LOCK: an escape-room code. Each clue gives one digit (1 to 5). No timer. */
  "lablocks": [
    {
      "id": "lock-1-4",
      "title": "Lab Lock",
      "clues": [
        {
          "prompt": "Clue 1: In a fair test, how many variables should a student change on purpose?",
          "answer": 1,
          "code": "3.1.9-12.C",
          "hint": "Change more than one and you cannot tell which one caused the result.",
          "explain": "Only one: the independent variable. Everything else stays the same."
        },
        {
          "prompt": "Clue 2: Resting heart rate was 72. After exercise, at which minute (1 to 5) was heart rate FIRST within 5 beats of the resting rate?",
          "answer": 5,
          "code": "3.1.9-12.C",
          "figure": {
            "type": "bars",
            "categories": [
              "1 min",
              "2 min",
              "3 min",
              "4 min",
              "5 min"
            ],
            "values": [
              120,
              104,
              90,
              80,
              74
            ],
            "ylabel": "Heart rate after exercise"
          },
          "hint": "Find the first bar between 67 and 77.",
          "explain": "At minute 5 the heart rate was 74, only 2 beats above the resting rate. Feedback brought it back."
        },
        {
          "prompt": "Clue 3: How many of these are negative feedback responses? Sweating when hot, shivering when cold, pupils shrinking in bright light, thirst when the body is low on water, heart rate staying high forever after exercise.",
          "answer": 4,
          "code": "3.1.9-12.C",
          "hint": "Negative feedback reverses a change. Which one never reverses?",
          "explain": "Four of them reverse a change. A heart rate that never comes back down is not keeping balance."
        }
      ],
      "debrief": [
        "Clue 1 linked to fair tests: change only one variable.",
        "Clue 2 linked data to feedback: heart rate returned toward its resting baseline.",
        "Clue 3 linked responses to negative feedback: each one reverses a change."
      ]
    }
  ],

  /* SCAN: specimens to look at in the world (press E). Each teaches one word, saved to the Field Guide. */
  "scans": [
    {
      "id": "s-frog",
      "name": "Frog",
      "look": "frog",
      "color": "#5fbf5a",
      "word": "Organism",
      "def": "One whole living thing, made of all its organ systems working together.",
      "note": "This frog is an ORGANISM: one whole living thing. Inside it, organ systems work together so it can hop, eat, breathe, and grow."
    },
    {
      "id": "s1-cells",
      "name": "Frog skin cells",
      "look": "cell",
      "color": "#9be36b",
      "word": "Cell",
      "def": "The basic unit of structure and function in a living thing.",
      "note": "Zoom in on frog skin and you see CELLS, the smallest units of life. Every tissue, organ, and system is built from cells."
    },
    {
      "id": "s1-muscle",
      "name": "Frog leg muscle tissue",
      "look": "chain",
      "color": "#ff8fa0",
      "word": "Tissue",
      "def": "A group of similar cells working together.",
      "note": "Thousands of similar muscle cells work together as muscle TISSUE. That is what powers the frog's jump."
    },
    {
      "id": "s1-heart",
      "name": "Frog heart",
      "look": "blob",
      "color": "#ff6b6b",
      "word": "Organ",
      "def": "Different tissues working together to do a job.",
      "note": "The frog's heart is an ORGAN: muscle, nerve, and other tissues working together to pump blood."
    },
    {
      "id": "s-turtle",
      "name": "Turtle",
      "look": "turtle",
      "color": "#6a8a3a",
      "word": "Organ system",
      "def": "Organs working together to do a big job for the body.",
      "note": "The turtle's heart, blood vessels, and blood make its circulatory ORGAN SYSTEM, which carries oxygen and food to every part of its body."
    },
    {
      "id": "s-lily",
      "name": "Lily pad",
      "look": "lily",
      "color": "#3f9a4a",
      "word": "Plant organ",
      "def": "A leaf, stem, or root: a plant structure made of several tissues.",
      "note": "A lily pad is a leaf, a plant ORGAN. Its tissues capture sunlight and make food for the whole plant."
    },
    {
      "id": "s1-stem",
      "name": "Cattail",
      "look": "grass",
      "color": "#7be06a",
      "word": "Water delivery",
      "def": "Roots, stems, and leaves working together to move water through a plant.",
      "note": "The cattail's roots take in water, its stem carries it up, and its leaves use it. Three organs work together to DELIVER WATER."
    },
    {
      "id": "s1-heron",
      "name": "Heron",
      "look": "critter",
      "color": "#c8d0d8",
      "word": "Interacting systems",
      "def": "Body systems that depend on each other to do a job.",
      "note": "The heron's eyes spot a fish, nerves signal its neck muscles, and it strikes. Systems INTERACT: senses, nerves, and muscles work as a team."
    },
    {
      "id": "s1d-shark",
      "name": "Blue shark",
      "look": "shark",
      "color": "#6a8ac8",
      "word": "Gas exchange",
      "def": "Taking in oxygen and giving off carbon dioxide.",
      "note": "A shark's gills take OXYGEN from the water and give off carbon dioxide. Its heart and blood vessels then carry the oxygen to its muscles."
    },
    {
      "id": "s1d-seaturtle",
      "name": "Sea turtle",
      "look": "turtle",
      "color": "#5a8a5a",
      "word": "Nutrient uptake",
      "def": "Taking nutrients from digested food into the body.",
      "note": "A sea turtle's digestive system breaks down the jellyfish it eats. The nutrients pass into its blood, which carries them to every cell."
    },
    {
      "id": "s1d-jelly",
      "name": "Comb jelly",
      "look": "jelly",
      "color": "#9fe0ff",
      "word": "Respond to a signal",
      "def": "To react when the body senses a change.",
      "note": "When something touches this jelly, signals spread through its body and it changes how it swims. Living things SENSE and RESPOND."
    },
    {
      "id": "s1d-lantern",
      "name": "Lanternfish",
      "look": "critter",
      "color": "#7fd4ff",
      "word": "Organ system",
      "def": "Organs working together to do a big job for the body.",
      "note": "Every night lanternfish swim hundreds of meters up to feed. Their muscles, gills, heart, and nerves are ORGAN SYSTEMS all working at once."
    },
    {
      "id": "s1d-squid",
      "name": "Deep-sea squid",
      "look": "critter",
      "color": "#ff9a8a",
      "word": "Nervous system",
      "def": "The brain and nerves that carry signals so the body can respond.",
      "note": "A squid's NERVOUS SYSTEM sends fast signals to the muscles of its body, which squeeze out water so it can jet away from danger."
    },
    {
      "id": "s1d-eel",
      "name": "Gulper eel",
      "look": "eel",
      "color": "#3a3a5a",
      "word": "Movement",
      "def": "Muscles pulling on the body after a nerve signal tells them to.",
      "note": "The gulper eel waits with its huge mouth open. When nerves signal its muscles, it MOVES fast to swallow its prey."
    },
    {
      "id": "s1d-angler",
      "name": "Anglerfish",
      "look": "angler",
      "color": "#5a4a6a",
      "word": "Interacting systems",
      "def": "Body systems that depend on each other to do a job.",
      "note": "The anglerfish senses prey near its glowing lure. Nerves signal its jaw muscles, and the jaws snap shut. Several systems work as a team."
    },
    {
      "id": "s1d-heart",
      "name": "Fish heart",
      "look": "blob",
      "color": "#ff6b6b",
      "word": "Circulatory system",
      "def": "The heart, blood vessels, and blood that carry materials around the body.",
      "note": "A fish heart pumps blood to the gills to pick up oxygen and then out to the body. The CIRCULATORY SYSTEM delivers oxygen and nutrients everywhere."
    },
    {
      "id": "s1d-gill",
      "name": "Gill filaments",
      "look": "stack",
      "color": "#ff8fa0",
      "word": "Gills",
      "def": "Thin, folded organs that take oxygen from water into the blood.",
      "note": "GILLS are folded into thin sheets, which gives them a huge surface. More surface means more oxygen can pass into the blood."
    },
    {
      "id": "s1d-stomach",
      "name": "Fish stomach",
      "look": "blob",
      "color": "#ffb07a",
      "word": "Digestive system",
      "def": "The organs that break food down so the body can take in nutrients.",
      "note": "The DIGESTIVE SYSTEM breaks food into small pieces the blood can carry. Without it, the circulatory system would have nothing to deliver."
    },
    {
      "id": "s1d-snow",
      "name": "Marine snow",
      "look": "drop",
      "color": "#f2f7f5",
      "word": "Specialized cells",
      "def": "Cells with different shapes and jobs in one body.",
      "note": "Animals eating this falling food are built from many kinds of SPECIALIZED CELLS: some carry signals, some contract, and some take in nutrients."
    },
    {
      "id": "s1d-tubeworm",
      "name": "Giant tube worm",
      "look": "tubeworm",
      "color": "#e8283a",
      "word": "Delivery system",
      "def": "Structures that collect materials plus a system that carries them through the body.",
      "note": "The tube worm's red plume collects oxygen and other materials from the water. Its blood carries them through its long body."
    },
    {
      "id": "s1d-shrimp",
      "name": "Vent shrimp",
      "look": "critter",
      "color": "#ffc89a",
      "word": "Sense and respond",
      "def": "Detecting a change and reacting to it.",
      "note": "Vent shrimp have light-sensing patches on their backs that may help them find the faint glow of hot vents. Nerves and muscles help them steer."
    },
    {
      "id": "s1d-eelpout",
      "name": "Vent eelpout",
      "look": "eel",
      "color": "#d8c8b0",
      "word": "Whole-body teamwork",
      "def": "All the organ systems working together to keep an organism alive.",
      "note": "This fish hunts among the tube worms. Its gills, heart, stomach, nerves, and muscles all depend on each other. That is WHOLE-BODY TEAMWORK."
    },
    {
      "id": "s-dna2",
      "name": "DNA",
      "look": "helix",
      "color": "#7fd4ff",
      "word": "Base pairs",
      "def": "Matching letters: in DNA, A pairs with T and C pairs with G.",
      "note": "DNA is written in four letters: A, T, C, and G. They pair up: A with T, and C with G. The ORDER of the letters is the gene's instructions."
    },
    {
      "id": "s-mrna",
      "name": "mRNA",
      "look": "rod",
      "color": "#ffd166",
      "word": "Transcription",
      "def": "Copying DNA's code into messenger RNA (mRNA).",
      "note": "TRANSCRIPTION copies DNA into messenger RNA (mRNA). RNA uses U instead of T, so where DNA has A, mRNA gets U. T gets A, C gets G, and G gets C."
    },
    {
      "id": "s-ribo2",
      "name": "Ribosome",
      "look": "blob",
      "color": "#ffd166",
      "word": "Translation",
      "def": "Using the mRNA to link amino acids in the right order.",
      "note": "At a ribosome, TRANSLATION uses the mRNA instructions to link amino acids in the exact order the gene spells out."
    },
    {
      "id": "s1-amino",
      "name": "Amino acids",
      "look": "chain",
      "color": "#7be0ad",
      "word": "Amino acid",
      "def": "A small building block. Proteins are chains of amino acids in a specific order.",
      "note": "There are about 20 kinds of AMINO ACIDS. The order they are linked in comes from the DNA, and it is different for every protein."
    },
    {
      "id": "s-protein",
      "name": "Amino acid chain",
      "look": "rod",
      "color": "#c59cff",
      "word": "Protein",
      "def": "A chain of amino acids folded into a shape that does a job.",
      "note": "Amino acids link into a chain that folds up into a PROTEIN. Change the order of the amino acids and you can change the shape."
    },
    {
      "id": "s1-fold",
      "name": "Folded protein",
      "look": "blob",
      "color": "#c59cff",
      "word": "Protein shape",
      "def": "The folded form of a protein, which lets it do its job.",
      "note": "The order of amino acids decides how the chain FOLDS. The shape is what lets a protein do its job."
    },
    {
      "id": "s1-jobs",
      "name": "Busy proteins",
      "look": "blob",
      "color": "#ff9f6e",
      "word": "Protein jobs",
      "def": "Proteins speed up reactions, carry materials, build structures, and send signals.",
      "note": "Cells need many kinds of proteins because there are many JOBS: speeding up reactions, carrying materials, building structures, and sending signals."
    },
    {
      "id": "s1-indep",
      "name": "Stopwatch",
      "look": "blob",
      "color": "#ffd166",
      "word": "Independent variable",
      "def": "The one thing a scientist changes on purpose.",
      "note": "In a heart-rate test, the minutes of exercise is the INDEPENDENT VARIABLE: you change it on purpose."
    },
    {
      "id": "s1-dep",
      "name": "Pulse monitor",
      "look": "blob",
      "color": "#ff6b6b",
      "word": "Dependent variable",
      "def": "What a scientist measures to see the effect.",
      "note": "Heart rate is the DEPENDENT VARIABLE: it is what you measure to see what the exercise did."
    },
    {
      "id": "s1-control",
      "name": "Same conditions",
      "look": "stack",
      "color": "#9fe0ff",
      "word": "Controlled variables",
      "def": "Conditions kept the same so the test is fair.",
      "note": "Same room, same time of day, same kind of exercise: CONTROLLED VARIABLES stay the same so only one thing changes."
    },
    {
      "id": "s1-baseline",
      "name": "Resting reading",
      "look": "rod",
      "color": "#7be0ad",
      "word": "Baseline",
      "def": "The starting measurement used for comparison.",
      "note": "Measure heart rate at rest first. That BASELINE shows how much exercise changed it and whether it came back."
    },
    {
      "id": "s1-setpoint",
      "name": "Thermostat dial",
      "look": "blob",
      "color": "#ffd166",
      "word": "Set point",
      "def": "The normal value the body keeps a condition near.",
      "note": "Body temperature stays near a SET POINT of about 37 °C. Feedback pushes it back whenever it drifts."
    },
    {
      "id": "s1-stomata",
      "name": "Leaf pores",
      "look": "sprout",
      "color": "#7be06a",
      "word": "Stomata",
      "def": "Tiny pores on leaves that open and close.",
      "note": "STOMATA close when the air is dry to save water and open when water is plentiful to let in carbon dioxide. Plants use feedback too."
    },
    {
      "id": "s1-pupil",
      "name": "Eye",
      "look": "blob",
      "color": "#7fd4ff",
      "word": "Pupil response",
      "def": "The pupil shrinking in bright light and widening in dim light.",
      "note": "Shine a light and the PUPIL gets smaller. Dim the room and it gets bigger. That is feedback you can measure."
    },
    {
      "id": "s1-hr",
      "name": "Heart rate graph",
      "look": "rod",
      "color": "#ff8fa0",
      "word": "Heart rate",
      "def": "The number of heartbeats per minute.",
      "note": "HEART RATE rises during exercise to deliver more oxygen and falls back afterward. Measuring it is a classic feedback investigation."
    },
    {
      "id": "s-tissue",
      "name": "Heart muscle",
      "look": "blob",
      "color": "#ff8fa0",
      "word": "Tissue",
      "def": "A group of similar cells working together.",
      "note": "Many muscle cells working together form muscle TISSUE."
    },
    {
      "id": "s-organ",
      "name": "Heart",
      "look": "blob",
      "color": "#ff6b6b",
      "word": "Organ",
      "def": "Different tissues working together to do a job.",
      "note": "The heart is an ORGAN: muscle, nerve, and other tissues working together to pump blood."
    },
    {
      "id": "s-system",
      "name": "Blood vessels",
      "look": "rod",
      "color": "#ff6b6b",
      "word": "Organ system",
      "def": "Organs working together to do a big job for the body.",
      "note": "The heart and blood vessels make the circulatory ORGAN SYSTEM, which moves blood around the body."
    },
    {
      "id": "s-organism",
      "name": "Whole person",
      "look": "blob",
      "color": "#ffd8b0",
      "word": "Organism",
      "def": "One whole living thing.",
      "note": "All the organ systems together make an ORGANISM, one whole living thing, like a person."
    },
    {
      "id": "s-receptor",
      "name": "Skin sensor",
      "look": "blob",
      "color": "#ffd166",
      "word": "Receptor",
      "def": "A part that senses a change.",
      "note": "RECEPTORS sense changes. Nerve endings in your skin feel when you get too hot or too cold."
    },
    {
      "id": "s-feedback",
      "name": "Thermostat",
      "look": "blob",
      "color": "#7be0ad",
      "word": "Negative feedback",
      "def": "A response that undoes a change to bring the body back to normal.",
      "note": "NEGATIVE FEEDBACK undoes a change. Too hot? Sweat to cool down. Too cold? Shiver to warm up. Then the body is back to normal."
    },
    {
      "id": "s-glucose",
      "name": "Blood sugar",
      "look": "blob",
      "color": "#ffd166",
      "word": "Blood glucose",
      "def": "Sugar in the blood that cells use for energy.",
      "note": "After a snack, sugar (GLUCOSE) in the blood goes up. The pancreas tells cells to take it in. When it drops too low, the liver releases stored glucose."
    }
  ],

  /* FIELD GUIDE: vocabulary shown on the pause screen. */
  "vocab": [
    {
      "term": "Cell",
      "def": "The basic unit of structure and function in living things."
    },
    {
      "term": "Tissue",
      "def": "A group of similar cells that work together."
    },
    {
      "term": "Organ",
      "def": "Different tissues working together to do a job."
    },
    {
      "term": "Organ system",
      "def": "Organs working together to do a big job for the body."
    },
    {
      "term": "Organism",
      "def": "One whole living thing."
    },
    {
      "term": "Gas exchange",
      "def": "Taking in oxygen and giving off carbon dioxide."
    },
    {
      "term": "Circulatory system",
      "def": "The heart, blood vessels, and blood that carry materials around the body."
    },
    {
      "term": "Nervous system",
      "def": "The brain and nerves that carry signals so the body can respond."
    },
    {
      "term": "Gene",
      "def": "A section of DNA with the instructions for making a protein."
    },
    {
      "term": "mRNA",
      "def": "Messenger RNA: a copy of a gene's code that carries the instructions for building a protein."
    },
    {
      "term": "Transcription",
      "def": "Copying the code in DNA into messenger RNA."
    },
    {
      "term": "Translation",
      "def": "Using the messenger RNA code to link amino acids into a protein at a ribosome."
    },
    {
      "term": "Amino acid",
      "def": "A building block of proteins."
    },
    {
      "term": "Protein",
      "def": "A chain of amino acids folded into a shape that does a specific job."
    },
    {
      "term": "Homeostasis",
      "def": "Keeping conditions inside an organism stable."
    },
    {
      "term": "Negative feedback",
      "def": "A response that reverses a change and brings a condition back toward its set point."
    },
    {
      "term": "Set point",
      "def": "The normal value the body keeps a condition near."
    },
    {
      "term": "Receptor",
      "def": "A part that senses a change."
    },
    {
      "term": "Effector",
      "def": "A part, such as a muscle or gland, that carries out the response."
    },
    {
      "term": "Independent variable",
      "def": "The variable a scientist changes on purpose."
    },
    {
      "term": "Dependent variable",
      "def": "The variable a scientist measures."
    },
    {
      "term": "Controlled variable",
      "def": "A condition kept the same so a test is fair."
    },
    {
      "term": "Baseline",
      "def": "A starting measurement used for comparison."
    }
  ]
});
