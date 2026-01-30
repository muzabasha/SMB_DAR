// Quiz System with Feedback and Explanations
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

const quizzes = {
    unit1: {
        title: "Unit 1: Introduction to Data Analysis",
        description: "Test your understanding of data analytics fundamentals",
        questions: [
            {
                id: 1,
                question: "What does 'Big Data' refer to?",
                options: [
                    { text: "Data stored in large databases", isCorrect: false },
                    { text: "Data characterized by Volume, Velocity, and Variety (3 V's)", isCorrect: true },
                    { text: "Data that is difficult to analyze", isCorrect: false },
                    { text: "Data from large companies only", isCorrect: false }
                ],
                explanation: "Big Data is defined by the 3 V's: Volume (large amounts), Velocity (fast generation), and Variety (different types). This framework helps us understand the scale and complexity of modern data.",
                difficulty: "Easy"
            },
            {
                id: 2,
                question: "Which of the following is an example of unstructured data?",
                options: [
                    { text: "Customer database in Excel", isCorrect: false },
                    { text: "Social media posts and images", isCorrect: true },
                    { text: "Bank transaction records", isCorrect: false },
                    { text: "Employee payroll spreadsheet", isCorrect: false }
                ],
                explanation: "Unstructured data doesn't fit neatly into rows and columns. Social media posts, images, videos, and text documents are unstructured. Structured data (like databases and spreadsheets) has a defined format.",
                difficulty: "Easy"
            },
            {
                id: 3,
                question: "What is the primary goal of descriptive analytics?",
                options: [
                    { text: "To predict future trends", isCorrect: false },
                    { text: "To understand what happened in the past", isCorrect: true },
                    { text: "To recommend actions", isCorrect: false },
                    { text: "To classify data into categories", isCorrect: false }
                ],
                explanation: "Descriptive analytics answers 'What happened?' by summarizing historical data. It uses techniques like aggregation and data mining. Predictive analytics answers 'What will happen?', and prescriptive analytics answers 'What should we do?'",
                difficulty: "Medium"
            },
            {
                id: 4,
                question: "Which industry has NOT been significantly impacted by data analytics?",
                options: [
                    { text: "Healthcare - predicting disease outbreaks", isCorrect: false },
                    { text: "Finance - fraud detection", isCorrect: false },
                    { text: "Retail - customer behavior analysis", isCorrect: false },
                    { text: "All industries have been impacted by data analytics", isCorrect: true }
                ],
                explanation: "Data analytics has revolutionized virtually every industry - healthcare uses it for diagnostics, finance for risk management, retail for personalization, manufacturing for quality control, and more. It's a universal tool.",
                difficulty: "Medium"
            },
            {
                id: 5,
                question: "What is the difference between data and information?",
                options: [
                    { text: "Data is processed; information is raw", isCorrect: false },
                    { text: "Data is raw facts; information is processed, meaningful data", isCorrect: true },
                    { text: "They are the same thing", isCorrect: false },
                    { text: "Information is always numerical", isCorrect: false }
                ],
                explanation: "Data is raw, unprocessed facts (like '25, 30, 28'). Information is data that has been processed and given context (like 'Average age is 27.7 years'). Analytics transforms data into information.",
                difficulty: "Easy"
            }
        ]
    },
    unit2: {
        title: "Unit 2: R Programming Basics",
        description: "Test your knowledge of R programming fundamentals",
        questions: [
            {
                id: 1,
                question: "What does the assignment operator '<-' do in R?",
                options: [
                    { text: "Compares two values", isCorrect: false },
                    { text: "Assigns a value to a variable", isCorrect: true },
                    { text: "Creates a function", isCorrect: false },
                    { text: "Filters data", isCorrect: false }
                ],
                explanation: "The '<-' operator assigns values to variables. For example: x <- 5 assigns the value 5 to variable x. You can also use '=' but '<-' is the R convention. The arrow points toward the variable receiving the value.",
                difficulty: "Easy"
            },
            {
                id: 2,
                question: "What is a vector in R?",
                options: [
                    { text: "A single number", isCorrect: false },
                    { text: "A collection of elements of the same type", isCorrect: true },
                    { text: "A function that returns multiple values", isCorrect: false },
                    { text: "A data frame with rows and columns", isCorrect: false }
                ],
                explanation: "A vector is R's basic data structure - a sequence of elements all of the same type (numeric, character, logical). Created with c(): x <- c(1, 2, 3). Vectors are the foundation of R programming.",
                difficulty: "Easy"
            },
            {
                id: 3,
                question: "What will this R code return? x <- c(1, 2, 3); x[2]",
                options: [
                    { text: "1", isCorrect: false },
                    { text: "2", isCorrect: true },
                    { text: "3", isCorrect: false },
                    { text: "Error", isCorrect: false }
                ],
                explanation: "R uses 1-based indexing (unlike Python which uses 0-based). x[2] returns the 2nd element of the vector, which is 2. So x[1]=1, x[2]=2, x[3]=3.",
                difficulty: "Easy"
            },
            {
                id: 4,
                question: "What is the purpose of the if() statement in R?",
                options: [
                    { text: "To repeat code multiple times", isCorrect: false },
                    { text: "To execute code conditionally based on a logical test", isCorrect: true },
                    { text: "To create a loop", isCorrect: false },
                    { text: "To define a function", isCorrect: false }
                ],
                explanation: "The if() statement executes code only if a condition is TRUE. Syntax: if(condition) { code }. You can add else for alternative code. Example: if(x > 5) { print('x is large') } else { print('x is small') }",
                difficulty: "Medium"
            },
            {
                id: 5,
                question: "What is the difference between a matrix and a data frame in R?",
                options: [
                    { text: "Matrices are 2D, data frames are 1D", isCorrect: false },
                    { text: "Matrices contain one data type; data frames can mix types", isCorrect: true },
                    { text: "Data frames are faster than matrices", isCorrect: false },
                    { text: "There is no difference", isCorrect: false }
                ],
                explanation: "Matrices are 2D arrays with all elements the same type (all numeric or all character). Data frames are like spreadsheets - each column can be a different type. Data frames are more flexible for real-world data.",
                difficulty: "Medium"
            }
        ]
    },
    unit3: {
        title: "Unit 3: Data Visualization using R",
        description: "Test your understanding of data visualization principles and R charts",
        questions: [
            {
                id: 1,
                question: "When should you use a histogram?",
                options: [
                    { text: "To compare categories", isCorrect: false },
                    { text: "To show the distribution of a continuous variable", isCorrect: true },
                    { text: "To show relationships between two variables", isCorrect: false },
                    { text: "To display proportions of a whole", isCorrect: false }
                ],
                explanation: "Histograms show the distribution of ONE continuous variable by dividing it into bins and showing frequency. Use for: ages, salaries, test scores. Bar charts are for categories, scatter plots for relationships, pie charts for proportions.",
                difficulty: "Easy"
            },
            {
                id: 2,
                question: "What does a boxplot reveal that a histogram might miss?",
                options: [
                    { text: "The exact distribution shape", isCorrect: false },
                    { text: "Outliers and quartiles", isCorrect: true },
                    { text: "The mean value", isCorrect: false },
                    { text: "Categorical differences", isCorrect: false }
                ],
                explanation: "Boxplots show the median, quartiles (Q1, Q3), and outliers (dots beyond whiskers). They're excellent for spotting unusual values. Histograms show the full distribution shape but can hide outliers in the tail.",
                difficulty: "Medium"
            },
            {
                id: 3,
                question: "Which chart type is BEST for showing a trend over time?",
                options: [
                    { text: "Pie chart", isCorrect: false },
                    { text: "Bar chart", isCorrect: false },
                    { text: "Line graph", isCorrect: true },
                    { text: "Boxplot", isCorrect: false }
                ],
                explanation: "Line graphs are ideal for time-series data because the line connects points chronologically, making trends obvious. Bar charts work for time too, but lines better show continuous change. Pie charts show proportions, boxplots show distributions.",
                difficulty: "Easy"
            },
            {
                id: 4,
                question: "What is a major criticism of pie charts?",
                options: [
                    { text: "They are too colorful", isCorrect: false },
                    { text: "Humans are poor at comparing angles; use bar charts instead", isCorrect: true },
                    { text: "They cannot show percentages", isCorrect: false },
                    { text: "They are too simple", isCorrect: false }
                ],
                explanation: "Research shows humans judge bar lengths more accurately than pie slice angles. Pie charts should only be used for 3-6 categories showing parts of a whole. For more categories or precise comparisons, use bar charts.",
                difficulty: "Medium"
            },
            {
                id: 5,
                question: "What does 'pch=19' do in an R scatter plot?",
                options: [
                    { text: "Sets the line width", isCorrect: false },
                    { text: "Sets the point character to solid circles", isCorrect: true },
                    { text: "Sets the color to black", isCorrect: false },
                    { text: "Sets the plot title", isCorrect: false }
                ],
                explanation: "'pch' stands for 'plot character'. pch=19 gives solid circles, pch=1 gives hollow circles, pch=15 gives squares. It controls the shape of points in scatter plots and other point-based visualizations.",
                difficulty: "Medium"
            }
        ]
    },
    unit4: {
        title: "Unit 4: Statistics & Prescriptive Analytics",
        description: "Test your knowledge of statistical concepts and machine learning",
        questions: [
            {
                id: 1,
                question: "What does a normal distribution represent?",
                options: [
                    { text: "Data that is always accurate", isCorrect: false },
                    { text: "A bell-shaped distribution where most values cluster around the mean", isCorrect: true },
                    { text: "Data without any outliers", isCorrect: false },
                    { text: "A distribution that is always symmetric", isCorrect: false }
                ],
                explanation: "The normal (Gaussian) distribution is bell-shaped with most values near the mean and fewer at the extremes. 68% of data falls within 1 standard deviation of the mean. Many natural phenomena follow this pattern.",
                difficulty: "Easy"
            },
            {
                id: 2,
                question: "What is the purpose of linear regression?",
                options: [
                    { text: "To classify data into categories", isCorrect: false },
                    { text: "To find a linear relationship between variables and make predictions", isCorrect: true },
                    { text: "To group similar data points", isCorrect: false },
                    { text: "To remove outliers from data", isCorrect: false }
                ],
                explanation: "Linear regression finds the best-fit line through data points to model the relationship between variables. It answers: 'How does Y change with X?' Used for prediction and understanding relationships.",
                difficulty: "Medium"
            },
            {
                id: 3,
                question: "What is the main advantage of Random Forest over a single Decision Tree?",
                options: [
                    { text: "It's faster to train", isCorrect: false },
                    { text: "It reduces overfitting by averaging multiple trees", isCorrect: true },
                    { text: "It requires less data", isCorrect: false },
                    { text: "It only works with numerical data", isCorrect: false }
                ],
                explanation: "Random Forest creates many decision trees and averages their predictions. This ensemble approach reduces overfitting (memorizing training data) and improves generalization to new data. It's more robust than a single tree.",
                difficulty: "Hard"
            },
            {
                id: 4,
                question: "What is prescriptive analytics?",
                options: [
                    { text: "Describing what happened in the past", isCorrect: false },
                    { text: "Predicting what will happen in the future", isCorrect: false },
                    { text: "Recommending actions to optimize outcomes", isCorrect: true },
                    { text: "Classifying data into groups", isCorrect: false }
                ],
                explanation: "Prescriptive analytics answers 'What should we do?' It goes beyond prediction to recommend specific actions. Example: Not just 'Sales will drop' but 'Increase marketing budget by 20% to prevent the drop.'",
                difficulty: "Medium"
            },
            {
                id: 5,
                question: "What is the difference between correlation and causation?",
                options: [
                    { text: "They are the same thing", isCorrect: false },
                    { text: "Correlation means two variables move together; causation means one causes the other", isCorrect: true },
                    { text: "Causation is always stronger than correlation", isCorrect: false },
                    { text: "Correlation is only for numerical data", isCorrect: false }
                ],
                explanation: "Correlation (r=0.8) means variables move together. Causation means one CAUSES the other. Example: Ice cream sales and drowning deaths correlate (both increase in summer) but neither causes the other - temperature causes both. Always be careful with this distinction!",
                difficulty: "Hard"
            }
        ]
    }
};

