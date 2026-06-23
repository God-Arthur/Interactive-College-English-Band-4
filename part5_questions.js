// Part V 句子填空题库 (200 题)
// 覆盖《大学英语四》Unit 1 - Unit 7 全部词汇
// 优先考查 ★ 重点词及多义词的次要义项

const part5Questions = [
  // ============================================================
  // Unit 1 The true value of education (Q1 - Q29)
  // ============================================================
  {
    sentence: "Would passengers please turn off their mobile phones before the c___ of the flight?",
    hint: { letter: "c", chinese: "开始；开端" },
    answer: "commencement",
    explanation: "commencement 除了'毕业典礼'外，还表示'开端、开始'"
  },
  {
    sentence: "These plans were part of a reorganization that divided the university into six f___.",
    hint: { letter: "f", chinese: "系；院" },
    answer: "faculties",
    explanation: "faculty 除了'全体教员'外，还指大学的'系、院'"
  },
  {
    sentence: "Here are some problems that have c___ scientists all over the world in the past decade.",
    hint: { letter: "c", chinese: "临到…头上；使面对" },
    answer: "confronted",
    explanation: "confront 次要义：(问题)临到某人头上，使面对"
  },
  {
    sentence: "I have asked you to do this tough task because I know you are not a q___.",
    hint: { letter: "q", chinese: "遇到困难就放弃的人" },
    answer: "quitter",
    explanation: "quitter 指半途而废的人"
  },
  {
    sentence: "Tourists crowd the gift shops along the street to buy m___ products at high prices.",
    hint: { letter: "m", chinese: "不太好的；普通的" },
    answer: "mediocre",
    explanation: "mediocre 表示质量不太好的、平庸的"
  },
  {
    sentence: "She complained that the research project was delayed mainly due to s___ management.",
    hint: { letter: "s", chinese: "马虎的；草率的" },
    answer: "slipshod",
    explanation: "★slipshod 含贬义，指马虎草率的"
  },
  {
    sentence: "I talked too much about myself and felt like a g___ old fool.",
    hint: { letter: "g", chinese: "喋喋不休的；饶舌的" },
    answer: "garrulous",
    explanation: "★garrulous 指对无关琐事喋喋不休"
  },
  {
    sentence: "It's such a simple question. If you don't understand then you are d___ than I thought.",
    hint: { letter: "d", chinese: "迟钝的；愚笨的" },
    answer: "duller",
    explanation: "dull 次要义：迟钝的、愚笨的（此处用比较级）"
  },
  {
    sentence: "He simply couldn't understand why she thought him to be a stiff and u___ person.",
    hint: { letter: "u", chinese: "缺乏想象力的" },
    answer: "unimaginative",
    explanation: "unimaginative 缺乏想象力的"
  },
  {
    sentence: "Now that the p___ was over, he could tell them what he really thought.",
    hint: { letter: "p", chinese: "假装；做作" },
    answer: "pretence",
    explanation: "★pretence 假装、作假"
  },
  {
    sentence: "Some people worry that the advances in information technology may d___ citizens of their privacy.",
    hint: { letter: "d", chinese: "剥夺" },
    answer: "deprive",
    explanation: "deprive sb. of sth. 剥夺某人某物"
  },
  {
    sentence: "In some cultures, you i___ your host if you do not accept their offer of food.",
    hint: { letter: "i", chinese: "侮辱；冒犯" },
    answer: "insult",
    explanation: "insult 侮辱、冒犯"
  },
  {
    sentence: "Relations between the two countries have been in a p___ state for some time.",
    hint: { letter: "p", chinese: "状况极坏的；非常危险的" },
    answer: "parlous",
    explanation: "★parlous (fml.) 状况极坏的"
  },
  {
    sentence: "You must start by u___ all the bad habits your previous piano teacher taught you!",
    hint: { letter: "u", chinese: "设法忘记，抛弃（已学会的东西）" },
    answer: "unlearning",
    explanation: "★unlearn 指设法忘掉已学会的坏习惯"
  },
  {
    sentence: "She has lots of good ideas, but she has difficulty f___ them in front of investors.",
    hint: { letter: "f", chinese: "仔细思考并明确表达" },
    answer: "formulating",
    explanation: "★formulate 次要义：仔细思考并清晰表达"
  },
  {
    sentence: "Mr. Woods won a convincing victory to e___ doubts about his team's ability.",
    hint: { letter: "e", chinese: "清除；消除" },
    answer: "erase",
    explanation: "erase 次要义：消除（疑虑）"
  },
  {
    sentence: "They suddenly gave up the deal the day before they were d___ to sign the contract.",
    hint: { letter: "d", chinese: "预定的；预期的" },
    answer: "due",
    explanation: "due 预定的，be due to do 预定要做某事"
  },
  {
    sentence: "To everyone's surprise, Bill d___ out of college after his first year and joined a band.",
    hint: { letter: "d", chinese: "退学；辍学" },
    answer: "dropped",
    explanation: "drop out 退学、辍学"
  },
  {
    sentence: "These teenagers are likely to a___ out their feelings of insecurity by being moody.",
    hint: { letter: "a", chinese: "用行动表现（情绪）" },
    answer: "act",
    explanation: "act out 用行为表现情绪（尤指愤怒或紧张）"
  },
  {
    sentence: "An architect can look at a drawing and v___ a three-dimensional shape.",
    hint: { letter: "v", chinese: "设想；想象" },
    answer: "visualize",
    explanation: "visualize 在脑海中形成画面，设想"
  },
  {
    sentence: "After the match, the disappointed fans were all j___ at the football team.",
    hint: { letter: "j", chinese: "嘲笑；嘲弄" },
    answer: "jeering",
    explanation: "jeer at sb. 嘲弄某人"
  },
  {
    sentence: "Sasha was too s___ by what had happened in the office to say a word.",
    hint: { letter: "s", chinese: "使震惊（不能立刻反应）" },
    answer: "stunned",
    explanation: "stun 使某人震惊以致无法立即反应"
  },
  {
    sentence: "The discussions between the two firms are p___ slowly but satisfactorily.",
    hint: { letter: "p", chinese: "继续进行" },
    answer: "proceeding",
    explanation: "proceed (fml.) 继续做某事"
  },
  {
    sentence: "The program is designed to provide students with real, m___ skills.",
    hint: { letter: "m", chinese: "有市场的；畅销的" },
    answer: "marketable",
    explanation: "marketable 指技能/商品畅销有市场的"
  },
  {
    sentence: "Peter was wearing an unbearably s___ expression and waving the tickets in front of me.",
    hint: { letter: "s", chinese: "自鸣得意的；沾沾自喜的" },
    answer: "smug",
    explanation: "smug 含贬义，自鸣得意的"
  },
  {
    sentence: "You can have a spiritual d___ to your life without being religious.",
    hint: { letter: "d", chinese: "方面；层面" },
    answer: "dimension",
    explanation: "★dimension 次要义：方面、层面（非'尺寸'）"
  },
  {
    sentence: "Many years ago he had c___ writing a book about his childhood.",
    hint: { letter: "c", chinese: "打算；考虑（做某事）" },
    answer: "contemplated",
    explanation: "★contemplate 次要义：打算/考虑做某事"
  },
  {
    sentence: "It was no longer financially f___ to keep the community center open.",
    hint: { letter: "f", chinese: "可行的；行得通的" },
    answer: "feasible",
    explanation: "feasible 可行的"
  },
  {
    sentence: "They've got the usual moans and g___ like everybody else.",
    hint: { letter: "g", chinese: "抱怨" },
    answer: "groans",
    explanation: "groan 次要义：抱怨（而非疼痛的呻吟）"
  },

  // ============================================================
  // Unit 2 The myth of a dream job (Q30 - Q58)
  // ============================================================
  {
    sentence: "She told me she will be in Greece next week on a___ for one of the national newspapers.",
    hint: { letter: "a", chinese: "（分配的）任务" },
    answer: "assignment",
    explanation: "assignment 次要义：工作任务（非学生作业）"
  },
  {
    sentence: "He has a l___ attitude about whether students should wear uniforms to school.",
    hint: { letter: "l", chinese: "思想开明的；开通的" },
    answer: "liberal",
    explanation: "liberal 次要义：思想开明、宽容"
  },
  {
    sentence: "There was no real b___ between reality and fantasy in his mind.",
    hint: { letter: "b", chinese: "分界线；屏障" },
    answer: "barrier",
    explanation: "barrier 次要义：人与人/事物之间的分界、隔阂"
  },
  {
    sentence: "It's wonderful, because this fresh start gives us a chance to r___ our lives.",
    hint: { letter: "r", chinese: "彻底改造；重新创造" },
    answer: "reinvent",
    explanation: "reinvent 彻底改造、重新塑造"
  },
  {
    sentence: "I have to get out of the r___ race and look at what I really want.",
    hint: { letter: "r", chinese: "你死我活的竞争" },
    answer: "rat",
    explanation: "rat race 激烈的、你死我活的竞争"
  },
  {
    sentence: "Foley has been particularly v___ in his criticism of the social injustice.",
    hint: { letter: "v", chinese: "直言不讳的；激烈表达意见的" },
    answer: "vocal",
    explanation: "vocal 直言不讳的"
  },
  {
    sentence: "I personally think it's a r___ idea to go camping on such a rainy day.",
    hint: { letter: "r", chinese: "极糟糕的；恶劣的" },
    answer: "rotten",
    explanation: "rotten 次要义：(口语)极糟糕的（非'腐烂的'）"
  },
  {
    sentence: "She r___ her novel as a musical comedy, which turned out to be a greater hit.",
    hint: { letter: "r", chinese: "重塑；重组" },
    answer: "recast",
    explanation: "★recast 改变形式，重塑"
  },
  {
    sentence: "It is a danger of w___ that one may risk getting their identity caught up in the work.",
    hint: { letter: "w", chinese: "醉心工作" },
    answer: "workaholism",
    explanation: "★workaholism 工作狂状态"
  },
  {
    sentence: "She u___ her scarf after entering the house, and hung it on the rack.",
    hint: { letter: "u", chinese: "解绕；展开（卷绕物）" },
    answer: "unwound",
    explanation: "★unwind 解开（围巾等卷绕物）；过去式 unwound"
  },
  {
    sentence: "Duncan shook his head and laughed at the a___ of the situation.",
    hint: { letter: "a", chinese: "荒谬；荒唐" },
    answer: "absurdity",
    explanation: "★absurdity 荒谬、荒唐"
  },
  {
    sentence: "Short-term contracts are now the n___ with some big companies.",
    hint: { letter: "n", chinese: "常态；规范" },
    answer: "norm",
    explanation: "★norm 常态、标准"
  },
  {
    sentence: "Tom has r___ his membership of the golf club.",
    hint: { letter: "r", chinese: "辞去；放弃（职位）" },
    answer: "resigned",
    explanation: "★resign 辞职、放弃某职位"
  },
  {
    sentence: "The goalkeeper was sent off for using a___ language against a linesman.",
    hint: { letter: "a", chinese: "谩骂的；辱骂的" },
    answer: "abusive",
    explanation: "★abusive 谩骂的、虐待的"
  },
  {
    sentence: "He made a___ of corruption against the administration.",
    hint: { letter: "a", chinese: "（无证据的）指控" },
    answer: "allegations",
    explanation: "★allegation (尤指无证据的)指控"
  },
  {
    sentence: "There has to be a t___ between quality and quantity if we want to keep prices low.",
    hint: { letter: "t", chinese: "(两种事物之间的)平衡，妥协" },
    answer: "trade-off",
    explanation: "★trade-off 取舍、平衡"
  },
  {
    sentence: "Prolonging life at the e___ of its quality can rob elderly people of meaningful years.",
    hint: { letter: "e", chinese: "代价" },
    answer: "expense",
    explanation: "★at the expense of 以…为代价"
  },
  {
    sentence: "You might practice gratitude, which is necessary to empower your mind and a___ your power of attraction.",
    hint: { letter: "a", chinese: "增强" },
    answer: "amplify",
    explanation: "★amplify (fml.) 增强、扩大影响"
  },
  {
    sentence: "Charles' letters were published against all odds, a___ in a somewhat abbreviated form.",
    hint: { letter: "a", chinese: "虽然；尽管" },
    answer: "albeit",
    explanation: "★albeit (fml.) = although"
  },
  {
    sentence: "If you have a fire alarm fitted, make sure it is done by a r___ company.",
    hint: { letter: "r", chinese: "有声望的；信誉佳的" },
    answer: "reputable",
    explanation: "★reputable 有信誉的"
  },
  {
    sentence: "Emergency medicine is one of the most important s___ in modern hospitals.",
    hint: { letter: "s", chinese: "（医学）专科" },
    answer: "specialties",
    explanation: "★specialty 次要义：医学专科"
  },
  {
    sentence: "Artistic m___ scholarships require that applicants excel in a given artistic area.",
    hint: { letter: "m", chinese: "（学业表现的）优秀评分" },
    answer: "merit",
    explanation: "★merit 次要义：学校给优秀学生的评分"
  },
  {
    sentence: "Doctors in this hospital must wear sterile s___ before entering the operating room.",
    hint: { letter: "s", chinese: "手术服" },
    answer: "scrubs",
    explanation: "★scrub(s) 次要义：手术服（医务人员穿的）"
  },
  {
    sentence: "Students learned the practical a___ of the theory they had been taught in the classroom.",
    hint: { letter: "a", chinese: "应用；实施" },
    answer: "application",
    explanation: "★application 次要义：应用、实施（非'申请'）"
  },
  {
    sentence: "The police officer refused to s___ the witness' private information to the reporters.",
    hint: { letter: "s", chinese: "透露（机密信息）" },
    answer: "spill",
    explanation: "★spill 次要义：透露机密（非'溢出'）"
  },
  {
    sentence: "He claimed that the restaurant bill was a l___ business expense.",
    hint: { letter: "l", chinese: "合理的；正当的" },
    answer: "legitimate",
    explanation: "★legitimate 次要义：合理的、正当的"
  },
  {
    sentence: "The computer comes with a 600-page instruction m___ that is not user-friendly.",
    hint: { letter: "m", chinese: "说明书；手册" },
    answer: "manual",
    explanation: "★manual (n.) 说明书、手册"
  },
  {
    sentence: "I want to make one thing c___ clear — I do not agree with these proposals.",
    hint: { letter: "c", chinese: "完全明白的（与clear搭配）" },
    answer: "crystal",
    explanation: "★crystal clear 完全清楚、明白无误"
  },
  {
    sentence: "I overslept because my alarm clock did not g___ off as usual today.",
    hint: { letter: "g", chinese: "发出响声" },
    answer: "go",
    explanation: "★go off 闹钟等发出响声"
  },

  // ============================================================
  // Unit 3 The business of life (Q59 - Q86)
  // ============================================================
  {
    sentence: "We are always looking for more interesting and i___ ideas to share with our readers.",
    hint: { letter: "i", chinese: "富有洞察力的" },
    answer: "insightful",
    explanation: "★insightful 有洞察力的"
  },
  {
    sentence: "The point at which the solid and the liquid are in e___ is called the freezing point.",
    hint: { letter: "e", chinese: "平衡；均衡" },
    answer: "equilibrium",
    explanation: "★equilibrium 平衡状态"
  },
  {
    sentence: "The management committee decided to close the museum p___ because it cost too much.",
    hint: { letter: "p", chinese: "完全地；纯粹地" },
    answer: "purely",
    explanation: "★purely 完全、纯粹"
  },
  {
    sentence: "The d___ over human cloning lies at the heart of the ethical choices facing society.",
    hint: { letter: "d", chinese: "进退两难的境地" },
    answer: "dilemma",
    explanation: "★dilemma 困境"
  },
  {
    sentence: "I think it's our c___ responsibility to create an environment for future generations.",
    hint: { letter: "c", chinese: "集体的；共同的" },
    answer: "collective",
    explanation: "★collective 集体的"
  },
  {
    sentence: "This sophisticated technology allows scientists to find things that are i___ to the naked eye.",
    hint: { letter: "i", chinese: "看不见的" },
    answer: "invisible",
    explanation: "★invisible 看不见的"
  },
  {
    sentence: "In some cases, lowering interest rates could have d___ consequences for the economy.",
    hint: { letter: "d", chinese: "灾难性的" },
    answer: "disastrous",
    explanation: "★disastrous 灾难性的"
  },
  {
    sentence: "A number of b___ broke into the gallery and stole dozens of priceless paintings.",
    hint: { letter: "b", chinese: "入室窃贼" },
    answer: "burglars",
    explanation: "★burglar 入室窃贼"
  },
  {
    sentence: "No one could ever a___ this government of not caring about the poor.",
    hint: { letter: "a", chinese: "控告；指责" },
    answer: "accuse",
    explanation: "★accuse 控告；accuse sb. of sth."
  },
  {
    sentence: "Gabrielle c___ to leaking copies of the documents to the press.",
    hint: { letter: "c", chinese: "坦白；招供" },
    answer: "confessed",
    explanation: "★confess to doing sth. 坦白做了某事"
  },
  {
    sentence: "They insist their business idea is o___ and will be wildly acceptable to customers.",
    hint: { letter: "o", chinese: "最佳的；最适宜的" },
    answer: "optimal",
    explanation: "★optimal (fml.) 最优的"
  },
  {
    sentence: "You'd be b___ off living on your own than quarrelling with your dad.",
    hint: { letter: "b", chinese: "（情境）更好的" },
    answer: "better",
    explanation: "★better off 状况更好的"
  },
  {
    sentence: "Is there a French word that is the exact e___ of the English word \"home\"?",
    hint: { letter: "e", chinese: "对应物；等价物" },
    answer: "equivalent",
    explanation: "★equivalent 对应物"
  },
  {
    sentence: "After living in poverty for most of his lifetime, he spent his last few years in c___ comfort.",
    hint: { letter: "c", chinese: "相对的；比较而言的" },
    answer: "comparative",
    explanation: "★comparative 相对的"
  },
  {
    sentence: "The machine will e___ a noisy sound when you press the red button.",
    hint: { letter: "e", chinese: "散发；发出（声光等）" },
    answer: "emit",
    explanation: "★emit 散发出（气、热、声、光）"
  },
  {
    sentence: "The city council was accused of i___ on the parking problem of the city.",
    hint: { letter: "i", chinese: "（人）无行动，没反应" },
    answer: "inaction",
    explanation: "★inaction 无作为、无行动"
  },
  {
    sentence: "The job of a dance teacher e___ teaching students the technique and performance of dance movements.",
    hint: { letter: "e", chinese: "需要；使必要" },
    answer: "entails",
    explanation: "★entail 必然涉及；需要"
  },
  {
    sentence: "I don't usually like to i___ in disputes between husbands and wives.",
    hint: { letter: "i", chinese: "干预；插手" },
    answer: "intervene",
    explanation: "★intervene 干预"
  },
  {
    sentence: "Participants in the world trade talks have agreed to negotiate specific b___ commitments.",
    hint: { letter: "b", chinese: "有法律约束力的" },
    answer: "binding",
    explanation: "★binding 有约束力的"
  },
  {
    sentence: "There is little i___ for people to leave their cars at home when public transport is expensive.",
    hint: { letter: "i", chinese: "刺激；动力" },
    answer: "incentive",
    explanation: "★incentive 激励、动力"
  },
  {
    sentence: "Cultivating a positive mental attitude toward yourself can reap tremendous benefits, you should c___ it.",
    hint: { letter: "c", chinese: "培养（技能/态度）" },
    answer: "cultivate",
    explanation: "★cultivate 培养品质或态度"
  },
  {
    sentence: "Too often we make buying decisions based s___ upon what we see in advertisements.",
    hint: { letter: "s", chinese: "唯一地；仅仅" },
    answer: "solely",
    explanation: "★solely 唯一地"
  },
  {
    sentence: "It must be very g___ to see all your children grown-up and happy.",
    hint: { letter: "g", chinese: "令人满意的；令人高兴的" },
    answer: "gratifying",
    explanation: "★gratifying 令人满意的"
  },
  {
    sentence: "Gandhi was a brave man whose unique form of courage left a lasting i___ on India's history.",
    hint: { letter: "i", chinese: "强大而持久的影响" },
    answer: "imprint",
    explanation: "★imprint 次要义：持久的影响（非'印记'）"
  },
  {
    sentence: "The public's response to the crisis was generous and c___.",
    hint: { letter: "c", chinese: "充满同情心的" },
    answer: "compassionate",
    explanation: "★compassionate 富有同情心的"
  },
  {
    sentence: "Businessmen are showing remarkable p___ in investing in the region.",
    hint: { letter: "p", chinese: "审慎；谨慎" },
    answer: "prudence",
    explanation: "★prudence 审慎"
  },
  {
    sentence: "I'm afraid he doesn't p___ a sense of humor.",
    hint: { letter: "p", chinese: "具有（品质或能力）" },
    answer: "possess",
    explanation: "★possess 次要义：具有(品质、能力)（非'拥有财产'）"
  },
  {
    sentence: "If you feel depressed for more than three weeks, I i___ you to seek professional help.",
    hint: { letter: "i", chinese: "恳求；哀求" },
    answer: "implore",
    explanation: "★implore (fml.) 恳求"
  },

  // ============================================================
  // Unit 4 Explore the unknown (Q89 - Q117)
  // ============================================================
  {
    sentence: "Unfortunately I only had a very s___ knowledge of music.",
    hint: { letter: "s", chinese: "肤浅的；浅薄的" },
    answer: "superficial",
    explanation: "★superficial 肤浅的"
  },
  {
    sentence: "The region was extremely beautiful. N___, Gerard could not imagine spending his life there.",
    hint: { letter: "n", chinese: "然而；尽管如此" },
    answer: "Nonetheless",
    explanation: "★nonetheless (fml.) 然而"
  },
  {
    sentence: "We stood in the orchard, where the apples were ripe and d___ just inches above our heads.",
    hint: { letter: "d", chinese: "悬垂；吊着" },
    answer: "dangled",
    explanation: "★dangle (使)悬挂"
  },
  {
    sentence: "He had imagined that going down in the caves late at night would t___ her, but she was calm.",
    hint: { letter: "t", chinese: "使十分害怕" },
    answer: "terrify",
    explanation: "★terrify 使恐惧"
  },
  {
    sentence: "It is reported that air pollution could also restrict blood flow, causing s___ and heart attacks.",
    hint: { letter: "s", chinese: "中风；脑卒中" },
    answer: "strokes",
    explanation: "★stroke 次要义：中风（非'划水/抚摸'）"
  },
  {
    sentence: "He took a screwdriver from his pocket and began to l___ the screws on the bike.",
    hint: { letter: "l", chinese: "放松；使变松" },
    answer: "loosen",
    explanation: "★loosen 使变松"
  },
  {
    sentence: "Concerns about the danger p___ by fireworks could lead to restrictions on their use.",
    hint: { letter: "p", chinese: "造成（威胁/问题）" },
    answer: "posed",
    explanation: "★pose 次要义：造成威胁、引起问题"
  },
  {
    sentence: "Three boats v___ without a trace one day and have never been found.",
    hint: { letter: "v", chinese: "突然消失" },
    answer: "vanished",
    explanation: "★vanish 突然消失"
  },
  {
    sentence: "The night turned cold and heavy rain began to fall during our d___ from the mountain peak.",
    hint: { letter: "d", chinese: "下降；降落（过程）" },
    answer: "descent",
    explanation: "★descent 下降过程"
  },
  {
    sentence: "For two a___ minutes the plane dived, shook, and finally landed safely.",
    hint: { letter: "a", chinese: "折磨人的；煎熬的" },
    answer: "agonizing",
    explanation: "★agonizing 折磨人的"
  },
  {
    sentence: "I changed my breathing pattern, inhaling and e___ heavily after each set of exercise.",
    hint: { letter: "e", chinese: "呼出；吐气" },
    answer: "exhaling",
    explanation: "★exhale (fml.) 呼出"
  },
  {
    sentence: "Families a___ teachers with the achievement of educational goals.",
    hint: { letter: "a", chinese: "协助；帮助" },
    answer: "assisted",
    explanation: "★assist 协助"
  },
  {
    sentence: "Scientists are k___ interested in learning which substances make fruit so healthful.",
    hint: { letter: "k", chinese: "强烈地" },
    answer: "keenly",
    explanation: "★keenly 次要义：强烈地"
  },
  {
    sentence: "The mist and rain e___ the forest and we could only see the nearest trees.",
    hint: { letter: "e", chinese: "包住；覆盖" },
    answer: "enveloped",
    explanation: "★envelop (fml.) 包住"
  },
  {
    sentence: "This place used to be a vast w___ of mountains, lakes, and forests.",
    hint: { letter: "w", chinese: "未开发的地区；荒野" },
    answer: "wilderness",
    explanation: "★wilderness 荒野"
  },
  {
    sentence: "The study of the brain is often described by scientists as the next intellectual f___.",
    hint: { letter: "f", chinese: "（知识/学科的）新领域" },
    answer: "frontier",
    explanation: "★frontier 次要义：新领域、未开拓的领域"
  },
  {
    sentence: "Observations of distant g___ indicate that the universe is expanding.",
    hint: { letter: "g", chinese: "星系" },
    answer: "galaxies",
    explanation: "★galaxy 星系"
  },
  {
    sentence: "Technology gives us immense power over nature, and our decisions will affect all t___ life.",
    hint: { letter: "t", chinese: "地球的；地球上的" },
    answer: "terrestrial",
    explanation: "★terrestrial 地球的"
  },
  {
    sentence: "The Earth and many planets in the solar system rotate on their axes and o___ around the Sun.",
    hint: { letter: "o", chinese: "沿轨道运行" },
    answer: "orbit",
    explanation: "★orbit (v.) 沿轨道运行"
  },
  {
    sentence: "I think we should s___ the old paint off and see what the wood is like underneath.",
    hint: { letter: "s", chinese: "剥去；除去" },
    answer: "strip",
    explanation: "★strip (v.) 剥去"
  },
  {
    sentence: "Since childhood, we have been learning the languages of the eyes and those subtle t___ of the head.",
    hint: { letter: "t", chinese: "倾斜；倾侧" },
    answer: "tilts",
    explanation: "★tilt 倾斜动作"
  },
  {
    sentence: "He wrapped himself in his coat and sat in the corner where the leaves s___ him from the wind.",
    hint: { letter: "s", chinese: "保护；保卫" },
    answer: "shielded",
    explanation: "★shield (v.) 保护"
  },
  {
    sentence: "The movie shows heroes risking their lives to save the Earth from a c___ collision with a comet.",
    hint: { letter: "c", chinese: "灾难性的；毁灭性的" },
    answer: "catastrophic",
    explanation: "★catastrophic 灾难性的"
  },
  {
    sentence: "A more p___ explanation would seem to be that people are fed up with their routine life.",
    hint: { letter: "p", chinese: "貌似有理的；似乎是真的" },
    answer: "plausible",
    explanation: "★plausible 貌似合理的"
  },
  {
    sentence: "Our ultimate goal is to create a culture that is c___ to continual progress and learning.",
    hint: { letter: "c", chinese: "有助于…的" },
    answer: "conducive",
    explanation: "★conducive (~to sth.) 有助于"
  },
  {
    sentence: "It's reported that r___ elephants have killed at least 31 people in that area this year.",
    hint: { letter: "r", chinese: "离群的（动物）" },
    answer: "rogue",
    explanation: "★rogue 离群的、可能危险的"
  },
  {
    sentence: "We are constantly looking for new h___ areas.",
    hint: { letter: "h", chinese: "适合居住的" },
    answer: "habitable",
    explanation: "★habitable 适居的"
  },
  {
    sentence: "A rare star system has been found, but it is d___ to end in a massive explosion.",
    hint: { letter: "d", chinese: "使注定（毁灭/失败）" },
    answer: "doomed",
    explanation: "★doom (usu. passive) 注定"
  },
  {
    sentence: "Over the years, we've been conditioned to accept the possibility of e___ life through movies.",
    hint: { letter: "e", chinese: "地球外的；外星的" },
    answer: "extraterrestrial",
    explanation: "★extraterrestrial 地外的"
  },

  // ============================================================
  // Unit 5 Where heritage meets modernity (Q119 - Q146)
  // ============================================================
  {
    sentence: "Three generations of fishermen are engaged in an e___ struggle against nature and fate.",
    hint: { letter: "e", chinese: "漫长而艰难的" },
    answer: "epic",
    explanation: "★epic 次要义：漫长艰难的"
  },
  {
    sentence: "The Rocky Mountains have captivated visitors with their j___ peaks and magnificent waterfalls.",
    hint: { letter: "j", chinese: "凹凸不平的；锯齿状的" },
    answer: "jagged",
    explanation: "★jagged 锯齿状的"
  },
  {
    sentence: "The light of the setting sun t___ the buildings with delicate colors.",
    hint: { letter: "t", chinese: "使带有一点（色彩）" },
    answer: "tinges",
    explanation: "★tinge (vt.) 使带有淡色"
  },
  {
    sentence: "My a___ memory is of him watering his plants in the garden on sunny afternoons.",
    hint: { letter: "a", chinese: "长久的；持久的" },
    answer: "abiding",
    explanation: "★abiding (感情/记忆)持久的"
  },
  {
    sentence: "The vehicle s___ off the road, hit a lamppost and rolled several times before catching fire.",
    hint: { letter: "s", chinese: "突然转向一边（避免碰撞）" },
    answer: "swerved",
    explanation: "★swerve 突然转向"
  },
  {
    sentence: "These birds are able to survive the p___ of the Arctic winter.",
    hint: { letter: "p", chinese: "危险；凶险" },
    answer: "perils",
    explanation: "★peril (fml.) 危险"
  },
  {
    sentence: "They crossed the bridge and t___ the road out into the open country.",
    hint: { letter: "t", chinese: "横穿；跨越" },
    answer: "traversed",
    explanation: "★traverse (fml.) 横穿"
  },
  {
    sentence: "They warned us that the northern half of the island was controlled by h___ forces.",
    hint: { letter: "h", chinese: "敌人的；敌方的" },
    answer: "hostile",
    explanation: "★hostile 敌方的"
  },
  {
    sentence: "The new oil contracts will amount to a half billion dollars of foreign investment in their t___.",
    hint: { letter: "t", chinese: "领土；版图" },
    answer: "territory",
    explanation: "★territory 领土"
  },
  {
    sentence: "He urged the United States to p___ with its efforts to bring about peace.",
    hint: { letter: "p", chinese: "坚持；执意" },
    answer: "persist",
    explanation: "★persist (v.) 坚持"
  },
  {
    sentence: "There will always be \"lost in translation\" moments, but that's part of the a___ of foreign travel.",
    hint: { letter: "a", chinese: "诱惑；魅力" },
    answer: "allure",
    explanation: "★allure 魅力"
  },
  {
    sentence: "The i___ value of a coin is the value of the metal it is made of.",
    hint: { letter: "i", chinese: "本质的；内在的" },
    answer: "intrinsic",
    explanation: "★intrinsic 内在的"
  },
  {
    sentence: "Hemingway's r___ with his nurse inspired him to write A Farewell to Arms.",
    hint: { letter: "r", chinese: "罗曼史；风流韵事" },
    answer: "romance",
    explanation: "★romance 次要义：恋情、罗曼史"
  },
  {
    sentence: "His refusal to work late was i___ as a lack of commitment to the company.",
    hint: { letter: "i", chinese: "把…理解为；解释为" },
    answer: "interpreted",
    explanation: "★interpret 次要义：理解、解释"
  },
  {
    sentence: "Fine bone china is very practical due to the fact that it is strong and d___.",
    hint: { letter: "d", chinese: "耐用的" },
    answer: "durable",
    explanation: "★durable 次要义：耐用的"
  },
  {
    sentence: "The new model is a t___ to the skill and dedication of the workforce.",
    hint: { letter: "t", chinese: "（be a ~ to）是…的证明" },
    answer: "testament",
    explanation: "★testament 证明"
  },
  {
    sentence: "Drivers are slowed down or pull over when they are d___ by bright sunlight.",
    hint: { letter: "d", chinese: "使目眩；使眼花" },
    answer: "dazzled",
    explanation: "★dazzle 次要义：使目眩"
  },
  {
    sentence: "As our boat d___ down the river, many children ran along the shore waving at us.",
    hint: { letter: "d", chinese: "漂流；漂移" },
    answer: "drifted",
    explanation: "★drift 漂流"
  },
  {
    sentence: "Yosemite National Park is an area of outstanding s___ beauty and great wilderness value.",
    hint: { letter: "s", chinese: "景色优美的" },
    answer: "scenic",
    explanation: "★scenic 风景优美的"
  },
  {
    sentence: "The beach s___ for more than two miles, backed by grassy dunes and pine forest.",
    hint: { letter: "s", chinese: "延伸；绵延" },
    answer: "stretches",
    explanation: "★stretch (vt.) 延伸"
  },
  {
    sentence: "You might gaze at the Grand Canyon with a___, marveling at its beauty.",
    hint: { letter: "a", chinese: "崇敬；赞叹" },
    answer: "awe",
    explanation: "★awe 敬畏、赞叹"
  },
  {
    sentence: "That's probably the most bare, b___ and inhospitable island I've ever seen.",
    hint: { letter: "b", chinese: "荒凉的；无遮蔽的" },
    answer: "bleak",
    explanation: "★bleak 荒凉的"
  },
  {
    sentence: "Penguins employ cooperative behaviors to deal with an incredibly h___ environment.",
    hint: { letter: "h", chinese: "（环境）恶劣的，严峻的" },
    answer: "harsh",
    explanation: "★harsh (气候/环境)恶劣的"
  },
  {
    sentence: "Running a marathon is seen by many as the ultimate test of human e___.",
    hint: { letter: "e", chinese: "耐力" },
    answer: "endurance",
    explanation: "★endurance 耐力"
  },
  {
    sentence: "This exhibition is c___ by four high school students focused on artwork inspired by nature.",
    hint: { letter: "c", chinese: "策展；策划组织" },
    answer: "curated",
    explanation: "★curate (v.) 策展"
  },
  {
    sentence: "Milly is the most serious person I know — her stories are always completely d___ of humor.",
    hint: { letter: "d", chinese: "毫无；完全没有" },
    answer: "devoid",
    explanation: "★devoid (be devoid of) 毫无"
  },
  {
    sentence: "She signed the book and i___ the words \"with grateful thanks\" on it.",
    hint: { letter: "i", chinese: "题写；铭刻" },
    answer: "inscribed",
    explanation: "★inscribe 题写"
  },
  {
    sentence: "These fragments provide t___ evidence for how the city has changed since the 18th century.",
    hint: { letter: "t", chinese: "确凿的；明显的" },
    answer: "tangible",
    explanation: "★tangible 确凿的"
  },

  // ============================================================
  // Unit 6 Live longer, live better (Q151 - Q178)
  // ============================================================
  {
    sentence: "Melania believes that dressing y___ is about keeping up with trends.",
    hint: { letter: "y", chinese: "年轻地；像年轻人地" },
    answer: "youthfully",
    explanation: "★youthfully 年轻地"
  },
  {
    sentence: "Tim was rude, unable to bear criticism, and more and more h___ in his views as he got older.",
    hint: { letter: "h", chinese: "古板的，守旧的" },
    answer: "hidebound",
    explanation: "★hidebound 守旧的（贬义）"
  },
  {
    sentence: "I would say the film successfully r___ the joyful atmosphere of those days.",
    hint: { letter: "r", chinese: "使重温；使再次经历" },
    answer: "recaptures",
    explanation: "★recapture 使重温(感觉)"
  },
  {
    sentence: "It is said that the new employee has broken the rule and will be punished a___.",
    hint: { letter: "a", chinese: "相应地" },
    answer: "accordingly",
    explanation: "★accordingly 相应地"
  },
  {
    sentence: "Don't fall into the t___ of investing all your money in one place.",
    hint: { letter: "t", chinese: "牢笼；困境" },
    answer: "trap",
    explanation: "★trap 次要义：困境（非'夹子'）"
  },
  {
    sentence: "Three teenage girls took a vow of e___ friendship during the summer of 1985.",
    hint: { letter: "e", chinese: "永远的；永恒的" },
    answer: "eternal",
    explanation: "★eternal 永恒的"
  },
  {
    sentence: "The actress who played the fashion designer in the movie was absolutely t___!",
    hint: { letter: "t", chinese: "极好的；极棒的" },
    answer: "terrific",
    explanation: "★terrific (口语) 极好的"
  },
  {
    sentence: "You have to be realistic — it's difficult to c___ everything into a tight schedule.",
    hint: { letter: "c", chinese: "把…塞进；硬塞" },
    answer: "cram",
    explanation: "★cram 把东西硬塞进小空间"
  },
  {
    sentence: "One weakness of the essay is that the information is given d___ instead of in a certain section.",
    hint: { letter: "d", chinese: "弥漫地；扩散地" },
    answer: "diffusely",
    explanation: "★diffusely 漫射地、分散地"
  },
  {
    sentence: "The company has been rather s___ in responding to the rapid changes in technology.",
    hint: { letter: "s", chinese: "缓慢的；迟缓的" },
    answer: "sluggish",
    explanation: "★sluggish 迟缓的"
  },
  {
    sentence: "He went on and on about how successful he was, o___ to the fact that he had hurt her.",
    hint: { letter: "o", chinese: "未察觉的；不知道的" },
    answer: "oblivious",
    explanation: "★oblivious 未察觉的"
  },
  {
    sentence: "The faint smell of her perfume l___ in the room long after she had left.",
    hint: { letter: "l", chinese: "继续留存（较久）" },
    answer: "lingered",
    explanation: "★linger 逗留、继续存在"
  },
  {
    sentence: "Newton's physical theories are a good example of how a scientific theory may be p___ as well as explanatory.",
    hint: { letter: "p", chinese: "预测的；前瞻的" },
    answer: "predictive",
    explanation: "★predictive 预测的"
  },
  {
    sentence: "She was interrupted by the chairperson when she was m___ through her presentation.",
    hint: { letter: "m", chinese: "在中途的；到一半（的）" },
    answer: "midway",
    explanation: "★midway 在中途"
  },
  {
    sentence: "Adrenaline s___ through her veins after she received the surprising news.",
    hint: { letter: "s", chinese: "（液体/电流）汹涌；浪涌" },
    answer: "surged",
    explanation: "★surge 汹涌、突然涌动"
  },
  {
    sentence: "The spokesman of the company refused to d___ more details of their latest project to the press.",
    hint: { letter: "d", chinese: "透露；泄露" },
    answer: "disclose",
    explanation: "disclose (fml.) 透露、揭露"
  },
  {
    sentence: "With the improvement of living standards, foreign travel has become c___.",
    hint: { letter: "c", chinese: "常见的；屡见不鲜的" },
    answer: "commonplace",
    explanation: "commonplace 常见的"
  },
  {
    sentence: "It was only at the very end of the 19th century that this practice was a___.",
    hint: { letter: "a", chinese: "废止；废除；取消" },
    answer: "abolished",
    explanation: "abolish 废除制度/法律"
  },
  {
    sentence: "We have decided to s___ all production at the factory until safety checks can be carried out.",
    hint: { letter: "s", chinese: "暂停；中止" },
    answer: "suspend",
    explanation: "suspend 暂停"
  },
  {
    sentence: "Doctors say these new drugs can reduce pain and p___ life for two or three years.",
    hint: { letter: "p", chinese: "延长；拉长（时间）" },
    answer: "prolong",
    explanation: "prolong 故意延长"
  },
  {
    sentence: "A long flight of stairs made the center of the museum i___ to disabled visitors.",
    hint: { letter: "i", chinese: "难到达的；不可及的" },
    answer: "inaccessible",
    explanation: "inaccessible 次要义：难到达的"
  },
  {
    sentence: "Caulfield claimed the company had d___ against him because of his nationality.",
    hint: { letter: "d", chinese: "（不公正地）歧视" },
    answer: "discriminated",
    explanation: "discriminate against sb. 歧视某人"
  },
  {
    sentence: "Cutting the bush back in the autumn will help promote v___ growth in the spring.",
    hint: { letter: "v", chinese: "强健的；精力旺盛的" },
    answer: "vigorous",
    explanation: "vigorous 茁壮的"
  },
  {
    sentence: "The business report cautioned investors a___ over-optimistic plans.",
    hint: { letter: "a", chinese: "警告；告诫；提醒" },
    answer: "against",
    explanation: "caution sb. against sth. 提醒某人不要做某事"
  },
  {
    sentence: "Her father's death reminded her that she was m___, and it made her very sad.",
    hint: { letter: "m", chinese: "终有一死的；不会长生不死的" },
    answer: "mortal",
    explanation: "mortal 不会长生不死的"
  },
  {
    sentence: "His strange behavior at the meeting yesterday a___ my suspicion.",
    hint: { letter: "a", chinese: "激起（感情/态度）" },
    answer: "aroused",
    explanation: "arouse 次要义：激起情感（非'激起性欲'）"
  },
  {
    sentence: "There must be specific events which t___ the aggressive displays in your dog.",
    hint: { letter: "t", chinese: "引发；触发" },
    answer: "triggered",
    explanation: "trigger 引发（一系列事件）"
  },
  {
    sentence: "At that time there were no other universities in England equal in s___ to Oxford and Cambridge.",
    hint: { letter: "s", chinese: "名声；声望" },
    answer: "stature",
    explanation: "stature 次要义：声望（非'身高'）"
  },

  // ============================================================
  // Unit 7 What is art? (Q179 - Q200)
  // ============================================================
  {
    sentence: "He is one of the country's f___ authorities on criminal law.",
    hint: { letter: "f", chinese: "最重要的；最好的" },
    answer: "foremost",
    explanation: "★foremost 最重要的"
  },
  {
    sentence: "The computer and the human mind have different but c___ abilities.",
    hint: { letter: "c", chinese: "互补的" },
    answer: "complementary",
    explanation: "★complementary 互补的"
  },
  {
    sentence: "The company has always been at the f___ of science and technology.",
    hint: { letter: "f", chinese: "最前线；最重要的位置" },
    answer: "forefront",
    explanation: "★forefront 最前沿"
  },
  {
    sentence: "Mary Shelley was just 21 when she published her m___ Frankenstein.",
    hint: { letter: "m", chinese: "杰作；代表作" },
    answer: "masterpiece",
    explanation: "masterpiece 杰作"
  },
  {
    sentence: "I have severe doubts about the u___ of examinations on subjects learned this way.",
    hint: { letter: "u", chinese: "有用；实用性" },
    answer: "utility",
    explanation: "utility 次要义：实用性"
  },
  {
    sentence: "Poor soil has c___ the level of crop production in this area.",
    hint: { letter: "c", chinese: "限制；束缚" },
    answer: "constrained",
    explanation: "★constrain 限制"
  },
  {
    sentence: "Maybe you can try this seat — it can be adjusted to fit the c___ of your back.",
    hint: { letter: "c", chinese: "外形；轮廓" },
    answer: "contours",
    explanation: "★contour 轮廓"
  },
  {
    sentence: "There is a general public p___ that social media can be addictive.",
    hint: { letter: "p", chinese: "认识；观念；看法" },
    answer: "perception",
    explanation: "★perception 看法、观念"
  },
  {
    sentence: "His paintings are rather too a___-garde for my taste.",
    hint: { letter: "a", chinese: "前卫的；先锋派的" },
    answer: "avant",
    explanation: "★avant-garde 前卫的"
  },
  {
    sentence: "While there are several arguments, the issue of whether they should be required is not a c___-cut matter.",
    hint: { letter: "c", chinese: "明确的；易懂的" },
    answer: "clear",
    explanation: "★clear-cut 明确的"
  },
  {
    sentence: "She didn't want to confront the i___ fact that she would have to sell the house.",
    hint: { letter: "i", chinese: "不可避免的" },
    answer: "inescapable",
    explanation: "★inescapable 不可避免的"
  },
  {
    sentence: "We can gain a market advantage by l___ our network of partners.",
    hint: { letter: "l", chinese: "借助已有的…实现新目标" },
    answer: "leveraging",
    explanation: "★leverage 借助、利用"
  },
  {
    sentence: "Educators and employers need to c___ in preparing the next generation for employment.",
    hint: { letter: "c", chinese: "合作；协作" },
    answer: "collaborate",
    explanation: "★collaborate 合作"
  },
  {
    sentence: "It is a delightful river with a p___ of wild flowers along its banks.",
    hint: { letter: "p", chinese: "大量；丰富" },
    answer: "profusion",
    explanation: "★profusion (fml.) 大量"
  },
  {
    sentence: "Do some viruses develop a s___ relationship with their host?",
    hint: { letter: "s", chinese: "共生的；互相依赖的" },
    answer: "symbiotic",
    explanation: "★symbiotic 共生的"
  },
  {
    sentence: "George sat at the head of the table, in his r___ place as their leader.",
    hint: { letter: "r", chinese: "合法的；正当的" },
    answer: "rightful",
    explanation: "★rightful 合法的、正当的"
  },
  {
    sentence: "You need a plain blouse to go with that skirt — nothing too e___.",
    hint: { letter: "e", chinese: "复杂的；精心制作的" },
    answer: "elaborate",
    explanation: "★elaborate (a.) 详尽精心的"
  },
  {
    sentence: "Some of us learn experientially, while others are more attracted to logical or c___ learning.",
    hint: { letter: "c", chinese: "概念的" },
    answer: "conceptual",
    explanation: "★conceptual (fml.) 概念的"
  },
  {
    sentence: "While improving material well-being, we should also enrich our s___ life.",
    hint: { letter: "s", chinese: "精神的；心灵的" },
    answer: "spiritual",
    explanation: "★spiritual 精神的"
  },
  {
    sentence: "The job involves drawing up and e___ a plan of nursing care.",
    hint: { letter: "e", chinese: "实行；执行" },
    answer: "executing",
    explanation: "★execute 次要义：执行（计划）（非'处死'）"
  },
  {
    sentence: "He developed a mathematical f___ describing the distances of the planets from the Sun.",
    hint: { letter: "f", chinese: "方程式；公式" },
    answer: "formula",
    explanation: "★formula 次要义：方程式（非'配方'）"
  },
  {
    sentence: "To everyone's astonishment, Helena left the company of her own v___.",
    hint: { letter: "v", chinese: "（of one's own ~）自愿" },
    answer: "volition",
    explanation: "★volition (fml.) 自愿"
  },
  {
    sentence: "Housing conditions in this area have improved c___ over the past few years.",
    hint: { letter: "c", chinese: "相当大地；很；非常" },
    answer: "considerably",
    explanation: "★considerably 相当大地"
  },
  {
    sentence: "Why did you decide to c___ your true identity?",
    hint: { letter: "c", chinese: "隐瞒；掩盖" },
    answer: "conceal",
    explanation: "★conceal 隐瞒"
  },
  {
    sentence: "There are, in theory, many ways to h___ economic recovery after a financial crisis.",
    hint: { letter: "h", chinese: "加速；加紧" },
    answer: "hasten",
    explanation: "★hasten 加速"
  },
  {
    sentence: "The shame of being a bankrupt is likely to h___ Mr. Lucas for the rest of his life.",
    hint: { letter: "h", chinese: "缠扰；纠缠" },
    answer: "haunt",
    explanation: "★haunt 次要义：长期困扰"
  },
  {
    sentence: "She could not r___ a smile at this, but she answered only by nodding her head slightly.",
    hint: { letter: "r", chinese: "忍住；克制" },
    answer: "repress",
    explanation: "★repress 忍住、克制"
  },
  {
    sentence: "The government has d___ criticism that the country's health policy is a mess.",
    hint: { letter: "d", chinese: "拒绝考虑；不理会" },
    answer: "dismissed",
    explanation: "★dismiss 拒绝考虑"
  },
  {
    sentence: "The government promises to r___ the economy to its full strength by the end of the year.",
    hint: { letter: "r", chinese: "使恢复；使回复" },
    answer: "restore",
    explanation: "★restore 使恢复"
  }
];

// 题目统计：
// Unit 1: 29 题 (Q1-Q29)
// Unit 2: 29 题 (Q30-Q58)
// Unit 3: 28 题 (Q59-Q86)
// Unit 4: 29 题 (Q87-Q115)
// Unit 5: 28 题 (Q116-Q143)
// Unit 6: 28 题 (Q144-Q171)
// Unit 7: 29 题 (Q172-Q200)
// 总计：200 道

if (typeof module !== 'undefined' && module.exports) {
  module.exports = part5Questions;
}