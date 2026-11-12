// 易错词专项练习题库
// 来源：用户实际答题中答错的词，每个词自造例句
const errorProneQuestions = [
  {
    sentence: "The two cities, although geographically close, have d___ different cultural traditions.",
    hint: { letter: "d", chinese: "十分；明显地" },
    answer: "distinctly",
    explanation: "distinctly 修饰 different，表示'明显地不同'"
  },
  {
    sentence: "The crowd waited in great a___ for the concert to begin.",
    hint: { letter: "a", chinese: "期望；盼望" },
    answer: "anticipation",
    explanation: "in anticipation 表示'期待中'，anticipation 是名词"
  },
  {
    sentence: "The weather forecast c___ travelers about the approaching storm.",
    hint: { letter: "c", chinese: "警告；告诫；提醒" },
    answer: "caution",
    explanation: "caution 作动词表示'警告'，注意它也可作名词'谨慎'"
  },
  {
    sentence: "The ancient manuscript proved to be a p___ treasure for historians.",
    hint: { letter: "p", chinese: "极其贵重的；极其重要的" },
    answer: "priceless",
    explanation: "priceless 表示'无价的'，注意不是'没有价格的'"
  },
  {
    sentence: "The l___ carried heavy bricks up the scaffolding all day long.",
    hint: { letter: "l", chinese: "体力劳动者；工人" },
    answer: "laborer",
    explanation: "laborer (BrE labourer) 表示'体力劳动者'"
  },
  {
    sentence: "The artist mixed different s___ of blue to create the perfect sky.",
    hint: { letter: "s", chinese: "（色彩的）浓淡，深浅，色度" },
    answer: "shade",
    explanation: "shade 此处取'色度'义，非'阴凉处'"
  },
  {
    sentence: "The astronaut climbed into the escape p___ before the launch.",
    hint: { letter: "p", chinese: "（飞机的）吊舱，发射架" },
    answer: "pod",
    explanation: "pod 表示'吊舱'，注意 nap pod 是'小憩舱'"
  },
  {
    sentence: "Fortunately, the judge was f___ and gave the young offender a lighter sentence.",
    hint: { letter: "f", chinese: "宽容的；宽大的" },
    answer: "forgiving",
    explanation: "forgiving 表示'宽容的'，是形容词"
  },
  {
    sentence: "The swimmer put on his f___ before diving into the pool.",
    hint: { letter: "f", chinese: "手蹼，脚蹼" },
    answer: "fin",
    explanation: "fin 此处取'游泳手蹼'义，非'鱼鳍'"
  },
  {
    sentence: "The h___ moonlight made it difficult to sleep that night.",
    hint: { letter: "h", chinese: "刺眼的；耀眼的" },
    answer: "harsh",
    explanation: "harsh 修饰光线表示'刺眼的'，也可修饰气候'恶劣的'"
  },
  {
    sentence: "The film received harsh c___ from several major newspapers.",
    hint: { letter: "c", chinese: "评论" },
    answer: "criticism",
    explanation: "criticism 表示'评论/批评'，注意与 critique 区分"
  },
  {
    sentence: "The conference provided a valuable i___ of ideas between scholars.",
    hint: { letter: "i", chinese: "（尤指观点或思想的）交流" },
    answer: "interchange",
    explanation: "interchange 表示'交流'，尤指思想观点的交换"
  },
  {
    sentence: "The restorers took p___ care to repair every tiny detail of the painting.",
    hint: { letter: "p", chinese: "小心的；费尽心思的；精心的" },
    answer: "painstaking",
    explanation: "painstaking 表示'煞费苦心的'，注意拼写含 pain+taking"
  },
  {
    sentence: "Reading extensively helps improve your c___ of complex texts.",
    hint: { letter: "c", chinese: "理解（力）" },
    answer: "comprehension",
    explanation: "comprehension 表示'理解力'，名词形式"
  },
  {
    sentence: "The d___ possibility of another earthquake kept everyone on edge.",
    hint: { letter: "d", chinese: "可怕的，令人忧虑的" },
    answer: "dreaded",
    explanation: "dreaded 表示'令人害怕的'，常用于修饰令人担忧的事物"
  },
  {
    sentence: "The detective found a m___ clue that nobody could explain.",
    hint: { letter: "m", chinese: "难以理解的；奇怪的" },
    answer: "mysterious",
    explanation: "mysterious 表示'神秘的；难以理解的'"
  },
  {
    sentence: "The new policy will c___ improve the living standards of rural residents.",
    hint: { letter: "c", chinese: "很；非常；相当大（多）地" },
    answer: "considerably",
    explanation: "considerably 表示'相当大地'，副词形式"
  },
  {
    sentence: "The constant rain and gray skies made the winter feel d___ long.",
    hint: { letter: "d", chinese: "令人沮丧的；让人忧愁的" },
    answer: "depressing",
    explanation: "depressing 表示'令人沮丧的'，注意与 depressed（感到沮丧的）区分"
  },
  {
    sentence: "Only a few s___ lights twinkled across the vast, empty plain.",
    hint: { letter: "s", chinese: "分散的；稀疏的" },
    answer: "scattered",
    explanation: "scattered 表示'分散的；散落的'"
  },
  {
    sentence: "She stood by the window, c___ whether to accept the job offer.",
    hint: { letter: "c", chinese: "打算；想；考虑" },
    answer: "contemplating",
    explanation: "contemplate 表示'沉思；考虑'，正式用语"
  },
  {
    sentence: "The r___ weather ruined our entire vacation plans.",
    hint: { letter: "r", chinese: "极糟糕的；恶劣的" },
    answer: "rotten",
    explanation: "rotten 此处取'极糟糕的'义，非'腐烂的'"
  },
  {
    sentence: "The building may not be beautiful, but it is perfectly f___.",
    hint: { letter: "f", chinese: "实用的" },
    answer: "functional",
    explanation: "functional 表示'实用的；功能性的'，非'美观的'"
  },
  {
    sentence: "Researchers continue to e___ the causes of the disease.",
    hint: { letter: "e", chinese: "（对问题的）探究；研究" },
    answer: "explore",
    explanation: "explore 此处取'探究'义，非'探险'"
  },
  {
    sentence: "The sudden noise p___ him to look up from his book.",
    hint: { letter: "p", chinese: "引起，激起（某人说或做某事）" },
    answer: "prompted",
    explanation: "prompt 作动词表示'促使；激起'，注意也可作形容词'迅速的'"
  },
  {
    sentence: "A thick h___ hung over the city, blocking out the sunlight.",
    hint: { letter: "h", chinese: "烟雾；霾" },
    answer: "haze",
    explanation: "haze 表示'霾；薄雾'，注意与 mist 区分"
  },
  {
    sentence: "I cannot t___ his constant interruptions any longer.",
    hint: { letter: "t", chinese: "忍受；忍耐" },
    answer: "tolerate",
    explanation: "tolerate 表示'忍受'，正式用语"
  },
  {
    sentence: "The farmer decided to c___ the field before planting new crops.",
    hint: { letter: "c", chinese: "耕；耕作" },
    answer: "cultivate",
    explanation: "cultivate 此处取'耕作'义，也可表示'培养(态度/关系)'"
  },
  {
    sentence: "The children showed great e___ for the upcoming field trip.",
    hint: { letter: "e", chinese: "热心；热情" },
    answer: "enthusiasm",
    explanation: "enthusiasm 表示'热情'，注意拼写含 thus"
  },
  {
    sentence: "She carefully threaded the t___ through the eye of the needle.",
    hint: { letter: "t", chinese: "（缝衣服的）线" },
    answer: "thread",
    explanation: "thread 作名词表示'线'，也可作动词'穿线'"
  },
  {
    sentence: "It took me a while to c___ the full meaning of his words.",
    hint: { letter: "c", chinese: "领悟（复杂或困难的事物）" },
    answer: "comprehend",
    explanation: "comprehend 是动词'领悟'，comprehension 是其名词"
  },
  {
    sentence: "The Eiffel Tower has become an i___ symbol of Paris.",
    hint: { letter: "i", chinese: "非常出名的，受欢迎的" },
    answer: "iconic",
    explanation: "iconic 表示'标志性的；偶像般的'"
  },
  {
    sentence: "His silence seemed to i___ that he disagreed with the plan.",
    hint: { letter: "i", chinese: "意味着（某事可能是真的）" },
    answer: "imply",
    explanation: "imply 表示'暗示；意味着'，注意与 infer 区分"
  },
  {
    sentence: "The general ordered his troops to e___ the retreat immediately.",
    hint: { letter: "e", chinese: "实行；执行" },
    answer: "execute",
    explanation: "execute 此处取'执行(命令/计划)'义，非'处决'"
  },
  {
    sentence: "The internet has helped p___ new forms of music around the world.",
    hint: { letter: "p", chinese: "宣传；推广" },
    answer: "popularize",
    explanation: "popularize 表示'使流行；推广'"
  },
  {
    sentence: "Endless repetition can make even the most exciting task feel m___.",
    hint: { letter: "m", chinese: "无目的价值" },
    answer: "meaningless",
    explanation: "meaningless 表示'毫无意义的'"
  },
  {
    sentence: "Public p___ of the issue has shifted dramatically in recent years.",
    hint: { letter: "p", chinese: "认识；观念；看法" },
    answer: "perception",
    explanation: "perception 表示'认知；看法'，注意与 perspective 区分"
  },
  {
    sentence: "The signing of the treaty was a m___ event in world history.",
    hint: { letter: "m", chinese: "关键的；重大的；重要的" },
    answer: "momentous",
    explanation: "momentous 表示'重大的'，常含历史意义"
  },
  {
    sentence: "The artifact s___ dates back over two thousand years.",
    hint: { letter: "s", chinese: "据说；据称；一般相信" },
    answer: "supposedly",
    explanation: "supposedly 表示'据称'，含'据说但不一定属实'之意"
  },
  {
    sentence: "We need to ensure there is a___ food and water for everyone.",
    hint: { letter: "a", chinese: "足够的；充分的" },
    answer: "adequate",
    explanation: "adequate 表示'充分的'，注意与 enough 的语体差异"
  },
  {
    sentence: "The t___ of fashion trends makes it hard to keep up with styles.",
    hint: { letter: "t", chinese: "时效性；短暂性" },
    answer: "temporality",
    explanation: "temporality 表示'时效性；短暂性'"
  }
];
