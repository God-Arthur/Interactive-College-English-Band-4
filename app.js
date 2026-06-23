/**
 * Book III 期末复习答题系统 - 主逻辑
 */

// ========== 状态管理 ==========
const state = {
    mode: '',           // 'part3' | 'part5' | 'full'
    questions: [],      // 当前试卷的题目列表
    currentIndex: 0,    // 当前题目索引
    answers: [],        // 用户答案数组
    score: 0,
    totalScore: 0,
    wrongQuestions: [],
    isAnswered: false,
    isPart5Mode: false, // 当前是否为 Part V 模式
};

// ========== DOM 引用 ==========
const $ = (id) => document.getElementById(id);
const welcomeScreen = $('welcomeScreen');
const questionCard = $('questionCard');
const resultScreen = $('resultScreen');
const progressSection = $('progressSection');
const questionType = $('questionType');
const questionNumber = $('questionNumber');
const questionContent = $('questionContent');
const optionsContainer = $('optionsContainer');
const fillBlankContainer = $('fillBlankContainer');
const hintBox = $('hintBox');
const answerInput = $('answerInput');
const submitBtn = $('submitBtn');
const nextBtn = $('nextBtn');
const feedback = $('feedback');
const progressText = $('progressText');
const progressFill = $('progressFill');
const scoreText = $('scoreText');

// ========== 工具函数 ==========
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function showElement(el) {
    el.style.display = '';
}

function hideElement(el) {
    el.style.display = 'none';
}

// ========== 初始化 ==========
function startQuiz(mode) {
    state.mode = mode;
    state.currentIndex = 0;
    state.answers = [];
    state.score = 0;
    state.wrongQuestions = [];
    state.isAnswered = false;

    // 构建题目列表
    let questions = [];
    if (mode === 'part3') {
        questions = quizData.vocabulary.map(q => ({ ...q, type: 'part3' }));
        state.isPart5Mode = false;
    } else if (mode === 'part5') {
        questions = quizData.sentenceCompletion.map(q => ({ ...q, type: 'part5' }));
        state.isPart5Mode = true;
    } else if (mode === 'full') {
        const part3 = quizData.vocabulary.map(q => ({ ...q, type: 'part3' }));
        const part5 = quizData.sentenceCompletion.map(q => ({ ...q, type: 'part5' }));
        questions = [...part3, ...part5];
        state.isPart5Mode = false;
    }

    // 检查是否有题目
    if (questions.length === 0) {
        alert('暂无题目数据，请先在 data.js 中填入题目！');
        return;
    }

    state.questions = questions;
    state.totalScore = questions.length;

    // 切换界面
    hideElement(welcomeScreen);
    showElement(questionCard);
    showElement(progressSection);

    // 显示第一题
    renderQuestion(0);
}

// ========== 渲染题目 ==========
function renderQuestion(index) {
    const q = state.questions[index];
    if (!q) return;

    state.isAnswered = false;
    state.isPart5Mode = (q.type === 'part5');
    hideElement(feedback);
    hideElement(nextBtn);
    hideElement(submitBtn);

    // 更新进度
    const total = state.questions.length;
    progressText.textContent = `第 ${index + 1} / ${total} 题`;
    progressFill.style.width = `${((index) / total) * 100}%`;
    scoreText.textContent = `得分: ${state.score}`;

    // 题型标签
    if (q.type === 'part3') {
        questionType.textContent = 'Part III · 词汇单选';
        questionType.className = 'question-type part3';
    } else {
        questionType.textContent = 'Part V · 句子填空';
        questionType.className = 'question-type part5';
    }

    questionNumber.textContent = `第 ${index + 1} 题`;

    // 渲染题目内容
    const sentenceHtml = q.sentence.replace(/___/g, '<span class="blank-marker">______</span>');
    questionContent.innerHTML = sentenceHtml;

    // 根据题型渲染
    if (q.type === 'part3') {
        renderOptions(q);
        hideElement(fillBlankContainer);
        showElement(submitBtn);
    } else {
        renderFillBlank(q);
        hideElement(optionsContainer);
        showElement(submitBtn);
    }

    // 如果之前答过此题，恢复状态
    if (state.answers[index] !== undefined) {
        restoreAnswer(index, q);
    }

    // 动画
    questionCard.style.animation = 'none';
    requestAnimationFrame(() => {
        questionCard.style.animation = 'fadeIn 0.3s ease';
    });
}

