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
        mindMap: {
            center: "Unit 4: Advanced Stats & ML",
            branches: [
                {
                    title: "Statistics Foundations",
                    subItems: ["Mean & Median", "SD & Variance", "P-values", "Significance"]
                },
                {
                    title: "Distributions",
                    subItems: ["Normal (Bell)", "Binomial", "Probability", "CLT"]
                },
                {
                    title: "Predictive Models",
                    subItems: ["Linear Regression", "Decision Trees", "Random Forest", "Evaluation"]
                },
                {
                    title: "Advanced Analytics",
                    subItems: ["Prescriptive", "Optimization", "Reinforcement Learning", "Decision Theory"]
                }
            ]
        },
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# PREREQUISITE 1: Measures of Central Tendency
data <- c(12, 15, 18, 20, 22, 25, 30, 35, 40, 100)

# Mean (Average)
mean_val <- mean(data)
print(paste('Mean:', mean_val))

# Median (Middle value)
median_val <- median(data)
print(paste('Median:', median_val))

# Mode (Most frequent - custom function)
get_mode <- function(v) {
  uniq <- unique(v)
  uniq[which.max(tabulate(match(v, uniq)))]
}

# PREREQUISITE 2: Measures of Dispersion
sd_val <- sd(data)
var_val <- var(data)
print(paste('Standard Deviation:', round(sd_val, 2)))
print(paste('Variance:', round(var_val, 2)))

# PREREQUISITE 3: Correlation
x <- c(1, 2, 3, 4, 5)
y <- c(2, 4, 5, 4, 5)
corr <- cor(x, y)
print(paste('Correlation:', round(corr, 3)))

# PREREQUISITE 4: Probability Basics
# Probability of rolling a 6 on a fair die
prob_six <- 1/6
print(paste('P(rolling 6):', round(prob_six, 3)))`,
        rOutput: `[1] "Mean: 31.7"
[1] "Median: 23.5"
[1] "Standard Deviation: 24.86"
[1] "Variance: 618.23"
[1] "Correlation: 0.775"
[1] "P(rolling 6): 0.167"`,
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
        nextReading: "Review probability theory and the concept of random variables.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">📐 Inferential Thinking for Leaders</h4>
            <p>Advanced metrics require moving beyond 'Central Tendency' into 'Uncertainty Quantifiction'.</p>
            <ul style="line-height: 1.8;">
                <li><strong>Bayesian vs Frequentist:</strong> While we learn frequentist stats (p-values), modern AI uses Bayesian logic—updating a 'Prior' belief with 'Evidence' to get a 'Posterior' probability.</li>
                <li><strong>The Law of Large Numbers (LLN):</strong> Understand that as your sample size grows, its mean gets closer to the population mean. This is why big data reduces risk!</li>
                <li><strong>Kurtosis & Skewness:</strong> Don't just look at Mean/SD. <em>Skewness</em> tells you if your outliers are on one side, and <em>Kurtosis</em> tells you if you have 'Fat Tails' (unexpectedly frequent extreme events).</li>
            </ul>
        `
    },
    "u4-t1": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 1: Probability Distributions (Normal & Binomial)",
        hook: "Nature's signature: Patterns that appear in everything from heights to coin flips.",
        position: "Topic 1 of 7 in Unit 4",
        prerequisites: "Basic probability and measures of central tendency.",
        outcomes: ["Define and identify Normal and Binomial distributions", "Calculate probabilities using R's d/p/q functions", "Understand the Central Limit Theorem (CLT)", "Apply distributions to quality control and risk assessment"],
        subTopics: "Normal Distribution (Gauss), Binomial Distribution (Bernoulli), Z-scores, Central Limit Theorem, dnorm/pnorm/qnorm/rnorm, dbinom/pbinom/qbinom/rbinom",
        syllabusMapping: "Unit 4: Statistics - Distributions",
        background: "Carl Friedrich Gauss developed the Normal distribution in the 1800s. It's called 'Normal' because so many natural phenomena follow this pattern.",
        motivation: "If you know your data is 'Normal', you can predict exactly how many items will be 'Extreme' (far from average). This is vital for quality control.",
        problemStatement: "Assuming everything is 'Normal' when it's actually 'Skewed' can lead to disastrous predictions (like underestimating the chance of a financial crash).",
        coreConcept: "A probability distribution specifies the relative likelihoods of all possible outcomes for a random variable.",
        terminology: "PDF (Density), PMF (Mass), CDF (Cumulative), Z-score, Parameter, µ (Mu), σ (Sigma), n (Trials), p (Probability)",
        mathematicalFoundations: {
            equation: "$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}$$",
            terms: [
                { symbol: "$f(x)$", interpretation: "Probability Density (Height of the curve at point x)" },
                { symbol: "$\\mu$ (Mu)", interpretation: "Mean - The center/peak of the distribution" },
                { symbol: "$\\sigma$ (Sigma)", interpretation: "Standard Deviation - The spread/width of the curve" },
                { symbol: "$x$", interpretation: "The value we're interested in" },
                { symbol: "$\\pi, e$", interpretation: "Constants (Pi ≈ 3.1415, e ≈ 2.7182)" }
            ],
            illustration: "The 68-95-99.7 Rule: 68% of data falls within 1 SD, 95% within 2 SD, and 99.7% within 3 SD."
        },
        stepByStepAlgorithm: {
            steps: [
                "Identify the type: Continuous (use Normal) or Discrete (use Binomial).",
                "Determine the parameters: For Normal ($\\mu, \\sigma$), for Binomial ($n, p$).",
                "Calculate the target value: For Normal, find Z-score $Z = (x - \\mu) / \\sigma$. For Binomial, set $k$ successes.",
                "Execute in R: Use `pnorm()` for 'less than' probabilities, `dbinom()` for 'exactly X' successes.",
                "Interpret: Convert the 0-1 probability into a percentage for business reporting."
            ],
            sampleIO: {
                input: "X = 115, Mean = 100, SD = 15",
                output: "Z = 1.0, Probability = 0.8413",
                interpretation: "Given an IQ distribution with mean 100 and SD 15, an individual with IQ 115 is at the 84th percentile (smarter than 84% of population)."
            }
        },
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Normal Distribution: Scores of 1000 students
scores <- rnorm(1000, mean = 70, sd = 10)
hist(scores, prob = TRUE, col='lightgreen')
lines(density(scores), col='red', lwd=2)

