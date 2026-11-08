/* WORLD 2 QUESTION FILE: Matter and Energy in Organisms and Ecosystems
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
     World 2 uses 3.1.9-12.E, F, G, H, J, and K.
   - "topic" groups questions that can rotate with each other at stations and clue terminals.
   - In "questions", "answer" is the position of the correct option, counting from 0. The game shuffles the options.
   - "hint" shows after a wrong try. "explain" shows after the right answer.
   - Keep every comma, bracket, and quotation mark in place. */
FieldGuide.registerQuestions(2, {
 "tokens": [
  {
   "id": "f-build",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "Collect only things a cell can BUILD from the carbon, hydrogen, and oxygen in sugar (adding a few other elements)",
   "good": [
    "Amino acids",
    "Proteins",
    "DNA",
    "Fats",
    "Starch"
   ],
   "bad": [
    {
     "text": "Brand-new carbon atoms",
     "explain": "Cells cannot make new atoms. They rearrange atoms they already have, such as the carbon from sugar."
    },
    {
     "text": "Nitrogen atoms",
     "explain": "Sugar has no nitrogen, and cells cannot turn carbon into nitrogen. They take nitrogen in from soil, water, or food."
    },
    {
     "text": "Light energy",
     "explain": "Light is energy, not matter. Cells use energy to build molecules, but they cannot build light out of atoms."
    },
    {
     "text": "Gold atoms",
     "explain": "Atoms never change into other elements inside living things. Sugar has no gold."
    }
   ]
  },
  {
   "id": "e-inputs",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Collect only what photosynthesis TAKES IN (its inputs)",
   "good": [
    "Carbon dioxide from the air",
    "Water from the roots",
    "Light energy from the Sun"
   ],
   "bad": [
    {
     "text": "Oxygen",
     "explain": "Oxygen is an OUTPUT of photosynthesis. The plant releases it into the air."
    },
    {
     "text": "Glucose (sugar)",
     "explain": "Sugar is what photosynthesis MAKES. It is an output."
    },
    {
     "text": "Soil",
     "explain": "Plants take in a little water and minerals from soil, but soil is not an input for making sugar."
    },
    {
     "text": "Heat from the ground",
     "explain": "The energy for photosynthesis comes from light, not from heat in the ground."
    }
   ]
  },
  {
   "id": "j-anaerobic",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "Collect only places where cells must release energy WITHOUT oxygen",
   "good": [
    "Deep in waterlogged mud",
    "Inside rising bread dough",
    "The bottom of a still, stagnant pond",
    "Inside a soggy, packed compost heap"
   ],
   "bad": [
    {
     "text": "A leaf in open air",
     "explain": "Air has plenty of oxygen, so leaf cells use aerobic respiration."
    },
    {
     "text": "A flying bird's wing muscles",
     "explain": "A flying bird breathes hard and delivers lots of oxygen to its muscles."
    },
    {
     "text": "A fast, splashing mountain stream",
     "explain": "Splashing water mixes in oxygen from the air."
    },
    {
     "text": "A fluffy compost pile that is turned every week",
     "explain": "Turning the pile mixes in air, so its decomposers have oxygen."
    }
   ]
  },
  {
   "id": "producers",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "Collect only PRODUCERS: living things that make their own food",
   "good": [
    "Grass",
    "Oak tree",
    "Algae",
    "Sunflower"
   ],
   "bad": [
    {
     "text": "Rabbit",
     "explain": "A rabbit eats plants. It is a consumer (a primary consumer)."
    },
    {
     "text": "Mushroom",
     "explain": "A mushroom is a decomposer. It gets energy by breaking down dead matter."
    },
    {
     "text": "Hawk",
     "explain": "A hawk eats other animals. It is a consumer."
    },
    {
     "text": "Deer",
     "explain": "A deer eats plants. It is a consumer."
    }
   ]
  }
 ],
 "sorts": [
  {
   "id": "e-io",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Input or output of photosynthesis?",
   "options": [
    "Input (goes in)",
    "Output (comes out)"
   ],
   "hint": "Photosynthesis: carbon dioxide + water + light energy → glucose + oxygen.",
   "items": [
    {
     "text": "Carbon dioxide",
     "answer": 0,
     "explain": "Leaves take in carbon dioxide from the air."
    },
    {
     "text": "Water",
     "answer": 0,
     "explain": "Water comes up from the roots."
    },
    {
     "text": "Light energy",
     "answer": 0,
     "explain": "Light is the energy that drives photosynthesis."
    },
    {
     "text": "Glucose (sugar)",
     "answer": 1,
     "explain": "Sugar is made by photosynthesis."
    },
    {
     "text": "Oxygen gas",
     "answer": 1,
     "explain": "Oxygen is released into the air."
    },
    {
     "text": "Chemical energy stored in sugar",
     "answer": 1,
     "explain": "Light energy ends up stored as chemical energy in the bonds of sugar."
    }
   ]
  },
  {
   "id": "photo-resp",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "Photosynthesis, cellular respiration, or both?",
   "options": [
    "Photosynthesis",
    "Cellular respiration",
    "Both"
   ],
   "hint": "Photosynthesis stores light energy in sugar. Cellular respiration releases the energy in sugar.",
   "items": [
    {
     "text": "Uses light energy",
     "answer": 0,
     "explain": "Photosynthesis captures light energy."
    },
    {
     "text": "Releases carbon dioxide",
     "answer": 1,
     "explain": "Cellular respiration releases carbon dioxide."
    },
    {
     "text": "Makes glucose",
     "answer": 0,
     "explain": "Photosynthesis makes glucose."
    },
    {
     "text": "Uses oxygen",
     "answer": 1,
     "explain": "Cellular respiration uses oxygen."
    },
    {
     "text": "Stores energy in the bonds of sugar",
     "answer": 0,
     "explain": "Photosynthesis turns light energy into chemical energy stored in sugar."
    },
    {
     "text": "Breaks the bonds in sugar to release energy",
     "answer": 1,
     "explain": "Cellular respiration breaks sugar's bonds and releases energy the cell uses."
    },
    {
     "text": "Happens inside plant cells",
     "answer": 2,
     "explain": "Plant cells do both: they make sugar by photosynthesis and release its energy by cellular respiration."
    },
    {
     "text": "Moves carbon atoms between the air and living things",
     "answer": 2,
     "explain": "Photosynthesis takes carbon dioxide out of the air; respiration puts it back."
    }
   ]
  },
  {
   "id": "j-aer",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "With oxygen (aerobic), without oxygen (anaerobic), or both?",
   "options": [
    "Aerobic (with oxygen)",
    "Anaerobic (without oxygen)",
    "Both"
   ],
   "hint": "Aerobic respiration uses oxygen and releases the most energy. Anaerobic processes happen where oxygen has run out.",
   "items": [
    {
     "text": "Releases the most energy from each sugar molecule",
     "answer": 0,
     "explain": "With oxygen, cells release much more energy from each sugar molecule."
    },
    {
     "text": "Uses oxygen gas",
     "answer": 0,
     "explain": "Only aerobic respiration uses oxygen."
    },
    {
     "text": "Yeast in sealed bread dough",
     "answer": 1,
     "explain": "With the oxygen used up, yeast ferment sugar."
    },
    {
     "text": "Decomposers in deep, waterlogged mud",
     "answer": 1,
     "explain": "There is almost no oxygen in waterlogged mud."
    },
    {
     "text": "A sprinter's muscles that run short of oxygen",
     "answer": 1,
     "explain": "For a short time, the muscle cells release some energy without oxygen."
    },
    {
     "text": "Breaks down sugar to release energy",
     "answer": 2,
     "explain": "Both release energy from sugar; aerobic respiration releases far more."
    },
    {
     "text": "Yeast can do it",
     "answer": 2,
     "explain": "Yeast use oxygen when it is there and ferment sugar when it is not."
    },
    {
     "text": "Most of your body's cells at rest",
     "answer": 0,
     "explain": "At rest your blood delivers plenty of oxygen, so your cells use aerobic respiration."
    }
   ]
  }
 ],
 "questions": [
  {
   "id": "w2q06",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "Why can carbon form so many different large molecules?",
   "options": [
    "Each carbon atom can form four bonds, making chains, branches, and rings.",
    "Carbon is the heaviest element in living things.",
    "Carbon can form only one bond.",
    "Carbon is a metal."
   ],
   "answer": 0,
   "hint": "Count how many bonds one carbon atom can make.",
   "explain": "Carbon forms four strong bonds, so it builds long chains, branches, and rings: the backbones of life's molecules."
  },
  {
   "id": "w2q07",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "Which element forms the backbone of sugars, amino acids, fats, and DNA?",
   "options": [
    "carbon",
    "nitrogen",
    "iron",
    "calcium"
   ],
   "answer": 0,
   "hint": "It is the element that can make four bonds and long chains.",
   "explain": "All of these large molecules are built on chains of carbon atoms."
  },
  {
   "id": "w2q08",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "A student says, 'Carbon atoms can link to each other in long chains.' Why does this matter for living things?",
   "options": [
    "It lets cells build large, complex molecules like proteins and DNA.",
    "It makes cells rigid like metal.",
    "It stops chemical reactions in cells.",
    "It lets cells avoid using energy."
   ],
   "answer": 0,
   "hint": "Big molecules need a long backbone.",
   "explain": "Carbon-to-carbon bonds let cells build the large, varied molecules needed for life."
  },
  {
   "id": "w2q78",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "A seaweed makes glucose (C₆H₁₂O₆) by photosynthesis. Later it uses the glucose to build amino acids. Which element must it take in from the seawater, because glucose does not contain it?",
   "options": [
    "nitrogen",
    "carbon",
    "hydrogen",
    "oxygen"
   ],
   "answer": 0,
   "hint": "Look at the letters in C₆H₁₂O₆. Which element in amino acids is missing?",
   "explain": "Glucose has only carbon, hydrogen, and oxygen. Amino acids also contain nitrogen, so the seaweed takes nitrogen in from the water and combines it with atoms from the sugar."
  },
  {
   "id": "w2q79",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "In a famous experiment, a 2 kg willow sapling planted in a tub of soil grew to about 77 kg in five years, but the soil lost only about 57 grams. Where did most of the tree's new mass come from?",
   "options": [
    "carbon dioxide from the air, whose carbon was built into sugar and then into wood",
    "minerals from the soil",
    "sunlight that turned into matter",
    "new atoms the tree made as it grew"
   ],
   "answer": 0,
   "hint": "The soil barely changed. What else does a plant take in to make sugar?",
   "explain": "Most of a plant's dry mass is carbon, hydrogen, and oxygen. The carbon comes from carbon dioxide in the air, built into sugar by photosynthesis and then into wood and other molecules. Light gives energy, not atoms."
  },
  {
   "id": "w2q80",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "A snail eats seaweed. Carbon atoms from the seaweed's sugar later show up in the snail's muscle proteins. What does this show?",
   "options": [
    "The atoms were rearranged into new molecules, not created or destroyed.",
    "The snail made new carbon atoms.",
    "The carbon atoms turned into nitrogen atoms.",
    "Sugar and protein are the same molecule."
   ],
   "answer": 0,
   "hint": "Matter is conserved.",
   "explain": "The snail's cells broke the sugar apart and used its carbon, hydrogen, and oxygen (plus nitrogen) to build proteins. Atoms are rearranged, never created or destroyed."
  },
  {
   "id": "w2q82",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "prompt": "Students grow bean plants in pots and weigh the dry soil before and after one month. The soil mass barely changed, but the plants gained a lot of mass. Which claim does this evidence support?",
   "options": [
    "The plants' new mass did not come mainly from the soil.",
    "The plants created new matter.",
    "Plants do not need soil at all.",
    "The plants' mass came from sunlight."
   ],
   "answer": 0,
   "hint": "If the soil did not lose much mass, could the plants' mass have come from it?",
   "explain": "The soil lost almost no mass, so the plants must have gotten most of their matter elsewhere: carbon dioxide from the air and water, rearranged into sugar and other molecules."
  },
  {
   "id": "w2q36",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Which are the PRODUCTS of photosynthesis?",
   "options": [
    "glucose and oxygen",
    "carbon dioxide and water",
    "glucose and carbon dioxide",
    "oxygen and carbon dioxide"
   ],
   "answer": 0,
   "hint": "Photosynthesis: carbon dioxide + water + light → ?",
   "explain": "Photosynthesis uses carbon dioxide, water, and light energy to make glucose and oxygen."
  },
  {
   "id": "w2q39",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Which energy change happens during photosynthesis?",
   "options": [
    "Light energy is changed into chemical energy stored in glucose.",
    "Chemical energy is changed into light energy.",
    "Heat energy is changed into sound.",
    "Chemical energy in glucose is changed into light with no sunlight."
   ],
   "answer": 0,
   "hint": "Where does the energy come from, and where is it stored?",
   "explain": "Photosynthesis transforms light energy into chemical energy stored in the bonds of glucose."
  },
  {
   "id": "w2q38",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "How are photosynthesis and cellular respiration related?",
   "options": [
    "The products of one are the reactants of the other.",
    "They are exactly the same process.",
    "They both make glucose.",
    "They both happen only in animals."
   ],
   "answer": 0,
   "hint": "Compare their equations side by side.",
   "explain": "Photosynthesis makes glucose and oxygen; respiration uses them and returns carbon dioxide and water."
  },
  {
   "id": "w2q83",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Students put pondweed in water under a lamp and count the oxygen bubbles it gives off each minute. What do you predict when they move the lamp CLOSER to the plant?",
   "options": [
    "More bubbles, because more light energy speeds up photosynthesis",
    "Fewer bubbles, because light stops photosynthesis",
    "No change, because plants do not need light",
    "The bubbles turn into carbon dioxide"
   ],
   "answer": 0,
   "hint": "Which input does the lamp provide?",
   "explain": "Light energy drives photosynthesis. More light (up to a limit) means faster photosynthesis, so the plant releases more oxygen."
  },
  {
   "id": "w2q84",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "During photosynthesis, where does the ENERGY stored in glucose come from?",
   "options": [
    "light from the Sun",
    "the water taken in by the roots",
    "minerals in the soil",
    "the oxygen the plant releases"
   ],
   "answer": 0,
   "hint": "The atoms come from carbon dioxide and water. What provides the energy?",
   "explain": "The atoms in glucose come from carbon dioxide and water, but the energy stored in its bonds comes from light."
  },
  {
   "id": "w2q85",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "A plant sits in bright light inside a sealed jar for a day. Which gas DEcreases inside the jar?",
   "options": [
    "carbon dioxide",
    "oxygen",
    "water vapor",
    "nitrogen"
   ],
   "answer": 0,
   "hint": "Which gas does photosynthesis use up?",
   "explain": "In bright light the plant takes in carbon dioxide for photosynthesis faster than its cells release it, so carbon dioxide decreases and oxygen increases."
  },
  {
   "id": "w2q86",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Which model correctly shows photosynthesis?",
   "options": [
    "carbon dioxide + water + light energy → glucose + oxygen",
    "glucose + oxygen → carbon dioxide + water + energy",
    "oxygen + water → glucose + carbon dioxide",
    "glucose + light energy → oxygen + water"
   ],
   "answer": 0,
   "hint": "Inputs are on the left, outputs on the right. Producers make sugar.",
   "explain": "Photosynthesis uses carbon dioxide, water, and light energy to make glucose and oxygen. The second choice is cellular respiration."
  },
  {
   "id": "w2q87",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "prompt": "Tiny algae in the ocean carry out photosynthesis. Which statement about them is true?",
   "options": [
    "They take in dissolved carbon dioxide and use light energy to make sugar and oxygen.",
    "They need soil to make sugar.",
    "They make sugar only at night.",
    "They take in oxygen and give off sugar into the water."
   ],
   "answer": 0,
   "hint": "Photosynthesis works the same way in water as on land.",
   "explain": "Algae use carbon dioxide dissolved in water, plus light energy, to make sugar, and they release oxygen. They make much of the oxygen on Earth."
  },
  {
   "id": "w2q37",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "Which are the PRODUCTS of cellular respiration?",
   "options": [
    "carbon dioxide, water, and released energy",
    "glucose and oxygen",
    "light energy and glucose",
    "oxygen and water only"
   ],
   "answer": 0,
   "hint": "Respiration breaks down glucose using oxygen.",
   "explain": "Cellular respiration: glucose + oxygen → carbon dioxide + water, with a release of energy the cell uses."
  },
  {
   "id": "w2q70",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "What are the REACTANTS (starting materials) of cellular respiration?",
   "options": [
    "glucose and oxygen",
    "carbon dioxide and water",
    "light and water",
    "carbon dioxide and light"
   ],
   "answer": 0,
   "hint": "Respiration breaks down food using the gas you breathe in.",
   "explain": "Cellular respiration uses glucose and oxygen and produces carbon dioxide and water, releasing energy."
  },
  {
   "id": "w2q40",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "A plant is placed in a sealed jar in the dark. Which gas will increase in the jar?",
   "options": [
    "carbon dioxide",
    "oxygen",
    "nitrogen",
    "helium"
   ],
   "answer": 0,
   "hint": "Without light, the plant can still do one of the two processes.",
   "explain": "In the dark, plants cannot photosynthesize, but they still respire, releasing carbon dioxide."
  },
  {
   "id": "w2q88",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "Which statement best describes cellular respiration?",
   "options": [
    "The bonds in sugar and oxygen are broken, new bonds form in carbon dioxide and water, and energy is released.",
    "Light energy is stored in the bonds of sugar.",
    "Carbon dioxide and water are combined to make sugar.",
    "Energy is created from nothing inside the cell."
   ],
   "answer": 0,
   "hint": "Respiration RELEASES energy from food.",
   "explain": "Cellular respiration breaks the bonds of food molecules and oxygen and forms new bonds in carbon dioxide and water. The net result is a transfer of energy the cell can use."
  },
  {
   "id": "w2q89",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "Do plants carry out cellular respiration?",
   "options": [
    "Yes. Plant cells break down sugar with oxygen to release energy, day and night.",
    "No. Plants only do photosynthesis.",
    "Only at night, when there is no light.",
    "Only in their flowers."
   ],
   "answer": 0,
   "hint": "Plant cells need energy to grow, just like animal cells.",
   "explain": "Plants make sugar by photosynthesis, and their cells release its energy by cellular respiration all the time, in the light and the dark."
  },
  {
   "id": "w2q90",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "A student blows through a straw into a blue liquid that turns yellow when carbon dioxide is added. The liquid turns yellow. What does this show?",
   "options": [
    "Her body's cells released carbon dioxide during cellular respiration.",
    "Her lungs made oxygen.",
    "Her cells carried out photosynthesis.",
    "Breath contains no gases."
   ],
   "answer": 0,
   "hint": "Which gas changes the color, and which process makes it?",
   "explain": "Cells release carbon dioxide during cellular respiration. Blood carries it to the lungs, and it leaves in your breath."
  },
  {
   "id": "w2q91",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "Why do your muscles need more oxygen when you run?",
   "options": [
    "Muscle cells carry out more cellular respiration to release more energy from sugar.",
    "Muscles store oxygen to use next week.",
    "Running muscles do photosynthesis.",
    "Oxygen is turned directly into muscle."
   ],
   "answer": 0,
   "hint": "Oxygen is an input of the process that releases energy.",
   "explain": "Running muscles use more energy, so their cells carry out more cellular respiration, which uses more oxygen and releases more carbon dioxide."
  },
  {
   "id": "w2q92",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "prompt": "Sprouting seeds in a sealed, insulated jar warm up slightly over a day. What best explains the warming?",
   "options": [
    "Cellular respiration in the seeds releases energy, and some of it is given off as heat.",
    "The seeds are doing photosynthesis in the dark.",
    "The jar creates heat from nothing.",
    "The seeds absorb cold from the air."
   ],
   "answer": 0,
   "hint": "Living seeds release energy from their stored food.",
   "explain": "The sprouting seeds break down their stored food by cellular respiration. Some of the released energy is given off as heat, so the jar warms."
  },
  {
   "id": "w2q93",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "Yeast is sealed in a bottle of warm sugar water with no air. A balloon over the top slowly inflates. What gas fills the balloon, and why?",
   "options": [
    "carbon dioxide, released as the yeast break down sugar without oxygen",
    "oxygen, released by photosynthesis",
    "nitrogen, made from the sugar",
    "air that leaked in from outside"
   ],
   "answer": 0,
   "hint": "Yeast cannot do photosynthesis. What do they release when they break down sugar?",
   "explain": "Without oxygen, yeast break down sugar by fermentation, which releases carbon dioxide gas. That gas fills the balloon."
  },
  {
   "id": "w2q94",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "Compared with aerobic respiration, how much energy is released from each sugar molecule when cells work WITHOUT oxygen?",
   "options": [
    "much less energy",
    "much more energy",
    "exactly the same amount",
    "no energy at all"
   ],
   "answer": 0,
   "hint": "Why can't you sprint for a whole hour?",
   "explain": "Without oxygen, cells release only a small part of the energy stored in sugar. With oxygen, they release much more."
  },
  {
   "id": "w2q95",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "A sprinter's legs tire after about 30 seconds of running all-out. What best explains this?",
   "options": [
    "Her muscle cells used oxygen faster than her blood could deliver it, so they released some energy without oxygen, which releases much less energy.",
    "Her muscles stopped needing energy.",
    "Her muscles started photosynthesis.",
    "Her blood stopped carrying sugar."
   ],
   "answer": 0,
   "hint": "Think about the oxygen supply during a hard sprint.",
   "explain": "In a hard sprint, oxygen runs short in the muscles. For a short time the cells release energy without oxygen, but this releases much less energy, so she has to slow down."
  },
  {
   "id": "w2q96",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "Peat bogs hold huge amounts of carbon in partly decayed plants. Why does dead plant matter build up there?",
   "options": [
    "The waterlogged soil has little oxygen, so decomposers break down dead plants very slowly.",
    "No living things can survive in bogs.",
    "Bogs get extra sunlight.",
    "Dead plants in bogs turn into rock right away."
   ],
   "answer": 0,
   "hint": "Most decomposers work fastest with oxygen.",
   "explain": "In waterlogged bogs there is little oxygen, so decay is very slow. Dead plants pile up as peat, storing carbon instead of returning it quickly to the air."
  },
  {
   "id": "w2q97",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "A gardener turns her compost pile every week to mix in air. Why does this make the scraps break down faster?",
   "options": [
    "With oxygen, decomposers can use aerobic respiration and break the scraps down faster.",
    "Air kills the decomposers.",
    "Turning the pile adds new matter.",
    "Oxygen turns the scraps directly into soil."
   ],
   "answer": 0,
   "hint": "Which kind of respiration releases more energy for the decomposers?",
   "explain": "Oxygen lets the decomposers use aerobic respiration, which releases much more energy, so they grow and break down the scraps faster. A soggy pile without air decays slowly."
  },
  {
   "id": "w2q98",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "prompt": "Which statement about matter in low-oxygen places, like deep mud, is TRUE?",
   "options": [
    "Matter still cycles: decomposers that live without oxygen slowly return carbon to the water, soil, and air.",
    "Matter is destroyed when there is no oxygen.",
    "Nothing can live without oxygen, so matter stops moving.",
    "Carbon turns into oxygen."
   ],
   "answer": 0,
   "hint": "Atoms are never destroyed, even where oxygen is missing.",
   "explain": "Some decomposers live without oxygen. They work slowly, but they still break down dead matter and return carbon to the environment. Matter is conserved and keeps cycling."
  },
  {
   "id": "w2q46",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "In a food chain, which way do the arrows point?",
   "options": [
    "from the organism eaten to the organism that eats it, showing energy flow",
    "from the predator to its prey",
    "from the Sun to the decomposers only",
    "in random directions"
   ],
   "answer": 0,
   "hint": "Arrows show where the energy goes.",
   "explain": "Arrows point in the direction energy flows: from food to the eater."
  },
  {
   "id": "w2q47",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "About how much of the energy at one trophic level passes to the next level?",
   "options": [
    "about 10%",
    "about 90%",
    "100%",
    "none"
   ],
   "answer": 0,
   "hint": "Most energy is used for life processes or lost as heat.",
   "explain": "About 10% of the energy passes up to the next level; the rest is used or lost as heat."
  },
  {
   "id": "w2q48",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "Grass → grasshopper → frog → snake. Which organism is the producer?",
   "options": [
    "grass",
    "grasshopper",
    "frog",
    "snake"
   ],
   "answer": 0,
   "hint": "Producers make their own food.",
   "explain": "Grass makes its own food by photosynthesis, so it is the producer."
  },
  {
   "id": "w2q49",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "Why are there usually fewer top predators than herbivores in an ecosystem?",
   "options": [
    "Less energy is available at higher trophic levels.",
    "Top predators reproduce faster.",
    "Herbivores eat the top predators.",
    "Top predators need no energy."
   ],
   "answer": 0,
   "hint": "Think about the energy pyramid's shape.",
   "explain": "Each level up has only about 10% of the energy of the level below, so it supports fewer organisms."
  },
  {
   "id": "w2q50",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "What is the original source of energy for almost every food chain on Earth?",
   "options": [
    "the Sun",
    "the soil",
    "water",
    "decomposers"
   ],
   "answer": 0,
   "hint": "Producers capture it first.",
   "explain": "Producers capture energy from sunlight, and it flows through the food chain from there."
  },
  {
   "id": "w2q52",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "What is the role of decomposers in the cycling of matter?",
   "options": [
    "They break down dead organisms and return nutrients to the soil and air.",
    "They make food from sunlight.",
    "They create new matter.",
    "They stop the carbon cycle."
   ],
   "answer": 0,
   "hint": "Think about what happens to a fallen log.",
   "explain": "Decomposers break down dead matter and return carbon and nutrients to the ecosystem."
  },
  {
   "id": "w2q54",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "Which statement best compares energy and matter in an ecosystem?",
   "options": [
    "Matter cycles, but energy flows through and is lost as heat.",
    "Energy cycles, but matter is lost.",
    "Both energy and matter are recycled forever.",
    "Neither energy nor matter moves."
   ],
   "answer": 0,
   "hint": "Which one can be used again and again?",
   "explain": "Carbon and nitrogen atoms and water molecules are recycled; energy enters as sunlight and leaves as heat."
  },
  {
   "id": "w2q74",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "In an energy pyramid, about how much of the energy at one level is passed to the next level up?",
   "options": [
    "about 10%",
    "about 50%",
    "about 90%",
    "100%"
   ],
   "answer": 0,
   "hint": "Most energy is used for life processes or lost as heat.",
   "explain": "Only about 10% of the energy at one level passes to the next. The rest is used for life processes or lost as heat."
  },
  {
   "id": "w2q75",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "In the food chain grass → grasshopper → frog → hawk, which organism is a secondary consumer?",
   "options": [
    "frog",
    "grass",
    "grasshopper",
    "hawk"
   ],
   "answer": 0,
   "hint": "Count the eaters: the first eater is the primary consumer.",
   "explain": "Grass is the producer, the grasshopper is the primary consumer, the frog is the secondary consumer, and the hawk is the tertiary consumer."
  },
  {
   "id": "w2q51",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "Which process removes carbon dioxide from the atmosphere?",
   "options": [
    "photosynthesis",
    "cellular respiration",
    "burning fossil fuels",
    "decomposition"
   ],
   "answer": 0,
   "hint": "Which process uses carbon dioxide as a reactant?",
   "explain": "Plants and algae take in carbon dioxide during photosynthesis."
  },
  {
   "id": "w2q76",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "Which process returns carbon dioxide to the atmosphere?",
   "options": [
    "cellular respiration by plants, animals, and decomposers",
    "photosynthesis",
    "dissolving into the ocean",
    "freezing"
   ],
   "answer": 0,
   "hint": "Which process breaks down glucose and releases a gas?",
   "explain": "Cellular respiration (and burning fuels) releases carbon dioxide. Photosynthesis removes it."
  },
  {
   "id": "w2q99",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "Producers in a meadow capture 20,000 kilocalories of energy. About how much energy is available to the SECONDARY consumers?",
   "options": [
    "about 200 kilocalories",
    "about 2,000 kilocalories",
    "about 20 kilocalories",
    "about 18,000 kilocalories"
   ],
   "answer": 0,
   "hint": "About 10% passes up each level: producers → primary consumers → secondary consumers.",
   "explain": "About 10% of 20,000 is 2,000 for the primary consumers, and about 10% of 2,000 is 200 for the secondary consumers."
  },
  {
   "id": "w2q100",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "prompt": "The algae in a pond have a total biomass of 1,000 kg. About how much biomass of the small fish that eat the algae can the pond support?",
   "options": [
    "about 100 kg",
    "about 1,000 kg",
    "about 10,000 kg",
    "about 900 kg"
   ],
   "answer": 0,
   "hint": "Only about 10% of the matter and energy at one level ends up in the next level up.",
   "explain": "Most of the algae's energy is used for living or lost as heat, so only about 10%, or roughly 100 kg, can be supported at the next level."
  },
  {
   "id": "w2q101",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "Which part of the carbon cycle stores carbon for millions of years?",
   "options": [
    "fossil fuels and carbonate rock in the geosphere",
    "carbon dioxide in the atmosphere",
    "a leaf on a tree",
    "a rabbit's muscles"
   ],
   "answer": 0,
   "hint": "Think about carbon that was buried long ago.",
   "explain": "Carbon in coal, oil, natural gas, and limestone (the geosphere) can stay stored for millions of years. Burning fossil fuels releases it quickly."
  },
  {
   "id": "w2q102",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "The oceans absorb a large share of the carbon dioxide released by burning fossil fuels. In the carbon cycle, the oceans are part of the...",
   "options": [
    "hydrosphere",
    "biosphere",
    "geosphere",
    "atmosphere"
   ],
   "answer": 0,
   "hint": "Which \"sphere\" is Earth's water?",
   "explain": "The hydrosphere is Earth's water. Carbon dioxide from the atmosphere dissolves into ocean water."
  },
  {
   "id": "w2q103",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "A forest is cut down and burned. How does this change the carbon cycle?",
   "options": [
    "More carbon moves into the atmosphere, and less is removed by photosynthesis.",
    "Less carbon moves into the atmosphere.",
    "Carbon is destroyed by the fire.",
    "Nothing changes, because trees do not store carbon."
   ],
   "answer": 0,
   "hint": "Burning releases stored carbon. What else is lost when the trees are gone?",
   "explain": "Burning releases the carbon stored in the trees as carbon dioxide, and with the trees gone, less carbon dioxide is taken back out of the air by photosynthesis."
  },
  {
   "id": "w2q104",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "prompt": "Tiny algae in the ocean take in carbon dioxide dissolved in the water. Which process moves this carbon from the hydrosphere into living things?",
   "options": [
    "photosynthesis",
    "cellular respiration",
    "combustion",
    "evaporation"
   ],
   "answer": 0,
   "hint": "Which process builds carbon dioxide into sugar?",
   "explain": "Algae use dissolved carbon dioxide in photosynthesis, moving carbon from the ocean water (hydrosphere) into living things (biosphere)."
  },
  {
   "id": "w2q20",
   "code": "3.1.9-12.A",
   "topic": "protein-shape",
   "prompt": "Why does a protein's shape matter?",
   "options": [
    "Its shape determines its function.",
    "Shape has no effect on what a protein does.",
    "All proteins have the same shape.",
    "Proteins never change shape."
   ],
   "answer": 0,
   "hint": "A protein's job depends on how it folds.",
   "explain": "A protein folds into a specific shape, and that shape lets it do its job. Change the shape and the job is lost."
  }
 ],
 "pairs": [
  {
   "name": "Photosynthesis or cellular respiration?",
   "explain": "Photosynthesis stores light energy in sugar and takes in carbon dioxide. Cellular respiration breaks down sugar with oxygen and releases energy and carbon dioxide.",
   "members": [
    {
     "label": "Photosynthesis",
     "level": "2-2",
     "ids": [
      "w2q36",
      "w2q86"
     ]
    },
    {
     "label": "Cellular respiration",
     "level": "2-3",
     "ids": [
      "w2q37",
      "w2q70"
     ]
    }
   ]
  },
  {
   "name": "With oxygen or without oxygen?",
   "explain": "With oxygen (aerobic), cells release much more energy from sugar. Without oxygen (anaerobic), some cells, like yeast, release only a little.",
   "members": [
    {
     "label": "With oxygen",
     "level": "2-3",
     "ids": [
      "w2q88",
      "w2q91"
     ]
    },
    {
     "label": "Without oxygen",
     "level": "2-4",
     "ids": [
      "w2q93",
      "w2q94"
     ]
    }
   ]
  },
  {
   "name": "Energy flow or matter cycling?",
   "explain": "Energy flows one way and only about 10% passes up each level. Matter, like carbon, is recycled again and again.",
   "members": [
    {
     "label": "Energy flow",
     "level": "2-5",
     "ids": [
      "w2q47",
      "w2q74"
     ]
    },
    {
     "label": "Matter cycling",
     "level": "2-5",
     "ids": [
      "w2q52",
      "w2q76"
     ]
    }
   ]
  }
 ],
 "become": [
  {
   "id": "b-glucose2",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "you": "a glucose molecule inside a working muscle cell",
   "short": "Glucose",
   "color": "#ffd98a",
   "goal": "Which path releases your energy so the muscle can use it?",
   "doors": [
    {
     "kind": "flow",
     "label": "React with oxygen: bonds break, CO₂ and water form",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Wait for sunlight to split me",
     "ok": false,
     "why": "Light is used to MAKE sugar in photosynthesis. Cells release energy from sugar without light, day and night."
    },
    {
     "kind": "flow",
     "label": "Disappear into pure energy",
     "ok": false,
     "why": "Matter is not destroyed. Your atoms end up in carbon dioxide and water."
    }
   ],
   "explain": "In cellular respiration, the bonds in glucose and oxygen are broken and new bonds form in carbon dioxide and water. The net result is a release of energy the cell can use."
  },
  {
   "id": "b-sugar-j",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "you": "a sugar molecule inside a yeast cell, deep in bread dough with almost no oxygen",
   "short": "Sugar",
   "color": "#ffd98a",
   "goal": "How will the yeast release some of your energy?",
   "doors": [
    {
     "kind": "flow",
     "label": "Fermentation: no oxygen, makes CO₂ gas",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Aerobic respiration with oxygen",
     "ok": false,
     "why": "Deep in the dough the oxygen has run out, so the yeast cannot use aerobic respiration."
    },
    {
     "kind": "flow",
     "label": "Photosynthesis",
     "ok": false,
     "why": "Photosynthesis MAKES sugar using light. Yeast is a fungus and cannot do it."
    }
   ],
   "explain": "Without oxygen, yeast break down sugar by fermentation. It releases only a little energy, and the carbon dioxide gas it makes forms the bubbles that make bread rise."
  },
  {
   "id": "b-carbon-j",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "you": "a carbon atom in a dead leaf that fell into a waterlogged bog",
   "short": "Carbon",
   "color": "#9aa0a8",
   "goal": "What most likely happens to you?",
   "doors": [
    {
     "kind": "flow",
     "label": "Stay stored in peat for a long time",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Escape at once as carbon dioxide",
     "ok": false,
     "why": "Most decomposers work fastest WITH oxygen. In a low-oxygen bog, decay is very slow, so carbon stays stored."
    },
    {
     "kind": "flow",
     "label": "Turn into a nitrogen atom",
     "ok": false,
     "why": "Atoms do not change into other elements in living systems. Carbon stays carbon."
    }
   ],
   "explain": "Waterlogged bogs have little oxygen, so decomposers break down dead plants very slowly. Partly decayed plants pile up as peat, storing carbon for a long time. Matter still cycles, just slowly."
  }
 ],
 "catches": [
  {
   "id": "c-photo",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "short": "Photosynthesis",
   "title": "In the leaf: load what photosynthesis uses, then collect what it makes.",
   "cueLabel": "Need",
   "builtLabel": "Loaded",
   "cueWord": "slot",
   "tokenWord": "molecule",
   "rule": "Photosynthesis: carbon dioxide + water + light energy → glucose + oxygen",
   "choices": [
    "Carbon dioxide",
    "Water",
    "Light energy",
    "Glucose",
    "Oxygen",
    "Soil",
    "Nitrogen"
   ],
   "steps": [
    {
     "cue": "Gas taken in",
     "need": "Carbon dioxide"
    },
    {
     "cue": "From the roots",
     "need": "Water"
    },
    {
     "cue": "Energy in",
     "need": "Light energy"
    },
    {
     "cue": "Sugar made",
     "need": "Glucose"
    },
    {
     "cue": "Gas released",
     "need": "Oxygen"
    }
   ],
   "hint": "Check the equation: carbon dioxide + water + light energy → glucose + oxygen.",
   "explain": "Photosynthesis: carbon dioxide + water + light energy → glucose + oxygen. Light energy is stored as chemical energy in glucose.",
   "clearTrail": true
  },
  {
   "id": "c-oxy",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "short": "Oxygen or not?",
   "title": "For each place, grab how cells there release energy: with oxygen or without it.",
   "cueLabel": "Place",
   "builtLabel": "Sorted",
   "cueWord": "place",
   "tokenWord": "answer",
   "rule": "With oxygen (aerobic), cells release the most energy from sugar. Without oxygen (anaerobic), some cells release a little energy anyway.",
   "choices": [
    "With oxygen",
    "Without oxygen",
    "Only with light"
   ],
   "steps": [
    {
     "cue": "A leaf cell on a breezy day",
     "need": "With oxygen"
    },
    {
     "cue": "Yeast deep inside bread dough",
     "need": "Without oxygen"
    },
    {
     "cue": "Bacteria in deep, waterlogged mud",
     "need": "Without oxygen"
    },
    {
     "cue": "A resting person's heart muscle",
     "need": "With oxygen"
    },
    {
     "cue": "Sprinting leg muscles that run short of oxygen",
     "need": "Without oxygen"
    }
   ],
   "hint": "Is there oxygen in that place, or has it run out?",
   "wrong": {
    "Only with light": "Releasing energy from sugar does not need light. Light is used to MAKE sugar in photosynthesis."
   },
   "explain": "Cells with plenty of oxygen use aerobic respiration. In dough, deep mud, or a muscle that runs short of oxygen, some cells release energy without oxygen."
  },
  {
   "id": "c-resp",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "short": "Cellular respiration",
   "title": "In a body cell, with oxygen: load what respiration uses, then collect what it makes.",
   "cueLabel": "Need",
   "builtLabel": "Loaded",
   "cueWord": "slot",
   "tokenWord": "molecule",
   "rule": "Cellular respiration (with oxygen): glucose + oxygen → carbon dioxide + water + energy",
   "choices": [
    "Glucose",
    "Oxygen",
    "Carbon dioxide",
    "Water",
    "Energy",
    "Light energy",
    "Nitrogen"
   ],
   "steps": [
    {
     "cue": "Sugar used",
     "need": "Glucose"
    },
    {
     "cue": "Gas used",
     "need": "Oxygen"
    },
    {
     "cue": "Gas released",
     "need": "Carbon dioxide"
    },
    {
     "cue": "Liquid made",
     "need": "Water"
    },
    {
     "cue": "Released for the cell to use",
     "need": "Energy"
    }
   ],
   "hint": "Check the model: glucose + oxygen → carbon dioxide + water + energy.",
   "wrong": {
    "Light energy": "Cellular respiration does not need light. It runs day and night in every cell."
   },
   "explain": "Cellular respiration: glucose + oxygen → carbon dioxide + water, releasing energy. With oxygen, cells release the most energy from each sugar molecule.",
   "clearTrail": true
  },
  {
   "id": "c-carbon",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "short": "Carbon cycle",
   "title": "Run the carbon cycle: grab the process that moves carbon each way.",
   "cueLabel": "Carbon moves",
   "builtLabel": "Cycle",
   "cueWord": "arrow",
   "tokenWord": "process",
   "sep": " → ",
   "rule": "Carbon moves among living things (biosphere), the air (atmosphere), the oceans (hydrosphere), and rocks, soil, and fossil fuels (geosphere).",
   "choices": [
    "Photosynthesis",
    "Cellular respiration",
    "Decomposition",
    "Combustion",
    "Dissolving",
    "Melting"
   ],
   "steps": [
    {
     "cue": "Air → plants",
     "need": "Photosynthesis"
    },
    {
     "cue": "Living things → air",
     "need": "Cellular respiration"
    },
    {
     "cue": "Dead matter → soil and air",
     "need": "Decomposition"
    },
    {
     "cue": "Fossil fuels → air",
     "need": "Combustion"
    },
    {
     "cue": "Air → ocean water",
     "need": "Dissolving"
    }
   ],
   "hint": "Which process moves carbon in the direction of the highlighted arrow?",
   "wrong": {
    "Melting": "Melting turns ice into liquid water. It does not move carbon."
   },
   "explain": "Photosynthesis pulls carbon from the air; respiration, decomposition, and burning return it; and the oceans absorb carbon dioxide from the air. Matter cycles."
  }
 ],
 "balances": [
  {
   "id": "bal-carbon",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "kind": "boss",
   "name": "The Carbon Imbalance",
   "title": "The Carbon Imbalance keeps pushing carbon dioxide into the air and pulling it out. Bring the air back into balance and hold it there.",
   "what": "Carbon dioxide in the air",
   "unit": "units",
   "start": 50,
   "min": 0,
   "max": 100,
   "band": [
    43,
    57
   ],
   "danger": [
    22,
    78
   ],
   "hold": 4,
   "push": 3.6,
   "hp": 4,
   "set": 50,
   "controls": [
    {
     "label": "Photosynthesis (plants take in CO₂)",
     "delta": -11
    },
    {
     "label": "Plant a forest",
     "delta": -8
    },
    {
     "label": "Cellular respiration (releases CO₂)",
     "delta": 11
    },
    {
     "label": "Decomposers break down dead matter",
     "delta": 8
    }
   ],
   "wrongHot": "There is already too much carbon dioxide in the air. That process releases even more.",
   "wrongCold": "There is already too little carbon dioxide. That process removes even more.",
   "tooHigh": "Too much carbon dioxide! Use a process that takes it out of the air.",
   "tooLow": "Too little carbon dioxide! Use a process that releases it.",
   "explain": "Photosynthesis removes carbon dioxide from the air; respiration and decomposition return it. Together they keep the carbon cycle in balance."
  }
 ],
 "data": [
  {
   "id": "d-breath",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "title": "Carbon dioxide breathed out during exercise (illustrative data)",
   "xlabel": "Activity",
   "ylabel": "Carbon dioxide breathed out (liters per minute)",
   "categories": [
    "Resting",
    "Walking",
    "Jogging",
    "Sprinting"
   ],
   "values": [
    0.3,
    0.9,
    1.9,
    3.1
   ],
   "questions": [
    {
     "prompt": "During which activity did the body release the MOST carbon dioxide?",
     "answer": 3,
     "hint": "Find the tallest bar.",
     "explain": "Sprinting muscles use the most energy, so their cells carry out the most cellular respiration and release the most carbon dioxide."
    },
    {
     "prompt": "During which activity were the body's cells carrying out the LEAST cellular respiration?",
     "answer": 0,
     "hint": "Less carbon dioxide means less respiration.",
     "explain": "At rest the body uses the least energy, so the least carbon dioxide is released."
    },
    {
     "prompt": "Oxygen use rises along with carbon dioxide release. During which activity would this person use the most oxygen?",
     "answer": 3,
     "hint": "Oxygen and glucose are the inputs of cellular respiration.",
     "explain": "More respiration uses more oxygen, so oxygen use is highest when sprinting."
    }
   ]
  },
  {
   "id": "d-pyramid",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "title": "Energy in a meadow food web",
   "xlabel": "Trophic level",
   "ylabel": "Energy available (kilocalories)",
   "categories": [
    "Producers",
    "Primary consumers",
    "Secondary consumers",
    "Tertiary consumers"
   ],
   "values": [
    10000,
    1000,
    100,
    10
   ],
   "questions": [
    {
     "prompt": "Which trophic level has the MOST energy available?",
     "answer": 0,
     "hint": "Find the tallest bar.",
     "explain": "Producers capture energy from sunlight, so they have the most energy."
    },
    {
     "prompt": "Which trophic level has the LEAST energy available?",
     "answer": 3,
     "hint": "Only about 10% passes up each level.",
     "explain": "Top predators get only a tiny fraction of the original energy."
    },
    {
     "prompt": "A snake eats frogs. Frogs eat insects. Insects eat leaves. Which trophic level is the snake?",
     "answer": 3,
     "hint": "Count up from the producer: leaves, then insects, then frogs, then...",
     "explain": "Leaves are producers, insects are primary consumers, frogs are secondary consumers, and the snake is a tertiary consumer."
    }
   ]
  }
 ],
 "mazes": [
  {
   "id": "maze-trophic",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "title": "Climb the energy pyramid: go through the doorway for the next level up",
   "start": "Sun",
   "steps": [
    {
     "label": "Producer",
     "hint": "What captures the Sun's energy first?",
     "why": "Producers like grass capture light energy by photosynthesis."
    },
    {
     "label": "Primary consumer",
     "hint": "What eats the producers?",
     "why": "Primary consumers (herbivores) like rabbits eat producers."
    },
    {
     "label": "Secondary consumer",
     "hint": "What eats the herbivores?",
     "why": "Secondary consumers like foxes eat primary consumers."
    },
    {
     "label": "Tertiary consumer",
     "hint": "What eats the secondary consumers?",
     "why": "Tertiary consumers like hawks are near the top of the pyramid."
    }
   ],
   "extra": [
    "Decomposer",
    "Sun"
   ],
   "explain": "Energy flows from the Sun to producers, then up through consumers. Only about 10% passes up each level."
  }
 ],
 "sequences": [
  {
   "id": "s-photo-model",
   "code": "3.1.9-12.E",
   "topic": "photosynthesis",
   "title": "Model photosynthesis: put the steps in order",
   "steps": [
    "Carbon dioxide enters the leaf through tiny pores, and water arrives from the roots",
    "The leaf absorbs light energy from the Sun",
    "The light energy is used to rearrange the atoms of carbon dioxide and water into sugar (glucose)",
    "Oxygen gas is released into the air",
    "The plant uses the stored sugar later for energy and to build its body"
   ],
   "hint": "Start with what goes in. End with what the plant does with what it made.",
   "explain": "Photosynthesis takes in carbon dioxide, water, and light energy, and gives out sugar and oxygen. The light energy is now stored as chemical energy in the sugar."
  },
  {
   "id": "s-resp-path",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "title": "Follow a sugar molecule from your lunch to your moving muscles",
   "steps": [
    "You eat food that contains sugar",
    "Your blood carries the sugar and oxygen to a muscle cell",
    "In the cell, the bonds in the sugar and oxygen are broken",
    "New bonds form in carbon dioxide and water, and energy is released",
    "The muscle uses the energy to move, and the carbon dioxide is carried away and breathed out"
   ],
   "hint": "Food and oxygen must reach the cell before anything can happen.",
   "explain": "Cellular respiration breaks the bonds of food and oxygen and forms carbon dioxide and water, releasing energy the cell uses. Atoms are rearranged, not lost."
  },
  {
   "id": "s-bread",
   "code": "3.1.9-12.J",
   "topic": "anaerobic",
   "title": "Make bread rise: put the steps in order",
   "steps": [
    "Mix yeast, sugar, flour, and water into a dough",
    "The yeast quickly use up the little oxygen in the dough",
    "Without oxygen, the yeast break down sugar by fermentation",
    "Fermentation releases carbon dioxide gas, which forms bubbles",
    "The trapped bubbles make the dough rise"
   ],
   "hint": "The yeast have oxygen at first. What happens when it runs out?",
   "explain": "Once the oxygen in the dough is used up, yeast release a little energy from sugar by fermentation, giving off carbon dioxide that makes the bread rise."
  },
  {
   "id": "s-food-chain",
   "code": "3.1.9-12.H",
   "topic": "energy-flow",
   "title": "Build a food chain: follow the energy",
   "steps": [
    "Sun",
    "Grass (producer)",
    "Grasshopper (primary consumer)",
    "Mouse (secondary consumer)",
    "Snake (tertiary consumer)"
   ],
   "hint": "Start where the energy comes from, then follow who eats whom.",
   "explain": "Energy flows from the Sun to producers, then to each consumer that eats the one before it."
  }
 ],
 "wordbanks": [
  {
   "id": "wb-carbon",
   "code": "3.1.9-12.F",
   "topic": "carbon-builders",
   "words": [
    "sugar",
    "carbon dioxide",
    "nitrogen",
    "rearranged",
    "carbon",
    "created"
   ],
   "sentences": [
    {
     "text": "Glucose is a ___ made of carbon, hydrogen, and oxygen.",
     "answer": "sugar",
     "code": "3.1.9-12.F",
     "explain": "Glucose is the sugar made by photosynthesis."
    },
    {
     "text": "Most of a plant's mass comes from ___ taken in from the air.",
     "answer": "carbon dioxide",
     "code": "3.1.9-12.F",
     "explain": "Carbon from carbon dioxide is built into sugar, then into the rest of the plant."
    },
    {
     "text": "To build amino acids, cells add ___ to the carbon, hydrogen, and oxygen from sugar.",
     "answer": "nitrogen",
     "code": "3.1.9-12.F",
     "explain": "Amino acids contain nitrogen, which sugar does not."
    },
    {
     "text": "When a cell builds new molecules, its atoms are ___, not created or destroyed.",
     "answer": "rearranged",
     "code": "3.1.9-12.F",
     "explain": "Matter is conserved: atoms are only rearranged."
    },
    {
     "text": "___ atoms can form four bonds, so they link into long chains.",
     "answer": "carbon",
     "code": "3.1.9-12.F",
     "explain": "Carbon chains are the backbones of life's large molecules."
    }
   ]
  },
  {
   "id": "wb-resp",
   "code": "3.1.9-12.G",
   "topic": "respiration",
   "words": [
    "oxygen",
    "broken",
    "formed",
    "energy",
    "carbon dioxide",
    "light"
   ],
   "sentences": [
    {
     "text": "Cellular respiration uses glucose and ___.",
     "answer": "oxygen",
     "code": "3.1.9-12.G",
     "explain": "Glucose and oxygen are the inputs."
    },
    {
     "text": "The bonds in glucose and oxygen are ___.",
     "answer": "broken",
     "code": "3.1.9-12.G",
     "explain": "Old bonds in the food and oxygen are broken."
    },
    {
     "text": "New bonds are ___ in carbon dioxide and water.",
     "answer": "formed",
     "code": "3.1.9-12.G",
     "explain": "New compounds form: carbon dioxide and water."
    },
    {
     "text": "The process releases ___ that cells use to move, grow, and stay warm.",
     "answer": "energy",
     "code": "3.1.9-12.G",
     "explain": "The net result is a release of usable energy."
    },
    {
     "text": "Your cells release ___, which you breathe out.",
     "answer": "carbon dioxide",
     "code": "3.1.9-12.G",
     "explain": "Carbon dioxide leaves the body through the lungs."
    }
   ]
  },
  {
   "id": "wb-cycles",
   "code": "3.1.9-12.K",
   "topic": "carbon-cycle",
   "words": [
    "photosynthesis",
    "respiration",
    "decomposers",
    "combustion",
    "oceans",
    "heat"
   ],
   "sentences": [
    {
     "text": "Plants take carbon dioxide out of the air during ___.",
     "answer": "photosynthesis",
     "code": "3.1.9-12.K",
     "explain": "Photosynthesis removes carbon dioxide from the air."
    },
    {
     "text": "Living things return carbon dioxide to the air through cellular ___.",
     "answer": "respiration",
     "code": "3.1.9-12.K",
     "explain": "Cellular respiration releases carbon dioxide."
    },
    {
     "text": "___ break down dead organisms and return carbon and nutrients to the soil and air.",
     "answer": "decomposers",
     "code": "3.1.9-12.H",
     "explain": "Decomposers recycle matter."
    },
    {
     "text": "Burning fossil fuels, called ___, adds carbon dioxide to the air.",
     "answer": "combustion",
     "code": "3.1.9-12.K",
     "explain": "Combustion releases carbon that was stored in the geosphere."
    },
    {
     "text": "A large share of the carbon dioxide in the air dissolves into the ___.",
     "answer": "oceans",
     "code": "3.1.9-12.K",
     "explain": "The oceans (hydrosphere) absorb carbon dioxide from the atmosphere."
    },
    {
     "text": "Energy is not recycled. At each step of a food chain, much of it is lost as ___.",
     "answer": "heat",
     "code": "3.1.9-12.H",
     "explain": "Energy flows one way and leaves the ecosystem as heat."
    }
   ]
  }
 ],
 "scans": [
  {
   "id": "s2-algae",
   "name": "Sea lettuce",
   "look": "lily",
   "color": "#6ac04a",
   "word": "Glucose",
   "def": "A sugar (C₆H₁₂O₆) made by photosynthesis, built from carbon, hydrogen, and oxygen atoms.",
   "note": "This seaweed makes GLUCOSE, a sugar, from carbon dioxide and water using sunlight. The sugar's carbon, hydrogen, and oxygen atoms become the raw material for everything else the seaweed builds."
  },
  {
   "id": "s2-pool",
   "name": "Tide pool water",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Element",
   "def": "A pure substance made of only one kind of atom, such as carbon, nitrogen, or oxygen.",
   "note": "Seawater holds dissolved NUTRIENTS that contain nitrogen, phosphorus, and sulfur. Seaweed takes them in and combines them with the carbon, hydrogen, and oxygen from its sugar."
  },
  {
   "id": "s2-snail",
   "name": "Periwinkle snail",
   "look": "critter",
   "color": "#7a6a5a",
   "word": "Conservation of matter",
   "def": "Atoms are never created or destroyed; they are only rearranged into new molecules.",
   "note": "This snail grazes on seaweed. The atoms in the seaweed's sugar are not destroyed: the snail's cells rearrange them into its own body. Matter is CONSERVED."
  },
  {
   "id": "s2-amino",
   "name": "Amino acid",
   "look": "blob",
   "color": "#ff8fb1",
   "word": "Amino acid",
   "def": "A small carbon-based molecule that also contains nitrogen. Chains of amino acids fold into proteins.",
   "note": "To build an AMINO ACID, a cell takes carbon, hydrogen, and oxygen from sugar and adds nitrogen. Long chains of amino acids fold into proteins."
  },
  {
   "id": "s2-dna",
   "name": "DNA strand",
   "look": "helix",
   "color": "#7fd4ff",
   "word": "Carbon-based molecule",
   "def": "A large molecule built on a backbone of carbon atoms, such as a protein, a fat, or DNA.",
   "note": "DNA is a huge CARBON-BASED MOLECULE. Cells build it from atoms that came from sugar, plus nitrogen and phosphorus taken in from the environment."
  },
  {
   "id": "s2-tree",
   "name": "Tree on the bluff",
   "look": "sprout",
   "color": "#4f9a5a",
   "word": "Biomass",
   "def": "The total mass of living things.",
   "note": "Where does a tree's BIOMASS come from? Mostly from carbon dioxide in the air! Its carbon is built into sugar, then into wood. The soil adds only small amounts of minerals."
  },
  {
   "id": "s2-carbon",
   "name": "Carbon atom",
   "look": "atom",
   "color": "#30343a",
   "word": "Carbon",
   "def": "The element that forms the backbone of life's molecules.",
   "note": "CARBON can make FOUR strong bonds, so it links into long chains, branches, and rings. That is why carbon is the backbone of every big molecule of life."
  },
  {
   "id": "s2-chain",
   "name": "Carbon chain",
   "look": "chain",
   "color": "#ffd166",
   "word": "Carbon chain",
   "def": "Carbon atoms linked one after another, forming the backbone of a large molecule.",
   "note": "Each carbon atom can make four bonds, so carbon atoms link into long CARBON CHAINS, branches, and rings. These chains are the backbones of sugars, fats, proteins, and DNA."
  },
  {
   "id": "s2-photo",
   "name": "Sunlit leaf",
   "look": "lily",
   "color": "#3f9a4a",
   "word": "Photosynthesis",
   "def": "Using light energy to make sugar (glucose) and oxygen from carbon dioxide and water.",
   "note": "PHOTOSYNTHESIS: carbon dioxide + water + light energy → glucose + oxygen. Light energy becomes chemical energy stored in the sugar."
  },
  {
   "id": "s2-stoma",
   "name": "Leaf pore",
   "look": "eggs",
   "color": "#bfe9a0",
   "word": "Stomata",
   "def": "Tiny pores in leaves that let gases in and out.",
   "note": "Tiny pores on leaves called STOMATA let carbon dioxide in and let oxygen and water vapor out."
  },
  {
   "id": "s2-lamp",
   "name": "Grow lamp",
   "look": "sun",
   "color": "#ffd166",
   "word": "Light energy",
   "def": "Energy carried by light. Producers capture it for photosynthesis.",
   "note": "Scientists use lamps to test plants. LIGHT ENERGY powers photosynthesis: the more light a plant gets (up to a limit), the faster it makes sugar."
  },
  {
   "id": "s2-elodea",
   "name": "Pondweed bubbles",
   "look": "sprout",
   "color": "#3f9a4a",
   "word": "Oxygen",
   "def": "A gas that producers release during photosynthesis.",
   "note": "Under a lamp, this pondweed gives off tiny bubbles of OXYGEN. Counting the bubbles is a way to measure how fast photosynthesis is happening."
  },
  {
   "id": "s2-co2",
   "name": "Carbon dioxide",
   "look": "atom",
   "color": "#30343a",
   "word": "Carbon dioxide",
   "def": "A gas (CO₂) that producers take in to build sugar, and that cellular respiration releases.",
   "note": "CARBON DIOXIDE enters leaves through tiny pores. Its carbon and oxygen atoms are rearranged, with water, into sugar."
  },
  {
   "id": "s2-sugar",
   "name": "Sugar crystals",
   "look": "crystal",
   "color": "#fff2c0",
   "word": "Chemical energy",
   "def": "Energy stored in the bonds that hold the atoms of a molecule together.",
   "note": "Sugar holds CHEMICAL ENERGY in its bonds. In photosynthesis, light energy is changed into this stored chemical energy."
  },
  {
   "id": "s2-plant",
   "name": "Plant cell",
   "look": "cell",
   "color": "#7be06a",
   "word": "Producer",
   "def": "An organism that makes its own food.",
   "note": "Plants are PRODUCERS: they make sugar by photosynthesis. Their cells also break down that sugar by cellular respiration to release energy for growing."
  },
  {
   "id": "s2-meal",
   "name": "Digested lunch",
   "look": "blob",
   "color": "#ffd98a",
   "word": "Food molecule",
   "def": "A molecule, such as sugar, that stores chemical energy in its bonds.",
   "note": "In the gut, food is broken down into small FOOD MOLECULES like sugar. The blood carries them to every cell in the body."
  },
  {
   "id": "s2-resp",
   "name": "Muscle cell",
   "look": "rod",
   "color": "#ff9f6e",
   "word": "Cellular respiration",
   "def": "A chemical process that breaks the bonds of food molecules and oxygen, forms carbon dioxide and water, and releases energy.",
   "note": "In CELLULAR RESPIRATION, the bonds in sugar and oxygen are broken and new bonds form in carbon dioxide and water. The net result is energy the cell can use. It runs day and night in every cell."
  },
  {
   "id": "s2-react",
   "name": "Oxygen from the lungs",
   "look": "atom",
   "color": "#9fe0ff",
   "word": "Reactant",
   "def": "A starting material in a chemical reaction.",
   "note": "Glucose and oxygen are the REACTANTS of cellular respiration: the molecules that go in."
  },
  {
   "id": "s2-breath",
   "name": "Breath on a cold day",
   "look": "drop",
   "color": "#e8f8ff",
   "word": "Product",
   "def": "A substance made by a chemical reaction.",
   "note": "Carbon dioxide and water vapor are the PRODUCTS of cellular respiration. You breathe them out, and on a cold day the water vapor condenses into a little cloud you can see."
  },
  {
   "id": "s2-bond",
   "name": "Molecule model",
   "look": "chain",
   "color": "#ffd166",
   "word": "Chemical bond",
   "def": "The link that holds atoms together in a molecule. Breaking and forming bonds moves energy.",
   "note": "In cellular respiration, CHEMICAL BONDS in sugar and oxygen break and new ones form in carbon dioxide and water. The difference is energy released for the cell."
  },
  {
   "id": "s2-runner",
   "name": "Runner",
   "look": "critter",
   "color": "#c8b09a",
   "word": "Energy transfer",
   "def": "Energy moving from one place or molecule to another, such as from sugar to moving muscles.",
   "note": "The energy stored in sugar is TRANSFERRED to the runner's muscles by cellular respiration. Some of it is given off as body heat."
  },
  {
   "id": "s2-aerobic",
   "name": "Leaf in the breeze",
   "look": "lily",
   "color": "#5fbf5a",
   "word": "Aerobic respiration",
   "def": "Releasing energy from food using oxygen. It releases the most energy from each sugar molecule.",
   "note": "Up here the air is full of oxygen, so these cells use AEROBIC RESPIRATION: sugar + oxygen → carbon dioxide + water + lots of energy."
  },
  {
   "id": "s2-mud",
   "name": "Waterlogged mud",
   "look": "rock",
   "color": "#5a4a3a",
   "word": "Anaerobic",
   "def": "Without oxygen.",
   "note": "Down in the flooded mud there is almost no oxygen. Places like this are ANAEROBIC. Some bacteria live here and release energy from food without oxygen."
  },
  {
   "id": "s2-yeast",
   "name": "Yeast",
   "look": "blob",
   "color": "#e8d8a0",
   "word": "Fermentation",
   "def": "A way some cells, like yeast, release a little energy from sugar without oxygen.",
   "note": "Without oxygen, yeast use FERMENTATION. It releases only a little energy, and it gives off carbon dioxide bubbles. That is what makes bread rise."
  },
  {
   "id": "s2-sprint",
   "name": "Sprinter",
   "look": "critter",
   "color": "#e07a30",
   "word": "Anaerobic respiration",
   "def": "Releasing energy from food without oxygen. It releases much less energy than aerobic respiration.",
   "note": "In a hard sprint, muscle cells use oxygen faster than the blood can bring it. For a short time they release some energy without oxygen (ANAEROBIC RESPIRATION), which releases much less energy, so the runner must slow down. Muscle cells do a kind of fermentation, like yeast."
  },
  {
   "id": "s2-compost",
   "name": "Compost pile",
   "look": "mushroom",
   "color": "#8a6a3a",
   "word": "Compost",
   "def": "Dead plant matter broken down by decomposers.",
   "note": "Turning a COMPOST pile mixes in air. With oxygen, decomposers work fast and the pile even warms up. A soggy pile without air breaks down slowly."
  },
  {
   "id": "s2-peat",
   "name": "Bog peat",
   "look": "grass",
   "color": "#6a5a3a",
   "word": "Peat",
   "def": "Partly decayed plant matter that builds up in waterlogged, low-oxygen places like bogs.",
   "note": "In a bog, the water keeps oxygen out, so decomposers work very slowly. Dead plants pile up as PEAT, storing carbon for thousands of years."
  },
  {
   "id": "s2-grass",
   "name": "Grass",
   "look": "grass",
   "color": "#6ac04a",
   "word": "Trophic level",
   "def": "Each feeding step in a food chain.",
   "note": "Grass is a producer, the first TROPHIC LEVEL. All the energy in this meadow starts with producers capturing sunlight."
  },
  {
   "id": "s2-rabbit",
   "name": "Rabbit",
   "look": "critter",
   "color": "#c8b09a",
   "word": "Consumer",
   "def": "An organism that eats other living things for energy.",
   "note": "CONSUMERS eat other living things. This rabbit eats grass, so it is a PRIMARY consumer (an herbivore)."
  },
  {
   "id": "s2-fox",
   "name": "Fox",
   "look": "critter",
   "color": "#e07a30",
   "word": "Predator",
   "def": "An animal that hunts and eats other animals.",
   "note": "The fox eats rabbits: a PREDATOR and a SECONDARY consumer. An eagle that ate the fox would be a tertiary consumer."
  },
  {
   "id": "s2-mushroom",
   "name": "Mushroom",
   "look": "mushroom",
   "color": "#c0503a",
   "word": "Decomposer",
   "def": "An organism that breaks down dead matter.",
   "note": "DECOMPOSERS like fungi and bacteria break down dead things and return nutrients to the soil, so matter can be used again."
  },
  {
   "id": "s2-pyramid",
   "name": "Energy pyramid",
   "look": "stack",
   "color": "#ffd166",
   "word": "Energy pyramid",
   "def": "A diagram showing less energy at each higher trophic level.",
   "note": "Only about 10% of the energy at one level passes to the next. The rest is used to live or lost as heat. That is why an ENERGY PYRAMID is narrow at the top."
  },
  {
   "id": "s2-sun",
   "name": "Sunlight",
   "look": "sun",
   "color": "#ffd166",
   "word": "Energy flow",
   "def": "Energy moving one way through an ecosystem.",
   "note": "Energy enters ecosystems as sunlight and leaves as heat. It FLOWS one way and is not recycled, unlike matter."
  },
  {
   "id": "s2-cycle",
   "name": "Carbon in the air",
   "look": "atom",
   "color": "#30343a",
   "word": "Carbon cycle",
   "def": "The path carbon takes among living things, the air, the oceans, and rocks and fossil fuels.",
   "note": "Carbon moves in a loop: plants take in CO₂ by photosynthesis, animals eat plants, and respiration, decomposition, and burning return CO₂ to the air. Oceans absorb CO₂ too. MATTER cycles."
  },
  {
   "id": "s2-rock",
   "name": "Limestone and coal",
   "look": "rock",
   "color": "#8a8f96",
   "word": "Geosphere",
   "def": "Earth's rocks, soil, and sediments, including carbon stored in fossil fuels and limestone.",
   "note": "The GEOSPHERE stores carbon for millions of years in coal, oil, and limestone. Burning fossil fuels moves that carbon back into the atmosphere."
  }
 ],
 "vocab": [
  {
   "term": "Glucose",
   "def": "A sugar (C₆H₁₂O₆) made by photosynthesis, built from carbon, hydrogen, and oxygen atoms."
  },
  {
   "term": "Element",
   "def": "A pure substance made of only one kind of atom, such as carbon, nitrogen, or oxygen."
  },
  {
   "term": "Conservation of matter",
   "def": "Atoms are never created or destroyed; they are only rearranged into new molecules."
  },
  {
   "term": "Amino acid",
   "def": "A small carbon-based molecule that also contains nitrogen. Chains of amino acids fold into proteins."
  },
  {
   "term": "Carbon-based molecule",
   "def": "A large molecule built on a backbone of carbon atoms, such as a protein, a fat, or DNA."
  },
  {
   "term": "Biomass",
   "def": "The total mass of living things."
  },
  {
   "term": "Carbon",
   "def": "The element that forms the backbone of life's molecules."
  },
  {
   "term": "Carbon chain",
   "def": "Carbon atoms linked one after another, forming the backbone of a large molecule."
  },
  {
   "term": "Photosynthesis",
   "def": "Using light energy to make sugar (glucose) and oxygen from carbon dioxide and water."
  },
  {
   "term": "Stomata",
   "def": "Tiny pores in leaves that let gases in and out."
  },
  {
   "term": "Light energy",
   "def": "Energy carried by light. Producers capture it for photosynthesis."
  },
  {
   "term": "Oxygen",
   "def": "A gas that producers release during photosynthesis."
  },
  {
   "term": "Carbon dioxide",
   "def": "A gas (CO₂) that producers take in to build sugar, and that cellular respiration releases."
  },
  {
   "term": "Chemical energy",
   "def": "Energy stored in the bonds that hold the atoms of a molecule together."
  },
  {
   "term": "Producer",
   "def": "An organism that makes its own food."
  },
  {
   "term": "Food molecule",
   "def": "A molecule, such as sugar, that stores chemical energy in its bonds."
  },
  {
   "term": "Cellular respiration",
   "def": "A chemical process that breaks the bonds of food molecules and oxygen, forms carbon dioxide and water, and releases energy."
  },
  {
   "term": "Reactant",
   "def": "A starting material in a chemical reaction."
  },
  {
   "term": "Product",
   "def": "A substance made by a chemical reaction."
  },
  {
   "term": "Chemical bond",
   "def": "The link that holds atoms together in a molecule. Breaking and forming bonds moves energy."
  },
  {
   "term": "Energy transfer",
   "def": "Energy moving from one place or molecule to another, such as from sugar to moving muscles."
  },
  {
   "term": "Aerobic respiration",
   "def": "Releasing energy from food using oxygen. It releases the most energy from each sugar molecule."
  },
  {
   "term": "Anaerobic",
   "def": "Without oxygen."
  },
  {
   "term": "Fermentation",
   "def": "A way some cells, like yeast, release a little energy from sugar without oxygen."
  },
  {
   "term": "Anaerobic respiration",
   "def": "Releasing energy from food without oxygen. It releases much less energy than aerobic respiration."
  },
  {
   "term": "Compost",
   "def": "Dead plant matter broken down by decomposers."
  },
  {
   "term": "Peat",
   "def": "Partly decayed plant matter that builds up in waterlogged, low-oxygen places like bogs."
  },
  {
   "term": "Trophic level",
   "def": "Each feeding step in a food chain."
  },
  {
   "term": "Consumer",
   "def": "An organism that eats other living things for energy."
  },
  {
   "term": "Predator",
   "def": "An animal that hunts and eats other animals."
  },
  {
   "term": "Decomposer",
   "def": "An organism that breaks down dead matter."
  },
  {
   "term": "Energy pyramid",
   "def": "A diagram showing less energy at each higher trophic level."
  },
  {
   "term": "Energy flow",
   "def": "Energy moving one way through an ecosystem."
  },
  {
   "term": "Carbon cycle",
   "def": "The path carbon takes among living things, the air, the oceans, and rocks and fossil fuels."
  },
  {
   "term": "Geosphere",
   "def": "Earth's rocks, soil, and sediments, including carbon stored in fossil fuels and limestone."
  },
  {
   "term": "Decomposition",
   "def": "Breaking down dead matter, returning carbon and nutrients to the soil and air."
  },
  {
   "term": "Hydrosphere",
   "def": "All of Earth's water, including the oceans, which absorb carbon dioxide from the air."
  },
  {
   "term": "Atmosphere",
   "def": "The layer of air around Earth, which holds carbon dioxide and oxygen."
  }
 ]
});
