/* WORLD 4 QUESTION FILE: Inheritance and Variation of Traits
   Teachers: you can edit the words inside the quotation marks below.
   - "code" is the PA STEELS standard (3.1.9-12.A to X) tested on the Keystone Biology exam.
     World 4 uses D (mitosis and differentiation), P (DNA and chromosomes code traits),
     Q (sources of inheritable variation), and R (statistics and probability of traits).
   - "topic" groups questions that can rotate with each other at stations and clue terminals.
   - In "questions", "answer" is the position of the correct option, counting from 0
     (0 = first option). The game shuffles the options, so the right answer can always go first.
   - "hint" shows after a wrong try. "explain" shows after the right answer.
   - "tags": ["boss"] marks boss-battle questions.
   - Keep every comma, bracket, and quotation mark in place. */
FieldGuide.registerQuestions(4, {
 "tokens": [
  {
   "id": "replication-facts",
   "code": "3.1.9-12.D",
   "topic": "dna-copy",
   "prompt": "Collect only TRUE facts about copying DNA before a cell divides",
   "good": [
    "A pairs with T",
    "G pairs with C",
    "It happens before a cell divides",
    "Each new cell gets a complete copy",
    "The copy is almost always exact",
    "A rare uncorrected mistake is a mutation"
   ],
   "bad": [
    {
     "text": "A pairs with C",
     "explain": "In DNA, A always pairs with T, and G always pairs with C."
    },
    {
     "text": "It happens after the cell divides",
     "explain": "DNA is copied BEFORE division, so each new cell gets a full copy."
    },
    {
     "text": "Each new cell gets half the DNA",
     "explain": "In mitosis each new cell gets ALL the DNA. Only gametes (made by meiosis) get half the chromosomes."
    },
    {
     "text": "It turns DNA into mRNA",
     "explain": "Copying a gene into mRNA is how a protein gets made. Copying DNA makes more DNA."
    }
   ]
  },
  {
   "id": "hetero",
   "code": "3.1.9-12.R",
   "topic": "punnett",
   "prompt": "Collect only HETEROZYGOUS genotypes (two different alleles)",
   "good": [
    "Aa",
    "Bb",
    "Tt",
    "Pp",
    "Rr"
   ],
   "bad": [
    {
     "text": "AA",
     "explain": "AA has two identical dominant alleles: homozygous dominant."
    },
    {
     "text": "bb",
     "explain": "bb has two identical recessive alleles: homozygous recessive."
    },
    {
     "text": "TT",
     "explain": "TT is homozygous dominant: both alleles are the same."
    },
    {
     "text": "pp",
     "explain": "pp is homozygous recessive: both alleles are the same."
    }
   ]
  },
  {
   "id": "mutation-causes",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Collect only things that can cause MUTATIONS (changes in DNA)",
   "good": [
    "Ultraviolet (UV) light",
    "X-rays and other radiation",
    "Chemicals in tobacco smoke",
    "Uncorrected mistakes when DNA is copied"
   ],
   "bad": [
    {
     "text": "Lifting weights",
     "explain": "Exercise builds muscle, but it does not change the DNA you pass on."
    },
    {
     "text": "Wearing sunscreen",
     "explain": "Sunscreen PROTECTS skin cells' DNA by blocking UV light."
    },
    {
     "text": "Getting a haircut",
     "explain": "Cutting hair does not touch the DNA in your cells."
    },
    {
     "text": "Learning a new skill",
     "explain": "Skills you learn are not written into your DNA."
    }
   ]
  }
 ],
 "sorts": [
  {
   "id": "mit-mei",
   "code": "3.1.9-12.Q",
   "topic": "meiosis",
   "prompt": "Mitosis or meiosis?",
   "options": [
    "Mitosis",
    "Meiosis"
   ],
   "hint": "Mitosis: one division, two identical body cells. Meiosis: two divisions, four different gametes with half the chromosomes.",
   "items": [
    {
     "text": "Makes new skin cells to heal a cut",
     "answer": 0,
     "explain": "Growth and repair use mitosis."
    },
    {
     "text": "Makes sperm and egg cells",
     "answer": 1,
     "explain": "Gametes are made by meiosis."
    },
    {
     "text": "Daughter cells are identical to the parent cell",
     "answer": 0,
     "explain": "Mitosis makes identical copies."
    },
    {
     "text": "Makes four haploid cells",
     "answer": 1,
     "explain": "Meiosis ends with four haploid cells."
    },
    {
     "text": "Crossing over swaps pieces of chromosomes",
     "answer": 1,
     "explain": "Crossing over happens only in meiosis, when partner chromosomes pair up."
    },
    {
     "text": "Keeps the chromosome number the same (46 to 46)",
     "answer": 0,
     "explain": "Mitosis keeps cells diploid."
    },
    {
     "text": "Has two rounds of division",
     "answer": 1,
     "explain": "Meiosis divides twice, so one cell becomes four."
    },
    {
     "text": "Lets yeast or an amoeba reproduce asexually",
     "answer": 0,
     "explain": "Asexual reproduction of many single-celled eukaryotes uses mitosis."
    }
   ]
  },
  {
   "id": "pattern",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "prompt": "Which inheritance pattern is it?",
   "options": [
    "Incomplete dominance",
    "Codominance",
    "Multiple alleles",
    "Sex-linked",
    "Polygenic"
   ],
   "hint": "Blend? Incomplete. Both show? Codominance. More than two alleles? Multiple. On the X chromosome? Sex-linked. Many genes? Polygenic.",
   "items": [
    {
     "text": "Red and white four-o'clock flowers make pink offspring",
     "answer": 0,
     "explain": "A blended, in-between phenotype is incomplete dominance."
    },
    {
     "text": "A roan cow has both red hairs and white hairs",
     "answer": 1,
     "explain": "Both alleles show fully at the same time: codominance."
    },
    {
     "text": "The ABO blood type gene has three alleles: Iᴬ, Iᴮ, and i",
     "answer": 2,
     "explain": "More than two alleles exist in the population: multiple alleles."
    },
    {
     "text": "Hemophilia is passed from a carrier mother to her sons",
     "answer": 3,
     "explain": "The gene is on the X chromosome: sex-linked."
    },
    {
     "text": "Human skin color shows a smooth range of shades",
     "answer": 4,
     "explain": "Many genes add together: polygenic inheritance."
    },
    {
     "text": "A chicken has both black and white feathers (erminette)",
     "answer": 1,
     "explain": "Both colors show: codominance."
    },
    {
     "text": "Red-green color blindness is far more common in males",
     "answer": 3,
     "explain": "Males have one X, so one recessive allele shows: sex-linked."
    },
    {
     "text": "Human height varies from short to tall in tiny steps",
     "answer": 4,
     "explain": "Many genes (plus environment) affect height: polygenic."
    }
   ]
  }
 ],
 "questions": [
  {
   "id": "w4q04",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "prompt": "Why do body cells go through mitosis?",
   "options": [
    "for growth and to repair or replace damaged cells",
    "to make sperm and egg cells",
    "to create genetic variation",
    "to cut the chromosome number in half"
   ],
   "answer": 0,
   "hint": "Think of healing a scraped knee.",
   "explain": "Mitosis makes identical body cells for growth, repair, and replacement."
  },
  {
   "id": "w4q06",
   "code": "3.1.9-12.P",
   "topic": "gametes",
   "prompt": "A human body cell has 46 chromosomes. How many chromosomes are in a human sperm cell?",
   "options": [
    "23",
    "46",
    "92",
    "12"
   ],
   "answer": 0,
   "hint": "Meiosis halves the number.",
   "explain": "Gametes are haploid: half of 46 is 23."
  },
  {
   "id": "w4q07",
   "code": "3.1.9-12.Q",
   "topic": "gametes",
   "prompt": "Which statement compares mitosis and meiosis correctly?",
   "options": [
    "Mitosis makes 2 identical diploid cells; meiosis makes 4 genetically different haploid cells.",
    "Both make gametes.",
    "Mitosis makes 4 cells; meiosis makes 2 cells.",
    "Both make cells that are different from the parent."
   ],
   "answer": 0,
   "hint": "Count the cells and check the chromosome number.",
   "explain": "Mitosis: 2 identical diploid body cells. Meiosis: 4 different haploid gametes."
  },
  {
   "id": "w4q08",
   "code": "3.1.9-12.P",
   "topic": "gametes",
   "prompt": "Why is it important that gametes are haploid?",
   "options": [
    "When sperm and egg join, the offspring gets the normal diploid number.",
    "So gametes can divide by mitosis.",
    "So offspring are identical to one parent.",
    "So cells can grow larger."
   ],
   "answer": 0,
   "hint": "23 + 23 = ?",
   "explain": "Two haploid gametes (23 + 23) join to make a diploid zygote with 46 chromosomes."
  },
  {
   "id": "w4q09",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "prompt": "Which event happens in meiosis but NOT in mitosis?",
   "options": [
    "crossing over between homologous chromosomes",
    "copying DNA before division",
    "splitting of the cytoplasm",
    "chromosomes lining up in the cell"
   ],
   "answer": 0,
   "hint": "It mixes alleles between partner chromosomes.",
   "explain": "Crossing over happens only in meiosis, when partner (homologous) chromosomes pair up and swap pieces."
  },
  {
   "id": "w4q10",
   "code": "3.1.9-12.D",
   "topic": "dna-copy",
   "prompt": "One strand of DNA reads A-T-G-C-C-A. What complementary strand is made during replication?",
   "options": [
    "T-A-C-G-G-T",
    "A-T-G-C-C-A",
    "U-A-C-G-G-U",
    "G-C-A-T-T-G"
   ],
   "answer": 0,
   "hint": "A pairs with T; G pairs with C.",
   "explain": "Each base pairs with its partner: A-T and G-C. (U is found only in RNA.)"
  },
  {
   "id": "w4q12",
   "code": "3.1.9-12.D",
   "topic": "dna-copy",
   "prompt": "Why must DNA be copied before a cell divides?",
   "options": [
    "so each new cell gets a complete set of genetic instructions",
    "so the cell can make more ribosomes",
    "so each new cell gets half the DNA",
    "so mRNA can leave the nucleus"
   ],
   "answer": 0,
   "hint": "Both new cells need all the instructions.",
   "explain": "Replication makes two full copies, one for each daughter cell."
  },
  {
   "id": "w4q13",
   "code": "3.1.9-12.D",
   "topic": "dna-copy",
   "prompt": "Which bases pair together in DNA?",
   "options": [
    "adenine with thymine, and guanine with cytosine",
    "adenine with guanine, and cytosine with thymine",
    "adenine with uracil, and guanine with cytosine",
    "any base can pair with any other"
   ],
   "answer": 0,
   "hint": "Remember A-T and G-C.",
   "explain": "A pairs with T and G pairs with C. This base pairing makes exact copying possible."
  },
  {
   "id": "w4q14",
   "code": "3.1.9-12.P",
   "topic": "genes",
   "prompt": "What is a gene?",
   "options": [
    "a section of DNA that codes for a protein",
    "a whole chromosome",
    "a type of cell",
    "a sugar in DNA"
   ],
   "answer": 0,
   "hint": "Genes are pieces of something bigger.",
   "explain": "A gene is a segment of DNA on a chromosome that codes for a protein, which affects a trait."
  },
  {
   "id": "w4q15",
   "code": "3.1.9-12.P",
   "topic": "genes",
   "prompt": "What are alleles?",
   "options": [
    "different versions of the same gene",
    "two different chromosomes",
    "the proteins a gene makes",
    "cells made by meiosis"
   ],
   "answer": 0,
   "hint": "Think of flavors of one gene.",
   "explain": "Alleles are different forms of the same gene, such as purple or white flower color."
  },
  {
   "id": "w4q16",
   "code": "3.1.9-12.P",
   "topic": "genes",
   "prompt": "Which statement best describes how DNA, genes, and chromosomes are related?",
   "options": [
    "Chromosomes are made of DNA, and genes are sections of that DNA.",
    "Genes are made of chromosomes.",
    "DNA is made of genes and proteins only.",
    "Chromosomes are found inside genes."
   ],
   "answer": 0,
   "hint": "Biggest to smallest: chromosome, gene, base.",
   "explain": "A chromosome is one long DNA molecule. Genes are sections along it."
  },
  {
   "id": "w4q17",
   "code": "3.1.9-12.P",
   "topic": "genes",
   "prompt": "You inherit one chromosome of each pair from each parent. What does this mean for each of your genes?",
   "options": [
    "You have two alleles for each gene: one from each parent.",
    "You have one allele, from one parent only.",
    "You have four alleles for each gene.",
    "All your alleles come from your mother."
   ],
   "answer": 0,
   "hint": "Chromosomes come in pairs.",
   "explain": "Each chromosome pair carries two copies of each gene, one from each parent."
  },
  {
   "id": "w4q18",
   "code": "3.1.9-12.R",
   "topic": "punnett",
   "prompt": "In pea plants, purple flowers (P) are dominant over white flowers (p). What is the phenotype of a Pp plant?",
   "options": [
    "purple flowers",
    "white flowers",
    "pink flowers",
    "purple and white spotted flowers"
   ],
   "answer": 0,
   "hint": "A dominant allele shows whenever it is present.",
   "explain": "One dominant P is enough, so the Pp plant has purple flowers."
  },
  {
   "id": "w4q19",
   "code": "3.1.9-12.R",
   "topic": "punnett",
   "prompt": "Two Pp plants are crossed. What fraction of the offspring are expected to have white flowers (pp)?",
   "options": [
    "1/4",
    "1/2",
    "3/4",
    "0"
   ],
   "answer": 0,
   "hint": "Draw the Punnett square: PP, Pp, Pp, pp.",
   "explain": "Only one of the four boxes is pp, so 1/4 (25%) are expected to be white."
  },
  {
   "id": "w4q20",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "prompt": "A red snapdragon is crossed with a white snapdragon, and all the offspring are pink. What pattern is this?",
   "options": [
    "incomplete dominance",
    "codominance",
    "sex-linked inheritance",
    "complete dominance"
   ],
   "answer": 0,
   "hint": "The phenotype is a blend.",
   "explain": "In incomplete dominance, heterozygotes show an in-between phenotype, like pink."
  },
  {
   "id": "w4q21",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "prompt": "A person with type AB blood has both A and B markers on their red blood cells. What pattern is this?",
   "options": [
    "codominance",
    "incomplete dominance",
    "polygenic inheritance",
    "sex-linked inheritance"
   ],
   "answer": 0,
   "hint": "Both alleles show fully.",
   "explain": "In codominance, both alleles are expressed at the same time, so A and B markers both appear."
  },
  {
   "id": "w4q22",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "prompt": "Why is red-green color blindness more common in males than in females?",
   "options": [
    "The gene is on the X chromosome, and males have only one X.",
    "The gene is on the Y chromosome only.",
    "Females cannot inherit recessive alleles.",
    "It is caused by a virus."
   ],
   "answer": 0,
   "hint": "Males are XY; females are XX.",
   "explain": "With only one X, a male shows a recessive X-linked allele. A female needs two copies."
  },
  {
   "id": "w4q23",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "prompt": "Human height shows a smooth range from short to tall. This is because height is...",
   "options": [
    "controlled by many genes (polygenic)",
    "controlled by one dominant allele",
    "sex-linked",
    "codominant"
   ],
   "answer": 0,
   "hint": "A smooth range means many small effects added together.",
   "explain": "Polygenic traits are controlled by many genes, giving a continuous range of phenotypes."
  },
  {
   "id": "w4q24",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "prompt": "During meiosis, homologous chromosomes swap matching pieces. What is this called?",
   "options": [
    "crossing over, which makes new combinations of alleles",
    "fertilization, which joins a sperm and an egg",
    "replication, which copies DNA",
    "mitosis, which makes identical body cells"
   ],
   "answer": 0,
   "hint": "The chromosomes cross and exchange segments.",
   "explain": "Crossing over shuffles alleles between homologous chromosomes, increasing genetic variation."
  },
  {
   "id": "w4q26",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "prompt": "In meiosis, each chromosome pair separates independently of the other pairs. What does this produce?",
   "options": [
    "many different combinations of chromosomes in gametes",
    "identical gametes",
    "cells with no chromosomes",
    "an extra chromosome in every cell"
   ],
   "answer": 0,
   "hint": "This is called independent assortment.",
   "explain": "Independent assortment mixes which parent's chromosomes go into each gamete, creating variety."
  },
  {
   "id": "w4q28",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "A mutation changes one base, but the new codon still codes for the same amino acid. What happens to the protein?",
   "options": [
    "Nothing changes: the protein is the same.",
    "Every codon after it is read differently.",
    "The protein stops early.",
    "Every amino acid changes."
   ],
   "answer": 0,
   "hint": "Several codons can code for the same amino acid.",
   "explain": "Several codons code for the same amino acid, so this change in the DNA does not change the protein."
  },
  {
   "id": "w4q29",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Why is deleting one base usually more harmful than substituting one base?",
   "options": [
    "It shifts the reading frame, so every codon after it changes.",
    "It changes only one amino acid.",
    "It never affects the protein.",
    "It adds an extra chromosome."
   ],
   "answer": 0,
   "hint": "Codons are read three bases at a time.",
   "explain": "A deletion causes a frameshift: every codon after it is read wrong."
  },
  {
   "id": "w4q30",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Sickle cell disease is caused by a change in ONE base of the hemoglobin gene. How can one base change cause a disease?",
   "options": [
    "It changes one amino acid, so hemoglobin molecules stick together into long fibers and red blood cells can bend into a sickle shape.",
    "It removes the whole hemoglobin gene from every chromosome.",
    "It adds an extra chromosome to every red blood cell.",
    "It has no effect on the protein, only on the DNA."
   ],
   "answer": 0,
   "hint": "Base order sets amino acid order, and amino acid order sets protein shape.",
   "explain": "One changed base changes one amino acid. The hemoglobin molecules stick together into long fibers, so red blood cells can become stiff and sickle-shaped."
  },
  {
   "id": "w4q31",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Which of these can cause mutations in DNA?",
   "options": [
    "ultraviolet (UV) light from the Sun",
    "drinking water",
    "exercising",
    "sleeping"
   ],
   "answer": 0,
   "hint": "Mutagens damage DNA.",
   "explain": "UV light, X-rays, and some chemicals are mutagens that can damage DNA."
  },
  {
   "id": "w4q32",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "A mutation in a skin cell will NOT be passed to a person's children. Why?",
   "options": [
    "Only mutations in gametes (sperm or egg) can be inherited.",
    "Skin cells have no DNA.",
    "Mutations always fix themselves.",
    "Children inherit only their mother's DNA."
   ],
   "answer": 0,
   "hint": "Which cells pass DNA to the next generation?",
   "explain": "Only mutations in sperm or egg cells are passed to offspring."
  },
  {
   "id": "w4q38",
   "code": "3.1.9-12.A",
   "topic": "dna-review",
   "prompt": "Review: a gene's DNA reads TAC. Which mRNA codon is transcribed from it?",
   "options": [
    "AUG",
    "ATG",
    "TAC",
    "UAC"
   ],
   "answer": 0,
   "hint": "In RNA, U replaces T. A pairs with U.",
   "explain": "T→A, A→U, C→G, so DNA TAC becomes the mRNA codon AUG."
  },
  {
   "id": "w4q39",
   "code": "3.1.9-12.A",
   "topic": "dna-review",
   "prompt": "Review: what determines the order of amino acids in a protein?",
   "options": [
    "the order of the bases in the gene's DNA, copied into mRNA",
    "the size of the cell",
    "the number of chromosomes in the cell",
    "the order the amino acids happen to float by"
   ],
   "answer": 0,
   "hint": "The gene is the recipe.",
   "explain": "The base sequence of a gene is copied into mRNA, and the mRNA sets the order in which amino acids are joined."
  },
  {
   "id": "w4q41",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "A mutation inserts one extra base near the START of a gene. What is the most likely effect?",
   "options": [
    "Most of the protein's amino acids change (a frameshift).",
    "Only one amino acid changes.",
    "The protein is unchanged.",
    "The cell gains a chromosome."
   ],
   "answer": 0,
   "hint": "Every codon after the insertion is read in a new frame.",
   "explain": "An insertion shifts the reading frame, so almost every amino acid after it changes.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w4q42",
   "code": "3.1.9-12.R",
   "topic": "punnett",
   "prompt": "A homozygous tall pea plant (TT) is crossed with a short plant (tt). What percent of the offspring will be tall?",
   "options": [
    "100%",
    "75%",
    "50%",
    "25%"
   ],
   "answer": 0,
   "hint": "Every offspring gets T from one parent and t from the other.",
   "explain": "All offspring are Tt, and tall is dominant, so 100% are tall.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w4q43",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "prompt": "Which processes make each gamete genetically unique?",
   "options": [
    "crossing over and independent assortment during meiosis",
    "mitosis",
    "DNA replication alone",
    "growth of the cell"
   ],
   "answer": 0,
   "hint": "They shuffle alleles during meiosis.",
   "explain": "Crossing over and independent assortment mix alleles, so every gamete is different.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w4q45",
   "code": "3.1.9-12.A",
   "topic": "genes",
   "prompt": "A mutation changes one gene. Which molecule is most directly made differently?",
   "options": [
    "the protein that gene codes for",
    "the cell's sugar",
    "the cell's water",
    "the number of chromosomes in the cell"
   ],
   "answer": 0,
   "hint": "Genes are recipes for...",
   "explain": "A gene codes for a protein, so a mutation can change that protein and the trait it affects.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w4q46",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "prompt": "A woman who carries color blindness (XᴺXⁿ) has children with a man with normal vision (XᴺY). What is the chance that a SON is color-blind?",
   "options": [
    "1/2 (50%)",
    "0%",
    "1/4 (25%)",
    "100%"
   ],
   "answer": 0,
   "hint": "Sons get their X chromosome from their mother.",
   "explain": "Each son gets either Xᴺ or Xⁿ from his mother, so half of the sons are expected to be color-blind.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w4q47",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "prompt": "A skin cell divides by mitosis. How does the DNA in each of the two new cells compare with the DNA in the original cell?",
   "options": [
    "Each new cell has an identical, complete copy of the DNA.",
    "Each new cell has half of the DNA.",
    "Each new cell has a new mix of DNA from two parents.",
    "One new cell gets all the DNA and the other gets none."
   ],
   "answer": 0,
   "hint": "The DNA was copied before the cell divided.",
   "explain": "The cell copies all its DNA first, so mitosis gives each new cell the same complete set of instructions."
  },
  {
   "id": "w4q48",
   "code": "3.1.9-12.D",
   "topic": "differentiation",
   "prompt": "Your muscle cells and nerve cells came from the same fertilized egg and have the same DNA. Why do they look and work so differently?",
   "options": [
    "Each kind of cell uses a different set of its genes, so it makes different proteins (differentiation).",
    "Muscle cells and nerve cells have different DNA.",
    "Nerve cells lost most of their genes.",
    "Muscle cells were made by meiosis."
   ],
   "answer": 0,
   "hint": "Same instructions, but which ones does each cell use?",
   "explain": "All body cells have the same DNA. As cells differentiate, each kind uses different genes and makes different proteins, which gives it its shape and job."
  },
  {
   "id": "w4q49",
   "code": "3.1.9-12.D",
   "topic": "differentiation",
   "prompt": "What is a stem cell?",
   "options": [
    "An unspecialized cell that can divide and develop into different kinds of cells",
    "A cell that has finished specializing and can never divide",
    "A sex cell with half the usual chromosomes",
    "A plant cell found only in stems"
   ],
   "answer": 0,
   "hint": "Think of a cell that has not picked its job yet.",
   "explain": "Stem cells can divide by mitosis and differentiate into specialized cells such as skin, blood, or muscle cells."
  },
  {
   "id": "w4q50",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "prompt": "A lizard loses its tail and grows a new one. Which process makes all the new cells for the tail?",
   "options": [
    "mitosis",
    "meiosis",
    "fertilization",
    "mutation"
   ],
   "answer": 0,
   "hint": "The new cells need the same DNA as the rest of the lizard.",
   "explain": "Mitosis makes new cells with the same DNA, and those cells differentiate into the tissues of the new tail."
  },
  {
   "id": "w4q51",
   "code": "3.1.9-12.D",
   "topic": "differentiation",
   "prompt": "A human grows from a single fertilized egg into a body with trillions of cells of many different kinds. Which two processes explain this?",
   "options": [
    "Mitosis makes more cells, and differentiation makes them specialized.",
    "Meiosis makes more cells, and mutation makes them specialized.",
    "Fertilization makes more cells, and meiosis makes them specialized.",
    "Mutation makes more cells, and mitosis makes them specialized."
   ],
   "answer": 0,
   "hint": "One process increases the number; the other gives cells different jobs.",
   "explain": "Mitosis produces the huge number of cells, and differentiation turns them into specialized cells that form tissues and organs."
  },
  {
   "id": "w4q52",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "prompt": "A student builds a model of mitosis. Her parent cell has 4 chromosomes. What should each daughter cell in her model show?",
   "options": [
    "4 chromosomes, identical to the parent cell",
    "2 chromosomes",
    "8 chromosomes",
    "4 chromosomes, each different from the parent cell"
   ],
   "answer": 0,
   "hint": "Mitosis keeps the chromosome number the same.",
   "explain": "Mitosis makes two daughter cells with the same number and kind of chromosomes as the parent cell."
  },
  {
   "id": "w4q53",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "prompt": "All your cells have the same DNA. Why does a scraped knee heal with new skin cells instead of bone cells?",
   "options": [
    "Skin cells and skin stem cells near the scrape divide by mitosis, and the new cells develop into skin cells.",
    "Meiosis in the knee makes new skin cells.",
    "The scrape changes the DNA in the knee to skin DNA.",
    "Bone cells move up and turn into skin."
   ],
   "answer": 0,
   "hint": "Which cells are right next to the scrape?",
   "explain": "Cells in the skin divide by mitosis to fill the gap, and the new cells differentiate into skin cells, so the skin is repaired.",
   "tags": [
    "boss"
   ]
  },
  {
   "id": "w4q54",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "prompt": "Two brothers have the same parents but different eye colors. Which statement best explains this?",
   "options": [
    "Meiosis makes genetically different gametes, so each brother got a different combination of alleles.",
    "One brother inherited genes from only one parent.",
    "Their DNA changed after they were born.",
    "Brothers always inherit opposite traits."
   ],
   "answer": 0,
   "hint": "Every sperm and every egg is a little different.",
   "explain": "Crossing over and independent assortment in meiosis make every gamete different, so siblings get different combinations of their parents' alleles."
  },
  {
   "id": "w4q55",
   "code": "3.1.9-12.P",
   "topic": "gametes",
   "prompt": "A sperm with 23 chromosomes joins an egg with 23 chromosomes. How many chromosomes does the fertilized egg have, and where do they come from?",
   "options": [
    "46: half from the mother and half from the father",
    "23: all from the mother",
    "46: all from the father",
    "92: two full sets from each parent"
   ],
   "answer": 0,
   "hint": "Add the two sets together.",
   "explain": "Fertilization joins two haploid gametes, so the zygote has 46 chromosomes in 23 pairs: one of each pair from each parent."
  },
  {
   "id": "w4q56",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Chemicals in tobacco smoke cause mutations in a smoker's lung cells. Can these mutations be passed to the smoker's children?",
   "options": [
    "No. Lung cells are body cells, and only mutations in sperm or egg cells are inherited.",
    "Yes. Every mutation is passed to children.",
    "Yes, but only to sons.",
    "No, because lung cells have no DNA."
   ],
   "answer": 0,
   "hint": "Which cells make the next generation?",
   "explain": "Mutations in body cells can affect the person, but only mutations in gametes can be inherited."
  },
  {
   "id": "w4q57",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Each time a cell divides it copies billions of DNA bases. Very rarely, a mistake is made and not fixed. What can these copying mistakes cause?",
   "options": [
    "mutations, which are a source of new genetic variation",
    "new chromosomes made from protein",
    "a change in the number of cells in the body",
    "meiosis instead of mitosis"
   ],
   "answer": 0,
   "hint": "A change in the base sequence has a name.",
   "explain": "Uncorrected errors when DNA is copied change the base sequence. These mutations are one source of inheritable variation (if they happen in gametes)."
  },
  {
   "id": "w4q58",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Most mutations have no effect or are harmful, but some are helpful. Which is an example of a HELPFUL mutation?",
   "options": [
    "A mutation that lets some adults keep digesting milk sugar (lactose)",
    "A mutation that makes a protein stop working",
    "A mutation in a skin cell caused by a bad sunburn",
    "A mutation that does not change the protein at all"
   ],
   "answer": 0,
   "hint": "Helpful means it gives an advantage.",
   "explain": "In some human groups, a mutation keeps the lactase gene working into adulthood, so adults can digest milk. This helped people in places where milk was an important food."
  },
  {
   "id": "w4q59",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "prompt": "Two dishes of the same bacteria are grown. Dish A gets UV light for one hour; dish B is kept in the dark. Dish A ends up with many more mutant colonies. What does this evidence support?",
   "options": [
    "UV light is an environmental factor that causes mutations.",
    "Darkness causes mutations.",
    "Bacteria cannot have mutations.",
    "Mutations happen only during meiosis."
   ],
   "answer": 0,
   "hint": "The only difference between the dishes was the UV light.",
   "explain": "Since UV was the only variable changed and mutations increased, the data support the claim that UV light causes mutations."
  },
  {
   "id": "w4q60",
   "code": "3.1.9-12.A",
   "topic": "dna-review",
   "prompt": "Review: a change in a gene's base sequence changes one amino acid in its protein. What can happen next?",
   "options": [
    "The protein may fold into a different shape and not do its job the same way.",
    "The cell will gain an extra chromosome.",
    "Every gene in the cell will change.",
    "Nothing can happen, because amino acids do not affect proteins."
   ],
   "answer": 0,
   "hint": "Amino acid order sets protein shape; shape sets job.",
   "explain": "The order of amino acids decides how a protein folds. A changed amino acid can change the shape, and so the job, of the protein."
  }
 ],
 "pairs": [
  {
   "name": "Mitosis or meiosis?",
   "explain": "Mitosis makes two identical diploid body cells. Meiosis makes four genetically different haploid gametes.",
   "members": [
    {
     "label": "Mitosis",
     "level": "4-1",
     "ids": [
      "mit-mei.0",
      "mit-mei.2",
      "mit-mei.5",
      "w4q04"
     ]
    },
    {
     "label": "Meiosis",
     "level": "4-2",
     "ids": [
      "mit-mei.1",
      "mit-mei.3",
      "mit-mei.4",
      "w4q09"
     ]
    }
   ]
  },
  {
   "name": "Incomplete dominance or codominance?",
   "explain": "Incomplete dominance BLENDS (red + white = pink). Codominance shows BOTH (red and white hairs together).",
   "members": [
    {
     "label": "Incomplete dominance",
     "level": "4-4",
     "ids": [
      "pattern.0",
      "w4q20"
     ]
    },
    {
     "label": "Codominance",
     "level": "4-4",
     "ids": [
      "pattern.1",
      "pattern.5",
      "w4q21"
     ]
    }
   ]
  }
 ],
 "become": [
  {
   "id": "b-chromosomes",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "you": "a skin cell with 46 chromosomes, about to divide by mitosis",
   "short": "46",
   "color": "#ffb3a7",
   "goal": "Go through the door that shows your daughter cells.",
   "doors": [
    {
     "kind": "organelle",
     "label": "Two cells, each with 46 chromosomes",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Two cells, each with 23 chromosomes",
     "ok": false,
     "why": "Mitosis does not halve the chromosome number. Each new body cell keeps all 46."
    },
    {
     "kind": "vesicle",
     "label": "Four cells, each with 23 chromosomes",
     "ok": false,
     "why": "Four haploid cells come from meiosis, which makes gametes, not skin cells."
    }
   ],
   "explain": "Mitosis makes two identical diploid cells with the same 46 chromosomes as the parent cell."
  },
  {
   "id": "b-gamete",
   "code": "3.1.9-12.P",
   "topic": "gametes",
   "you": "a human egg cell made by meiosis",
   "short": "Egg",
   "color": "#ff9fbf",
   "goal": "Go through the door with your correct chromosome number.",
   "doors": [
    {
     "kind": "organelle",
     "label": "23 chromosomes (haploid)",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "46 chromosomes (diploid)",
     "ok": false,
     "why": "If eggs had 46, the baby would have 92 after fertilization. Gametes are haploid."
    },
    {
     "kind": "vesicle",
     "label": "92 chromosomes",
     "ok": false,
     "why": "Meiosis halves the chromosome number; it never doubles it."
    }
   ],
   "explain": "Meiosis halves the chromosome number, so human gametes have 23. Fertilization restores 46."
  },
  {
   "id": "b-punnett",
   "code": "3.1.9-12.R",
   "topic": "punnett",
   "you": "a pea seed whose parents are both Tt (tall)",
   "short": "Seed",
   "color": "#a8e07a",
   "goal": "Go through the door that shows your chance of being short (tt).",
   "doors": [
    {
     "kind": "flow",
     "label": "1 in 4 (25%)",
     "ok": true
    },
    {
     "kind": "organelle",
     "label": "1 in 2 (50%)",
     "ok": false,
     "why": "The Punnett square for Tt × Tt gives TT, Tt, Tt, tt. Only 1 of 4 boxes is tt."
    },
    {
     "kind": "vesicle",
     "label": "0%: tall parents only have tall offspring",
     "ok": false,
     "why": "Both parents carry a hidden t allele, so a tt offspring is possible."
    }
   ],
   "explain": "Tt × Tt gives 1 TT : 2 Tt : 1 tt, so each offspring has a 1 in 4 chance of being short."
  },
  {
   "id": "b-codominance",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "you": "a calf whose parents are a red bull (RR) and a white cow (WW). Coat color is codominant",
   "short": "Calf",
   "color": "#c8785a",
   "goal": "Go through the door that shows your coat.",
   "doors": [
    {
     "kind": "organelle",
     "label": "Roan: red and white hairs mixed together",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Pink: a blend of red and white",
     "ok": false,
     "why": "A blend is incomplete dominance. In codominance BOTH colors show."
    },
    {
     "kind": "vesicle",
     "label": "All red",
     "ok": false,
     "why": "Neither allele hides the other in codominance."
    }
   ],
   "explain": "In codominance both alleles are fully expressed, so an RW calf is roan: red and white hairs."
  },
  {
   "id": "b-frameshift",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "you": "a gene that reads THE CAT ATE THE RAT. One letter H is deleted",
   "short": "Gene",
   "color": "#c59cff",
   "goal": "Go through the door that shows what happens to the message.",
   "doors": [
    {
     "kind": "organelle",
     "label": "TEC ATA TET HER AT: every word after it is scrambled",
     "ok": true
    },
    {
     "kind": "flow",
     "label": "Only one word changes",
     "ok": false,
     "why": "That is a substitution. A deletion shifts every three-letter word after it."
    },
    {
     "kind": "vesicle",
     "label": "Nothing changes",
     "ok": false,
     "why": "Removing a base changes how every codon after it is read."
    }
   ],
   "explain": "Deleting (or inserting) one base causes a frameshift: every codon after the mutation is read differently."
  }
 ],
 "catches": [
  {
   "id": "c-basepair",
   "code": "3.1.9-12.D",
   "topic": "dna-copy",
   "short": "Base pairing",
   "title": "Copy the DNA: grab the base that pairs with each highlighted base.",
   "cueLabel": "Base",
   "builtLabel": "New strand",
   "cueWord": "base",
   "tokenWord": "partner",
   "rule": "In DNA, A pairs with T and G pairs with C.",
   "choices": [
    "T",
    "A",
    "C",
    "G",
    "U",
    "Ribose"
   ],
   "steps": [
    {
     "cue": "A",
     "need": "T"
    },
    {
     "cue": "G",
     "need": "C"
    },
    {
     "cue": "T",
     "need": "A"
    },
    {
     "cue": "C",
     "need": "G"
    }
   ],
   "hint": "A goes with T. G goes with C.",
   "wrong": {
    "U": "Uracil (U) is found in RNA, not DNA.",
    "Ribose": "Ribose is the sugar in RNA. DNA's sugar is deoxyribose, and it is not a base."
   },
   "explain": "Base pairing (A-T, G-C) lets each old strand serve as a template for an exact copy."
  },
  {
   "id": "c-blood",
   "code": "3.1.9-12.R",
   "topic": "patterns",
   "short": "Blood types",
   "title": "Match each genotype to its ABO blood type.",
   "cueLabel": "Genotype",
   "builtLabel": "Typed",
   "cueWord": "genotype",
   "tokenWord": "blood type",
   "rule": "Iᴬ and Iᴮ are codominant; both are dominant over i.",
   "choices": [
    "Type A",
    "Type B",
    "Type AB",
    "Type O",
    "Type C",
    "Type AO"
   ],
   "steps": [
    {
     "cue": "Iᴬi",
     "need": "Type A"
    },
    {
     "cue": "IᴮIᴮ",
     "need": "Type B"
    },
    {
     "cue": "IᴬIᴮ",
     "need": "Type AB"
    },
    {
     "cue": "ii",
     "need": "Type O"
    }
   ],
   "hint": "Iᴬ and Iᴮ both show if present. i shows only when there are two of it.",
   "wrong": {
    "Type C": "There is no type C. The ABO gene has three alleles: Iᴬ, Iᴮ, and i.",
    "Type AO": "AO is a genotype idea, not a blood type. Iᴬi is type A because i is recessive."
   },
   "explain": "ABO blood type shows multiple alleles and codominance: Iᴬ and Iᴮ both show, and i is recessive."
  },
  {
   "id": "c-mutation",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "short": "Mutation effects",
   "title": "What happens? Grab the result of each DNA change.",
   "cueLabel": "Change",
   "builtLabel": "Result",
   "cueWord": "change",
   "tokenWord": "result",
   "rule": "Bases are read in groups of three. The order of bases sets the order of amino acids.",
   "choices": [
    "Same protein",
    "One amino acid changes",
    "Most amino acids after it change",
    "Not passed to children",
    "An extra chromosome",
    "All DNA is lost"
   ],
   "steps": [
    {
     "cue": "One base swapped, but it still codes for the same amino acid",
     "need": "Same protein"
    },
    {
     "cue": "One base swapped, and it codes for a different amino acid",
     "need": "One amino acid changes"
    },
    {
     "cue": "One base deleted near the start of a gene",
     "need": "Most amino acids after it change"
    },
    {
     "cue": "A mutation happens in a skin cell",
     "need": "Not passed to children"
    }
   ],
   "hint": "Was one base swapped, or was one removed? Was it in a body cell or a gamete?",
   "wrong": {
    "An extra chromosome": "A change in a base does not add a chromosome.",
    "All DNA is lost": "A mutation changes part of the DNA sequence; the rest of the DNA is still there."
   },
   "explain": "A swapped base may change nothing or one amino acid; a deleted base changes every group of three after it. Only mutations in gametes are inherited."
  },
  {
   "id": "c-meiosis",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "short": "Making variety",
   "title": "Where does the variety come from? Grab the event that matches each description.",
   "cueLabel": "Event",
   "builtLabel": "Named",
   "cueWord": "event",
   "tokenWord": "term",
   "rule": "Meiosis makes haploid gametes that are all different; fertilization joins two of them.",
   "choices": [
    "Crossing over",
    "Independent assortment",
    "Fertilization",
    "Meiosis",
    "Mitosis",
    "Replication"
   ],
   "steps": [
    {
     "cue": "Partner chromosomes from mom and dad swap matching pieces",
     "need": "Crossing over"
    },
    {
     "cue": "Each chromosome pair separates on its own, mixing mom's and dad's chromosomes",
     "need": "Independent assortment"
    },
    {
     "cue": "A sperm (23) joins an egg (23)",
     "need": "Fertilization"
    },
    {
     "cue": "One cell makes four sex cells with half the chromosomes",
     "need": "Meiosis"
    }
   ],
   "hint": "Swapping pieces, shuffling whole chromosomes, joining gametes, or making gametes?",
   "wrong": {
    "Mitosis": "Mitosis makes identical body cells, so it does not add variety.",
    "Replication": "Replication copies DNA; it does not mix alleles."
   },
   "explain": "Crossing over and independent assortment make every gamete different, and fertilization joins two of them, so offspring get new combinations of alleles."
  }
 ],
 "data": [
  {
   "id": "d-punnett",
   "code": "3.1.9-12.R",
   "topic": "punnett",
   "title": "Offspring of two Pp pea plants (purple P is dominant over white p)",
   "xlabel": "Genotype",
   "ylabel": "Number of offspring",
   "categories": [
    "PP",
    "Pp",
    "pp"
   ],
   "values": [
    26,
    49,
    25
   ],
   "questions": [
    {
     "prompt": "Which genotype was most common?",
     "answer": 1,
     "hint": "Find the tallest bar.",
     "explain": "About half the offspring were Pp, matching the 1:2:1 Punnett square prediction."
    },
    {
     "prompt": "Which genotype has WHITE flowers?",
     "answer": 2,
     "hint": "White shows only when there is no dominant P.",
     "explain": "Only pp plants are white: two recessive alleles."
    },
    {
     "prompt": "Which genotype is homozygous DOMINANT?",
     "answer": 0,
     "hint": "Homozygous means two of the same allele.",
     "explain": "PP has two dominant alleles: homozygous dominant."
    }
   ]
  },
  {
   "id": "d-growth",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "title": "Cells counted in one small area of a healing skin scrape",
   "xlabel": "Day after the scrape",
   "ylabel": "Number of cells",
   "categories": [
    "Day 0",
    "Day 2",
    "Day 4",
    "Day 6"
   ],
   "values": [
    20,
    45,
    90,
    100
   ],
   "questions": [
    {
     "prompt": "On which day were the MOST cells counted?",
     "answer": 3,
     "hint": "Find the tallest bar.",
     "explain": "By Day 6 the area had about 100 cells: mitosis had filled the scrape with new skin cells."
    },
    {
     "prompt": "Between which two days did the count jump the most? Pick the later day.",
     "answer": 2,
     "hint": "Look for the biggest jump between two bars next to each other.",
     "explain": "From Day 2 to Day 4 the count doubled (45 to 90) as cells kept dividing by mitosis."
    },
    {
     "prompt": "On which day were the FEWEST cells counted?",
     "answer": 0,
     "hint": "Find the shortest bar.",
     "explain": "On Day 0 the scrape had just happened. Over the next days, mitosis made new cells to repair it."
    }
   ]
  }
 ],
 "mazes": [
  {
   "id": "maze-genes",
   "code": "3.1.9-12.P",
   "topic": "genes",
   "title": "Zoom in: go through the doorway for the next smaller level",
   "start": "Pea plant",
   "steps": [
    {
     "label": "Cell",
     "hint": "The plant is made of these.",
     "why": "Every organism is made of cells."
    },
    {
     "label": "Nucleus",
     "hint": "Where is the DNA kept in a plant or animal cell?",
     "why": "The nucleus holds the cell's chromosomes."
    },
    {
     "label": "Chromosome",
     "hint": "A long, coiled DNA molecule.",
     "why": "Each chromosome is one long DNA molecule wrapped around proteins."
    },
    {
     "label": "Gene",
     "hint": "A section of DNA that codes for a protein.",
     "why": "Genes are sections of DNA along a chromosome."
    }
   ],
   "extra": [
    "Ribosome",
    "Protein"
   ],
   "explain": "Organism, cell, nucleus, chromosome, gene: genes are sections of the DNA inside chromosomes."
  }
 ],
 "sequences": [
  {
   "id": "s-meiosis",
   "code": "3.1.9-12.Q",
   "topic": "variation",
   "title": "How meiosis and fertilization make every child different: put the ideas in order",
   "steps": [
    "Each parent has two copies of every chromosome, one from each of their own parents",
    "When gametes form, partner chromosomes swap matching pieces (crossing over)",
    "Each gamete gets a different mix of chromosomes, so no two gametes are the same",
    "Fertilization joins one gamete from each parent into a new, unique combination"
   ],
   "hint": "Start with the parents' chromosomes and end with the new offspring.",
   "explain": "Crossing over and the random mix of chromosomes make every gamete different, and fertilization joins two of them, so each offspring gets a new combination of alleles."
  },
  {
   "id": "s-repair",
   "code": "3.1.9-12.D",
   "topic": "mitosis",
   "title": "How your body repairs a scraped knee",
   "steps": [
    "Skin cells at the edge of the scrape copy their DNA",
    "Each cell divides by mitosis into two identical cells",
    "The new cells fill in the gap",
    "The skin is whole again and the cells stop dividing"
   ],
   "hint": "Copy the DNA first, then divide.",
   "explain": "Mitosis makes new, identical skin cells to repair damage, and then division slows down again."
  },
  {
   "id": "s-differentiate",
   "code": "3.1.9-12.D",
   "topic": "differentiation",
   "title": "From one fertilized egg to many kinds of cells",
   "steps": [
    "A fertilized egg divides by mitosis",
    "The embryo becomes a ball of stem cells with the same DNA",
    "Stem cells use different genes and specialize (differentiate)",
    "Specialized cells form tissues such as muscle and nerve"
   ],
   "hint": "Make many cells first, then give them jobs.",
   "explain": "Mitosis makes the cells and differentiation gives them their jobs, building a complex organism."
  },
  {
   "id": "s-sunburn",
   "code": "3.1.9-12.Q",
   "topic": "mutation",
   "title": "How UV light can lead to a mutation",
   "steps": [
    "UV light from the Sun reaches skin cells",
    "The UV light damages a base in the DNA",
    "The cell copies the damaged DNA and makes a mistake",
    "Cells made from it carry the new base sequence: a mutation"
   ],
   "hint": "Damage first, then copying.",
   "explain": "UV light is an environmental factor that damages DNA. If the damage is copied before it is fixed, the change becomes a mutation."
  }
 ],
 "wordbanks": [
  {
   "id": "wb-division",
   "code": "3.1.9-12.Q",
   "topic": "gametes",
   "words": [
    "mitosis",
    "meiosis",
    "haploid",
    "diploid",
    "gametes",
    "allele"
   ],
   "sentences": [
    {
     "text": "Body cells divide by ___ to make two identical cells.",
     "answer": "mitosis",
     "code": "3.1.9-12.D",
     "explain": "Mitosis: growth and repair."
    },
    {
     "text": "Sperm and egg cells are made by ___.",
     "answer": "meiosis",
     "code": "3.1.9-12.Q",
     "explain": "Meiosis makes gametes."
    },
    {
     "text": "A cell with one set of chromosomes (23 in humans) is ___.",
     "answer": "haploid",
     "code": "3.1.9-12.P",
     "explain": "Haploid: one set."
    },
    {
     "text": "A body cell with two sets of chromosomes (46 in humans) is ___.",
     "answer": "diploid",
     "code": "3.1.9-12.P",
     "explain": "Diploid: two sets, one from each parent."
    },
    {
     "text": "Sperm and eggs are called ___.",
     "answer": "gametes",
     "code": "3.1.9-12.P",
     "explain": "Gametes are sex cells."
    }
   ]
  },
  {
   "id": "wb-genetics",
   "code": "3.1.9-12.R",
   "topic": "genes",
   "words": [
    "allele",
    "dominant",
    "recessive",
    "genotype",
    "phenotype",
    "mitosis"
   ],
   "sentences": [
    {
     "text": "A different version of a gene is an ___.",
     "answer": "allele",
     "code": "3.1.9-12.P",
     "explain": "Alleles are versions of the same gene."
    },
    {
     "text": "An allele that shows whenever it is present is ___.",
     "answer": "dominant",
     "code": "3.1.9-12.R",
     "explain": "Dominant alleles mask recessive ones."
    },
    {
     "text": "An allele that shows only when there are two copies is ___.",
     "answer": "recessive",
     "code": "3.1.9-12.R",
     "explain": "Recessive traits need two copies."
    },
    {
     "text": "The letters Pp describe an organism's ___.",
     "answer": "genotype",
     "code": "3.1.9-12.R",
     "explain": "Genotype: the alleles an organism has."
    },
    {
     "text": "Purple flowers describe a plant's ___.",
     "answer": "phenotype",
     "code": "3.1.9-12.R",
     "explain": "Phenotype: the trait you can observe."
    }
   ]
  }
 ],
 "lablocks": [
  {
   "id": "lock-4-3",
   "title": "Lab Lock",
   "clues": [
    {
     "prompt": "Clue 1: A Tt plant is crossed with a tt plant. Out of 4 offspring, how many are expected to be short (tt)?",
     "answer": 2,
     "code": "3.1.9-12.R",
     "hint": "Punnett square: Tt, Tt, tt, tt.",
     "explain": "Tt × tt gives 2 Tt and 2 tt, so 2 of 4 are expected to be short."
    },
    {
     "prompt": "Clue 2: How many different alleles does the human ABO blood type gene have?",
     "answer": 3,
     "code": "3.1.9-12.R",
     "hint": "Iᴬ, Iᴮ, and...",
     "explain": "Three alleles: Iᴬ, Iᴮ, and i. That is an example of multiple alleles."
    },
    {
     "prompt": "Clue 3: A cell with 4 chromosomes goes through meiosis. How many chromosomes are in each gamete?",
     "answer": 2,
     "code": "3.1.9-12.P",
     "hint": "Meiosis halves the number.",
     "explain": "Meiosis halves the chromosome number: 4 becomes 2."
    }
   ],
   "debrief": [
    "Clue 1 linked Punnett squares to probability: Tt × tt gives a 1:1 ratio.",
    "Clue 2 linked multiple alleles: a gene can have more than two versions in a population.",
    "Clue 3 linked meiosis: gametes have half the chromosome number."
   ]
  }
 ],
 "scans": [
  {
   "id": "s4-dna",
   "name": "Double helix",
   "look": "helix",
   "color": "#7fd4ff",
   "word": "DNA",
   "def": "The molecule that carries genetic information, shaped like a twisted ladder (double helix).",
   "note": "DNA's rungs are base pairs: A with T and G with C. Its order of bases spells out genes."
  },
  {
   "id": "s4-replication",
   "name": "Unzipping DNA",
   "look": "helix",
   "color": "#7be0ad",
   "word": "DNA replication",
   "def": "Copying all of a cell's DNA before the cell divides.",
   "note": "Each strand is a pattern for a new one: A pairs with T and G pairs with C. That is how each new cell gets the same DNA."
  },
  {
   "id": "s4-chromosome",
   "name": "Chromosome",
   "look": "rod",
   "color": "#c59cff",
   "word": "Chromosome",
   "def": "A long, coiled DNA molecule that carries many genes.",
   "note": "Humans have 46 CHROMOSOMES in each body cell: 23 pairs."
  },
  {
   "id": "s4-mitosis",
   "name": "Dividing cell",
   "look": "cell",
   "color": "#ffd166",
   "word": "Mitosis",
   "def": "Cell division that makes two new cells with identical DNA and the same chromosome number.",
   "note": "MITOSIS makes new cells for growth, for repair, and to replace old cells."
  },
  {
   "id": "s4-meiosis",
   "name": "Gamete factory",
   "look": "cell",
   "color": "#c59cff",
   "word": "Meiosis",
   "def": "Cell division that makes four haploid gametes, each genetically different.",
   "note": "MEIOSIS divides twice and halves the chromosome number, from 46 to 23 in humans."
  },
  {
   "id": "s4-gamete",
   "name": "Egg and sperm",
   "look": "eggs",
   "color": "#ff9fbf",
   "word": "Gamete",
   "def": "A sex cell (sperm or egg) with half the usual chromosome number.",
   "note": "Two GAMETES join at fertilization to make a zygote with a full set of chromosomes."
  },
  {
   "id": "s4-diploid",
   "name": "Paired set",
   "look": "rod",
   "color": "#7fd4ff",
   "word": "Diploid",
   "def": "Having two sets of chromosomes, one from each parent (2n).",
   "note": "Human body cells are DIPLOID: 46 chromosomes in 23 pairs."
  },
  {
   "id": "s4-haploid",
   "name": "Single set",
   "look": "rod",
   "color": "#ffd166",
   "word": "Haploid",
   "def": "Having one set of chromosomes (n).",
   "note": "Human gametes are HAPLOID: 23 chromosomes, one from each pair."
  },
  {
   "id": "s4-homolog",
   "name": "Chromosome partners",
   "look": "rod",
   "color": "#a8e07a",
   "word": "Homologous chromosomes",
   "def": "A pair of chromosomes, one from each parent, that carry the same genes.",
   "note": "HOMOLOGOUS CHROMOSOMES carry the same genes, but may carry different alleles."
  },
  {
   "id": "s4-crossover",
   "name": "Swapping arms",
   "look": "chain",
   "color": "#ff9f6e",
   "word": "Crossing over",
   "def": "The exchange of matching pieces between homologous chromosomes during meiosis.",
   "note": "CROSSING OVER makes new combinations of alleles, so every gamete is unique."
  },
  {
   "id": "s4-assort",
   "name": "Shuffled pairs",
   "look": "stack",
   "color": "#c59cff",
   "word": "Independent assortment",
   "def": "Chromosome pairs separate independently of each other during meiosis.",
   "note": "With 23 pairs lining up at random, INDEPENDENT ASSORTMENT can make over 8 million combinations."
  },
  {
   "id": "s4-gene",
   "name": "Gene",
   "look": "helix",
   "color": "#ffd166",
   "word": "Gene",
   "def": "A section of DNA that codes for a protein, which affects a trait.",
   "note": "A GENE is a stretch of DNA on a chromosome. The protein it codes for helps build a trait."
  },
  {
   "id": "s4-allele",
   "name": "Purple or white",
   "look": "stack",
   "color": "#c59cff",
   "word": "Allele",
   "def": "A different version of the same gene.",
   "note": "The flower-color gene in peas has two ALLELES: purple (P) and white (p)."
  },
  {
   "id": "s4-dominant",
   "name": "Purple pea flower",
   "look": "sprout",
   "color": "#a070e0",
   "word": "Dominant allele",
   "def": "An allele that shows its trait whenever it is present.",
   "note": "Purple (P) is DOMINANT: PP and Pp plants both have purple flowers."
  },
  {
   "id": "s4-recessive",
   "name": "White pea flower",
   "look": "sprout",
   "color": "#ffffff",
   "word": "Recessive allele",
   "def": "An allele that shows its trait only when two copies are present.",
   "note": "White (p) is RECESSIVE: only pp plants have white flowers."
  },
  {
   "id": "s4-genotype",
   "name": "Allele letters",
   "look": "chain",
   "color": "#7fd4ff",
   "word": "Genotype",
   "def": "The combination of alleles an organism has, such as Pp.",
   "note": "The GENOTYPE is the allele letters: PP, Pp, or pp."
  },
  {
   "id": "s4-phenotype",
   "name": "Flower color",
   "look": "sprout",
   "color": "#ff9fbf",
   "word": "Phenotype",
   "def": "The trait you can observe, such as purple flowers.",
   "note": "The PHENOTYPE is what shows: purple or white."
  },
  {
   "id": "s4-homozygous",
   "name": "Matching alleles",
   "look": "stack",
   "color": "#7be0ad",
   "word": "Homozygous",
   "def": "Having two identical alleles for a gene, such as PP or pp.",
   "note": "HOMO means same: PP and pp are HOMOZYGOUS."
  },
  {
   "id": "s4-heterozygous",
   "name": "Mixed alleles",
   "look": "stack",
   "color": "#ffd166",
   "word": "Heterozygous",
   "def": "Having two different alleles for a gene, such as Pp.",
   "note": "HETERO means different: Pp is HETEROZYGOUS (a carrier of the recessive allele)."
  },
  {
   "id": "s4-punnett",
   "name": "Punnett square",
   "look": "crystal",
   "color": "#7fd4ff",
   "word": "Punnett square",
   "def": "A grid used to predict the possible genotypes of offspring.",
   "note": "A PUNNETT SQUARE crossing Pp × Pp predicts 1 PP : 2 Pp : 1 pp."
  },
  {
   "id": "s4-incomplete",
   "name": "Pink snapdragon",
   "look": "sprout",
   "color": "#ff9fbf",
   "word": "Incomplete dominance",
   "def": "A pattern where the heterozygote shows a blend of the two traits.",
   "note": "Red × white snapdragons give pink offspring: INCOMPLETE DOMINANCE."
  },
  {
   "id": "s4-codominance",
   "name": "Roan calf",
   "look": "critter",
   "color": "#c8785a",
   "word": "Codominance",
   "def": "A pattern where both alleles are fully shown at the same time.",
   "note": "A roan calf has red hairs AND white hairs: CODOMINANCE."
  },
  {
   "id": "s4-multiple",
   "name": "Blood sample",
   "look": "drop",
   "color": "#e85d5d",
   "word": "Multiple alleles",
   "def": "A gene that has more than two alleles in a population.",
   "note": "The ABO blood type gene has three alleles (Iᴬ, Iᴮ, i): MULTIPLE ALLELES."
  },
  {
   "id": "s4-sexlinked",
   "name": "X chromosome",
   "look": "rod",
   "color": "#7fd4ff",
   "word": "Sex-linked trait",
   "def": "A trait whose gene is on a sex chromosome, usually the X.",
   "note": "Color blindness is SEX-LINKED: males (XY) show it with just one recessive allele."
  },
  {
   "id": "s4-polygenic",
   "name": "Range of heights",
   "look": "stack",
   "color": "#a8e07a",
   "word": "Polygenic trait",
   "def": "A trait controlled by many genes, showing a smooth range of phenotypes.",
   "note": "Height and skin color are POLYGENIC: many genes add up to a range of shades and sizes."
  },
  {
   "id": "s4-mutation",
   "name": "Changed DNA",
   "look": "helix",
   "color": "#e85d5d",
   "word": "Mutation",
   "def": "A change in the DNA sequence.",
   "note": "A MUTATION can be harmful, helpful, or have no effect, depending on how it changes the protein."
  },
  {
   "id": "s4-substitution",
   "name": "Swapped base",
   "look": "helix",
   "color": "#ffd166",
   "word": "Point mutation",
   "def": "A mutation that changes a single base.",
   "note": "A POINT MUTATION swaps one base. It may change nothing, change one amino acid, or stop the protein early."
  },
  {
   "id": "s4-frameshift",
   "name": "Shifted code",
   "look": "chain",
   "color": "#ff9f6e",
   "word": "Frameshift mutation",
   "def": "An insertion or deletion of bases that shifts how every codon after it is read.",
   "note": "Codons are read in threes, so adding or removing one base causes a FRAMESHIFT."
  },
  {
   "id": "s4-mutagen",
   "name": "Ultraviolet light",
   "look": "sun",
   "color": "#c59cff",
   "word": "Mutagen",
   "def": "Something that can cause mutations, such as UV light, X-rays, or certain chemicals.",
   "note": "Sunscreen protects skin cells' DNA from UV light, a common MUTAGEN."
  },
  {
   "id": "s4-repair",
   "name": "Healing scrape",
   "look": "cell",
   "color": "#ffb3a7",
   "word": "Growth and repair",
   "def": "Making new cells by mitosis so an organism can grow, heal, and replace worn-out cells.",
   "note": "Your skin replaces its outer layer about every month or two: millions of new cells made by MITOSIS."
  },
  {
   "id": "s4-stemcell",
   "name": "Unspecialized cell",
   "look": "cell",
   "color": "#7be0ad",
   "word": "Stem cell",
   "def": "An unspecialized cell that can divide and develop into different kinds of cells.",
   "note": "An early embryo is a ball of STEM CELLS. Some stem cells stay in the body to replace blood and skin cells."
  },
  {
   "id": "s4-differentiation",
   "name": "Specialized cells",
   "look": "stack",
   "color": "#c59cff",
   "word": "Differentiation",
   "def": "The process by which a cell becomes specialized for one job, by using some of its genes and not others.",
   "note": "Nerve, muscle, and skin cells have the same DNA. DIFFERENTIATION gives each its own shape and job."
  },
  {
   "id": "s4-fertilization",
   "name": "Sperm meets egg",
   "look": "eggs",
   "color": "#ff9fbf",
   "word": "Fertilization",
   "def": "The joining of a sperm and an egg to make a zygote with a full set of chromosomes.",
   "note": "FERTILIZATION: 23 chromosomes from the sperm + 23 from the egg = 46 in the zygote."
  },
  {
   "id": "s4-copyerror",
   "name": "Copy mistake",
   "look": "helix",
   "color": "#ffd166",
   "word": "Copying error",
   "def": "A rare mistake made when DNA is copied that is not fixed, which changes the base sequence.",
   "note": "Cells check and fix their DNA, but a few COPYING ERRORS slip through and become mutations."
  },
  {
   "id": "s4-sickle",
   "name": "Sickle-shaped cell",
   "look": "drop",
   "color": "#e85d5d",
   "word": "Sickle cell mutation",
   "def": "A one-base change in the hemoglobin gene that changes one amino acid in hemoglobin.",
   "note": "One changed base, one changed amino acid: the hemoglobin clumps and red blood cells can bend into a SICKLE shape."
  },
  {
   "id": "s4-bodycell",
   "name": "Sunburned skin",
   "look": "cell",
   "color": "#ff9f6e",
   "word": "Body-cell mutation",
   "def": "A mutation in a body cell, such as a skin cell. It can affect the person but is not passed to children.",
   "note": "A skin cell damaged by UV light can carry a BODY-CELL MUTATION, but your children inherit only gamete DNA."
  },
  {
   "id": "s4-gametemut",
   "name": "Changed egg",
   "look": "eggs",
   "color": "#c59cff",
   "word": "Inherited mutation",
   "def": "A mutation in a sperm or egg cell that can be passed to offspring.",
   "note": "Only mutations in GAMETES are inherited. They add new variation to a population."
  },
  {
   "id": "s4-helpful",
   "name": "Milk drinker",
   "look": "critter",
   "color": "#f4f0e4",
   "word": "Helpful mutation",
   "def": "A mutation that gives an advantage in an environment.",
   "note": "A mutation that keeps the lactase gene working lets some adults digest milk: a HELPFUL MUTATION."
  }
 ],
 "vocab": [
  {
   "term": "DNA",
   "def": "The molecule that carries genetic information, shaped like a twisted ladder (double helix)."
  },
  {
   "term": "DNA replication",
   "def": "Copying all of a cell's DNA before the cell divides."
  },
  {
   "term": "Chromosome",
   "def": "A long, coiled DNA molecule that carries many genes."
  },
  {
   "term": "Mitosis",
   "def": "Cell division that makes two new cells with identical DNA and the same chromosome number."
  },
  {
   "term": "Meiosis",
   "def": "Cell division that makes four haploid gametes, each genetically different."
  },
  {
   "term": "Gamete",
   "def": "A sex cell (sperm or egg) with half the usual chromosome number."
  },
  {
   "term": "Diploid",
   "def": "Having two sets of chromosomes, one from each parent (2n)."
  },
  {
   "term": "Haploid",
   "def": "Having one set of chromosomes (n)."
  },
  {
   "term": "Homologous chromosomes",
   "def": "A pair of chromosomes, one from each parent, that carry the same genes."
  },
  {
   "term": "Crossing over",
   "def": "The exchange of matching pieces between homologous chromosomes during meiosis."
  },
  {
   "term": "Independent assortment",
   "def": "Chromosome pairs separate independently of each other during meiosis."
  },
  {
   "term": "Gene",
   "def": "A section of DNA that codes for a protein, which affects a trait."
  },
  {
   "term": "Allele",
   "def": "A different version of the same gene."
  },
  {
   "term": "Dominant allele",
   "def": "An allele that shows its trait whenever it is present."
  },
  {
   "term": "Recessive allele",
   "def": "An allele that shows its trait only when two copies are present."
  },
  {
   "term": "Genotype",
   "def": "The combination of alleles an organism has, such as Pp."
  },
  {
   "term": "Phenotype",
   "def": "The trait you can observe, such as purple flowers."
  },
  {
   "term": "Homozygous",
   "def": "Having two identical alleles for a gene, such as PP or pp."
  },
  {
   "term": "Heterozygous",
   "def": "Having two different alleles for a gene, such as Pp."
  },
  {
   "term": "Punnett square",
   "def": "A grid used to predict the possible genotypes of offspring."
  },
  {
   "term": "Incomplete dominance",
   "def": "A pattern where the heterozygote shows a blend of the two traits."
  },
  {
   "term": "Codominance",
   "def": "A pattern where both alleles are fully shown at the same time."
  },
  {
   "term": "Multiple alleles",
   "def": "A gene that has more than two alleles in a population."
  },
  {
   "term": "Sex-linked trait",
   "def": "A trait whose gene is on a sex chromosome, usually the X."
  },
  {
   "term": "Polygenic trait",
   "def": "A trait controlled by many genes, showing a smooth range of phenotypes."
  },
  {
   "term": "Mutation",
   "def": "A change in the DNA sequence."
  },
  {
   "term": "Point mutation",
   "def": "A mutation that changes a single base."
  },
  {
   "term": "Frameshift mutation",
   "def": "An insertion or deletion of bases that shifts how every codon after it is read."
  },
  {
   "term": "Mutagen",
   "def": "Something that can cause mutations, such as UV light, X-rays, or certain chemicals."
  },
  {
   "term": "Growth and repair",
   "def": "Making new cells by mitosis so an organism can grow, heal, and replace worn-out cells."
  },
  {
   "term": "Stem cell",
   "def": "An unspecialized cell that can divide and develop into different kinds of cells."
  },
  {
   "term": "Differentiation",
   "def": "The process by which a cell becomes specialized for one job, by using some of its genes and not others."
  },
  {
   "term": "Fertilization",
   "def": "The joining of a sperm and an egg to make a zygote with a full set of chromosomes."
  },
  {
   "term": "Copying error",
   "def": "A rare mistake made when DNA is copied that is not fixed, which changes the base sequence."
  },
  {
   "term": "Sickle cell mutation",
   "def": "A one-base change in the hemoglobin gene that changes one amino acid in hemoglobin."
  },
  {
   "term": "Body-cell mutation",
   "def": "A mutation in a body cell, such as a skin cell. It can affect the person but is not passed to children."
  },
  {
   "term": "Inherited mutation",
   "def": "A mutation in a sperm or egg cell that can be passed to offspring."
  },
  {
   "term": "Helpful mutation",
   "def": "A mutation that gives an advantage in an environment."
  }
 ]
});
