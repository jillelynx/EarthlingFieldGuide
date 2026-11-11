/* WORLD 3 QUESTION FILE: Ecological Relations
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
     World 3 uses I (carrying capacity), L (biodiversity and populations), and M (stable ecosystems and change).
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
  },
  {
   "id": "hare-limits",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "prompt": "Collect the things that can LIMIT a snowshoe hare population",
   "good": [
    "Lynx hunting hares",
    "Owls hunting hares",
    "Twigs running short in winter",
    "Disease spreading in a crowded population",
    "A very deep, icy snow crust"
   ],
   "bad": [
    {
     "text": "Fewer lynx in the forest",
     "explain": "Fewer predators lets the hare population GROW. It removes a limit."
    },
    {
     "text": "Lots of willow shrubs",
     "explain": "Plenty of food helps hares grow in number. A SHORTAGE of food is a limit."
    },
    {
     "text": "More hares born each summer",
     "explain": "More births make the population grow, not shrink."
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
   "id": "cer",
   "code": "3.1.9-12.M",
   "topic": "change",
   "prompt": "Claim, evidence, or reasoning?",
   "options": [
    "Claim",
    "Evidence",
    "Reasoning"
   ],
   "hint": "Claim: the answer. Evidence: the data or observations. Reasoning: the science idea that connects them.",
   "items": [
    {
     "text": "Returning wolves helped some willows in Yellowstone grow back.",
     "answer": 0,
     "explain": "This statement answers the question \"What did the wolves do?\": a claim."
    },
    {
     "text": "Willows near streams grew taller after 1995 than they had in the years before.",
     "answer": 1,
     "explain": "This is a measurement: evidence."
    },
    {
     "text": "Wolves eat elk, and elk eat young willows, so fewer elk browsing means more young willows survive.",
     "answer": 2,
     "explain": "This uses the food web to explain why the evidence supports the claim: reasoning."
    },
    {
     "text": "Beaver dams create ponds that more kinds of birds use.",
     "answer": 0,
     "explain": "This answers a question about what beavers do: a claim."
    },
    {
     "text": "A survey counted 12 bird species before the dams and 21 after.",
     "answer": 1,
     "explain": "Counts from a survey are evidence."
    },
    {
     "text": "A pond adds new habitat, such as open water and wetland plants, so species that need water can now live there.",
     "answer": 2,
     "explain": "This explains WHY the data support the claim: reasoning."
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
   "id": "w3q41",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "prompt": "Snowshoe hares have plenty of food, but their numbers start to fall after the lynx population grows. Which factor is MOST likely limiting the hares now?",
   "options": [
    "Predation by lynx",
    "A shortage of willow twigs",
    "Too much space",
    "More hares being born"
   ],
   "answer": 0,
   "hint": "What changed? The lynx population grew.",
   "explain": "Food is plentiful, so the limiting factor is predation. More lynx eat more hares, which keeps the hare population below what the food alone could support."
  },
  {
   "id": "w3q42",
   "code": "3.1.9-12.L",
   "topic": "predation",
   "prompt": "Records show hare numbers peak first, and lynx numbers peak a year or two later. Which explanation fits this evidence BEST?",
   "options": [
    "Lynx have more food when hares are plentiful, so more lynx kittens survive",
    "Lynx eat willow twigs, so they grow when the plants grow",
    "Hares hunt lynx when hare numbers are high",
    "The two populations are not connected at all"
   ],
   "answer": 0,
   "hint": "What do lynx eat?",
   "explain": "Lynx depend on hares for food. Lots of hares means more lynx kittens survive, so the lynx peak comes after the hare peak."
  },
  {
   "id": "w3q43",
   "code": "3.1.9-12.M",
   "topic": "predation",
   "prompt": "On an island, wolf and moose numbers have gone up and down for over 60 years, but both stayed within a range in stable conditions. Which claim does this evidence support?",
   "options": [
    "Interactions between predators and prey keep numbers relatively consistent when conditions are stable",
    "Predators always wipe out their prey",
    "Prey populations grow forever on islands",
    "Moose numbers are not affected by wolves"
   ],
   "answer": 0,
   "hint": "Both went up and down but stayed within a range.",
   "explain": "The ups and downs stayed within a range. In stable conditions, predator-prey interactions keep numbers relatively consistent (a dynamic equilibrium)."
  },
  {
   "id": "w3q44",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "prompt": "When the island's wolves almost died out, the moose population grew quickly and then ate most of the young balsam fir. What will most likely happen to the moose next if no wolves return?",
   "options": [
    "Food runs short, so many moose starve and the population drops",
    "The moose population keeps growing forever",
    "The moose switch to eating wolves",
    "The balsam fir grows faster because more moose eat it"
   ],
   "answer": 0,
   "hint": "What happens when a population eats its food faster than it grows back?",
   "explain": "Without predators, the moose overshoot the carrying capacity. Then food runs short, and the population crashes."
  },
  {
   "id": "w3q45",
   "code": "3.1.9-12.M",
   "topic": "change",
   "prompt": "A beaver builds a dam, and a dry meadow becomes a pond. Meadow mice leave, and frogs and ducks move in. What does this show?",
   "options": [
    "Changing conditions can result in a new ecosystem",
    "Ecosystems never change",
    "Beavers only affect other beavers",
    "The meadow will have more meadow mice than before"
   ],
   "answer": 0,
   "hint": "The conditions changed from dry land to water.",
   "explain": "The dam changed the conditions so much that a different set of organisms now lives there: a new ecosystem."
  },
  {
   "id": "w3q46",
   "code": "3.1.9-12.M",
   "topic": "change",
   "prompt": "Claim: \"Wolves alone caused the willows in Yellowstone to grow back.\" Which evidence would make you question this claim the MOST?",
   "options": [
    "Willows also grew back in places that wolves rarely visit, after people hunted more elk there",
    "Wolves eat elk",
    "Elk eat young willows",
    "Willows grew taller in some places after 1995"
   ],
   "answer": 0,
   "hint": "Look for evidence that another cause could explain the change.",
   "explain": "If willows grew back where wolves were rare, something else (such as human hunting of elk) may have helped. Strong claims account for other possible causes."
  },
  {
   "id": "w3q47",
   "code": "3.1.9-12.M",
   "topic": "change",
   "prompt": "A coral reef stays healthy for hundreds of years. Then the water stays too warm for several summers, the corals die, and seaweed covers the reef. Which statement BEST explains this?",
   "options": [
    "In stable conditions the reef stayed about the same, but lasting changes in conditions created a new ecosystem",
    "Seaweed always replaces coral after a few years",
    "Warm water helps corals grow",
    "Coral reefs are not ecosystems"
   ],
   "answer": 0,
   "hint": "Compare what happened in stable conditions with what happened after the change.",
   "explain": "Complex interactions kept the reef stable for a long time. The lasting warm water changed the conditions, and a different ecosystem formed."
  },
  {
   "id": "w3q48",
   "code": "3.1.9-12.M",
   "topic": "change",
   "prompt": "Which piece of REASONING best connects wolves to more willows?",
   "options": [
    "Wolves eat elk, and elk eat young willows, so fewer elk means more willows survive",
    "Wolves eat willows, so willows grow faster",
    "Willows grow wherever wolves sleep",
    "Elk eat wolves, so wolves protect willows"
   ],
   "answer": 0,
   "hint": "Follow the food web: who eats whom?",
   "explain": "Reasoning uses a science idea, here the food web, to explain why the evidence supports the claim."
  },
  {
   "id": "w3q49",
   "code": "3.1.9-12.L",
   "topic": "change",
   "prompt": "Students counted bird species along a stream before and after beavers built dams. Before: 12 species. After: 21 species. By how many species did the count increase?",
   "options": [
    "9",
    "12",
    "21",
    "33"
   ],
   "answer": 0,
   "hint": "Subtract: 21 − 12.",
   "explain": "21 − 12 = 9 more species. The new pond and wetland gave more kinds of birds a place to live."
  }
 ],
 "pairs": [
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
   "id": "b-hare",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "you": "a snowshoe hare in a winter with very few lynx and lots of hares",
   "short": "Hare",
   "color": "#f4f0e8",
   "goal": "Go through the door that shows what limits your population next.",
   "doors": [
    {
     "kind": "flow",
     "label": "So many hares eat the twigs that food runs short",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "Nothing limits us, so we grow forever",
     "ok": false,
     "why": "No population grows forever. With few predators, food becomes the limiting factor."
    },
    {
     "kind": "organelle",
     "label": "The willows grow faster the more we eat them",
     "ok": false,
     "why": "Heavy browsing slows the shrubs. They cannot keep up with a huge hare population."
    }
   ],
   "explain": "When predators are few, food supply becomes the limiting factor for the hare population."
  },
  {
   "id": "b-beaver",
   "code": "3.1.9-12.M",
   "topic": "change",
   "you": "a beaver choosing where to build",
   "short": "Beaver",
   "color": "#7a5030",
   "goal": "Go through the door that shows what your dam does to the valley.",
   "doors": [
    {
     "kind": "flow",
     "label": "Floods the meadow and creates a pond that new species move into",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "Changes nothing, because one animal cannot change an ecosystem",
     "ok": false,
     "why": "Beavers are ecosystem engineers. One dam can change a whole valley."
    },
    {
     "kind": "vesicle",
     "label": "Dries up the stream so fewer species live there",
     "ok": false,
     "why": "A dam holds water back, so the area gets wetter, not drier."
    }
   ],
   "explain": "By changing the conditions (more water), a beaver creates a new ecosystem: a pond and wetland."
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
  },
  {
   "id": "d-hare",
   "code": "3.1.9-12.L",
   "topic": "predation",
   "title": "Snowshoe hares counted in one forest (example data that follows the real 10-year cycle)",
   "xlabel": "Year",
   "ylabel": "Hares per square kilometer",
   "categories": [
    "Year 0",
    "Year 2",
    "Year 4",
    "Year 6",
    "Year 8",
    "Year 10"
   ],
   "values": [
    20,
    120,
    250,
    60,
    15,
    110
   ],
   "questions": [
    {
     "prompt": "In which year were hares MOST common?",
     "answer": 2,
     "hint": "Find the tallest bar.",
     "explain": "Year 4 had 250 hares per square kilometer, the peak of the cycle."
    },
    {
     "prompt": "Lynx numbers peak a little AFTER the hares do. Which year is the most likely lynx peak?",
     "answer": 3,
     "hint": "Look for the bar just after the hare peak.",
     "explain": "Lynx peak soon after the hare peak, around Year 6. By then the hares are already falling because so many lynx are hunting them."
    },
    {
     "prompt": "After the crash, in which year were the hares back above 100 and rising again?",
     "answer": 5,
     "hint": "Look after the shortest bar.",
     "explain": "By Year 10 the hares were back to 110 and rising. The cycle repeats, about every 10 years in the real fur-trading records."
    }
   ]
  },
  {
   "id": "d-elk",
   "code": "3.1.9-12.I",
   "topic": "change",
   "title": "Elk counted in a Yellowstone valley each winter (example data)",
   "xlabel": "Year",
   "ylabel": "Number of elk",
   "categories": [
    "1990",
    "1995",
    "2000",
    "2005",
    "2010"
   ],
   "values": [
    16000,
    17000,
    12000,
    9000,
    5000
   ],
   "questions": [
    {
     "prompt": "Wolves returned in 1995. In which year shown were the elk MOST numerous?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "1995 had about 17,000 elk, the highest count, just as the wolves came back."
    },
    {
     "prompt": "In which year was the elk herd the SMALLEST?",
     "answer": 4,
     "hint": "Find the shortest bar.",
     "explain": "2010 had about 5,000 elk, the smallest count shown, 12,000 fewer than in 1995."
    },
    {
     "prompt": "Between which two years did the herd shrink the MOST? Choose the LATER year.",
     "answer": 2,
     "hint": "Compare the drop between each pair of bars.",
     "explain": "From 1995 to 2000 the herd dropped by 5,000 (17,000 to 12,000), the biggest drop. Wolves, bears, human hunting, and dry years all played a part."
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
   "id": "s-cycle",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "title": "Put the hare and lynx cycle in order",
   "steps": [
    "Plenty of twigs: the hare population grows",
    "With so many hares to eat, more lynx kittens survive",
    "Many lynx and too little food: the hare population falls",
    "With few hares left, many lynx starve and their numbers fall",
    "With few lynx and shrubs growing back, the hares grow again"
   ],
   "hint": "Start when hares have plenty of food.",
   "explain": "Food and predators both limit the hares, and the hares limit the lynx. Their numbers rise and fall in a repeating cycle."
  },
  {
   "id": "s-beaver",
   "code": "3.1.9-12.M",
   "topic": "change",
   "title": "How a beaver turns a stream into a new ecosystem",
   "steps": [
    "A beaver builds a dam across a small stream",
    "Water backs up and floods the meadow",
    "Meadow plants die, and water plants and willows grow",
    "Frogs, ducks, fish, and insects move into the new pond and wetland"
   ],
   "hint": "It starts with the dam.",
   "explain": "The dam changes the conditions (water level), and a new ecosystem forms. Beavers are ecosystem engineers."
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
   "id": "bal-moose",
   "kind": "elevator",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "title": "Island moose: keep the herd near what the island's balsam fir can feed. The platform rises and falls with the herd.",
   "what": "Moose on the island",
   "unit": "moose",
   "start": 1000,
   "min": 300,
   "max": 2000,
   "band": [
    850,
    1150
   ],
   "danger": [
    500,
    1600
   ],
   "hold": 10,
   "drift": 8,
   "event": {
    "every": 6,
    "delta": 140,
    "msg": "A mild winter! More moose calves survive than usual."
   },
   "controls": [
    {
     "label": "Bring new wolves to the island",
     "delta": -120
    },
    {
     "label": "A hard winter with deep snow",
     "delta": -90
    },
    {
     "label": "Young fir trees grow back",
     "delta": 100
    }
   ],
   "tooHigh": "Too many moose! They are eating the young fir trees faster than they can grow.",
   "tooLow": "Too few moose! The wolves are running out of food.",
   "explain": "Predators, food supply, and weather keep a population near its carrying capacity."
  },
  {
   "id": "bal-elk",
   "kind": "boss",
   "name": "The Overgrazers",
   "code": "3.1.9-12.M",
   "topic": "change",
   "title": "The Overgrazers are elk eating every young willow along the river. Too many elk strip the willows; too few starve the wolves and bears. Keep the valley in balance.",
   "what": "Elk in the valley",
   "unit": "elk",
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
     "label": "A wolf pack moves into the valley",
     "delta": -11
    },
    {
     "label": "Bears hunt elk calves in spring",
     "delta": -8
    },
    {
     "label": "Willows and grasses grow back",
     "delta": 8
    },
    {
     "label": "A mild winter with little snow",
     "delta": 11
    }
   ],
   "wrongHot": "There are already too many elk. That adds even more.",
   "wrongCold": "There are already too few elk. That removes even more.",
   "tooHigh": "Too many elk! The young willows are being eaten. Use a predator to bring the numbers down.",
   "tooLow": "Too few elk! The predators will go hungry. Let the herd recover.",
   "explain": "Predators, food, and weather interact to keep elk numbers within a range. When the conditions stay stable, so does the valley."
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
  },
  {
   "id": "wb-predation",
   "code": "3.1.9-12.I",
   "topic": "predation",
   "words": [
    "predator",
    "prey",
    "competition",
    "cycle",
    "limiting"
   ],
   "sentences": [
    {
     "text": "A lynx that hunts hares is a ___.",
     "answer": "predator",
     "code": "3.1.9-12.I",
     "explain": "Predators hunt and eat other animals."
    },
    {
     "text": "The snowshoe hare is the lynx's ___.",
     "answer": "prey",
     "code": "3.1.9-12.I",
     "explain": "Prey is the animal that gets eaten."
    },
    {
     "text": "Owls and lynx both need hares, so they are in ___.",
     "answer": "competition",
     "code": "3.1.9-12.I",
     "explain": "Competition happens when organisms need the same limited resource."
    },
    {
     "text": "Hare numbers rise and fall about every 10 years in a population ___.",
     "answer": "cycle",
     "code": "3.1.9-12.L",
     "explain": "A regular rise and fall is a population cycle."
    },
    {
     "text": "When twigs run short, food becomes the ___ factor.",
     "answer": "limiting",
     "code": "3.1.9-12.I",
     "explain": "A limiting factor keeps a population from growing."
    }
   ]
  },
  {
   "id": "wb-ripple",
   "code": "3.1.9-12.M",
   "topic": "change",
   "words": [
    "claim",
    "evidence",
    "reasoning",
    "engineer",
    "cascade"
   ],
   "sentences": [
    {
     "text": "\"Beavers increase bird diversity\" is a ___.",
     "answer": "claim",
     "code": "3.1.9-12.M",
     "explain": "A claim answers a question."
    },
    {
     "text": "Bird counts before and after the dams are ___.",
     "answer": "evidence",
     "code": "3.1.9-12.M",
     "explain": "Evidence is data or observations."
    },
    {
     "text": "Explaining that ponds add new habitat is the ___.",
     "answer": "reasoning",
     "code": "3.1.9-12.M",
     "explain": "Reasoning uses a science idea to connect the evidence to the claim."
    },
    {
     "text": "A beaver changes its habitat so much that it is called an ecosystem ___.",
     "answer": "engineer",
     "code": "3.1.9-12.M",
     "explain": "Ecosystem engineers create conditions other species depend on."
    },
    {
     "text": "Effects that spread down a food web from a top predator are a trophic ___.",
     "answer": "cascade",
     "code": "3.1.9-12.M",
     "explain": "A trophic cascade starts at the top of the food web and spreads down."
    }
   ]
  }
 ],
 "lablocks": [],
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
   "id": "s3-lynx",
   "name": "Canada lynx",
   "look": "critter",
   "color": "#b89a7a",
   "word": "Predator",
   "def": "An animal that hunts and eats other animals.",
   "note": "A Canada lynx is a PREDATOR. Its big furry paws work like snowshoes, and most of what it eats is one prey species: the snowshoe hare."
  },
  {
   "id": "s3-hare",
   "name": "Snowshoe hare",
   "look": "critter",
   "color": "#f4f0e8",
   "word": "Prey",
   "def": "An animal that is hunted and eaten by another animal.",
   "note": "The snowshoe hare is PREY. Its fur turns white in winter and brown in summer, which helps it hide from lynx, owls, and foxes."
  },
  {
   "id": "s3-browse",
   "name": "Willow twigs",
   "look": "sprout",
   "color": "#8a6a3a",
   "word": "Food supply",
   "def": "The amount of food available to a population.",
   "note": "In winter, hares eat twigs and bark. When there are too many hares, they eat the twigs faster than the shrubs can grow back, and the FOOD SUPPLY runs short."
  },
  {
   "id": "s3-cycle",
   "name": "Hare and lynx tracks",
   "look": "rock",
   "color": "#d8e4f0",
   "word": "Population cycle",
   "def": "A regular rise and fall in a population's size over time.",
   "note": "Fur-trading records from Canada show hare and lynx numbers rising and falling in a POPULATION CYCLE about every 10 years. Lynx numbers peak a little after hare numbers do."
  },
  {
   "id": "s3-owl",
   "name": "Great horned owl",
   "look": "critter",
   "color": "#8a6a4a",
   "word": "Competition",
   "def": "When organisms need the same limited resource, such as food or space.",
   "note": "Great horned owls and lynx both hunt snowshoe hares. When hares are scarce, the two predators are in COMPETITION for the same food."
  },
  {
   "id": "s3-moose",
   "name": "Moose",
   "look": "critter",
   "color": "#5a4030",
   "word": "Herbivore population",
   "def": "All the plant-eating animals of one species in an area.",
   "note": "On Isle Royale, an island in Lake Superior, scientists have counted the moose and their wolf predators every winter since 1958. It is the longest-running study of a predator and its prey."
  },
  {
   "id": "s3-isle",
   "name": "Isle Royale wolf",
   "look": "critter",
   "color": "#8a8a90",
   "word": "Predator-prey balance",
   "def": "Predators and prey affect each other's numbers, so both stay within a range over time.",
   "note": "When the island's wolves nearly died out, the moose population grew quickly and ate many of the balsam fir trees. In 2018 and 2019, new wolves were brought to the island to help restore the PREDATOR-PREY BALANCE."
  },
  {
   "id": "s3-range",
   "name": "Balsam fir",
   "look": "sprout",
   "color": "#2f5a3a",
   "word": "Dynamic equilibrium",
   "def": "Numbers keep changing but stay within a range, so the ecosystem stays about the same overall.",
   "note": "Predators, prey, and plants keep changing in number, but in stable conditions they stay within a range. Ecologists call this a DYNAMIC EQUILIBRIUM."
  },
  {
   "id": "s3-wolfpack",
   "name": "Gray wolf",
   "look": "critter",
   "color": "#7a7a80",
   "word": "Top predator",
   "def": "A predator at the top of a food web that no other animal hunts.",
   "note": "Gray wolves were brought back to Yellowstone National Park in 1995 and 1996, about 70 years after the last ones were killed. They are a TOP PREDATOR there."
  },
  {
   "id": "s3-elk",
   "name": "Elk herd",
   "look": "critter",
   "color": "#a87a4a",
   "word": "Trophic cascade",
   "def": "A chain of effects that spreads down a food web when a predator's numbers change.",
   "note": "After wolves returned, elk numbers dropped and elk moved around more. In some places, willows and aspens grew back. A change at the top that spreads down a food web is a TROPHIC CASCADE."
  },
  {
   "id": "s3-claim",
   "name": "Field notebook",
   "look": "stack",
   "color": "#e8d8a8",
   "word": "Claim",
   "def": "A statement that answers a question.",
   "note": "CLAIM: \"Wolves caused the willows to grow back.\" A claim is only as strong as the evidence and reasoning that support it."
  },
  {
   "id": "s3-evidence",
   "name": "Willow measurements",
   "look": "grass",
   "color": "#7aa84a",
   "word": "Evidence",
   "def": "Data or observations that support or refute a claim.",
   "note": "EVIDENCE: measurements of how tall willows grew before and after wolves came back. Scientists still debate how much of the change came from wolves and how much from other causes, such as human hunting, bears, and drought."
  },
  {
   "id": "s3-reasoning",
   "name": "Food web sketch",
   "look": "chain",
   "color": "#c8e0ff",
   "word": "Reasoning",
   "def": "The science idea that explains why the evidence supports the claim.",
   "note": "REASONING: wolves eat elk, elk eat young willows, so fewer elk can mean more willows. Good reasoning connects the evidence to the claim with a science idea."
  },
  {
   "id": "s3-beaver",
   "name": "Beaver",
   "look": "critter",
   "color": "#7a5030",
   "word": "Ecosystem engineer",
   "def": "An organism that greatly changes its habitat, creating conditions other species depend on.",
   "note": "A beaver dam turns a fast stream into a pond. A beaver is an ECOSYSTEM ENGINEER: frogs, ducks, fish, and wetland plants move into the pond it builds."
  },
  {
   "id": "s3-wetland",
   "name": "Beaver pond",
   "look": "lily",
   "color": "#5fa8a0",
   "word": "New ecosystem",
   "def": "A different set of organisms that forms when conditions change a lot.",
   "note": "When the dam floods a meadow, meadow plants die and pond life moves in. Changing conditions can turn one ecosystem into a NEW ECOSYSTEM."
  },
  {
   "id": "s3-bleach",
   "name": "Bleached coral",
   "look": "crystal",
   "color": "#f4f4f0",
   "word": "Changing conditions",
   "def": "Lasting changes in an ecosystem, such as warmer water or less rain.",
   "note": "When ocean water stays too warm for too long, corals lose the algae that live inside them and turn white (bleaching). If the CHANGING CONDITIONS last, seaweed can take over and the reef becomes a different ecosystem."
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
   "term": "Food supply",
   "def": "The amount of food available to a population."
  },
  {
   "term": "Population cycle",
   "def": "A regular rise and fall in a population's size over time."
  },
  {
   "term": "Herbivore population",
   "def": "All the plant-eating animals of one species in an area."
  },
  {
   "term": "Predator-prey balance",
   "def": "Predators and prey affect each other's numbers, so both stay within a range over time."
  },
  {
   "term": "Dynamic equilibrium",
   "def": "Numbers keep changing but stay within a range, so the ecosystem stays about the same overall."
  },
  {
   "term": "Top predator",
   "def": "A predator at the top of a food web that no other animal hunts."
  },
  {
   "term": "Trophic cascade",
   "def": "A chain of effects that spreads down a food web when a predator's numbers change."
  },
  {
   "term": "Claim",
   "def": "A statement that answers a question."
  },
  {
   "term": "Evidence",
   "def": "Data or observations that support or refute a claim."
  },
  {
   "term": "Reasoning",
   "def": "The science idea that explains why the evidence supports the claim."
  },
  {
   "term": "Ecosystem engineer",
   "def": "An organism that greatly changes its habitat, creating conditions other species depend on."
  },
  {
   "term": "New ecosystem",
   "def": "A different set of organisms that forms when conditions change a lot."
  },
  {
   "term": "Changing conditions",
   "def": "Lasting changes in an ecosystem, such as warmer water or less rain."
  }
 ]
});
