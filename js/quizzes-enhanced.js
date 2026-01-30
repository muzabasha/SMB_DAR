// ============================================
// ENHANCED QUIZ SYSTEM v2.0
// With Error Handling, Accessibility, & Optimization
// ============================================

// Error Handling & Validation
// ============================================

function validateQuizData(quiz) {
    if (!quiz || !quiz.questions || quiz.questions.length === 0) {
        throw new Error('Invalid quiz data: Missing questions');
    }
    quiz.questions.forEach((q, idx) => {
        if (!q.question || !q.options || q.options.length < 2) {
            throw new Error(`Invalid question ${idx + 1}: Missing question or options`);
        }
        if (!q.options.some(opt => opt.isCorrect)) {
            throw new Error(`Invalid question ${idx + 1}: No correct answer marked`);
        }
    });
    return true;
}

function handleQuizError(error) {
    console.error('Quiz Error:', error);
    const container = document.getElementById('quiz-container');
    if (container) {
        container.innerHTML = `
            <div style="background: #fee2e2; border: 2px solid #ef4444; padding: 20px; border-radius: 8px; text-align: center;">
                <h3 style="color: #dc2626; margin-top: 0;">⚠️ Error Loading Quiz</h3>
                <p style="color: #991b1b; margin: 10px 0;">${error.message}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #ef4444; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">
                    Reload Page
                </button>
            </div>
        `;
    }
}

// Import quiz data from original quizzes.js
// (This file will be used alongside the original)

