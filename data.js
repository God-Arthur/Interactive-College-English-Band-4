/**
 * 题目数据聚合文件
 */

const quizData = {
    vocabulary: part3Questions,
    sentenceCompletion: part5Questions,
    sentenceCompletionCustom: typeof part5CustomQuestions !== 'undefined' ? part5CustomQuestions : [],
    unit8: typeof unit8Questions !== 'undefined' ? unit8Questions : [],
    errorProne: typeof errorProneQuestions !== 'undefined' ? errorProneQuestions : [],
    extra: typeof extraQuestions !== 'undefined' ? extraQuestions : [],
    unit8En2Cn: typeof unit8En2CnQuestions !== 'undefined' ? unit8En2CnQuestions : []
};
