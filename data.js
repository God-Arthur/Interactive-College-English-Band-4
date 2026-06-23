/**
 * 题目数据聚合文件
 * 真实题库来自 part3_questions.js 和 part5_questions.js
 * 
 * - part3Questions：Part III 词汇单选题 (200+ 题)
 * - part5Questions：Part V 句子填空题 (200 题)
 */

// 把题库聚合为统一结构供 app.js 使用
const quizData = {
    vocabulary: part3Questions,
    sentenceCompletion: part5Questions
};
