/* WORLD 3 QUESTION FILE: Ecosystems: Interdependence and Disruptions
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
     World 3 uses I, L, M, N, O, and V.
   - "topic" groups questions that can rotate with each other at stations and clues.
   - In "questions", "answer" is the position of the correct option, counting from 0
     (0 = first option). The game shuffles the options, so the right answer can always go first.
   - "hint" shows after a wrong try. "explain" shows after the right answer.
   - "tags": ["boss"] marks boss-battle questions.
   - Keep every comma, bracket, and quotation mark in place. */
FieldGuide.registerQuestions(3, {
 "tokens": [
  {
   "id": "limiting",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "prompt": "Collect only LIMITING FACTORS that can keep a deer population from growing",
   "good": [
    "Shortage of food",
    "Predators such as wolves",
    "Disease",
    "Too little space for shelter",
    "A harsh, snowy winter",
    "Shortage of water"
   ],
   "bad": [
    {
     "text": "More fawns born each spring",
     "explain": "A higher birth rate makes the population grow. A limiting factor slows growth."
    },
    {
     "text": "Plenty of food all year",
     "explain": "Plenty of food lets the population grow. A SHORTAGE of food is the limiting factor."
    },
    {
     "text": "Wolves leave the area",
     "explain": "Losing predators removes a limit, so the deer population grows."
    },
    {
     "text": "A mild winter",
     "explain": "A mild winter lets more deer survive, so the population grows."
    }
   ]
  },
  {
   "id": "invasive-traits",
   "code": "3.1.9-12.M",
   "topic": "impacts",
   "prompt": "Collect the traits that help an INVASIVE species take over a new ecosystem",
   "good": [
    "Reproduces quickly",
    "No natural predators in its new home",
    "Eats many kinds of food",
    "Spreads easily to new places",
    "Out-competes native species"
   ],
   "bad": [
    {
     "text": "Has many predators in its new home",
     "explain": "Predators would keep it in check. Invasive species usually escape their natural predators."
    },
    {
     "text": "Can eat only one rare food",
     "explain": "A picky eater spreads slowly. Invaders usually eat many foods."
    },
    {
     "text": "Reproduces once every few years",
     "explain": "Slow reproduction keeps numbers low. Invaders usually reproduce fast."
    },
    {
     "text": "Has lived here for thousands of years",
     "explain": "That describes a native species, not an invasive one."
    }
   ]
  },
  {
   "id": "biodiversity-up",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "Collect only changes that would likely INCREASE the number of species living in this forest",
   "good": [
    "Connecting forest patches with wooded corridors",
    "Leaving dead trees standing for nesting birds",
    "Planting many kinds of native plants",
    "Protecting the stream that runs through the forest",
    "Keeping the forest large and unbroken"
   ],
   "bad": [
    {
     "text": "Splitting the forest into small patches with roads",
     "explain": "Small, separated patches support fewer species. Many animals need large connected areas."
    },
    {
     "text": "Replacing the forest with one kind of tree",
     "explain": "A forest of one tree species offers fewer kinds of food and shelter, so fewer species can live there."
    },
    {
     "text": "Letting an invasive vine cover the trees",
     "explain": "An invasive vine crowds out native plants and the animals that depend on them."
    },
    {
     "text": "Draining the wetland in the forest",
     "explain": "Draining the wetland removes habitat for frogs, insects, and birds, so species are lost."
    }
   ]
  }
 ],
 "sorts": [
  {
   "id": "succession",
   "code": "3.1.9-12.M",
   "topic": "succession",
   "prompt": "Primary or secondary succession?",
   "options": [
    "Primary succession",
    "Secondary succession"
   ],
   "hint": "Primary: starts on bare rock with NO soil. Secondary: starts where soil is still there after a disturbance.",
   "items": [
    {
     "text": "Lava cools into brand-new rock",
     "answer": 0,
     "explain": "New rock has no soil, so life must start from scratch: primary succession."
    },
    {
     "text": "A glacier melts back and leaves bare rock",
     "answer": 0,
     "explain": "Bare rock with no soil: primary succession."
    },
    {
     "text": "A forest fire burns the trees, but the soil remains",
     "answer": 1,
     "explain": "The soil survived, so plants regrow quickly: secondary succession."
    },
    {
     "text": "An abandoned farm field slowly turns into forest",
     "answer": 1,
     "explain": "The field still has soil: secondary succession."
    },
    {
     "text": "A volcano forms a new island in the ocean",
     "answer": 0,
     "explain": "A new island starts as bare rock: primary succession."
    },
    {
     "text": "A hurricane knocks down trees in a forest",
     "answer": 1,
     "explain": "The soil is still there after the storm: secondary succession."
    }
   ]
  },
  {
   "id": "behavior",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Group behavior or individual behavior?",
   "options": [
    "Group behavior",
    "Individual behavior"
   ],
   "hint": "Group behavior: animals of the same species act TOGETHER. Individual behavior: one animal acts on its own.",
   "items": [
    {
     "text": "A school of sardines swirls into a tight ball when a dolphin appears",
     "answer": 0,
     "explain": "The sardines move together as a group, which makes it hard for the dolphin to catch any one fish."
    },
    {
     "text": "A lone octopus hunts crabs at night by itself",
     "answer": 1,
     "explain": "The octopus hunts alone: individual behavior."
    },
    {
     "text": "Wolves take turns chasing an elk until it tires",
     "answer": 0,
     "explain": "The pack works together to catch prey larger than one wolf could take down: group behavior."
    },
    {
     "text": "A hawk circles a field alone, looking for mice",
     "answer": 1,
     "explain": "The hawk hunts on its own: individual behavior."
    },
    {
     "text": "Meerkats take turns standing guard while the others dig for food",
     "answer": 0,
     "explain": "Guards warn the whole group of danger: group behavior."
    },
    {
     "text": "A box turtle digs a nest, lays her eggs, and leaves alone",
     "answer": 1,
     "explain": "The turtle nests by herself and does not stay with a group: individual behavior."
    },
    {
     "text": "Emperor penguins huddle together to stay warm in winter storms",
     "answer": 0,
     "explain": "Huddling together saves body heat for every penguin in the group: group behavior."
    },
    {
     "text": "A spider builds a web and waits by itself for insects",
     "answer": 1,
     "explain": "The spider hunts alone: individual behavior."
    }
   ]
  }
 ],
 "questions": [
  {
   "id": "w3q01",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "All the largemouth bass living in one lake make up a...",
   "options": [
    "population",
    "community",
    "ecosystem",
    "organism"
   ],
   "answer": 0,
   "hint": "One species, one place.",
   "explain": "A population is all the members of ONE species living in the same area."
  },
  {
   "id": "w3q02",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "Which level of ecological organization includes BOTH living things and nonliving things like water and soil?",
   "options": [
    "ecosystem",
    "community",
    "population",
    "organism"
   ],
   "answer": 0,
   "hint": "Which level adds the nonliving surroundings?",
   "explain": "An ecosystem is a community of living things plus the nonliving factors around them, such as water, soil, and sunlight."
  },
  {
   "id": "w3q03",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "A biologist lists every species of plant, insect, bird, and fungus in a meadow. Which level is she studying?",
   "options": [
    "community",
    "population",
    "organism",
    "ecosystem"
   ],
   "answer": 0,
   "hint": "Many different species living together...",
   "explain": "A community is all the populations of different species living in one area."
  },
  {
   "id": "w3q09",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "prompt": "Which nonliving factor most limits how many plants can grow on a dark forest floor?",
   "options": [
    "the amount of sunlight",
    "the number of deer",
    "the kinds of fungi",
    "the number of insects"
   ],
   "answer": 0,
   "hint": "Plants need light for photosynthesis.",
   "explain": "Tall trees block most light, so only a few shade-tolerant plants grow on the forest floor. Light is a nonliving factor that limits plant populations."
  },
  {
   "id": "w3q13",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "prompt": "Two species of birds eat the same kind of seeds in a small area where seeds are limited. What is happening between them?",
   "options": [
    "competition for a limited resource",
    "predation",
    "group hunting",
    "succession"
   ],
   "answer": 0,
   "hint": "They both need the same limited resource.",
   "explain": "When organisms need the same limited resource, they compete. Competition can keep both populations smaller than they would be alone."
  },
  {
   "id": "w3q15",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "prompt": "Wolves are removed from a forest. Soon the deer population grows quickly and young trees are eaten. What does this show?",
   "options": [
    "Predators help control prey populations, which affects the plants too.",
    "Wolves and deer help each other survive.",
    "Deer are a limiting factor for wolves only.",
    "Removing a species never changes an ecosystem."
   ],
   "answer": 0,
   "hint": "Follow the effect down the food chain.",
   "explain": "Predators keep prey populations in check. Without wolves, deer overeat young trees: one change ripples through the ecosystem."
  },
  {
   "id": "w3q16",
   "code": "3.1.9-12.M",
   "topic": "succession",
   "prompt": "After a forest fire, grasses appear first, then shrubs, then trees. What is this process called?",
   "options": [
    "secondary succession",
    "primary succession",
    "eutrophication",
    "competition"
   ],
   "answer": 0,
   "hint": "The soil survived the fire.",
   "explain": "Secondary succession is the regrowth of a community where soil remains after a disturbance."
  },
  {
   "id": "w3q17",
   "code": "3.1.9-12.M",
   "topic": "succession",
   "prompt": "Which organisms are usually the pioneer species on bare rock?",
   "options": [
    "lichens and mosses",
    "oak trees",
    "deer",
    "grasses that need deep soil"
   ],
   "answer": 0,
   "hint": "Pioneers must survive with no soil at all.",
   "explain": "Lichens and mosses can grow on bare rock and slowly break it down to start forming soil."
  },
  {
   "id": "w3q18",
   "code": "3.1.9-12.M",
   "topic": "impacts",
   "prompt": "Zebra mussels, carried to the Great Lakes in ships' ballast water, now crowd out native mussels. What are zebra mussels there?",
   "options": [
    "an invasive species",
    "a keystone species",
    "a native species",
    "a pioneer species"
   ],
   "answer": 0,
   "hint": "They come from somewhere else and cause harm.",
   "explain": "An invasive species is a nonnative species that spreads and harms the ecosystem it moves into."
  },
  {
   "id": "w3q19",
   "code": "3.1.9-12.M",
   "topic": "impacts",
   "prompt": "Fertilizer runoff causes an algal bloom in a lake. Why do many fish die afterward?",
   "options": [
    "Decomposers breaking down the dead algae use up the dissolved oxygen.",
    "The algae eat the fish.",
    "The fertilizer makes the water too cold.",
    "The algae block all the water from moving."
   ],
   "answer": 0,
   "hint": "What do decomposers use up as they work?",
   "explain": "When the algae die, decomposers break them down and use up oxygen in the water. Fish suffocate (eutrophication)."
  },
  {
   "id": "w3q20",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Which action would most help a stream recover from erosion and fertilizer runoff?",
   "options": [
    "planting native trees and shrubs along the banks",
    "clearing all plants from the banks",
    "adding more fertilizer to nearby fields",
    "paving the land next to the stream"
   ],
   "answer": 0,
   "hint": "Roots hold soil and soak up extra nutrients.",
   "explain": "A buffer of native plants holds soil in place and absorbs runoff before it reaches the water."
  },
  {
   "id": "w3q21",
   "code": "3.1.9-12.M",
   "topic": "impacts",
   "prompt": "Why are ecosystems with high biodiversity usually more stable?",
   "options": [
    "If one species declines, other species can fill its role.",
    "They have fewer species to compete.",
    "They never have disturbances.",
    "Every species eats the same food."
   ],
   "answer": 0,
   "hint": "More species means more backups.",
   "explain": "With many species, the loss of one does not break the whole food web. Diverse ecosystems resist and recover from change better."
  },
  {
   "id": "w3q22",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "prompt": "What is carrying capacity?",
   "options": [
    "the largest population an environment can support over time",
    "the number of offspring one female can have",
    "the fastest a population can grow",
    "the number of species in a community"
   ],
   "answer": 0,
   "hint": "Think about how many the environment can 'carry'.",
   "explain": "Carrying capacity is the maximum population size the resources of an environment can support over time."
  },
  {
   "id": "w3q23",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "prompt": "Which is a density-INDEPENDENT limiting factor?",
   "options": [
    "a hurricane",
    "disease spreading in a crowded herd",
    "competition for food",
    "predation"
   ],
   "answer": 0,
   "hint": "Which one hits the same way no matter how crowded the population is?",
   "explain": "Weather events like hurricanes, floods, and fires affect populations regardless of their density."
  },
  {
   "id": "w3q24",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "prompt": "Bacteria with unlimited food and space double every 20 minutes. What kind of growth is this?",
   "options": [
    "exponential growth",
    "logistic growth",
    "zero growth",
    "carrying capacity"
   ],
   "answer": 0,
   "hint": "Doubling again and again makes a J-shaped curve.",
   "explain": "With no limits, a population grows exponentially (a J-shaped curve)."
  },
  {
   "id": "w3q26",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "prompt": "Which change would most likely make a rabbit population INCREASE?",
   "options": [
    "more food becomes available",
    "more foxes move in",
    "a disease spreads",
    "a long drought"
   ],
   "answer": 0,
   "hint": "Which change removes a limit?",
   "explain": "More food raises the carrying capacity, so the rabbit population can grow."
  },
  {
   "id": "w3q25",
   "code": "3.1.9-12.L",
   "topic": "pop-risk",
   "prompt": "A species of frog lives only in one small wetland. Why is it at high risk of extinction?",
   "options": [
    "One disturbance, such as draining the wetland, could wipe out the whole species.",
    "Frogs cannot reproduce in wetlands.",
    "Small habitats have no limiting factors.",
    "It has too much genetic variety."
   ],
   "answer": 0,
   "hint": "All its eggs are in one basket.",
   "explain": "A species with a small range and population can be lost to a single disaster or habitat change."
  },
  {
   "id": "w3q27",
   "code": "3.1.9-12.L",
   "topic": "pop-risk",
   "prompt": "Fishing boats remove cod faster than the cod can reproduce. What is the most likely long-term result?",
   "options": [
    "The cod population declines and may collapse.",
    "The cod population grows faster.",
    "The cod evolve to reproduce instantly.",
    "Nothing changes in the ocean."
   ],
   "answer": 0,
   "hint": "Deaths are outpacing births.",
   "explain": "Overharvesting removes individuals faster than they are replaced, so the population shrinks and can collapse."
  },
  {
   "id": "w3q28",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "Students count wildflowers in four 1-meter squares in a meadow: 8, 12, 10, and 10. What is the average number of wildflowers per square?",
   "options": [
    "10",
    "8",
    "12",
    "40"
   ],
   "answer": 0,
   "hint": "Add the counts, then divide by the number of squares.",
   "explain": "8 + 12 + 10 + 10 = 40, and 40 ÷ 4 = 10 wildflowers per square. Averages make samples easy to compare."
  },
  {
   "id": "w3q29",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "Bird surveys in a forest found 30 species in 2005, 26 in 2010, 22 in 2015, and 18 in 2020. Which conclusion do the data support?",
   "options": [
    "The number of bird species has been going down.",
    "The bird community has stayed the same.",
    "The number of bird species doubles every 5 years.",
    "The forest has more bird species every year."
   ],
   "answer": 0,
   "hint": "Look at the direction the numbers change.",
   "explain": "Each survey found fewer species than the one before: a downward trend in biodiversity."
  },
  {
   "id": "w3q30",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "A large forest is cut into many small, separated patches by new roads. What is the most likely effect on the forest's biodiversity?",
   "options": [
    "It goes down, because many species need large, connected areas.",
    "It goes up, because roads bring in new food.",
    "It stays the same, because the trees are still there.",
    "Only the plants are affected, not the animals."
   ],
   "answer": 0,
   "hint": "Think about animals that need a lot of space.",
   "explain": "Breaking a habitat into small pieces (fragmentation) leaves too little space for many species, so biodiversity usually drops."
  },
  {
   "id": "w3q31",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "prompt": "Pond A has 15 frogs, all of one species. Pond B has 15 frogs from 5 different species. Which statement is correct?",
   "options": [
    "Pond B has higher biodiversity.",
    "Pond A has higher biodiversity.",
    "Both ponds have the same biodiversity.",
    "Neither pond has a frog population."
   ],
   "answer": 0,
   "hint": "Biodiversity counts the variety of species, not just the number of individuals.",
   "explain": "Both ponds have 15 frogs, but Pond B has more kinds of frogs, so its biodiversity is higher."
  },
  {
   "id": "w3q32",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Which is an example of GROUP behavior?",
   "options": [
    "Wolves surround an elk together during a hunt",
    "A lone spider waits in its web",
    "A frog flicks out its tongue to catch a fly",
    "A bear eats berries by itself"
   ],
   "answer": 0,
   "hint": "Look for animals of the same species acting together.",
   "explain": "The wolves cooperate as a pack. The other animals act on their own."
  },
  {
   "id": "w3q33",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Sardines swim in huge, tightly packed schools. How does this behavior most help an individual sardine survive?",
   "options": [
    "A predator has a harder time singling out any one fish.",
    "Each sardine gets more food than it would alone.",
    "Swimming in a school makes each sardine grow bigger.",
    "The school keeps the water warmer."
   ],
   "answer": 0,
   "hint": "Think about a predator trying to catch one fish in a swirling crowd.",
   "explain": "In a large moving school, predators get confused and have trouble picking out one fish, so each fish is safer."
  },
  {
   "id": "w3q34",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Emperor penguins huddle together through the Antarctic winter. Which evidence BEST shows that huddling helps them survive?",
   "options": [
    "Penguins in a huddle lose less body heat than penguins standing alone.",
    "All the penguins in a huddle look alike.",
    "Penguins form huddles only in summer.",
    "Each penguin lays only one egg."
   ],
   "answer": 0,
   "hint": "Evidence should connect the behavior to survival.",
   "explain": "Measurements show huddling penguins lose much less heat, which helps them survive the cold and save energy."
  },
  {
   "id": "w3q35",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Living in a large group has benefits, but also costs. Which is a COST of group living?",
   "options": [
    "Disease spreads more easily between crowded group members.",
    "Members can warn each other about predators.",
    "Members can share the work of finding food.",
    "Predators have trouble picking out one member."
   ],
   "answer": 0,
   "hint": "A cost is a disadvantage.",
   "explain": "Crowding helps disease spread and increases competition for food inside the group. The other choices are benefits."
  },
  {
   "id": "w3q36",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Honeybee workers do not lay eggs, but they defend the hive and feed the queen's young. How does this group behavior help the species survive?",
   "options": [
    "The colony survives and reproduces better, and the young share the workers' genes.",
    "Each worker lives longer because it never works.",
    "The workers become queens later.",
    "It keeps the hive from ever needing food."
   ],
   "answer": 0,
   "hint": "Think about the colony as a team that shares genes.",
   "explain": "By working together, workers help their close relatives (the queen's young) survive and reproduce, so the colony's genes are passed on."
  },
  {
   "id": "w3q37",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "prompt": "A team uses a computer simulation to test two plans for helping a threatened salamander cross a busy road. In the simulation, 20% of salamanders survive with Plan A (warning signs) and 80% survive with Plan B (a tunnel under the road). What should the team conclude?",
   "options": [
    "Plan B is the better solution to try in the real world.",
    "Plan A is the better solution to try.",
    "Both plans work equally well.",
    "Simulations cannot be used to compare plans."
   ],
   "answer": 0,
   "hint": "Compare the survival percentages.",
   "explain": "Plan B kept four times as many salamanders alive in the simulation, so it is the stronger plan to test in the real ecosystem."
  },
  {
   "id": "w3q38",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "prompt": "Why do scientists often test a plan to protect a species in a simulation before trying it in a real ecosystem?",
   "options": [
    "They can compare many solutions quickly without harming the real ecosystem.",
    "Simulations always give the exact same results as nature.",
    "Real ecosystems are never affected by human plans.",
    "It means the plan never needs to be changed."
   ],
   "answer": 0,
   "hint": "Think about risk, time, and cost.",
   "explain": "A simulation lets scientists test and revise solutions safely and cheaply before using them on real populations."
  },
  {
   "id": "w3q39",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "prompt": "A simulation of a lake shows that removing invasive carp raises the number of native fish, but only if the carp are removed every year. How should the team revise its plan?",
   "options": [
    "Remove carp every year instead of just once.",
    "Remove carp once and stop.",
    "Add more carp to the lake.",
    "Stop removing carp because the plan failed."
   ],
   "answer": 0,
   "hint": "Use what the simulation showed about timing.",
   "explain": "The simulation showed the solution only works with yearly removal, so the plan should be revised to include it."
  },
  {
   "id": "w3q40",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "A new highway will cut through the only forest where a rare turtle lives. Which design change would BEST reduce the impact on the turtles?",
   "options": [
    "Build tunnels under the highway with fences that guide turtles to them.",
    "Make the highway wider.",
    "Remove all the trees along the highway.",
    "Raise the speed limit so cars pass quickly."
   ],
   "answer": 0,
   "hint": "Which choice lets turtles reach both sides safely?",
   "explain": "Wildlife tunnels with guide fences reconnect the habitat and keep turtles off the road, reducing deaths."
  }
 ],
 "pairs": [
  {
   "name": "Group or individual behavior?",
   "explain": "Group behavior is animals of the same species acting together (schools, packs, huddles). Individual behavior is one animal acting on its own.",
   "members": [
    {
     "label": "Group behavior",
     "level": "3-2",
     "ids": [
      "behavior.0",
      "behavior.2",
      "behavior.4",
      "w3q32"
     ]
    },
    {
     "label": "Individual behavior",
     "level": "3-2",
     "ids": [
      "behavior.1",
      "behavior.3",
      "behavior.5"
     ]
    }
   ]
  },
  {
   "name": "Primary or secondary succession?",
   "explain": "Primary succession starts on bare rock with no soil. Secondary succession starts where soil survived a disturbance.",
   "members": [
    {
     "label": "Primary succession",
     "level": "3-4",
     "ids": [
      "succession.0",
      "succession.1",
      "succession.4",
      "w3q17"
     ]
    },
    {
     "label": "Secondary succession",
     "level": "3-4",
     "ids": [
      "succession.2",
      "succession.3",
      "succession.5",
      "w3q16"
     ]
    }
   ]
  }
 ],
 "become": [
  {
   "id": "b-capacity",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "you": "a deer in a herd that has grown past what the forest can feed",
   "short": "Deer",
   "color": "#c8a070",
   "goal": "Go through the door that shows what really happens next.",
   "doors": [
    {
     "kind": "flow",
     "label": "Food runs short, so the herd shrinks back toward carrying capacity",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "The herd keeps growing forever",
     "ok": false,
     "why": "No population grows forever. Limited food, space, and water stop the growth."
    },
    {
     "kind": "organelle",
     "label": "The forest grows extra food to match the herd",
     "ok": false,
     "why": "Plants cannot keep up. Overgrazing actually reduces the food supply."
    }
   ],
   "explain": "When a population overshoots its carrying capacity, limiting factors such as food shortage make it drop back."
  },
  {
   "id": "b-pioneer",
   "code": "3.1.9-12.M",
   "topic": "succession",
   "you": "a lichen spore drifting after a volcano erupted",
   "short": "Lichen",
   "color": "#c8e07a",
   "goal": "Land where PRIMARY succession begins.",
   "doors": [
    {
     "kind": "organelle",
     "label": "Bare new lava rock (no soil yet)",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "A burned forest that still has soil",
     "ok": false,
     "why": "If soil remains, regrowth is SECONDARY succession."
    },
    {
     "kind": "vesicle",
     "label": "An old-growth forest",
     "ok": false,
     "why": "An old-growth forest is a mature (climax) community, not a starting point."
    }
   ],
   "explain": "Primary succession starts on bare rock with no soil. Lichens are pioneer species that begin breaking rock into soil."
  },
  {
   "id": "b-solution",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "you": "a conservation biologist",
   "short": "You",
   "color": "#7be0ad",
   "goal": "Choose the action that best protects the lake from algal blooms.",
   "doors": [
    {
     "kind": "flow",
     "label": "Plant native plants along the shore",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "Spread more fertilizer on nearby lawns",
     "ok": false,
     "why": "Extra fertilizer washes into the lake and feeds MORE algae."
    },
    {
     "kind": "organelle",
     "label": "Drain the wetland to build houses",
     "ok": false,
     "why": "Wetlands filter nutrients out of runoff. Draining them makes blooms worse."
    }
   ],
   "explain": "Plant buffers and wetlands soak up nutrients before they reach the water, which helps prevent algal blooms."
  },
  {
   "id": "b-school",
   "code": "3.1.9-12.O",
   "topic": "group",
   "you": "a young sardine on the reef",
   "short": "Sardine",
   "color": "#9fd8ff",
   "goal": "A reef shark is coming! Swim through the door that gives you the best chance to survive.",
   "doors": [
    {
     "kind": "flow",
     "label": "Join the big, tight school of sardines",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "Swim off alone into open water",
     "ok": false,
     "why": "A fish alone is easy for the shark to single out and catch."
    },
    {
     "kind": "organelle",
     "label": "Stay alone and keep eating algae",
     "ok": false,
     "why": "Alone and not watching, you are the easiest target on the reef."
    }
   ],
   "explain": "Schooling is group behavior: many eyes spot danger sooner, and a predator has trouble picking out one fish in a swirling crowd."
  }
 ],
 "catches": [
  {
   "id": "c-levels",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "short": "Levels of ecology",
   "title": "Name the level: grab the level of ecological organization that matches each picture.",
   "cueLabel": "Picture",
   "builtLabel": "Levels named",
   "cueWord": "picture",
   "tokenWord": "level",
   "rule": "Organism, population, community, ecosystem: each level adds more.",
   "choices": [
    "Organism",
    "Population",
    "Community",
    "Ecosystem",
    "Cell",
    "Organ"
   ],
   "steps": [
    {
     "cue": "One deer",
     "need": "Organism"
    },
    {
     "cue": "All the deer in the forest",
     "need": "Population"
    },
    {
     "cue": "Deer, wolves, oaks, and fungi together",
     "need": "Community"
    },
    {
     "cue": "That community plus soil, water, and sunlight",
     "need": "Ecosystem"
    }
   ],
   "hint": "One individual? One species? Many species? Plus nonliving things?",
   "wrong": {
    "Cell": "A cell is inside an organism. Ecology starts at the organism level.",
    "Organ": "An organ is part of one organism. Ecology starts at the organism level."
   },
   "explain": "Organism, population (one species), community (many species), ecosystem (community plus nonliving factors like water, soil, and sunlight)."
  },
  {
   "id": "c-impact",
   "code": "3.1.9-12.N",
   "topic": "impacts",
   "short": "Human impacts",
   "title": "Name the human impact: grab the term that matches each event.",
   "cueLabel": "Event",
   "builtLabel": "Impacts named",
   "cueWord": "event",
   "tokenWord": "impact",
   "rule": "Humans change ecosystems in several different ways.",
   "choices": [
    "Invasive species",
    "Nutrient pollution",
    "Habitat loss",
    "Overharvesting",
    "Succession",
    "Carrying capacity"
   ],
   "steps": [
    {
     "cue": "Zebra mussels arrive in ships' ballast water",
     "need": "Invasive species"
    },
    {
     "cue": "Fertilizer washes from farms into a lake",
     "need": "Nutrient pollution"
    },
    {
     "cue": "A forest is cleared to build a shopping mall",
     "need": "Habitat loss"
    },
    {
     "cue": "Boats catch cod faster than cod reproduce",
     "need": "Overharvesting"
    }
   ],
   "hint": "What is causing the harm in the highlighted event?",
   "wrong": {
    "Succession": "Succession is the natural change of a community over time.",
    "Carrying capacity": "Carrying capacity is the largest population an environment can support, not a human impact."
   },
   "explain": "Invasive species, nutrient pollution, habitat loss, and overharvesting are major ways humans disrupt ecosystems."
  },
  {
   "id": "c-behavior",
   "code": "3.1.9-12.O",
   "topic": "group",
   "short": "Group benefits",
   "title": "Why live in a group? Grab the benefit each group behavior gives its members.",
   "cueLabel": "Behavior",
   "builtLabel": "Benefits found",
   "cueWord": "behavior",
   "tokenWord": "benefit",
   "rule": "Each group behavior helps members survive or reproduce in a different way.",
   "choices": [
    "Hard to catch one fish",
    "Catch bigger prey",
    "Early warning of danger",
    "Saves body heat",
    "Makes its own food",
    "Breaks rock into soil"
   ],
   "steps": [
    {
     "cue": "Fish swim in a tight, swirling school",
     "need": "Hard to catch one fish"
    },
    {
     "cue": "Wolves hunt an elk as a pack",
     "need": "Catch bigger prey"
    },
    {
     "cue": "One meerkat stands guard while the others feed",
     "need": "Early warning of danger"
    },
    {
     "cue": "Emperor penguins huddle in a winter storm",
     "need": "Saves body heat"
    }
   ],
   "hint": "Ask: how does acting together help each animal survive?",
   "wrong": {
    "Makes its own food": "Making food from sunlight is what producers do, not a benefit of group behavior.",
    "Breaks rock into soil": "Breaking rock into soil is what pioneer species like lichens do."
   },
   "explain": "Group behaviors such as schooling, pack hunting, keeping watch, and huddling raise each member's chances to survive and reproduce."
  }
 ],
 "data": [
  {
   "id": "d-deer",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "title": "Deer on an island (carrying capacity is about 100 deer)",
   "xlabel": "Year",
   "ylabel": "Number of deer",
   "categories": [
    "Year 1",
    "Year 3",
    "Year 5",
    "Year 7",
    "Year 9"
   ],
   "values": [
    20,
    60,
    140,
    90,
    100
   ],
   "questions": [
    {
     "prompt": "In which year did the deer population first go ABOVE the carrying capacity of about 100?",
     "answer": 2,
     "hint": "Find the first bar taller than 100.",
     "explain": "In Year 5 there were 140 deer, more than the island can feed. This is called overshoot."
    },
    {
     "prompt": "In which year was the population the smallest?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "Year 1 had only 20 deer. With plenty of food, the population then grew quickly."
    },
    {
     "prompt": "After the overshoot, food ran short. In which year was the population back AT carrying capacity?",
     "answer": 4,
     "hint": "Which bar is closest to 100 after the drop?",
     "explain": "By Year 9 the herd leveled off at about 100, the carrying capacity."
    }
   ]
  },
  {
   "id": "d-oxygen",
   "code": "3.1.9-12.M",
   "topic": "impacts",
   "title": "Dissolved oxygen along a stream that flows past a farm",
   "xlabel": "Sampling site",
   "ylabel": "Dissolved oxygen (mg/L)",
   "categories": [
    "Upstream",
    "Above farm",
    "Beside farm",
    "Below farm",
    "Far downstream"
   ],
   "values": [
    9,
    8,
    3,
    5,
    8
   ],
   "questions": [
    {
     "prompt": "Where was the dissolved oxygen LOWEST?",
     "answer": 2,
     "hint": "Find the shortest bar.",
     "explain": "Oxygen dropped to 3 mg/L beside the farm, where fertilizer runoff enters the stream."
    },
    {
     "prompt": "Trout need at least 6 mg/L of oxygen. Which site is the FIRST place downstream of the farm where trout could live again?",
     "answer": 4,
     "hint": "Look after the farm for a bar at 6 or more.",
     "explain": "Far downstream the oxygen recovered to 8 mg/L, enough for trout."
    },
    {
     "prompt": "Based on the data, where does fertilizer runoff seem to enter the stream?",
     "answer": 2,
     "hint": "Look for the site where the oxygen first drops sharply.",
     "explain": "The oxygen drops sharply beside the farm, a sign that fertilizer enters there. Algae grow fast, die, and decomposers use up the oxygen."
    }
   ]
  },
  {
   "id": "d-patch",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "title": "Bird species counted in forest patches of different sizes (illustrative data)",
   "xlabel": "Size of forest patch",
   "ylabel": "Bird species found",
   "categories": [
    "1 hectare",
    "5 hectares",
    "20 hectares",
    "100 hectares"
   ],
   "values": [
    6,
    11,
    22,
    30
   ],
   "questions": [
    {
     "prompt": "Which forest patch had the MOST bird species?",
     "answer": 3,
     "hint": "Find the tallest bar.",
     "explain": "The 100-hectare patch had 30 species. Larger habitats usually hold more species."
    },
    {
     "prompt": "Which patch had about TWICE as many bird species as the 5-hectare patch?",
     "answer": 2,
     "hint": "The 5-hectare patch had 11 species. What is 11 × 2?",
     "explain": "11 × 2 = 22, which matches the 20-hectare patch."
    },
    {
     "prompt": "A road will cut the 100-hectare forest into small 1-hectare pieces. Based on the data, which patch's bird count will each small piece most likely match?",
     "answer": 0,
     "hint": "Match the new piece size to the data.",
     "explain": "Each piece will be about 1 hectare, and 1-hectare patches had only about 6 species. Fragmentation lowers biodiversity."
    }
   ]
  }
 ],
 "mazes": [
  {
   "id": "maze-succession",
   "code": "3.1.9-12.M",
   "topic": "succession",
   "title": "Primary succession: go through the doorway for the next stage",
   "start": "Bare rock",
   "steps": [
    {
     "label": "Lichens and mosses",
     "hint": "What can grow on bare rock with no soil?",
     "why": "Pioneer species like lichens grow on bare rock and start making soil."
    },
    {
     "label": "Grasses and small plants",
     "hint": "A thin layer of soil has formed. What grows next?",
     "why": "Thin soil lets grasses and small plants take root."
    },
    {
     "label": "Shrubs",
     "hint": "The soil is getting deeper.",
     "why": "Deeper soil supports larger plants like shrubs."
    },
    {
     "label": "Trees (mature forest)",
     "hint": "What grows when the soil is deep and rich?",
     "why": "Trees form a mature (climax) community."
    }
   ],
   "extra": [
    "Bare rock",
    "Fire"
   ],
   "explain": "Primary succession: bare rock, then pioneer lichens and mosses, then grasses, shrubs, and finally trees."
  }
 ],
 "sequences": [
  {
   "id": "s-levels",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "title": "Zoom out: put the levels of ecology in order from smallest to largest",
   "steps": [
    "Organism: one white-tailed deer",
    "Population: all the deer in one forest",
    "Community: all the species living there together",
    "Ecosystem: the community plus water, soil, and sunlight"
   ],
   "hint": "Each level includes the one before it.",
   "explain": "Organism, population, community, ecosystem: each level includes everything in the level before it. Ecologists count organisms at each level to study biodiversity."
  },
  {
   "id": "s-secondary",
   "code": "3.1.9-12.M",
   "topic": "succession",
   "title": "Secondary succession after a forest fire",
   "steps": [
    "Fire clears the forest, but the soil remains",
    "Grasses and wildflowers sprout from the soil",
    "Shrubs and fast-growing trees move in",
    "A mature forest grows back"
   ],
   "hint": "Small, fast-growing plants come back first.",
   "explain": "Because soil remains, secondary succession is faster than primary: grasses, then shrubs, then a forest."
  },
  {
   "id": "s-bloom",
   "code": "3.1.9-12.M",
   "topic": "impacts",
   "title": "How fertilizer runoff kills fish",
   "steps": [
    "Fertilizer runoff adds extra nutrients to a lake",
    "Algae grow fast and form a bloom",
    "The algae die and decomposers break them down",
    "Decomposers use up the oxygen, so fish die"
   ],
   "hint": "It starts with extra nutrients.",
   "explain": "This chain of events is called eutrophication. Reducing nutrient runoff prevents it."
  },
  {
   "id": "s-sim",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "title": "Test a solution with a simulation: help sea turtle hatchlings reach the ocean",
   "steps": [
    "Name the problem: bright beach lights lead hatchlings away from the sea",
    "Build a simulation of the beach, the lights, and the hatchlings",
    "Run it with the old lights, then with turtle-safe lights",
    "Compare how many hatchlings reach the sea, then revise the plan"
   ],
   "hint": "Start with the problem, end by improving the solution.",
   "explain": "Scientists use simulations to test and revise solutions that reduce human impacts on biodiversity before changing the real beach."
  }
 ],
 "balances": [
  {
   "id": "bal-deer",
   "kind": "elevator",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "title": "Manage the deer herd: keep it near the forest's carrying capacity. The platform rises and falls with the herd.",
   "what": "Deer in the forest",
   "unit": "deer",
   "start": 100,
   "min": 40,
   "max": 180,
   "band": [
    85,
    115
   ],
   "danger": [
    55,
    150
   ],
   "hold": 10,
   "drift": 0.8,
   "event": {
    "every": 6,
    "delta": 14,
    "msg": "A mild winter! More fawns survive than usual."
   },
   "controls": [
    {
     "label": "Bring back wolves (predators)",
     "delta": -12
    },
    {
     "label": "Open a short hunting season",
     "delta": -9
    },
    {
     "label": "Plant shrubs the deer can eat",
     "delta": 10
    }
   ],
   "tooHigh": "Too many deer! They will eat the forest bare, and many will starve.",
   "tooLow": "Too few deer! The population could die out.",
   "explain": "Predators, food supply, and other limiting factors keep a population near its carrying capacity."
  },
  {
   "id": "bal-bloom",
   "kind": "boss",
   "name": "The Algal Bloom",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "title": "The Algal Bloom keeps changing the nutrients in the lake. Too few starve the producers; too many feed a bloom that uses up the oxygen. Hold the lake in balance.",
   "what": "Nutrients in the lake",
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
     "label": "Plant a buffer strip of native plants",
     "delta": -11
    },
    {
     "label": "Restore the wetland filter",
     "delta": -8
    },
    {
     "label": "Let leaves and dead plants decompose in the lake",
     "delta": 8
    },
    {
     "label": "Let a natural stream bring in nutrients",
     "delta": 11
    }
   ],
   "wrongHot": "There are already too many nutrients. That adds even more and feeds the algae.",
   "wrongCold": "There are already too few nutrients. That removes even more and starves the producers.",
   "tooHigh": "Too many nutrients! Algae are blooming. Use something that soaks up nutrients.",
   "tooLow": "Too few nutrients! The water plants are starving. Let some nutrients back in.",
   "explain": "Producers need some nutrients, but too many cause algal blooms and dead zones. Wetlands and plant buffers keep the balance."
  }
 ],
 "wordbanks": [
  {
   "id": "wb-habitat",
   "code": "3.1.9-12.L",
   "topic": "counting",
   "words": [
    "population",
    "community",
    "ecosystem",
    "biodiversity",
    "average",
    "predator"
   ],
   "sentences": [
    {
     "text": "All the members of one species in one area form a ___.",
     "answer": "population",
     "code": "3.1.9-12.L",
     "explain": "A population is one species in one place."
    },
    {
     "text": "All the populations of different species living in one area form a ___.",
     "answer": "community",
     "code": "3.1.9-12.L",
     "explain": "A community is many species living together."
    },
    {
     "text": "A community plus the water, soil, and sunlight around it is an ___.",
     "answer": "ecosystem",
     "code": "3.1.9-12.L",
     "explain": "An ecosystem adds the nonliving surroundings."
    },
    {
     "text": "The variety of different species living in an area is its ___.",
     "answer": "biodiversity",
     "code": "3.1.9-12.L",
     "explain": "Bio- means life; diversity means variety."
    },
    {
     "text": "To compare bird counts from 5 sample plots, add them and divide by 5 to find the ___.",
     "answer": "average",
     "code": "3.1.9-12.L",
     "explain": "The average (mean) is the total divided by how many numbers there are."
    }
   ]
  },
  {
   "id": "wb-relations",
   "code": "3.1.9-12.O",
   "topic": "group",
   "words": [
    "school",
    "pack",
    "sentinel",
    "predator",
    "competition",
    "pioneer"
   ],
   "sentences": [
    {
     "text": "Fish swimming together in a tight group form a ___.",
     "answer": "school",
     "code": "3.1.9-12.O",
     "explain": "A school of fish moves as one group."
    },
    {
     "text": "Wolves that live and hunt together as a group are a ___.",
     "answer": "pack",
     "code": "3.1.9-12.O",
     "explain": "A pack can catch prey bigger than one wolf could."
    },
    {
     "text": "A meerkat that keeps watch for danger while the others feed is a ___.",
     "answer": "sentinel",
     "code": "3.1.9-12.O",
     "explain": "A sentinel warns the group, so everyone is safer."
    },
    {
     "text": "A shark that hunts reef fish is a ___.",
     "answer": "predator",
     "code": "3.1.9-12.I",
     "explain": "Predators help keep prey populations from growing too large."
    },
    {
     "text": "Two corals growing toward the same patch of sunlight are in ___.",
     "answer": "competition",
     "code": "3.1.9-12.I",
     "explain": "Competition for limited resources limits population size."
    }
   ]
  },
  {
   "id": "wb-growth",
   "code": "3.1.9-12.I",
   "topic": "limits",
   "words": [
    "carrying capacity",
    "limiting factor",
    "exponential",
    "density-dependent",
    "density-independent",
    "succession"
   ],
   "sentences": [
    {
     "text": "The largest population an environment can support is its ___.",
     "answer": "carrying capacity",
     "code": "3.1.9-12.I",
     "explain": "Carrying capacity is set by food, water, space, and other resources."
    },
    {
     "text": "Anything that keeps a population from growing, like a food shortage, is a ___.",
     "answer": "limiting factor",
     "code": "3.1.9-12.I",
     "explain": "Limiting factors slow or stop population growth."
    },
    {
     "text": "With unlimited resources, a population shows ___ growth (a J-shaped curve).",
     "answer": "exponential",
     "code": "3.1.9-12.I",
     "explain": "Exponential growth keeps speeding up when nothing limits it."
    },
    {
     "text": "Disease spreads faster in a crowded population, so it is a ___ limiting factor.",
     "answer": "density-dependent",
     "code": "3.1.9-12.I",
     "explain": "Density-dependent factors get stronger as a population gets more crowded."
    },
    {
     "text": "A flood affects a population no matter how crowded it is, so it is ___.",
     "answer": "density-independent",
     "code": "3.1.9-12.I",
     "explain": "Weather and natural disasters are density-independent."
    }
   ]
  }
 ],
 "lablocks": [
  {
   "id": "lock-3-5",
   "title": "Lab Lock",
   "clues": [
    {
     "prompt": "Clue 1: A simulation tests four plans to protect a sea turtle nesting beach. Nests saved: Plan 1 = 20, Plan 2 = 35, Plan 3 = 15, Plan 4 = 28. Which plan number saved the MOST nests?",
     "answer": 2,
     "code": "3.1.9-12.V",
     "hint": "Find the largest number of nests saved.",
     "explain": "Plan 2 saved 35 nests, the most, so it is the best plan to try on the real beach."
    },
    {
     "prompt": "Clue 2: How many of these actions REDUCE human impact on a river? Planting native trees on the banks, adding more lawn fertilizer, building a fish ladder at a dam, paving the floodplain, restoring a wetland.",
     "answer": 3,
     "code": "3.1.9-12.N",
     "hint": "Fertilizer and paving make things worse.",
     "explain": "Native trees, a fish ladder, and a restored wetland reduce impacts (3). Extra fertilizer and paving increase them."
    },
    {
     "prompt": "Clue 3: Trout need at least 6 mg/L of oxygen. At how many sites was the oxygen too LOW for trout?",
     "answer": 2,
     "code": "3.1.9-12.M",
     "figure": {
      "type": "bars",
      "categories": [
       "Upstream",
       "Above farm",
       "Beside farm",
       "Below farm",
       "Far down"
      ],
      "values": [
       9,
       8,
       3,
       5,
       8
      ],
      "ylabel": "Dissolved oxygen (mg/L)"
     },
     "hint": "Count the bars below 6.",
     "explain": "Beside the farm (3) and below the farm (5) were too low: 2 sites."
    }
   ],
   "debrief": [
    "Clue 1 linked simulations to solutions: compare plans in a model before changing a real ecosystem.",
    "Clue 2 linked human actions to impacts: some actions harm a river and some help it recover.",
    "Clue 3 linked human impact to data: fertilizer runoff lowered the oxygen near the farm."
   ]
  }
 ],
 "scans": [
  {
   "id": "s3-organism",
   "name": "White-tailed deer",
   "look": "critter",
   "color": "#c8a070",
   "word": "Organism",
   "def": "A single living thing.",
   "note": "One deer is an ORGANISM, the smallest level studied in ecology."
  },
  {
   "id": "s3-population",
   "name": "A herd of deer",
   "look": "eggs",
   "color": "#c8a070",
   "word": "Population",
   "def": "All the members of one species living in the same area.",
   "note": "All the white-tailed deer in this forest form a POPULATION: one species, one place."
  },
  {
   "id": "s3-community",
   "name": "Forest neighbors",
   "look": "frog",
   "color": "#7be0ad",
   "word": "Community",
   "def": "All the populations of different species living in an area.",
   "note": "Deer, oaks, frogs, fungi, and birds living together form a COMMUNITY."
  },
  {
   "id": "s3-ecosystem",
   "name": "The whole pond",
   "look": "lily",
   "color": "#62b6cb",
   "word": "Ecosystem",
   "def": "A community of living things plus the nonliving factors around them.",
   "note": "The pond's living things plus its water, mud, and sunlight make an ECOSYSTEM."
  },
  {
   "id": "s3-habitat",
   "name": "Box turtle",
   "look": "turtle",
   "color": "#a8763c",
   "word": "Habitat",
   "def": "The place where an organism lives.",
   "note": "This box turtle's HABITAT is the moist forest floor: its 'address'."
  },
  {
   "id": "s3-predator",
   "name": "Red fox",
   "look": "critter",
   "color": "#e0743a",
   "word": "Predator",
   "def": "An organism that hunts and eats other organisms.",
   "note": "The fox is a PREDATOR. Predators help keep prey populations from growing too large."
  },
  {
   "id": "s3-prey",
   "name": "Meadow vole",
   "look": "critter",
   "color": "#a08060",
   "word": "Prey",
   "def": "An organism that is hunted and eaten by a predator.",
   "note": "Voles are PREY for foxes, owls, and hawks."
  },
  {
   "id": "s3-compete",
   "name": "Two oak seedlings",
   "look": "sprout",
   "color": "#8aba5a",
   "word": "Competition",
   "def": "A relationship in which organisms struggle for the same limited resource.",
   "note": "These seedlings are in COMPETITION for light, water, and space. Usually only one wins."
  },
  {
   "id": "s3-limit",
   "name": "Dry streambed",
   "look": "drop",
   "color": "#7fd4ff",
   "word": "Limiting factor",
   "def": "Anything that keeps a population from growing, such as limited food, water, or space.",
   "note": "When the stream dries up, water becomes a LIMITING FACTOR for every animal here."
  },
  {
   "id": "s3-capacity",
   "name": "Full meadow",
   "look": "stack",
   "color": "#7be0ad",
   "word": "Carrying capacity",
   "def": "The largest population an environment can support over time.",
   "note": "This meadow can feed only so many rabbits. That number is its CARRYING CAPACITY."
  },
  {
   "id": "s3-expo",
   "name": "Pond bacteria",
   "look": "chain",
   "color": "#c59cff",
   "word": "Exponential growth",
   "def": "Population growth that speeds up because nothing limits it; it makes a J-shaped curve.",
   "note": "With unlimited food, bacteria double again and again: EXPONENTIAL GROWTH."
  },
  {
   "id": "s3-logistic",
   "name": "Settled rabbit warren",
   "look": "rod",
   "color": "#a8c87a",
   "word": "Logistic growth",
   "def": "Population growth that slows and levels off at carrying capacity; it makes an S-shaped curve.",
   "note": "The rabbit population grew fast, then leveled off as food ran short: LOGISTIC GROWTH."
  },
  {
   "id": "s3-dd",
   "name": "Crowded herd",
   "look": "critter",
   "color": "#c8a070",
   "word": "Density-dependent factor",
   "def": "A limiting factor that gets stronger as a population gets more crowded, such as disease or competition.",
   "note": "In a crowded herd, disease spreads faster. That makes disease DENSITY-DEPENDENT."
  },
  {
   "id": "s3-di",
   "name": "Ice storm",
   "look": "ice",
   "color": "#cfefff",
   "word": "Density-independent factor",
   "def": "A limiting factor that affects a population no matter how crowded it is, such as weather or fire.",
   "note": "An ice storm harms a small population and a large one alike: DENSITY-INDEPENDENT."
  },
  {
   "id": "s3-fire",
   "name": "Burned stump",
   "look": "rock",
   "color": "#5a4030",
   "word": "Disturbance",
   "def": "An event, such as a fire, flood, or storm, that changes an ecosystem.",
   "note": "A wildfire is a natural DISTURBANCE. Ecosystems change and recover after disturbances."
  },
  {
   "id": "s3-primary",
   "name": "Cooled lava",
   "look": "rock",
   "color": "#3a3a3a",
   "word": "Primary succession",
   "def": "The development of a community on bare rock where no soil exists.",
   "note": "Life on fresh lava must start from nothing: PRIMARY SUCCESSION."
  },
  {
   "id": "s3-pioneer",
   "name": "Lichen on rock",
   "look": "mushroom",
   "color": "#c8e07a",
   "word": "Pioneer species",
   "def": "The first species to live in a bare area, such as lichens and mosses.",
   "note": "Lichens are PIONEER SPECIES: they grow on bare rock and slowly break it down into soil."
  },
  {
   "id": "s3-secondary",
   "name": "Wildflowers after a fire",
   "look": "sprout",
   "color": "#ff9fbf",
   "word": "Secondary succession",
   "def": "The regrowth of a community where soil remains after a disturbance.",
   "note": "The soil survived the fire, so wildflowers sprout quickly: SECONDARY SUCCESSION."
  },
  {
   "id": "s3-climax",
   "name": "Old oak",
   "look": "grass",
   "color": "#3f7a30",
   "word": "Climax community",
   "def": "A mature, fairly stable community that develops at the end of succession.",
   "note": "An old oak forest is a CLIMAX COMMUNITY: it changes little until the next disturbance."
  },
  {
   "id": "s3-keystone",
   "name": "Beaver",
   "look": "critter",
   "color": "#7a5a3a",
   "word": "Keystone species",
   "def": "A species that has a very large effect on its ecosystem compared with its numbers.",
   "note": "Beaver dams create ponds and wetlands for many other species. Beavers are a KEYSTONE SPECIES."
  },
  {
   "id": "s3-biodiv",
   "name": "Tide pool",
   "look": "eggs",
   "color": "#ff9f6e",
   "word": "Biodiversity",
   "def": "The variety of living things in an area.",
   "note": "This tide pool holds snails, crabs, algae, and sea stars. High BIODIVERSITY makes ecosystems more stable."
  },
  {
   "id": "s3-services",
   "name": "Salt marsh",
   "look": "grass",
   "color": "#9ab86a",
   "word": "Ecosystem services",
   "def": "Benefits that people get from healthy ecosystems, such as clean water, pollination, and food.",
   "note": "The marsh filters water and protects the coast from storms. Those are ECOSYSTEM SERVICES."
  },
  {
   "id": "s3-invasive",
   "name": "Zebra mussel",
   "look": "rock",
   "color": "#d0c0a0",
   "word": "Invasive species",
   "def": "A nonnative species that spreads and harms the ecosystem it moves into.",
   "note": "Zebra mussels arrived in ships' ballast water and crowd out native mussels: an INVASIVE SPECIES."
  },
  {
   "id": "s3-habloss",
   "name": "Cleared land",
   "look": "rock",
   "color": "#a8763c",
   "word": "Habitat loss",
   "def": "The destruction or breaking up of the places where organisms live.",
   "note": "Clearing land for buildings and roads causes HABITAT LOSS, the biggest threat to biodiversity."
  },
  {
   "id": "s3-pollution",
   "name": "Oily water",
   "look": "drop",
   "color": "#5a6470",
   "word": "Pollution",
   "def": "Harmful substances added to the environment.",
   "note": "Oil, plastic, pesticides, and extra nutrients are all forms of POLLUTION."
  },
  {
   "id": "s3-bloom",
   "name": "Green scum",
   "look": "lily",
   "color": "#7ab040",
   "word": "Eutrophication",
   "def": "Extra nutrients in water cause an algal bloom; decomposing algae then use up the oxygen.",
   "note": "Fertilizer runoff fed this bloom. When it dies, oxygen drops and fish die: EUTROPHICATION."
  },
  {
   "id": "s3-climate",
   "name": "Warming coastline",
   "look": "sun",
   "color": "#ffb070",
   "word": "Climate change",
   "def": "A long-term change in Earth's temperature and weather patterns.",
   "note": "Warmer water and rising seas are shifting where species can live: CLIMATE CHANGE."
  },
  {
   "id": "s3-overharvest",
   "name": "Empty fishing net",
   "look": "stack",
   "color": "#62b6cb",
   "word": "Overharvesting",
   "def": "Taking organisms from the wild faster than they can reproduce.",
   "note": "Catching fish faster than they reproduce is OVERHARVESTING. It can make a population collapse."
  },
  {
   "id": "s3-conserve",
   "name": "Restored dune",
   "look": "sprout",
   "color": "#7be0ad",
   "word": "Conservation",
   "def": "Protecting, restoring, and wisely using natural resources and ecosystems.",
   "note": "Replanting dune grass and protecting nesting areas is CONSERVATION in action."
  },
  {
   "id": "s3r-shark",
   "name": "Whitetip reef shark",
   "look": "critter",
   "color": "#8a9aa8",
   "word": "Predator",
   "def": "An organism that hunts and eats other organisms.",
   "note": "This reef shark is a PREDATOR. It hunts fish at night and helps keep prey populations in balance."
  },
  {
   "id": "s3r-prey",
   "name": "School of damselfish",
   "look": "eggs",
   "color": "#5fd0ff",
   "word": "Prey",
   "def": "An organism that is hunted and eaten by a predator.",
   "note": "Damselfish are PREY for sharks, groupers, and eels. Swimming in a school helps them avoid being eaten."
  },
  {
   "id": "s3r-compete",
   "name": "Two corals touching",
   "look": "rock",
   "color": "#ffb070",
   "word": "Competition",
   "def": "A relationship in which organisms struggle for the same limited resource.",
   "note": "Corals COMPETE for space and sunlight. Some even sting their neighbors to win room to grow."
  },
  {
   "id": "s3-richness",
   "name": "Spring wildflowers",
   "look": "sprout",
   "color": "#ff9fbf",
   "word": "Species richness",
   "def": "The number of different species living in an area.",
   "note": "Six kinds of wildflowers grow on this slope. Counting the kinds gives the area's SPECIES RICHNESS, one way to measure biodiversity."
  },
  {
   "id": "s3-sample",
   "name": "Sampling square",
   "look": "stack",
   "color": "#c8e07a",
   "word": "Sample",
   "def": "A small part that is counted to estimate the whole.",
   "note": "Scientists can't count every plant in a forest. They count the plants inside small squares and use those SAMPLES to estimate the whole population."
  },
  {
   "id": "s3-fragment",
   "name": "Forest cut by a road",
   "look": "rock",
   "color": "#a8763c",
   "word": "Habitat fragmentation",
   "def": "Breaking a large habitat into small, separated pieces.",
   "note": "A road split this forest in two. Small, separated pieces support fewer species: HABITAT FRAGMENTATION."
  },
  {
   "id": "s3-average",
   "name": "Field notebook",
   "look": "stack",
   "color": "#ffd166",
   "word": "Average (mean)",
   "def": "The total of a set of numbers divided by how many numbers there are.",
   "note": "Counts of 8, 12, and 10 salamanders under three logs average to 10. AVERAGES make samples easier to compare."
  },
  {
   "id": "s3-trend",
   "name": "Bird survey chart",
   "look": "chain",
   "color": "#7fd4ff",
   "word": "Trend",
   "def": "The general direction that data change over time, such as going up or down.",
   "note": "Bird counts here dropped a little each year: a downward TREND. Trends show how populations change."
  },
  {
   "id": "s3r-school",
   "name": "School of bigeye scad",
   "look": "eggs",
   "color": "#9fd8ff",
   "word": "School",
   "def": "A large group of fish swimming together.",
   "note": "Thousands of fish move as one. Many eyes spot danger sooner, and a predator has trouble picking out one fish."
  },
  {
   "id": "s3r-pod",
   "name": "Spinner dolphin pod",
   "look": "critter",
   "color": "#8aa8c8",
   "word": "Pod",
   "def": "A group of dolphins or whales that live and travel together.",
   "note": "Spinner dolphins rest together in calm water by day, swimming slowly in a tight group so many eyes can watch for sharks. At night the pod hunts together."
  },
  {
   "id": "s3r-spawn",
   "name": "Grouper gathering",
   "look": "critter",
   "color": "#c8a070",
   "word": "Spawning aggregation",
   "def": "A large gathering of fish that meet in one place to reproduce.",
   "note": "Each winter, Nassau groupers gather by the thousands to spawn. Meeting in a group helps more eggs get fertilized, but it also makes the fish easy for fishing boats to catch."
  },
  {
   "id": "s3r-cost",
   "name": "Crowded damselfish colony",
   "look": "eggs",
   "color": "#5fd0ff",
   "word": "Cost of group living",
   "def": "A downside of living in a group, such as more competition for food or faster spread of disease.",
   "note": "These damselfish live close together and fight over the best patches of algae. In a crowd, disease also spreads easily."
  },
  {
   "id": "s3r-alone",
   "name": "Day octopus",
   "look": "critter",
   "color": "#d8a070",
   "word": "Individual behavior",
   "def": "Something one animal does on its own, not as part of a group.",
   "note": "This octopus hunts crabs alone and does not cooperate with other octopuses: INDIVIDUAL BEHAVIOR."
  }
 ],
 "vocab": [
  {
   "term": "Organism",
   "def": "A single living thing."
  },
  {
   "term": "Population",
   "def": "All the members of one species living in the same area."
  },
  {
   "term": "Community",
   "def": "All the populations of different species living in an area."
  },
  {
   "term": "Ecosystem",
   "def": "A community of living things plus the nonliving factors around them."
  },
  {
   "term": "Habitat",
   "def": "The place where an organism lives."
  },
  {
   "term": "Predator",
   "def": "An organism that hunts and eats other organisms."
  },
  {
   "term": "Prey",
   "def": "An organism that is hunted and eaten by a predator."
  },
  {
   "term": "Competition",
   "def": "A relationship in which organisms struggle for the same limited resource."
  },
  {
   "term": "Limiting factor",
   "def": "Anything that keeps a population from growing, such as limited food, water, or space."
  },
  {
   "term": "Carrying capacity",
   "def": "The largest population an environment can support over time."
  },
  {
   "term": "Exponential growth",
   "def": "Population growth that speeds up because nothing limits it; it makes a J-shaped curve."
  },
  {
   "term": "Logistic growth",
   "def": "Population growth that slows and levels off at carrying capacity; it makes an S-shaped curve."
  },
  {
   "term": "Density-dependent factor",
   "def": "A limiting factor that gets stronger as a population gets more crowded, such as disease or competition."
  },
  {
   "term": "Density-independent factor",
   "def": "A limiting factor that affects a population no matter how crowded it is, such as weather or fire."
  },
  {
   "term": "Disturbance",
   "def": "An event, such as a fire, flood, or storm, that changes an ecosystem."
  },
  {
   "term": "Primary succession",
   "def": "The development of a community on bare rock where no soil exists."
  },
  {
   "term": "Pioneer species",
   "def": "The first species to live in a bare area, such as lichens and mosses."
  },
  {
   "term": "Secondary succession",
   "def": "The regrowth of a community where soil remains after a disturbance."
  },
  {
   "term": "Climax community",
   "def": "A mature, fairly stable community that develops at the end of succession."
  },
  {
   "term": "Keystone species",
   "def": "A species that has a very large effect on its ecosystem compared with its numbers."
  },
  {
   "term": "Biodiversity",
   "def": "The variety of living things in an area."
  },
  {
   "term": "Ecosystem services",
   "def": "Benefits that people get from healthy ecosystems, such as clean water, pollination, and food."
  },
  {
   "term": "Invasive species",
   "def": "A nonnative species that spreads and harms the ecosystem it moves into."
  },
  {
   "term": "Habitat loss",
   "def": "The destruction or breaking up of the places where organisms live."
  },
  {
   "term": "Pollution",
   "def": "Harmful substances added to the environment."
  },
  {
   "term": "Eutrophication",
   "def": "Extra nutrients in water cause an algal bloom; decomposing algae then use up the oxygen."
  },
  {
   "term": "Climate change",
   "def": "A long-term change in Earth's temperature and weather patterns."
  },
  {
   "term": "Overharvesting",
   "def": "Taking organisms from the wild faster than they can reproduce."
  },
  {
   "term": "Conservation",
   "def": "Protecting, restoring, and wisely using natural resources and ecosystems."
  },
  {
   "term": "Species richness",
   "def": "The number of different species living in an area."
  },
  {
   "term": "Sample",
   "def": "A small part that is counted to estimate the whole."
  },
  {
   "term": "Habitat fragmentation",
   "def": "Breaking a large habitat into small, separated pieces."
  },
  {
   "term": "Average (mean)",
   "def": "The total of a set of numbers divided by how many numbers there are."
  },
  {
   "term": "Trend",
   "def": "The general direction that data change over time, such as going up or down."
  },
  {
   "term": "School",
   "def": "A large group of fish swimming together."
  },
  {
   "term": "Pod",
   "def": "A group of dolphins or whales that live and travel together."
  },
  {
   "term": "Spawning aggregation",
   "def": "A large gathering of fish that meet in one place to reproduce."
  },
  {
   "term": "Cost of group living",
   "def": "A downside of living in a group, such as more competition for food or faster spread of disease."
  },
  {
   "term": "Individual behavior",
   "def": "Something one animal does on its own, not as part of a group."
  },
  {
   "term": "Group behavior",
   "def": "Behavior in which animals of the same species act together, such as schooling, herding, huddling, or hunting in packs."
  },
  {
   "term": "Simulation",
   "def": "A model, often on a computer, used to test what would happen under different conditions."
  }
 ]
});
