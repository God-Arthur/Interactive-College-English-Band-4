// Part III 词汇单选题库 (204 题)
// 覆盖《大学英语四》Unit 1 - Unit 7 全部词汇
// 优先考查 ★ 重点词及多义词的次要义项

const part3Questions = [
  {
    sentence: "She complained that the research project was delayed mainly due to ___ management.",
    options: [
      { text: "forgiving", correct: false },
      { text: "attentive", correct: false },
      { text: "adequate", correct: false },
      { text: "slipshod", correct: true }
    ],
    answer: 3,
    explanation: "slipshod 意为'马虎的、草率的'，含贬义，常修饰工作或管理。"
  },
  {
    sentence: "I talked too much about myself and felt like a ___ old fool.",
    options: [
      { text: "tolerant", correct: false },
      { text: "garrulous", correct: true },
      { text: "dull", correct: false },
      { text: "mediocre", correct: false }
    ],
    answer: 1,
    explanation: "garrulous 意为'喋喋不休的、饶舌的'，常指就无关紧要的事情说个不停。"
  },
  {
    sentence: "You must start by ___ all the bad habits your previous piano teacher taught you!",
    options: [
      { text: "tolerating", correct: false },
      { text: "erasing", correct: false },
      { text: "broadening", correct: false },
      { text: "unlearning", correct: true }
    ],
    answer: 3,
    explanation: "unlearn 意为'设法忘记、抛弃（已学会的东西）'，指刻意忘掉以改变做事方式。"
  },
  {
    sentence: "Relations between the two countries have been in a ___ state for some time.",
    options: [
      { text: "conventional", correct: false },
      { text: "parlous", correct: true },
      { text: "preparatory", correct: false },
      { text: "forgiving", correct: false }
    ],
    answer: 1,
    explanation: "parlous（fml.）意为'状况极坏的、非常危险的'。"
  },
  {
    sentence: "It's such a simple question. If you don't understand then you are ___ than I thought.",
    options: [
      { text: "duller", correct: true },
      { text: "smugger", correct: false },
      { text: "broader", correct: false },
      { text: "frantic", correct: false }
    ],
    answer: 0,
    explanation: "dull 此处考其'迟钝的、愚笨的'义项，而非常见的'无趣味的'。"
  },
  {
    sentence: "Some people worry that the advances in information technology may ___ citizens of their privacy.",
    options: [
      { text: "confront", correct: false },
      { text: "deprive", correct: true },
      { text: "spoil", correct: false },
      { text: "tolerate", correct: false }
    ],
    answer: 1,
    explanation: "deprive sb. of sth. 意为'剥夺'。"
  },
  {
    sentence: "Here are some problems that have ___ scientists all over the world in the past decade.",
    options: [
      { text: "tossed", correct: false },
      { text: "confronted", correct: true },
      { text: "insulted", correct: false },
      { text: "interrupted", correct: false }
    ],
    answer: 1,
    explanation: "confront 此处考'（问题/困境）临到…头上'的义项。"
  },
  {
    sentence: "She has lots of good ideas, but she has difficulty ___ them in front of investors.",
    options: [
      { text: "visualizing", correct: false },
      { text: "broadening", correct: false },
      { text: "contemplating", correct: false },
      { text: "formulating", correct: true }
    ],
    answer: 3,
    explanation: "formulate 此处考'仔细思考并明确表达'的义项。"
  },
  {
    sentence: "The course helps school-leavers ___ their knowledge of the world of work.",
    options: [
      { text: "shrug", correct: false },
      { text: "spoil", correct: false },
      { text: "broaden", correct: true },
      { text: "insult", correct: false }
    ],
    answer: 2,
    explanation: "broaden 意为'增长（知识、经验）'。"
  },
  {
    sentence: "It appears the names were accidentally ___ from the computer hard drive.",
    options: [
      { text: "tossed", correct: false },
      { text: "erased", correct: true },
      { text: "shrugged", correct: false },
      { text: "interrupted", correct: false }
    ],
    answer: 1,
    explanation: "erase 此处考'删除（计算机文件）'的义项。"
  },
  {
    sentence: "I have asked you to do this tough task because I know you are not a ___.",
    options: [
      { text: "scholar", correct: false },
      { text: "co-worker", correct: false },
      { text: "quitter", correct: true },
      { text: "exterminator", correct: false }
    ],
    answer: 2,
    explanation: "quitter 意为'遇到困难就放弃的人、半途而废的人'。"
  },
  {
    sentence: "It is the ___ to blame others for our failure though it doesn't make any sense.",
    options: [
      { text: "easy way out", correct: true },
      { text: "slam dunk", correct: false },
      { text: "rat race", correct: false },
      { text: "bucket list", correct: false }
    ],
    answer: 0,
    explanation: "the easy way out 意为'省事的做法'。"
  },
  {
    sentence: "An architect can look at a drawing and ___ a three-dimensional shape.",
    options: [
      { text: "formulate", correct: false },
      { text: "contemplate", correct: false },
      { text: "visualize", correct: true },
      { text: "interrupt", correct: false }
    ],
    answer: 2,
    explanation: "visualize 意为'设想、想象'。"
  },
  {
    sentence: "Sasha was too ___ by what had happened in the office to say a word.",
    options: [
      { text: "shrugged", correct: false },
      { text: "stunned", correct: true },
      { text: "tossed", correct: false },
      { text: "jeered", correct: false }
    ],
    answer: 1,
    explanation: "stun 意为'使（某人）震惊'，常用被动。"
  },
  {
    sentence: "After the match, the disappointed fans were all ___ at the football team.",
    options: [
      { text: "shrugging", correct: false },
      { text: "jeering", correct: true },
      { text: "groaning", correct: false },
      { text: "rustling", correct: false }
    ],
    answer: 1,
    explanation: "jeer at sb. 意为'嘲笑、嘲弄'。"
  },
  {
    sentence: "The rescuers could hear the ___ of someone trapped in the ruins.",
    options: [
      { text: "leers", correct: false },
      { text: "groans", correct: true },
      { text: "indexes", correct: false },
      { text: "shrugs", correct: false }
    ],
    answer: 1,
    explanation: "groan 此处考'呻吟（疼痛时发出的）'的义项。"
  },
  {
    sentence: "Peter was wearing an unbearably ___ expression and waving the tickets in front of me.",
    options: [
      { text: "smug", correct: true },
      { text: "grumpy", correct: false },
      { text: "frantic", correct: false },
      { text: "audible", correct: false }
    ],
    answer: 0,
    explanation: "smug 意为'自鸣得意的、沾沾自喜的'，含贬义。"
  },
  {
    sentence: "It was no longer financially ___ to keep the community center open.",
    options: [
      { text: "audible", correct: false },
      { text: "verbatim", correct: false },
      { text: "feasible", correct: true },
      { text: "mediocre", correct: false }
    ],
    answer: 2,
    explanation: "feasible 意为'可行的、行得通的'。"
  },
  {
    sentence: "Noah was furious at what I just said but didn't shout and just ___ at me silently.",
    options: [
      { text: "shrugged", correct: false },
      { text: "rustled", correct: false },
      { text: "tossed", correct: false },
      { text: "glared", correct: true }
    ],
    answer: 3,
    explanation: "glare 意为'怒目而视'。"
  },
  {
    sentence: "Miss Phillips looked at the clock ___ and I realized that it was time for me to leave.",
    options: [
      { text: "frantically", correct: false },
      { text: "pointedly", correct: true },
      { text: "supposedly", correct: false },
      { text: "oddly", correct: false }
    ],
    answer: 1,
    explanation: "pointedly 意为'明确地、直言不讳地'，含暗示态度。"
  },
  {
    sentence: "The president's speeches are regularly reproduced ___ in the state-run newspapers.",
    options: [
      { text: "verbatim", correct: true },
      { text: "broadly", correct: false },
      { text: "oddly", correct: false },
      { text: "supposedly", correct: false }
    ],
    answer: 0,
    explanation: "verbatim 意为'逐字地、一字不差地'。"
  },
  {
    sentence: "His voice was barely ___ above the noise of the crowd.",
    options: [
      { text: "audible", correct: true },
      { text: "rotten", correct: false },
      { text: "blurred", correct: false },
      { text: "dull", correct: false }
    ],
    answer: 0,
    explanation: "audible 意为'听得见的'。"
  },
  {
    sentence: "I've been working ___ all week to get the term paper finished before the deadline.",
    options: [
      { text: "supposedly", correct: false },
      { text: "tolerantly", correct: false },
      { text: "frantically", correct: true },
      { text: "verbatim", correct: false }
    ],
    answer: 2,
    explanation: "frantically 意为'手忙脚乱地、紧张忙乱地'。"
  },
  {
    sentence: "Many years ago he had ___ writing a book about his childhood.",
    options: [
      { text: "popularized", correct: false },
      { text: "erased", correct: false },
      { text: "contemplated", correct: true },
      { text: "visualized", correct: false }
    ],
    answer: 2,
    explanation: "contemplate 此处考'打算、考虑（将来要做的事）'的义项。"
  },
  {
    sentence: "Now that the ___ was over, he could tell them what he really thought.",
    options: [
      { text: "fantasy", correct: false },
      { text: "groan", correct: false },
      { text: "index", correct: false },
      { text: "pretence", correct: true }
    ],
    answer: 3,
    explanation: "pretence 意为'假装、做作'。"
  },
  {
    sentence: "These teenagers are likely to ___ their feelings of insecurity by being moody and aggressive.",
    options: [
      { text: "look back", correct: false },
      { text: "act out", correct: true },
      { text: "drop out", correct: false },
      { text: "pack up", correct: false }
    ],
    answer: 1,
    explanation: "act out 意为'用行动来表现情绪（尤指愤怒或紧张）'。"
  },
  {
    sentence: "Tourists crowd the gift shops along the street to buy ___ products at high prices.",
    options: [
      { text: "adequate", correct: false },
      { text: "feasible", correct: false },
      { text: "mediocre", correct: true },
      { text: "marketable", correct: false }
    ],
    answer: 2,
    explanation: "mediocre 意为'不太好的、平庸的'。"
  },
  {
    sentence: "People need time to ___ what the changes in taxation will mean for them.",
    options: [
      { text: "act out", correct: false },
      { text: "look back", correct: false },
      { text: "think through", correct: true },
      { text: "drop out", correct: false }
    ],
    answer: 2,
    explanation: "think through 意为'认真地考虑（某事可能产生的结果）'。"
  },
  {
    sentence: "Lack of confidence is a psychological ___ to success.",
    options: [
      { text: "perk", correct: false },
      { text: "hierarchy", correct: false },
      { text: "cubicle", correct: false },
      { text: "barrier", correct: true }
    ],
    answer: 3,
    explanation: "barrier 此处考'障碍、阻力'义项。"
  },
  {
    sentence: "I eat all three meals per day, five days a week, in the company because they are free — one of the ___ of the job.",
    options: [
      { text: "perks", correct: true },
      { text: "barriers", correct: false },
      { text: "norms", correct: false },
      { text: "naps", correct: false }
    ],
    answer: 0,
    explanation: "perk 意为'（工资以外的）额外收入、待遇'。"
  },
  {
    sentence: "She worked her way up through the corporate ___ to become a member of the top management.",
    options: [
      { text: "cubicle", correct: false },
      { text: "investigation", correct: false },
      { text: "headquarters", correct: false },
      { text: "hierarchy", correct: true }
    ],
    answer: 3,
    explanation: "hierarchy 意为'等级制度'。"
  },
  {
    sentence: "Foley has been particularly ___ in his criticism of the social injustice he has witnessed in his country.",
    options: [
      { text: "rotten", correct: false },
      { text: "blurred", correct: false },
      { text: "vocal", correct: true },
      { text: "liberal", correct: false }
    ],
    answer: 2,
    explanation: "vocal 意为'激烈地表达意见的、直言不讳的'。"
  },
  {
    sentence: "The boundaries between history and storytelling are sometimes ___.",
    options: [
      { text: "blurred", correct: true },
      { text: "rotten", correct: false },
      { text: "vocal", correct: false },
      { text: "verbatim", correct: false }
    ],
    answer: 0,
    explanation: "blurred 意为'难以区分的、模棱两可的'。"
  },
  {
    sentence: "She ___ her novel as a musical comedy, which turned out to be a greater hit than the original work.",
    options: [
      { text: "recast", correct: true },
      { text: "flattened", correct: false },
      { text: "reinvented", correct: false },
      { text: "popularized", correct: false }
    ],
    answer: 0,
    explanation: "recast 意为'重塑、重组（改变形式）'。"
  },
  {
    sentence: "Short-term contracts are now the ___ with some big companies.",
    options: [
      { text: "perk", correct: false },
      { text: "barrier", correct: false },
      { text: "norm", correct: true },
      { text: "merit", correct: false }
    ],
    answer: 2,
    explanation: "norm 意为'常态、规范'。"
  },
  {
    sentence: "Tom has ___ his membership of the golf club.",
    options: [
      { text: "resigned", correct: true },
      { text: "swirled", correct: false },
      { text: "popularized", correct: false },
      { text: "reinvented", correct: false }
    ],
    answer: 0,
    explanation: "resign 意为'辞职、放弃（工作、职位）'。"
  },
  {
    sentence: "He made ___ of corruption against the administration.",
    options: [
      { text: "tweets", correct: false },
      { text: "perks", correct: false },
      { text: "merits", correct: false },
      { text: "allegations", correct: true }
    ],
    answer: 3,
    explanation: "allegation 意为'（尤指无证据的）宣称、指控'。"
  },
  {
    sentence: "The goalkeeper was sent off for using ___ language against a linesman.",
    options: [
      { text: "depressing", correct: false },
      { text: "abusive", correct: true },
      { text: "vocal", correct: false },
      { text: "blurred", correct: false }
    ],
    answer: 1,
    explanation: "abusive 意为'谩骂的、虐待的'。"
  },
  {
    sentence: "There has to be a ___ between quality and quantity if we want to keep prices low.",
    options: [
      { text: "rat race", correct: false },
      { text: "trade-off", correct: true },
      { text: "norm", correct: false },
      { text: "barrier", correct: false }
    ],
    answer: 1,
    explanation: "trade-off 意为'平衡、妥协'。"
  },
  {
    sentence: "Prolonging life ___ its quality can rob elderly people of meaningful years.",
    options: [
      { text: "let alone", correct: false },
      { text: "at the expense of", correct: true },
      { text: "on tap", correct: false },
      { text: "come along", correct: false }
    ],
    answer: 1,
    explanation: "at the expense of 意为'以…为代价'。"
  },
  {
    sentence: "You might practice gratitude, which is necessary to empower your mind and ___ your power of attraction.",
    options: [
      { text: "swirl", correct: false },
      { text: "amplify", correct: true },
      { text: "spill", correct: false },
      { text: "wallpaper", correct: false }
    ],
    answer: 1,
    explanation: "amplify 意为'增强'。"
  },
  {
    sentence: "Charles' letters were published against all odds, ___ in a somewhat abbreviated form.",
    options: [
      { text: "let alone", correct: false },
      { text: "albeit", correct: true },
      { text: "as such", correct: false },
      { text: "vice versa", correct: false }
    ],
    answer: 1,
    explanation: "albeit（fml.）意为'虽然、尽管'。"
  },
  {
    sentence: "If you have a fire alarm fitted, make sure it is done by a ___ company.",
    options: [
      { text: "blurred", correct: false },
      { text: "vocal", correct: false },
      { text: "rotten", correct: false },
      { text: "reputable", correct: true }
    ],
    answer: 3,
    explanation: "reputable 意为'有声望的、信誉佳的'。"
  },
  {
    sentence: "Emergency medicine is one of the most important ___.",
    options: [
      { text: "allegations", correct: false },
      { text: "perks", correct: false },
      { text: "outfits", correct: false },
      { text: "specialties", correct: true }
    ],
    answer: 3,
    explanation: "specialty 此处考'医学专科'的义项。"
  },
  {
    sentence: "Tonight's meeting will weigh up the relative ___ of the two candidates.",
    options: [
      { text: "perks", correct: false },
      { text: "norms", correct: false },
      { text: "barriers", correct: false },
      { text: "merits", correct: true }
    ],
    answer: 3,
    explanation: "merit 此处考'长处、优点'义项。"
  },
  {
    sentence: "For decades in American households the most ___ morning sound was that of an alarm clock.",
    options: [
      { text: "absurd", correct: false },
      { text: "depressing", correct: false },
      { text: "dreaded", correct: true },
      { text: "abusive", correct: false }
    ],
    answer: 2,
    explanation: "dreaded 意为'可怕的、令人忧虑的'（常为幽默用法）。"
  },
  {
    sentence: "Our communication has changed ___ in the past decade owing to information technology.",
    options: [
      { text: "supposedly", correct: false },
      { text: "drastically", correct: true },
      { text: "verbatim", correct: false },
      { text: "tumultuously", correct: false }
    ],
    answer: 1,
    explanation: "drastically 意为'激烈地、大幅度地'。"
  },
  {
    sentence: "He was trying to digest the news by himself, cigarette smoke ___ around him.",
    options: [
      { text: "rustling", correct: false },
      { text: "swirling", correct: true },
      { text: "spilling", correct: false },
      { text: "flipping", correct: false }
    ],
    answer: 1,
    explanation: "swirl 意为'打旋、旋动'。"
  },
  {
    sentence: "The police officer refused to ___ the witness' private information to the reporters to protect her security.",
    options: [
      { text: "flip", correct: false },
      { text: "spill", correct: true },
      { text: "swirl", correct: false },
      { text: "amplify", correct: false }
    ],
    answer: 1,
    explanation: "spill 此处考其'透露（机密信息）'义项，而非常见的'溢出'。"
  },
  {
    sentence: "He claimed that the restaurant bill was a ___ business expense and should be covered by the company.",
    options: [
      { text: "liberal", correct: false },
      { text: "feasible", correct: false },
      { text: "blurred", correct: false },
      { text: "legitimate", correct: true }
    ],
    answer: 3,
    explanation: "legitimate 此处考'合理的、正当的'义项。"
  },
  {
    sentence: "I want to make one thing ___ — I do not agree with these proposals.",
    options: [
      { text: "verbatim", correct: false },
      { text: "albeit", correct: false },
      { text: "vocal", correct: false },
      { text: "crystal clear", correct: true }
    ],
    answer: 3,
    explanation: "crystal clear 意为'明白无误的'。"
  },
  {
    sentence: "They had ___ behavior from their son which they would not have tolerated from anyone else.",
    options: [
      { text: "popped up", correct: false },
      { text: "hung out", correct: false },
      { text: "tuned out", correct: false },
      { text: "put up with", correct: true }
    ],
    answer: 3,
    explanation: "put up with 意为'容忍'。"
  },
  {
    sentence: "Many international companies want to ___ the water in China as they see the huge investment potential.",
    options: [
      { text: "test", correct: true },
      { text: "amplify", correct: false },
      { text: "swirl", correct: false },
      { text: "spill", correct: false }
    ],
    answer: 0,
    explanation: "test the water(s) 意为'试探'。"
  },
  {
    sentence: "We'll all be there at 6 for the surprise party — now don't ___ the beans unless you want to spoil the fun.",
    options: [
      { text: "spill", correct: true },
      { text: "flip", correct: false },
      { text: "shift", correct: false },
      { text: "tune", correct: false }
    ],
    answer: 0,
    explanation: "spill the beans 意为'泄露秘密'。"
  },
  {
    sentence: "The first half of the movie made the audience fall out of their chairs laughing, but then it ___ gears.",
    options: [
      { text: "popped", correct: false },
      { text: "shifted", correct: true },
      { text: "amplified", correct: false },
      { text: "tuned", correct: false }
    ],
    answer: 1,
    explanation: "shift gears 意为'突然改变方式'。"
  },
  {
    sentence: "The pressure from information overload can make some people ___ messages altogether.",
    options: [
      { text: "hang out", correct: false },
      { text: "go off", correct: false },
      { text: "tune out", correct: true },
      { text: "pop up", correct: false }
    ],
    answer: 2,
    explanation: "tune out 意为'不听、不注意'。"
  },
  {
    sentence: "We are always looking for more interesting and ___ ideas to share with our readers.",
    options: [
      { text: "rigid", correct: false },
      { text: "invisible", correct: false },
      { text: "alien", correct: false },
      { text: "insightful", correct: true }
    ],
    answer: 3,
    explanation: "insightful 意为'富有洞察力的'。"
  },
  {
    sentence: "The point at which the solid and the liquid are in ___ is called the freezing point.",
    options: [
      { text: "intervention", correct: false },
      { text: "equilibrium", correct: true },
      { text: "incentive", correct: false },
      { text: "dilemma", correct: false }
    ],
    answer: 1,
    explanation: "equilibrium 意为'平衡、均势'。"
  },
  {
    sentence: "The management committee decided to close the museum ___ because it cost too much to run.",
    options: [
      { text: "purely", correct: true },
      { text: "solely", correct: false },
      { text: "implausibly", correct: false },
      { text: "ultimately", correct: false }
    ],
    answer: 0,
    explanation: "purely 意为'完全地、纯粹地、仅仅'。"
  },
  {
    sentence: "The ___ over human cloning lies at the heart of the ethical choices facing society.",
    options: [
      { text: "incentive", correct: false },
      { text: "intervention", correct: false },
      { text: "equivalent", correct: false },
      { text: "dilemma", correct: true }
    ],
    answer: 3,
    explanation: "dilemma 意为'进退两难的境地、困境'。"
  },
  {
    sentence: "I think it's our ___ responsibility to create an environment for future generations to be even more successful.",
    options: [
      { text: "binding", correct: false },
      { text: "rigid", correct: false },
      { text: "comparative", correct: false },
      { text: "collective", correct: true }
    ],
    answer: 3,
    explanation: "collective 意为'集体的、共同的'。"
  },
  {
    sentence: "This sophisticated technology allows scientists to find things that are ___ to the naked eye.",
    options: [
      { text: "rigid", correct: false },
      { text: "invisible", correct: true },
      { text: "feasible", correct: false },
      { text: "alien", correct: false }
    ],
    answer: 1,
    explanation: "invisible 意为'看不见的'。"
  },
  {
    sentence: "In some cases, lowering interest rates could have ___ consequences for the economy.",
    options: [
      { text: "gratifying", correct: false },
      { text: "compassionate", correct: false },
      { text: "feasible", correct: false },
      { text: "disastrous", correct: true }
    ],
    answer: 3,
    explanation: "disastrous 意为'灾难性的'。"
  },
  {
    sentence: "Gabrielle ___ to leaking copies of the documents to the press because she wanted to expose the corruption in the company.",
    options: [
      { text: "accused", correct: false },
      { text: "confessed", correct: true },
      { text: "implored", correct: false },
      { text: "comprehended", correct: false }
    ],
    answer: 1,
    explanation: "confess to doing 意为'坦白、招认'。"
  },
  {
    sentence: "No one could ever ___ this government of not caring about the poor.",
    options: [
      { text: "confess", correct: false },
      { text: "accuse", correct: true },
      { text: "implore", correct: false },
      { text: "uncover", correct: false }
    ],
    answer: 1,
    explanation: "accuse sb. of sth. 意为'指控、指责'。"
  },
  {
    sentence: "They insist their business idea is ___ and will be widely accepted by customers.",
    options: [
      { text: "rigid", correct: false },
      { text: "alien", correct: false },
      { text: "optimal", correct: true },
      { text: "binding", correct: false }
    ],
    answer: 2,
    explanation: "optimal 意为'最佳的、最适宜的'。"
  },
  {
    sentence: "You'd be ___ living on your own than quarrelling all the time with your dad.",
    options: [
      { text: "well-off", correct: false },
      { text: "better off", correct: true },
      { text: "on offer", correct: false },
      { text: "over the hill", correct: false }
    ],
    answer: 1,
    explanation: "better off 意为'更好的'。"
  },
  {
    sentence: "Is there a French word that is the exact ___ of the English word 'home'?",
    options: [
      { text: "equivalent", correct: true },
      { text: "dilemma", correct: false },
      { text: "incentive", correct: false },
      { text: "equilibrium", correct: false }
    ],
    answer: 0,
    explanation: "equivalent 意为'同等物、对应物'。"
  },
  {
    sentence: "After living in poverty for most of his lifetime, he spent his last few years in ___ comfort.",
    options: [
      { text: "compassionate", correct: false },
      { text: "collective", correct: false },
      { text: "comparative", correct: true },
      { text: "complementary", correct: false }
    ],
    answer: 2,
    explanation: "comparative 意为'比较而言的、相对的'。"
  },
  {
    sentence: "The machine will ___ a noisy sound when you press the red button.",
    options: [
      { text: "exhale", correct: false },
      { text: "envelop", correct: false },
      { text: "imply", correct: false },
      { text: "emit", correct: true }
    ],
    answer: 3,
    explanation: "emit 意为'散发、发出（气、热、光、声音等）'。"
  },
  {
    sentence: "The city council was accused of ___ on the parking problem of the city.",
    options: [
      { text: "inaction", correct: true },
      { text: "inefficiency", correct: false },
      { text: "intervention", correct: false },
      { text: "investigation", correct: false }
    ],
    answer: 0,
    explanation: "inaction 意为'无行动、没反应'。"
  },
  {
    sentence: "The job of a dance teacher ___ teaching students the technique and performance of dance movements.",
    options: [
      { text: "implores", correct: false },
      { text: "comprehends", correct: false },
      { text: "intervenes", correct: false },
      { text: "entails", correct: true }
    ],
    answer: 3,
    explanation: "entail 意为'使必要、需要（作为必要组成或结果）'。"
  },
  {
    sentence: "I don't usually like to ___ in disputes between husbands and wives.",
    options: [
      { text: "imply", correct: false },
      { text: "implore", correct: false },
      { text: "entail", correct: false },
      { text: "intervene", correct: true }
    ],
    answer: 3,
    explanation: "intervene in 意为'干预、介入'。"
  },
  {
    sentence: "Participants in the world trade talks have agreed to negotiate specific ___ commitments.",
    options: [
      { text: "comparative", correct: false },
      { text: "compassionate", correct: false },
      { text: "rigid", correct: false },
      { text: "binding", correct: true }
    ],
    answer: 3,
    explanation: "binding 意为'有法律约束力的、必须遵守的'。"
  },
  {
    sentence: "There is little ___ for people to leave their cars at home when public transport remains so expensive.",
    options: [
      { text: "intervention", correct: false },
      { text: "inefficiency", correct: false },
      { text: "incentive", correct: true },
      { text: "dilemma", correct: false }
    ],
    answer: 2,
    explanation: "incentive 意为'刺激、动力、鼓励'。"
  },
  {
    sentence: "___ a positive mental attitude toward yourself can reap tremendous benefits.",
    options: [
      { text: "Possessing", correct: false },
      { text: "Imploring", correct: false },
      { text: "Comprehending", correct: false },
      { text: "Cultivating", correct: true }
    ],
    answer: 3,
    explanation: "cultivate 此处考'培养（技能、态度或素质）'义项。"
  },
  {
    sentence: "Policymakers need to take a long-term, ___ approach to the housing finance reform.",
    options: [
      { text: "alien", correct: false },
      { text: "capitalistic", correct: false },
      { text: "rigid", correct: false },
      { text: "holistic", correct: true }
    ],
    answer: 3,
    explanation: "holistic 意为'整体的、全面的'。"
  },
  {
    sentence: "Too often we make buying decisions based ___ upon what we see in advertisements.",
    options: [
      { text: "solely", correct: true },
      { text: "drastically", correct: false },
      { text: "purely", correct: false },
      { text: "ultimately", correct: false }
    ],
    answer: 0,
    explanation: "solely 意为'唯一地、仅仅'。"
  },
  {
    sentence: "Gandhi was a tremendously brave man whose unique form of courage left a lasting ___ on India's history.",
    options: [
      { text: "imprint", correct: true },
      { text: "prudence", correct: false },
      { text: "outlook", correct: false },
      { text: "legacy", correct: false }
    ],
    answer: 0,
    explanation: "imprint 此处考'强大而持久的影响'义项。"
  },
  {
    sentence: "Perhaps her most important ___ was her program of educational reform.",
    options: [
      { text: "venture", correct: false },
      { text: "legacy", correct: true },
      { text: "imprint", correct: false },
      { text: "merit", correct: false }
    ],
    answer: 1,
    explanation: "legacy 意为'留下的成果'。"
  },
  {
    sentence: "Businessmen are showing remarkable ___ in investing in the region.",
    options: [
      { text: "eagerness", correct: false },
      { text: "prudence", correct: true },
      { text: "enthusiasm", correct: false },
      { text: "curiosity", correct: false }
    ],
    answer: 1,
    explanation: "prudence 意为'明智谨慎、慎重'。"
  },
  {
    sentence: "I'm afraid he doesn't ___ a sense of humor.",
    options: [
      { text: "imply", correct: false },
      { text: "implore", correct: false },
      { text: "possess", correct: true },
      { text: "comprehend", correct: false }
    ],
    answer: 2,
    explanation: "possess 此处考'具有（品质或能力）'义项，而非'拥有（物品）'。"
  },
  {
    sentence: "If you feel depressed for more than three weeks, I ___ you to seek professional help.",
    options: [
      { text: "accuse", correct: false },
      { text: "imply", correct: false },
      { text: "confess", correct: false },
      { text: "implore", correct: true }
    ],
    answer: 3,
    explanation: "implore 意为'恳求、乞求、哀求'。"
  },
  {
    sentence: "His grief ___ the loss of the most important love he had ever known in his life.",
    options: [
      { text: "broke new ground", correct: false },
      { text: "came in", correct: false },
      { text: "spoke of", correct: false },
      { text: "sprang from", correct: true }
    ],
    answer: 3,
    explanation: "spring from 意为'由…引起'。"
  },
  {
    sentence: "Unfortunately I only had a very ___ knowledge of music.",
    options: [
      { text: "holistic", correct: false },
      { text: "plausible", correct: false },
      { text: "superficial", correct: true },
      { text: "conducive", correct: false }
    ],
    answer: 2,
    explanation: "superficial 意为'肤浅的、浅薄的'。"
  },
  {
    sentence: "The region was extremely beautiful. ___, Gerard could not imagine spending the rest of his life there.",
    options: [
      { text: "Solely", correct: false },
      { text: "Nonetheless", correct: true },
      { text: "Meanwhile", correct: false },
      { text: "Accordingly", correct: false }
    ],
    answer: 1,
    explanation: "nonetheless 意为'然而、尽管如此'。"
  },
  {
    sentence: "We stood in the orchard, where the apples were ripe and ___ just inches above our heads.",
    options: [
      { text: "dangled", correct: true },
      { text: "drifted", correct: false },
      { text: "swirled", correct: false },
      { text: "flared", correct: false }
    ],
    answer: 0,
    explanation: "dangle 意为'悬垂、吊着'。"
  },
  {
    sentence: "He had imagined that going down in the caves late at night would ___ her, but instead she felt surprisingly calm.",
    options: [
      { text: "shield", correct: false },
      { text: "doom", correct: false },
      { text: "terrify", correct: true },
      { text: "envelop", correct: false }
    ],
    answer: 2,
    explanation: "terrify 意为'使恐惧、使惊吓'。"
  },
  {
    sentence: "It is reported that air pollution could also restrict blood flow, causing ___ and heart attacks.",
    options: [
      { text: "fractions", correct: false },
      { text: "strokes", correct: true },
      { text: "membranes", correct: false },
      { text: "axes", correct: false }
    ],
    answer: 1,
    explanation: "stroke 此处考'中风、脑卒中'义项，而非'划水'。"
  },
  {
    sentence: "He took a screwdriver from his pocket and began to ___ the screws on the bike.",
    options: [
      { text: "strip", correct: false },
      { text: "envelop", correct: false },
      { text: "loosen", correct: true },
      { text: "tilt", correct: false }
    ],
    answer: 2,
    explanation: "loosen 意为'使放松、变松'。"
  },
  {
    sentence: "Concerns about the danger ___ by fireworks could lead to restrictions on their sale and use.",
    options: [
      { text: "posed", correct: true },
      { text: "doomed", correct: false },
      { text: "necessitated", correct: false },
      { text: "probed", correct: false }
    ],
    answer: 0,
    explanation: "pose 此处考'造成（威胁、问题）'的动词义项。"
  },
  {
    sentence: "Three boats ___ without a trace one day and have never been found.",
    options: [
      { text: "shimmied", correct: false },
      { text: "exhaled", correct: false },
      { text: "swerved", correct: false },
      { text: "vanished", correct: true }
    ],
    answer: 3,
    explanation: "vanish 意为'突然消失'。"
  },
  {
    sentence: "The night turned cold and heavy rain began to fall during our ___ from the mountain peak.",
    options: [
      { text: "decay", correct: false },
      { text: "orbit", correct: false },
      { text: "descent", correct: true },
      { text: "ascent", correct: false }
    ],
    answer: 2,
    explanation: "descent 意为'下降、降落'。"
  },
  {
    sentence: "For two ___ minutes the plane dived, shook, and finally landed safely at the airport.",
    options: [
      { text: "depressing", correct: false },
      { text: "holistic", correct: false },
      { text: "feasible", correct: false },
      { text: "agonizing", correct: true }
    ],
    answer: 3,
    explanation: "agonizing 此处考'折磨人的（尤指困难抉择或长时间等待）'义项。"
  },
  {
    sentence: "I changed my breathing pattern, inhaling and ___ heavily after each set of exercise.",
    options: [
      { text: "stripping", correct: false },
      { text: "exhaling", correct: true },
      { text: "emitting", correct: false },
      { text: "stabilizing", correct: false }
    ],
    answer: 1,
    explanation: "exhale 意为'呼气、呼出'。"
  },
  {
    sentence: "Families ___ teachers with the achievement of educational goals.",
    options: [
      { text: "doomed", correct: false },
      { text: "necessitated", correct: false },
      { text: "assisted", correct: true },
      { text: "implored", correct: false }
    ],
    answer: 2,
    explanation: "assist 意为'协助、帮助'。"
  },
  {
    sentence: "When the divers did not ___ after an hour, three crew members dived down to look for them.",
    options: [
      { text: "stabilize", correct: false },
      { text: "exhale", correct: false },
      { text: "orbit", correct: false },
      { text: "resurface", correct: true }
    ],
    answer: 3,
    explanation: "resurface 意为'重新露出水面'。"
  },
  {
    sentence: "He looked at him ___; he did not blink or even seem embarrassed by what he had just said.",
    options: [
      { text: "midway", correct: false },
      { text: "implausibly", correct: false },
      { text: "keenly", correct: true },
      { text: "diffusely", correct: false }
    ],
    answer: 2,
    explanation: "keenly 此处考'敏锐地（观察）'义项。"
  },
  {
    sentence: "The mist and rain ___ the forest and we could only see the nearest trees.",
    options: [
      { text: "tilted", correct: false },
      { text: "enveloped", correct: true },
      { text: "shielded", correct: false },
      { text: "swerved", correct: false }
    ],
    answer: 1,
    explanation: "envelop 意为'包住、覆盖'。"
  },
  {
    sentence: "As we could see from the film, this place used to be a vast ___ of mountains, lakes, and forests.",
    options: [
      { text: "wilderness", correct: true },
      { text: "civilization", correct: false },
      { text: "frontier", correct: false },
      { text: "territory", correct: false }
    ],
    answer: 0,
    explanation: "wilderness 意为'未开发的地区、荒野'。"
  },
  {
    sentence: "The study of the brain is often described by scientists as the next intellectual ___.",
    options: [
      { text: "frontier", correct: true },
      { text: "horizon", correct: false },
      { text: "spectacle", correct: false },
      { text: "wilderness", correct: false }
    ],
    answer: 0,
    explanation: "frontier 此处考'未完全开拓的领域'义项。"
  },
  {
    sentence: "Sales have dropped dramatically, ___ big cuts in production and employment.",
    options: [
      { text: "stabilizing", correct: false },
      { text: "necessitating", correct: true },
      { text: "restricting", correct: false },
      { text: "shielding", correct: false }
    ],
    answer: 1,
    explanation: "necessitate（fml.）意为'使成为必需、需要'。"
  },
  {
    sentence: "He wrapped himself in his heavy coat and sat in the corner where the bamboo leaves ___ him from the wind.",
    options: [
      { text: "stripped", correct: false },
      { text: "enveloped", correct: false },
      { text: "doomed", correct: false },
      { text: "shielded", correct: true }
    ],
    answer: 3,
    explanation: "shield 此处考'保护、保卫'的动词义项。"
  },
  {
    sentence: "The movie shows heroes risking their lives to save the Earth from a ___ collision with a comet.",
    options: [
      { text: "habitable", correct: false },
      { text: "plausible", correct: false },
      { text: "extraterrestrial", correct: false },
      { text: "catastrophic", correct: true }
    ],
    answer: 3,
    explanation: "catastrophic 意为'灾难性的、毁灭性的'。"
  },
  {
    sentence: "A more ___ explanation would seem to be that people are fed up with their routine life.",
    options: [
      { text: "implausible", correct: false },
      { text: "alien", correct: false },
      { text: "rogue", correct: false },
      { text: "plausible", correct: true }
    ],
    answer: 3,
    explanation: "plausible 意为'貌似有理的、似乎是真的'。"
  },
  {
    sentence: "Our ultimate goal is to create a culture that is ___ to continual progress and learning.",
    options: [
      { text: "habitable", correct: false },
      { text: "compassionate", correct: false },
      { text: "conducive", correct: true },
      { text: "binding", correct: false }
    ],
    answer: 2,
    explanation: "conducive to sth. 意为'有助于…的发生'。"
  },
  {
    sentence: "It's reported that ___ elephants have killed at least 31 people in that area this year.",
    options: [
      { text: "alien", correct: false },
      { text: "habitable", correct: false },
      { text: "savage", correct: false },
      { text: "rogue", correct: true }
    ],
    answer: 3,
    explanation: "rogue 此处考'离群的（动物，可能危险）'义项。"
  },
  {
    sentence: "A rare star system has been found in our Milky Way galaxy, but it is ___ to end in a massive explosion.",
    options: [
      { text: "restricted", correct: false },
      { text: "doomed", correct: true },
      { text: "shielded", correct: false },
      { text: "stabilized", correct: false }
    ],
    answer: 1,
    explanation: "doom 意为'使注定（失败、死亡、毁灭等）'，常用被动。"
  },
  {
    sentence: "Over the years, we've been conditioned to accept the possibility of ___ life through movies and reports about alien encounters.",
    options: [
      { text: "planetary", correct: false },
      { text: "terrestrial", correct: false },
      { text: "marine", correct: false },
      { text: "extraterrestrial", correct: true }
    ],
    answer: 3,
    explanation: "extraterrestrial 意为'地球外的、外星的'。"
  },
  {
    sentence: "We have been ___ the reasons why the government has been so slow to react to the problem of climate change.",
    options: [
      { text: "probing", correct: true },
      { text: "stabilizing", correct: false },
      { text: "tilting", correct: false },
      { text: "necessitating", correct: false }
    ],
    answer: 0,
    explanation: "probe 意为'盘问、追问、探究'。"
  },
  {
    sentence: "Because of limited space, the number of people who can attend the ceremony is ___ to 35.",
    options: [
      { text: "necessitated", correct: false },
      { text: "doomed", correct: false },
      { text: "restricted", correct: true },
      { text: "stabilized", correct: false }
    ],
    answer: 2,
    explanation: "restrict 此处考'限定（数量、范围）'义项。"
  },
  {
    sentence: "I think we should ___ the old paint off and see what the wood is like underneath.",
    options: [
      { text: "strip", correct: true },
      { text: "shield", correct: false },
      { text: "envelop", correct: false },
      { text: "tilt", correct: false }
    ],
    answer: 0,
    explanation: "strip 意为'剥去、除去（表面的东西）'。"
  },
  {
    sentence: "In a world that had suddenly become ___ and dangerous, Michael was her only security.",
    options: [
      { text: "alien", correct: true },
      { text: "habitable", correct: false },
      { text: "rogue", correct: false },
      { text: "extraterrestrial", correct: false }
    ],
    answer: 0,
    explanation: "alien 此处考'陌生的、不熟悉的'义项，而非'外星的'。"
  },
  {
    sentence: "Three generations of fishermen are engaged in an ___ struggle against nature, fate, and society in this moving tale.",
    options: [
      { text: "abiding", correct: false },
      { text: "epic", correct: true },
      { text: "hostile", correct: false },
      { text: "scenic", correct: false }
    ],
    answer: 1,
    explanation: "epic 此处考'漫长而艰难的'义项。"
  },
  {
    sentence: "For centuries, the Rocky Mountains have captivated visitors with their ___ peaks, magnificent waterfalls, and blue lakes.",
    options: [
      { text: "bleak", correct: false },
      { text: "scenic", correct: false },
      { text: "jagged", correct: true },
      { text: "hazardous", correct: false }
    ],
    answer: 2,
    explanation: "jagged 意为'凹凸不平的、锯齿状的'。"
  },
  {
    sentence: "The light of the setting sun ___ the buildings with delicate colors.",
    options: [
      { text: "tinges", correct: true },
      { text: "shimmers", correct: false },
      { text: "modulates", correct: false },
      { text: "swerves", correct: false }
    ],
    answer: 0,
    explanation: "tinge 意为'着淡色于…；使带有一点（情绪、特质等）'。"
  },
  {
    sentence: "My ___ memory is of him watering his plants in the garden on sunny afternoons.",
    options: [
      { text: "harsh", correct: false },
      { text: "abiding", correct: true },
      { text: "epic", correct: false },
      { text: "bleak", correct: false }
    ],
    answer: 1,
    explanation: "abiding 意为'长久的、持久的'（感情/信念）。"
  },
  {
    sentence: "The vehicle ___ off the road, hit a lamppost and rolled several times before catching fire.",
    options: [
      { text: "trundled", correct: false },
      { text: "swerved", correct: true },
      { text: "shimmied", correct: false },
      { text: "drifted", correct: false }
    ],
    answer: 1,
    explanation: "swerve 意为'（通常为避免碰撞）突然转向一边'。"
  },
  {
    sentence: "Hundreds of trucks full of fruit and vegetables ___ across the border each day.",
    options: [
      { text: "catapult", correct: false },
      { text: "swerve", correct: false },
      { text: "shimmer", correct: false },
      { text: "trundle", correct: true }
    ],
    answer: 3,
    explanation: "trundle 意为'缓慢移动（滚动）'。"
  },
  {
    sentence: "These birds are able to survive the ___ of the Arctic winter.",
    options: [
      { text: "shudders", correct: false },
      { text: "perils", correct: true },
      { text: "thirsts", correct: false },
      { text: "ridges", correct: false }
    ],
    answer: 1,
    explanation: "peril 意为'（某活动或情况的）危险、凶险'。"
  },
  {
    sentence: "They crossed the bridge and ___ the road out into the open country.",
    options: [
      { text: "drifted", correct: false },
      { text: "traversed", correct: true },
      { text: "preceded", correct: false },
      { text: "retraced", correct: false }
    ],
    answer: 1,
    explanation: "traverse（fml.）意为'跨过、穿过、横越'。"
  },
  {
    sentence: "They warned us that the northern half of the island was controlled by ___ forces.",
    options: [
      { text: "bleak", correct: false },
      { text: "hostile", correct: true },
      { text: "scenic", correct: false },
      { text: "vacant", correct: false }
    ],
    answer: 1,
    explanation: "hostile 此处考'敌人的、敌方的'义项。"
  },
  {
    sentence: "He urged the United States to ___ with its efforts to bring about peace.",
    options: [
      { text: "precede", correct: false },
      { text: "persist", correct: true },
      { text: "drift", correct: false },
      { text: "trundle", correct: false }
    ],
    answer: 1,
    explanation: "persist 意为'坚持、执意'。"
  },
  {
    sentence: "There will always be 'lost in translation' moments, but that's part of the ___ of foreign travel.",
    options: [
      { text: "sorrow", correct: false },
      { text: "allure", correct: true },
      { text: "endurance", correct: false },
      { text: "ideology", correct: false }
    ],
    answer: 1,
    explanation: "allure 意为'诱惑、魅力、吸引力'。"
  },
  {
    sentence: "The ___ value of a coin is the value of the metal it is made of.",
    options: [
      { text: "scenic", correct: false },
      { text: "intrinsic", correct: true },
      { text: "hostile", correct: false },
      { text: "abiding", correct: false }
    ],
    answer: 1,
    explanation: "intrinsic 意为'本质的、内在的、固有的'。"
  },
  {
    sentence: "His refusal to work late was ___ as a lack of commitment to the company.",
    options: [
      { text: "preceded", correct: false },
      { text: "interpreted", correct: true },
      { text: "traversed", correct: false },
      { text: "tinged", correct: false }
    ],
    answer: 1,
    explanation: "interpret 此处考'把…理解（解释）为'义项。"
  },
  {
    sentence: "Fine bone china is very practical due to the fact that it is strong and ___.",
    options: [
      { text: "durable", correct: true },
      { text: "epic", correct: false },
      { text: "harsh", correct: false },
      { text: "scenic", correct: false }
    ],
    answer: 0,
    explanation: "durable 意为'耐用的'。"
  },
  {
    sentence: "The new model is a ___ to the skill and dedication of the workforce.",
    options: [
      { text: "thirst", correct: false },
      { text: "shade", correct: false },
      { text: "ridge", correct: false },
      { text: "testament", correct: true }
    ],
    answer: 3,
    explanation: "be a testament to sth. 意为'是…的证据/证明'。"
  },
  {
    sentence: "As children, we were ___ by my uncle's good looks and charm.",
    options: [
      { text: "shimmied", correct: false },
      { text: "dazzled", correct: true },
      { text: "tinged", correct: false },
      { text: "stunned", correct: false }
    ],
    answer: 1,
    explanation: "dazzle 此处考'使倾倒（使产生强烈赞美）'义项。"
  },
  {
    sentence: "They are hoping to ___ the epic voyage of Christopher Columbus.",
    options: [
      { text: "precede", correct: false },
      { text: "traverse", correct: false },
      { text: "retrace", correct: true },
      { text: "envelop", correct: false }
    ],
    answer: 2,
    explanation: "retrace 此处考'重走（别人走过的路程）'义项。"
  },
  {
    sentence: "The crowd ___ away from the scene of the accident.",
    options: [
      { text: "stretched", correct: false },
      { text: "trundled", correct: false },
      { text: "drifted", correct: true },
      { text: "swerved", correct: false }
    ],
    answer: 2,
    explanation: "drift 意为'缓缓移动'。"
  },
  {
    sentence: "Yosemite National Park is an area of outstanding ___ beauty and great wilderness value.",
    options: [
      { text: "intrinsic", correct: false },
      { text: "epic", correct: false },
      { text: "hostile", correct: false },
      { text: "scenic", correct: true }
    ],
    answer: 3,
    explanation: "scenic 意为'景色优美的'。"
  },
  {
    sentence: "Enormous cloud ___ dominate the landscape on a hot, humid summer's day.",
    options: [
      { text: "shades", correct: false },
      { text: "ridges", correct: false },
      { text: "dunes", correct: false },
      { text: "formations", correct: true }
    ],
    answer: 3,
    explanation: "formation 此处考'（云朵/岩石的）形成物、形状'义项。"
  },
  {
    sentence: "The beach ___ for more than two miles, backed by grassy dunes and pine forest.",
    options: [
      { text: "drifts", correct: false },
      { text: "traverses", correct: false },
      { text: "shimmers", correct: false },
      { text: "stretches", correct: true }
    ],
    answer: 3,
    explanation: "stretch 此处考'延伸、绵延'义项。"
  },
  {
    sentence: "A loose dog is at risk of falling or being ___ out of the truck bed.",
    options: [
      { text: "shimmied", correct: false },
      { text: "catapulted", correct: true },
      { text: "doomed", correct: false },
      { text: "trundled", correct: false }
    ],
    answer: 1,
    explanation: "catapult 意为'把…弹（射）出去'。"
  },
  {
    sentence: "You might gaze at the Grand Canyon with ___, marveling at its beauty and fearing its depth.",
    options: [
      { text: "thirst", correct: false },
      { text: "sorrow", correct: false },
      { text: "shudder", correct: false },
      { text: "awe", correct: true }
    ],
    answer: 3,
    explanation: "awe 意为'崇敬、赞叹'。"
  },
  {
    sentence: "The report calls for a ban on the import of ___ waste.",
    options: [
      { text: "epic", correct: false },
      { text: "scenic", correct: false },
      { text: "abiding", correct: false },
      { text: "hazardous", correct: true }
    ],
    answer: 3,
    explanation: "hazardous 意为'危险的、有害的'。"
  },
  {
    sentence: "That's probably the most bare, ___, and inhospitable island I've ever seen.",
    options: [
      { text: "abiding", correct: false },
      { text: "scenic", correct: false },
      { text: "bleak", correct: true },
      { text: "feasible", correct: false }
    ],
    answer: 2,
    explanation: "bleak 意为'荒凉的、无遮蔽的、索然无味的'。"
  },
  {
    sentence: "They had to overcome ___ obstacles during their journey.",
    options: [
      { text: "abiding", correct: false },
      { text: "formidable", correct: true },
      { text: "scenic", correct: false },
      { text: "hostile", correct: false }
    ],
    answer: 1,
    explanation: "formidable 意为'令人敬畏的、可怕的'。"
  },
  {
    sentence: "Penguins employ cooperative behaviors in order to deal with an incredibly ___ environment.",
    options: [
      { text: "epic", correct: false },
      { text: "scenic", correct: false },
      { text: "intrinsic", correct: false },
      { text: "harsh", correct: true }
    ],
    answer: 3,
    explanation: "harsh 此处考'（天气或生活条件）恶劣的、艰苦的'义项。"
  },
  {
    sentence: "It would be helpful if you were to ___ the report with an introduction.",
    options: [
      { text: "retrace", correct: false },
      { text: "precede", correct: true },
      { text: "drift", correct: false },
      { text: "traverse", correct: false }
    ],
    answer: 1,
    explanation: "precede（fml.）意为'先于…（发生或出现）'。"
  },
  {
    sentence: "Running a marathon is seen by many people as the ultimate test of human ___.",
    options: [
      { text: "endurance", correct: true },
      { text: "ideology", correct: false },
      { text: "sorrow", correct: false },
      { text: "allure", correct: false }
    ],
    answer: 0,
    explanation: "endurance 意为'（忍）耐力'。"
  },
  {
    sentence: "Dean ___ the old lady ___ giving him 800 pounds, claiming that he would invest it for her.",
    options: [
      { text: "drifted / from", correct: false },
      { text: "stretched / to", correct: false },
      { text: "swarmed / into", correct: false },
      { text: "tricked / into", correct: true }
    ],
    answer: 3,
    explanation: "trick sb. into doing sth. 意为'用计诱使某人做某事'。"
  },
  {
    sentence: "The rescue team also had bad weather conditions to ___.",
    options: [
      { text: "set sail", correct: false },
      { text: "contend with", correct: true },
      { text: "trickle in", correct: false },
      { text: "drift away", correct: false }
    ],
    answer: 1,
    explanation: "contend with 意为'（不得不）处理问题、对付困境'。"
  },
  {
    sentence: "The spokesman of the company refused to ___ more details of their latest project to the press.",
    options: [
      { text: "suspend", correct: false },
      { text: "discriminate", correct: false },
      { text: "abolish", correct: false },
      { text: "disclose", correct: true }
    ],
    answer: 3,
    explanation: "disclose 意为'透露、揭露、泄露'。"
  },
  {
    sentence: "With the improvement of people's living standard, foreign travel has become ___.",
    options: [
      { text: "vigorous", correct: false },
      { text: "inaccessible", correct: false },
      { text: "commonplace", correct: true },
      { text: "hidebound", correct: false }
    ],
    answer: 2,
    explanation: "commonplace 意为'常见的、屡见不鲜的'。"
  },
  {
    sentence: "It was only at the very end of the 19th century that this practice was ___.",
    options: [
      { text: "prolonged", correct: false },
      { text: "abolished", correct: true },
      { text: "recaptured", correct: false },
      { text: "suspended", correct: false }
    ],
    answer: 1,
    explanation: "abolish 意为'废止、废除、取消'。"
  },
  {
    sentence: "We have decided to ___ all production at the factory until safety checks can be carried out.",
    options: [
      { text: "suspend", correct: true },
      { text: "trigger", correct: false },
      { text: "abolish", correct: false },
      { text: "prolong", correct: false }
    ],
    answer: 0,
    explanation: "suspend 意为'暂停、中止'。"
  },
  {
    sentence: "Doctors say these new drugs can reduce pain and ___ life for two or three years.",
    options: [
      { text: "prolong", correct: true },
      { text: "inactivate", correct: false },
      { text: "boost", correct: false },
      { text: "abolish", correct: false }
    ],
    answer: 0,
    explanation: "prolong 意为'延长、拉长（感觉或活动）'。"
  },
  {
    sentence: "A long flight of stairs made the center of the museum ___ to disabled visitors.",
    options: [
      { text: "inaccessible", correct: true },
      { text: "mortal", correct: false },
      { text: "hidebound", correct: false },
      { text: "commonplace", correct: false }
    ],
    answer: 0,
    explanation: "inaccessible 此处考'难到达的、不可及的'义项。"
  },
  {
    sentence: "Caulfield claimed the company had ___ against him because of his nationality.",
    options: [
      { text: "withered", correct: false },
      { text: "prolonged", correct: false },
      { text: "discriminated", correct: true },
      { text: "abolished", correct: false }
    ],
    answer: 2,
    explanation: "discriminate against 意为'歧视'。"
  },
  {
    sentence: "Tim was rude, unable to bear criticism, and more and more ___ in his views as he got older.",
    options: [
      { text: "vigorous", correct: false },
      { text: "tender", correct: false },
      { text: "hidebound", correct: true },
      { text: "youthful", correct: false }
    ],
    answer: 2,
    explanation: "hidebound 意为'古板的、守旧的'，含贬义。"
  },
  {
    sentence: "I would say the film successfully ___ the joyful atmosphere of those days.",
    options: [
      { text: "suspends", correct: false },
      { text: "abolishes", correct: false },
      { text: "recaptures", correct: true },
      { text: "inactivates", correct: false }
    ],
    answer: 2,
    explanation: "recapture 意为'使重温、使再次经历'。"
  },
  {
    sentence: "It is said that the new employee has broken the rule and will be punished ___.",
    options: [
      { text: "accordingly", correct: true },
      { text: "purposefully", correct: false },
      { text: "diffusely", correct: false },
      { text: "midway", correct: false }
    ],
    answer: 0,
    explanation: "accordingly 意为'相应地'。"
  },
  {
    sentence: "There has been a great deal of ___ about what will happen after the resident resigns.",
    options: [
      { text: "exception", correct: false },
      { text: "circulation", correct: false },
      { text: "anticipation", correct: false },
      { text: "speculation", correct: true }
    ],
    answer: 3,
    explanation: "speculation 意为'猜测、推测'。"
  },
  {
    sentence: "Don't fall into the ___ of investing all your money in one place.",
    options: [
      { text: "command", correct: false },
      { text: "digit", correct: false },
      { text: "trigger", correct: false },
      { text: "trap", correct: true }
    ],
    answer: 3,
    explanation: "trap 此处考'牢笼、困境'义项。"
  },
  {
    sentence: "Three teenage girls took a vow of ___ friendship during the summer of 1985.",
    options: [
      { text: "eternal", correct: true },
      { text: "ephemeral", correct: false },
      { text: "sluggish", correct: false },
      { text: "mortal", correct: false }
    ],
    answer: 0,
    explanation: "eternal 意为'永远的、永恒的'。"
  },
  {
    sentence: "It is a pity that the spring flowers were already beginning to ___.",
    options: [
      { text: "arouse", correct: false },
      { text: "linger", correct: false },
      { text: "wither", correct: true },
      { text: "surge", correct: false }
    ],
    answer: 2,
    explanation: "wither 意为'枯萎、干枯'。"
  },
  {
    sentence: "The actress who played the fashion designer in the movie was absolutely ___!",
    options: [
      { text: "terrific", correct: true },
      { text: "hidebound", correct: false },
      { text: "oblivious", correct: false },
      { text: "sluggish", correct: false }
    ],
    answer: 0,
    explanation: "terrific 意为'极好的、极棒的'。"
  },
  {
    sentence: "You have to be realistic — it's difficult to ___ everything into a tight schedule.",
    options: [
      { text: "boost", correct: false },
      { text: "cram", correct: true },
      { text: "trigger", correct: false },
      { text: "wither", correct: false }
    ],
    answer: 1,
    explanation: "cram 意为'把…塞进（小空间）、硬塞'。"
  },
  {
    sentence: "Her father's death reminded her that she was ___, and it made her very sad.",
    options: [
      { text: "ephemeral", correct: false },
      { text: "eternal", correct: false },
      { text: "tender", correct: false },
      { text: "mortal", correct: true }
    ],
    answer: 3,
    explanation: "mortal 意为'不会长生不死的、终有一死的'。"
  },
  {
    sentence: "Medically we will ___ great benefit from the application of this technique.",
    options: [
      { text: "boost", correct: false },
      { text: "inactivate", correct: false },
      { text: "derive", correct: true },
      { text: "trigger", correct: false }
    ],
    answer: 2,
    explanation: "derive 此处考'从…得到、获得'义项。"
  },
  {
    sentence: "His strange behavior at the meeting yesterday ___ my suspicion.",
    options: [
      { text: "aroused", correct: true },
      { text: "lingered", correct: false },
      { text: "abolished", correct: false },
      { text: "withered", correct: false }
    ],
    answer: 0,
    explanation: "arouse 此处考'激起（感情、态度）'义项。"
  },
  {
    sentence: "The computer program will ___ the user to enter data where it is required.",
    options: [
      { text: "trigger", correct: false },
      { text: "inactivate", correct: false },
      { text: "prompt", correct: true },
      { text: "discriminate", correct: false }
    ],
    answer: 2,
    explanation: "prompt 意为'引起、激起（某人说或做某事）'。"
  },
  {
    sentence: "One weakness of the essay is that the information is given ___ instead of in a certain section.",
    options: [
      { text: "purposefully", correct: false },
      { text: "implausibly", correct: false },
      { text: "midway", correct: false },
      { text: "diffusely", correct: true }
    ],
    answer: 3,
    explanation: "diffusely 意为'弥漫地、扩散地、漫射地'。"
  },
  {
    sentence: "The company has been rather ___ in responding to the rapid changes in technology.",
    options: [
      { text: "hidebound", correct: false },
      { text: "vigorous", correct: false },
      { text: "sluggish", correct: true },
      { text: "ephemeral", correct: false }
    ],
    answer: 2,
    explanation: "sluggish 意为'缓慢的、迟缓的、懒洋洋的'。"
  },
  {
    sentence: "He went on and on about how successful he was, ___ to the fact that he had hurt her.",
    options: [
      { text: "oblivious", correct: true },
      { text: "ephemeral", correct: false },
      { text: "sluggish", correct: false },
      { text: "vigorous", correct: false }
    ],
    answer: 0,
    explanation: "oblivious 意为'不知道的、未察觉到的'。"
  },
  {
    sentence: "Many words appearing during that period were quite ___ and have passed into history.",
    options: [
      { text: "eternal", correct: false },
      { text: "midway", correct: false },
      { text: "ephemeral", correct: true },
      { text: "mortal", correct: false }
    ],
    answer: 2,
    explanation: "ephemeral 意为'短暂流行的、只流行一时的'。"
  },
  {
    sentence: "Researchers have identified antibodies that ___ the virus before it has the chance to change itself.",
    options: [
      { text: "arouse", correct: false },
      { text: "trigger", correct: false },
      { text: "inactivate", correct: true },
      { text: "prompt", correct: false }
    ],
    answer: 2,
    explanation: "inactivate 意为'使不活动、使不活跃'。"
  },
  {
    sentence: "The faint smell of her perfume ___ in the room long after she had left.",
    options: [
      { text: "boosted", correct: false },
      { text: "lingered", correct: true },
      { text: "surged", correct: false },
      { text: "withered", correct: false }
    ],
    answer: 1,
    explanation: "linger 意为'继续留存（较惯常或理想时间长）'。"
  },
  {
    sentence: "Newton's physical theories are a good example of how a scientific theory may be ___ as well as explanatory.",
    options: [
      { text: "sluggish", correct: false },
      { text: "ephemeral", correct: false },
      { text: "predictive", correct: true },
      { text: "subjective", correct: false }
    ],
    answer: 2,
    explanation: "predictive 意为'预测的、预言的、前瞻的'。"
  },
  {
    sentence: "She was interrupted by the chairperson when she was ___ through her presentation.",
    options: [
      { text: "midway", correct: true },
      { text: "purposefully", correct: false },
      { text: "accordingly", correct: false },
      { text: "diffusely", correct: false }
    ],
    answer: 0,
    explanation: "midway 此处考'到一半（的）'义项。"
  },
  {
    sentence: "There must be specific events which ___ the aggressive displays in your dog.",
    options: [
      { text: "inactivated", correct: false },
      { text: "prompted", correct: false },
      { text: "triggered", correct: true },
      { text: "withered", correct: false }
    ],
    answer: 2,
    explanation: "trigger 意为'引发、触发（尤指一系列事件）'。"
  },
  {
    sentence: "Adrenaline ___ through her veins.",
    options: [
      { text: "withered", correct: false },
      { text: "surged", correct: true },
      { text: "lingered", correct: false },
      { text: "abolished", correct: false }
    ],
    answer: 1,
    explanation: "surge 此处考'（大量液体/化学物等）汹涌、突然涌动'义项。"
  },
  {
    sentence: "Women have been taking more and more important positions of power in the public ___.",
    options: [
      { text: "confines", correct: false },
      { text: "horizon", correct: false },
      { text: "patch", correct: false },
      { text: "sphere", correct: true }
    ],
    answer: 3,
    explanation: "sphere 意为'（活动、工作、知识等的）范围、领域'。"
  },
  {
    sentence: "He is one of the country's ___ authorities on criminal law.",
    options: [
      { text: "prominent", correct: false },
      { text: "foremost", correct: true },
      { text: "iconic", correct: false },
      { text: "elaborate", correct: false }
    ],
    answer: 1,
    explanation: "foremost 意为'最好的、最重要的'。"
  },
  {
    sentence: "He played a ___ role in promoting public health awareness in developing countries.",
    options: [
      { text: "vintage", correct: false },
      { text: "prominent", correct: true },
      { text: "subjective", correct: false },
      { text: "savage", correct: false }
    ],
    answer: 1,
    explanation: "prominent 意为'重要的、著名的、卓越的'。"
  },
  {
    sentence: "For the show, the museum is borrowing 20 paintings that ___ its own collection.",
    options: [
      { text: "leverage", correct: false },
      { text: "execute", correct: false },
      { text: "constrain", correct: false },
      { text: "complement", correct: true }
    ],
    answer: 3,
    explanation: "complement 意为'补充、使相配、使完美'。"
  },
  {
    sentence: "The computer and the human mind have different but ___ abilities.",
    options: [
      { text: "elaborate", correct: false },
      { text: "complementary", correct: true },
      { text: "iconic", correct: false },
      { text: "subjective", correct: false }
    ],
    answer: 1,
    explanation: "complementary 意为'互为补充的、互补的'。"
  },
  {
    sentence: "The company has always been at the ___ of science and technology.",
    options: [
      { text: "forefront", correct: true },
      { text: "horizon", correct: false },
      { text: "framework", correct: false },
      { text: "patch", correct: false }
    ],
    answer: 0,
    explanation: "forefront 意为'最前线、最前列、最重要的位置'。"
  },
  {
    sentence: "The Phantom of the Opera must be the most ___ Broadway musical ever.",
    options: [
      { text: "vintage", correct: false },
      { text: "iconic", correct: true },
      { text: "savage", correct: false },
      { text: "elaborate", correct: false }
    ],
    answer: 1,
    explanation: "iconic 意为'非常出名的、受欢迎的（能代表某种观点或时代）'。"
  },
  {
    sentence: "Mary Shelley was just 21 when she published her ___ Frankenstein.",
    options: [
      { text: "retrospective", correct: false },
      { text: "autobiography", correct: false },
      { text: "framework", correct: false },
      { text: "masterpiece", correct: true }
    ],
    answer: 3,
    explanation: "masterpiece 意为'杰作、名作、代表作'。"
  },
  {
    sentence: "A well-chosen handbag can really ___ a woman's level of fashion.",
    options: [
      { text: "dismiss", correct: false },
      { text: "constrain", correct: false },
      { text: "rebel", correct: false },
      { text: "elevate", correct: true }
    ],
    answer: 3,
    explanation: "elevate 意为'提拔、晋升、提升'。"
  },
  {
    sentence: "Poor soil has ___ the level of crop production in this area.",
    options: [
      { text: "elevated", correct: false },
      { text: "leveraged", correct: false },
      { text: "constrained", correct: true },
      { text: "collaborated", correct: false }
    ],
    answer: 2,
    explanation: "constrain 此处考'限制、束缚'义项。"
  },
  {
    sentence: "Maybe you can try this seat — it can be adjusted to fit the ___ of your back.",
    options: [
      { text: "frameworks", correct: false },
      { text: "contours", correct: true },
      { text: "byproducts", correct: false },
      { text: "patches", correct: false }
    ],
    answer: 1,
    explanation: "contour 意为'外形、轮廓'。"
  },
  {
    sentence: "There is a general public ___ that social media can be addictive.",
    options: [
      { text: "perception", correct: true },
      { text: "framework", correct: false },
      { text: "constraint", correct: false },
      { text: "consciousness", correct: false }
    ],
    answer: 0,
    explanation: "perception 意为'认识、观念、看法'。"
  },
  {
    sentence: "His paintings are rather too ___ for my taste.",
    options: [
      { text: "iconic", correct: false },
      { text: "vintage", correct: false },
      { text: "avant-garde", correct: true },
      { text: "complementary", correct: false }
    ],
    answer: 2,
    explanation: "avant-garde 意为'前卫的、先锋派的'。"
  },
  {
    sentence: "While there are arguments in favor of school uniforms, the issue is not a ___ matter.",
    options: [
      { text: "clear-cut", correct: true },
      { text: "rightful", correct: false },
      { text: "savage", correct: false },
      { text: "subjective", correct: false }
    ],
    answer: 0,
    explanation: "clear-cut 意为'明确的、易懂的'。"
  },
  {
    sentence: "A vast majority of the voters ___ against the high property taxes.",
    options: [
      { text: "constrained", correct: false },
      { text: "dismissed", correct: false },
      { text: "collaborated", correct: false },
      { text: "rebelled", correct: true }
    ],
    answer: 3,
    explanation: "rebel against 意为'反抗、反对'。"
  },
  {
    sentence: "We timed the release of the film to coincide with a big ___ of Bosch's paintings.",
    options: [
      { text: "retrospective", correct: true },
      { text: "spectacle", correct: false },
      { text: "ornament", correct: false },
      { text: "masterpiece", correct: false }
    ],
    answer: 0,
    explanation: "retrospective 意为'回顾展'。"
  },
  {
    sentence: "It looks like a ___ cell phone of the last thirty years and weighs about 13 ounces.",
    options: [
      { text: "rightful", correct: false },
      { text: "spiritual", correct: false },
      { text: "vintage", correct: true },
      { text: "savage", correct: false }
    ],
    answer: 2,
    explanation: "vintage 此处考'旧式的，但品质优良'义项。"
  },
  {
    sentence: "There is no escaping the fact that we have to act within the existing legal ___.",
    options: [
      { text: "framework", correct: true },
      { text: "spectacle", correct: false },
      { text: "forefront", correct: false },
      { text: "horizon", correct: false }
    ],
    answer: 0,
    explanation: "framework 意为'框架（社会、法律、政治等）'。"
  },
  {
    sentence: "She didn't want to confront the ___ fact that she would have to sell the house.",
    options: [
      { text: "rightful", correct: false },
      { text: "subjective", correct: false },
      { text: "inescapable", correct: true },
      { text: "elaborate", correct: false }
    ],
    answer: 2,
    explanation: "inescapable 意为'不可避免的、不容忽视的'。"
  },
  {
    sentence: "We can gain a market advantage by ___ our network of partners.",
    options: [
      { text: "collaborating", correct: false },
      { text: "modulating", correct: false },
      { text: "leveraging", correct: true },
      { text: "executing", correct: false }
    ],
    answer: 2,
    explanation: "leverage 意为'借助已有的…实现新（或更好）的目标'。"
  },
  {
    sentence: "Educators and employers need to ___ in preparing the next generation for employment.",
    options: [
      { text: "rebel", correct: false },
      { text: "dismiss", correct: false },
      { text: "collaborate", correct: true },
      { text: "constrain", correct: false }
    ],
    answer: 2,
    explanation: "collaborate 意为'合作、协作'。"
  },
  {
    sentence: "It is a delightful river with a ___ of wild flowers along its banks.",
    options: [
      { text: "patch", correct: false },
      { text: "byproduct", correct: false },
      { text: "profusion", correct: true },
      { text: "framework", correct: false }
    ],
    answer: 2,
    explanation: "profusion 意为'大量、丰富、充沛'。"
  },
  {
    sentence: "Do some viruses develop a ___ relationship with their host?",
    options: [
      { text: "rightful", correct: false },
      { text: "subjective", correct: false },
      { text: "symbiotic", correct: true },
      { text: "elaborate", correct: false }
    ],
    answer: 2,
    explanation: "symbiotic 意为'互相依赖的、共生的'。"
  },
  {
    sentence: "George sat at the head of the table, in his ___ place as their leader.",
    options: [
      { text: "rightful", correct: true },
      { text: "subjective", correct: false },
      { text: "savage", correct: false },
      { text: "iconic", correct: false }
    ],
    answer: 0,
    explanation: "rightful 意为'正确的、合法的、正义的'。"
  },
  {
    sentence: "You need a plain blouse to go with that skirt — nothing too ___.",
    options: [
      { text: "elaborate", correct: true },
      { text: "rightful", correct: false },
      { text: "savage", correct: false },
      { text: "subjective", correct: false }
    ],
    answer: 0,
    explanation: "elaborate 意为'复杂的、详尽的、精心制作的'。"
  },
  {
    sentence: "The government has ___ criticism that the country's health policy is a mess.",
    options: [
      { text: "dismissed", correct: true },
      { text: "constrained", correct: false },
      { text: "rebelled", correct: false },
      { text: "collaborated", correct: false }
    ],
    answer: 0,
    explanation: "dismiss 此处考'拒绝考虑、不理会'义项。"
  },
  {
    sentence: "The job involves drawing up and ___ a plan of nursing care.",
    options: [
      { text: "modulating", correct: false },
      { text: "collaborating", correct: false },
      { text: "executing", correct: true },
      { text: "leveraging", correct: false }
    ],
    answer: 2,
    explanation: "execute 此处考'实行、执行'义项。"
  },
  {
    sentence: "To everyone's astonishment, Helena left the company of her own ___.",
    options: [
      { text: "comprehension", correct: false },
      { text: "volition", correct: true },
      { text: "perception", correct: false },
      { text: "consciousness", correct: false }
    ],
    answer: 1,
    explanation: "of one's own volition 意为'出于自愿'。"
  },
  {
    sentence: "It is teachers' responsibility to help children become ___ learners.",
    options: [
      { text: "interactive", correct: false },
      { text: "subjective", correct: false },
      { text: "coherent", correct: false },
      { text: "autonomous", correct: true }
    ],
    answer: 3,
    explanation: "autonomous 此处考'有自主能力的、自主的'义项。"
  },
  {
    sentence: "What children need ___ from their parents is a sense of security.",
    options: [
      { text: "as such", correct: false },
      { text: "in existence", correct: false },
      { text: "at length", correct: false },
      { text: "first and foremost", correct: true }
    ],
    answer: 3,
    explanation: "first and foremost 意为'首先，首要的是'。"
  }
];