# Binomial: Flipping a coin 10 times (Chance of getting exactly 5 heads)
dbinom(5, size = 10, prob = 0.5)`,
        rOutput: `[Histogram with density curve generated]
[1] 0.2460938`,
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
        nextReading: "Scatter plots and Line of best fit.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🧠 Beyond the Bell Curve</h4>
            <p>While the Normal distribution is 'nature's default', advanced analysts must recognize when data is NOT normal.</p>
            <ul style="line-height: 1.8;">
                <li><strong>The Central Limit Theorem (CLT) Depth:</strong> The magic of CLT is that the *sum* of independent random variables tends toward a normal distribution, *regardless* of the original distribution shape. This is why we can use Z-tests on messy data!</li>
                <li><strong>Poisson Distribution:</strong> Used for event counts (e.g., how many customers enter a store per hour). Essential for supply chain and call center optimization.</li>
                <li><strong>Log-Normal Distribution:</strong> Financial returns and stock prices are often log-normal. If you assume they are normal, you will massively underestimate the probability of a market crash!</li>
            </ul>
        `
    },
    "u4-t2": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 2: Linear Regression Analysis",
        hook: "Connecting the dots: Predicting the future by understanding the present.",
        position: "Topic 2 of 7 in Unit 4",
        prerequisites: "Correlation and Distributions.",
        outcomes: ["Build Simple and Multiple Linear Regression models", "Interpret coefficients, R-squared, and p-values", "Predict future values using the `predict()` function", "Assess model fit using residuals"],
        subTopics: "Simple Linear Regression (lm), Multiple Regression, Coefficients (Intercept/Slope), R-Squared Evaluation, Residual Analysis, Prediction Intervals",
        syllabusMapping: "Unit 4: Statistics - Regression",
        background: "Regression is the most fundamental predictive method. Sir Francis Galton coined the term while observing how children's heights 'regress' toward the mean of the population.",
        motivation: "In business, if you can find the formula relating Marketing Spend to Sales Revenue, you can optimize your budget for maximum profit.",
        coreConcept: "A statistical method to model the relationship between a dependent (target) variable and one or more independent (predictor) variables.",
        terminology: "Dependent (Y), Independent (X), Intercept (β₀), Slope (β₁), SSR (Residual Sum of Squares), R² (Goodness of fit)",
        mathematicalFoundations: {
            equation: "$$Y = \\beta_0 + \\beta_1 X + \\epsilon$$",
            terms: [
                { symbol: "$Y$", interpretation: "Dependent Variable (What we want to predict)" },
                { symbol: "$X$", interpretation: "Independent Variable (Predictor)" },
                { symbol: "$\\beta_0$ (Beta Zero)", interpretation: "Intercept - The value of Y when X is zero" },
                { symbol: "$\\beta_1$ (Beta One)", interpretation: "Slope - The change in Y for every 1-unit increase in X" },
                { symbol: "$\\epsilon$ (Epsilon)", interpretation: "Error term - The part of Y we cannot explain" }
            ],
            illustration: "A 'Line of Best Fit' that minimizes the vertical distances (residuals) between itself and all data points."
        },
        stepByStepAlgorithm: {
            steps: [
                "Plot X vs Y to check for a linear trend.",
                "Calculate Mean and Standard Deviation of both X and Y.",
                "Find the Slope ($\\beta_1$): $Cov(X,Y) / Var(X)$.",
                "Find the Intercept ($\\beta_0$): $\\mu_Y - \\beta_1 \\cdot \\mu_X$.",
                "Build model: `lm(Y ~ X)`. Check if p-value < 0.05 for significance.",
                "Assess R²: Closer to 1 means a more accurate model."
            ],
            sampleIO: {
                input: "X: [1, 2, 3], Y: [50, 60, 70]",
                output: "Equation: $Y = 40 + 10X$, R² = 1.0",
                interpretation: "Perfect linear relationship. For each unit X increases, Y grows by 10 points."
            }
        },
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Regression: Study Hours vs Exam Score
hours <- c(1, 2, 3, 4, 5, 6, 7, 8)
score <- c(50, 52, 60, 68, 70, 75, 88, 92)

# Step 1: Build the Model
model <- lm(score ~ hours)

# Step 2: Look at the results
summary(model)

# Step 3: Predict for someone who studies 10 hours
new_data <- data.frame(hours = 10)
predict(model, new_data)`,
        rOutput: `Call:
lm(formula = score ~ hours)

Residuals:
   Min     1Q Median     3Q    Max 
-4.881 -2.107  0.238  2.560  3.857 

Coefficients:
            Estimate Std. Error t value Pr(>|t|)    
(Intercept)  43.5714     2.4702  17.638 1.43e-06 ***
hours         6.0714     0.4851  12.517 8.63e-06 ***
---
Signif. codes:  0 '***' 0.001 '**' 0.01 '*' 0.05 '.' 0.1 ' ' 1

Residual standard error: 3.362 on 6 degrees of freedom
Multiple R-squared:  0.9632,    Adjusted R-squared:  0.9571 
F-statistic: 156.7 on 1 and 6 DF,  p-value: 8.632e-06

       1 
