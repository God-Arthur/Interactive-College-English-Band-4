/**
 * Book III 期末复习答题系统 - 主逻辑
 */

// ========== 状态管理 ==========
const state = {
    mode: '',
    questions: [],
    currentIndex: 0,
    answers: [],
    score: 0,
    wrongQuestions: [],
    isAnswered: false,
    isPart5Mode: false,
};

let selectedOption = -1;

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
const checkBtn = $('checkBtn');
const submitBtn = $('submitBtn');
const nextBtn = $('nextBtn');
const prevBtn = $('prevBtn');
const feedback = $('feedback');
const progressText = $('progressText');
const progressFill = $('progressFill');
const scoreText = $('scoreText');
const scoreValue = $('scoreValue');
const scoreTotal = $('scoreTotal');

// 同一词条的英美拼写、规则变化和常见不规则过去式。
const SPELLING_PAIRS = [
    ['labour', 'labor'],
    ['labourer', 'laborer'],
    ['colour', 'color'],
    ['favour', 'favor'],
    ['honour', 'honor'],
    ['behaviour', 'behavior'],
    ['neighbour', 'neighbor'],
    ['flavour', 'flavor'],
    ['harbour', 'harbor'],
    ['humour', 'humor'],
    ['rumour', 'rumor'],
    ['vapour', 'vapor'],
    ['armour', 'armor'],
    ['favourite', 'favorite'],
    ['tumour', 'tumor'],
    ['fibre', 'fiber'],
    ['centre', 'center'],
    ['metre', 'meter'],
    ['litre', 'liter'],
    ['theatre', 'theater'],
    ['catalogue', 'catalog'],
    ['dialogue', 'dialog'],
    ['defence', 'defense'],
    ['offence', 'offense'],
    ['grey', 'gray'],
    ['analyse', 'analyze'],
    ['dived', 'dove'],
    ['spoiled', 'spoilt'],
    ['learned', 'learnt'],
    ['burned', 'burnt'],
    ['dreamed', 'dreamt'],
    ['leaped', 'leapt'],
    ['spelled', 'spelt'],
    ['kneeled', 'knelt'],
    ['smelled', 'smelt'],
    ['spilled', 'spilt'],
];

// 这些词以 -ise 结尾，但没有对应的 -ize 拼法。
const ISE_BLOCK = new Set([
    'promise', 'premise', 'expertise', 'concise', 'precise', 'paradise', 'treatise',
    'compromise', 'advise', 'devise', 'exercise', 'otherwise', 'likewise', 'clockwise',
    'arise', 'sunrise', 'enterprise', 'franchise', 'demise', 'disguise', 'revise',
    'supervise', 'improvise', 'televise', 'advertise', 'comprise', 'reprise', 'apprise',
    'excise', 'surprise', 'chemise', 'anise', 'mortise', 'valise',
]);

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

function quizActive() {
    return questionCard.style.display !== 'none';
}

function releaseHiddenFocus() {
    const active = document.activeElement;
    if (!active || active === document.body || active === document.documentElement) return;
    if (active.offsetParent === null) active.blur();
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function normalizeAnswer(raw) {
    return String(raw)
        .replace(/[\u2018\u2019\u2032]/g, "'")
        .replace(/\u3000/g, ' ')
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:。！？；：、]+$/g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*-\s*/g, '-')
        .trim();
}

function expandToken(token) {
    const forms = new Set([token]);
    SPELLING_PAIRS.forEach(([british, american]) => {
        if (token === british) forms.add(american);
        else if (token === american) forms.add(british);
        else if (token === british + 's') forms.add(american + 's');
        else if (token === american + 's') forms.add(british + 's');
    });

    if (token.length >= 7 && !ISE_BLOCK.has(token)) {
        if (token.endsWith('isation')) forms.add(token.slice(0, -7) + 'ization');
        else if (token.endsWith('ization')) forms.add(token.slice(0, -7) + 'isation');
        else if (token.endsWith('ise')) forms.add(token.slice(0, -3) + 'ize');
        else if (token.endsWith('ize')) forms.add(token.slice(0, -3) + 'ise');
        else if (token.endsWith('yse')) forms.add(token.slice(0, -3) + 'yze');
        else if (token.endsWith('yze')) forms.add(token.slice(0, -3) + 'yse');
    }
    return forms;
}

