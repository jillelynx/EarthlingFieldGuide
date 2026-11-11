/* WORLD 4 QUESTION FILE: Ecosystem Disrupters
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
     World 4 uses N (designing solutions to human impacts), O (group behavior), and V (simulations that test solutions).
     A few items about how disruptions change ecosystems keep their M code.
   - "topic" groups questions that can rotate with each other at stations and clues.
   - In "questions", "answer" is the position of the correct option, counting from 0
     (0 = first option). The game shuffles the options, so the right answer can always go first.
   - "hint" shows after a wrong try. "explain" shows after the right answer.
   - "tags": ["boss"] marks boss-battle questions.
   - Keep every comma, bracket, and quotation mark in place. */
FieldGuide.registerQuestions(4, {
 "tokens": [
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
   "id": "good-fix",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Collect the solutions that REDUCE the harm from invasive species in Pennsylvania",
   "good": [
    "Circle traps for lanternflies",
    "Removing tree-of-heaven",
    "Checking cars for egg masses",
    "Releasing tested adelgid-eating beetles",
    "Planting native trees"
   ],
   "bad": [
    {
     "text": "Sticky bands that also trap birds",
     "explain": "Sticky bands harm birds and helpful insects. Designers refined them into circle traps."
    },
    {
     "text": "Moving firewood to a new county",
     "explain": "Moving firewood can carry insects and eggs to new places."
    },
    {
     "text": "Planting more tree-of-heaven",
     "explain": "Tree-of-heaven is invasive and is the lanternfly's favorite food."
    },
    {
     "text": "Releasing an untested insect",
     "explain": "An untested insect could become a new invasive species."
    }
   ]
  }
 ],
 "sorts": [
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
  },
  {
   "id": "crit-con",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Criterion or constraint for a lanternfly trap?",
   "options": [
    "Criterion (what it must do)",
    "Constraint (a limit)"
   ],
   "hint": "Criteria: goals for success. Constraints: limits such as cost, time, size, or safety rules.",
   "items": [
    {
     "text": "Catches lots of lanternflies",
     "answer": 0,
     "explain": "This is what the trap must DO: a criterion."
    },
    {
     "text": "Costs less than $20",
     "answer": 1,
     "explain": "A cost limit is a constraint."
    },
    {
     "text": "Does not trap birds or bats",
     "answer": 0,
     "explain": "Avoiding harm to wildlife is a goal for success: a criterion."
    },
    {
     "text": "Must be built from materials sold in a hardware store",
     "answer": 1,
     "explain": "Limits on materials are constraints."
    },
    {
     "text": "Must be set up in under 10 minutes",
     "answer": 1,
     "explain": "A time limit is a constraint."
    },
    {
     "text": "Is easy to empty and check",
     "answer": 0,
     "explain": "Easy checking is part of what makes the trap successful: a criterion."
    }
   ]
  },
  {
   "id": "group-evidence",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Does this evidence show that group behavior HELPS survival or reproduction?",
   "options": [
    "Yes, it supports it",
    "No, it does not test it"
   ],
   "hint": "Good evidence compares survival or young raised with and without the group behavior.",
   "items": [
    {
     "text": "Huddling emperor penguins lost less weight over winter than penguins kept apart",
     "answer": 0,
     "explain": "It compares the group behavior with being alone and measures something linked to survival."
    },
    {
     "text": "Penguins are black and white",
     "answer": 1,
     "explain": "Color does not test whether group behavior helps."
    },
    {
     "text": "Adélie nests in the middle of the colony fledged more chicks than nests at the edge",
     "answer": 0,
     "explain": "It measures reproductive success at different places in the group."
    },
    {
     "text": "Krill swarms can be seen from space",
     "answer": 1,
     "explain": "How big a swarm looks does not measure survival."
    },
    {
     "text": "Orca pods that hunt together catch seals more often than a single orca does",
     "answer": 0,
     "explain": "More successful hunts mean more food, which helps survival."
    },
    {
     "text": "Orcas live in every ocean",
     "answer": 1,
     "explain": "Where orcas live does not test whether group hunting helps."
    }
   ]
  }
 ],
 "questions": [
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
  },
  {
   "id": "u4q01",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Scientists measured how much body weight male emperor penguins lost over the winter. Huddling males lost much less than males kept apart. What does this evidence show?",
   "options": [
    "Huddling saves energy, which raises each male's chance of surviving the winter and raising a chick",
    "Huddling makes penguins hungrier",
    "Penguins that stay alone survive better",
    "Body weight has nothing to do with survival"
   ],
   "answer": 0,
   "hint": "Losing less weight means using less stored energy.",
   "explain": "Sharing warmth means each penguin burns less of its fat. More males survive the winter fast and can raise their chicks."
  },
  {
   "id": "u4q02",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "In an Adélie penguin colony, nests at the EDGE lose more eggs and chicks to skuas than nests in the MIDDLE. Which conclusion does this evidence support?",
   "options": [
    "Nesting in a group protects individuals, especially those in the middle",
    "Skuas cannot find penguin colonies",
    "Nesting alone would be safer",
    "Penguins at the edge raise the most chicks"
   ],
   "answer": 0,
   "hint": "Compare edge nests with middle nests.",
   "explain": "Neighbors all around make it harder for a skua to reach the nest, so more middle chicks survive. Group living raises reproductive success."
  },
  {
   "id": "u4q03",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Antarctic krill swim in swarms of millions. A whale gulps a whole mouthful of them at once. Which statement is the best evaluation of swarming?",
   "options": [
    "Swarming lowers each krill's chance of being eaten by smaller predators, but makes the group easy for whales to find",
    "Swarming has only benefits and no costs",
    "Swarming has only costs and no benefits",
    "Swarming does not affect survival at all"
   ],
   "answer": 0,
   "hint": "Group behavior can have both benefits and costs.",
   "explain": "Evaluating evidence means weighing both sides: safety in numbers against small predators, but a huge, easy target for whales."
  },
  {
   "id": "u4q04",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "A pod of orcas makes a wave together to wash a seal off an ice sheet. How does this group behavior help the orcas' species?",
   "options": [
    "Cooperation lets them catch food one orca could not, so more orcas survive and reproduce",
    "It keeps the seals warm",
    "It helps the orcas avoid each other",
    "It makes the ice sheets grow"
   ],
   "answer": 0,
   "hint": "Think about getting food.",
   "explain": "Cooperative hunting gives each orca more food. Well-fed orcas survive and raise more young, so the behavior helps the species."
  },
  {
   "id": "u4q05",
   "code": "3.1.9-12.O",
   "topic": "group",
   "prompt": "Which observation would be the STRONGEST evidence that living in a group helps an animal reproduce?",
   "options": [
    "Animals in groups raise more surviving young than animals of the same species living alone",
    "Animals in groups make more noise",
    "Groups are easy to see from an airplane",
    "Animals in groups sometimes fight over food"
   ],
   "answer": 0,
   "hint": "Reproduce means raising offspring that survive.",
   "explain": "Comparing how many young survive in groups versus alone directly measures reproductive success."
  },
  {
   "id": "u4q06",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "A town wants to stop spotted lanternflies. Sticky bands on trees caught many lanternflies but also caught songbirds. What is the BEST next step?",
   "options": [
    "Refine the design, for example a circle trap with no sticky surface",
    "Use twice as many sticky bands",
    "Stop trying, since no solution is perfect",
    "Cut down every tree in town"
   ],
   "answer": 0,
   "hint": "Keep what worked, fix what caused harm.",
   "explain": "Engineers refine a solution after testing. A circle trap still catches lanternflies but does not catch birds."
  },
  {
   "id": "u4q07",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Which is a CONSTRAINT on a plan to protect hemlock trees from the woolly adelgid?",
   "options": [
    "The town can spend only $5,000 this year",
    "The plan should save as many hemlocks as possible",
    "The plan should keep streams shaded for trout",
    "Hemlocks are Pennsylvania's state tree"
   ],
   "answer": 0,
   "hint": "A constraint is a limit, such as money or time.",
   "explain": "A budget is a limit the solution must work within: a constraint. Saving hemlocks and shading streams are criteria."
  },
  {
   "id": "u4q08",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Before releasing beetles to eat hemlock woolly adelgids, scientists tested whether the beetles would also eat native insects. Why?",
   "options": [
    "So the solution would not create a new problem for native species",
    "To make the beetles hungrier",
    "Because beetles are invasive in every forest",
    "To slow down the project on purpose"
   ],
   "answer": 0,
   "hint": "A good solution reduces harm without causing more.",
   "explain": "Evaluating a solution means checking for side effects. A biological control agent must target the pest, not native species."
  },
  {
   "id": "u4q09",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Lanternflies lay egg masses on cars and trailers. Which solution targets HOW the lanternfly spreads to new places?",
   "options": [
    "Check vehicles and remove egg masses before leaving a quarantine zone",
    "Plant more grapevines",
    "Water the trees more often",
    "Paint trees white"
   ],
   "answer": 0,
   "hint": "How do lanternflies travel long distances?",
   "explain": "People carry egg masses on vehicles without knowing it. Checking vehicles in quarantine zones slows the spread."
  },
  {
   "id": "u4q10",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "prompt": "Two plans to protect a trout stream: Plan A plants trees along the banks. Plan B adds chemicals to kill algae every week. Which plan better reduces the HUMAN impact over the long term?",
   "options": [
    "Plan A, because tree roots soak up runoff before it reaches the stream",
    "Plan B, because chemicals work quickly",
    "Both are the same",
    "Neither, because streams cannot be helped"
   ],
   "answer": 0,
   "hint": "Which plan fixes the cause instead of the symptom?",
   "explain": "Plan A stops nutrients and soil at the source and shades the water. Plan B treats only the symptom and may harm other organisms."
  },
  {
   "id": "u4q11",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "prompt": "A bay simulation predicts that wider tree buffers along streams will raise oxygen in the bay. Real measurements later show oxygen rose less than predicted in very rainy years. What should the scientists do?",
   "options": [
    "Revise the simulation to include heavy rainstorms washing in extra nutrients",
    "Throw away the real measurements",
    "Stop using simulations",
    "Keep the simulation exactly the same"
   ],
   "answer": 0,
   "hint": "When a model does not match real data, change the model.",
   "explain": "Scientists revise a simulation when it does not match real evidence. Adding rainstorms makes its predictions more accurate."
  },
  {
   "id": "u4q12",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "prompt": "In a simulation, you can change the number of oyster reefs, the width of tree buffers, and the amount of fertilizer. To test whether oyster reefs help, what should you do?",
   "options": [
    "Change only the number of oyster reefs and keep the others the same",
    "Change all three at once",
    "Change nothing and watch",
    "Change the fertilizer only"
   ],
   "answer": 0,
   "hint": "Test one variable at a time.",
   "explain": "Changing one variable at a time shows which change caused the result."
  },
  {
   "id": "u4q13",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "prompt": "Why test a plan to protect crabs in a computer simulation before building it in the real bay?",
   "options": [
    "It is fast, cheap, and safe to try many plans and compare them before changing a real ecosystem",
    "Simulations are always 100% correct",
    "Real bays cannot be studied",
    "Simulations do not need any data"
   ],
   "answer": 0,
   "hint": "Think about time, cost, and risk.",
   "explain": "A simulation lets you compare many solutions quickly and without harming the real ecosystem. Real data are still needed to check it."
  }
 ],
 "pairs": [
  {
   "name": "Group or individual behavior?",
   "explain": "Group behavior is animals of the same species acting together (schools, packs, huddles). Individual behavior is one animal acting on its own.",
   "members": [
    {
     "label": "Group behavior",
     "level": "4-2",
     "ids": [
      "behavior.0",
      "behavior.2",
      "behavior.4",
      "w3q32"
     ]
    },
    {
     "label": "Individual behavior",
     "level": "4-2",
     "ids": [
      "behavior.1",
      "behavior.3",
      "behavior.5"
     ]
    }
   ]
  }
 ],
 "become": [
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
  },
  {
   "id": "b-penguin",
   "code": "3.1.9-12.O",
   "topic": "group",
   "you": "an emperor penguin keeping an egg warm in a −40 °C winter storm",
   "short": "Penguin",
   "color": "#2a2a34",
   "goal": "Go through the door that gives you and your chick the best chance.",
   "doors": [
    {
     "kind": "flow",
     "label": "Join the huddle and take turns at the warm center",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "Stand alone so no one bumps your egg",
     "ok": false,
     "why": "Alone, you lose heat fast and burn through your fat, so you and the egg may not survive."
    },
    {
     "kind": "organelle",
     "label": "Walk to the sea to eat and leave the egg on the ice",
     "ok": false,
     "why": "The egg would freeze within minutes on the ice."
    }
   ],
   "explain": "Huddling saves energy. More males survive the winter, and more eggs hatch."
  },
  {
   "id": "b-trap",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "you": "an engineer improving a lanternfly trap",
   "short": "You",
   "color": "#7be0ad",
   "goal": "Go through the door with the best refined design.",
   "doors": [
    {
     "kind": "flow",
     "label": "A mesh funnel (circle trap) that guides climbing lanternflies into a bag",
     "ok": true
    },
    {
     "kind": "pump",
     "label": "A wider, stickier band",
     "ok": false,
     "why": "A stickier band would trap even more birds and helpful insects."
    },
    {
     "kind": "vesicle",
     "label": "Spraying every tree in the county with poison",
     "ok": false,
     "why": "That would kill helpful insects too and cost far too much: it fails the criteria and constraints."
    }
   ],
   "explain": "The circle trap keeps what worked (catching lanternflies) and fixes what failed (trapping wildlife)."
  }
 ],
 "catches": [
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
  },
  {
   "id": "c-groups",
   "code": "3.1.9-12.O",
   "topic": "group",
   "short": "Group benefits",
   "title": "Name the benefit: grab the way each group behavior helps survival.",
   "cueLabel": "Group behavior",
   "builtLabel": "Benefits named",
   "cueWord": "behavior",
   "tokenWord": "benefit",
   "rule": "Groups help members stay warm, stay safe, and find food.",
   "choices": [
    "Saves heat",
    "Safety from predators",
    "Catches more food",
    "Raises more young",
    "Photosynthesis",
    "Carrying capacity"
   ],
   "steps": [
    {
     "cue": "Emperor penguins huddle in a storm",
     "need": "Saves heat"
    },
    {
     "cue": "Krill swim in a giant swarm",
     "need": "Safety from predators"
    },
    {
     "cue": "Orcas make a wave together",
     "need": "Catches more food"
    },
    {
     "cue": "Adélie pairs nest in the middle of the colony",
     "need": "Raises more young"
    }
   ],
   "hint": "What does each animal gain from the group?",
   "wrong": {
    "Photosynthesis": "Photosynthesis is how producers make food, not a group behavior.",
    "Carrying capacity": "Carrying capacity is the largest population an area can support."
   },
   "explain": "Group behaviors help individuals survive and reproduce: saving heat, safety, food, and raising young."
  }
 ],
 "data": [
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
   "id": "d-huddle",
   "code": "3.1.9-12.O",
   "topic": "group",
   "title": "Weight lost by male emperor penguins over the winter (example data)",
   "xlabel": "Group",
   "ylabel": "Weight lost (kg)",
   "categories": [
    "Huddled all winter",
    "Huddled half the time",
    "Kept apart"
   ],
   "values": [
    12,
    16,
    20
   ],
   "questions": [
    {
     "prompt": "Which group lost the LEAST weight?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "Penguins that huddled all winter lost the least (12 kg), because sharing heat burns less body fat."
    },
    {
     "prompt": "Which group would most likely have the HARDEST time surviving the winter fast?",
     "answer": 2,
     "hint": "Which group used up the most stored energy?",
     "explain": "Penguins kept apart lost the most weight (20 kg), so they had the least fat left to survive on."
    },
    {
     "prompt": "Which group lost 8 kg MORE than the penguins that huddled all winter?",
     "answer": 2,
     "hint": "12 + 8 = 20. Which bar shows 20?",
     "explain": "20 − 12 = 8 kg more for the penguins kept apart. Huddling is strong evidence that the group behavior helps survival."
    }
   ]
  },
  {
   "id": "d-sim",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "title": "Simulation results: blue crabs in the bay after 10 years with different plans (simulated numbers)",
   "xlabel": "Plan tested in the simulation",
   "ylabel": "Crabs (millions)",
   "categories": [
    "No change",
    "Tree buffers",
    "Oyster reefs",
    "Buffers + reefs"
   ],
   "values": [
    180,
    240,
    220,
    290
   ],
   "questions": [
    {
     "prompt": "Which plan gave the MOST crabs in the simulation?",
     "answer": 3,
     "hint": "Find the tallest bar.",
     "explain": "Buffers plus reefs gave 290 million crabs, the most."
    },
    {
     "prompt": "Which single plan worked better on its own?",
     "answer": 1,
     "hint": "Compare tree buffers with oyster reefs.",
     "explain": "Tree buffers alone (240) beat oyster reefs alone (220)."
    },
    {
     "prompt": "\"No change\" is the control. Why does the simulation include it?",
     "answer": 0,
     "hint": "You need something to compare the plans with.",
     "explain": "The control shows what happens with no new plan, so you can see how much each plan helps."
    }
   ]
  }
 ],
 "mazes": [],
 "sequences": [
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
  },
  {
   "id": "s-design",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "title": "Designing a solution to an invasive species: put the steps in order",
   "steps": [
    "Define the problem: lanternflies are harming vineyards",
    "List the criteria and constraints",
    "Brainstorm and choose a design, such as a sticky band",
    "Test it and collect data: it also caught birds",
    "Refine the design into a circle trap and test again"
   ],
   "hint": "Start by defining the problem.",
   "explain": "Solutions are designed, tested, evaluated, and refined. Testing showed a problem, so the design was improved."
  },
  {
   "id": "s-simtest",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "title": "Testing a solution in a simulation: put the steps in order",
   "steps": [
    "Build a model of the bay with rivers, nutrients, algae, and oxygen",
    "Run it with no changes as a control",
    "Change one variable: add tree buffers along streams",
    "Compare the results with the control",
    "Check against real data and revise the model if it does not match"
   ],
   "hint": "You need the model and a control before testing a change.",
   "explain": "A simulation tests a solution by changing one variable and comparing it with a control. Real data are used to check and revise the model."
  }
 ],
 "balances": [
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
  },
  {
   "id": "bal-bay",
   "kind": "boss",
   "name": "The Dead Zone",
   "code": "3.1.9-12.V",
   "topic": "simulation",
   "title": "Run the bay simulation! The Dead Zone keeps changing how much algae grows. Too much algae decays and uses up the oxygen; too little starves the oysters and tiny animals that eat it. Test solutions to hold the bay in balance.",
   "what": "Algae in the bay (simulated)",
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
     "label": "Plant tree buffers along Pennsylvania streams",
     "delta": -11
    },
    {
     "label": "Restore oyster reefs that filter algae",
     "delta": -8
    },
    {
     "label": "Add a rainstorm that washes in runoff",
     "delta": 8
    },
    {
     "label": "Let a river bring in its natural nutrients",
     "delta": 11
    }
   ],
   "wrongHot": "There is already too much algae. That adds even more nutrients and feeds it.",
   "wrongCold": "There is already too little algae. That removes even more food for the oysters.",
   "tooHigh": "Too much algae! When it decays it will make a dead zone. Test a solution that soaks up nutrients or filters the water.",
   "tooLow": "Too little algae! Oysters and tiny animals are running out of food. Let some nutrients back in.",
   "explain": "The simulation shows that tree buffers and oyster reefs keep algae in check. Testing in a model first is faster and safer than experimenting on the real bay."
  }
 ],
 "wordbanks": [
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
   "id": "wb-groups",
   "code": "3.1.9-12.O",
   "topic": "group",
   "words": [
    "huddle",
    "colony",
    "swarm",
    "pod",
    "reproduce"
   ],
   "sentences": [
    {
     "text": "Emperor penguins press together in a ___ to stay warm.",
     "answer": "huddle",
     "code": "3.1.9-12.O",
     "explain": "Huddling shares body heat."
    },
    {
     "text": "Adélie penguins nest close together in a ___.",
     "answer": "colony",
     "code": "3.1.9-12.O",
     "explain": "A colony is a group that lives and nests together."
    },
    {
     "text": "Millions of krill moving together form a ___.",
     "answer": "swarm",
     "code": "3.1.9-12.O",
     "explain": "A swarm is a huge group of small animals."
    },
    {
     "text": "Orcas that live and hunt together form a ___.",
     "answer": "pod",
     "code": "3.1.9-12.O",
     "explain": "A pod is a group of whales or dolphins."
    },
    {
     "text": "Group behavior helps a species when it helps members survive and ___.",
     "answer": "reproduce",
     "code": "3.1.9-12.O",
     "explain": "Survival and reproduction pass the genes for the behavior to the next generation."
    }
   ]
  },
  {
   "id": "wb-design",
   "code": "3.1.9-12.N",
   "topic": "solutions",
   "words": [
    "criteria",
    "constraint",
    "refine",
    "quarantine",
    "native"
   ],
   "sentences": [
    {
     "text": "Goals a solution must meet are its ___.",
     "answer": "criteria",
     "code": "3.1.9-12.N",
     "explain": "Criteria describe success."
    },
    {
     "text": "A $20 price limit is a ___.",
     "answer": "constraint",
     "code": "3.1.9-12.N",
     "explain": "Constraints are limits."
    },
    {
     "text": "After a test shows a problem, engineers ___ the design.",
     "answer": "refine",
     "code": "3.1.9-12.N",
     "explain": "To refine is to improve after testing."
    },
    {
     "text": "Rules for checking cars before leaving an area are a ___.",
     "answer": "quarantine",
     "code": "3.1.9-12.N",
     "explain": "A quarantine slows the spread of pests."
    },
    {
     "text": "Eastern hemlock has lived in Pennsylvania for thousands of years: it is a ___ species.",
     "answer": "native",
     "code": "3.1.9-12.N",
     "explain": "Native species evolved in the area."
    }
   ]
  }
 ],
 "lablocks": [
  {
   "id": "lock-4-1",
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
  },
  {
   "id": "lock-4-4",
   "title": "Lab Lock",
   "clues": [
    {
     "prompt": "Clue 1: Four lanternfly trap designs were tested for one week. Lanternflies caught: Design 1 = 40, Design 2 = 55, Design 3 = 70, Design 4 = 62. Design 3 also caught 3 birds; the others caught none. Which design number is the BEST choice?",
     "answer": 4,
     "code": "3.1.9-12.N",
     "hint": "It must catch many lanternflies AND catch no birds.",
     "explain": "Design 3 caught the most but harmed birds. Design 4 caught the most of the safe designs (62)."
    },
    {
     "prompt": "Clue 2: How many of these are CONSTRAINTS? Costs under $20, catches many lanternflies, built in under 10 minutes, does not trap birds, uses only hardware-store parts.",
     "answer": 3,
     "code": "3.1.9-12.N",
     "hint": "Constraints are limits: cost, time, materials.",
     "explain": "Cost, time, and materials are constraints (3). Catching lanternflies and not trapping birds are criteria."
    },
    {
     "prompt": "Clue 3: In a simulation, plan A saved 30 hemlocks, plan B saved 45, plan C saved 25, plan D saved 50, and plan E saved 20. Which plan number saved the most?",
     "answer": 4,
     "code": "3.1.9-12.V",
     "hint": "Find the largest number.",
     "explain": "Plan D (number 4) saved 50 hemlocks, the most."
    }
   ],
   "debrief": [
    "Clue 1 evaluated designs against more than one criterion.",
    "Clue 2 separated criteria (goals) from constraints (limits).",
    "Clue 3 used a simulation to compare solutions."
   ]
  }
 ],
 "scans": [
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
  },
  {
   "id": "s4-huddle",
   "name": "Emperor penguin huddle",
   "look": "critter",
   "color": "#2a2a34",
   "word": "Huddling",
   "def": "Animals pressing close together to share body heat.",
   "note": "In the Antarctic winter, male emperor penguins keep their eggs warm on their feet for about two months without eating. They HUDDLE in tight groups and slowly take turns moving from the cold edge to the warm middle."
  },
  {
   "id": "s4-colony",
   "name": "Adélie penguin colony",
   "look": "eggs",
   "color": "#f0f0f0",
   "word": "Colony",
   "def": "A group of animals of the same species that live and nest close together.",
   "note": "Adélie penguins nest in a COLONY on rocky ground. Skuas (predatory seabirds) steal eggs and chicks more often from nests at the edge than from nests in the middle."
  },
  {
   "id": "s4-krill",
   "name": "Antarctic krill swarm",
   "look": "chain",
   "color": "#ff9f8a",
   "word": "Swarm",
   "def": "A very large group of small animals moving together.",
   "note": "Antarctic krill gather in huge SWARMS. Being one of millions lowers each krill's chance of being the one eaten, but a swarm is also easy for whales to find."
  },
  {
   "id": "s4-orca",
   "name": "Orca pod",
   "look": "shark",
   "color": "#1a1a22",
   "word": "Cooperative hunting",
   "def": "Animals working together to catch prey.",
   "note": "Some Antarctic orcas swim side by side to make a wave that washes a seal off a floating ice sheet. COOPERATIVE HUNTING lets them catch prey that one orca could not reach."
  },
  {
   "id": "s4-survive",
   "name": "Chick in the middle",
   "look": "critter",
   "color": "#8a8a90",
   "word": "Survival",
   "def": "Staying alive long enough to grow up and reproduce.",
   "note": "Group behavior matters for the species only if it helps individuals SURVIVE long enough to REPRODUCE and pass on their genes."
  },
  {
   "id": "s4-reproduce",
   "name": "Penguin pair",
   "look": "critter",
   "color": "#3a3a44",
   "word": "Reproductive success",
   "def": "How many offspring an individual raises that survive.",
   "note": "Nesting in the middle of the colony raises an Adélie pair's REPRODUCTIVE SUCCESS: more of their chicks survive to fledge."
  },
  {
   "id": "s4-trade",
   "name": "Leopard seal",
   "look": "eel",
   "color": "#8a8a8a",
   "word": "Cost and benefit",
   "def": "What an animal gains from a behavior compared with what it loses.",
   "note": "Penguins often wait at the ice edge until many are ready, then jump in together, so a leopard seal can catch only one. Group behavior has BENEFITS (safety, warmth) and COSTS (competition, disease)."
  },
  {
   "id": "s4-lanternfly",
   "name": "Spotted lanternfly",
   "look": "critter",
   "color": "#d84a3a",
   "word": "Invasive species",
   "def": "A species brought to a new place where it spreads and causes harm.",
   "note": "The spotted lanternfly is native to Asia. It was first found in the United States in Berks County, Pennsylvania, in 2014. It sucks sap from grapevines and trees, which hurts vineyards and farms."
  },
  {
   "id": "s4-heaven",
   "name": "Tree-of-heaven",
   "look": "sprout",
   "color": "#7a9a4a",
   "word": "Host plant",
   "def": "A plant that an insect feeds or lays eggs on.",
   "note": "Tree-of-heaven, also from Asia, is the lanternfly's favorite HOST PLANT. Removing most tree-of-heaven from an area takes away much of the lanternfly's food."
  },
  {
   "id": "s4-adelgid",
   "name": "Hemlock woolly adelgid",
   "look": "eggs",
   "color": "#f4f4f4",
   "word": "Pest",
   "def": "An organism that damages crops, trees, or other things people value.",
   "note": "This tiny insect from Asia looks like white wool on hemlock twigs. It feeds on the sap of eastern hemlocks, Pennsylvania's state tree, and can kill them in a few years."
  },
  {
   "id": "s4-hemlock",
   "name": "Eastern hemlock",
   "look": "sprout",
   "color": "#2f5a3a",
   "word": "Native species",
   "def": "A species that has lived in an area for a long time and evolved there.",
   "note": "Eastern hemlocks shade streams and keep the water cool for brook trout. When hemlocks die, streams get warmer, and that harms the trout."
  },
  {
   "id": "s4-criteria",
   "name": "Design notebook",
   "look": "stack",
   "color": "#e8d8a8",
   "word": "Criteria",
   "def": "What a solution must do to be successful.",
   "note": "CRITERIA for a lanternfly trap: it must catch many lanternflies, it must NOT catch birds or helpful insects, and it must be easy to check."
  },
  {
   "id": "s4-constraint",
   "name": "Price tag",
   "look": "rod",
   "color": "#ffd166",
   "word": "Constraint",
   "def": "A limit on a solution, such as cost, time, or safety.",
   "note": "CONSTRAINTS: the trap must be cheap enough for homeowners, safe for pets and children, and quick to set up."
  },
  {
   "id": "s4-circle",
   "name": "Circle trap",
   "look": "rod",
   "color": "#7be0ad",
   "word": "Refine",
   "def": "To improve a solution after testing it.",
   "note": "Sticky bands wrapped around trees caught lanternflies, but they also caught birds, bats, and helpful insects. Designers REFINED the idea into a circle trap: a mesh funnel that catches climbing lanternflies without anything sticky."
  },
  {
   "id": "s4-biocontrol",
   "name": "Predator beetle",
   "look": "critter",
   "color": "#3a2a2a",
   "word": "Biological control",
   "def": "Using a natural enemy of a pest to reduce its numbers.",
   "note": "Scientists release small beetles that eat hemlock woolly adelgids. These beetles were tested first to check that they eat adelgids and not native insects. This is BIOLOGICAL CONTROL."
  },
  {
   "id": "s4-quarantine",
   "name": "Car inspection sign",
   "look": "rock",
   "color": "#ffb09c",
   "word": "Quarantine",
   "def": "Rules that limit moving things out of an area to stop a pest from spreading.",
   "note": "Lanternflies lay egg masses on cars, trailers, and stone. Pennsylvania set up a QUARANTINE zone where people must check vehicles and goods before moving them."
  },
  {
   "id": "s4-watershed",
   "name": "Susquehanna River",
   "look": "drop",
   "color": "#5fa8d8",
   "word": "Watershed",
   "def": "All the land that drains into the same body of water.",
   "note": "Much of Pennsylvania is in the Chesapeake Bay WATERSHED. The Susquehanna River carries about half of all the fresh water that flows into the bay."
  },
  {
   "id": "s4-deadzone",
   "name": "Low-oxygen water",
   "look": "blob",
   "color": "#6a7a5a",
   "word": "Dead zone",
   "def": "An area of water with so little oxygen that most animals cannot live there.",
   "note": "Fertilizer and manure wash into streams, travel to the bay, and feed algal blooms. When the algae decay, the oxygen is used up, making DEAD ZONES where crabs and fish cannot live."
  },
  {
   "id": "s4-buffer",
   "name": "Streamside trees",
   "look": "sprout",
   "color": "#4a8a3a",
   "word": "Riparian buffer",
   "def": "A strip of trees and plants along a stream that soaks up runoff.",
   "note": "Pennsylvania farmers plant RIPARIAN BUFFERS of trees along streams. Roots soak up nutrients and hold soil before they reach the water."
  },
  {
   "id": "s4-oyster",
   "name": "Oyster reef",
   "look": "rock",
   "color": "#c8c0a8",
   "word": "Oyster reef",
   "def": "A hard reef built by many oysters growing together.",
   "note": "Oysters filter algae out of the water as they feed, and their reefs shelter crabs and fish. Restoring oyster reefs is one way to help the bay."
  },
  {
   "id": "s4-model",
   "name": "Computer model",
   "look": "atom",
   "color": "#7fd4ff",
   "word": "Model",
   "def": "A simplified version of a real system that helps us understand it or make predictions.",
   "note": "Scientists build computer MODELS of the bay that include rivers, rain, nutrients, algae, and oxygen."
  },
  {
   "id": "s4-variable",
   "name": "Slider controls",
   "look": "rod",
   "color": "#c59cff",
   "word": "Variable",
   "def": "A factor that can change in an experiment or simulation.",
   "note": "In a simulation you change one VARIABLE at a time (such as the width of the tree buffers) and watch what happens to the others (such as oxygen in the bay)."
  },
  {
   "id": "s4-revise",
   "name": "Real data vs. model",
   "look": "chain",
   "color": "#ffd166",
   "word": "Revise",
   "def": "To change a model or plan so it matches new evidence better.",
   "note": "If a simulation's predictions do not match real measurements, scientists REVISE the simulation, for example by adding a missing factor such as heavy rainstorms."
  }
 ],
 "vocab": [
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
  },
  {
   "term": "Huddling",
   "def": "Animals pressing close together to share body heat."
  },
  {
   "term": "Colony",
   "def": "A group of animals of the same species that live and nest close together."
  },
  {
   "term": "Swarm",
   "def": "A very large group of small animals moving together."
  },
  {
   "term": "Cooperative hunting",
   "def": "Animals working together to catch prey."
  },
  {
   "term": "Survival",
   "def": "Staying alive long enough to grow up and reproduce."
  },
  {
   "term": "Reproductive success",
   "def": "How many offspring an individual raises that survive."
  },
  {
   "term": "Cost and benefit",
   "def": "What an animal gains from a behavior compared with what it loses."
  },
  {
   "term": "Host plant",
   "def": "A plant that an insect feeds or lays eggs on."
  },
  {
   "term": "Pest",
   "def": "An organism that damages crops, trees, or other things people value."
  },
  {
   "term": "Native species",
   "def": "A species that has lived in an area for a long time and evolved there."
  },
  {
   "term": "Criteria",
   "def": "What a solution must do to be successful."
  },
  {
   "term": "Constraint",
   "def": "A limit on a solution, such as cost, time, or safety."
  },
  {
   "term": "Refine",
   "def": "To improve a solution after testing it."
  },
  {
   "term": "Biological control",
   "def": "Using a natural enemy of a pest to reduce its numbers."
  },
  {
   "term": "Quarantine",
   "def": "Rules that limit moving things out of an area to stop a pest from spreading."
  },
  {
   "term": "Watershed",
   "def": "All the land that drains into the same body of water."
  },
  {
   "term": "Dead zone",
   "def": "An area of water with so little oxygen that most animals cannot live there."
  },
  {
   "term": "Riparian buffer",
   "def": "A strip of trees and plants along a stream that soaks up runoff."
  },
  {
   "term": "Oyster reef",
   "def": "A hard reef built by many oysters growing together."
  },
  {
   "term": "Model",
   "def": "A simplified version of a real system that helps us understand it or make predictions."
  },
  {
   "term": "Variable",
   "def": "A factor that can change in an experiment or simulation."
  },
  {
   "term": "Revise",
   "def": "To change a model or plan so it matches new evidence better."
  }
 ]
});