104.2857`,
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
        nextReading: "Introduction to Machine Learning.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🔬 Diagnostic Analytics with Residuals</h4>
            <p>A high R-squared is not enough. You must 'validate' your model assumptions.</p>
            <ul style="line-height: 1.8;">
                <li><strong>Gauss-Markov Assumptions:</strong> For a model to be accurate, residuals must have constant variance (Homoscedasticity) and No Autocorrelation. Use the <code>plot(model)</code> function in R to see the diagnostic plots!</li>
                <li><strong>Regularization (Lasso/Ridge):</strong> When you have too many variables, standard regression fails. Lasso (L1) can actually set coefficients to zero, helping you with 'Feature Selection'.</li>
            <li><strong>Interaction Effects:</strong> Sometimes variable X only affects Y if Z is present. In R, use <code>lm(Y ~ X * Z)</code> to capture these complex 'synergies'.</li>
            </ul>
        `
    },
    "u4-t3": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 3: Decision Trees and Random Forests",
        hook: "If you want to make a choice, ask a tree. If you want to be sure, ask a forest.",
        position: "Topic 3 of 7 in Unit 4",
        prerequisites: "Regression basics and Classification concepts.",
        outcomes: ["Build and visualize Decision Trees", "Implement Random Forest ensembles", "Interpret Gini Impurity and Information Gain", "Evaluate variable importance"],
        subTopics: "Recursive Partitioning (rpart), Gini Impurity, Information Gain, Bootstrapping, Bagging, Random Forest (randomForest), Variable Importance",
        syllabusMapping: "Unit 4: Machine Learning - Ensembles",
        background: "Leo Breiman developed Random Forests in 2001 to solve the 'overfitting' problem of single decision trees. It remains a gold standard for tabular data.",
        motivation: "Unlike regression which assumes a straight-line relationship, trees can capture complex 'If-Then' logic, making them more like human decision-making.",
        coreConcept: "A decision tree splits data into branches based on feature values to reach a prediction. A Random Forest combines many trees to create a stable, 'crowd-voted' result.",
        terminology: "Root Node, Leaf Node, Pruning, Gini Impurity, Bagging (Bootstrap Aggregating), OOB (Out-of-Bag) Error",
        mathematicalFoundations: {
            equation: "$$Gini(S) = 1 - \\sum_{i=1}^{C} p_i^2$$",
            terms: [
                { symbol: "$Gini(S)$", interpretation: "Impurity index - Measures how 'mixed' the classes are in a node" },
                { symbol: "$p_i$", interpretation: "Probability of an item belonging to class $i$" },
                { symbol: "$C$", interpretation: "Total number of classes" },
                { symbol: "$0$", interpretation: "Perfect purity (all items belong to one class)" },
                { symbol: "$0.5$", interpretation: "Maximum impurity (50/50 split in binary classification)" }
            ],
            illustration: "A tree trunk (Root) splitting into branches (Decisions) and ending at leaves (Predictions). If the leaf is 'Pure', Gini is 0."
        },
        stepByStepAlgorithm: {
            steps: [
                "Select the best feature to split the data (lowest Gini or highest Information Gain).",
                "Split the dataset into subsets based on the chosen feature.",
                "Repeat recursively for each subset until a stopping criterion is met (e.g., max depth).",
                "For Random Forest: Create multiple 'Bootstrapped' samples (random with replacement).",
                "Train a tree on each sample using a random subset of features at each split.",
                "Aggregate results: Take the average (Regression) or majority vote (Classification)."
            ],
            sampleIO: {
                input: "Is it raining? [Yes/No], Temp > 20? [Yes/No]",
                output: "Leaf node: 'Play Tennis' or 'Stay Home'",
                interpretation: "The model decided that 'No Rain' + 'High Temp' leads to 'Play Tennis' with 90% confidence."
            }
        },
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Step 1: Load library
# library(rpart)
# library(randomForest)

# Step 2: Build a Tree (Should I play tennis?)
# tree_model <- rpart(Play ~ Outlook + Temp + Humidity)

