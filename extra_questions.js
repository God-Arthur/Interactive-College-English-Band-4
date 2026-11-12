// 额外词专项练习题库
// 来源：额外词.txt（课文中出现但不在主词表内的词）
// 每个词自造例句，Part V 填空题格式
const extraQuestions = [
  // ====== Unit 1 ======
  {
    sentence: "Brushing your teeth twice a day is part of a good daily r___.",
    hint: { letter: "r", chinese: "常规；日常事务" },
    answer: "routine",
    explanation: "routine 表示'日常事务；常规'"
  },
  {
    sentence: "It would be i___ to quit your job before finding a new one.",
    hint: { letter: "i", chinese: "不明智的；欠考虑的" },
    answer: "ill-advised",
    explanation: "ill-advised 表示'不明智的'，由 ill+advised 构成"
  },
  {
    sentence: "The mayor plans to a___ the housing crisis in his next speech.",
    hint: { letter: "a", chinese: "处理；对付（问题）" },
    answer: "address",
    explanation: "address 作动词表示'处理；应对'，非'地址'"
  },
  {
    sentence: "Making decisions based on rumors is i___ at best.",
    hint: { letter: "i", chinese: "消息不灵通的；了解不充分的" },
    answer: "ill-informed",
    explanation: "ill-informed 表示'信息不足的'"
  },
  {
    sentence: "The river was s___ enough to wade across safely.",
    hint: { letter: "s", chinese: "浅的；肤浅的" },
    answer: "shallow",
    explanation: "shallow 表示'浅的'，也可喻指'肤浅的'"
  },
  {
    sentence: "We need to stick to our b___ and avoid unnecessary spending.",
    hint: { letter: "b", chinese: "预算" },
    answer: "budget",
    explanation: "budget 表示'预算'"
  },
  {
    sentence: "It is a___ too late to apologize now.",
    hint: { letter: "a", chinese: "完全地；全部地" },
    answer: "altogether",
    explanation: "altogether 表示'完全地'，注意与 all together 区分"
  },
  {
    sentence: "The bullies would t___ him about his accent every day.",
    hint: { letter: "t", chinese: "嘲笑；奚落" },
    answer: "taunt",
    explanation: "taunt 表示'嘲笑；讥讽'"
  },
  {
    sentence: "The scholarship will g___ her the opportunity to study abroad.",
    hint: { letter: "g", chinese: "给予；授予" },
    answer: "grant",
    explanation: "grant 作动词表示'授予'，也可作名词'拨款'"
  },

  // ====== Unit 2 ======
  {
    sentence: "They decided to s___ through the park on a sunny afternoon.",
    hint: { letter: "s", chinese: "散步；溜达" },
    answer: "stroll",
    explanation: "stroll 表示'闲逛；散步'"
  },
  {
    sentence: "It was a s___ simple task, but it took hours to finish.",
    hint: { letter: "s", chinese: "表面上；看似" },
    answer: "seemingly",
    explanation: "seemingly 表示'表面上地'"
  },
  {
    sentence: "The company decided to r___ its logo for a fresher look.",
    hint: { letter: "r", chinese: "重新设计" },
    answer: "redesign",
    explanation: "redesign 表示'重新设计'"
  },
  {
    sentence: "The magazine's l___ was clean and easy to read.",
    hint: { letter: "l", chinese: "版面设计；布局" },
    answer: "layout",
    explanation: "layout 表示'布局；版面设计'"
  },
  {
    sentence: "She tends to b___ toward classical music rather than pop.",
    hint: { letter: "b", chinese: "倾向于" },
    answer: "bend",
    explanation: "bend toward 表示'倾向于'"
  },
  {
    sentence: "The tech g___ announced a breakthrough in AI research.",
    hint: { letter: "g", chinese: "巨头；大公司" },
    answer: "giant",
    explanation: "giant 此处取'巨头'义，非'巨人'"
  },
  {
    sentence: "The c___ b___ between the two fields is gradually disappearing.",
    hint: { letter: "c", chinese: "正在倒塌的壁垒" },
    answer: "collapsing barrier",
    explanation: "collapsing barrier 表示'正在倒塌的壁垒'"
  },
  {
    sentence: "The complicated instructions c___ the new employees.",
    hint: { letter: "c", chinese: "使困惑；使混乱" },
    answer: "confuse",
    explanation: "confuse 表示'使迷惑'"
  },
  {
    sentence: "The medicine left an u___ aftertaste in his mouth.",
    hint: { letter: "u", chinese: "令人不快的" },
    answer: "unpleasant",
    explanation: "unpleasant 表示'令人不快的'"
  },
  {
    sentence: "The play's a___ humor appealed to a niche audience.",
    hint: { letter: "a", chinese: "荒诞派的" },
    answer: "absurdist",
    explanation: "absurdist 表示'荒诞派的'"
  },
  {
    sentence: "She would o___ over every tiny detail of the project.",
    hint: { letter: "o", chinese: "痴迷；念念不忘" },
    answer: "obsess",
    explanation: "obsess 表示'痴迷；萦绕于心'"
  },
  {
    sentence: "The mapmakers had to r___ the borders after the war.",
    hint: { letter: "r", chinese: "重新绘制" },
    answer: "redraw",
    explanation: "redraw 表示'重新划定'"
  },
  {
    sentence: "Doctors tried to i___ the infected patient from others.",
    hint: { letter: "i", chinese: "隔离；使孤立" },
    answer: "isolate",
    explanation: "isolate 表示'使隔离'"
  },
  {
    sentence: "Loud noises d___ him from studying effectively.",
    hint: { letter: "d", chinese: "分散（注意力）" },
    answer: "distract",
    explanation: "distract 表示'使分心'"
  },
  {
    sentence: "The director wants to r___ the classic film for modern audiences.",
    hint: { letter: "r", chinese: "重新构想" },
    answer: "reimagine",
    explanation: "reimagine 表示'重新构想'"
  },
  {
    sentence: "They used p___ to cover the cracks in the old ceiling.",
    hint: { letter: "p", chinese: "灰泥；石膏" },
    answer: "plaster",
    explanation: "plaster 表示'灰泥'，也可作动词'涂抹'"
  },
  {
    sentence: "The rumor began to s___ through the school like wildfire.",
    hint: { letter: "s", chinese: "传播；蔓延" },
    answer: "spread",
    explanation: "spread 表示'传播'"
  },
  {
    sentence: "We considered every o___ before making a final decision.",
    hint: { letter: "o", chinese: "选项" },
    answer: "option",
    explanation: "option 表示'选择；选项'"
  },
  {
    sentence: "Driving in that weather was nothing short of i___.",
    hint: { letter: "i", chinese: "疯狂的；荒唐的" },
    answer: "insane",
    explanation: "insane 表示'疯狂的'"
  },
  {
    sentence: "The mountain peak seemed u___ in the thick fog.",
    hint: { letter: "u", chinese: "够不着的；无法达到的" },
    answer: "unreachable",
    explanation: "unreachable 表示'无法触及的'"
  },
  {
    sentence: "The view from the summit was truly a___.",
    hint: { letter: "a", chinese: "令人敬畏的" },
    answer: "awe-inspiring",
    explanation: "awe-inspiring 表示'令人惊叹的'"
  },
  {
    sentence: "A bright f___ of lightning illuminated the dark sky.",
    hint: { letter: "f", chinese: "闪光；闪烁" },
    answer: "flash",
    explanation: "flash 表示'闪光'"
  },

  // ====== Unit 3 ======
  {
    sentence: "Scientists found a clear l___ between diet and heart health.",
    hint: { letter: "l", chinese: "联系；关联" },
    answer: "link",
    explanation: "link 表示'联系'"
  },
  {
    sentence: "We must consider every a___ of the problem before deciding.",
    hint: { letter: "a", chinese: "方面；层面" },
    answer: "aspect",
    explanation: "aspect 表示'方面'"
  },
  {
    sentence: "The instructions were s___ and easy to follow.",
    hint: { letter: "s", chinese: "简单的；直截了当的" },
    answer: "straightforward",
    explanation: "straightforward 表示'简单明了的'"
  },
  {
    sentence: "The company's s___ for growth proved highly effective.",
    hint: { letter: "s", chinese: "策略" },
    answer: "strategy",
    explanation: "strategy 表示'策略；战略'"
  },
  {
    sentence: "Can you p___ this difficult word for me?",
    hint: { letter: "p", chinese: "发音" },
    answer: "pronounce",
    explanation: "pronounce 表示'发音'"
  },
  {
    sentence: "The professor likes to q___ famous philosophers in his lectures.",
    hint: { letter: "q", chinese: "引用" },
    answer: "quote",
    explanation: "quote 表示'引用'"
  },
  {
    sentence: "Please s___ your name and address clearly on the form.",
    hint: { letter: "s", chinese: "陈述；说明" },
    answer: "state",
    explanation: "state 作动词表示'陈述'，非'州/状态'"
  },
  {
    sentence: "He had no n___ of changing his mind anytime soon.",
    hint: { letter: "n", chinese: "观念；想法" },
    answer: "notion",
    explanation: "notion 表示'概念；想法'"
  },
  {
    sentence: "It is r___ to save money for emergencies.",
    hint: { letter: "r", chinese: "理性的；合理的" },
    answer: "rational",
    explanation: "rational 表示'理性的'"
  },
  {
    sentence: "Hard work alone cannot a___ success without a bit of luck.",
    hint: { letter: "a", chinese: "实现；达到" },
    answer: "attain",
    explanation: "attain 表示'达到；实现'"
  },
  {
    sentence: "The sweet dessert was a t___ he could not resist.",
    hint: { letter: "t", chinese: "诱惑" },
    answer: "temptation",
    explanation: "temptation 表示'诱惑'"
  },
  {
    sentence: "Western culture tends to be more i___ than Eastern culture.",
    hint: { letter: "i", chinese: "个人主义的" },
    answer: "individualistic",
    explanation: "individualistic 表示'个人主义的'"
  },
  {
    sentence: "A good book can c___ all your attention for hours.",
    hint: { letter: "c", chinese: "消耗；占用" },
    answer: "consume",
    explanation: "consume 表示'消耗'"
  },
  {
    sentence: "The company plans to l___ a new product next spring.",
    hint: { letter: "l", chinese: "推出（产品）；发起" },
    answer: "launch",
    explanation: "launch 表示'发布；推出'"
  },
  {
    sentence: "She decided to p___ a career in medicine despite the challenges.",
    hint: { letter: "p", chinese: "追求" },
    answer: "pursue",
    explanation: "pursue 表示'追求'"
  },
  {
    sentence: "Some people believe that leadership is an i___ talent.",
    hint: { letter: "i", chinese: "天生的；固有的" },
    answer: "innate",
    explanation: "innate 表示'天生的'"
  },
  {
    sentence: "Childhood experiences s___ a person's character for life.",
    hint: { letter: "s", chinese: "塑造" },
    answer: "shape",
    explanation: "shape 作动词表示'塑造'"
  },
  {
    sentence: "We need a new a___ to solve this old problem.",
    hint: { letter: "a", chinese: "方法；途径" },
    answer: "approach",
    explanation: "approach 表示'方法；途径'"
  },
  {
    sentence: "Music is a u___ language understood by all cultures.",
    hint: { letter: "u", chinese: "普遍的；通用的" },
    answer: "universal",
    explanation: "universal 表示'普遍的'"
  },
  {
    sentence: "Her d___ moment came when she won the championship.",
    hint: { letter: "d", chinese: "决定性的" },
    answer: "defining",
    explanation: "defining 表示'决定性的'"
  },
  {
    sentence: "Teaching is a noble o___ that shapes future generations.",
    hint: { letter: "o", chinese: "职业" },
    answer: "occupation",
    explanation: "occupation 表示'职业'"
  },
  {
    sentence: "Floating in space, astronauts feel completely w___.",
    hint: { letter: "w", chinese: "失重的" },
    answer: "weightless",
    explanation: "weightless 表示'失重的'"
  },
  {
    sentence: "Breathing becomes a___ when you are deeply relaxed.",
    hint: { letter: "a", chinese: "无意识的；自动的" },
    answer: "automatic",
    explanation: "automatic 表示'自动的；无意识的'"
  },
  {
    sentence: "New technology can r___ entire industries overnight.",
    hint: { letter: "r", chinese: "重塑；改造" },
    answer: "reshape",
    explanation: "reshape 表示'重塑'"
  },

  // ====== Unit 4 ======
  {
    sentence: "He gave the door a hard k___ to open it.",
    hint: { letter: "k", chinese: "踢；踹" },
    answer: "kick",
    explanation: "kick 表示'踢'"
  },
  {
    sentence: "The apartment is on the third s___ of the old building.",
    hint: { letter: "s", chinese: "楼层" },
    answer: "storey",
    explanation: "storey (BrE) 表示'楼层'，注意与 story(故事) 区分"
  },
  {
    sentence: "They shared an i___ conversation by the fireplace.",
    hint: { letter: "i", chinese: "亲密的；私密的" },
    answer: "intimate",
    explanation: "intimate 表示'亲密的'"
  },
  {
    sentence: "It takes years of p___ to master the piano.",
    hint: { letter: "p", chinese: "练习；实践" },
    answer: "practice",
    explanation: "practice (AmE) 表示'练习'"
  },
  {
    sentence: "The r___ of science fiction has become reality.",
    hint: { letter: "r", chinese: "领域" },
    answer: "realm",
    explanation: "realm 表示'领域；范围'"
  },
  {
    sentence: "Meeting my old friend in Paris was a pure c___.",
    hint: { letter: "c", chinese: "巧合" },
    answer: "coincidence",
    explanation: "coincidence 表示'巧合'"
  },
  {
    sentence: "The storm d___ traffic across the entire region.",
    hint: { letter: "d", chinese: "扰乱；中断" },
    answer: "disrupted",
    explanation: "disrupt 表示'打乱；扰乱'"
  },
  {
    sentence: "Small businesses can t___ even in a tough economy.",
    hint: { letter: "t", chinese: "茁壮成长；繁荣" },
    answer: "thrive",
    explanation: "thrive 表示'繁荣；茁壮成长'"
  },
  {
    sentence: "Earthquakes can o___ without any warning.",
    hint: { letter: "o", chinese: "发生" },
    answer: "occur",
    explanation: "occur 表示'发生'"
  },
  {
    sentence: "Can you d___ between the two dialects?",
    hint: { letter: "d", chinese: "区分；辨别" },
    answer: "differentiate",
    explanation: "differentiate 表示'区分'"
  },
  {
    sentence: "The judge was b___ in favor of the wealthy defendant.",
    hint: { letter: "b", chinese: "有偏见的" },
    answer: "biased",
    explanation: "biased 表示'有偏见的'"
  },
  {
    sentence: "She is the strongest c___ for the manager position.",
    hint: { letter: "c", chinese: "候选人" },
    answer: "candidate",
    explanation: "candidate 表示'候选人'"
  },
  {
    sentence: "This club is e___ for members and their guests.",
    hint: { letter: "e", chinese: "专有地；排他地" },
    answer: "exclusively",
    explanation: "exclusively 表示'排他地；专门地'"
  },

  // ====== Unit 5 ======
  {
    sentence: "A___ the chaos, she remained calm and focused.",
    hint: { letter: "a", chinese: "在……之中" },
    answer: "amid",
    explanation: "amid 表示'在……中间'"
  },
  {
    sentence: "The l___ sword was said to belong to a great warrior.",
    hint: { letter: "l", chinese: "传说的；传奇的" },
    answer: "legendary",
    explanation: "legendary 表示'传奇的'"
  },
  {
    sentence: "This tradition has been passed down for m___.",
    hint: { letter: "m", chinese: "数千年（复数）" },
    answer: "millennia",
    explanation: "millennia 是 millennium 的复数形式"
  },
  {
    sentence: "Her d___ voice makes her instantly recognizable on the phone.",
    hint: { letter: "d", chinese: "独特的；有特色的" },
    answer: "distinctive",
    explanation: "distinctive 表示'有特色的'，注意与 distinct 区分"
  },
  {
    sentence: "She decided to d___ the old clothes she no longer wore.",
    hint: { letter: "d", chinese: "丢弃；抛弃" },
    answer: "discard",
    explanation: "discard 表示'丢弃'"
  },
  {
    sentence: "The film's n___ follows three generations of a family.",
    hint: { letter: "n", chinese: "叙事；故事" },
    answer: "narrative",
    explanation: "narrative 表示'叙述；故事'"
  },

  // ====== Unit 6 ======
  {
    sentence: "We need to u___ our computer systems to run faster.",
    hint: { letter: "u", chinese: "升级" },
    answer: "upgrade",
    explanation: "upgrade 表示'升级'"
  },
  {
    sentence: "The doctor examined the t___ under a microscope.",
    hint: { letter: "t", chinese: "（生物）组织" },
    answer: "tissue",
    explanation: "tissue 此处取'生物组织'义，非'纸巾'"
  },
  {
    sentence: "The heart is the most vital o___ in the human body.",
    hint: { letter: "o", chinese: "器官" },
    answer: "organ",
    explanation: "organ 表示'器官'"
  },
  {
    sentence: "Diet and exercise are key to l___.",
    hint: { letter: "l", chinese: "长寿" },
    answer: "longevity",
    explanation: "longevity 表示'长寿'"
  },
  {
    sentence: "He holds rather c___ views on social issues.",
    hint: { letter: "c", chinese: "保守的" },
    answer: "conservative",
    explanation: "conservative 表示'保守的'"
  },
  {
    sentence: "The mountains in the d___ looked like a painting.",
    hint: { letter: "d", chinese: "远处的" },
    answer: "distant",
    explanation: "distant 表示'遥远的'"
  },
  {
    sentence: "After retirement, she lives on a modest p___.",
    hint: { letter: "p", chinese: "养老金" },
    answer: "pension",
    explanation: "pension 表示'退休金'"
  },
  {
    sentence: "Medical a___ in recent decades have saved countless lives.",
    hint: { letter: "a", chinese: "进步；进展" },
    answer: "advances",
    explanation: "advance 表示'进步'"
  },
  {
    sentence: "Wearing casual clothes to a formal dinner is i___.",
    hint: { letter: "i", chinese: "不合适的" },
    answer: "inappropriate",
    explanation: "inappropriate 表示'不恰当的'"
  },
  {
    sentence: "Please do not i___ with the ongoing experiment.",
    hint: { letter: "i", chinese: "干涉；妨碍" },
    answer: "interfere",
    explanation: "interfere 表示'干涉'"
  },
  {
    sentence: "She caught a f___ glimpse of the shooting star.",
    hint: { letter: "f", chinese: "短暂的；转瞬即逝的" },
    answer: "fleeting",
    explanation: "fleeting 表示'短暂的'"
  },
  {
    sentence: "Plants a___ sunlight and turn it into energy.",
    hint: { letter: "a", chinese: "吸收" },
    answer: "absorb",
    explanation: "absorb 表示'吸收'"
  },
  {
    sentence: "The city plans to t___ goods via a new rail system.",
    hint: { letter: "t", chinese: "运输" },
    answer: "transport",
    explanation: "transport 表示'运输'"
  },
  {
    sentence: "He m___ took his colleague's umbrella and left.",
    hint: { letter: "m", chinese: "错误地" },
    answer: "mistakenly",
    explanation: "mistakenly 表示'错误地'"
  },

  // ====== Unit 7 ======
  {
    sentence: "Many artists l___ the decline of traditional crafts.",
    hint: { letter: "l", chinese: "哀叹；惋惜" },
    answer: "lament",
    explanation: "lament 表示'哀叹'"
  },
  {
    sentence: "He pays o___ visits to his grandparents on weekends.",
    hint: { letter: "o", chinese: "偶尔的" },
    answer: "occasional",
    explanation: "occasional 表示'偶尔的'"
  },
  {
    sentence: "She has a gentle m___ that puts everyone at ease.",
    hint: { letter: "m", chinese: "举止；方式" },
    answer: "manner",
    explanation: "manner 表示'举止；方式'"
  },
  {
    sentence: "The c___ praised the film but criticized its ending.",
    hint: { letter: "c", chinese: "评论家" },
    answer: "critic",
    explanation: "critic 表示'评论家'，注意与 criticism 区分"
  },
  {
    sentence: "The article was published in a digital f___ for the first time.",
    hint: { letter: "f", chinese: "格式" },
    answer: "format",
    explanation: "format 表示'格式'"
  },
  {
    sentence: "A few large companies d___ the global smartphone market.",
    hint: { letter: "d", chinese: "主导；支配" },
    answer: "dominate",
    explanation: "dominate 表示'主导'"
  },
  {
    sentence: "She has been my p___ in this research project for years.",
    hint: { letter: "p", chinese: "伙伴；搭档" },
    answer: "partner",
    explanation: "partner 表示'伙伴'"
  },
  {
    sentence: "The coach u___ the team to push harder in the final lap.",
    hint: { letter: "u", chinese: "催促；强烈要求" },
    answer: "urged",
    explanation: "urge 表示'敦促'"
  },
  {
    sentence: "The hall has a c___ of holding five hundred people.",
    hint: { letter: "c", chinese: "容量；能力" },
    answer: "capacity",
    explanation: "capacity 表示'容量；能力'"
  },
  {
    sentence: "A good teacher knows how to m___ students to learn.",
    hint: { letter: "m", chinese: "激励；激发" },
    answer: "motivate",
    explanation: "motivate 表示'激励'"
  },
  {
    sentence: "Try to see things from a different p___.",
    hint: { letter: "p", chinese: "视角；观点" },
    answer: "perspective",
    explanation: "perspective 表示'视角'，注意与 perception 区分"
  },
  {
    sentence: "We have s___ evidence to support the new theory.",
    hint: { letter: "s", chinese: "足够的" },
    answer: "sufficient",
    explanation: "sufficient 表示'充分的'"
  },
  {
    sentence: "As technology evolves, old models will i___ become obsolete.",
    hint: { letter: "i", chinese: "不可避免地" },
    answer: "inevitably",
    explanation: "inevitably 表示'必然地'"
  },
  {
    sentence: "The m___ arms of the robot moved with precision.",
    hint: { letter: "m", chinese: "机械的" },
    answer: "machinic",
    explanation: "machinic 表示'机械的'"
  }
];
