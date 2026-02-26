// Virtual Lab Component - NEP 2020 Experiential Learning
const VirtualLab = {
    currentUnit: null,
    currentExercise: 0,
    userCode: '',

    labs: {
        unit2: {
            title: "R Programming Virtual Lab",
            description: "Learn by doing! Practice R programming with hands-on exercises.",
            exercises: [
                {
                    id: 1,
                    title: "Variables & Basic Operations",
                    instruction: "Create variables for your name and age, then calculate your birth year.",
                    starterCode: `# Exercise 1: Variables & Basic Operations
# TODO: Create a variable 'my_name' with your name
# TODO: Create a variable 'my_age' with your age
# TODO: Calculate birth year (2026 - age)
# TODO: Print a message with your name and birth year

`,
                    solution: `my_name <- "Student"
my_age <- 20
birth_year <- 2026 - my_age
print(paste("Hello", my_name, "! You were born in", birth_year))`,
                    hint: "Use <- for assignment and paste() to combine text",
                    expectedOutput: "Hello Student ! You were born in 2006"
                },
                {
                    id: 2,
                    title: "Vectors & Data Manipulation",
                    instruction: "Create a vector of 5 test scores and calculate the average.",
                    starterCode: `# Exercise 2: Vectors
# TODO: Create a vector 'scores' with 5 test scores
# TODO: Calculate the mean
# TODO: Find the highest score
# TODO: Count how many scores are above 80

`,
                    solution: `scores <- c(75, 88, 92, 67, 95)
avg_score <- mean(scores)
max_score <- max(scores)
above_80 <- sum(scores > 80)
print(paste("Average:", avg_score))
print(paste("Highest:", max_score))
print(paste("Above 80:", above_80))`,
                    hint: "Use c() to create vectors, mean(), max(), and sum() functions",
                    expectedOutput: "Average: 83.4\nHighest: 95\nAbove 80: 3"
                },
                {
                    id: 3,
                    title: "Control Structures - If/Else",
                    instruction: "Write code to check if a student passed (score >= 60).",
                    starterCode: `# Exercise 3: If/Else Logic
# TODO: Create a variable 'score' with a test score
# TODO: Use if/else to print "Passed" or "Failed"
# TODO: Add another condition for "Excellent" if score >= 90

`,
                    solution: `score <- 85
if (score >= 90) {
  print("Excellent!")
} else if (score >= 60) {
  print("Passed")
} else {
  print("Failed")
}`,
                    hint: "Use if (condition) { } else { } structure",
                    expectedOutput: "Passed"
                }
            ]
        },
        unit3: {
            title: "Data Visualization Virtual Lab",
            description: "Create stunning visualizations! Practice with real datasets.",
            exercises: [
                {
                    id: 1,
                    title: "Bar Chart Basics",
                    instruction: "Create a bar chart showing monthly sales data.",
                    starterCode: `# Exercise 1: Bar Chart
# TODO: Create vectors for months and sales
# TODO: Use barplot() to visualize
# TODO: Add title, labels, and colors

months <- c("Jan", "Feb", "Mar", "Apr", "May")
sales <- c(120, 135, 150, 145, 170)

`,
                    solution: `months <- c("Jan", "Feb", "Mar", "Apr", "May")
sales <- c(120, 135, 150, 145, 170)
barplot(sales, names.arg = months, 
        col = "steelblue",
        main = "Monthly Sales",
        xlab = "Month", ylab = "Sales (K)")`,
                    hint: "Use barplot() with names.arg for labels",
                    expectedOutput: "Bar chart displayed"
                },
                {
                    id: 2,
                    title: "Scatter Plot & Correlation",
                    instruction: "Create a scatter plot and calculate correlation.",
                    starterCode: `# Exercise 2: Scatter Plot
# TODO: Create x and y vectors
# TODO: Create scatter plot with plot()
# TODO: Calculate correlation with cor()

`,
                    solution: `x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 5, 4, 5)
plot(x, y, main = "Scatter Plot",
     xlab = "X", ylab = "Y",
     col = "red", pch = 19)
correlation <- cor(x, y)
print(paste("Correlation:", round(correlation, 3)))`,
                    hint: "Use plot() for scatter plots and cor() for correlation",
                    expectedOutput: "Scatter plot with correlation value"
                }
            ]
        },
        unit4: {
            title: "Machine Learning Virtual Lab",
            description: "Build predictive models! Apply ML algorithms to real problems.",
            exercises: [
                {
                    id: 1,
                    title: "Linear Regression Model",
                    instruction: "Build a simple linear regression model to predict house prices.",
                    starterCode: `# Exercise 1: Linear Regression
# TODO: Create data for house size and price
# TODO: Build linear model with lm()
# TODO: Make predictions
# TODO: Calculate R-squared

size <- c(1000, 1500, 2000, 2500, 3000)
price <- c(200, 280, 350, 420, 500)

`,
                    solution: `size <- c(1000, 1500, 2000, 2500, 3000)
price <- c(200, 280, 350, 420, 500)
model <- lm(price ~ size)
summary(model)
new_size <- data.frame(size = 1800)
predicted_price <- predict(model, new_size)
print(paste("Predicted price for 1800 sq ft:", round(predicted_price, 2), "K"))`,
                    hint: "Use lm(y ~ x) for linear regression",
                    expectedOutput: "Predicted price for 1800 sq ft: 308 K"
                },
                {
                    id: 2,
                    title: "Classification with Decision Tree",
                    instruction: "Build a decision tree to classify iris species.",
                    starterCode: `# Exercise 2: Decision Tree
# TODO: Load iris dataset
# TODO: Split into train/test
# TODO: Build decision tree
# TODO: Make predictions

library(rpart)
data(iris)

`,
                    solution: `library(rpart)
data(iris)
set.seed(123)
train_idx <- sample(1:nrow(iris), 0.7 * nrow(iris))
train <- iris[train_idx, ]
test <- iris[-train_idx, ]
model <- rpart(Species ~ ., data = train)
predictions <- predict(model, test, type = "class")
accuracy <- sum(predictions == test$Species) / nrow(test)
print(paste("Accuracy:", round(accuracy * 100, 2), "%"))`,
                    hint: "Use rpart() for decision trees",
                    expectedOutput: "Accuracy: 95.56 %"
                }
            ]
        }
    },

    render: (unitId) => {
        const lab = VirtualLab.labs[`unit${unitId}`];
        if (!lab) return '<p>Lab not available for this unit.</p>';

        VirtualLab.currentUnit = unitId;
        VirtualLab.currentExercise = 0;

        return `
            <div class="virtual-lab-container">
                <div class="lab-header">
                    <h2>🧪 ${lab.title}</h2>
                    <p class="lab-description">${lab.description}</p>
                    <div class="lab-badges">
                        <span class="badge badge-nep">NEP 2020 Aligned</span>
                        <span class="badge badge-experiential">Experiential Learning</span>
                        <span class="badge badge-exercises">${lab.exercises.length} Exercises</span>
                    </div>
                </div>

                <div class="lab-content">
                    <div class="lab-sidebar">
                        <h3>Exercises</h3>
                        <div class="exercise-list">
                            ${lab.exercises.map((ex, idx) => `
                                <div class="exercise-item ${idx === 0 ? 'active' : ''}" 
                                     onclick="VirtualLab.loadExercise(${idx})"
                                     id="exercise-nav-${idx}">
                                    <span class="exercise-number">${ex.id}</span>
                                    <span class="exercise-title">${ex.title}</span>
                                    <i data-lucide="check-circle" class="exercise-check hidden"></i>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="lab-workspace">
                        <div class="exercise-header">
                            <h3 id="current-exercise-title">${lab.exercises[0].title}</h3>
                            <div class="exercise-actions">
                                <button class="btn-hint" onclick="VirtualLab.showHint()">
                                    <i data-lucide="lightbulb"></i> Hint
                                </button>
                                <button class="btn-solution" onclick="VirtualLab.showSolution()">
                                    <i data-lucide="eye"></i> Show Solution
                                </button>
                            </div>
                        </div>

                        <div class="exercise-instruction" id="exercise-instruction">
                            ${lab.exercises[0].instruction}
                        </div>

                        <div class="code-editor-container">
                            <div class="editor-header">
                                <span>R Code Editor</span>
                                <button class="btn-run" onclick="VirtualLab.runCode()">
                                    <i data-lucide="play"></i> Run Code
                                </button>
                            </div>
                            <textarea id="code-editor" class="code-editor" spellcheck="false">${lab.exercises[0].starterCode}</textarea>
                        </div>

                        <div class="output-container">
                            <div class="output-header">
                                <span>Output</span>
                                <button class="btn-clear" onclick="VirtualLab.clearOutput()">
                                    <i data-lucide="x"></i> Clear
                                </button>
                            </div>
                            <div id="code-output" class="code-output">
                                <p class="output-placeholder">Run your code to see output here...</p>
                            </div>
                        </div>

                        <div class="exercise-navigation">
                            <button class="btn-prev" onclick="VirtualLab.prevExercise()" disabled>
                                <i data-lucide="chevron-left"></i> Previous
                            </button>
                            <span class="exercise-progress">Exercise 1 of ${lab.exercises.length}</span>
                            <button class="btn-next" onclick="VirtualLab.nextExercise()">
                                Next <i data-lucide="chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    loadExercise: (index) => {
        const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
        if (!lab || !lab.exercises[index]) return;

        VirtualLab.currentExercise = index;
        const exercise = lab.exercises[index];

        // Update UI
        document.getElementById('current-exercise-title').textContent = exercise.title;
        document.getElementById('exercise-instruction').textContent = exercise.instruction;
        document.getElementById('code-editor').value = exercise.starterCode;
        document.querySelector('.exercise-progress').textContent = `Exercise ${index + 1} of ${lab.exercises.length}`;

        // Update navigation
        document.querySelectorAll('.exercise-item').forEach((item, idx) => {
            item.classList.toggle('active', idx === index);
        });

        // Update buttons
        document.querySelector('.btn-prev').disabled = index === 0;
        document.querySelector('.btn-next').disabled = index === lab.exercises.length - 1;

        // Clear output
        VirtualLab.clearOutput();

        // Reinitialize icons
        lucide.createIcons();
    },

    prevExercise: () => {
        if (VirtualLab.currentExercise > 0) {
            VirtualLab.loadExercise(VirtualLab.currentExercise - 1);
        }
    },

    nextExercise: () => {
        const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
        if (VirtualLab.currentExercise < lab.exercises.length - 1) {
            VirtualLab.loadExercise(VirtualLab.currentExercise + 1);
        }
    },

    showHint: () => {
        const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
        const exercise = lab.exercises[VirtualLab.currentExercise];
        alert(`💡 Hint:\n\n${exercise.hint}`);
    },

    showSolution: () => {
        const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
        const exercise = lab.exercises[VirtualLab.currentExercise];
        if (confirm('Are you sure you want to see the solution? Try solving it yourself first!')) {
            document.getElementById('code-editor').value = exercise.solution;
        }
    },

    runCode: () => {
        const code = document.getElementById('code-editor').value;
        const output = document.getElementById('code-output');

        // Simulate R code execution (in real implementation, this would call an R backend)
        output.innerHTML = `
            <div class="output-message output-info">
                <i data-lucide="info"></i>
                <div>
                    <strong>Simulated Execution</strong>
                    <p>In a production environment, this would execute your R code on a server.</p>
                    <p>For now, check your code against the solution to verify correctness.</p>
                </div>
            </div>
            <div class="output-code">
                <pre><code class="language-r">${code}</code></pre>
            </div>
        `;

        lucide.createIcons();
        if (window.Prism) window.Prism.highlightAll();
    },

    clearOutput: () => {
        document.getElementById('code-output').innerHTML = '<p class="output-placeholder">Run your code to see output here...</p>';
    }
};