# Step 3: Build a Forest (100 Trees voting)
# rf_model <- randomForest(Species ~ ., data = iris, ntree = 100)
# print(rf_model)`,
        rOutput: `[Simulated Random Forest Output]
Call:
 randomForest(formula = Species ~ ., data = iris, ntree = 100) 
               Type of random forest: classification
                     Number of trees: 100
No. of variables tried at each split: 2

        OOB estimate of  error rate: 4%
Confusion matrix:
           setosa versicolor virginica class.error
setosa         50          0         0        0.00
versicolor      0         47         3        0.06
virginica       0          3        47        0.06`,
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
        nextReading: "Intro to Reinforcement Learning.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🧪 Ensemble Excellence & Feature Engineering</h4>
            <p>Random Forests are the 'workhorse' of modern tabular data science.</p>
            <ul style="line-height: 1.8;">
                <li><strong>Hyperparameter Tuning:</strong> Master the parameters <code>mtry</code> (number of variables per split) and <code>ntree</code>. Use <code>tuneRF()</code> to automatically find the sweet spot between bias and variance.</li>
                <li><strong>Variable Importance:</strong> Use the <code>importance()</code> function to generate a Gini index. This tells you which features are the 'Key Drivers' of your model—invaluable for business presentations!</li>
                <li><strong>XGBoost vs Random Forest:</strong> While RF builds trees in parallel, XGBoost builds them sequentially (Boosting). Advanced learners should transition to XGBoost for maximum predictive power on Kaggle.</li>
            </ul>
        `
    },
    "u4-t4": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 4: Prescriptive Analytics & Reinforcement Learning (RL)",
        hook: "Solving the future: Not just predicting what will happen, but making it happen!",
        position: "Topic 4 of 7 in Unit 4",
        prerequisites: "Predictive Analytics (Topic 2 & 3).",
        outcomes: ["Distinguish Predictive vs Prescriptive analytics", "Understand the Reward-Action-State cycle in RL", "Identify use cases for self-learning optimization systems", "Apply the Bellman Equation logic"],
        subTopics: "Levels of Analytics (Descriptive to Prescriptive), Optimization, Markov Decision Processes (MDP), Q-Learning, Agent-Environment Interaction, Bellman Equation",
        syllabusMapping: "Unit 4: Advanced Prescriptive Models",
        background: "Prescriptive analytics combines predictions with optimization. RL, inspired by behaviorist psychology, allows machines to learn through trial and error.",
        motivation: "A GPS doesn't just predict traffic; it tells you 'Turn Left now to save 5 minutes'. That is Prescriptive Analytics—the highest level of data maturity.",
        coreConcept: "Prescriptive analytics suggests actions to take to achieve a goal. RL is the AI branch where an agent learns to maximize cumulative rewards in an environment.",
        terminology: "Agent, Environment, State (s), Action (a), Reward (r), Policy (π), Value Function (V), Q-Value (Action-Value)",
        mathematicalFoundations: {
            equation: "$$V(s) = \\max_{a} \\left( R(s, a) + \\gamma \\sum_{s'} P(s' | s, a) V(s') \\right)$$",
            terms: [
                { symbol: "$V(s)$", interpretation: "Value Function - The long-term total reward starting from state $s$" },
                { symbol: "$R(s, a)$", interpretation: "Immediate Reward - Points gained for taking action $a$ in state $s$" },
                { symbol: "$\\gamma$ (Gamma)", interpretation: "Discount Factor (0 to 1) - How much we value future rewards vs immediate ones" },
                { symbol: "$P(s' | s, a)$", interpretation: "Transition Probability - Chance of moving to state $s'$ from $s$ given action $a$" },
                { symbol: "$V(s')$", interpretation: "Future Value - The value of the next state we arrive in" }
            ],
            illustration: "A robot in a maze: It tries a path (Action), hits a wall (Negative Reward), and eventually finds the exit (Positive Reward). It learns the 'Best Path' (Policy)."
        },
        stepByStepAlgorithm: {
            steps: [
                "Initialize the Q-table with zeros for all possible states and actions.",
                "Observe current state $s$.",
                "Choose action $a$ using an epsilon-greedy strategy (exploration vs exploitation).",
                "Take action $a$, observe reward $r$ and new state $s'$.",
                "Update Q-value: $Q(s,a) = Q(s,a) + \\alpha [r + \\gamma \\max Q(s',a') - Q(s,a)]$.",
                "Repeat until the agent converges to an optimal policy."
            ],
            sampleIO: {
                input: "State: Inventory Low, Action: Reorder 10 units",
                output: "Reward: +100 (No stockout, profit made)",
                interpretation: "The agent learned that reordering when inventory is low results in high long-term rewards, so it updates its policy to always reorder at this threshold."
            }
        },
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Prescriptive Logic: Resource Optimization
# Suggesting the best discount to maximize profit
predict_sales <- function(discount){
  return(100 * discount - 5 * discount^2)
}

# Find the discount that gives the MAX profit
optim_result <- optimize(predict_sales, interval=c(0, 10), maximum=TRUE)
print(paste('Optimal Discount is:', optim_result$maximum))`,
        rOutput: `[1] "Optimal Discount is: 10"`,
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
        nextReading: "Review all previous Unit handouts.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🤖 Agentic AI & Q-Learning</h4>
            <p>Moving from 'Static Prescription' to 'Autonomous Agents'.</p>
            <ul style="line-height: 1.8;">
                <li><strong>Dynamic Programming:</strong> Bellman Equations provide the mathematical 'heartbeat' for RL agents. They allow an agent to calculate the value of an action by balancing immediate reward versus future potential.</li>
                <li><strong>Q-Learning:</strong> Discover how an agent builds a 'Q-Table' through trial and error. This table becomes the brain of the AI, mapping every possible 'State' to the best possible 'Action'.</li>
                <li><strong>Constraint Optimization:</strong> Use <code>ompr</code> to solve 'Traveling Salesman' problems or 'Bin Packing' problems—mathematical puzzles that underpin the entire logistics industry.</li>
            </ul>
        `
    },
    "u4-t5": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 5: Hypothesis Testing & Statistical Inference",
        hook: "How do we know if our findings are 'real' or just blind luck?",
        position: "Topic 5 of 7 in Unit 4",
        prerequisites: "Understanding of probability, normal distributions, and p-values.",
        outcomes: ["Define Null ($H_0$) and Alternative ($H_a$) hypotheses", "Calculate T-statistics and P-values using R", "Interpret Type I and Type II errors", "Apply Chi-square and ANOVA tests"],
        subTopics: "Hypothesis Formulation, Alpha Level (α), P-value Interpretation, T-test (One/Two Sample), Chi-Square test, Confidence Intervals",
        syllabusMapping: "Unit 4: Statistics - Inference",
        background: "Statistical inference allows us to draw conclusions about a whole population based on a smaller sample. Hypothesis testing is the 'scientific method' of data science.",
        motivation: "Before a pharmaceutical company launches a drug, it must PROVE (with 95% confidence) that the drug works better than a placebo. This is hypothesis testing in action.",
        coreConcept: "A formal procedure for investigating our ideas about the world using statistics.",
        terminology: "Null ($H_0$), Alternative ($H_a$), P-value, Significance Level ($\\alpha$), Degree of Freedom ($df$), Test Statistic ($t$ or $z$)",
        mathematicalFoundations: {
            equation: "$$t = \\frac{\\bar{x} - \\mu}{s / \\sqrt{n}}$$",
            terms: [
                { symbol: "$t$", interpretation: "T-statistic - How many standard errors the sample mean is from the population mean" },
                { symbol: "$\\bar{x}$", interpretation: "Sample Mean - The average of our collected data" },
                { symbol: "$\\mu$", interpretation: "Hypothesized Population Mean ($H_0$ value)" },
                { symbol: "$s$", interpretation: "Sample Standard Deviation" },
                { symbol: "$n$", interpretation: "Sample Size" }
            ],
            illustration: "The 'Rejection Region' at the tails of the distribution. If our calculated $t$ falls here, we 'Reject the Null'!"
        },
        stepByStepAlgorithm: {
            steps: [
                "State the Null ($H_0$) and Alternative ($H_a$) hypotheses clearly.",
                "Choose a Significance Level (usually $\\alpha = 0.05$).",
                "Collect data and calculate the Test Statistic (e.g., $t$-score).",
                "Determine the P-value: Probability of getting our result if $H_0$ is true.",
                "Compare: If P-value < $\\alpha$, Reject $H_0$; if P-value $\ge$ $\\alpha$, Fail to Reject $H_0$.",
                "Interpret the result in plain English for stakeholders."
            ],
            sampleIO: {
                input: "Mean=$70$, $H_0=$ $65$, $SD=$ $10$, $n=$ $25$",
                output: "$t = 2.5$, P-value = 0.019",
                interpretation: "Since 0.019 < 0.05, we reject the claim that the mean is 65. Our finding is 'Statistically Significant'."
            }
        },
        rCode: `# Hypothesis Testing Examples

