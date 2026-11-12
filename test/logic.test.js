/**
 * 纯 Node 回归测试：不启动浏览器，覆盖判分、导航、错题重做和题库不变量。
 * 运行：node test/logic.test.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert');

const root = path.resolve(__dirname, '..');
const files = [
    'part3_questions.js',
    'part5_questions.js',
    'part5_custom_questions.js',
    'unit8_questions.js',
    'error_prone_questions.js',
    'extra_questions.js',
    'unit8_en2cn_questions.js',
    'data.js',
    'app.js',
];

const HIDDEN = new Set([
    'questionCard', 'progressSection', 'resultScreen', 'feedback',
    'prevBtn', 'submitBtn', 'nextBtn', 'fillBlankContainer',
]);

function createEl(id) {
    const el = {
        id,
        tagName: 'DIV',
        className: '',
        textContent: '',
        _html: '',
        style: { display: HIDDEN.has(id) ? 'none' : '' },
        disabled: false,
        value: '',
        placeholder: '',
        dataset: {},
        children: [],
        classList: null,
    };
    el.classList = {
        add(name) {
            const names = new Set(el.className.split(/\s+/).filter(Boolean));
            names.add(name);
            el.className = Array.from(names).join(' ');
        },
        remove(name) {
            el.className = el.className.split(/\s+/).filter((item) => item && item !== name).join(' ');
        },
        toggle(name, force) {
            const has = el.className.split(/\s+/).includes(name);
            const on = force === undefined ? !has : Boolean(force);
            if (on) el.classList.add(name);
            else el.classList.remove(name);
        },
        contains(name) {
            return el.className.split(/\s+/).includes(name);
        },
    };
    el.addEventListener = () => {};
    el.focus = () => {
        document.activeElement = el;
    };
    el.blur = () => {
        if (document.activeElement === el) document.activeElement = document.body;
    };
    el.appendChild = (child) => {
        el.children.push(child);
        return child;
    };
    el.querySelectorAll = (selector) => {
        if (selector === '.option-item') {
            return el.children.filter((child) => child.classList.contains('option-item'));
        }
        return [];
    };
    Object.defineProperty(el, 'innerHTML', {
        get() { return el._html; },
        set(value) {
            el._html = String(value);
            if (el._html === '') el.children = [];
        },
    });
    return el;
}

const elements = {};
const document = {
    body: null,
    activeElement: null,
    getElementById(id) {
        if (!elements[id]) elements[id] = createEl(id);
        return elements[id];
    },
    createElement() {
        return createEl('');
    },
    addEventListener(type, fn) {
        document._listeners[type] = fn;
    },
    _listeners: {},
};
document.body = createEl('body');
document.body.tagName = 'BODY';
document.activeElement = document.body;

const alerts = [];
const confirms = [];
let confirmResult = true;

const context = {
    document,
    alert(message) { alerts.push(String(message)); },
    confirm(message) {
        confirms.push(String(message));
        return confirmResult;
    },
    requestAnimationFrame(fn) { fn(); },
    console,
};
vm.createContext(context);
vm.runInContext(files.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n'), context, {
    filename: 'quiz-bundle.js',
});

const $ = (id) => document.getElementById(id);
let failures = 0;

function check(name, fn) {
    alerts.length = 0;
    confirms.length = 0;
    confirmResult = true;
    try {
        fn();
        console.log('  ok  ' + name);
    } catch (error) {
        failures += 1;
        console.error('  FAIL ' + name);
        console.error('       ' + error.stack);
    }
}

function key(name, target) {
    context.document._listeners.keydown({
        key: name,
        target: target || document.body,
        preventDefault() {},
    });
}

function sentence() {
    return $('questionContent').innerHTML;
}

function findQuestion(mode, snippet, attempts) {
    context.startQuiz(mode);
    for (let i = 0; i < attempts; i += 1) {
        if (sentence().includes(snippet)) return;
        $('answerInput').value = 'zzz-not-the-answer';
        context.submitAnswer();
        context.nextQuestion();
    }
    throw new Error('找不到题目：' + snippet);
}

console.log('判分规则');
check('英美拼写、连字符、空格和过去式变体', () => {
    const eq = context.answersEquivalent;
    const formsOf = (value) => Array.from(context.answerForms(value)).join(' | ');
    const expectEq = (user, expected, shouldMatch) => {
        const actual = eq(user, expected);
        if (actual !== shouldMatch) {
            throw new Error(`${user} vs ${expected}: got ${actual}\n user: ${formsOf(user)}\n expected: ${formsOf(expected)}`);
        }
    };
    expectEq('formalize', 'formalise', true);
    expectEq('empathize', 'empathise', true);
    expectEq('optimise', 'optimize', true);
    expectEq('civilisation', 'civilization', true);
    expectEq('labourer', 'laborer', true);
    expectEq('labourers', 'laborers', true);
    expectEq('fiber', 'fibre', true);
    expectEq('tumor', 'tumour', true);
    expectEq('ill advised', 'ill-advised', true);
    expectEq('illadvised', 'ill-advised', true);
    expectEq('cardiac  arrest', 'cardiac arrest', true);
    expectEq('Cardiac Arrest', 'cardiac arrest', true);
    expectEq('dove', 'dived', true);
    expectEq('spoilt.', 'spoiled', true);
    expectEq('better off', 'better', false);
    expectEq('intern', 'interns', false);
    expectEq('enterprize', 'enterprise', false);
    expectEq('promize', 'promise', false);
    expectEq('contor', 'contour', false);
    expectEq('diametre', 'diameter', false);
    assert.strictEqual(context.escapeHtml('<b>&"'), '&lt;b&gt;&amp;&quot;');
});

console.log('单选题流程');
check('首页按数字键不会给第一题预选答案', () => {
    key('2');
    context.startQuiz('part3');
    context.submitAnswer();
    assert.ok(alerts.some((item) => item.includes('请先选择')));
    assert.strictEqual($('scoreText').textContent, '得分: 0');
});

check('Enter 可以提交单选，并显示中文解析', () => {
    context.startQuiz('part3');
    assert.strictEqual($('progressFill').style.width, `${(1 / 204) * 100}%`);
    key('4');
    key('Enter');
    assert.ok($('feedback').innerHTML.includes('回答正确'));
    assert.ok($('feedback').innerHTML.includes('slipshod'));
    assert.strictEqual($('scoreText').textContent, '得分: 1');
});

check('返回上一题不会把得分再加一次', () => {
    context.startQuiz('part3');
    context.selectOption(3);
    context.submitAnswer();
    context.nextQuestion();
    context.prevQuestion();
    context.submitAnswer();
    assert.strictEqual($('scoreText').textContent, '得分: 1');
    assert.ok($('feedback').innerHTML.includes('回答正确'));
});

check('方向键可以在已答题之间移动', () => {
    context.startQuiz('part3');
    context.selectOption(3);
    context.submitAnswer();
    key('ArrowRight');
    assert.strictEqual($('progressText').textContent, '第 2 / 204 题');
    key('ArrowLeft');
    assert.strictEqual($('progressText').textContent, '第 1 / 204 题');
    assert.ok($('feedback').style.display !== 'none');
});

check('焦点在按钮上时，Enter 不会把题再往后翻一题', () => {
    context.startQuiz('part3');
    context.selectOption(3);
    context.submitAnswer();
    key('Enter', { tagName: 'BUTTON' });
    assert.strictEqual($('progressText').textContent, '第 1 / 204 题');
});

check('提前结束不把未作答算成答错', () => {
    context.startQuiz('part3');
    context.selectOption(3);
    context.submitAnswer();
    context.endQuiz();
    const details = $('resultDetails').innerHTML;
    assert.match(details, /答错[\s\S]*?>0 题</);
    assert.match(details, /未答[\s\S]*?>203 题</);
    assert.match(details, /已答正确率[\s\S]*?>100\.0%</);
    assert.ok($('scoreMessage').textContent.includes('已完成 1 题'));
    assert.strictEqual($('scoreValue').textContent, '1');
    assert.strictEqual($('scoreTotal').textContent, '/ 204');
});

check('取消结束练习会留在当前题', () => {
    context.startQuiz('part3');
    confirmResult = false;
    context.endQuiz();
    assert.strictEqual($('questionCard').style.display, '');
    assert.strictEqual($('resultScreen').style.display, 'none');
    assert.ok(confirms[0].includes('未作答'));
});

check('一道未答就结束时，答错数是 0', () => {
    context.startQuiz('unit8');
    context.endQuiz();
    const details = $('resultDetails').innerHTML;
    assert.ok(details.includes('>138 题<'));
    assert.match(details, /答错[\s\S]*?>0 题</);
    assert.match(details, /未答[\s\S]*?>138 题</);
    assert.ok($('scoreMessage').textContent.includes('还没有提交答案'));
});

check('错题重做会清空旧答案，答对后重新计分', () => {
    context.startQuiz('part3');
    context.selectOption(0);
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答错误'));
    assert.ok($('feedback').innerHTML.includes('slipshod'));
    context.endQuiz();
    context.reviewWrongAnswers();
    assert.strictEqual($('submitBtn').style.display, '');
    assert.strictEqual($('feedback').style.display, 'none');
    assert.strictEqual($('scoreText').textContent, '得分: 0');
    context.selectOption(3);
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'));
    assert.strictEqual($('scoreText').textContent, '得分: 1');
});

console.log('填空题流程');
check('书本 Part V 的 Enter 会要求先输入答案', () => {
    context.startQuiz('part5');
    key('Enter');
    assert.ok(alerts.some((item) => item.includes('请输入答案')));
    assert.ok($('answerInput').placeholder.includes('完整单词'));
});

check('答对后确认按钮不可再次提交', () => {
    context.startQuiz('part5');
    $('answerInput').value = 'Commencement';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'));
    assert.ok($('feedback').innerHTML.includes('commencement') || $('feedback').innerHTML.includes('毕业典礼') || $('feedback').innerHTML.length > 10);
    assert.strictEqual($('checkBtn').disabled, true);
    assert.strictEqual($('answerInput').disabled, true);
    assert.strictEqual($('submitBtn').style.display, 'none');
});

check('短语里已经写出的词不会被要求再输入一遍', () => {
    findQuestion('part5custom', 'credit card debt', 574);
    $('answerInput').value = 'better off';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答错误'));
    assert.ok($('feedback').innerHTML.includes('正确答案：better'));
});

check('多个空格和大小写不影响多词答案', () => {
    findQuestion('part5custom', 'diagnosed with', 574);
    assert.ok($('answerInput').placeholder.includes('空格'));
    $('answerInput').value = 'cardiac  arrest';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'));
});

check('英式拼写和连字符写法可以得分', () => {
    findQuestion('extra', 'quit your job', 102);
    $('answerInput').value = 'ill advised';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'), $('feedback').innerHTML);
});

check('formalize 可以匹配 formalise', () => {
    findQuestion('part5custom', 'signing the contract', 574);
    $('answerInput').value = 'formalize';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'), $('feedback').innerHTML);
});

check('dove 可以匹配 dived', () => {
    findQuestion('part5custom', 'lifeguard', 574);
    $('answerInput').value = 'dove';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'), $('feedback').innerHTML);
});

check('labourer 可以匹配 laborer', () => {
    findQuestion('errorprone', 'heavy bricks', 40);
    $('answerInput').value = 'labourer';
    context.submitAnswer();
    assert.ok($('feedback').innerHTML.includes('回答正确'), $('feedback').innerHTML);
});

console.log('题库不变量');
check('选项、空格、首字母和括号都对齐', () => {
    const banks = {
        part3: context.part3Questions,
        part5: context.part5Questions,
        part5custom: context.part5CustomQuestions,
        unit8: context.unit8Questions,
        error: context.errorProneQuestions,
        extra: context.extraQuestions,
        en2cn: context.unit8En2CnQuestions,
    };
    // const 绑定在拼接后的同一脚本里，但不一定挂到 context 上。
    // 上面如果取不到，改从源码重新执行一次导出。
    if (!banks.part3) {
        const exported = {};
        const exportCode = files.slice(0, 7).map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')
            + '\n;this.__banks = {part3: part3Questions, part5: part5Questions, part5custom: part5CustomQuestions, unit8: unit8Questions, error: errorProneQuestions, extra: extraQuestions, en2cn: unit8En2CnQuestions};';
        const box = {};
        vm.runInNewContext(exportCode, box);
        Object.assign(banks, box.__banks);
    }
    assert.strictEqual(banks.part3.length, 204);
    assert.strictEqual(banks.part5.length, 200);
    assert.strictEqual(banks.part5custom.length, 574);
    assert.strictEqual(banks.unit8.length, 138);
    assert.strictEqual(banks.error.length, 40);
    assert.strictEqual(banks.extra.length, 102);
    assert.strictEqual(banks.en2cn.length, 115);

    banks.part3.forEach((q, index) => {
        assert.ok(q.sentence.includes('___'), `part3[${index}] 没有挖空`);
        const flagged = q.options.map((option, optionIndex) => (option.correct ? optionIndex : -1)).filter((optionIndex) => optionIndex >= 0);
        if (flagged.length !== 1 || flagged[0] !== q.answer) {
            throw new Error(`part3[${index}] flags=${JSON.stringify(flagged)} answer=${JSON.stringify(q.answer)} option=${JSON.stringify(q.options[q.answer])}`);
        }
    });

    ['part5', 'part5custom', 'unit8', 'error', 'extra'].forEach((name) => {
        banks[name].forEach((q, index) => {
            const blanks = q.sentence.match(/_+/g) || [];
            const words = String(q.answer).trim().split(/\s+/);
            assert.strictEqual(blanks.length, words.length, `${name}[${index}] 空格数和答案词数不一致：${q.answer} / ${q.sentence}`);
            const letters = (q.sentence.match(/([A-Za-z])_+/g) || []).map((item) => item[0].toLowerCase());
            assert.deepStrictEqual(letters, words.map((word) => word[0].toLowerCase()), `${name}[${index}] 首字母不匹配：${q.answer}`);
            assert.ok(String(q.answer).toLowerCase().startsWith(String(q.hint.letter).toLowerCase()), `${name}[${index}] 提示字母不匹配`);
            const visible = q.sentence.replace(/[A-Za-z]?_+/g, ' ');
            const leaked = new RegExp('\\b' + String(q.answer).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
            assert.ok(!leaked.test(visible), `${name}[${index}] 句子里直接出现了答案 ${q.answer}`);
        });
    });

    banks.en2cn.forEach((q, index) => {
        q.options.concat([{ text: q.explanation }]).forEach((option) => {
            const text = option.text || '';
            const open = (text.match(/[（(]/g) || []).length;
            const close = (text.match(/[）)]/g) || []).length;
            assert.strictEqual(open, close, `en2cn[${index}] 括号不成对：${text}`);
        });
    });
    const glosses = banks.en2cn.flatMap((q) => q.options.map((option) => option.text));
    assert.ok(glosses.includes('（鸟）鸣啭'));
    assert.ok(!glosses.some((text) => text.includes('鸟）鸣啭') && !text.includes('（鸟）鸣啭')));
});

if (failures > 0) {
    console.error(`\n${failures} 个测试失败`);
    process.exit(1);
}
console.log('\n全部通过');
