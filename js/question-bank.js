const questionBankContent = {
    "u1": [
        {
            id: "u1-q1",
            question: "Evaluate the trade-offs between 'Descriptive' and 'Predictive' analytics for a startup with limited historical data. Which one should be the priority in the first 6 months, and why?",
            scheme: "2M: Definition of both types; 4M: Analysis of data requirements; 4M: Justification for startup priority based on risk and data availability.",
            solution: "In the first 6 months, a startup should prioritize **Descriptive Analytics**. <br><br><strong>Reasoning:</strong> Predictive models require large, clean historical datasets to 'learn' patterns. A startup lacks this depth. Descriptive analytics allows them to understand 'what is happening right now' (e.g., user churn, daily active users), providing immediate feedback loops to pivot the product. <br><br><strong>Trade-off:</strong> Predictive is 'higher value' but 'higher risk' and 'high data requirement'. Descriptive is 'essential' and 'low data requirement'."
        },
        {
            id: "u1-q2",
            question: "A smart city project generates 1 Terabyte of sensor data every hour. Analyze this scenario using the 5 V's of Big Data. Which 'V' poses the greatest challenge for real-time traffic management?",
            scheme: "2M: Identifying the 5 Vs (Volume, Velocity, Variety, Veracity, Value); 4M: Scenario mapping; 4M: Critical analysis of the 'Velocity' challenge.",
            solution: "The sensors generate data at high **Velocity**. <br><br><strong>Analysis:</strong><br>1. <strong>Volume:</strong> 1TB/hour is massive.<br>2. <strong>Velocity:</strong> Real-time traffic needs sub-second decisions.<br>3. <strong>Variety:</strong> Video feeds, GPS, weather sensors.<br>4. <strong>Veracity:</strong> Malfunctioning sensors provide 'noisy' data.<br>5. <strong>Value:</strong> Reducing congestion.<br><br><strong>Greatest Challenge:</strong> Velocity. To manage traffic *now*, the system must process data faster than it arrives. Traditional 'Batch Processing' would cause a lag, making the traffic lights react to a jam that has already moved."
        },
        {
            id: "u1-q3",
            question: "Compare Structured, Semi-structured, and Unstructured data. In a modern recruitment platform (with Resumes, LinkedIn profile links, and Interview videos), how would you categorize these and what specific analytics tool would you use for each?",
            scheme: "3M: Categorization; 3M: Tool mapping; 4M: Technical differentiation.",
            solution: "1. <strong>Interview Videos (Unstructured):</strong> Cannot be stored in rows/columns. Requires Computer Vision/NLP to extract sentiment and keywords.<br>2. <strong>LinkedIn Links (Semi-structured):</strong> HTML/JSON format. Has tags but no fixed schema. Requires Data scrapers/Parsers.<br>3. <strong>Database of Candidate Names/IDs (Structured):</strong> Fixed schema. Managed via SQL/Data Frames.<br><br><strong>Tools:</strong> R's `rjson` for semi-structured, `magick` or `av` for unstructured, and standard Data Frames for structured data."
        },
        {
            id: "u1-q4",
            question: "Criticize the statement: 'Data Analytics is just a modern name for Statistics.' Support your argument with three distinct differences in goals and methodologies.",
            scheme: "3M: Goal differentiation; 3M: Computational focus; 4M: Methodology (Hypothesis-driven vs. Data-driven).",
            solution: "The statement is partially true but largely misleading. <br><br><strong>Key Differences:</strong><br>1. <strong>Goal:</strong> Statistics focuses on inference (proving a hypothesis with p-values). Analytics focuses on actionable insights and prediction.<br>2. <strong>Data Size:</strong> Statistics often deals with samples. Analytics deals with 'All Data' (Big Data).<br>3. <strong>Approach:</strong> Statistics is 'Model-first' (assuming a distribution). Analytics is 'Data-first' (letting the model learn from the complexity of data)."
        },
        {
            id: "u1-q5",
            question: "In the context of 'Precision Healthcare', how does the 'Variety' characteristic of Big Data aid in personalized medicine? Provide an illustration.",
            scheme: "3M: Concept of Variety in health; 4M: Personalization logic; 3M: Illustration/Case.",
            solution: "<strong>Variety</strong> combines disparate data types: Genomic data (Unstructured), Electronic Health Records (Structured), and Fitbit data (Semi-structured).<br><br><strong>Logic:</strong> By correlating a person's DNA with their sleep patterns and history, doctors can prescribe a drug that specifically works for *their* unique genetic makeup, rather than a 'one-size-fits-all' pill.<br><br><strong>Illustration:</strong> A patient with high heart rate (Fitbit) and a specific gene marker (Genomics) for salt sensitivity is prescribed a specific diuretic rather than a general beta-blocker."
        },
        {
            id: "u1-q6",
            question: "Analyze the 'Data Analytics Lifecycle'. Why is 'Data Preparation' considered the most time-consuming phase (60-80%)? What happens if you skip it and move directly to Modeling?",
            scheme: "4M: Data Prep importance; 3M: GIGO principle; 3M: Consequences of skipping.",
            solution: "Data Preparation involves 'wrangling'—handling missing values, outliers, and incorrect types. <br><br><strong>Why it takes time:</strong> Real-world data is messy. You might have dates in 5 different formats or prices as strings.<br><br><strong>Risk:</strong> 'Garbage In, Garbage Out' (GIGO). If you skip this, your model will 'learn' the noise instead of the signal. A model trained on messy data will give highly confident but completely wrong predictions."
        },
        {
            id: "u1-q7",
            question: "Design a data-driven strategy for an E-commerce company to reduce 'Shopping Cart Abandonment' using Diagnostic Analytics. What variables would you investigate?",
            scheme: "4M: Diagnostic approach; 4M: Variable selection; 2M: Outcome definition.",
            solution: "Diagnostic analytics asks 'Why did this happen?'.<br><br><strong>Variables to investigate:</strong><br>1. <strong>Shipping Costs:</strong> Is there a correlation between abandonment and high shipping fees?<br>2. <strong>Load Time:</strong> Do carts get abandoned more on slow-loading pages?<br>3. <strong>Payment Options:</strong> Are customers leaving at the payment stage because their preferred wallet isn't listed?<br><br><strong>Strategy:</strong> Group users by 'Time of Abandonment' and compare page logs to find the friction point."
        },
        {
            id: "u1-q8",
            question: "Evaluate the role of 'Veracity' in social media sentiment analysis. How do 'sarcasm' and 'slang' affect the reliability of Big Data insights?",
            scheme: "4M: Veracity definition; 6M: Impact of language complexity on reliability.",
            solution: "Veracity refers to the quality and trust of data. <br><br><strong>Sarcasm Challenge:</strong> A tweet saying 'Oh great, another delay!' is negative, but a simple sentiment tool might see 'Great' and mark it positive.<br><br><strong>Slang Challenge:</strong> Words like 'Sick' or 'Lit' can be positive in youth culture but negative in medical data.<br><br><strong>Impact:</strong> Low veracity leads to biased insights. If we rely on un-verified social data, a brand might think it's loved when it's actually being mocked."
        },
        {
            id: "u1-q9",
            question: "Compare 'Batch Processing' vs. 'Stream Processing'. For a 'Bank Fraud Alert' system, which one is non-negotiable? Contrast this with a 'Monthly Bank Statement' generation.",
            scheme: "3M: Definitions; 4M: Use-case mapping; 3M: Justification.",
            solution: "1. <strong>Batch:</strong> Processing large amounts at once (e.g., end of the day).<br>2. <strong>Stream:</strong> Processing each data point as it arrives (Real-time).<br><br><strong>Fraud Alert:</strong> Needs **Stream Processing**. A delay of 5 minutes in blocking a card can result in total loss.<br><strong>Bank Statement:</strong> **Batch Processing** is fine. The user doesn't need the summary of the month until the month is over."
        },
        {
            id: "u1-q10",
            question: "Synthesize the concept of 'Data Monetization'. How can a Telecom company use its data (call patterns, location) to create a new revenue stream without selling private individual identities?",
            scheme: "4M: Aggregated data concept; 4M: Strategic applications; 2M: Privacy/Ethics.",
            solution: "Telecoms can practice **Indirect Monetization**. <br><br><strong>Strategy:</strong> Sell 'Aggregated Motion Heatmaps' to city planners. Instead of saying 'John is at Location X', they sell data saying '70% of people from Area A travel to Area B between 9 AM - 10 AM'.<br><br><strong>New Revenue:</strong> Advertising firms pay for this to know where to place billboards. Shopping malls pay for this to know where to open new branches. The privacy is maintained by grouping ('Anonymizing') the data."
        }
    ],
    "u2": [
        {
            id: "u2-q1",
            question: "You have a vector with 1 million integers. Compare the efficiency of a `for` loop vs. `vectorized operations` in R. Why is R often criticized for being 'slow' in loops, and how do we resolve this?",
            scheme: "3M: Comparison of mechanisms; 4M: Explanation of Vectorization; 3M: The 'S' language heritage explanation.",
            solution: "<strong>For Loop:</strong> R has to 'interpret' the type of the variable in every iteration, making it slow.<br><strong>Vectorized Operation:</strong> R passes the whole vector to a pre-compiled C/C++ function, processing it all at once.<br><br><strong>Solution:</strong> Use operations like `v + 10` or functions like `colSums()`, `apply()`, or `map()` instead of explicit loops. This 'delegates' the hard work to faster languages under the hood."
        },
        {
            id: "u2-q2",
            question: "Analyze the 'Data Frame' vs 'Matrix' in R. If you are building a dataset with 'Age', 'Name', and 'Salary', why is a Matrix a catastrophic choice?",
            scheme: "4M: Homogeneous vs Heterogeneous data; 4M: Type Coercion explanation; 2M: Correct selection.",
            solution: "A **Matrix** must be **Homogeneous** (all elements must be the same type). <br><br><strong>The Catastrophe:</strong> If you put a character string ('Name') into a matrix with numbers ('Age'), R will 'Coerce' everything into characters. You won't be able to calculate `mean(Age)` or `sum(Salary)` because 25 would become '25'.<br><br><strong>Correct Choice:</strong> **Data Frame**. It is a list of vectors, where each list (column) can have its own type."
        },
        {
            id: "u2-q3",
            question: "Evaluate the use of 'Factors' in R. How does treating a 'Blood Group' column as a factor instead of a character string save memory and improve modeling?",
            scheme: "3M: Memory efficiency; 4M: Modeling (Dummy variables); 3M: Level management.",
            solution: "<strong>Memory:</strong> Factors store integers (1, 2, 3) and a small 'lookup table' for labels ('A+', 'B+', 'O'). Character strings repeat the full text every time, wasting space.<br><br><strong>Modeling:</strong> Statistical models in R (like `lm`) automatically convert factors into 'Dummy Variables' (0/1 columns). If it's just a string, the model treats it as unique values and often fails to find patterns."
        },
        {
            id: "u2-q4",
            question: "A script is failing with 'unexpected NA values'. Distinguish between `is.na()` and `!complete.cases()`. Which one is better for cleaning a whole data frame in one line?",
            scheme: "3M: Function differentiation; 4M: Practical application in cleaning; 3M: Code efficiency.",
            solution: "1. <strong>is.na(x):</strong> Returns a logical vector the same length as x, identifying true missing values.<br>2. <strong>complete.cases(df):</strong> Returns a logical vector showing which *rows* have no NAs anywhere.<br><br><strong>Cleaning strategy:</strong> `df[complete.cases(df), ]` is the most efficient one-liner to remove every row that has at least one missing value ('Listwise deletion')."
        },
        {
            id: "u2-q5",
            question: "A researcher wants to process 500 CSV files. Design a workflow using R's `list.files()`, `lapply()`, and `do.call(rbind, ...)`. What is the role of each function in this 'Industrial' data ingestion?",
            scheme: "3M: Function roles; 4M: Workflow logic; 3M: Scaling analysis.",
            solution: "1. <strong>list.files():</strong> Scans the directory and gets names of all 500 files.<br>2. <strong>lapply():</strong> Iterates through the list and runs `read.csv` on each, resulting in a 'List of Data Frames'.<br>3. <strong>do.call(rbind, ...):</strong> Efficiently stacks all 500 data frames on top of each other into one giant table.<br><br>This approach is significantly faster and safer than manual file-by-file imports."
        },
        {
            id: "u2-q6",
            question: "Contrast 'Lexical Scoping' in R functions. If a variable is defined both inside a function and in the Global Environment, which one does R use, and how can this lead to 'Silent Bugs'?",
            scheme: "4M: Scoping rules; 4M: Bug demonstration; 2M: Best practices (Encapsulation).",
            solution: "R uses the 'Inner' variable first. If not found, it looks one level 'Up' (lexical scoping).<br><br><strong>Silent Bug:</strong> If you forget to define a variable inside but it exists in your global environment (from an old calculation), the function will *use the old value* without throwing an error. Your result will be based on 'leftover' data from an hour ago! Avoid this by passing ALL needed data as arguments."
        },
        {
            id: "u2-q7",
            question: "Assess the 'Lazy Evaluation' mechanism in R functions. How does it allow us to write code that 'doesn't crash unless needed'?",
            scheme: "4M: Definition of Lazy Evaluation; 4M: Practical example; 2M: Performance implication.",
            solution: "Lazy evaluation means R only calculates an argument's value when it's actually used in the function body.<br><br><strong>Example:</strong> `my_func <- function(a, b) { return(a * 2) }`. If you call `my_func(5, stop('Error!'))`, it will NOT crash! Why? Because `b` is never used, so R never tries to evaluate the `stop()` command. This saves computational time for complex inputs."
        },
        {
            id: "u2-q8",
            question: "In string manipulation, analyze the difference between `grep()` and `grepl()`. Build a scenario where using the wrong one would break a logical `if` statement.",
            scheme: "4M: Index vs Logical return types; 4M: Scenario building; 2M: If-statement logic.",
            solution: "<strong>grep():</strong> Returns the *index* (position) of the match (e.g., 5).<br><strong>grepl():</strong> Returns a *Logical* (TRUE/FALSE).<br><br><strong>Scenario:</strong> `if(grep('error', logs))`. If there is NO match, `grep` returns an empty integer. Integer(0) in an `if` statement is an error! `grepl` would return `FALSE`, which handles the logic perfectly."
        },
        {
            id: "u2-q9",
            question: "Design a custom R function to calculate 'BMI' that handles 'NA' inputs gracefully and provides a warning if the weight is less than zero.",
            scheme: "4M: Error handling (stop/warning); 4M: NA management; 2M: Function structure.",
            solution: "```r\ncalc_bmi <- function(w, h) {\n  if(is.na(w) | is.na(h)) return(NA)\n  if(w <= 0) warning('Weight must be positive!')\n  return(w / (h^2))\n}```<br>This uses **Guard Clauses** to check for data quality before doing the math."
        },
        {
            id: "u2-q10",
            question: "Synthesize the concept of 'Recycling' in R vector math. If you add a vector of length 2 to a vector of length 6, what happens? How can this lead to misleading results in payroll data?",
            scheme: "4M: Recycling rule; 4M: Payroll data case; 2M: Warning messages.",
            solution: "R 'recycles' the shorter vector. Vector(1, 2) + Vector(10, 20, 30, 40, 50, 60) effectively becomes (1, 2, 1, 2, 1, 2) + (10...60).<br><br><strong>Payroll Risk:</strong> If you try to add a 2-item bonus (intended for specific managers) to a 6-item department list, R won't stop you! It will accidentally give the bonus to employees 1, 3, and 5 multiple times. Always check that vector lengths match or are multiples."
        }
    ],
    "u3": [
        {
            id: "u3-q1",
            question: "You have a dataset of 1 million transactions. A scatter plot results in a 'Solid Black Blob'. Propose and evaluate three advanced visualization strategies to reveal hidden density patterns. Which one is best for discovering 'local clusters' vs. 'global trends'?",
            scheme: "3M: Identification of Overplotting; 4M: Evaluation of 3 strategies (Alpha, Hexbin, Contours); 3M: Justification for Cluster vs Trend detection.",
            solution: "1. <strong>Alpha Blending (Transparency):</strong> Best for small datasets to see density. <br>2. <strong>Hexagonal Binning:</strong> Excellent for **Global Trends** in large data, as it aggregates points into a heatmap. <br>3. <strong>2D Kernel Density Estimation (Contours):</strong> Superior for **Local Clusters**, as it shows 'islands' of data peaks.<br><br><strong>Evaluation:</strong> For discovering clusters, use Contours/Heatmaps to see the 'core' of the groups. For global trends, use Hexbinning to see the general directional flow of 1M points without crashing the browser."
        },
        {
            id: "u3-q2",
            question: "A company wants to visualize 'Revenue by Region' and 'Profitability' simultaneously for 50 cities. Evaluate the choice of a 'Choropleth Map' vs. a 'Faceted Bar Chart'. Which leads to more accurate decision making, and why?",
            scheme: "4M: Map visualization drawbacks (Geographic bias); 4M: Faceted Bar benefits (Scale consistency); 2M: Recommendation.",
            solution: "<strong>Choropleth Map (Geography):</strong> Biased by land area. A giant unproductive desert region looks more 'important' than a tiny, highly profitable city state. This can mislead executives.<br><strong>Faceted Bar Chart:</strong> More accurate. Every city gets an equal-width bar. You can sort them by Profit or Revenue.<br><br><strong>Decision:</strong> Use the **Faceted Bar Chart** for resource allocation, as it allows direct comparison of values regardless of physical size. Use the Map only for logistics/routing planning."
        },
        {
            id: "u3-q3",
            question: "Distinguish between 'Sequential', 'Diverging', and 'Qualitative' color scales. In a dashboard showing 'Temperature Anomalies' (-10 to +10 degrees), which scale is non-negotiable? Provide a psychological justification.",
            scheme: "3M: Definitions; 4M: Use-case selection; 3M: Psychological impact (Red/Blue association).",
            solution: "You must use a **Diverging Scale**. <br><br><strong>Justification:</strong> The data has a critical 'Zero' point. A diverging scale (Blue for -10, White for 0, Red for +10) uses psychological cues. Blue 'feels' cold (sub-zero), and Red 'feels' hot (above zero). A sequential scale (light to dark blue) would fail because +5 would just look 'darker' than 0, but wouldn't signal a fundamental shift from cold to hot."
        },
        {
            id: "u3-q4",
            question: "Apply the 'Grammar of Graphics' to explain how a Bubble Chart is technically a 'Scatter Plot with a Size Mapping'. How does adding this third dimension (Size) often lead to 'Visual Deception'?",
            scheme: "5M: Mapping logic; 5M: Area vs Radius deception analysis.",
            solution: "A Bubble Chart maps: X → axis, Y → axis, and **Size → Variable Z**. <br><br><strong>The Deception:</strong> Humans are bad at estimating Area. If you double the *Radius* of a bubble, the *Area* quadruples ($A = \\pi r^2$). If the data only doubled, but the area quadrupled, the viewer perceives a 4x increase. <br><br><strong>Solution:</strong> Always map variables to the **Area** of the circle, not the **Radius**, to maintain mathematical honesty."
        },
        {
            id: "u3-q5",
            question: "Analyze the 'Lie Factor' in an Infographic where a 2D icon of a 'Shopping Bag' is scaled up to represent a 20% increase in sales. Calculate the potential 'Visual Inflation' if both height and width are scaled by 1.2x.",
            scheme: "4M: Scaling math (1.2 * 1.2 = 1.44); 4M: Perceptual error analysis; 2M: Fixing the design.",
            solution: "If height and width are both scaled by 1.2x (20% increase), the **Area** increases by $1.2 \\times 1.2 = 1.44$ (44% increase).<br><br><strong>Lie Factor:</strong> The data grew by 20%, but the visual grew by 44%. The infographic is 'lying' by a factor of 2.2x. This makes a modest growth look like a massive explosion in sales. <br><br><strong>Fix:</strong> Only scale one dimension (height) or use a pictogram where you add more small icons instead of scaling one large icon."
        },
        {
            id: "u3-q6",
            question: "Evaluate the use of 'Faceting vs. Grouping' in a dataset with 4 categories and 1000 points. If the categories overlap significantly, which technique produces less 'Visual Noise'?",
            scheme: "4M: Grouping (Colors in 1 plot); 4M: Faceting (Small multiples); 2M: Selection for overlapping data.",
            solution: "<strong>Grouping (Color):</strong> Good for seeing *interaction* between groups. But if they overlap, they create a 'muddy' mix where colors blend, making it impossible to see individual group trends.<br><strong>Faceting:</strong> Better for **Overlapping Data**. By giving each category its own panel, you eliminate the visual noise of overlap. You can clearly see the 'shape' of each group's distribution side-by-side."
        },
        {
            id: "u3-q7",
            question: "In exploratory data analysis (EDA), explain why we should use a 'Log Scale' for the X-axis when visualizing 'Personal Income' across a whole country. What happens to the 'Tail' in a linear vs. log histogram?",
            scheme: "4M: Power law/Skewness analysis; 4M: Tail compression; 2M: Readability.",
            solution: "Income follows a 'Power Law'—99% are on the left, and a tiny few are extremely far to the right (Bill Gates). <br><br><strong>Linear Scale:</strong> The 99% are squashed into a tiny sliver at the start, and the axis is stretched for miles to show billionaires. You see nothing meaningful.<br><strong>Log Scale:</strong> Compresses the 'Tail' and expands the 'Head'. It turns 'Multiplicative' differences (e.g., doubling) into equal distances. This allows us to see the detailed distribution of both middle-class and wealthy citizens in one view."
        },
        {
            id: "u3-q8",
            question: "Design a visualization for a 'Network Security' dashboard showing 1,000 IP addresses and their connection counts. Propose a 'Non-traditional' plot (e.g., Chord Diagram or Treemap) and justify why it's better than a sorted Bar Chart.",
            scheme: "4M: Limitation of Bar charts for scale; 4M: Treemap/Chord benefits; 2M: Insight type.",
            solution: "A **Treemap** is superior here. <br><br><strong>Justification:</strong> A Bar Chart with 1,000 items is unreadable (labels overlap, scrolling is required). A Treemap uses 'Area' to show the magnitude of connection counts in a single window. You can instantly see 'The big squares' (heavy traffic IPs) vs the 'Sea of small squares' (standard traffic). It provides a holistic 'Snapshot' of the whole network at once."
        },
        {
            id: "u3-q9",
            question: "Compare 'Boxplots' with 'Violin Plots'. If your underlying data is 'Bimodal' (has two peaks, like heights of mixed male/female groups), which plot will hide this critical insight?",
            scheme: "5M: Boxplot summary stats vs density; 5M: Violin plot density estimation.",
            solution: "The **Boxplot will HIDE the bimodality**. <br><br><strong>Reasoning:</strong> A Boxplot only shows the 5-number summary (Min, Q1, Median, Q3, Max). If there is a huge gap in the middle (two peaks), the Boxplot will just draw a box across the gap, making it look like a uniform distribution. <br><br><strong>Fix:</strong> Use a **Violin Plot**. It shows the 'Probability Density' (width), making the two peaks visible as 'Bulges' in the shape."
        },
        {
            id: "u3-q10",
            question: "Critical Analysis: A dashboard shows a 'Gauge Chart' (Speedometer style) for quarterly targets. Why do visualization experts like Stephen Few consider Gauge charts to be 'Low Information Density' and 'Space Wasting'?",
            scheme: "4M: Analysis of pixels-to-data ratio; 4M: Comparison with 'Bullet Graphs'; 2M: Alternatives.",
            solution: "Gauge charts take up a large circular area to communicate a single number (e.g., 75%). <br><br><strong>Problems:</strong> 1. Poor use of space. 2. Difficult to compare multiple gauges. 3. Decorative 'Chrome' (needles, glass effect) distracts from data.<br><br><strong>Alternative:</strong> Use a **Bullet Graph**. It takes 1/10th the space and can show the current value, the target, and 'Qualitative ranges' (Poor, Good, Great) in a simple linear bar."
        }
    ],
    "u4": [
        {
            id: "u4-q1",
            question: "A Linear Regression model for 'Salary prediction' has an $R^2$ of 0.95. However, the 'Residual Plot' shows a clear U-shape. Evaluate the validity of this model for making business predictions. What is the 'Missing Link'?",
            scheme: "4M: R-squared misconception; 4M: Residual pattern analysis (Non-linearity); 2M: Fix (Polynomial regression).",
            solution: "The model is **NOT valid** despite the high $R^2$. <br><br><strong>Analysis:</strong> A U-shape in residuals means the relationship is **Non-linear**. The model is systematically underestimating high and low salaries and overestimating middle ones. High $R^2$ just means the line is 'passing through the middle' of the data, but it's not capturing the *pattern*.<br><br><strong>Missing Link:</strong> You need to add a squared term ($Age^2$) or use a different model. Never trust $R^2$ without checking the Residual Plot."
        },
        {
            id: "u4-q2",
            question: "You are training a Random Forest with 1,000 trees. The training accuracy is 100%, but the 'Out-of-Bag' (OOB) error is 40%. Analyze this discrepancy. Is the model useful for 'Future Data'?",
            scheme: "4M: Overfitting definition; 4M: Variance/Bias trade-off; 2M: Model utility.",
            solution: "The model is severely **Overfitting**. <br><br><strong>Analysis:</strong> 100% training accuracy means the trees have 'memorized' the noise and individual data points of the training set. The 40% OOB error (equivalent to testing) means it fails to generalize to unseen data. It's essentially 'Cheating' in simple terms.<br><br><strong>Utility:</strong> The model is useless for future data. You should **Prune** the trees (limit depth) or increase the minimum sampling size per leaf to force the model to look for global patterns rather than local noise."
        },
        {
            id: "u4-q3",
            question: "Compare 'Standardization' (Z-score) vs 'Normalization' (Min-Max). For a 'KNN Clustering' algorithm where 'Annual Income' (thousands) and 'Age' (units) are features, which scaling is essential and why?",
            scheme: "3M: Definitions; 4M: Sensitivity of Distance-based models; 3M: Selection and justification.",
            solution: "Scaling is **Essential** for KNN. <br><br><strong>Reasoning:</strong> KNN uses 'Euclidean Distance'. If income is 50,000 and age is 30, a change of $100 in income will dominate the distance calculation compared to a change of 1 year in age. The algorithm will 'think' age doesn't matter.<br><br><strong>Selection:</strong> **Standardization (Z-score)** is usually better if data has outliers. It puts both variables on a scale of 'Standard Deviations from the Mean' (e.g., both will roughly be between -3 and +3), giving them equal 'Voice' in the model."
        },
        {
            id: "u4-q4",
            question: "A medical AI for 'Cancer Detection' has 99.9% accuracy. However, in a population of 10,000 where only 10 people have cancer, the model predicts 'Healthy' for everyone. Evaluate the 'Accuracy Paradox'. What metric should the hospital use instead?",
            scheme: "4M: Accuracy Paradox definition; 4M: Precision/Recall/F1-score analysis; 2M: Specific metric choice.",
            solution: "This is a classic **Imbalanced Class** problem. <br><br><strong>The Paradox:</strong> Predicting 'No Cancer' for everyone gives 99.9% accuracy because the disease is rare. But the model is 0% effective at its *actual job* (finding cancer). <br><br><strong>Hospital Metric:</strong> They must use **Recall (Sensitivity)**. Recall measures 'Out of all people who REALLY have cancer, how many did we find?'. In this case, Recall is 0%. The hospital would prefer a model with 90% accuracy but 100% Recall (even if it causes false alarms)."
        },
        {
            id: "u4-q5",
            question: "Apply 'Hypothesis Testing' (t-test) to a marketing campaign. If the p-value is 0.06 and the threshold ($\alpha$) is 0.05, should the company invest $1M in the new strategy? Analyze the risk of 'Type II Error' here.",
            scheme: "3M: Decision logic (p > alpha); 4M: Type II error risk (False negative); 3M: Business context.",
            solution: "<strong>Statistically:</strong> No. Since $0.06 > 0.05$, we 'Fail to Reject' the null hypothesis. The results aren't significant *enough*.<br><br><strong>Risk Analysis:</strong> 0.06 is very close to 0.05. We might be making a **Type II Error** (assuming the strategy is bad when it's actually good, but the sample was too small). <br><br><strong>Business Decision:</strong> Don't spend the $1M yet. Instead, run a slightly larger pilot test to increase 'Statistical Power'. 0.06 suggests there might be a signal that just needs more data to prove."
        },
        {
            id: "u4-q6",
            question: "Differentiate between 'Logistic Regression' and 'Linear Regression'. Build a mathematical argument for why Linear Regression is physically impossible for predicting 'Pass/Fail' outcomes.",
            scheme: "5M: Output range analysis (-inf to +inf vs 0 to 1); 5M: Heteroscedasticity/Probability logic.",
            solution: "Linear Regression predicts $Y = \beta_0 + \beta_1 X$. This line goes to infinity. It could predict a 'Pass Probability' of **1.5 or -0.5**, which is physically impossible (max is 1, min is 0).<br><br><strong>Logistic Argument:</strong> Logistic uses the **Link Function** ($logit$) to turn the line into an S-curve. This S-curve effectively 'caps' the output at 1 and 0, ensuring we stay in the realm of probability. Linear regression for classification also suffers from 'High Variance' at the edges of the data."
        },
        {
            id: "u4-q7",
            question: "Analyze 'K-Fold Cross Validation'. If $K=1$, why does the concept break down? If $K=N$ (Leave-one-out), what is the computational cost for a dataset with 1 million rows?",
            scheme: "3M: K=1 impossibility; 4M: LOOCV computational cost; 3M: Practical recommendation (K=5 or 10).",
            solution: "<strong>K=1:</strong> Fails because you have no data left to 'Test' on (Training = 100%, Testing = 0%).<br><strong>K=N (1 Million):</strong> Extremely high cost. You would have to train the model **1 Million times**, each time holding out one row. For complex models like Random Forest, this would take weeks on a standard PC.<br><br><strong>Recommendation:</strong> Use **K=10**. It provides a good balance between bias and computational time, training the model only 10 times."
        },
        {
            id: "u4-q8",
            question: "In Decision Trees, evaluate the 'Greedy Search' strategy. How does it lead to a 'Sub-optimal' global tree? What modern technique (Ensemble) fixes this?",
            scheme: "4M: Greedy approach (Looking only 1 step ahead); 4M: Ensemble (Random Forest/XGBoost) logic; 2M: Global vs Local optima.",
            solution: "Decision trees are **Greedy**: at each split, they choose the variable that gives the immediate best Gini reduction. They don't 'look ahead' to see if a slightly worse split now would lead to a much better split three levels down.<br><br><strong>Fix:</strong> **Random Forest** fixes this by introducing diversity. By forcing different trees to start with different random variables, the forest 'explores' more paths and eventually finds the global best pattern through 'The Wisdom of the Crowd'."
        },
        {
            id: "u4-q9",
            question: "Contrast 'Correlation' vs 'Mutual Information' (MI). If a relationship is perfectly circular (e.g., $X^2 + Y^2 = 1$), why will Correlation be 0 but MI be high?",
            scheme: "5M: Linear vs Non-linear relationship analysis; 5M: Information theory concept.",
            solution: "<strong>Correlation</strong> measures the strength of a **Straight Line**. A circle has no straight-line trend (it goes up and then down), so the line of best fit is flat (Correlation = 0).<br><strong>Mutual Information</strong> measures 'How much do I know about Y if I know X'. In a circle, if I know $X=0.5$, I know $Y$ must be $\pm 0.86$. There is a clear relationship.<br><br><strong>Usage:</strong> Use Correlation for simple linear trends; use MI for complex, non-linear dependacies."
        },
        {
            id: "u4-q10",
            question: "Synthesize the 'Curse of Dimensionality'. Why does adding 100 more features (variables) to a model with only 50 rows of data usually 'Destroy' the model's accuracy?",
            scheme: "4M: Sparsity of data; 4M: Overfitting (Memorizing noise); 2M: Feature selection necessity.",
            solution: "As dimensions increase, the 'Distance' between points increases exponentially. The points become 'Lonely' (Sparsity). <br><br><strong>Impact:</strong> With 100 features and only 50 rows, the model can find a 'Fake' mathematical combination that perfectly predicts those 50 rows just by luck (like finding 50 people who all happened to wear red socks on a Tuesday). It 'Memorizes' individual rows instead of 'Learning' general rules. <br><br><strong>Fix:</strong> Always have many more rows than columns ($N \gg P$). If not, use **Principal Component Analysis (PCA)** to reduce the dimensions."
        }
    ]
};