function answerForms(raw) {
    const tokens = normalizeAnswer(raw).split(' ').filter(Boolean);
    let combos = [[]];
    tokens.forEach((token) => {
        const variants = Array.from(expandToken(token));
        const next = [];
        combos.forEach((combo) => {
            variants.forEach((variant) => next.push(combo.concat(variant)));
        });
        combos = next;
    });

    const forms = new Set();
    combos.forEach((combo) => {
        const spaced = combo.join(' ');
        const hyphenAsSpace = spaced.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
        forms.add(spaced);
        forms.add(hyphenAsSpace);
        forms.add(hyphenAsSpace.replace(/[\s-]/g, ''));
    });
    return forms;
}

function answersEquivalent(user, expected) {
    // 只放宽标准答案，不把用户输入互相推导，避免 enterprize 这类错拼被认成 enterprise。
    const expectedForms = answerForms(expected);
    const normalized = normalizeAnswer(user);
    const hyphenAsSpace = normalized.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const compact = hyphenAsSpace.replace(/[\s-]/g, '');
    return expectedForms.has(normalized) || expectedForms.has(hyphenAsSpace) || expectedForms.has(compact);
}

function isChoiceQuestion(q) {
    return q.type === 'part3' || q.type === 'en2cn';
}

function isQuestionCorrect(q, userAnswer) {
    if (userAnswer === undefined || userAnswer === null || userAnswer === '') return false;
    if (isChoiceQuestion(q)) return userAnswer === q.answer;
    return answersEquivalent(userAnswer, q.answer);
}

function correctDisplay(q) {
    if (isChoiceQuestion(q)) {
        const option = q.options && q.options[q.answer];
        return option ? option.text : '';
    }
    return q.answer == null ? '' : String(q.answer);
}

function recomputeScore() {
    state.score = state.questions.reduce((sum, q, index) => {
        return sum + (isQuestionCorrect(q, state.answers[index]) ? 1 : 0);
    }, 0);
    scoreText.textContent = `得分: ${state.score}`;
}

function feedbackMarkup(isCorrect, correctText, explanation) {
    const explanationHtml = explanation
        ? `<div class="feedback-explanation">${escapeHtml(explanation)}</div>`
        : '';
    if (isCorrect) return `✅ 回答正确！${explanationHtml}`;
    return `❌ 回答错误<br><span class="correct-answer">正确答案：${escapeHtml(correctText)}</span>${explanationHtml}`;
}

function renderSentence(sentence) {
    return escapeHtml(sentence).replace(/___/g, '<span class="blank-marker">______</span>');
}

// ========== 初始化 ==========
function startQuiz(mode) {
    state.mode = mode;
    state.currentIndex = 0;
    state.answers = [];
    state.score = 0;
    state.wrongQuestions = [];
    state.isAnswered = false;
    selectedOption = -1;

    let questions = [];
    if (mode === 'part3') {
        questions = quizData.vocabulary.map(q => ({ ...q, type: 'part3' }));
    } else if (mode === 'part5') {
        questions = quizData.sentenceCompletion.map(q => ({ ...q, type: 'part5' }));
    } else if (mode === 'part5custom') {
        questions = shuffleArray(quizData.sentenceCompletionCustom.map(q => ({ ...q, type: 'part5' })));
    } else if (mode === 'unit8') {
        questions = shuffleArray(quizData.unit8.map(q => ({ ...q, type: 'part5' })));
    } else if (mode === 'errorprone') {
        questions = shuffleArray(quizData.errorProne.map(q => ({ ...q, type: 'part5' })));
    } else if (mode === 'extra') {
        questions = shuffleArray(quizData.extra.map(q => ({ ...q, type: 'part5' })));
    } else if (mode === 'unit8en2cn') {
        questions = shuffleArray(quizData.unit8En2Cn.map(q => ({ ...q, type: 'en2cn' })));
    }

    if (questions.length === 0) {
        alert('暂无题目数据，请先在 data.js 中填入题目！');
        return;
    }

    state.questions = questions;
    state.isPart5Mode = questions[0].type === 'part5';

    hideElement(welcomeScreen);
    hideElement(resultScreen);
    showElement(questionCard);
    showElement(progressSection);
    renderQuestion(0);
}

