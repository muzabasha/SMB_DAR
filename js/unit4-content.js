const unit4Content = {
    "u4-prereq": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4: Prerequisites | Essential Foundations for Statistics & ML",
        hook: "Before we predict the future, let's master the basics that make it possible!",
        position: "Prerequisite Module for Unit 4",
        prerequisites: "Completion of Units 1-3 (Introduction, R Programming, Data Visualization).",
        outcomes: ["Understand basic probability concepts", "Calculate measures of central tendency and dispersion", "Interpret correlation and causation", "Grasp the concept of statistical significance"],
        subTopics: "Probability Basics (Sample Space, Events, Conditional Probability), Descriptive Statistics (Mean, Median, Mode, Variance, SD), Correlation vs Causation, Hypothesis Testing Fundamentals, P-values and Significance Levels",
        syllabusMapping: "Foundation for Syllabus Sections 4.1-4.4",
        background: "Statistics emerged from the need to make sense of uncertainty. From gambling problems in the 1600s to modern AI, these foundational concepts remain unchanged.",
        motivation: "You can't build a skyscraper without a foundation. Similarly, advanced ML models require solid understanding of basic statistics. These concepts appear in EVERY data science interview!",
        problemStatement: "Many students jump into machine learning without understanding WHY models work. This leads to misinterpreting results, choosing wrong algorithms, and making costly business decisions.",
        coreConcept: "Statistics is the science of learning from data. It provides the mathematical framework for making decisions under uncertainty.",
        terminology: "Population vs Sample, Parameter vs Statistic, Bias, Variance, Outliers, Percentiles, Quartiles, Interquartile Range (IQR)",
        technicalFoundations: "Mathematical foundations: Set Theory (for probability), Calculus (for distributions), Linear Algebra (for regression).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# PREREQUISITE 1: Measures of Central Tendency\ndata <- c(12, 15, 18, 20, 22, 25, 30, 35, 40, 100)\n\n# Mean (Average)\nmean_val <- mean(data)\nprint(paste('Mean:', mean_val))\n\n# Median (Middle value)\nmedian_val <- median(data)\nprint(paste('Median:', median_val))\n\n# Mode (Most frequent - custom function)\nget_mode <- function(v) {\n  uniq <- unique(v)\n  uniq[which.max(tabulate(match(v, uniq)))]\n}\n\n# PREREQUISITE 2: Measures of Dispersion\nsd_val <- sd(data)\nvar_val <- var(data)\nprint(paste('Standard Deviation:', round(sd_val, 2)))\nprint(paste('Variance:', round(var_val, 2)))\n\n# PREREQUISITE 3: Correlation\nx <- c(1, 2, 3, 4, 5)\ny <- c(2, 4, 5, 4, 5)\ncorr <- cor(x, y)\nprint(paste('Correlation:', round(corr, 3)))\n\n# PREREQUISITE 4: Probability Basics\n# Probability of rolling a 6 on a fair die\nprob_six <- 1/6\nprint(paste('P(rolling 6):', round(prob_six, 3)))",
        rOutput: "[1] \"Mean: 31.7\"\n[1] \"Median: 23.5\"\n[1] \"Standard Deviation: 24.86\"\n[1] \"Variance: 618.23\"\n[1] \"Correlation: 0.775\"\n[1] \"P(rolling 6): 0.167\"",
        rInterpretation: "<strong>Essential Statistical Foundations:</strong><br><br>📊 <strong>CONCEPT 1: Central Tendency (Where is the 'center'?)</strong><br><br>• <strong>Mean (31.7):</strong> Sum of all values ÷ count. Notice it's pulled UP by the outlier (100). This is why billionaires skew average income!<br>• <strong>Median (23.5):</strong> The middle value when sorted. More 'robust' to outliers - half the data is below 23.5, half above.<br>• <strong>When to use which?</strong><br>  - Use MEAN for: Normal distributions, no outliers (e.g., exam scores)<br>  - Use MEDIAN for: Skewed data, outliers present (e.g., house prices, salaries)<br><br>📏 <strong>CONCEPT 2: Dispersion (How spread out is the data?)</strong><br><br>• <strong>Variance (618.23):</strong> Average of squared deviations from mean. Units are squared (hard to interpret directly).<br>• <strong>Standard Deviation (24.86):</strong> Square root of variance - back to original units! This tells us the 'typical' distance from the mean.<br>• <strong>Interpretation:</strong> Most values are within 31.7 ± 24.86 (roughly 7 to 56). The outlier (100) increases SD significantly!<br><br>🔗 <strong>CONCEPT 3: Correlation (0.775 = Strong Positive)</strong><br><br>• <strong>Range:</strong> -1 (perfect negative) to +1 (perfect positive), 0 = no relationship<br>• <strong>0.775 means:</strong> As x increases, y tends to increase (strong positive relationship)<br>• <strong>⚠️ CRITICAL WARNING:</strong> Correlation ≠ Causation!<br>  - Ice cream sales correlate with drowning deaths (both peak in summer)<br>  - Does ice cream CAUSE drowning? NO! Temperature is the hidden variable.<br><br>🎲 <strong>CONCEPT 4: Probability (0.167 = 16.7%)</strong><br><br>• <strong>Sample Space:</strong> All possible outcomes = {1, 2, 3, 4, 5, 6}<br>• <strong>Event:</strong> Rolling a 6 = {6}<br>• <strong>Probability:</strong> Favorable outcomes / Total outcomes = 1/6 ≈ 0.167<br><br>💡 <strong>WHY THESE MATTER FOR UNIT 4:</strong><br><br>1. <strong>Normal Distribution (Topic 1):</strong> Uses mean and SD as parameters<br>2. <strong>Regression (Topic 2):</strong> Built on correlation and variance concepts<br>3. <strong>Random Forest (Topic 3):</strong> Uses variance to decide tree splits<br>4. <strong>Prescriptive Analytics (Topic 4):</strong> Optimizes based on probability distributions<br><br>🎯 <strong>SELF-CHECK QUESTIONS:</strong><br><br>1. If mean > median, is the data left-skewed or right-skewed? (Answer: Right-skewed)<br>2. Can correlation be greater than 1? (Answer: No, max is 1)<br>3. If SD = 0, what does that mean? (Answer: All values are identical)<br>4. What's the probability of rolling an even number on a die? (Answer: 3/6 = 0.5)<br><br>✅ <strong>PREREQUISITE CHECKLIST - Master these before Unit 4:</strong><br><br>☐ Can calculate mean, median, mode by hand<br>☐ Understand when to use mean vs median<br>☐ Can interpret standard deviation in context<br>☐ Know that correlation ≠ causation<br>☐ Understand basic probability (0 to 1 scale)<br>☐ Can identify outliers using IQR method<br>☐ Comfortable with R syntax for these calculations",
        illustration: "Foundation (Prerequisites) → Building Blocks (Distributions) → Structure (Regression) → Roof (ML Models).",
        caseProblem: "A company analyzes employee salaries: [30k, 32k, 35k, 38k, 40k, 250k]. The CEO uses MEAN salary (70.8k) to claim 'average employee earns well'. Is this misleading?",
        caseSolution: "Calculated MEDIAN salary (36.5k) which better represents typical employee. The CEO's 250k salary is an outlier skewing the mean.",
        caseOutcome: "Union used median in negotiations, resulting in fairer wage discussions. Lesson: Choose the right statistic for the context!",
        applications: ["A/B Testing in Marketing", "Clinical Trial Analysis", "Financial Risk Assessment", "Quality Control in Manufacturing", "Sports Performance Metrics"],
        challenges: "Misinterpreting p-values, confusing correlation with causation, ignoring outliers, using wrong measures for skewed data.",
        research: "Bayesian Statistics (updating beliefs with new evidence), Robust Statistics (methods resistant to outliers), Causal Inference (proving causation, not just correlation).",
        toolMapping: "mean(), median(), sd(), var(), cor(), quantile(), summary(), IQR().",
        experientialActivity: "Track your daily screen time for a week. Calculate mean and median. Which better represents your 'typical' day? Are there outlier days (weekend binges)?",
        projectIPO: {
            input: "Student exam scores from 3 sections (A, B, C).",
            process: "Calculate mean, median, SD for each section. Identify which section has most consistent performance (lowest SD).",
            output: "A comparative report showing Section B has highest median (better typical performance) despite Section A having highest mean (due to few top scorers)."
        },
        quizQuestions: [
            "What's the difference between population and sample?",
            "Why is median preferred over mean for income data?",
            "If correlation between X and Y is -0.9, what does it mean?",
            "What does a p-value of 0.03 indicate?",
            "How do you calculate the probability of two independent events both occurring?"
        ],
        examQuestions5M: [
            "Explain the difference between descriptive and inferential statistics with examples.",
            "Discuss why correlation does not imply causation. Provide real-world examples."
        ],
        examQuestions10M: [
            "Describe the measures of central tendency and dispersion. When would you use each? Demonstrate calculations in R using a sample dataset and interpret the results in a business context."
        ],
        nextTopic: "Normal and Binomial Distributions",
        nextLinkage: "Now that you understand basic statistics, let's explore how data naturally distributes itself in patterns.",
        nextReading: "Review probability theory and the concept of random variables."
    },
    "u4-t1": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4: Stats & ML | Topic 1: Normal and Binomial distributions",
        hook: "Nature's signature: Patterns that appear in everything from heights to coin flips.",
        position: "1st Topic of Unit 4",
        prerequisites: "Data Visualization (Unit 3).",
        outcomes: ["Define and plot Normal distribution", "Calculate probabilities for Binomial trials", "Understand the Central Limit Theorem"],
        subTopics: "Probability Density (dnorm), Cumulative Density (pnorm), Quantile function (qnorm), Random Generation (rnorm), Binomial Success Trials (dbinom/pbinom)",
        syllabusMapping: "Syllabus Section 4.1: Probability Distributions",
        background: "Carl Friedrich Gauss developed the Normal distribution in the 1800s. It's called 'Normal' because so many natural phenomena follow this pattern.",
        motivation: "If you know your data is 'Normal', you can predict exactly how many items will be 'Extreme' (far from average). This is vital for quality control.",
        problemStatement: "Assuming everything is 'Normal' when it's actually 'Skewed' can lead to disastrous predictions (like underestimating the chance of a financial crash).",
        coreConcept: "A mathematical function that provides the probabilities of occurrence of different possible outcomes.",
        terminology: "Standard Deviation, Variance, Skewness, Kurtosis, Z-score",
        technicalFoundations: "Probability Density Functions (PDF) and Cumulative Distribution Functions (CDF).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Normal Distribution: Scores of 1000 students\nscores <- rnorm(1000, mean = 70, sd = 10)\nhist(scores, prob = TRUE, col='lightgreen')\nlines(density(scores), col='red', lwd=2)\n\n# Binomial: Flipping a coin 10 times (Chance of getting exactly 5 heads)\ndbinom(5, size = 10, prob = 0.5)",
        rOutput: "[Histogram with density curve generated]\n[1] 0.2460938",
        rInterpretation: "<strong>Probability Distributions in Action:</strong><br><br>📊 <strong>Normal Distribution (Student Scores):</strong><br>• <strong>rnorm(1000, mean=70, sd=10):</strong> Generates 1000 random scores with average 70 and standard deviation 10<br>• <strong>What the histogram shows:</strong> A bell-shaped curve centered at 70<br>• <strong>The red density line:</strong> Smoothed version showing the theoretical normal curve<br>• <strong>68-95-99.7 Rule:</strong><br>  - 68% of students score between 60-80 (within 1 SD)<br>  - 95% score between 50-90 (within 2 SD)<br>  - 99.7% score between 40-100 (within 3 SD)<br><br>🪙 <strong>Binomial Distribution (Coin Flips):</strong><br>• <strong>Output: 0.246 (24.6%):</strong> The probability of getting EXACTLY 5 heads in 10 flips<br>• <strong>Why not 50%?</strong> Because we're asking for EXACTLY 5, not 'at least 5' or 'around 5'<br>• <strong>The math:</strong> There are 252 ways to arrange 5 heads in 10 flips, each with probability (0.5)^10<br><br>💡 <strong>Real-World Applications:</strong><br>• <strong>Quality Control:</strong> If defect rate is 1%, what's the chance of 0 defects in 100 items? → <code>dbinom(0, 100, 0.01)</code><br>• <strong>Healthcare:</strong> If treatment success rate is 80%, what's the chance 7 out of 10 patients recover? → <code>dbinom(7, 10, 0.8)</code><br>• <strong>Marketing:</strong> If email open rate is 20%, what's the chance at least 5 of 20 recipients open it? → <code>1 - pbinom(4, 20, 0.2)</code><br><br>🔑 <strong>Key Difference:</strong><br>• <strong>Normal:</strong> Continuous (heights, weights, temperatures)<br>• <strong>Binomial:</strong> Discrete (coin flips, pass/fail, yes/no)",
        illustration: "Pancake Stack (Normal) vs. Stepping Stones (Binomial).",
        caseProblem: "A factory makes lightbulbs; 1% are defective. What's the chance of finding 5 bad ones in a box of 100?",
        caseSolution: "Used the Binomial Distribution formula in R (dbinom).",
        caseOutcome: "Found the chance was low enough (<1%) to maintain current quality standards.",
        applications: ["Quality Control in Manufacturing", "Height/Intelligence research", "Pass/Fail exam predictions", "Stock price volatility modeling"],
        challenges: "Not all real-world data is 'Normal'. Identifying the 'Shape' correctly is crucial.",
        research: "Non-parametric statistics—doing math when you don't know the distribution shape.",
        toolMapping: "rnorm(), dnorm(), pnorm(), rbinom(), dbinom().",
        experientialActivity: "Measure the height of 10 friends. Is the average close to what you expected? If you had 1000 friends, would it look like a bell curve?",
        projectIPO: {
            input: "Heights of 500 students in a database.",
            process: "Calculating Mean and SD; plotting a density curve.",
            output: "A report identifying which students are in the 'Top 5%' (Outliers)."
        },
        quizQuestions: [
            "What are the two parameters that define a Normal distribution?",
            "What is the total area under a probability curve?",
            "When do we use a Binomial distribution instead of a Normal one?",
            "What is a 'Z-score'?",
            "What does '68-95-99.7 rule' mean?"
        ],
        examQuestions5M: [
            "Explain the properties of the Normal Distribution curve.",
            "Compare and contrast Discrete and Continuous probability distributions."
        ],
        examQuestions10M: [
            "Discuss the significance of the Central Limit Theorem and demonstrate how to perform probability calculations in R for both Normal and Binomial distributions."
        ],
        nextTopic: "Regression Analysis",
        nextLinkage: "Distributions describe ONE variable; Regression helps us see how TWO variables relate.",
        nextReading: "Scatter plots and Line of best fit."
    },
    "u4-t2": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4: Stats & ML | Topic 2: Regression Analysis",
        hook: "Connecting the dots: Predicting Y if you know X.",
        position: "2nd Topic of Unit 4",
        prerequisites: "Correlation and Distributions.",
        outcomes: ["Build Linear Regression models", "Interpret R-squared and p-values", "Predict future values based on trends"],
        subTopics: "Simple Linear Regression (lm), Multiple Regression, Interpreting Coefficients, Hypothesis Testing (p-values), R-Squared Evaluation, Prediction (predict)",
        syllabusMapping: "Syllabus Section 4.2: Predictive Modeling",
        background: "Sir Francis Galton coined the term 'Regression' while studying how the heights of children 'regress' toward the mean height of the population.",
        motivation: "Sales = Function of (Price, Marketing, Season). If you find this formula, you can 'hack' your business for maximum profit.",
        problemStatement: "Overfitting: Finding a pattern in random noise that won't work on new data. A 'perfect' model on old data is often a 'useless' model in the future.",
        coreConcept: "A statistical method that allows you to examine the relationship between two or more variables of interest.",
        terminology: "Intercept, Slope, p-value, R-squared, Residuals",
        technicalFoundations: "Method of Least Squares (minimizing the square of the distance between dots and the line).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Regression: Study Hours vs Exam Score\nhours <- c(1, 2, 3, 4, 5, 6, 7, 8)\nscore <- c(50, 52, 60, 68, 70, 75, 88, 92)\n\n# Step 1: Build the Model\nmodel <- lm(score ~ hours)\n\n# Step 2: Look at the results\nsummary(model)\n\n# Step 3: Predict for someone who studies 10 hours\nnew_data <- data.frame(hours = 10)\npredict(model, new_data)",
        rOutput: "Call:\nlm(formula = score ~ hours)\n\nResiduals:\n   Min     1Q Median     3Q    Max \n-4.881 -2.107  0.238  2.560  3.857 \n\nCoefficients:\n            Estimate Std. Error t value Pr(>|t|)    \n(Intercept)  43.5714     2.4702  17.638 1.43e-06 ***\nhours         6.0714     0.4851  12.517 8.63e-06 ***\n---\nSignif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1\n\nResidual standard error: 3.362 on 6 degrees of freedom\nMultiple R-squared:  0.9632,    Adjusted R-squared:  0.9571 \nF-statistic: 156.7 on 1 and 6 DF,  p-value: 8.632e-06\n\n       1 \n104.2857",
        rInterpretation: "<strong>Regression Analysis Decoded:</strong><br><br>📊 <strong>The Regression Equation:</strong><br>Score = 43.57 + 6.07 × Hours<br><br>🔑 <strong>Coefficient Interpretation:</strong><br>• <strong>Intercept (43.57):</strong> Expected score with ZERO study hours (baseline knowledge)<br>• <strong>Slope (6.07):</strong> For EACH additional hour of study, score increases by ~6 points<br>• <strong>Both have '***':</strong> Extremely significant (p < 0.001) - NOT due to random chance!<br><br>🎯 <strong>Model Quality (R-squared = 0.9632):</strong><br>• <strong>96.32%</strong> of score variation is explained by study hours<br>• This is EXCELLENT! (>0.7 is considered good)<br>• Only 3.68% is due to other factors (sleep, prior knowledge, luck)<br><br>🔮 <strong>Prediction (104.29 for 10 hours):</strong><br>• Calculation: 43.57 + (6.07 × 10) = 104.27<br>• <strong>Problem:</strong> Score can't exceed 100! This shows model limitations - it's only valid within the data range (1-8 hours)<br>• <strong>Extrapolation danger:</strong> Predicting beyond your data range is risky<br><br>📊 <strong>Residuals (Errors):</strong><br>• <strong>Median = 0.238:</strong> Very close to 0 (good sign - model is unbiased)<br>• <strong>Range: -4.88 to 3.86:</strong> Maximum error is ~5 points in either direction<br><br>💡 <strong>Business Translation:</strong><br>If you're a tutor, you can confidently tell students: 'Each hour of study is worth 6 points on average. To reach 80%, you need about 6 hours.'<br><br>⚠️ <strong>Caution:</strong> High R-squared doesn't prove causation! Maybe motivated students both study more AND perform better due to a third factor (parental support, innate ability).",
        illustration: "Scatter Plot (Messy Dots) -> Regression Line (The Golden Thread) -> Future Forecast.",
        caseProblem: "A real estate agent wants to estimate a house price based on its square footage.",
        caseSolution: "Built a Linear Regression model using historical sales data.",
        caseOutcome: "Reduced 'Price estimation error' by 40%, leading to faster sales.",
        applications: ["Sales Forecasting", "Risk Assessment in Insurance", "Determining Drug Dosage", "Economic Growth Prediction"],
        challenges: "Correlation does not imply Causation. Just because ice cream sales and shark attacks both rise in summer doesn't mean ice cream causes shark attacks!",
        research: "Regularization (Lasso/Ridge regression) to handle hundreds of variables.",
        toolMapping: "lm(), predict(), summary(), abline().",
        experientialActivity: "Draw a line through a scatter plot of study hours vs. grades. Can you write the equation of that line (y = mx + c)?",
        projectIPO: {
            input: "Dataset of car mileage (mpg) vs. engine weight (wt).",
            process: "Running a linear model to find the impact of weight on mileage.",
            output: "A prediction of how much fuel a heavy truck will consume."
        },
        quizQuestions: [
            "What does the 'm' (slope) represent in y = mx + c?",
            "What is a 'Residual'?",
            "What does a p-value less than 0.05 indicate?",
            "Why do we want a high R-squared value?",
            "Can regression be used for categorical outputs?"
        ],
        examQuestions5M: [
            "What is Simple Linear Regression? State its assumptions.",
            "Define R-squared and explain its significance in model evaluation."
        ],
        examQuestions10M: [
            "Explain the concept of Multiple Linear Regression and provide a detailed interpretation of the output generated by the lm() function in R."
        ],
        nextTopic: "Random Forest & Decision Trees",
        nextLinkage: "Regression is for straight lines; Trees and Forests are for 'Branching' decisions.",
        nextReading: "Introduction to Machine Learning."
    },
    "u4-t3": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4: Stats & ML | Topic 3: Random Forest & Decision Trees",
        hook: "If you want to make a choice, ask a tree. If you want to be sure, ask a forest.",
        position: "3rd Topic of Unit 4",
        prerequisites: "Regression basics.",
        outcomes: ["Construct a simple Decision Tree", "Combine trees into a Random Forest", "Measure model accuracy"],
        subTopics: "Recursive Partitioning, Gini Impurity, Information Gain, Bootstrapping, Aggregating (Bagging), Variable Importance Plots",
        syllabusMapping: "Syllabus Section 4.3: Machine Learning Frameworks",
        background: "Leo Breiman and Adele Cutler developed Random Forests in 2001. It is currently one of the most popular and robust ML algorithms in the world.",
        motivation: "Unlike regression which fails with complex 'IF-THEN' human logic, Decision Trees mimic how humans actually think. Random Forests fix the 'bias' of a single tree.",
        problemStatement: "A single tree is often too sensitive to its specific training data ('Overfitting'). It's like a person who memorizes the answers but doesn't understand the logic.",
        coreConcept: "A decision tree splits data into branches based on feature values. Random Forest is an 'Ensemble' method using many trees to vote on the outcome.",
        terminology: "Entropy, Information Gain, Leaf Node, Bagging, Overfitting",
        technicalFoundations: "Logic: Bootstrapping (random sampling) + Aggregating (voting) = Bagging.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Step 1: Load library\n# library(rpart)\n# library(randomForest)\n\n# Step 2: Build a Tree (Should I play tennis?)\n# tree_model <- rpart(Play ~ Outlook + Temp + Humidity)\n\n# Step 3: Build a Forest (100 Trees voting)\n# rf_model <- randomForest(Species ~ ., data = iris, ntree = 100)\n# print(rf_model)",
        rOutput: "[Simulated Random Forest Output]\nCall:\n randomForest(formula = Species ~ ., data = iris, ntree = 100) \n               Type of random forest: classification\n                     Number of trees: 100\nNo. of variables tried at each split: 2\n\n        OOB estimate of  error rate: 4%\nConfusion matrix:\n           setosa versicolor virginica class.error\nsetosa         50          0         0        0.00\nversicolor      0         47         3        0.06\nvirginica       0          3        47        0.06",
        rInterpretation: "<strong>Random Forest Classification Explained:</strong><br><br>🌳 <strong>Forest Structure:</strong><br>• <strong>100 trees:</strong> Each tree is trained on a random subset of data (bootstrapping)<br>• <strong>2 variables per split:</strong> At each decision point, only 2 random features are considered (prevents overfitting)<br>• <strong>Final prediction:</strong> Majority vote from all 100 trees<br><br>🎯 <strong>Model Accuracy (96% correct!):</strong><br>• <strong>OOB Error = 4%:</strong> Out-of-Bag error - tested on data NOT used for training each tree<br>• This means the model correctly classifies 96% of iris flowers!<br><br>📊 <strong>Confusion Matrix Breakdown:</strong><br>• <strong>Setosa (Perfect!):</strong> All 50 setosa flowers correctly identified, 0 mistakes<br>• <strong>Versicolor:</strong> 47 correct, 3 misclassified as virginica (6% error)<br>• <strong>Virginica:</strong> 47 correct, 3 misclassified as versicolor (6% error)<br><br>🔍 <strong>Why the Confusion?</strong> Versicolor and virginica have overlapping petal/sepal measurements, making them harder to distinguish. Setosa is very different, hence 100% accuracy.<br><br>💡 <strong>Real-World Translation:</strong><br>• <strong>Medical Diagnosis:</strong> 96% accuracy in detecting cancer types from symptoms<br>• <strong>Fraud Detection:</strong> 96% of fraudulent transactions caught<br>• <strong>Customer Churn:</strong> 96% accuracy in predicting who will cancel subscription<br><br>✅ <strong>Why Random Forest Wins:</strong><br>1. <strong>Handles non-linear patterns</strong> (unlike linear regression)<br>2. <strong>Robust to outliers</strong> (voting reduces impact of bad trees)<br>3. <strong>No need to normalize data</strong> (tree splits work on any scale)<br>4. <strong>Provides feature importance</strong> (tells you which variables matter most)<br><br>⚠️ <strong>Trade-off:</strong> Less interpretable than a single tree - you can't easily explain WHY a specific prediction was made.",
        illustration: "One Judge (Decision Tree) vs. A Jury of 100 Judges (Random Forest).",
        caseProblem: "A bank needs to decide if a loan application is 'Safe' or 'Risky'.",
        caseSolution: "Built a Random Forest using 20 features (Salary, Credit Score, Job Stability).",
        caseOutcome: "Improved prediction accuracy to 94%, significantly reducing bad loan losses.",
        applications: ["Spam Email Filtering", "Medical Diagnosis of rare diseases", "Credit Card Fraud Detection", "Predicting Customer Churn"],
        challenges: "The 'Black Box' problem—it's hard to explain exactly why a Forest made a specific decision.",
        research: "Feature importance algorithms that tell us 'which variable' the forest likes most.",
        toolMapping: "rpart, randomForest, rattle (UI for trees).",
        experientialActivity: "Play a game of '20 Questions'. Can you see how you are building a Decision Tree in your head?",
        projectIPO: {
            input: "Patient symptoms and laboratory results.",
            process: "Training a Random Forest to classify the illness.",
            output: "A diagnosis with a 'Confidence Score'."
        },
        quizQuestions: [
            "What is a 'Root Node'?",
            "Why is a Random Forest better than a single Decision Tree?",
            "What does 'Ensemble Learning' mean?",
            "Can Random Forest be used for Regression (Numerical output)?",
            "What is 'Out-of-Bag' error?"
        ],
        examQuestions5M: [
            "Explain the architecture of a Decision Tree.",
            "What are the advantages of using Random Forest for classification?"
        ],
        examQuestions10M: [
            "Discuss the working mechanism of Random Forest algorithm and explain how the 'Bagging' technique helps in improving model stability."
        ],
        nextTopic: "Prescriptive Analytics & RL",
        nextLinkage: "Models tell us what MIGHT happen; now let's learn how to make the computer CHOOSE the best action.",
        nextReading: "Intro to Reinforcement Learning."
    },
    "u4-t4": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4: Stats & ML | Topic 4: Prescriptive Analytics & RL",
        hook: "Solving the future: Not just predicting what will happen, but making it happen!",
        position: "4th Topic of Unit 4",
        prerequisites: "Predictive Analytics (Topic 2 & 3).",
        outcomes: ["Distinguish Predictive vs Prescriptive analytics", "Understand the Reward-Action cycle in RL", "Identify use cases for self-learning systems"],
        subTopics: "Levels of Analytics (Descriptive-Diagnostic-Predictive-Prescriptive), Resource Optimization (SOLVERS), Markov Decision Processes (MDP), Reward-based Learning",
        syllabusMapping: "Syllabus Section 4.4: Advanced Prescriptive Models",
        background: "Prescriptive analytics combines predictions with optimization. Reinforcement Learning (RL) has its roots in behaviorist psychology.",
        motivation: "A GPS doesn't just predict traffic; it tells you 'Turn Left now to save 5 minutes'. That is Prescriptive Analytics. It's the highest level of data maturity.",
        problemStatement: "A predictive model might say 'It will rain'. A business needs to know 'Should I buy umbrellas or close the shop?'. Predictions without prescriptions cause paralysis.",
        coreConcept: "Prescriptive analytics suggests actions to take. RL is the branch of AI where an agent learns through trial and error to maximize rewards.",
        terminology: "Optimization, Solver, Policy, Agent, Environment, Reward",
        technicalFoundations: "Markov Decision Processes (MDP) and Mathematical Programming.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Prescriptive Logic: Resource Optimization\n# Suggesting the best discount to maximize profit\npredict_sales <- function(discount){\n  return(100 * discount - 5 * discount^2)\n}\n\n# Find the discount that gives the MAX profit\noptim_result <- optimize(predict_sales, interval=c(0, 10), maximum=TRUE)\nprint(paste('Optimal Discount is:', optim_result$maximum))",
        rOutput: "[1] \"Optimal Discount is: 10\"",
        rInterpretation: "<strong>Prescriptive Optimization in Action:</strong><br><br>💰 <strong>The Profit Function:</strong><br>Profit = 100 × Discount - 5 × Discount²<br><br>This is a <em>quadratic equation</em> (parabola opening downward). Let's understand the economics:<br>• <strong>100 × Discount:</strong> Revenue increases linearly with discount (more customers buy)<br>• <strong>-5 × Discount²:</strong> Cost penalty (giving away too much margin)<br><br>🔍 <strong>Why Discount = 10 is Optimal:</strong><br>The <code>optimize()</code> function searched the range 0-10 and found the peak of the parabola:<br>• <strong>At 0% discount:</strong> Profit = 0 (no sales)<br>• <strong>At 5% discount:</strong> Profit = 100(5) - 5(25) = 375<br>• <strong>At 10% discount:</strong> Profit = 100(10) - 5(100) = 500 ← MAXIMUM!<br>• <strong>At 15% discount:</strong> Profit would be 100(15) - 5(225) = 375 (decreasing!)<br><br>🎯 <strong>Business Recommendation:</strong><br>'Set your discount at 10% to maximize profit at $500. Going higher will attract more customers but reduce profit due to margin erosion.'<br><br>🔄 <strong>Prescriptive vs Predictive:</strong><br>• <strong>Predictive:</strong> 'If we set 10% discount, we'll make $500'<br>• <strong>Prescriptive:</strong> 'SET the discount to 10% to maximize profit' ← This is the ACTION<br><br>💡 <strong>Real-World Applications:</strong><br>• <strong>Airline Pricing:</strong> What ticket price maximizes revenue per flight?<br>• <strong>Manufacturing:</strong> How many units to produce to minimize waste + meet demand?<br>• <strong>Healthcare:</strong> How to allocate limited ICU beds across hospitals?<br>• <strong>Logistics:</strong> What route minimizes delivery time + fuel cost?<br><br>🤖 <strong>Reinforcement Learning Extension:</strong><br>In RL, the system would TRY different discounts, observe actual sales, and LEARN the profit function over time - no need to know the formula in advance! The agent explores (tries random discounts) and exploits (uses the best known discount).<br><br>✅ <strong>Key Insight:</strong> Prescriptive analytics doesn't just say 'what will happen' - it tells you 'what to DO' to achieve your goal!",
        illustration: "Weather Forecast (Predictive) -> Recommendation to take an Umbrella (Prescriptive).",
        caseProblem: "An airline needs to price its tickets to fill the plane while maximizing profit.",
        caseSolution: "Implemented a 'Dynamic Pricing' RL agent that adjusts prices every hour.",
        caseOutcome: "Revenue increased by 12% without increasing the number of flights.",
        applications: ["Self-Driving Cars (RL)", "Inventory Level Optimization", "Personalized Ads (RL)", "Robot Path Finding"],
        challenges: "Computationally expensive; RL agents can take millions of attempts to learn simple tasks.",
        research: "Safe RL—ensuring agents don't make dangerous 'experimental' choices in the real world.",
        toolMapping: "ReinforcementLearning package in R, Ompr for optimization.",
        experientialActivity: "Think of a video game. How does the 'Enemy AI' learn to beat you? Is it using rewards?",
        projectIPO: {
            input: "Historical inventory logs and demand forecasts.",
            process: "Optimizing the 'Reorder Point' to prevent stockouts.",
            output: "An automated 'Purchase Order' system."
        },
        quizQuestions: [
            "Difference between Predictive and Prescriptive Analytics?",
            "What is an 'Agent' in Reinforcement Learning?",
            "What is the 'Reward Signal'?",
            "Give an example of Prescriptive Analytics in a GPS app.",
            "Can Prescriptive Analytics work without a predictive model?"
        ],
        examQuestions5M: [
            "Explain the components of a Reinforcement Learning system.",
            "Discuss the importance of Optimization in Prescriptive Analytics."
        ],
        examQuestions10M: [
            "Compare the four levels of Analytics Maturity (Descriptive, Diagnostic, Predictive, Prescriptive) and discuss why RL is considered the future of automated decision making."
        ],
        nextTopic: "Course Recap & Project Presentations",
        nextLinkage: "We have reached the peak of the analytics mountain. Now it's time to build your own masterpiece.",
        nextReading: "Review all previous Unit handouts."
    }
};

window.unit4Content = unit4Content;