// ========== Part III 选项渲染 ==========
function renderOptions(q) {
    showElement(optionsContainer);
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];

    q.options.forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.dataset.index = i;
        div.innerHTML = `
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text">${opt.text}</span>
        `;
        div.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(div);
    });
}

// ========== Part III 选项选择 ==========
let selectedOption = -1;

function selectOption(index) {
    if (state.isAnswered) return;

    selectedOption = index;
    const items = optionsContainer.querySelectorAll('.option-item');
    items.forEach((item, i) => {
        item.classList.toggle('selected', i === index);
    });
}

// ========== Part V 填空渲染 ==========
function renderFillBlank(q) {
    showElement(fillBlankContainer);
    const hint = q.hint;
    hintBox.innerHTML = `
        <span class="hint-letter">${hint.letter}</span>
        <span>${hint.chinese}</span>
    `;
    answerInput.value = '';
    answerInput.className = '';
    answerInput.disabled = false;
    answerInput.focus();
}

// ========== Part V 确认按钮 ==========
function checkFillAnswer() {
    if (state.isAnswered) return;
    submitAnswer();
}

// ========== 提交答案 ==========
function submitAnswer() {
    if (state.isAnswered) return;

    const q = state.questions[state.currentIndex];
    let userAnswer;
    let isCorrect = false;

    if (q.type === 'part3') {
        if (selectedOption === -1) {
            alert('请先选择一个选项！');
            return;
        }
        userAnswer = selectedOption;
        isCorrect = (userAnswer === q.answer);
    } else {
        // Part V
        userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            alert('请输入答案！');
            return;
        }
        isCorrect = userAnswer.toLowerCase() === q.answer.toLowerCase();
    }

    state.isAnswered = true;
    state.answers[state.currentIndex] = userAnswer;

    // 显示反馈
    showElement(feedback);
    if (isCorrect) {
        state.score++;
        feedback.className = 'feedback correct';
        feedback.innerHTML = '✅ 回答正确！';
    } else {
        feedback.className = 'feedback incorrect';
        const correctAnswer = q.type === 'part3'
            ? q.options[q.answer].text
            : q.answer;
        feedback.innerHTML = `
            ❌ 回答错误<br>
            <span class="correct-answer">正确答案：${correctAnswer}</span>
        `;
        state.wrongQuestions.push({
            index: state.currentIndex,
            question: q,
            userAnswer: q.type === 'part3' ? q.options[userAnswer]?.text : userAnswer,
            correctAnswer: q.type === 'part3' ? q.options[q.answer].text : q.answer
        });
    }

    // 标记正确/错误样式
    if (q.type === 'part3') {
        const items = optionsContainer.querySelectorAll('.option-item');
        items.forEach((item, i) => {
            item.style.cursor = 'default';
            if (i === q.answer) item.classList.add('correct');
            if (i === selectedOption && !isCorrect) item.classList.add('incorrect');
        });
    } else {
        answerInput.className = isCorrect ? 'correct' : 'incorrect';
        answerInput.disabled = true;
    }

    // 更新得分
    scoreText.textContent = `得分: ${state.score}`;

    // 显示下一题或结果
    hideElement(submitBtn);
    if (state.currentIndex < state.questions.length - 1) {
        showElement(nextBtn);
        nextBtn.textContent = '下一题 →';
    } else {
        showElement(nextBtn);
        nextBtn.textContent = '查看结果';
    }
}

// ========== 下一题 ==========
function nextQuestion() {
    state.currentIndex++;
    selectedOption = -1;

    if (state.currentIndex >= state.questions.length) {
        showResult();
        return;
    }

    renderQuestion(state.currentIndex);
}

// ========== 恢复已答状态 ==========
function restoreAnswer(index, q) {
    const userAnswer = state.answers[index];
    if (userAnswer === undefined) return;

    // 跳过 - 已经答过的题直接跳到下一题
    // 但为了查看，我们可以重新显示
    state.isAnswered = true;
    hideElement(submitBtn);
    showElement(nextBtn);

    if (q.type === 'part3') {
        const items = optionsContainer.querySelectorAll('.option-item');
        items.forEach((item, i) => {
            item.style.cursor = 'default';
            if (i === q.answer) item.classList.add('correct');
            if (i === userAnswer && userAnswer !== q.answer) item.classList.add('incorrect');
            if (i === userAnswer) item.classList.add('selected');
        });
    } else {
        answerInput.value = userAnswer;
        answerInput.className = userAnswer.toLowerCase() === q.answer.toLowerCase() ? 'correct' : 'incorrect';
        answerInput.disabled = true;
    }

    showElement(feedback);
    const isCorrect = q.type === 'part3'
        ? userAnswer === q.answer
        : userAnswer.toLowerCase() === q.answer.toLowerCase();
    feedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
    const correctAnswer = q.type === 'part3' ? q.options[q.answer].text : q.answer;
    feedback.innerHTML = isCorrect
        ? '✅ 回答正确！'
        : `❌ 回答错误<br><span class="correct-answer">正确答案：${correctAnswer}</span>`;

    if (state.currentIndex < state.questions.length - 1) {
        nextBtn.textContent = '下一题 →';
    } else {
        nextBtn.textContent = '查看结果';
    }
}