// ========== 渲染题目 ==========
function renderQuestion(index) {
    const q = state.questions[index];
    if (!q) return;

    selectedOption = -1;
    state.isAnswered = false;
    state.isPart5Mode = q.type === 'part5';
    hideElement(feedback);
    hideElement(nextBtn);
    hideElement(submitBtn);

    if (index > 0) showElement(prevBtn);
    else hideElement(prevBtn);

    const total = state.questions.length;
    progressText.textContent = `第 ${index + 1} / ${total} 题`;
    progressFill.style.width = `${((index + 1) / total) * 100}%`;
    scoreText.textContent = `得分: ${state.score}`;

    if (q.type === 'part3') {
        questionType.textContent = 'Part III · 词汇单选';
        questionType.className = 'question-type part3';
    } else if (q.type === 'en2cn') {
        questionType.textContent = 'Unit 8 · 英文选中文';
        questionType.className = 'question-type part3';
    } else {
        questionType.textContent = 'Part V · 句子填空';
        questionType.className = 'question-type part5';
    }
    questionNumber.textContent = `第 ${index + 1} 题`;

    if (q.type === 'en2cn') {
        questionContent.innerHTML = `<div class="en2cn-word">${escapeHtml(q.word || '')}</div>`;
    } else {
        questionContent.innerHTML = renderSentence(q.sentence || '');
    }

    const alreadyAnswered = state.answers[index] !== undefined;
    if (isChoiceQuestion(q)) {
        renderOptions(q);
        hideElement(fillBlankContainer);
        if (!alreadyAnswered) showElement(submitBtn);
    } else {
        renderFillBlank(q, !alreadyAnswered);
        hideElement(optionsContainer);
    }

    if (alreadyAnswered) restoreAnswer(index, q);

    questionCard.style.animation = 'none';
    requestAnimationFrame(() => {
        questionCard.style.animation = 'fadeIn 0.3s ease';
    });
    releaseHiddenFocus();
}

// ========== 选择题 ==========
function renderOptions(q) {
    showElement(optionsContainer);
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    (q.options || []).forEach((opt, i) => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.dataset.index = i;
        const letter = letters[i] || String.fromCharCode(65 + i);
        div.innerHTML = `
            <span class="option-letter">${letter}</span>
            <span class="option-text">${escapeHtml(opt.text)}</span>
        `;
        div.addEventListener('click', () => selectOption(i));
        optionsContainer.appendChild(div);
    });
}

function selectOption(index) {
    if (state.isAnswered || !quizActive()) return;
    const q = state.questions[state.currentIndex];
    if (!q || !isChoiceQuestion(q) || !q.options || index < 0 || index >= q.options.length) return;

    selectedOption = index;
    const items = optionsContainer.querySelectorAll('.option-item');
    items.forEach((item, i) => {
        item.classList.toggle('selected', i === index);
    });
}

// ========== 填空题 ==========
function renderFillBlank(q, shouldFocus) {
    showElement(fillBlankContainer);
    const hint = q.hint || { letter: '', chinese: '' };
    hintBox.innerHTML = `
        <span class="hint-letter">${escapeHtml(hint.letter || '')}</span>
        <span>${escapeHtml(hint.chinese || '')}</span>
    `;
    const blankCount = (String(q.sentence || '').match(/_+/g) || []).length;
    answerInput.placeholder = blankCount > 1
        ? '按顺序填写所有空，词与词之间用空格分开'
        : '请输入完整单词...';
    answerInput.value = '';
    answerInput.className = '';
    answerInput.disabled = false;
    checkBtn.disabled = false;
    if (shouldFocus) answerInput.focus();
}

function checkFillAnswer() {
    if (state.isAnswered) return;
    submitAnswer();
}