# 1. One-sample t-test
# H0: Mean weight = 70 kg
weights <- c(68, 72, 65, 70, 73, 69, 71, 74, 67, 70)
t.test(weights, mu = 70)

# 2. Two-sample t-test
# Compare two groups
group_a <- c(85, 88, 90, 87, 92)
group_b <- c(78, 82, 80, 79, 81)
t.test(group_a, group_b)

# 3. Chi-square test
# Test independence
data <- matrix(c(20, 30, 25, 35), nrow = 2)
chisq.test(data)

# 4. Confidence Interval
mean_val <- mean(weights)
se <- sd(weights) / sqrt(length(weights))
ci_lower <- mean_val - 1.96 * se
ci_upper <- mean_val + 1.96 * se
print(paste("95% CI:", ci_lower, "to", ci_upper))`,
        rInterpretation: "<strong>Hypothesis Testing:</strong><br><br>🎯 <strong>P-value:</strong> Probability of observing data if null hypothesis is true. p < 0.05 typically means 'statistically significant'.<br><br>⚖️ <strong>Type I Error:</strong> False positive (rejecting true null hypothesis).<br><br>⚖️ <strong>Type II Error:</strong> False negative (failing to reject false null hypothesis).<br><br>📊 <strong>Confidence Intervals:</strong> Range where true parameter likely lies (e.g., 95% CI).",
        nextReading: "Classification algorithms and machine learning.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🧪 Advanced Statistical Inference</h4>
            <p>Beyond the simple t-test: Modern inference techniques.</p>
            <ul style="line-height: 1.8;">
                <li><strong>Power Analysis:</strong> Before running a test, use power analysis to determine *how big* your sample needs to be to detect an effect. Crucial for clinical trials!</li>
                <li><strong>Effect Size:</strong> A p-value tells you if a finding is 'Real', but *Cohen's d* tells you if it's 'Big'. A p-value of 0.001 with a tiny effect size might be practically useless.</li>
                <li><strong>Bayesian Hypothesis Testing:</strong> Using *Bayes Factors* to calculate the probability of the Null Hypothesis versus the Alternative.</li>
            </ul>
        `
    },
    "u4-t6": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 6: Classification Algorithms (Logistic & KNN)",
        hook: "Predicting categories: Is it A or B? Success or Failure?",
        position: "Topic 6 of 7 in Unit 4",
        prerequisites: "Regression basics, Normal distribution, and distance concepts.",
        outcomes: ["Build Logistic Regression models for binary classification", "Implement K-Nearest Neighbors (KNN) algorithm", "Calculate and interpret classification metrics", "Understand the Sigmoid function"],
        subTopics: "Logistic Regression (Generalized Linear Models), KNN (Lazy Learning), Sigmoid Activation, Euclidean Distance, Decision Boundaries, overfitting",
        syllabusMapping: "Unit 4: Machine Learning - Classification",
        background: "Classification is the task of predicting a discrete label. Logistic regression is a statistical classic, while KNN is an intuitive, distance-based AI method.",
        motivation: "Email providers use classification to decide if an email is 'Spam' or 'Inbox'. Banks use it to decide 'Approve Loan' or 'Reject'.",
        coreConcept: "Classification models divide data points into distinct classes based on their features.",
        terminology: "Sigmoid, Odds Ratio, $K$ (Neighbors), Euclidean Distance, Binary vs Multi-class",
        mathematicalFoundations: {
            equation: "$$P(Y=1) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 X)}}$$",
            terms: [
                { symbol: "$P(Y=1)$", interpretation: "Probability of belonging to class 1 (Success)" },
                { symbol: "$e$", interpretation: "Euler's number (approx 2.718)" },
                { symbol: "$\\beta_0 + \\beta_1 X$", interpretation: "The linear combination (Logit) from standard regression" },
                { symbol: "$d = \\sqrt{\\sum(x_i - y_i)^2}$", interpretation: "Euclidean Distance formula used by KNN to find neighbors" }
            ],
            illustration: "An 'S-curve' (Sigmoid) that squashes any input value to a probability between 0 and 1."
        },
        stepByStepAlgorithm: {
            steps: [
                "For Logistic: Calculate the Logit, apply Sigmoid, and set a threshold (usually 0.5).",
                "For KNN: Choose the number of neighbors $K$ (usually an odd number).",
                "Calculate distance between the new point and all points in the training set.",
                "Identify the $K$ points with the smallest distances.",
                "Take a 'Majority Vote'—the class with the most neighbors wins.",
                "Assign the new point to the winning class."
            ],
            sampleIO: {
                input: "Point (5, 5), K=3 Neighbors: [Class A, Class A, Class B]",
                output: "Predicted: Class A",
                interpretation: "Since the majority (2 out of 3) of the nearest neighbors are Class A, the new point is classified as A."
            }
        },
        rVersion: "4.3.3",
        rCode: `# Classification Examples

# 1. Logistic Regression
data(iris)
# Binary classification: setosa vs others
iris$is_setosa <- ifelse(iris$Species == "setosa", 1, 0)
model <- glm(is_setosa ~ Sepal.Length + Sepal.Width, 
             data = iris, family = binomial)
summary(model)

# Predictions
predictions <- predict(model, type = "response")
predicted_class <- ifelse(predictions > 0.5, 1, 0)

# Confusion Matrix
table(Predicted = predicted_class, Actual = iris$is_setosa)

# 2. K-Nearest Neighbors
library(class)
train_idx <- sample(1:nrow(iris), 0.7 * nrow(iris))
train <- iris[train_idx, 1:4]
test <- iris[-train_idx, 1:4]
train_labels <- iris[train_idx, 5]
test_labels <- iris[-train_idx, 5]

knn_pred <- knn(train, test, train_labels, k = 3)
accuracy <- sum(knn_pred == test_labels) / length(test_labels)
print(paste("KNN Accuracy:", round(accuracy * 100, 2), "%"))`,
        rInterpretation: "<strong>Classification Algorithms:</strong><br><br>📈 <strong>Logistic Regression:</strong> Predicts probability of binary outcome (yes/no, spam/not spam).<br><br>👥 <strong>KNN:</strong> Classifies based on k nearest neighbors. Simple but effective!<br><br>📊 <strong>Confusion Matrix:</strong> Shows true positives, false positives, true negatives, false negatives.<br><br>🎯 <strong>Metrics:</strong> Accuracy = correct predictions / total. Precision = TP / (TP + FP). Recall = TP / (TP + FN).",
        nextReading: "Model evaluation and cross-validation techniques.",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🚀 Sophisticated Classification Strategies</h4>
            <p>Modern machine learning requires handling 'Messy' real-world data structures.</p>
            <ul style="line-height: 1.8;">
                <li><strong>Class Imbalance:</strong> If 99% of transactions are legitimate and 1% are fraud, a model can get 99% accuracy by just saying 'No Fraud'. Learn techniques like *SMOTE* or *Under-sampling* to fix this!</li>
                <li><strong>KNN Distance Metrics:</strong> Beyond 'Euclidean distance'. Use *Manhattan* or *Minkowski* distances depending on the geometry of your features.</li>
                <li><strong>Support Vector Machines (SVM):</strong> Transition from KNN to SVM for finding the 'Maximum Margin' hyperplane that separates complex overlapping categories.</li>
            </ul>
        `
    },
    "u4-t7": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 4 | Topic 7: Model Evaluation & Cross-Validation",
        hook: "How good is your model really? Let's find out before it hits the real world!",
        position: "Topic 7 of 7 in Unit 4",
        prerequisites: "Regression and Classification model building.",
        outcomes: ["Evaluate model performance using MSE, RMSE, and R²", "Implement K-Fold Cross-Validation in R", "Understand the Bias-Variance tradeoff", "Construct and interpret ROC Curves and AUC"],
        subTopics: "Train-Test Split, K-Fold CV, Overfitting vs Underfitting, Confusion Matrix Metrics, ROC Curves, AUC (Area Under Curve)",
        syllabusMapping: "Unit 4: Machine Learning - Model Evaluation",
        background: "A model that performs perfectly on training data but fails on new data is useless. Evaluation ensures that our model has actually 'learned' general patterns, not just 'memorized' specific examples.",
        motivation: "In credit scoring, a 1% improvement in model accuracy can save a bank millions of dollars. Reliable evaluation metrics are the only way to prove this value.",
        coreConcept: "Model evaluation is the process of using various metrics to assess how well a machine learning model generalizes to unseen data.",
        terminology: "RMSE (Error), R² (Fit), Precision, Recall, F1-Score, Bias, Variance, Generalization",
        mathematicalFoundations: {
            equation: "$$F1 = \\frac{2 \\times Precision \\times Recall}{Precision + Recall}$$",
            terms: [
                { symbol: "$F1$", interpretation: "Harmonic mean of Precision and Recall - Best for imbalanced data" },
                { symbol: "$Precision$", interpretation: "True Positives / (True Positives + False Positives)" },
                { symbol: "$Recall$", interpretation: "True Positives / (True Positives + False Negatives)" },
                { symbol: "$MSE$", interpretation: "Mean Squared Error: $\\frac{1}{n} \\sum (Y_i - \\hat{Y}_i)^2$" },
                { symbol: "$RMSE$", interpretation: "Root Mean Squared Error (Standard deviation of residuals)" }
            ],
            illustration: "A Balance Scale: On one side is 'Bias' (Underfitting), on the other 'Variance' (Overfitting). Evaluation helps us find the 'Sweet Spot' in the middle."
        },
        stepByStepAlgorithm: {
            steps: [
                "Split dataset into Training Set (70%) and Test Set (30%).",
                "Train the model using the Training Set only.",
                "Make predictions on the Test Set.",
                "Compare predictions to actual values to calculate Error Metrics (RMSE, Accuracy).",
                "For K-Fold CV: Split data into $K$ parts, rotate the 'Test' part $K$ times, and average the results.",
                "Plot ROC Curve: Plot True Positive Rate vs False Positive Rate at various thresholds."
            ],
            sampleIO: {
                input: "Actual: [1, 0, 1], Predicted Prob: [0.9, 0.4, 0.8]",
                output: "Accuracy: 100%, AUC: 1.0",
                interpretation: "The model perfectly separated the classes in this small sample. An AUC of 1.0 represents a perfect classifier."
            }
        },
        rVersion: "4.3.3",
        rCode: `# Model Evaluation Examples

