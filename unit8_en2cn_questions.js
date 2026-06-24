// Unit 8 英文选中文题库 (115 题)
// 给出英文单词，从四个中文释义中选一个
// 多义词每个释义独立出题；顺序已打乱

const unit8En2CnQuestions = [
  {
    word: "glory",
    options: [
      { text: "从…下来；下降", correct: false },
      { text: "特别激动的；极度兴奋的", correct: false },
      { text: "气味；（尤指）香味", correct: false },
      { text: "荣誉；光荣", correct: true }
    ],
    answer: 3,
    explanation: "glory：荣誉；光荣"
  },
  {
    word: "flake",
    options: [
      { text: "鸟）鸣啭", correct: false },
      { text: "按时的；准时的", correct: false },
      { text: "鬼魂）经常出没于", correct: false },
      { text: "薄片", correct: true }
    ],
    answer: 3,
    explanation: "flake：薄片"
  },
  {
    word: "punctual",
    options: [
      { text: "按时的；准时的", correct: true },
      { text: "友好的；善良的", correct: false },
      { text: "那边的）；在远处（的）", correct: false },
      { text: "座位、房间）空的，未被占用的", correct: false }
    ],
    answer: 0,
    explanation: "punctual：按时的；准时的"
  },
  {
    word: "repress",
    options: [
      { text: "隐瞒；掩盖", correct: false },
      { text: "握紧；抱紧", correct: false },
      { text: "陷入（某种感情）", correct: false },
      { text: "忍住；克制", correct: true }
    ],
    answer: 3,
    explanation: "repress：忍住；克制"
  },
  {
    word: "tint",
    options: [
      { text: "传统）手工工艺", correct: false },
      { text: "胜利；成功；成就", correct: false },
      { text: "暴乱；骚乱", correct: false },
      { text: "浅色；淡色调", correct: true }
    ],
    answer: 3,
    explanation: "tint：浅色；淡色调"
  },
  {
    word: "swarm",
    options: [
      { text: "使…蒙上白霜", correct: false },
      { text: "骚乱地；骚动地；混乱地；激动地", correct: false },
      { text: "改变；调整", correct: false },
      { text: "人、动物等）成群地来回移动", correct: true }
    ],
    answer: 3,
    explanation: "swarm：人、动物等）成群地来回移动"
  },
  {
    word: "illumination",
    options: [
      { text: "对某一主题的）阐明，理解", correct: true },
      { text: "座位、房间）空的，未被占用的", correct: false },
      { text: "威胁、攻击或警告）隐含的，不明言的", correct: false },
      { text: "崇拜；崇拜；把…神化；把…奉若神明", correct: false }
    ],
    answer: 0,
    explanation: "illumination：对某一主题的）阐明，理解"
  },
  {
    word: "abandonment",
    options: [
      { text: "从…下来；下降", correct: false },
      { text: "使）膨胀；（使）扩大", correct: false },
      { text: "放任；放纵", correct: true },
      { text: "漂流；飘动", correct: false }
    ],
    answer: 2,
    explanation: "abandonment：放任；放纵"
  },
  {
    word: "diligence",
    options: [
      { text: "勤奋；用功", correct: true },
      { text: "特别激动的；极度兴奋的", correct: false },
      { text: "食物）软的，嫩的，易咀嚼的", correct: false },
      { text: "茫然的；失神的", correct: false }
    ],
    answer: 0,
    explanation: "diligence：勤奋；用功"
  },
  {
    word: "shimmer",
    options: [
      { text: "发微光；闪闪发亮", correct: true },
      { text: "友好的；善良的", correct: false },
      { text: "细微的；微妙的；难以察觉的", correct: false },
      { text: "装饰品；点缀品", correct: false }
    ],
    answer: 0,
    explanation: "shimmer：发微光；闪闪发亮"
  },
  {
    word: "shudder",
    options: [
      { text: "浅色；淡色调", correct: false },
      { text: "灵丹妙药；不老药", correct: false },
      { text: "战栗；颤抖", correct: true },
      { text: "脉搏", correct: false }
    ],
    answer: 2,
    explanation: "shudder：战栗；颤抖"
  },
  {
    word: "abandon",
    options: [
      { text: "苗条的；修长的；纤细的", correct: false },
      { text: "陷入（某种感情）", correct: true },
      { text: "必要的；需要的", correct: false },
      { text: "人、动物等）成群地来回移动", correct: false }
    ],
    answer: 1,
    explanation: "abandon：陷入（某种感情）"
  },
  {
    word: "blossom",
    options: [
      { text: "恐惧；惊恐", correct: false },
      { text: "凝视；注视", correct: false },
      { text: "一棵树上的）花，全部花朵", correct: true },
      { text: "显贵的；高贵的", correct: false }
    ],
    answer: 2,
    explanation: "blossom：一棵树上的）花，全部花朵"
  },
  {
    word: "mystic",
    options: [
      { text: "神奇的；神秘的", correct: true },
      { text: "食物）软的，嫩的，易咀嚼的", correct: false },
      { text: "特别激动的；极度兴奋的", correct: false },
      { text: "必要的；需要的", correct: false }
    ],
    answer: 0,
    explanation: "mystic：神奇的；神秘的"
  },
  {
    word: "din",
    options: [
      { text: "持久的）嘈杂声，喧闹声", correct: true },
      { text: "赶紧做（或说）", correct: false },
      { text: "发微光；闪闪发亮", correct: false },
      { text: "一连串，一系列（同类型的人或物）", correct: false }
    ],
    answer: 0,
    explanation: "din：持久的）嘈杂声，喧闹声"
  },
  {
    word: "clutch",
    options: [
      { text: "忍住；克制", correct: false },
      { text: "安详；休息", correct: false },
      { text: "紧握；紧抓", correct: true },
      { text: "壮观的景象；奇观", correct: false }
    ],
    answer: 2,
    explanation: "clutch：紧握；紧抓"
  },
  {
    word: "craft",
    options: [
      { text: "薄片", correct: false },
      { text: "使变样；改变", correct: false },
      { text: "温柔的；体贴入微的", correct: false },
      { text: "诡计；手腕", correct: true }
    ],
    answer: 3,
    explanation: "craft：诡计；手腕"
  },
  {
    word: "sob",
    options: [
      { text: "鬼魂）经常出没于", correct: false },
      { text: "抽噎（声）；啜泣（声）；呜咽（声）", correct: true },
      { text: "气味；（尤指）香味", correct: false },
      { text: "预兆", correct: false }
    ],
    answer: 1,
    explanation: "sob：抽噎（声）；啜泣（声）；呜咽（声）"
  },
  {
    word: "medicinal",
    options: [
      { text: "崇拜；崇拜；把…神化；把…奉若神明", correct: false },
      { text: "抛弃；遗弃", correct: false },
      { text: "极端错误的；道德败坏的；极不公正的", correct: false },
      { text: "有疗效的；有药效的", correct: true }
    ],
    answer: 3,
    explanation: "medicinal：有疗效的；有药效的"
  },
  {
    word: "mere",
    options: [
      { text: "苗条的；修长的；纤细的", correct: false },
      { text: "光亮；照明", correct: false },
      { text: "嘲弄；（通过模仿）取笑", correct: false },
      { text: "仅仅的，只不过（用于强调微小或微不足道）", correct: true }
    ],
    answer: 3,
    explanation: "mere：仅仅的，只不过（用于强调微小或微不足道）"
  },
  {
    word: "slender",
    options: [
      { text: "参加；参与", correct: false },
      { text: "茫然的；失神的", correct: false },
      { text: "向内的；向中心的", correct: false },
      { text: "苗条的；修长的；纤细的", correct: true }
    ],
    answer: 3,
    explanation: "slender：苗条的；修长的；纤细的"
  },
  {
    word: "herald",
    options: [
      { text: "安详；休息", correct: false },
      { text: "预兆", correct: true },
      { text: "彻底改观；变化过程", correct: false },
      { text: "带露水的", correct: false }
    ],
    answer: 1,
    explanation: "herald：预兆"
  },
  {
    word: "ornament",
    options: [
      { text: "缠扰；纠缠", correct: false },
      { text: "显示；表示", correct: false },
      { text: "内心的；精神的", correct: false },
      { text: "装饰品；点缀品", correct: true }
    ],
    answer: 3,
    explanation: "ornament：装饰品；点缀品"
  },
  {
    word: "suspension",
    options: [
      { text: "缠扰；纠缠", correct: false },
      { text: "与周围部分不同的）小片，小块", correct: false },
      { text: "光亮；照明", correct: false },
      { text: "暂停；中止", correct: true }
    ],
    answer: 3,
    explanation: "suspension：暂停；中止"
  },
  {
    word: "patch",
    options: [
      { text: "隐瞒；掩盖", correct: false },
      { text: "胜利；成功；成就", correct: false },
      { text: "与周围部分不同的）小片，小块", correct: true },
      { text: "安详；休息", correct: false }
    ],
    answer: 2,
    explanation: "patch：与周围部分不同的）小片，小块"
  },
  {
    word: "piercing",
    options: [
      { text: "传统）手工工艺", correct: false },
      { text: "参加；参与", correct: false },
      { text: "敏锐的；有洞察力的", correct: true },
      { text: "发烧的；发热的", correct: false }
    ],
    answer: 2,
    explanation: "piercing：敏锐的；有洞察力的"
  },
  {
    word: "restore",
    options: [
      { text: "使恢复；使回复", correct: true },
      { text: "骚乱地；骚动地；混乱地；激动地", correct: false },
      { text: "细微的；微妙的；难以察觉的", correct: false },
      { text: "荣誉；光荣", correct: false }
    ],
    answer: 0,
    explanation: "restore：使恢复；使回复"
  },
  {
    word: "veiled",
    options: [
      { text: "暴乱；骚乱", correct: false },
      { text: "威胁、攻击或警告）隐含的，不明言的", correct: true },
      { text: "迷人；魅力", correct: false },
      { text: "胜利；成功；成就", correct: false }
    ],
    answer: 1,
    explanation: "veiled：威胁、攻击或警告）隐含的，不明言的"
  },
  {
    word: "triumph",
    options: [
      { text: "动植物的)族，群", correct: false },
      { text: "极端错误的；道德败坏的；极不公正的", correct: false },
      { text: "胜利；成功；成就", correct: true },
      { text: "对某一主题的）阐明，理解", correct: false }
    ],
    answer: 2,
    explanation: "triumph：胜利；成功；成就"
  },
  {
    word: "modulate",
    options: [
      { text: "华典；盛典；盛况", correct: false },
      { text: "看；看见", correct: false },
      { text: "改变；调整", correct: true },
      { text: "壮观的景象；奇观", correct: false }
    ],
    answer: 2,
    explanation: "modulate：改变；调整"
  },
  {
    word: "partake",
    options: [
      { text: "哭泣；流泪", correct: false },
      { text: "参加；参与", correct: true },
      { text: "神奇的；神秘的", correct: false },
      { text: "食物）软的，嫩的，易咀嚼的", correct: false }
    ],
    answer: 1,
    explanation: "partake：参加；参与"
  },
  {
    word: "dewy",
    options: [
      { text: "彻底改观；变化过程", correct: false },
      { text: "带露水的", correct: true },
      { text: "勤奋；用功", correct: false },
      { text: "使…蒙上白霜", correct: false }
    ],
    answer: 1,
    explanation: "dewy：带露水的"
  },
  {
    word: "perpetual",
    options: [
      { text: "一棵树上的）花，全部花朵", correct: false },
      { text: "长期的；永恒的", correct: true },
      { text: "内心的；精神的", correct: false },
      { text: "哭泣；流泪", correct: false }
    ],
    answer: 1,
    explanation: "perpetual：长期的；永恒的"
  },
  {
    word: "craft",
    options: [
      { text: "嘲弄；（通过模仿）取笑", correct: false },
      { text: "传统）手工工艺", correct: true },
      { text: "紧握；紧抓", correct: false },
      { text: "动植物的)族，群", correct: false }
    ],
    answer: 1,
    explanation: "craft：传统）手工工艺"
  },
  {
    word: "inward",
    options: [
      { text: "华典；盛典；盛况", correct: false },
      { text: "壮丽；灿烂", correct: false },
      { text: "开花", correct: false },
      { text: "向内的；向中心的", correct: true }
    ],
    answer: 3,
    explanation: "inward：向内的；向中心的"
  },
  {
    word: "float",
    options: [
      { text: "缠扰；纠缠", correct: false },
      { text: "部落", correct: false },
      { text: "漂流；飘动", correct: true },
      { text: "茫然的；失神的", correct: false }
    ],
    answer: 2,
    explanation: "float：漂流；飘动"
  },
  {
    word: "mute",
    options: [
      { text: "缄默的；无声的", correct: true },
      { text: "跪着；跪下", correct: false },
      { text: "界限；范围", correct: false },
      { text: "茫然的；失神的", correct: false }
    ],
    answer: 0,
    explanation: "mute：缄默的；无声的"
  },
  {
    word: "gala",
    options: [
      { text: "界限；范围", correct: false },
      { text: "地平线", correct: false },
      { text: "特别演出；庆典；典", correct: true },
      { text: "兴高采烈的；得意洋洋的", correct: false }
    ],
    answer: 2,
    explanation: "gala：特别演出；庆典；典"
  },
  {
    word: "twitter",
    options: [
      { text: "深红色的；绯红色的", correct: false },
      { text: "鸟）鸣啭", correct: true },
      { text: "幻景；海市蜃楼", correct: false },
      { text: "友好的；善良的", correct: false }
    ],
    answer: 1,
    explanation: "twitter：鸟）鸣啭"
  },
  {
    word: "genial",
    options: [
      { text: "胜利；成功；成就", correct: false },
      { text: "人、动物等）成群地来回移动", correct: false },
      { text: "友好的；善良的", correct: true },
      { text: "暴乱；骚乱", correct: false }
    ],
    answer: 2,
    explanation: "genial：友好的；善良的"
  },
  {
    word: "tender",
    options: [
      { text: "对感情的）抑制，压抑", correct: false },
      { text: "必要的；需要的", correct: false },
      { text: "漂流；飘动", correct: false },
      { text: "温柔的；体贴入微的", correct: true }
    ],
    answer: 3,
    explanation: "tender：温柔的；体贴入微的"
  },
  {
    word: "bespeak",
    options: [
      { text: "昏暗", correct: false },
      { text: "显示；表示", correct: true },
      { text: "预兆", correct: false },
      { text: "隐瞒；掩盖", correct: false }
    ],
    answer: 1,
    explanation: "bespeak：显示；表示"
  },
  {
    word: "vacant",
    options: [
      { text: "限制，束缚（某人或某事物的发展）", correct: false },
      { text: "忍住；克制", correct: false },
      { text: "改变；调整", correct: false },
      { text: "座位、房间）空的，未被占用的", correct: true }
    ],
    answer: 3,
    explanation: "vacant：座位、房间）空的，未被占用的"
  },
  {
    word: "feverish",
    options: [
      { text: "细微的；微妙的；难以察觉的", correct: false },
      { text: "折磨；使痛苦", correct: false },
      { text: "限制，束缚（某人或某事物的发展）", correct: false },
      { text: "特别激动的；极度兴奋的", correct: true }
    ],
    answer: 3,
    explanation: "feverish：特别激动的；极度兴奋的"
  },
  {
    word: "susceptibility",
    options: [
      { text: "神奇的；神秘的", correct: false },
      { text: "易受影响（或感染）的倾向；敏感性", correct: true },
      { text: "显示；表示", correct: false },
      { text: "限制，束缚（某人或某事物的发展）", correct: false }
    ],
    answer: 1,
    explanation: "susceptibility：易受影响（或感染）的倾向；敏感性"
  },
  {
    word: "bloom",
    options: [
      { text: "一连串，一系列（同类型的人或物）", correct: false },
      { text: "开花", correct: true },
      { text: "友好的；善良的", correct: false },
      { text: "气味；（尤指）香味", correct: false }
    ],
    answer: 1,
    explanation: "bloom：开花"
  },
  {
    word: "needful",
    options: [
      { text: "必要的；需要的", correct: true },
      { text: "发烧的；发热的", correct: false },
      { text: "易受影响（或感染）的倾向；敏感性", correct: false },
      { text: "忍住；克制", correct: false }
    ],
    answer: 0,
    explanation: "needful：必要的；需要的"
  },
  {
    word: "exalted",
    options: [
      { text: "显贵的；高贵的", correct: true },
      { text: "细微的；微妙的；难以察觉的", correct: false },
      { text: "一连串的人（或物）", correct: false },
      { text: "诡计；手腕", correct: false }
    ],
    answer: 0,
    explanation: "exalted：显贵的；高贵的"
  },
  {
    word: "pomp",
    options: [
      { text: "华典；盛典；盛况", correct: true },
      { text: "部落", correct: false },
      { text: "人、动物等）成群地来回移动", correct: false },
      { text: "那边的）；在远处（的）", correct: false }
    ],
    answer: 0,
    explanation: "pomp：华典；盛典；盛况"
  },
  {
    word: "procession",
    options: [
      { text: "参加；参与", correct: false },
      { text: "一连串的人（或物）", correct: true },
      { text: "威胁、攻击或警告）隐含的，不明言的", correct: false },
      { text: "脉搏", correct: false }
    ],
    answer: 1,
    explanation: "procession：一连串的人（或物）"
  },
  {
    word: "exhaustion",
    options: [
      { text: "按时的；准时的", correct: false },
      { text: "缄默的；无声的", correct: false },
      { text: "鸟）鸣啭", correct: false },
      { text: "筋疲力尽；疲惫不堪", correct: true }
    ],
    answer: 3,
    explanation: "exhaustion：筋疲力尽；疲惫不堪"
  },
  {
    word: "alter",
    options: [
      { text: "改变；调整", correct: false },
      { text: "使恢复；使回复", correct: false },
      { text: "崇拜；崇拜；把…神化；把…奉若神明", correct: false },
      { text: "使变样；改变", correct: true }
    ],
    answer: 3,
    explanation: "alter：使变样；改变"
  },
  {
    word: "repose",
    options: [
      { text: "恐惧；惊恐", correct: false },
      { text: "安详；休息", correct: true },
      { text: "战栗；颤抖", correct: false },
      { text: "拒绝考虑；不理会", correct: false }
    ],
    answer: 1,
    explanation: "repose：安详；休息"
  },
  {
    word: "unwittingly",
    options: [
      { text: "搞阴谋；密谋", correct: false },
      { text: "使…蒙上白霜", correct: false },
      { text: "壮观的景象；奇观", correct: false },
      { text: "不知不觉地；非故意地", correct: true }
    ],
    answer: 3,
    explanation: "unwittingly：不知不觉地；非故意地"
  },
  {
    word: "defy",
    options: [
      { text: "界限；范围", correct: false },
      { text: "浅色；淡色调", correct: false },
      { text: "人、动物等）成群地来回移动", correct: false },
      { text: "崇拜；崇拜；把…神化；把…奉若神明", correct: true }
    ],
    answer: 3,
    explanation: "defy：崇拜；崇拜；把…神化；把…奉若神明"
  },
  {
    word: "elusive",
    options: [
      { text: "骚乱地；骚动地；混乱地；激动地", correct: false },
      { text: "从…下来；下降", correct: false },
      { text: "难找的；不常见到的", correct: true },
      { text: "友好的；善良的", correct: false }
    ],
    answer: 2,
    explanation: "elusive：难找的；不常见到的"
  },
  {
    word: "pulse",
    options: [
      { text: "华典；盛典；盛况", correct: false },
      { text: "脉搏", correct: true },
      { text: "崇拜；崇拜；把…神化；把…奉若神明", correct: false },
      { text: "使变样；改变", correct: false }
    ],
    answer: 1,
    explanation: "pulse：脉搏"
  },
  {
    word: "scent",
    options: [
      { text: "灵丹妙药；不老药", correct: false },
      { text: "界限；范围", correct: false },
      { text: "搞阴谋；密谋", correct: false },
      { text: "气味；（尤指）香味", correct: true }
    ],
    answer: 3,
    explanation: "scent：气味；（尤指）香味"
  },
  {
    word: "subtle",
    options: [
      { text: "缄默的；无声的", correct: false },
      { text: "限制，束缚（某人或某事物的发展）", correct: false },
      { text: "壮观的景象；奇观", correct: false },
      { text: "细微的；微妙的；难以察觉的", correct: true }
    ],
    answer: 3,
    explanation: "subtle：细微的；微妙的；难以察觉的"
  },
  {
    word: "kneel",
    options: [
      { text: "筋疲力尽；疲惫不堪", correct: false },
      { text: "跪着；跪下", correct: true },
      { text: "加速；加紧", correct: false },
      { text: "不清楚地；模糊地", correct: false }
    ],
    answer: 1,
    explanation: "kneel：跪着；跪下"
  },
  {
    word: "illumination",
    options: [
      { text: "神奇的；神秘的", correct: false },
      { text: "抛弃；遗弃", correct: false },
      { text: "搞阴谋；密谋", correct: false },
      { text: "光亮；照明", correct: true }
    ],
    answer: 3,
    explanation: "illumination：光亮；照明"
  },
  {
    word: "tribe",
    options: [
      { text: "骚乱地；骚动地；混乱地；激动地", correct: false },
      { text: "茫然的；失神的", correct: false },
      { text: "胜利；成功；成就", correct: false },
      { text: "部落", correct: true }
    ],
    answer: 3,
    explanation: "tribe：部落"
  },
  {
    word: "composedly",
    options: [
      { text: "镇静地", correct: true },
      { text: "神奇的；神秘的", correct: false },
      { text: "不清楚地；模糊地", correct: false },
      { text: "参加；参与", correct: false }
    ],
    answer: 0,
    explanation: "composedly：镇静地"
  },
  {
    word: "vacant",
    options: [
      { text: "茫然的；失神的", correct: true },
      { text: "抛弃；遗弃", correct: false },
      { text: "改变；调整", correct: false },
      { text: "暂停；中止", correct: false }
    ],
    answer: 0,
    explanation: "vacant：茫然的；失神的"
  },
  {
    word: "tribe",
    options: [
      { text: "预兆", correct: false },
      { text: "动植物的)族，群", correct: true },
      { text: "紧握；紧抓", correct: false },
      { text: "放任；放纵", correct: false }
    ],
    answer: 1,
    explanation: "tribe：动植物的)族，群"
  },
  {
    word: "conspire",
    options: [
      { text: "战栗；颤抖", correct: false },
      { text: "对感情的）抑制，压抑", correct: false },
      { text: "搞阴谋；密谋", correct: true },
      { text: "陷入（某种感情）", correct: false }
    ],
    answer: 2,
    explanation: "conspire：搞阴谋；密谋"
  },
  {
    word: "tumultuously",
    options: [
      { text: "加速；加紧", correct: false },
      { text: "有疗效的；有药效的", correct: false },
      { text: "骚乱地；骚动地；混乱地；激动地", correct: true },
      { text: "必要的；需要的", correct: false }
    ],
    answer: 2,
    explanation: "tumultuously：骚乱地；骚动地；混乱地；激动地"
  },
  {
    word: "descend",
    options: [
      { text: "纠缠", correct: false },
      { text: "从…下来；下降", correct: true },
      { text: "诡计；手腕", correct: false },
      { text: "加速；加紧", correct: false }
    ],
    answer: 1,
    explanation: "descend：从…下来；下降"
  },
  {
    word: "importunity",
    options: [
      { text: "纠缠", correct: true },
      { text: "仅仅的，只不过（用于强调微小或微不足道）", correct: false },
      { text: "难找的；不常见到的", correct: false },
      { text: "苗条的；修长的；纤细的", correct: false }
    ],
    answer: 0,
    explanation: "importunity：纠缠"
  },
  {
    word: "mirage",
    options: [
      { text: "幻景；海市蜃楼", correct: true },
      { text: "装饰品；点缀品", correct: false },
      { text: "荣誉；光荣", correct: false },
      { text: "友好的；善良的", correct: false }
    ],
    answer: 0,
    explanation: "mirage：幻景；海市蜃楼"
  },
  {
    word: "conceal",
    options: [
      { text: "灵丹妙药；不老药", correct: false },
      { text: "隐瞒；掩盖", correct: true },
      { text: "握紧；抱紧", correct: false },
      { text: "壮观的景象；奇观", correct: false }
    ],
    answer: 1,
    explanation: "conceal：隐瞒；掩盖"
  },
  {
    word: "exalted",
    options: [
      { text: "动植物的)族，群", correct: false },
      { text: "兴高采烈的；得意洋洋的", correct: true },
      { text: "按时的；准时的", correct: false },
      { text: "尖锐的；刺耳的", correct: false }
    ],
    answer: 1,
    explanation: "exalted：兴高采烈的；得意洋洋的"
  },
  {
    word: "haunt",
    options: [
      { text: "温柔的；体贴入微的", correct: false },
      { text: "握紧；抱紧", correct: false },
      { text: "有疗效的；有药效的", correct: false },
      { text: "缠扰；纠缠", correct: true }
    ],
    answer: 3,
    explanation: "haunt：缠扰；纠缠"
  },
  {
    word: "piercing",
    options: [
      { text: "尖锐的；刺耳的", correct: true },
      { text: "难找的；不常见到的", correct: false },
      { text: "灵丹妙药；不老药", correct: false },
      { text: "搞阴谋；密谋", correct: false }
    ],
    answer: 0,
    explanation: "piercing：尖锐的；刺耳的"
  },
  {
    word: "clasp",
    options: [
      { text: "界限；范围", correct: false },
      { text: "不清楚地；模糊地", correct: false },
      { text: "暂停；中止", correct: false },
      { text: "握紧；抱紧", correct: true }
    ],
    answer: 3,
    explanation: "clasp：握紧；抱紧"
  },
  {
    word: "abandon",
    options: [
      { text: "动植物的)族，群", correct: false },
      { text: "抛弃；遗弃", correct: true },
      { text: "持久的）嘈杂声，喧闹声", correct: false },
      { text: "深红色的；绯红色的", correct: false }
    ],
    answer: 1,
    explanation: "abandon：抛弃；遗弃"
  },
  {
    word: "feverish",
    options: [
      { text: "发烧的；发热的", correct: true },
      { text: "尖锐的；刺耳的", correct: false },
      { text: "茫然的；失神的", correct: false },
      { text: "传统）手工工艺", correct: false }
    ],
    answer: 0,
    explanation: "feverish：发烧的；发热的"
  },
  {
    word: "corporeal",
    options: [
      { text: "胜利；成功；成就", correct: false },
      { text: "身体的；肉体的", correct: true },
      { text: "温柔的；体贴入微的", correct: false },
      { text: "坚持；执着；执意", correct: false }
    ],
    answer: 1,
    explanation: "corporeal：身体的；肉体的"
  },
  {
    word: "elixir",
    options: [
      { text: "隐瞒；掩盖", correct: false },
      { text: "迷人；魅力", correct: false },
      { text: "灵丹妙药；不老药", correct: true },
      { text: "搞阴谋；密谋", correct: false }
    ],
    answer: 2,
    explanation: "elixir：灵丹妙药；不老药"
  },
  {
    word: "faintly",
    options: [
      { text: "不清楚地；模糊地", correct: true },
      { text: "苗条的；修长的；纤细的", correct: false },
      { text: "灵丹妙药；不老药", correct: false },
      { text: "凝视；注视", correct: false }
    ],
    answer: 0,
    explanation: "faintly：不清楚地；模糊地"
  },
  {
    word: "triumph",
    options: [
      { text: "缠扰；纠缠", correct: false },
      { text: "成功的满足感；胜利的喜悦之情", correct: true },
      { text: "发烧的；发热的", correct: false },
      { text: "浅色；淡色调", correct: false }
    ],
    answer: 1,
    explanation: "triumph：成功的满足感；胜利的喜悦之情"
  },
  {
    word: "weep",
    options: [
      { text: "暴乱；骚乱", correct: false },
      { text: "内心的；精神的", correct: false },
      { text: "凝视；注视", correct: false },
      { text: "哭泣；流泪", correct: true }
    ],
    answer: 3,
    explanation: "weep：哭泣；流泪"
  },
  {
    word: "hasten",
    options: [
      { text: "赶紧做（或说）", correct: true },
      { text: "陷入（某种感情）", correct: false },
      { text: "长期的；永恒的", correct: false },
      { text: "缄默的；无声的", correct: false }
    ],
    answer: 0,
    explanation: "hasten：赶紧做（或说）"
  },
  {
    word: "persistence",
    options: [
      { text: "友好的；善良的", correct: false },
      { text: "坚持；执着；执意", correct: true },
      { text: "跪着；跪下", correct: false },
      { text: "使）膨胀；（使）扩大", correct: false }
    ],
    answer: 1,
    explanation: "persistence：坚持；执着；执意"
  },
  {
    word: "yonder",
    options: [
      { text: "战栗；颤抖", correct: false },
      { text: "发微光；闪闪发亮", correct: false },
      { text: "极端错误的；道德败坏的；极不公正的", correct: false },
      { text: "那边的）；在远处（的）", correct: true }
    ],
    answer: 3,
    explanation: "yonder：那边的）；在远处（的）"
  },
  {
    word: "mock",
    options: [
      { text: "壮观的景象；奇观", correct: false },
      { text: "战栗；颤抖", correct: false },
      { text: "刺入；刺穿；刺破", correct: false },
      { text: "嘲弄；（通过模仿）取笑", correct: true }
    ],
    answer: 3,
    explanation: "mock：嘲弄；（通过模仿）取笑"
  },
  {
    word: "tender",
    options: [
      { text: "界限；范围", correct: false },
      { text: "壮观的景象；奇观", correct: false },
      { text: "参加；参与", correct: false },
      { text: "食物）软的，嫩的，易咀嚼的", correct: true }
    ],
    answer: 3,
    explanation: "tender：食物）软的，嫩的，易咀嚼的"
  },
  {
    word: "gloom",
    options: [
      { text: "昏暗", correct: true },
      { text: "开花", correct: false },
      { text: "赶紧做（或说）", correct: false },
      { text: "预先阻止；在（他人）之前行动；先发制人", correct: false }
    ],
    answer: 0,
    explanation: "gloom：昏暗"
  },
  {
    word: "enchantment",
    options: [
      { text: "从…下来；下降", correct: false },
      { text: "神奇的；神秘的", correct: false },
      { text: "迷人；魅力", correct: true },
      { text: "胜利；成功；成就", correct: false }
    ],
    answer: 2,
    explanation: "enchantment：迷人；魅力"
  },
  {
    word: "rime",
    options: [
      { text: "紧握；紧抓", correct: false },
      { text: "装饰品；点缀品", correct: false },
      { text: "鬼魂）经常出没于", correct: false },
      { text: "使…蒙上白霜", correct: true }
    ],
    answer: 3,
    explanation: "rime：使…蒙上白霜"
  },
  {
    word: "behold",
    options: [
      { text: "看；看见", correct: true },
      { text: "威胁、攻击或警告）隐含的，不明言的", correct: false },
      { text: "限制，束缚（某人或某事物的发展）", correct: false },
      { text: "赶紧做（或说）", correct: false }
    ],
    answer: 0,
    explanation: "behold：看；看见"
  },
  {
    word: "afflict",
    options: [
      { text: "苗条的；修长的；纤细的", correct: false },
      { text: "折磨；使痛苦", correct: true },
      { text: "温柔的；体贴入微的", correct: false },
      { text: "有疗效的；有药效的", correct: false }
    ],
    answer: 1,
    explanation: "afflict：折磨；使痛苦"
  },
  {
    word: "horizon",
    options: [
      { text: "地平线", correct: true },
      { text: "尖锐的；刺耳的", correct: false },
      { text: "仅仅的，只不过（用于强调微小或微不足道）", correct: false },
      { text: "华典；盛典；盛况", correct: false }
    ],
    answer: 0,
    explanation: "horizon：地平线"
  },
  {
    word: "noxious",
    options: [
      { text: "有害的；有毒的", correct: true },
      { text: "苗条的；修长的；纤细的", correct: false },
      { text: "人、动物等）成群地来回移动", correct: false },
      { text: "预先阻止；在（他人）之前行动；先发制人", correct: false }
    ],
    answer: 0,
    explanation: "noxious：有害的；有毒的"
  },
  {
    word: "crimson",
    options: [
      { text: "威胁、攻击或警告）隐含的，不明言的", correct: false },
      { text: "脉搏", correct: false },
      { text: "深红色的；绯红色的", correct: true },
      { text: "持久的）嘈杂声，喧闹声", correct: false }
    ],
    answer: 2,
    explanation: "crimson：深红色的；绯红色的"
  },
  {
    word: "succession",
    options: [
      { text: "坚持；执着；执意", correct: false },
      { text: "有疗效的；有药效的", correct: false },
      { text: "一连串，一系列（同类型的人或物）", correct: true },
      { text: "特别激动的；极度兴奋的", correct: false }
    ],
    answer: 2,
    explanation: "succession：一连串，一系列（同类型的人或物）"
  },
  {
    word: "terror",
    options: [
      { text: "身体的；肉体的", correct: false },
      { text: "恐惧；惊恐", correct: true },
      { text: "茫然的；失神的", correct: false },
      { text: "脉搏", correct: false }
    ],
    answer: 1,
    explanation: "terror：恐惧；惊恐"
  },
  {
    word: "spectacle",
    options: [
      { text: "壮观的景象；奇观", correct: true },
      { text: "限制，束缚（某人或某事物的发展）", correct: false },
      { text: "使变样；改变", correct: false },
      { text: "界限；范围", correct: false }
    ],
    answer: 0,
    explanation: "spectacle：壮观的景象；奇观"
  },
  {
    word: "creep",
    options: [
      { text: "身体的；肉体的", correct: false },
      { text: "按时的；准时的", correct: false },
      { text: "嘲弄；（通过模仿）取笑", correct: false },
      { text: "轻声地缓慢行进", correct: true }
    ],
    answer: 3,
    explanation: "creep：轻声地缓慢行进"
  },
  {
    word: "confines",
    options: [
      { text: "茫然的；失神的", correct: false },
      { text: "使变样；改变", correct: false },
      { text: "那边的）；在远处（的）", correct: false },
      { text: "界限；范围", correct: true }
    ],
    answer: 3,
    explanation: "confines：界限；范围"
  },
  {
    word: "riot",
    options: [
      { text: "折磨；使痛苦", correct: false },
      { text: "彻底改观；变化过程", correct: false },
      { text: "暴乱；骚乱", correct: true },
      { text: "放任；放纵", correct: false }
    ],
    answer: 2,
    explanation: "riot：暴乱；骚乱"
  },
  {
    word: "gaze",
    options: [
      { text: "兴高采烈的；得意洋洋的", correct: false },
      { text: "安详；休息", correct: false },
      { text: "凝视；注视", correct: true },
      { text: "一棵树上的）花，全部花朵", correct: false }
    ],
    answer: 2,
    explanation: "gaze：凝视；注视"
  },
  {
    word: "hasten",
    options: [
      { text: "加速；加紧", correct: true },
      { text: "诡计；手腕", correct: false },
      { text: "使恢复；使回复", correct: false },
      { text: "不清楚地；模糊地", correct: false }
    ],
    answer: 0,
    explanation: "hasten：加速；加紧"
  },
  {
    word: "pierce",
    options: [
      { text: "刺入；刺穿；刺破", correct: true },
      { text: "不知不觉地；非故意地", correct: false },
      { text: "轻声地缓慢行进", correct: false },
      { text: "界限；范围", correct: false }
    ],
    answer: 0,
    explanation: "pierce：刺入；刺穿；刺破"
  },
  {
    word: "dismiss",
    options: [
      { text: "苗条的；修长的；纤细的", correct: false },
      { text: "骚乱地；骚动地；混乱地；激动地", correct: false },
      { text: "拒绝考虑；不理会", correct: true },
      { text: "开花", correct: false }
    ],
    answer: 2,
    explanation: "dismiss：拒绝考虑；不理会"
  },
  {
    word: "repression",
    options: [
      { text: "壮丽；灿烂", correct: false },
      { text: "细微的；微妙的；难以察觉的", correct: false },
      { text: "对感情的）抑制，压抑", correct: true },
      { text: "身体的；肉体的", correct: false }
    ],
    answer: 2,
    explanation: "repression：对感情的）抑制，压抑"
  },
  {
    word: "cramp",
    options: [
      { text: "镇静地", correct: false },
      { text: "限制，束缚（某人或某事物的发展）", correct: true },
      { text: "成功的满足感；胜利的喜悦之情", correct: false },
      { text: "迷人；魅力", correct: false }
    ],
    answer: 1,
    explanation: "cramp：限制，束缚（某人或某事物的发展）"
  },
  {
    word: "monstrous",
    options: [
      { text: "拒绝考虑；不理会", correct: false },
      { text: "极端错误的；道德败坏的；极不公正的", correct: true },
      { text: "友好的；善良的", correct: false },
      { text: "胜利；成功；成就", correct: false }
    ],
    answer: 1,
    explanation: "monstrous：极端错误的；道德败坏的；极不公正的"
  },
  {
    word: "dilate",
    options: [
      { text: "使）膨胀；（使）扩大", correct: true },
      { text: "镇静地", correct: false },
      { text: "尖锐的；刺耳的", correct: false },
      { text: "刺入；刺穿；刺破", correct: false }
    ],
    answer: 0,
    explanation: "dilate：使）膨胀；（使）扩大"
  },
  {
    word: "wares",
    options: [
      { text: "拒绝考虑；不理会", correct: false },
      { text: "一连串的人（或物）", correct: false },
      { text: "一般不在商店内出售的）商品，货物", correct: true },
      { text: "仅仅的，只不过（用于强调微小或微不足道）", correct: false }
    ],
    answer: 2,
    explanation: "wares：一般不在商店内出售的）商品，货物"
  },
  {
    word: "transformation",
    options: [
      { text: "看；看见", correct: false },
      { text: "迷人；魅力", correct: false },
      { text: "漂流；飘动", correct: false },
      { text: "彻底改观；变化过程", correct: true }
    ],
    answer: 3,
    explanation: "transformation：彻底改观；变化过程"
  },
  {
    word: "haunt",
    options: [
      { text: "使）膨胀；（使）扩大", correct: false },
      { text: "按时的；准时的", correct: false },
      { text: "显示；表示", correct: false },
      { text: "鬼魂）经常出没于", correct: true }
    ],
    answer: 3,
    explanation: "haunt：鬼魂）经常出没于"
  },
  {
    word: "glory",
    options: [
      { text: "传统）手工工艺", correct: false },
      { text: "赶紧做（或说）", correct: false },
      { text: "壮丽；灿烂", correct: true },
      { text: "筋疲力尽；疲惫不堪", correct: false }
    ],
    answer: 2,
    explanation: "glory：壮丽；灿烂"
  },
  {
    word: "inward",
    options: [
      { text: "细微的；微妙的；难以察觉的", correct: false },
      { text: "内心的；精神的", correct: true },
      { text: "一连串的人（或物）", correct: false },
      { text: "壮观的景象；奇观", correct: false }
    ],
    answer: 1,
    explanation: "inward：内心的；精神的"
  },
  {
    word: "forestall",
    options: [
      { text: "预先阻止；在（他人）之前行动；先发制人", correct: true },
      { text: "动植物的)族，群", correct: false },
      { text: "温柔的；体贴入微的", correct: false },
      { text: "苗条的；修长的；纤细的", correct: false }
    ],
    answer: 0,
    explanation: "forestall：预先阻止；在（他人）之前行动；先发制人"
  }
];