// ========== 提交答案 ==========
function submitAnswer() {
    if (!quizActive() || state.isAnswered) return;

    const q = state.questions[state.currentIndex];
    let userAnswer;

    if (isChoiceQuestion(q)) {
        if (selectedOption < 0 || !q.options || selectedOption >= q.options.length) {
            alert('请先选择一个选项！');
            return;
        }
        userAnswer = selectedOption;
    } else {
        userAnswer = answerInput.value.trim();
        if (!userAnswer) {
            alert('请输入答案！');
            return;
        }
    }

    const isCorrect = isQuestionCorrect(q, userAnswer);
    state.isAnswered = true;
    state.answers[state.currentIndex] = userAnswer;
    if (!isCorrect && !state.wrongQuestions.some(item => item.index === state.currentIndex)) {
        state.wrongQuestions.push({
            index: state.currentIndex,
            question: q,
            userAnswer,
            correctAnswer: correctDisplay(q),
        });
    }

    showElement(feedback);
    feedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
    feedback.innerHTML = feedbackMarkup(isCorrect, correctDisplay(q), q.explanation);
    markAnswer(q, userAnswer, isCorrect);
    recomputeScore();

    hideElement(submitBtn);
    showElement(nextBtn);
    nextBtn.textContent = state.currentIndex < state.questions.length - 1 ? '下一题 →' : '查看结果';
}

function markAnswer(q, userAnswer, isCorrect) {
    if (isChoiceQuestion(q)) {
        const items = optionsContainer.querySelectorAll('.option-item');
        items.forEach((item, i) => {
            item.style.cursor = 'default';
            if (i === q.answer) item.classList.add('correct');
            if (i === userAnswer && !isCorrect) item.classList.add('incorrect');
            if (i === userAnswer) item.classList.add('selected');
        });
        return;
    }

    answerInput.value = userAnswer;
    answerInput.className = isCorrect ? 'correct' : 'incorrect';
    answerInput.disabled = true;
    checkBtn.disabled = true;
    if (document.activeElement === answerInput) answerInput.blur();
}

function nextQuestion() {
    if (!quizActive() || !state.isAnswered) return;
    state.currentIndex += 1;
    selectedOption = -1;
    if (state.currentIndex >= state.questions.length) {
        showResult();
        return;
    }
    renderQuestion(state.currentIndex);
}

function prevQuestion() {
    if (!quizActive() || state.currentIndex <= 0) return;
    state.currentIndex -= 1;
    selectedOption = -1;
    renderQuestion(state.currentIndex);
}

function restoreAnswer(index, q) {
    const userAnswer = state.answers[index];
    if (userAnswer === undefined) return;

    state.isAnswered = true;
    hideElement(submitBtn);
    showElement(nextBtn);
    const isCorrect = isQuestionCorrect(q, userAnswer);
    if (isChoiceQuestion(q)) selectedOption = userAnswer;
    markAnswer(q, userAnswer, isCorrect);

    showElement(feedback);
    feedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
    feedback.innerHTML = feedbackMarkup(isCorrect, correctDisplay(q), q.explanation);
    nextBtn.textContent = state.currentIndex < state.questions.length - 1 ? '下一题 →' : '查看结果';
}

