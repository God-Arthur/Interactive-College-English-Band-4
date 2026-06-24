// Unit 8 Part V 自造例句题库 (138 题)
// 覆盖 Unit 8 全部新词每个释义；句子全部原创；顺序已打乱
// 已严格过滤词表外的词

const unit8Questions = [
  {
    sentence: "The young athlete dreamed of winning Olympic g___ for his country.",
    hint: { letter: "g", chinese: "荣誉；光荣" },
    answer: "glory",
    explanation: "glory 表示'荣誉；光荣'，指因做出令人钦佩之事而获得的赞美"
  },
  {
    sentence: "The botanist carefully examined the c___ of the flower under a magnifying glass.",
    hint: { letter: "c", chinese: "花萼" },
    answer: "calix",
    explanation: "calix 表示'花萼'，同 calyx，指花的外部绿色包裹部分"
  },
  {
    sentence: "The rare orchid remained e___ despite the botanist's weeks of searching in the jungle.",
    hint: { letter: "e", chinese: "难找的；不常见到的" },
    answer: "elusive",
    explanation: "elusive 表示'难找的；不常见到的'，指难以找到或很少出现"
  },
  {
    sentence: "The edges of the pond were lined with p___, their purple flowers attracting many butterflies.",
    hint: { letter: "p", chinese: "梭鱼草" },
    answer: "pondedera",
    explanation: "pondedera 表示'梭鱼草'，一种水生植物"
  },
  {
    sentence: "The total solar eclipse was a breathtaking s___ that attracted thousands of observers.",
    hint: { letter: "s", chinese: "壮观的景象；奇观" },
    answer: "spectacle",
    explanation: "spectacle 表示'壮观的景象；奇观'，指不寻常、激动人心或令人印象深刻的景象"
  },
  {
    sentence: "Colorful autumn leaves f___ gently down to the surface of the calm lake.",
    hint: { letter: "f", chinese: "漂流；飘动" },
    answer: "float",
    explanation: "float 表示'漂流；飘动'，指在水上或空中缓慢移动"
  },
  {
    sentence: "The hikers began to d___ the mountain before sunrise to avoid the midday heat.",
    hint: { letter: "d", chinese: "从…下来；下降" },
    answer: "descend",
    explanation: "descend 表示'从…下来；下降'，正式用语，指从高处向低处移动"
  },
  {
    sentence: "The wild animals roamed freely within the c___ of the nature reserve.",
    hint: { letter: "c", chinese: "界限；范围" },
    answer: "confines",
    explanation: "confines 表示'界限；范围'，指某事物的限制或边界"
  },
  {
    sentence: "It was a m___ scratch on his arm, not serious enough to require a bandage.",
    hint: { letter: "m", chinese: "仅仅的，只不过（用于强调微小或微不足道）" },
    answer: "mere",
    explanation: "mere 表示'仅仅的，只不过'，用于强调某人或某物多么微小或不重要"
  },
  {
    sentence: "The guilt of that dishonest deal would h___ the businessman for decades to come.",
    hint: { letter: "h", chinese: "缠扰；纠缠" },
    answer: "haunt",
    explanation: "haunt 表示'缠扰；纠缠'，指长期困扰某人或某组织"
  },
  {
    sentence: "The audience could not r___ their laughter at the comedian's clever joke.",
    hint: { letter: "r", chinese: "忍住；克制" },
    answer: "repress",
    explanation: "repress 表示'忍住；克制'，指阻止自己做想做的事"
  },
  {
    sentence: "The village is famous for its traditional c___ of hand-woven textiles and pottery.",
    hint: { letter: "c", chinese: "（传统）手工工艺" },
    answer: "craft",
    explanation: "craft 表示'（传统）手工工艺'，指手工制作物品的传统技艺"
  },
  {
    sentence: "The harsh critic m___ the young actor's performance in his weekly column.",
    hint: { letter: "m", chinese: "嘲弄；（通过模仿）取笑" },
    answer: "mock",
    explanation: "mock 表示'嘲弄；取笑'，指以不友善的方式嘲笑某人，尤指模仿"
  },
  {
    sentence: "A group of rebels c___ to overthrow the government by staging a surprise attack at dawn.",
    hint: { letter: "c", chinese: "搞阴谋；密谋" },
    answer: "conspire",
    explanation: "conspire 表示'搞阴谋；密谋'，指与人秘密计划做坏事或违法之事"
  },
  {
    sentence: "The passengers watched in t___ as the plane shook violently during the storm.",
    hint: { letter: "t", chinese: "恐惧；惊恐" },
    answer: "terror",
    explanation: "terror 表示'恐惧；惊恐'，指极度的害怕"
  },
  {
    sentence: "It would be m___ to charge patients extra for basic medical supplies.",
    hint: { letter: "m", chinese: "极端错误的；道德败坏的；极不公正的" },
    answer: "monstrous",
    explanation: "monstrous 表示'极端错误的；道德败坏的'，指非常不公正或不道德的事"
  },
  {
    sentence: "The fans were in a f___ state of excitement as the concert was about to begin.",
    hint: { letter: "f", chinese: "特别激动的；极度兴奋的" },
    answer: "feverish",
    explanation: "feverish 表示'特别激动的；极度兴奋的'，指极度兴奋的状态"
  },
  {
    sentence: "The shimmering m___ on the hot road made drivers think there was water ahead.",
    hint: { letter: "m", chinese: "幻景；海市蜃楼" },
    answer: "mirage",
    explanation: "mirage 表示'幻景；海市蜃楼'，指热气造成的视觉错觉"
  },
  {
    sentence: "The g___ of the sunset over the ocean was so magnificent that no photograph could capture it.",
    hint: { letter: "g", chinese: "壮丽；灿烂" },
    answer: "glory",
    explanation: "glory 表示'壮丽；灿烂'，指极大的美丽"
  },
  {
    sentence: "The children celebrated the a___ of all rules during the last day of summer camp.",
    hint: { letter: "a", chinese: "放任；放纵" },
    answer: "abandonment",
    explanation: "abandonment 表示'放任；放纵'，指完全放弃克制和约束"
  },
  {
    sentence: "Thousands of excited fans s___ around the pop star's car as it pulled up to the venue.",
    hint: { letter: "s", chinese: "（人、动物等）成群地来回移动" },
    answer: "swarm",
    explanation: "swarm 表示'成群地来回移动'，指人或动物大量聚集移动"
  },
  {
    sentence: "Under his intense g___, she felt as if every secret she had was being exposed.",
    hint: { letter: "g", chinese: "凝视；注视" },
    answer: "gaze",
    explanation: "gaze 表示'凝视；注视'，指长时间稳定地看"
  },
  {
    sentence: "The maple leaves turned a brilliant c___ red just before they fell to the ground.",
    hint: { letter: "c", chinese: "深红色的；绯红色的" },
    answer: "crimson",
    explanation: "crimson 表示'深红色的；绯红色的'，指暗紫红色"
  },
  {
    sentence: "His s___ to pollen means he sneezes constantly during the spring months.",
    hint: { letter: "s", chinese: "易受影响（或感染）的倾向；敏感性" },
    answer: "susceptibility",
    explanation: "susceptibility 表示'易受影响的倾向；敏感性'，指容易被某事物影响"
  },
  {
    sentence: "Years of emotional r___ had left him unable to express his feelings openly.",
    hint: { letter: "r", chinese: "（对感情的）抑制，压抑" },
    answer: "repression",
    explanation: "repression 表示'（对感情的）抑制，压抑'，指拒绝表现或承认强烈情感"
  },
  {
    sentence: "The hospital held a charity g___ to raise funds for a new children's wing.",
    hint: { letter: "g", chinese: "特别演出；庆典；典" },
    answer: "gala",
    explanation: "gala 表示'特别演出；庆典'，指为庆祝某事而举办的特别活动"
  },
  {
    sentence: "A cold s___ ran through her body when she heard the footsteps behind her in the dark alley.",
    hint: { letter: "s", chinese: "战栗；颤抖" },
    answer: "shudder",
    explanation: "shudder 表示'战栗；颤抖'，指快速无法控制的抖动"
  },
  {
    sentence: "A small p___ of wildflowers grew in the middle of the dry field.",
    hint: { letter: "p", chinese: "（与周围部分不同的）小片，小块" },
    answer: "patch",
    explanation: "patch 表示'小片，小块'，指与周围部分不同的一小片区域"
  },
  {
    sentence: "The cherry b___ filled the entire garden with a delicate and sweet fragrance.",
    hint: { letter: "b", chinese: "（一棵树上的）花，全部花朵" },
    answer: "blossom",
    explanation: "blossom 表示'花；全部花朵'，指树上的花或全部花朵"
  },
  {
    sentence: "Poverty and disease continue to a___ many families in remote mountain villages.",
    hint: { letter: "a", chinese: "折磨；使痛苦" },
    answer: "afflict",
    explanation: "afflict 表示'折磨；使痛苦'，正式用语，指使人或事物遭受痛苦"
  },
  {
    sentence: "The innkeeper was a g___ host who made every guest feel welcome and at home.",
    hint: { letter: "g", chinese: "友好的；善良的" },
    answer: "genial",
    explanation: "genial 表示'友好的；善良的'，指和蔼可亲、待人友善"
  },
  {
    sentence: "After working for twelve hours straight, the nurse collapsed from e___ on the sofa.",
    hint: { letter: "e", chinese: "筋疲力尽；疲惫不堪" },
    answer: "exhaustion",
    explanation: "exhaustion 表示'筋疲力尽；疲惫不堪'，指极度疲劳、毫无精力"
  },
  {
    sentence: "The small town underwent a remarkable t___ after the new highway was built nearby.",
    hint: { letter: "t", chinese: "彻底改观；变化过程" },
    answer: "transformation",
    explanation: "transformation 表示'彻底改观；变化过程'，指完全变成不同事物的过程"
  },
  {
    sentence: "The old monastery on the mountain had a m___ atmosphere that drew visitors from far away.",
    hint: { letter: "m", chinese: "神奇的；神秘的" },
    answer: "mystic",
    explanation: "mystic 表示'神奇的；神秘的'，指涉及宗教、精神或魔力的"
  },
  {
    sentence: "Some philosophers argue that c___ desires are just as important as spiritual needs.",
    hint: { letter: "c", chinese: "身体的；肉体的" },
    answer: "corporeal",
    explanation: "corporeal 表示'身体的；肉体的'，正式用语，指与身体有关的"
  },
  {
    sentence: "His d___ in studying every night eventually earned him a full scholarship to the university.",
    hint: { letter: "d", chinese: "勤奋；用功" },
    answer: "diligence",
    explanation: "diligence 表示'勤奋；用功'，正式用语，指非常努力且认真地工作或学习"
  },
  {
    sentence: "The stationery shop sells pens, pencils, erasers, notebooks, a___ t___ l___.",
    hint: { letter: "a", chinese: "诸如此类；等等" },
    answer: "and the like",
    explanation: "and the like 表示'诸如此类；等等'，用于将其他类似的人或事物包括在内"
  },
  {
    sentence: "There is a s___ difference between the two versions that only experts can detect.",
    hint: { letter: "s", chinese: "细微的；微妙的；难以察觉的" },
    answer: "subtle",
    explanation: "subtle 表示'细微的；微妙的'，指不明显、难以察觉的"
  },
  {
    sentence: "A family of swallows had built their nest under the e___ of the roof.",
    hint: { letter: "e", chinese: "屋檐" },
    answer: "eaves",
    explanation: "eaves 表示'屋檐'，指屋顶伸出的边缘部分"
  },
  {
    sentence: "The cherry trees in the park b___ in early April, covering the paths with pink petals.",
    hint: { letter: "b", chinese: "开花" },
    answer: "bloom",
    explanation: "bloom 表示'开花'，指树木或植物长出花朵"
  },
  {
    sentence: "The only i___ in the underground cellar came from a single oil lamp on the table.",
    hint: { letter: "i", chinese: "光亮；照明" },
    answer: "illumination",
    explanation: "illumination 表示'光亮；照明'，指灯、光等提供的光亮"
  },
  {
    sentence: "The old man began to w___ quietly when he saw the photograph of his late wife.",
    hint: { letter: "w", chinese: "哭泣；流泪" },
    answer: "weep",
    explanation: "weep 表示'哭泣；流泪'，多因悲伤或强烈情感而落泪"
  },
  {
    sentence: "The doctor placed two fingers on the patient's wrist to check his p___.",
    hint: { letter: "p", chinese: "脉搏" },
    answer: "pulse",
    explanation: "pulse 表示'脉搏'，指心脏泵血时血液有规律的跳动"
  },
  {
    sentence: "The artist mixed a subtle t___ of lavender into the gray paint to give it more warmth.",
    hint: { letter: "t", chinese: "浅色；淡色调" },
    answer: "tint",
    explanation: "tint 表示'浅色；淡色调'，指少量某种颜色的色调"
  },
  {
    sentence: "She placed a soft c___ on the hard wooden bench before sitting down to read.",
    hint: { letter: "c", chinese: "垫子；靠垫；坐垫" },
    answer: "cushion",
    explanation: "cushion 表示'垫子；靠垫；坐垫'，指用于坐靠的柔软填充物"
  },
  {
    sentence: "A___ l___, after hours of searching, the rescue team found the lost hiker alive.",
    hint: { letter: "a", chinese: "最后；终于" },
    answer: "at length",
    explanation: "at length 表示'最后；终于'，指经过很长时间之后"
  },
  {
    sentence: "The audience sat in silence, d___ i___ every word of the poet's moving performance.",
    hint: { letter: "d", chinese: "享受地看（听，感觉，嗅）；欣赏；品赏" },
    answer: "drink in",
    explanation: "drink in 表示'欣赏；品赏'，指用心看、听、感觉或嗅以享受某事物"
  },
  {
    sentence: "The first crocus pushing through the snow was a h___ of the spring warmth to come.",
    hint: { letter: "h", chinese: "预兆" },
    answer: "herald",
    explanation: "herald 表示'预兆'，指预示某事即将发生的信号"
  },
  {
    sentence: "The construction of the new bridge was hailed as a remarkable engineering t___.",
    hint: { letter: "t", chinese: "胜利；成功；成就" },
    answer: "triumph",
    explanation: "triumph 表示'胜利；成功；成就'，指艰难斗争后的重要胜利或成功"
  },
  {
    sentence: "The ambassador held an e___ position in the diplomatic corps and was widely respected.",
    hint: { letter: "e", chinese: "显贵的；高贵的" },
    answer: "exalted",
    explanation: "exalted 表示'显贵的；高贵的'，指地位很高、受人尊敬"
  },
  {
    sentence: "Despite her calm appearance, she was fighting an i___ battle against anxiety and doubt.",
    hint: { letter: "i", chinese: "内心的；精神的" },
    answer: "inward",
    explanation: "inward 表示'内心的；精神的'，指在内心感受但未向他人表达的"
  },
  {
    sentence: "It is n___ to wear a helmet when riding a motorcycle on the highway.",
    hint: { letter: "n", chinese: "必要的；需要的" },
    answer: "needful",
    explanation: "needful 表示'必要的；需要的'，指必须做的或必需的事物"
  },
  {
    sentence: "The company endured a s___ of setbacks before finally achieving profitability.",
    hint: { letter: "s", chinese: "一连串，一系列（同类型的人或物）" },
    answer: "succession",
    explanation: "succession 表示'一连串，一系列'，指同类型的人或物连续出现"
  },
  {
    sentence: "After the accident, he sat with a v___ stare, seemingly unaware of what was happening around him.",
    hint: { letter: "v", chinese: "茫然的；失神的" },
    answer: "vacant",
    explanation: "vacant 表示'茫然的；失神的'，形容似乎不理解或未注意的表情"
  },
  {
    sentence: "After the harvest, the farmer burned the s___ left in the field to prepare for next year's planting.",
    hint: { letter: "s", chinese: "（庄稼收割后遗留的）残株，茬" },
    answer: "stubble",
    explanation: "stubble 表示'残株；茬'，指庄稼收割后留在地里的短茎"
  },
  {
    sentence: "The g___ of the forest deepened as the last rays of sunlight faded behind the hills.",
    hint: { letter: "g", chinese: "昏暗" },
    answer: "gloom",
    explanation: "gloom 表示'昏暗'，指难以看清的黑暗"
  },
  {
    sentence: "The mother gave her sleeping baby a t___ look before turning off the light.",
    hint: { letter: "t", chinese: "温柔的；体贴入微的" },
    answer: "tender",
    explanation: "tender 表示'温柔的；体贴入微的'，形容充满爱意和细心的温柔"
  },
  {
    sentence: "The old farmer pointed to the hills y___ and told us the river was just beyond them.",
    hint: { letter: "y", chinese: "（那边的）；在远处（的）" },
    answer: "yonder",
    explanation: "yonder 表示'那边的；在远处'，用于指较远处的某物"
  },
  {
    sentence: "The sweet s___ of jasmine filled the garden on warm summer evenings.",
    hint: { letter: "s", chinese: "气味；（尤指）香味" },
    answer: "scent",
    explanation: "scent 表示'气味；香味'，尤指令人愉悦的气味"
  },
  {
    sentence: "The cunning politician used c___ to manipulate public opinion in his favor.",
    hint: { letter: "c", chinese: "诡计；手腕" },
    answer: "craft",
    explanation: "craft 表示'诡计；手腕'，正式用语，指使人相信某事的技巧"
  },
  {
    sentence: "The thief began to c___ across the dark room toward the safe, trying not to make a sound.",
    hint: { letter: "c", chinese: "轻声地缓慢行进" },
    answer: "creep",
    explanation: "creep 表示'轻声地缓慢行进'，指安静、缓慢地移动"
  },
  {
    sentence: "When the teacher left the classroom, the students' wild ideas began to r___ r___.",
    hint: { letter: "r", chinese: "（想象力）自由驰骋；（情感、思绪等）不受约束" },
    answer: "run riot",
    explanation: "run riot 表示'自由驰骋；不受约束'，指想象力、情感等失去控制"
  },
  {
    sentence: "The company lowered its prices to f___ any attempt by competitors to enter the market.",
    hint: { letter: "f", chinese: "预先阻止；在（他人）之前行动；先发制人" },
    answer: "forestall",
    explanation: "forestall 表示'预先阻止；先发制人'，指抢在他人之前行动以防止某事发生"
  },
  {
    sentence: "Nothing can a___ the fact that he was responsible for the accident, despite his excuses.",
    hint: { letter: "a", chinese: "使变样；改变" },
    answer: "alter",
    explanation: "alter 表示'使变样；改变'，指使某人或某物变得不同"
  },
  {
    sentence: "The shallow wetland was covered with p___, providing shelter for small fish and frogs.",
    hint: { letter: "p", chinese: "小狗鱼草" },
    answer: "pickerelweed",
    explanation: "pickerelweed 表示'小狗鱼草'，一种生长在水边的植物"
  },
  {
    sentence: "A single f___ of snow drifted down and landed on the tip of her nose.",
    hint: { letter: "f", chinese: "薄片" },
    answer: "flake",
    explanation: "flake 表示'薄片'，指从某物上容易脱落的薄小片"
  },
  {
    sentence: "After a long day of hiking, the travelers found r___ by the quiet mountain lake.",
    hint: { letter: "r", chinese: "安详；休息" },
    answer: "repose",
    explanation: "repose 表示'安详；休息'，指平静或放松的状态"
  },
  {
    sentence: "A t___ of deer moved silently through the misty forest at dawn.",
    hint: { letter: "t", chinese: "(动植物的)族，群" },
    answer: "tribe",
    explanation: "tribe 表示'（动植物的）族，群'，指相关的动植物群体"
  },
  {
    sentence: "The sun dipped below the h___, painting the sky in shades of orange and pink.",
    hint: { letter: "h", chinese: "地平线" },
    answer: "horizon",
    explanation: "horizon 表示'地平线'，指远处天地或天海相交的线"
  },
  {
    sentence: "The warrior defended his t___ from invaders for many years without ever retreating.",
    hint: { letter: "t", chinese: "部落" },
    answer: "tribe",
    explanation: "tribe 表示'部落'，指有共同信仰、语言和领袖的社会群体"
  },
  {
    sentence: "She carefully placed a delicate glass o___ on the top branch of the Christmas tree.",
    hint: { letter: "o", chinese: "装饰品；点缀品" },
    answer: "ornament",
    explanation: "ornament 表示'装饰品；点缀品'，指用于装饰的小型精美物件"
  },
  {
    sentence: "The crowd reacted t___ when the home team scored the winning goal in the final second.",
    hint: { letter: "t", chinese: "骚乱地；骚动地；混乱地；激动地" },
    answer: "tumultuously",
    explanation: "tumultuously 表示'骚乱地；激动地'，指充满噪音、兴奋或混乱地"
  },
  {
    sentence: "His expensive watch and tailored suit b___ a man of considerable wealth.",
    hint: { letter: "b", chinese: "显示；表示" },
    answer: "bespeak",
    explanation: "bespeak 表示'显示；表示'，正式用语，指某事物表明或暗示某种情况"
  },
  {
    sentence: "In this profession, honesty and reliability c___ f___ more than fancy degrees.",
    hint: { letter: "c", chinese: "有价值；有重要性" },
    answer: "count for",
    explanation: "count for 表示'有价值；有重要性'，指某事物具有重要意义或分量"
  },
  {
    sentence: "The queen's coronation was celebrated with great p___ and ceremony throughout the kingdom.",
    hint: { letter: "p", chinese: "华典；盛典；盛况" },
    answer: "pomp",
    explanation: "pomp 表示'华典；盛典；盛况'，指涉及华丽服饰和特殊传统的正式仪式"
  },
  {
    sentence: "A long p___ of mourners walked slowly behind the coffin through the churchyard.",
    hint: { letter: "p", chinese: "一连串的人（或物）" },
    answer: "procession",
    explanation: "procession 表示'一连串的人（或物）'，指连续行进的人或事物"
  },
  {
    sentence: "Every autumn, the family drove to the apple o___ to pick fresh fruit together.",
    hint: { letter: "o", chinese: "果园" },
    answer: "orchard",
    explanation: "orchard 表示'果园'，指种植果树的园地"
  },
  {
    sentence: "Parents should t___ t___ t___ to listen carefully to their children's concerns.",
    hint: { letter: "t", chinese: "花费力气（做某事）" },
    answer: "take the time",
    explanation: "take the time 表示'花费力气做某事'，指特意抽出时间努力去做"
  },
  {
    sentence: "The spokesman h___ to deny the rumors before they could spread further.",
    hint: { letter: "h", chinese: "赶紧做（或说）" },
    answer: "hasten",
    explanation: "hasten 作不及物动词表示'赶紧做（或说）'，指迅速行动或说话"
  },
  {
    sentence: "The eye doctor used drops to d___ the patient's pupils for a thorough examination.",
    hint: { letter: "d", chinese: "（使）膨胀；（使）扩大" },
    answer: "dilate",
    explanation: "dilate 表示'（使）膨胀；（使）扩大'，指变大变宽"
  },
  {
    sentence: "The priest began to k___ before the altar and pray silently for guidance.",
    hint: { letter: "k", chinese: "跪着；跪下" },
    answer: "kneel",
    explanation: "kneel 表示'跪着；跪下'，指身体以膝盖支撑的姿势"
  },
  {
    sentence: "The little boy let out a loud s___ when his ice cream fell to the ground.",
    hint: { letter: "s", chinese: "抽噎（声）；啜泣（声）；呜咽（声）" },
    answer: "sob",
    explanation: "sob 作名词表示'抽噎声；啜泣声'，指急促喘气式的哭泣声"
  },
  {
    sentence: "A tight budget may c___ the ability of the research team to conduct large-scale experiments.",
    hint: { letter: "c", chinese: "限制，束缚（某人或某事物的发展）" },
    answer: "cramp",
    explanation: "cramp 表示'限制，束缚'，指阻碍某人或某事物的发展"
  },
  {
    sentence: "The old w___ had dried up completely during the long summer drought.",
    hint: { letter: "w", chinese: "河道；溪流" },
    answer: "watercourse",
    explanation: "watercourse 表示'河道；溪流'，指水流经过的天然或人工通道"
  },
  {
    sentence: "The factory was shut down for releasing n___ fumes into the surrounding neighborhoods.",
    hint: { letter: "n", chinese: "有害的；有毒的" },
    answer: "noxious",
    explanation: "noxious 表示'有害的；有毒的'，正式用语，指有害或有毒的"
  },
  {
    sentence: "His p___ in practicing the piano every day eventually earned him a place at the conservatory.",
    hint: { letter: "p", chinese: "坚持；执着；执意" },
    answer: "persistence",
    explanation: "persistence 表示'坚持；执着'，指即使困难也决心做某事"
  },
  {
    sentence: "From the balcony, she could f___ see the lights of the distant town through the fog.",
    hint: { letter: "f", chinese: "不清楚地；模糊地" },
    answer: "faintly",
    explanation: "faintly 表示'不清楚地；模糊地'，指难以看清、听清等"
  },
  {
    sentence: "The ballerina's s___ figure moved gracefully across the stage.",
    hint: { letter: "s", chinese: "苗条的；修长的；纤细的" },
    answer: "slender",
    explanation: "slender 表示'苗条的；修长的'，形容高而细且吸引人的体态"
  },
  {
    sentence: "The terrified passenger c___ the armrest tightly as the plane hit a pocket of turbulence.",
    hint: { letter: "c", chinese: "紧握；紧抓" },
    answer: "clutch",
    explanation: "clutch 表示'紧握；紧抓'，指因不想失去某物而紧紧握住"
  },
  {
    sentence: "A lone s___ hopped across the garden path searching for crumbs of bread.",
    hint: { letter: "s", chinese: "麻雀" },
    answer: "sparrow",
    explanation: "sparrow 表示'麻雀'，一种常见的小型鸟类"
  },
  {
    sentence: "The scientists were e___ when their experiment finally succeeded after years of failure.",
    hint: { letter: "e", chinese: "兴高采烈的；得意洋洋的" },
    answer: "exalted",
    explanation: "exalted 表示'兴高采烈的；得意洋洋的'，指极度高兴和自豪"
  },
  {
    sentence: "The a___ advised her client to accept the settlement offer rather than go to trial.",
    hint: { letter: "a", chinese: "律师" },
    answer: "attorney",
    explanation: "attorney 表示'律师'，美式英语中指律师"
  },
  {
    sentence: "The cruel owner a___ his dog on the highway and drove away without looking back.",
    hint: { letter: "a", chinese: "抛弃；遗弃" },
    answer: "abandon",
    explanation: "abandon 表示'抛弃；遗弃'，指在应留下照顾时离开某人"
  },
  {
    sentence: "The train service is known for being p___, arriving at the station exactly on schedule.",
    hint: { letter: "p", chinese: "按时的；准时的" },
    answer: "punctual",
    explanation: "punctual 表示'按时的；准时的'，指在约定的时间到达或发生"
  },
  {
    sentence: "The m___ of the wheat into fine flour takes several hours at the old stone mill.",
    hint: { letter: "m", chinese: "磨粉" },
    answer: "mill",
    explanation: "mill 作不可数名词表示'磨粉'，指将谷物磨成粉的过程"
  },
  {
    sentence: "A violent r___ broke out in the city center after the controversial court decision.",
    hint: { letter: "r", chinese: "暴乱；骚乱" },
    answer: "riot",
    explanation: "riot 表示'暴乱；骚乱'，指人群进行的暴力抗议"
  },
  {
    sentence: "The professor's lecture provided sudden i___ on a topic that had confused me for weeks.",
    hint: { letter: "i", chinese: "（对某一主题的）阐明，理解" },
    answer: "illumination",
    explanation: "illumination 表示'阐明，理解'，正式用语，指对某一主题的清晰解释或领悟"
  },
  {
    sentence: "The diplomat issued a v___ warning to the hostile nation across the border.",
    hint: { letter: "v", chinese: "（威胁、攻击或警告）隐含的，不明言的" },
    answer: "veiled",
    explanation: "veiled 表示'隐含的，不明言的'，常修饰威胁、攻击等词"
  },
  {
    sentence: "The spy tried to c___ his true identity by using a fake passport.",
    hint: { letter: "c", chinese: "隐瞒；掩盖" },
    answer: "conceal",
    explanation: "conceal 表示'隐瞒；掩盖'，指防止某物被看见或发现"
  },
  {
    sentence: "Despite the angry shouts from the crowd, the mayor spoke c___ and answered every question.",
    hint: { letter: "c", chinese: "镇静地" },
    answer: "composedly",
    explanation: "composedly 表示'镇静地'，指冷静且能控制自己感情地"
  },
  {
    sentence: "The surface of the calm lake s___ softly under the pale light of the moon.",
    hint: { letter: "s", chinese: "发微光；闪闪发亮" },
    answer: "shimmer",
    explanation: "shimmer 表示'发微光；闪闪发亮'，指发出柔和且似乎微微颤动的光"
  },
  {
    sentence: "The baby birds t___ in the nest, eagerly waiting for their mother to bring food.",
    hint: { letter: "t", chinese: "（鸟）鸣啭" },
    answer: "twitter",
    explanation: "twitter 表示'（鸟）鸣啭'，指鸟发出短促高音的叫声"
  },
  {
    sentence: "The witness remained m___ throughout the entire interrogation, refusing to say a single word.",
    hint: { letter: "m", chinese: "缄默的；无声的" },
    answer: "mute",
    explanation: "mute 表示'缄默的；无声的'，指不说话或不愿说话"
  },
  {
    sentence: "The constant d___ of traffic outside the window made it hard to focus on reading.",
    hint: { letter: "d", chinese: "（持久的）嘈杂声，喧闹声" },
    answer: "din",
    explanation: "din 表示'嘈杂声；喧闹声'，指持续很久的刺耳噪音"
  },
  {
    sentence: "The thorns on the rose bush can easily p___ the skin of anyone who touches it carelessly.",
    hint: { letter: "p", chinese: "刺入；刺穿；刺破" },
    answer: "pierce",
    explanation: "pierce 表示'刺入；刺穿；刺破'，指用尖锐物体在物体上扎出小孔"
  },
  {
    sentence: "Good nutrition and regular exercise can h___ a child's growth and development.",
    hint: { letter: "h", chinese: "加速；加紧" },
    answer: "hasten",
    explanation: "hasten 作及物动词表示'加速；加紧'，指使某事更快发生"
  },
  {
    sentence: "The school announced a s___ of all sports activities due to the flu outbreak.",
    hint: { letter: "s", chinese: "暂停；中止" },
    answer: "suspension",
    explanation: "suspension 表示'暂停；中止'，指某事被正式停止一段时间"
  },
  {
    sentence: "Some people tend to d___ celebrities, treating them as if they were flawless gods.",
    hint: { letter: "d", chinese: "崇拜；把…神化" },
    answer: "defy",
    explanation: "defy 在本课中表示'崇拜；把…神化'，指对某人或某物极度崇拜"
  },
  {
    sentence: "A look of t___ spread across her face when she saw her painting win first prize.",
    hint: { letter: "t", chinese: "成功的满足感；胜利的喜悦之情" },
    answer: "triumph",
    explanation: "triumph 表示'胜利的喜悦之情'，指获胜或成功后骄傲兴奋的感觉"
  },
  {
    sentence: "Many traditional cultures use plants with m___ properties to treat common illnesses.",
    hint: { letter: "m", chinese: "有疗效的；有药效的" },
    answer: "medicinal",
    explanation: "medicinal 表示'有疗效的；有药效的'，指用于治疗疾病的"
  },
  {
    sentence: "The child felt f___ and restless, so his mother took his temperature with a thermometer.",
    hint: { letter: "f", chinese: "发烧的；发热的" },
    answer: "feverish",
    explanation: "feverish 表示'发烧的；发热的'，指因发烧而身体不适"
  },
  {
    sentence: "The detective's p___ gaze seemed to uncover every lie the suspect tried to tell.",
    hint: { letter: "p", chinese: "敏锐的；有洞察力的" },
    answer: "piercing",
    explanation: "piercing 形容目光表示'敏锐的；有洞察力的'，指似乎能看穿人内心的眼神"
  },
  {
    sentence: "The p___ sound of the fire alarm echoed through the entire office building.",
    hint: { letter: "p", chinese: "尖锐的；刺耳的" },
    answer: "piercing",
    explanation: "piercing 形容声音表示'尖锐的；刺耳的'，指高而刺耳的声响"
  },
  {
    sentence: "The traveling merchant laid out his w___ on a cloth spread over the ground.",
    hint: { letter: "w", chinese: "（一般不在商店内出售的）商品，货物" },
    answer: "wares",
    explanation: "wares 表示'商品，货物'，多指不在商店内出售的物品"
  },
  {
    sentence: "A skilled speaker knows how to m___ the tone of their voice to keep the audience engaged.",
    hint: { letter: "m", chinese: "改变；调整" },
    answer: "modulate",
    explanation: "modulate 表示'改变；调整'，正式用语，指为达到某种效果而改变"
  },
  {
    sentence: "The children ran barefoot across the d___ grass in the early morning light.",
    hint: { letter: "d", chinese: "带露水的" },
    answer: "dewy",
    explanation: "dewy 表示'带露水的'，指表面沾有露珠的"
  },
  {
    sentence: "The judge d___ the lawyer's argument as irrelevant to the current case.",
    hint: { letter: "d", chinese: "拒绝考虑；不理会" },
    answer: "dismiss",
    explanation: "dismiss 表示'拒绝考虑；不理会'，指认为某想法不重要或不真实而不予考虑"
  },
  {
    sentence: "The bitter cold began to r___ the windows of the cabin with a thin layer of frost.",
    hint: { letter: "r", chinese: "使…蒙上白霜" },
    answer: "rime",
    explanation: "rime 作动词表示'使…蒙上白霜'，指用霜覆盖某物"
  },
  {
    sentence: "After hearing the shocking news, she a___ herself to grief and could not speak.",
    hint: { letter: "a", chinese: "陷入（某种感情）" },
    answer: "abandon",
    explanation: "abandon oneself to sth. 表示'陷入（某种感情）'，指完全沉溺于某种情绪"
  },
  {
    sentence: "The children's storybook was filled with tales of fairies and f___ living in the enchanted woods.",
    hint: { letter: "f", chinese: "仙子；小精灵" },
    answer: "faerie",
    explanation: "faerie 表示'仙子；小精灵'，同 fairy，指传说中的小精灵"
  },
  {
    sentence: "The mother held her newborn baby to her b___ and hummed a gentle lullaby.",
    hint: { letter: "b", chinese: "（女人的）胸部" },
    answer: "bosom",
    explanation: "bosom 表示'（女人的）胸部'，常用于文学或正式语境"
  },
  {
    sentence: "She opened the curtain and b___ a magnificent sunrise over the snow-capped mountains.",
    hint: { letter: "b", chinese: "看；看见" },
    answer: "behold",
    explanation: "behold 表示'看；看见'，文学用语，指看到某物"
  },
  {
    sentence: "The shepherd led his flock of sheep to fresh p___ on the other side of the valley.",
    hint: { letter: "p", chinese: "牧场" },
    answer: "pasture",
    explanation: "pasture 表示'牧场'，指供牲畜吃草的土地"
  },
  {
    sentence: "The heavy wooden door swung i___ when he pushed it open with his shoulder.",
    hint: { letter: "i", chinese: "向内的；向中心的" },
    answer: "inward",
    explanation: "inward 表示'向内的；向中心的'，指向某物的内部或中心方向"
  },
  {
    sentence: "The children decorated the tree with colorful t___ and bright glass balls.",
    hint: { letter: "t", chinese: "（装饰用的）闪光纸" },
    answer: "tinsel",
    explanation: "tinsel 表示'闪光纸'，指装饰用的闪亮金属箔条"
  },
  {
    sentence: "The scientist claimed to have discovered an e___ that could cure any known disease.",
    hint: { letter: "e", chinese: "灵丹妙药；不老药" },
    answer: "elixir",
    explanation: "elixir 表示'灵丹妙药；不老药'，指传说中能治病或使人年轻的神奇液体"
  },
  {
    sentence: "The latchkey kid wore his l___ on a string around his neck so he would not lose it.",
    hint: { letter: "l", chinese: "（房子或公寓大门的）碰锁钥匙" },
    answer: "latchkey",
    explanation: "latchkey 表示'碰锁钥匙'，指房屋或公寓大门的弹簧锁钥匙"
  },
  {
    sentence: "The assistant u___ sent the confidential email to the wrong recipient.",
    hint: { letter: "u", chinese: "不知不觉地；非故意地" },
    answer: "unwittingly",
    explanation: "unwittingly 表示'不知不觉地；非故意地'，指非有意或未意识到地做某事"
  },
  {
    sentence: "The church s___ rose high above the village, visible from miles away across the plain.",
    hint: { letter: "s", chinese: "（教堂或其他建筑物的）尖顶" },
    answer: "spire",
    explanation: "spire 表示'尖顶'，指教堂或其他建筑物顶部的尖塔"
  },
  {
    sentence: "The frightened girl c___ her mother's hand tightly as they walked through the dark forest.",
    hint: { letter: "c", chinese: "握紧；抱紧" },
    answer: "clasp",
    explanation: "clasp 表示'握紧；抱紧'，指用手紧紧抓住某人或某物"
  },
  {
    sentence: "Despite the beggar's i___, the wealthy merchant refused to give him a single coin.",
    hint: { letter: "i", chinese: "纠缠" },
    answer: "importunity",
    explanation: "importunity 表示'纠缠'，指以令人厌烦的方式不断要求某事"
  },
  {
    sentence: "The ancient forest held a mysterious e___ that captivated everyone who walked through it.",
    hint: { letter: "e", chinese: "迷人；魅力" },
    answer: "enchantment",
    explanation: "enchantment 表示'迷人；魅力'，指非常美丽或吸引人的特质"
  },
  {
    sentence: "Villagers believe that the ruined church is h___ by the ghost of a medieval knight.",
    hint: { letter: "h", chinese: "（鬼魂）经常出没于" },
    answer: "haunt",
    explanation: "haunt 表示'（鬼魂）经常出没于'，指亡魂常在某处出现"
  },
  {
    sentence: "The two neighboring countries were locked in a p___ state of tension that showed no sign of easing.",
    hint: { letter: "p", chinese: "长期的；永恒的" },
    answer: "perpetual",
    explanation: "perpetual 表示'长期的；永恒的'，指持续不断的"
  },
  {
    sentence: "All registered members are welcome to p___ in the annual general meeting next Friday.",
    hint: { letter: "p", chinese: "参加；参与" },
    answer: "partake",
    explanation: "partake 表示'参加；参与'，正式用语，指参加某活动或事件"
  },
  {
    sentence: "The chef made sure the lamb was cooked until it was perfectly t___ and juicy.",
    hint: { letter: "t", chinese: "（食物）软的，嫩的，易咀嚼的" },
    answer: "tender",
    explanation: "tender 形容食物表示'嫩的，易咀嚼的'，指烹饪后容易切开食用"
  },
  {
    sentence: "After months of treatment, the doctor was able to r___ the patient's eyesight to normal.",
    hint: { letter: "r", chinese: "使恢复；使回复" },
    answer: "restore",
    explanation: "restore 表示'使恢复；使回复'，指使某物回到先前的状态或条件"
  },
  {
    sentence: "We were lucky to find a v___ table by the window at the crowded restaurant.",
    hint: { letter: "v", chinese: "（座位、房间）空的，未被占用的" },
    answer: "vacant",
    explanation: "vacant 表示'空的，未被占用的'，指座位、房间等空着可使用"
  }
];