// Enhanced Quiz Component with Accessibility & Error Handling
const QuizComponentEnhanced = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    quizCache: new Map(),

    init(unitNumber) {
        try {
            if (!unitNumber || unitNumber < 1 || unitNumber > 4) {
                throw new Error('Invalid unit number');
            }

            // Use cached quiz if available
            if (!this.quizCache.has(unitNumber)) {
                this.quizCache.set(unitNumber, quizzes[`unit${unitNumber}`]);
            }

            this.currentQuiz = this.quizCache.get(unitNumber);

            if (!this.currentQuiz) {
                throw new Error(`Quiz for Unit ${unitNumber} not found`);
            }

            // Validate quiz data
            validateQuizData(this.currentQuiz);

            this.currentQuestionIndex = 0;
            this.score = 0;
            this.answers = [];
            this.render();
        } catch (error) {
            handleQuizError(error);
        }
    },

    escapeHTML(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    render() {
        try {
            if (!this.currentQuiz) return;

            const container = document.getElementById('quiz-container');
            if (!container) throw new Error('Quiz container not found');

            if (this.currentQuestionIndex >= this.currentQuiz.questions.length) {
                this.renderResults();
                return;
            }

            const question = this.currentQuiz.questions[this.currentQuestionIndex];

            let html = `
                <div class="quiz-wrapper" style="animation: slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1);">
                    <div class="quiz-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px 12px 0 0;">
                        <h2 style="margin: 0 0 10px 0;">${this.escapeHTML(this.currentQuiz.title)}</h2>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span>Question ${this.currentQuestionIndex + 1} of ${this.currentQuiz.questions.length}</span>
                            <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px;">
                                <span style="font-weight: bold;" aria-label="Current score">${this.score}/${this.currentQuiz.questions.length}</span>
                            </div>
                        </div>
                        <div style="margin-top: 10px; background: rgba(255,255,255,0.2); height: 6px; border-radius: 3px; overflow: hidden;">
                            <div style="background: white; height: 100%; width: ${((this.currentQuestionIndex + 1) / this.currentQuiz.questions.length) * 100}%; transition: width 0.3s;"></div>
                        </div>
                    </div>

                    <div class="quiz-content" style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <div style="margin-bottom: 20px;">
                            <h3 style="color: #333; font-size: 18px; margin: 0 0 10px 0;">${this.escapeHTML(question.question)}</h3>
                            <span style="background: #f0f0f0; padding: 4px 12px; border-radius: 20px; font-size: 12px; color: #666;">
                                Difficulty: ${question.difficulty}
                            </span>
                        </div>

                        <div class="quiz-options" style="display: flex; flex-direction: column; gap: 12px;" role="group" aria-label="Answer options">
                            ${question.options.map((option, idx) => `
                                <button class="quiz-option-btn" 
                                        onclick="QuizComponent.selectAnswer(${idx}, ${question.options[idx].isCorrect})"
                                        aria-label="Option ${String.fromCharCode(65 + idx)}: ${this.escapeHTML(option.text)}"
                                        style="padding: 15px; border: 2px solid #e0e0e0; background: white; border-radius: 8px; cursor: pointer; text-align: left; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); font-size: 16px;">
                                    <span style="display: inline-block; width: 24px; height: 24px; background: #667eea; color: white; border-radius: 50%; text-align: center; line-height: 24px; margin-right: 12px; font-weight: bold;">
                                        ${String.fromCharCode(65 + idx)}
                                    </span>
                                    ${this.escapeHTML(option.text)}
                                </button>
                            `).join('')}
                        </div>

                        <div id="feedback-container" style="margin-top: 20px;" role="status" aria-live="polite"></div>
                    </div>
                </div>
            `;

            container.innerHTML = html;
        } catch (error) {
            handleQuizError(error);
        }
    },

    selectAnswer(optionIndex, isCorrect) {
        try {
            const question = this.currentQuiz.questions[this.currentQuestionIndex];
            const feedbackContainer = document.getElementById('feedback-container');

            if (!feedbackContainer) throw new Error('Feedback container not found');

            // Disable all buttons
            document.querySelectorAll('.quiz-option-btn').forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.style.opacity = '0.7';
            });

            // Highlight selected option
            const selectedBtn = document.querySelectorAll('.quiz-option-btn')[optionIndex];

            if (isCorrect) {
                this.score++;
                selectedBtn.style.background = '#d1fae5';
                selectedBtn.style.borderColor = '#10b981';
                selectedBtn.style.borderWidth = '2px';

                feedbackContainer.innerHTML = `
                    <div style="background: #d1fae5; border-left: 4px solid #10b981; padding: 15px; border-radius: 8px; animation: slideUp 0.3s ease-out;" role="alert">
                        <h4 style="color: #059669; margin: 0 0 10px 0;">✅ Correct!</h4>
                        <p style="color: #047857; margin: 0; line-height: 1.6;">${question.explanation}</p>
                    </div>
                `;
            } else {
                selectedBtn.style.background = '#fee2e2';
                selectedBtn.style.borderColor = '#ef4444';
                selectedBtn.style.borderWidth = '2px';

                // Highlight correct answer
                const correctIndex = question.options.findIndex(opt => opt.isCorrect);
                const correctBtn = document.querySelectorAll('.quiz-option-btn')[correctIndex];
                correctBtn.style.background = '#d1fae5';
                correctBtn.style.borderColor = '#10b981';
                correctBtn.style.borderWidth = '2px';

                feedbackContainer.innerHTML = `
                    <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 15px; border-radius: 8px; animation: slideUp 0.3s ease-out;" role="alert">
                        <h4 style="color: #dc2626; margin: 0 0 10px 0;">❌ Incorrect</h4>
                        <p style="color: #991b1b; margin: 0 0 10px 0; line-height: 1.6;"><strong>Correct Answer:</strong> ${this.escapeHTML(question.options[correctIndex].text)}</p>
                        <p style="color: #991b1b; margin: 0; line-height: 1.6;"><strong>Explanation:</strong> ${question.explanation}</p>
                    </div>
                `;
            }

            // Add next button
            setTimeout(() => {
                const nextBtn = document.createElement('button');
                nextBtn.innerHTML = this.currentQuestionIndex === this.currentQuiz.questions.length - 1
                    ? 'See Results'
                    : 'Next Question';
                nextBtn.setAttribute('aria-label', this.currentQuestionIndex === this.currentQuiz.questions.length - 1
                    ? 'View quiz results'
                    : 'Go to next question');
                nextBtn.style.cssText = `
                    margin-top: 20px;
                    padding: 12px 30px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    font-size: 16px;
                    font-weight: bold;
                    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
                `;
                nextBtn.onmouseover = () => nextBtn.style.transform = 'scale(1.05)';
                nextBtn.onmouseout = () => nextBtn.style.transform = 'scale(1)';
                nextBtn.onclick = () => this.nextQuestion();
                feedbackContainer.appendChild(nextBtn);
            }, 100);
        } catch (error) {
            handleQuizError(error);
        }
    },

    nextQuestion() {
        try {
            this.currentQuestionIndex++;
            this.render();
        } catch (error) {
            handleQuizError(error);
        }
    },

    renderResults() {
        try {
            const container = document.getElementById('quiz-container');
            const percentage = Math.round((this.score / this.currentQuiz.questions.length) * 100);

            let performanceMessage = '';
            let performanceColor = '';

            if (percentage === 100) {
                performanceMessage = '🏆 Perfect Score! You are a master!';
                performanceColor = '#10b981';
            } else if (percentage >= 80) {
                performanceMessage = '🌟 Excellent! You have a strong understanding!';
                performanceColor = '#3b82f6';
            } else if (percentage >= 60) {
                performanceMessage = '👍 Good job! Review the topics you missed.';
                performanceColor = '#f59e0b';
            } else {
                performanceMessage = '📚 Keep studying! Review the course material.';
                performanceColor = '#ef4444';
            }

            let html = `
                <div class="quiz-results" style="animation: slideUp 0.5s ease-out;">
                    <div style="background: linear-gradient(135deg, ${performanceColor} 0%, ${performanceColor}dd 100%); color: white; padding: 40px; border-radius: 12px 12px 0 0; text-align: center;">
                        <h2 style="margin: 0 0 20px 0; font-size: 32px;">Quiz Complete!</h2>
                        <div style="font-size: 48px; font-weight: bold; margin: 20px 0;" aria-label="Your score">${this.score}/${this.currentQuiz.questions.length}</div>
                        <div style="font-size: 24px; margin: 20px 0;" aria-label="Your percentage">${percentage}%</div>
                        <p style="font-size: 18px; margin: 0;">${performanceMessage}</p>
                    </div>

                    <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                        <h3 style="color: #333; margin-top: 0;">Performance Breakdown</h3>
                        
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                            <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
                                <div style="font-size: 12px; color: #666; margin-bottom: 5px;">CORRECT ANSWERS</div>
                                <div style="font-size: 28px; font-weight: bold; color: #3b82f6;">${this.score}</div>
                            </div>
                            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                                <div style="font-size: 12px; color: #666; margin-bottom: 5px;">INCORRECT ANSWERS</div>
                                <div style="font-size: 28px; font-weight: bold; color: #f59e0b;">${this.currentQuiz.questions.length - this.score}</div>
                            </div>
                        </div>

                        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h4 style="margin-top: 0;">Question Difficulty Distribution</h4>
                            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                                ${['Easy', 'Medium', 'Hard'].map(difficulty => {
                const count = this.currentQuiz.questions.filter(q => q.difficulty === difficulty).length;
                return `
                                        <span style="background: white; padding: 8px 16px; border-radius: 20px; border: 1px solid #ddd;">
                                            ${difficulty}: ${count} question${count !== 1 ? 's' : ''}
                                        </span>
                                    `;
            }).join('')}
                            </div>
                        </div>

                        <div style="display: flex; gap: 10px; margin-top: 20px;">
                            <button onclick="QuizComponent.init(${this.currentQuiz.title.match(/\\d+/)[0]})" 
                                    aria-label="Retake this quiz"
                                    style="flex: 1; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);"
                                    onmouseover="this.style.transform='scale(1.05)'"
                                    onmouseout="this.style.transform='scale(1)'">
                                Retake Quiz
                            </button>
                            <button onclick="app.navigateTo('dashboard')" 
                                    aria-label="Return to dashboard"
                                    style="flex: 1; padding: 12px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);"
                                    onmouseover="this.style.transform='scale(1.05)'"
                                    onmouseout="this.style.transform='scale(1)'">
                                Back to Dashboard
                            </button>
                        </div>

                        ${percentage < 80 ? `
                            <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; border-radius: 8px; margin-top: 20px;">
                                <h4 style="color: #d97706; margin-top: 0;">💡 Recommendation</h4>
                                <p style="color: #92400e; margin: 0;">Review the course material for topics you found challenging. Consider re-reading the handouts and practicing with the R code examples.</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;

            container.innerHTML = html;
        } catch (error) {
            handleQuizError(error);
        }
    }
};

// Use enhanced component as default
QuizComponent = QuizComponentEnhanced;