// ========== 结果 ==========
function showResult() {
    recomputeScore();
    hideElement(questionCard);
    hideElement(progressSection);
    showElement(resultScreen);

    const total = state.questions.length;
    let correct = 0;
    let wrong = 0;
    let unanswered = 0;
    state.questions.forEach((q, index) => {
        if (state.answers[index] === undefined) unanswered += 1;
        else if (isQuestionCorrect(q, state.answers[index])) correct += 1;
        else wrong += 1;
    });

    scoreValue.textContent = String(correct);
    scoreTotal.textContent = `/ ${total}`;

    const graded = correct + wrong;
    const percentage = graded === 0 ? 0 : (correct / graded) * 100;
    const msg = $('scoreMessage');
    if (graded === 0) {
        msg.textContent = '还没有提交答案。';
    } else if (unanswered > 0) {
        msg.textContent = `已完成 ${graded} 题，已答正确率 ${percentage.toFixed(1)}%。`;
    } else if (percentage >= 90) {
        msg.textContent = '🌟 优秀！继续保持！';
    } else if (percentage >= 70) {
        msg.textContent = '👍 不错，还有提升空间！';
    } else if (percentage >= 50) {
        msg.textContent = '💪 需要多加练习！';
    } else {
        msg.textContent = '📖 建议重新复习单词表！';
    }

    const part3 = countByType('part3');
    const part5 = countByType('part5');
    const en2cn = countByType('en2cn');
    const details = $('resultDetails');
    details.innerHTML = `
        <div class="result-detail-item">
            <span class="result-detail-label">总题数</span>
            <span class="result-detail-value">${total} 题</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">已答</span>
            <span class="result-detail-value">${graded} 题</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">答对</span>
            <span class="result-detail-value" style="color:#4caf50;">${correct} 题</span>
        </div>
        <div class="result-detail-item">
            <span class="result-detail-label">答错</span>
            <span class="result-detail-value" style="color:#f44336;">${wrong} 题</span>
        </div>
        ${unanswered > 0 ? `
        <div class="result-detail-item">
            <span class="result-detail-label">未答</span>
            <span class="result-detail-value">${unanswered} 题</span>
        </div>` : ''}
        <div class="result-detail-item">
            <span class="result-detail-label">${unanswered > 0 ? '已答正确率' : '正确率'}</span>
            <span class="result-detail-value">${percentage.toFixed(1)}%</span>
        </div>
        ${part3.total ? detailRow('Part III 词汇单选', part3) : ''}
        ${part5.total ? detailRow('Part V 句子填空', part5) : ''}
        ${en2cn.total ? detailRow('英文选中文', en2cn) : ''}
    `;
}

function countByType(type) {
    let total = 0;
    let correct = 0;
    state.questions.forEach((q, index) => {
        if (q.type !== type) return;
        total += 1;
        if (isQuestionCorrect(q, state.answers[index])) correct += 1;
    });
    return { total, correct };
}

function detailRow(label, counts) {
    return `
        <div class="result-detail-item">
            <span class="result-detail-label">${label}</span>
            <span class="result-detail-value">${counts.correct}/${counts.total}</span>
        </div>
    `;
}

function reviewWrongAnswers() {
    if (state.wrongQuestions.length === 0) {
        alert('🎉 全部答对，没有错题！');
        return;
    }

    state.questions = state.wrongQuestions.map(item => item.question);
    state.wrongQuestions = [];
    state.answers = [];
    state.currentIndex = 0;
    state.score = 0;
    state.isAnswered = false;
    selectedOption = -1;

    hideElement(resultScreen);
    showElement(progressSection);
    showElement(questionCard);
    renderQuestion(0);
}

function restartQuiz() {
    hideElement(resultScreen);
    startQuiz(state.mode);
}

function backToHome() {
    hideElement(resultScreen);
    hideElement(questionCard);
    hideElement(progressSection);
    showElement(welcomeScreen);
    selectedOption = -1;
}

function endQuiz() {
    if (!quizActive()) return;
    const total = state.questions.length;
    let answered = 0;
    for (let i = 0; i < total; i += 1) {
        if (state.answers[i] !== undefined) answered += 1;
    }
    if (answered < total) {
        const remaining = total - answered;
        const confirmed = confirm(`还有 ${remaining} 题未作答。结束练习后，未作答的题不会计入答错。确定结束并查看结果吗？`);
        if (!confirmed) return;
    }
    showResult();
}

// ========== 键盘 ==========
document.addEventListener('keydown', (e) => {
    if (!quizActive()) return;
    const typing = document.activeElement === answerInput;

    if (e.key === 'Enter') {
        if (e.target && e.target.tagName === 'BUTTON') return;
        if (!state.isAnswered) {
            e.preventDefault();
            submitAnswer();
        } else if (nextBtn.style.display !== 'none') {
            e.preventDefault();
            nextQuestion();
        }
        return;
    }

    if (!typing && e.key === 'ArrowLeft' && prevBtn.style.display !== 'none') {
        e.preventDefault();
        prevQuestion();
    }
    if (!typing && e.key === 'ArrowRight' && state.isAnswered && nextBtn.style.display !== 'none') {
        e.preventDefault();
        nextQuestion();
    }

    if (!typing && !state.isAnswered && !state.isPart5Mode) {
        const num = parseInt(e.key, 10);
        if (num >= 1 && num <= 4) selectOption(num - 1);
    }
});