// ========== 显示结果 ==========
function showResult() {
    hideElement(questionCard);
    hideElement(progressSection);
    showElement(resultScreen);

    const total = state.questions.length;
    const scoreValue = $('scoreValue');
    const scoreTotal = $('scoreValue').nextElementSibling;

    $('scoreValue').textContent = state.score;
    $('scoreValue').nextElementSibling.textContent = `/ ${total}`;

    // 评分消息
    const percentage = (state.score / total) * 100;
    const msg = $('scoreMessage');
    if (percentage >= 90) {
        msg.textContent = '🌟 优秀！继续保持！';
    } else if (percentage >= 70) {
        msg.textContent = '👍 不错，还有提升空间！';
    } else if (percentage >= 50) {
        msg.textContent = '💪 需要多加练习！';
    } else {
        msg.textContent = '📖 建议重新复习单词表！';
    }

    // 详细统计
    const details = $('resultDetails');
    const part3Count = state.questions.filter(q => q.type === 'part3').length;
    const part5Count = state.questions.filter(q => q.type === 'part5').length;
    const part3Correct = state.questions.filter((q, i) => {
        if (q.type !== 'part3') return false;
        return state.answers[i] === q.answer;
    }).length;
    const part5Correct = state.questions.filter((q, i) => {
        if (q.type !== 'part5') return false;
        return state.answers[i]?.toLowerCase() === q.answer.toLowerCase();
    }).length;

    details.innerHTML = `
        <div class="result-detail-item">
            <span class="result-detail-label">总题数</span>
            <span class="result-detail-value">${total} 题</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">答对</span>
            <span class="result-detail-value" style="color:#4caf50;">${state.score} 题</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">答错</span>
            <span class="result-detail-value" style="color:#f44336;">${total - state.score} 题</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">正确率</span>
            <span class="result-detail-value">${percentage.toFixed(1)}%</span>
        </div>
        ${part3Count > 0 ? `
        <div class="result-detail-item">
            <span class="result-detail-label">Part III 词汇单选</span>
            <span class="result-detail-value">${part3Correct}/${part3Count}</span>
        </div>` : ''}
        ${part5Count > 0 ? `
        <div class="result-detail-item">
            <span class="result-detail-label">Part V 句子填空</span>
            <span class="result-detail-value">${part5Correct}/${part5Count}</span>
        </div>` : ''}
    `;
}

// ========== 错题回顾 ==========
function reviewWrongAnswers() {
    if (state.wrongQuestions.length === 0) {
        alert('🎉 全部答对，没有错题！');
        return;
    }

    // 切换到错题模式
    state.questions = state.wrongQuestions.map(w => w.question);
    state.currentIndex = 0;
    state.answers = state.wrongQuestions.map(w => w.userAnswer);
    state.score = 0;
    state.totalScore = state.questions.length;

    hideElement(resultScreen);
    showElement(progressSection);
    showElement(questionCard);

    renderQuestion(0);
}

// ========== 重新开始 / 返回首页 ==========
function restartQuiz() {
    hideElement(resultScreen);
    startQuiz(state.mode);
}

function backToHome() {
    hideElement(resultScreen);
    hideElement(questionCard);
    hideElement(progressSection);
    showElement(welcomeScreen);
}

// ========== 键盘事件 ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (state.isPart5Mode && !state.isAnswered && $('answerInput') === document.activeElement) {
            submitAnswer();
        } else if (state.isAnswered && nextBtn.style.display !== 'none') {
            nextQuestion();
        }
    }

    // 数字键 1-4 选择选项
    if (!state.isAnswered && !state.isPart5Mode) {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) {
            selectOption(num - 1);
        }
    }
});