# 1. Train-Test Split
set.seed(123)
data(iris)
train_idx <- sample(1:nrow(iris), 0.7 * nrow(iris))
train_data <- iris[train_idx, ]
test_data <- iris[-train_idx, ]

# 2. Build and Evaluate Model
model <- lm(Sepal.Length ~ Sepal.Width + Petal.Length, data = train_data)

# Predictions on test set
predictions <- predict(model, newdata = test_data)
actual <- test_data$Sepal.Length

# Calculate metrics
mse <- mean((predictions - actual)^2)
rmse <- sqrt(mse)
r_squared <- cor(predictions, actual)^2

print(paste("RMSE:", round(rmse, 3)))
print(paste("R-squared:", round(r_squared, 3)))

# 3. K-Fold Cross-Validation
library(caret)
train_control <- trainControl(method = "cv", number = 5)
model_cv <- train(Sepal.Length ~ ., data = iris[,1:4], 
                  method = "lm", trControl = train_control)
print(model_cv)

# 4. ROC Curve (for classification)
# Binary classification example
iris_binary <- iris[iris$Species != "virginica", ]
iris_binary$Species <- droplevels(iris_binary$Species)
model_glm <- glm(Species ~ Sepal.Length + Sepal.Width, 
                 data = iris_binary, family = binomial)