// Quiz Component
const QuizComponent = {
    currentQuiz: null,
    currentQuestionIndex: 0,
    score: 0,
    answers: [],

    init(unitNumber) {
        this.currentQuiz = quizzes[`unit${unitNumber}`];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.render();
    },

    render() {
        if (!this.currentQuiz) return;

        const container = document.getElementById('quiz-container');
        if (!container) return;

        if (this.currentQuestionIndex >= this.currentQuiz.questions.length) {
            this.renderResults();
            return;
        }

        const question = this.currentQuiz.questions[this.currentQuestionIndex];

        let html = `
            <div class="quiz-wrapper" style="animation: slideUp 0.5s ease-out;">
                <div class="quiz-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px 12px 0 0;">
                    <h2 style="margin: 0 0 10px 0;">${this.currentQuiz.title}</h2>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span>Question ${this.currentQuestionIndex + 1} of ${this.currentQuiz.questions.length}</span>
                        <div style="background: rgba(255,255,255,0.2); padding: 8px 16px; border-radius: 20px;">
                            <span style="font-weight: bold;">${this.score}/${this.currentQuiz.questions.length}</span>
                        </div>
                    </div>
                    <div style="margin-top: 10px; background: rgba(255,255,255,0.2); height: 6px; border-radius: 3px; overflow: hidden;">
                        <div style="background: white; height: 100%; width: ${((this.currentQuestionIndex + 1) / this.currentQuiz.questions.length) * 100}%; transition: width 0.3s;"></div>
                    </div>
                </div>

                <div class="quiz-content" style="background: white; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    <div style="margin-bottom: 20px;">
                        <h3 style="color: #333; font-size: 18px; margin: 0 0 10px 0;">${question.question}</h3>
                        <span style="background: #f0f0f0; padding: 4px 12px; border-radius: 20px; font-size: 12px; color: #666;">
                            Difficulty: ${question.difficulty}
                        </span>
                    </div>

                    <div class="quiz-options" style="display: flex; flex-direction: column; gap: 12px;">
                        ${question.options.map((option, idx) => `
                            <button class="quiz-option-btn" 
                                    onclick="QuizComponent.selectAnswer(${idx}, ${question.options[idx].isCorrect})"
                                    style="padding: 15px; border: 2px solid #e0e0e0; background: white; border-radius: 8px; cursor: pointer; text-align: left; transition: all 0.3s; font-size: 16px;">
                                <span style="display: inline-block; width: 24px; height: 24px; background: #667eea; color: white; border-radius: 50%; text-align: center; line-height: 24px; margin-right: 12px; font-weight: bold;">
                                    ${String.fromCharCode(65 + idx)}
                                </span>
                                ${option.text}
                            </button>
                        `).join('')}
                    </div>

                    <div id="feedback-container" style="margin-top: 20px;"></div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    },

    selectAnswer(optionIndex, isCorrect) {
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const feedbackContainer = document.getElementById('feedback-container');

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
                <div style="background: #d1fae5; border-left: 4px solid #10b981; padding: 15px; border-radius: 8px;">
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
                <div style="background: #fee2e2; border-left: 4px solid #ef4444; padding: 15px; border-radius: 8px;">
                    <h4 style="color: #dc2626; margin: 0 0 10px 0;">❌ Incorrect</h4>
                    <p style="color: #991b1b; margin: 0 0 10px 0; line-height: 1.6;"><strong>Correct Answer:</strong> ${question.options[correctIndex].text}</p>
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
                transition: transform 0.2s;
            `;
            nextBtn.onmouseover = () => nextBtn.style.transform = 'scale(1.05)';
            nextBtn.onmouseout = () => nextBtn.style.transform = 'scale(1)';
            nextBtn.onclick = () => this.nextQuestion();
            feedbackContainer.appendChild(nextBtn);
        }, 100);
    },

    nextQuestion() {
        this.currentQuestionIndex++;
        this.render();
    },

    renderResults() {
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
                    <div style="font-size: 48px; font-weight: bold; margin: 20px 0;">${this.score}/${this.currentQuiz.questions.length}</div>
                    <div style="font-size: 24px; margin: 20px 0;">${percentage}%</div>
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
                                style="flex: 1; padding: 12px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold;">
                            Retake Quiz
                        </button>
                        <button onclick="app.navigateTo('dashboard')" 
                                style="flex: 1; padding: 12px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold;">
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
    }
};
