/**
 * 知识赛题库演练系统
 * 纯前端单页应用
 */

const app = {
    // 状态
    state: {
        currentPage: 'home',
        practiceFilter: 'all',
        practiceAnswers: {}, // { questionId: 'A' 或 ['A','B'] }
        practiceSubmitted: new Set(), // 记录已提交的题目key
        testQuestions: [],   // 抽选的题目
        testAnswers: {},     // 考试答案
        testCurrentIndex: 0,
        testMarked: new Set(),
        testStartTime: null,
        testTimer: null,
        testTimeLeft: 120 * 60, // 120分钟 = 7200秒
    },

    // 初始化
    init() {
        this.loadPracticeProgress();
        this.renderHistory();
        this.renderHomeStats();
        document.getElementById('total-count').textContent = QUESTIONS.length;
    },

    renderHomeStats() {
        const stats = { single: 0, multiple: 0, judge: 0, case: 0 };
        QUESTIONS.forEach(q => { if (stats[q.type] !== undefined) stats[q.type]++; });
        const typeNames = { single: '单选题', multiple: '多选题', judge: '判断题', case: '案例分析题' };
        const el = document.getElementById('home-stats');
        if (el) {
            el.innerHTML = Object.entries(stats).map(([type, count]) => `
                <span class="stat-pill">${typeNames[type]}: ${count}道</span>
            `).join('');
        }
    },

    // 页面切换
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
        this.state.currentPage = pageId;
        window.scrollTo(0, 0);
    },

    goHome() {
        this.showPage('page-home');
        this.renderHistory();
    },

    // ========== 演练模式 ==========
    startPractice() {
        this.showPage('page-practice');
        this.filterPractice('all');
    },

    filterPractice(type) {
        this.state.practiceFilter = type;
        document.querySelectorAll('.filter-tabs .tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.filter === type);
        });
        this.renderPracticeList();
    },

    getFilteredQuestions() {
        if (this.state.practiceFilter === 'all') return QUESTIONS;
        return QUESTIONS.filter(q => q.type === this.state.practiceFilter);
    },

    renderPracticeList() {
        const list = document.getElementById('practice-list');
        const questions = this.getFilteredQuestions();
        const answeredCount = questions.filter(q => this.state.practiceAnswers[this.getAnswerKey(q)] !== undefined).length;

        document.getElementById('practice-progress').style.width = `${(answeredCount / questions.length) * 100}%`;
        document.getElementById('practice-progress-text').textContent = `${answeredCount} / ${questions.length}`;

        list.innerHTML = questions.map((q, idx) => this.renderPracticeCard(q, idx + 1)).join('');
    },

    getAnswerKey(q) {
        return `${q.set}-${q.id}`;
    },

    renderPracticeCard(q, displayNum) {
        const key = this.getAnswerKey(q);
        const savedAnswer = this.state.practiceAnswers[key];
        const typeLabels = { single: '单选', multiple: '多选', judge: '判断', case: '案例' };
        const isSubmitted = this.state.practiceSubmitted.has(key);
        const isCorrect = isSubmitted ? this.checkAnswer(q, savedAnswer) : null;

        let optionsHtml = '';
        const letters = Object.keys(q.options).sort();

        if (q.type === 'single' || q.type === 'judge') {
            optionsHtml = letters.map(letter => {
                const isSelected = savedAnswer === letter;
                const isCorrectAnswer = q.answer === letter;
                let cls = 'option-item';
                if (isSubmitted) {
                    cls += ' disabled';
                    if (isCorrectAnswer) cls += ' correct';
                    else if (isSelected) cls += ' wrong';
                } else if (isSelected) {
                    cls += ' selected-correct';
                }
                return `
                    <div class="${cls}" onclick="app.selectPracticeOption('${key}', '${letter}', false)">
                        <input type="radio" name="${key}" value="${letter}" ${isSelected ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''}>
                        <label><strong>${letter}.</strong> ${q.options[letter]}</label>
                    </div>
                `;
            }).join('');
        } else {
            const selectedArr = Array.isArray(savedAnswer) ? savedAnswer : (savedAnswer ? [savedAnswer] : []);
            optionsHtml = letters.map(letter => {
                const isSelected = selectedArr.includes(letter);
                const isCorrectAnswer = (q.answer_multi || []).includes(letter) || q.answer === letter;
                let cls = 'option-item';
                if (isSubmitted) {
                    cls += ' disabled';
                    if (isCorrectAnswer) cls += ' correct';
                    else if (isSelected) cls += ' wrong';
                } else if (isSelected) {
                    cls += ' selected-correct';
                }
                return `
                    <div class="${cls}" onclick="app.selectPracticeOption('${key}', '${letter}', true)">
                        <input type="checkbox" ${isSelected ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''}>
                        <label><strong>${letter}.</strong> ${q.options[letter]}</label>
                    </div>
                `;
            }).join('');
        }

        let feedbackHtml = '';
        if (isSubmitted) {
            const correctAnswerText = q.answer_multi && q.answer_multi.length > 0
                ? q.answer_multi.join('、')
                : q.answer;
            const analysis = this.generateAnalysis(q);
            if (isCorrect) {
                feedbackHtml = `
                    <div class="feedback correct">
                        <div class="answer-label">回答正确！</div>
                        <div>正确答案：${correctAnswerText}</div>
                        <div style="margin-top:8px;opacity:0.9">${analysis}</div>
                    </div>
                `;
            } else {
                feedbackHtml = `
                    <div class="feedback wrong">
                        <div class="answer-label">回答错误</div>
                        <div>你的答案：${Array.isArray(savedAnswer) ? savedAnswer.join('、') : savedAnswer}</div>
                        <div>正确答案：${correctAnswerText}</div>
                        <div style="margin-top:8px;opacity:0.9">${analysis}</div>
                    </div>
                `;
            }
        }

        return `
            <div class="question-card" id="practice-card-${key}">
                <div class="question-header">
                    <span class="question-number">第 ${displayNum} 题</span>
                    <span class="question-type">${typeLabels[q.type]} · ${q.score}分</span>
                </div>
                <div class="question-text">${q.question}</div>
                <div class="options-list">
                    ${optionsHtml}
                </div>
                ${!isSubmitted ? `<button class="submit-btn" onclick="app.submitPracticeAnswer('${key}')">提交答案</button>` : ''}
                ${feedbackHtml}
            </div>
        `;
    },

    selectPracticeOption(key, letter, isMulti) {
        if (this.state.practiceSubmitted.has(key)) return;

        if (isMulti) {
            const current = this.state.practiceAnswers[key];
            let arr = Array.isArray(current) ? [...current] : (current ? [current] : []);
            if (arr.includes(letter)) {
                arr = arr.filter(l => l !== letter);
            } else {
                arr.push(letter);
            }
            arr.sort();
            this.state.practiceAnswers[key] = arr.length > 0 ? arr : undefined;
        } else {
            this.state.practiceAnswers[key] = letter;
        }
        this.renderPracticeList();
    },

    submitPracticeAnswer(key) {
        const answer = this.state.practiceAnswers[key];
        if (answer === undefined) {
            alert('请先选择一个答案');
            return;
        }
        this.state.practiceSubmitted.add(key);
        this.savePracticeProgress();
        this.renderPracticeList();

        // 滚动到反馈区域
        setTimeout(() => {
            const card = document.getElementById(`practice-card-${key}`);
            if (card) {
                const feedback = card.querySelector('.feedback');
                if (feedback) feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    },

    checkAnswer(q, userAnswer) {
        if (q.type === 'single' || q.type === 'judge') {
            return userAnswer === q.answer;
        } else {
            const correctArr = q.answer_multi || [q.answer];
            const userArr = Array.isArray(userAnswer) ? userAnswer : [userAnswer];
            return correctArr.length === userArr.length && correctArr.every(a => userArr.includes(a));
        }
    },

    generateAnalysis(q) {
        const correctLetters = q.answer_multi && q.answer_multi.length > 0 ? q.answer_multi : [q.answer];
        const correctTexts = correctLetters.map(l => `${l}) ${q.options[l]}`).join('；');
        const typeNames = { single: '单选题', multiple: '多选题', judge: '判断题', case: '案例分析题' };

        if (q.type === 'judge') {
            const isCorrect = q.answer === 'A';
            return `【解析】这是一道${typeNames[q.type]}。题目描述${isCorrect ? '正确' : '错误'}，因此正确答案是 ${q.answer === 'A' ? '正确' : '错误'}。`;
        }

        if (q.type === 'single') {
            return `【解析】这是一道${typeNames[q.type]}。正确答案是 ${q.answer}，因为 ${q.options[q.answer]} 是符合题意的最佳选项。`;
        }

        return `【解析】这是一道${typeNames[q.type]}。正确答案是 ${correctLetters.join('、')}，因为：${correctTexts}。`;
    },

    savePracticeProgress() {
        localStorage.setItem('practiceAnswers', JSON.stringify(this.state.practiceAnswers));
        localStorage.setItem('practiceSubmitted', JSON.stringify([...this.state.practiceSubmitted]));
    },

    loadPracticeProgress() {
        try {
            const saved = localStorage.getItem('practiceAnswers');
            if (saved) this.state.practiceAnswers = JSON.parse(saved);
            const submitted = localStorage.getItem('practiceSubmitted');
            if (submitted) this.state.practiceSubmitted = new Set(JSON.parse(submitted));
        } catch (e) { console.error('加载进度失败', e); }
    },

    resetPractice() {
        if (!confirm('确定要重置所有演练进度吗？此操作不可恢复。')) return;
        this.state.practiceAnswers = {};
        this.state.practiceSubmitted = new Set();
        localStorage.removeItem('practiceAnswers');
        localStorage.removeItem('practiceSubmitted');
        this.renderPracticeList();
    },

    // ========== 测试模式 ==========
    startTest() {
        this.showPage('page-test-start');
    },

    beginTest() {
        // 随机抽取100道题，尽量均衡各题型
        const byType = { single: [], multiple: [], judge: [], case: [] };
        QUESTIONS.forEach(q => { if (byType[q.type]) byType[q.type].push(q); });

        const pick = (arr, n) => {
            const shuffled = [...arr].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, n);
        };

        // 按比例抽取：单选30, 多选30, 判断20, 案例10 (理想比例)
        // 实际按可用题目数量调整
        let testQs = [];
        const targets = { single: 35, multiple: 35, judge: 20, case: 10 };
        for (const [type, target] of Object.entries(targets)) {
            const available = byType[type];
            const count = Math.min(target, available.length);
            testQs = testQs.concat(pick(available, count));
        }

        // 如果不够100题，从剩余题目中补充
        if (testQs.length < 100) {
            const usedIds = new Set(testQs.map(q => this.getAnswerKey(q)));
            const remaining = QUESTIONS.filter(q => !usedIds.has(this.getAnswerKey(q)));
            const need = 100 - testQs.length;
            testQs = testQs.concat(pick(remaining, need));
        }

        // 打乱顺序
        testQs = testQs.sort(() => Math.random() - 0.5).slice(0, 100);

        this.state.testQuestions = testQs;
        this.state.testAnswers = {};
        this.state.testCurrentIndex = 0;
        this.state.testMarked = new Set();
        this.state.testTimeLeft = 120 * 60;
        this.state.testStartTime = Date.now();

        this.showPage('page-test-exam');
        this.renderExamNav();
        this.renderExamQuestion();
        this.startTimer();
    },

    startTimer() {
        if (this.state.testTimer) clearInterval(this.state.testTimer);
        this.updateTimerDisplay();
        this.state.testTimer = setInterval(() => {
            this.state.testTimeLeft--;
            this.updateTimerDisplay();
            if (this.state.testTimeLeft <= 0) {
                clearInterval(this.state.testTimer);
                this.submitTest(true);
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const m = Math.floor(this.state.testTimeLeft / 60);
        const s = this.state.testTimeLeft % 60;
        const el = document.getElementById('exam-timer');
        if (el) el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
    },

    renderExamNav() {
        const nav = document.getElementById('exam-nav');
        nav.innerHTML = this.state.testQuestions.map((q, idx) => {
            const key = this.getAnswerKey(q);
            const answered = this.state.testAnswers[key] !== undefined;
            const marked = this.state.testMarked.has(idx);
            let cls = 'nav-dot';
            if (idx === this.state.testCurrentIndex) cls += ' current';
            if (answered) cls += ' answered';
            if (marked) cls += ' marked';
            return `<div class="${cls}" onclick="app.goToQuestion(${idx})">${idx + 1}</div>`;
        }).join('');
    },

    renderExamQuestion() {
        const idx = this.state.testCurrentIndex;
        const q = this.state.testQuestions[idx];
        const key = this.getAnswerKey(q);
        const savedAnswer = this.state.testAnswers[key];
        const typeLabels = { single: '单选题', multiple: '多选题', judge: '判断题', case: '案例分析题' };

        document.getElementById('exam-progress').textContent = `${idx + 1} / ${this.state.testQuestions.length}`;

        const letters = Object.keys(q.options).sort();
        let optionsHtml = '';

        if (q.type === 'single' || q.type === 'judge') {
            optionsHtml = letters.map(letter => {
                const isSelected = savedAnswer === letter;
                return `
                    <div class="option-item ${isSelected ? 'selected-correct' : ''}" onclick="app.selectExamOption('${key}', '${letter}', false)">
                        <input type="radio" name="${key}" ${isSelected ? 'checked' : ''}>
                        <label><strong>${letter}.</strong> ${q.options[letter]}</label>
                    </div>
                `;
            }).join('');
        } else {
            const selectedArr = Array.isArray(savedAnswer) ? savedAnswer : (savedAnswer ? [savedAnswer] : []);
            optionsHtml = letters.map(letter => {
                const isSelected = selectedArr.includes(letter);
                return `
                    <div class="option-item ${isSelected ? 'selected-correct' : ''}" onclick="app.selectExamOption('${key}', '${letter}', true)">
                        <input type="checkbox" ${isSelected ? 'checked' : ''}>
                        <label><strong>${letter}.</strong> ${q.options[letter]}</label>
                    </div>
                `;
            }).join('');
        }

        document.getElementById('exam-question').innerHTML = `
            <div class="question-card">
                <div class="question-header">
                    <span class="question-number">第 ${idx + 1} 题 / 共 ${this.state.testQuestions.length} 题</span>
                    <span class="question-type">${typeLabels[q.type]} · ${q.score}分</span>
                </div>
                <div class="question-text">${q.question}</div>
                <div class="options-list">${optionsHtml}</div>
            </div>
        `;

        document.getElementById('btn-prev').disabled = idx === 0;
        document.getElementById('btn-next').disabled = idx === this.state.testQuestions.length - 1;
        document.getElementById('btn-mark').classList.toggle('active', this.state.testMarked.has(idx));
    },

    selectExamOption(key, letter, isMulti) {
        if (isMulti) {
            const current = this.state.testAnswers[key];
            let arr = Array.isArray(current) ? [...current] : (current ? [current] : []);
            if (arr.includes(letter)) {
                arr = arr.filter(l => l !== letter);
            } else {
                arr.push(letter);
            }
            arr.sort();
            this.state.testAnswers[key] = arr.length > 0 ? arr : undefined;
        } else {
            this.state.testAnswers[key] = letter;
        }
        this.renderExamNav();
        this.renderExamQuestion();
    },

    goToQuestion(idx) {
        this.state.testCurrentIndex = idx;
        this.renderExamNav();
        this.renderExamQuestion();
    },

    prevQuestion() {
        if (this.state.testCurrentIndex > 0) {
            this.goToQuestion(this.state.testCurrentIndex - 1);
        }
    },

    nextQuestion() {
        if (this.state.testCurrentIndex < this.state.testQuestions.length - 1) {
            this.goToQuestion(this.state.testCurrentIndex + 1);
        }
    },

    toggleMark() {
        const idx = this.state.testCurrentIndex;
        if (this.state.testMarked.has(idx)) {
            this.state.testMarked.delete(idx);
        } else {
            this.state.testMarked.add(idx);
        }
        this.renderExamNav();
        document.getElementById('btn-mark').classList.toggle('active');
    },

    submitTest(auto = false) {
        if (!auto) {
            const answeredCount = Object.keys(this.state.testAnswers).length;
            if (answeredCount < this.state.testQuestions.length) {
                if (!confirm(`你还有 ${this.state.testQuestions.length - answeredCount} 道题未作答，确定要交卷吗？`)) {
                    return;
                }
            }
        }

        if (this.state.testTimer) clearInterval(this.state.testTimer);

        // 计算成绩
        let totalScore = 0;
        let correctCount = 0;
        const typeStats = { single: { total: 0, correct: 0, score: 0 }, multiple: { total: 0, correct: 0, score: 0 }, judge: { total: 0, correct: 0, score: 0 }, case: { total: 0, correct: 0, score: 0 } };
        const wrongQuestions = [];

        this.state.testQuestions.forEach(q => {
            const key = this.getAnswerKey(q);
            const userAnswer = this.state.testAnswers[key];
            const isCorrect = userAnswer !== undefined ? this.checkAnswer(q, userAnswer) : false;
            const stat = typeStats[q.type];
            stat.total++;
            if (isCorrect) {
                stat.correct++;
                stat.score += q.score;
                totalScore += q.score;
                correctCount++;
            } else {
                wrongQuestions.push({
                    question: q,
                    userAnswer: userAnswer,
                    isCorrect: false
                });
            }
        });

        const result = {
            date: new Date().toLocaleString('zh-CN'),
            totalScore,
            maxScore: this.state.testQuestions.reduce((sum, q) => sum + q.score, 0),
            correctCount,
            totalCount: this.state.testQuestions.length,
            typeStats,
            wrongQuestions,
            timeUsed: 120 * 60 - this.state.testTimeLeft
        };

        this.saveTestResult(result);
        this.showTestResult(result);
    },

    saveTestResult(result) {
        try {
            const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
            history.unshift(result);
            if (history.length > 20) history.pop();
            localStorage.setItem('testHistory', JSON.stringify(history));
        } catch (e) { console.error('保存成绩失败', e); }
    },

    showTestResult(result) {
        this.showPage('page-test-result');
        document.getElementById('result-score').textContent = result.totalScore;
        document.getElementById('result-rate').textContent = `正确率 ${Math.round((result.correctCount / result.totalCount) * 100)}%`;

        const typeNames = { single: '单选题', multiple: '多选题', judge: '判断题', case: '案例分析题' };
        document.getElementById('result-stats').innerHTML = Object.entries(result.typeStats).map(([type, stat]) => `
            <div class="stat-card">
                <div class="stat-label">${typeNames[type]}</div>
                <div class="stat-value">${stat.correct}/${stat.total} · ${stat.score}分</div>
            </div>
        `).join('');

        this.currentResult = result;
        document.getElementById('wrong-list').style.display = 'none';
        this.renderWrongList(result.wrongQuestions);
    },

    renderWrongList(wrongQuestions) {
        const list = document.getElementById('wrong-list');
        if (wrongQuestions.length === 0) {
            list.innerHTML = '<h3>错题分析</h3><p style="text-align:center;color:#6b7280;padding:24px">太棒了！你答对了所有题目！</p>';
            return;
        }

        list.innerHTML = '<h3>错题分析</h3>' + wrongQuestions.map((item, idx) => {
            const q = item.question;
            const correctAnswer = q.answer_multi && q.answer_multi.length > 0 ? q.answer_multi.join('、') : q.answer;
            const userAnswerText = item.userAnswer === undefined ? '未作答' : (Array.isArray(item.userAnswer) ? item.userAnswer.join('、') : item.userAnswer);
            const analysis = this.generateAnalysis(q);

            return `
                <div class="wrong-item">
                    <div class="wrong-header">
                        <span>第 ${idx + 1} 题</span>
                        <span>
                            <span class="your-answer">你的答案：${userAnswerText}</span>
                            <span style="margin:0 8px">|</span>
                            <span class="correct-answer">正确答案：${correctAnswer}</span>
                        </span>
                    </div>
                    <div class="question-text" style="font-size:15px;margin-bottom:12px">${q.question}</div>
                    <div style="font-size:14px;color:#6b7280;line-height:1.6">${analysis}</div>
                </div>
            `;
        }).join('');
    },

    reviewWrong() {
        const list = document.getElementById('wrong-list');
        list.style.display = list.style.display === 'none' ? 'block' : 'none';
        if (list.style.display === 'block') {
            setTimeout(() => list.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    },

    renderHistory() {
        try {
            const history = JSON.parse(localStorage.getItem('testHistory') || '[]');
            const section = document.getElementById('history-section');
            const list = document.getElementById('history-list');

            if (history.length === 0) {
                section.style.display = 'none';
                return;
            }

            section.style.display = 'block';
            list.innerHTML = history.slice(0, 5).map(h => `
                <div class="history-item">
                    <span>${h.date}</span>
                    <span><strong>${h.totalScore}</strong> 分 (${h.correctCount}/${h.totalCount})</span>
                </div>
            `).join('');
        } catch (e) { console.error('渲染历史失败', e); }
    }
};

// 启动应用
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