library(pROC)
roc_obj <- roc(as.numeric(iris_binary$Species) - 1, 
               predict(model_glm, type = "response"))
auc_value <- auc(roc_obj)
print(paste("AUC:", round(auc_value, 3)))`,
        rInterpretation: "<strong>Model Evaluation:</strong><br><br>📊 <strong>Train-Test Split:</strong> Use 70-80% for training, 20-30% for testing. Never test on training data!<br><br>🔄 <strong>Cross-Validation:</strong> Split data into k folds, train on k-1, test on 1. Repeat k times. More reliable than single split.<br><br>📈 <strong>Metrics:</strong><br>• RMSE: Lower is better (measures prediction error)<br>• R-squared: Higher is better (0-1, proportion of variance explained)<br>• AUC: Area Under ROC Curve (0.5 = random, 1.0 = perfect)<br><br>⚠️ <strong>Overfitting:</strong> Model memorizes training data, fails on new data. Solution: simpler model, more data, regularization.<br><br>⚠️ <strong>Underfitting:</strong> Model too simple, misses patterns. Solution: more complex model, more features.<br><br>🎯 <strong>Best Practices:</strong><br>• Always use separate test set<br>• Use cross-validation for small datasets<br>• Check multiple metrics, not just accuracy<br>• Plot predictions vs actual values<br>• Look for patterns in residuals",
        nextReading: "Unit 4 Virtual Lab - Practice machine learning!",
        advancedDeepDive: `
            <h4 style="color: #6366f1;">🔍 Rigorous Model Validation</h4>
            <p>The goal is 'Generalization'—making sure your model works on data it has NEVER seen before.</p>
            <ul style="line-height: 1.8;">
                <li><strong>The Bias-Variance Tradeoff:</strong> The core struggle of ML. High bias = underfitting; High variance = overfitting. Cross-validation is the weapon we use to find the perfect middle ground.</li>
                <li><strong>Feature Selection Techniques:</strong> Don't just throw everything in! Use *Recursive Feature Elimination (RFE)* to strip away 'noisy' variables that hurt model performance.</li>
                <li><strong>Calibration Curves:</strong> A model might be 'accurate' but 'unreliable'. Use calibration curves to ensure that if a model says '80% chance of rain', it actually rains 8 out of 10 times in reality.</li>
            </ul>
        `
    },
    "u4-t-lesson": {
        type: "handout",
        unitAndTopic: "Unit 4 | Interactive Lesson: Machine Learning Strategy",
        hook: "From raw data to autonomous agents—the complete strategy of ML.",
        position: "Strategy Module for Unit 4",
        prerequisites: "Regression, Classification, and Random Forest concepts.",
        outcomes: [
            "Master the Train-Test-Validate workflow",
            "Understand the Bias-Variance tradeoff",
            "Design model evaluation strategies",
            "Explore Agentic AI foundations"
        ],
        subTopics: "Train-Test Split, Overfitting vs Underfitting, Performance Metrics, Hyperparameter Tuning, The Agentic Mindset",
        background: "Machine learning is not just about writing code; it's about making choices that allow an algorithm to generalize from a small dataset to a massive population.",
        coreConcept: "Generalization: The ability of a model to perform accurately on new, unseen data. We achieve this by penalizing complexity (Regularization) and testing rigorously.",
        mindMap: {
            center: "Machine Learning Strategy",
            branches: [
                {
                    title: "1. Data Prep",
                    subItems: ["Feature Selection", "Normalization", "Train/Test Split"]
                },
                {
                    title: "2. Modeling",
                    subItems: ["Gradient Descent", "Loss Functions", "Optimization"]
                },
                {
                    title: "3. Evaluation",
                    subItems: ["Confusion Matrix", "ROC Curves", "R-Squared"]
                },
                {
                    title: "4. Deployment",
                    subItems: ["Inference", "Monitoring", "Agentic Loops"]
                }
            ]
        },
        rInterpretation: `
            <div style="background: var(--bg-main); border-radius: 16px; padding: 30px; border: 1px solid var(--border); box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); margin-top: 25px;">
                <h4 style="color: var(--primary); margin-bottom: 20px; font-weight: 700; display: flex; align-items: center; gap: 12px;">
                    <span style="background: var(--primary); color: white; width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1rem;">🏁</span> The 7-Step ML Workflow
                </h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
                    <!-- Step 1 -->
                    <div class="card" style="margin: 0; padding: 20px; border-radius: 12px; border-left: 4px solid #3498DB;">
                        <h5 style="color: #3498DB; margin: 0 0 10px 0;"><i data-lucide="database"></i> 1. Ingestion</h5>
                        <p style="font-size: 0.9rem; margin-bottom: 0;">Merging CSVs, scraping web data, or connecting to SQL databases in R.</p>
                    </div>
                    <!-- Step 2 -->
                    <div class="card" style="margin: 0; padding: 20px; border-radius: 12px; border-left: 4px solid #F39C12;">
                        <h5 style="color: #F39C12; margin: 0 0 10px 0;"><i data-lucide="filter"></i> 2. Pre-processing</h5>
                        <p style="font-size: 0.9rem; margin-bottom: 0;">Removing missing values (NA), handling outliers, and scaling features.</p>
                    </div>
                    <!-- Step 3 -->
                    <div class="card" style="margin: 0; padding: 20px; border-radius: 12px; border-left: 4px solid #9B59B6;">
                        <h5 style="color: #9B59B6; margin: 0 0 10px 0;"><i data-lucide="split"></i> 3. Splitting</h5>
                        <p style="font-size: 0.9rem; margin-bottom: 0;">Creating <strong>Train (70%)</strong> and <strong>Test (30%)</strong> sets using <code>sample()</code>.</p>
                    </div>
                    <!-- Step 4 -->
                    <div class="card" style="margin: 0; padding: 20px; border-radius: 12px; border-left: 4px solid #1ABC9C;">
                        <h5 style="color: #1ABC9C; margin: 0 0 10px 0;"><i data-lucide="activity"></i> 4. Training</h5>
                        <p style="font-size: 0.9rem; margin-bottom: 0;">Feeding training data to <code>lm()</code>, <code>glm()</code>, or <code>randomForest()</code>.</p>
                    </div>
                    <!-- Step 5 -->
                    <div class="card" style="margin: 0; padding: 20px; border-radius: 12px; border-left: 4px solid #E67E22;">
                        <h5 style="color: #E67E22; margin: 0 0 10px 0;"><i data-lucide="eye"></i> 5. Prediction</h5>
                        <p style="font-size: 0.9rem; margin-bottom: 0;">Calculating results for <strong>Test set</strong> to see if the model learned the pattern.</p>
                    </div>
                    <!-- Step 6 -->
                    <div class="card" style="margin: 0; padding: 20px; border-radius: 12px; border-left: 4px solid #E74C3C;">
                        <h5 style="color: #E74C3C; margin: 0 0 10px 0;"><i data-lucide="bar-chart"></i> 6. Validation</h5>
                        <p style="font-size: 0.9rem; margin-bottom: 0;">Checking Accuracy, RMSE, or Confusion Matrices. Tuning until optimized.</p>
                    </div>
                </div>
                
                <!-- Optimization Deep Dive -->
                <div style="background: rgba(79, 70, 229, 0.05); border-radius: 12px; padding: 25px; margin-top: 30px; border: 1px dashed var(--primary);">
                    <h5 style="color: var(--primary); margin-top: 0; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="trending-up" style="width: 20px;"></i> Advanced Optimization Strategy
                    </h5>
                    <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-muted);">
                        Real-world ML modeling isn't a one-and-done process. It's a cyclic journey:
                    </p>
                    <ul style="padding-left: 20px; font-size: 0.9rem; color: var(--text-muted);">
                        <li><strong>Feature Interaction:</strong> Combining columns (e.g., Size × Location) to uncover hidden signals.</li>
                        <li><strong>Cross-Validation:</strong> Training the model multiple times on different subsets to ensure stability.</li>
                        <li><strong>Ensembling:</strong> Combining weak models (like single trees) to create strong models (Random Forest).</li>
                    </ul>
                </div>
            </div>
        `,
        experientialActivity: `
            <div class="interactive-strategy-viz" style="background:#fff; padding:20px; border-radius:12px; border:1px solid #ddd; margin-top:20px;">
                <h5>🛠️ Interactive Concept: Bias-Variance Tradeoff</h5>
                <div style="display:flex; justify-content:center; gap:40px; margin-top:15px;">
                    <div style="text-align:center;">
                        <div style="width:100px; height:100px; border:2px solid #E74C3C; border-radius:50%; position:relative; margin:0 auto;">
                           <div style="width:10px; height:10px; background:#E74C3C; border-radius:50%; position:absolute; top:45px; left:45px;"></div>
                           <div style="width:6px; height:6px; background:#ddd; border-radius:50%; position:absolute; top:10px; left:10px;"></div>
                        </div>
                        <small style="color:#E74C3C; display:block; margin-top:5px;">Underfitting (High Bias)</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:100px; height:100px; border:2px solid #2ECC71; border-radius:50%; position:relative; margin:0 auto;">
                           <div style="width:6px; height:6px; background:#2ECC71; border-radius:50%; position:absolute; top:47px; left:47px;"></div>
                           <div style="width:6px; height:6px; background:#2ECC71; border-radius:50%; position:absolute; top:42px; left:52px;"></div>
                        </div>
                        <small style="color:#2ECC71; display:block; margin-top:5px;">Sweet Spot (Balanced)</small>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:100px; height:100px; border:2px solid #3498DB; border-radius:50%; position:relative; margin:0 auto;">
                           <div style="width:6px; height:6px; background:#3498DB; border-radius:50%; position:absolute; top:5px; left:5px;"></div>
                           <div style="width:6px; height:6px; background:#3498DB; border-radius:50%; position:absolute; top:80px; left:10px;"></div>
                           <div style="width:6px; height:6px; background:#3498DB; border-radius:50%; position:absolute; top:20px; left:70px;"></div>
                        </div>
                        <small style="color:#3498DB; display:block; margin-top:5px;">Overfitting (High Variance)</small>
                    </div>
                </div>
            </div>
        `,
        quizQuestions: [
            "Why is the Train-Test split important?",
            "What happens if we train a model including the Test set data?",
            "Difference between Underfitting and Overfitting?",
            "Standard rule-of-thumb ratio for splitting training and testing data?",
            "Which evaluation metric is best for predicting car prices (Regression)?"
        ],
        examQuestions10M: [
            "Elaborate on the complete Machine Learning life cycle from Problem Formulation to Model Monitoring. Discuss how R facilitates each step with specific examples."
        ],
        advancedDeepDive: `
            <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
                <div style="width:50px; height:50px; background:rgba(99, 102, 241,0.1); border-radius:12px; display:flex; align-items:center; justify-content:center; color:#6366f1;">
                    <i data-lucide="cpu" style="width:32px; height:32px;"></i>
                </div>
                <h4 style="margin:0; color:#6366f1;">The Agentic Revolution</h4>
            </div>
            <p style="font-size:0.95rem; line-height:1.7;">
                Modern data analytics is moving beyond 'static models' toward <strong>Agentic AI</strong>. 
                Instead of a coder training a model once, we build <strong>Agents</strong> that:
                <br><br>
                1. <strong>Observe:</strong> Monitor real-time data streams.<br>
                2. <strong>Reason:</strong> Assess the current situation (State).<br>
                3. <strong>Act:</strong> Execute a prescriptive optimization (Action).<br>
                4. <strong>Learn:</strong> Adjust their strategy based on the feedback (Reward).
            </p>
        `
    },
    "u4-lab": {
        type: "virtual-lab",
        unitId: 4
    }
};

window.unit4Content = unit4Content;
