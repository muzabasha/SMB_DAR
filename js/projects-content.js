const projectsList = [
    {
        id: "p1",
        title: "E-Commerce Customer Segmentation",
        difficulty: "Intermediate",
        tags: ["Retail", "Clustering", "Unit 4"],
        description: "Analyze customer purchasing behavior to identify distinct segments for targeted marketing.",
        problem: "A retail giant has millions of customers but uses a 'one-size-fits-all' marketing strategy, leading to low conversion rates.",
        setup: "Use the RFM (Recency, Frequency, Monetary) model. Dataset: 1 year of transaction logs.",
        steps: [
            "Import global sales CSV data.",
            "Calculate RFM scores for each customer.",
            "Apply K-Means clustering in R to group customers.",
            "Visualize segments using 3D scatter plots."
        ],
        ipo: { input: "Transaction history (CSV)", process: "RFM Calculation + K-Means", output: "Segmented Customer Profiles" }
    },
    {
        id: "p2",
        title: "Hospital Readmission Predictor",
        difficulty: "Advanced",
        tags: ["Healthcare", "Logistic Regression", "Unit 4"],
        description: "Predict whether a patient will be readmitted within 30 days based on clinical data.",
        problem: "Hospitals face heavy fines for high readmission rates. Identifying high-risk patients early is crucial.",
        setup: "Dataset includes patient demographics, diagnosis codes, and medication history.",
        steps: [
            "Handle categorical variables using R Factors.",
            "Split data into Training and Testing sets.",
            "Build a Logistic Regression model.",
            "Evaluate using a Confusion Matrix and ROC curve."
        ],
        ipo: { input: "Patient clinical records", process: "Logistic Regression Modeling", output: "Readmission Risk Score" }
    },
    {
        id: "p3",
        title: "Real-Time Stock Market Volatility",
        difficulty: "Advanced",
        tags: ["Finance", "Time Series", "Unit 3"],
        description: "Visualize and analyze the intraday volatility of tech stocks using live-simulated data.",
        problem: "Traders need to identify 'flash' changes in market sentiment to execute high-frequency trades.",
        setup: "R Quantmod library for fetching data and Highcharter for visualization.",
        steps: [
            "Fetch real-time stock ticks.",
            "Calculate rolling standard deviation (Volatility).",
            "Create an interactive dashboard using Shiny.",
            "Add alert triggers for 2% price swings."
        ],
        ipo: { input: "Stock price streams", process: "Moving Average + SD Calculation", output: "Interactive Volatility Dashboard" }
    },
    {
        id: "p4",
        title: "Social Media Sentiment Audit",
        difficulty: "Intermediate",
        tags: ["NLP", "Text Mining", "Unit 2"],
        description: "Determine public sentiment (Positive, Negative, Neutral) for a brand based on Twitter/X data.",
        problem: "Brands struggle to monitor their reputation across thousands of daily mentions.",
        setup: "Tidytext package in R and Bing sentiment lexicon.",
        steps: [
            "Scrape or import tweet text data.",
            "Tokenize text into single words.",
            "Join with sentiment dictionaries.",
            "Create a Word Cloud of positive vs. negative terms."
        ],
        ipo: { input: "Public social media posts", process: "Text Tokenization + Lexicon Matching", output: "Sentiment Scorecard" }
    },
    {
        id: "p5",
        title: "Climate Change Trend Visualization",
        difficulty: "Beginner",
        tags: ["Environment", "Visualization", "Unit 3"],
        description: "Create a world map showing temperature changes over the last 100 years.",
        problem: "Raw climate data is hard for the public to understand without clear visual evidence.",
        setup: "Historic GHCN temperature dataset and ggplot2 map data.",
        steps: [
            "Clean temperature records (Remove NA values).",
            "Group data by decade and country.",
            "Generate a heat map (Choropleth).",
            "Animate the map to show changes over time."
        ],
        ipo: { input: "Global temperature CSV", process: "Decadal Averaging + Spatial Mapping", output: "Animated Temperature Heatmap" }
    },
    {
        id: "p6",
        title: "Credit Card Fraud Detection",
        difficulty: "Advanced",
        tags: ["Fintech", "Random Forest", "Unit 4"],
        description: "Detect anomalous transactions that deviate from a user's normal spending pattern.",
        problem: "Banks lose billions annually to fraudulent transactions that go undetected in real-time.",
        setup: "Highly imbalanced dataset of credit card transactions.",
        steps: [
            "Apply SMOTE (Sampling) to handle imbalanced data.",
            "Train a Random Forest classifier.",
            "Identify top features (e.g., location, amount).",
            "Test model sensitivity on 'unseen' fraud cases."
        ],
        ipo: { input: "Encoded transaction data", process: "SMOTE + Random Forest Classifier", output: "Fraud Warning System" }
    },
    {
        id: "p7",
        title: "Agriculture Yield Prediction",
        difficulty: "Intermediate",
        tags: ["Agri-Tech", "Linear Regression", "Unit 4"],
        description: "Predict crop yield (tonnes per hectare) based on soil moisture and rainfall.",
        problem: "Farmers struggle with financial planning due to unpredictable harvest volumes.",
        setup: "Multi-year weather and crop dataset.",
        steps: [
            "Perform correlation analysis (Rainfall vs. Yield).",
            "Fit a Multiple Linear Regression model.",
            "Check for 'Multicollinearity'.",
            "Generate a 'Harvest Forecast' report."
        ],
        ipo: { input: "Weather and Soil Data", process: "Multiple Regression Analysis", output: "Yield Prediction Report" }
    },
    {
        id: "p8",
        title: "Movie Recommendation System",
        difficulty: "Intermediate",
        tags: ["Entertainment", "Collaborative Filtering", "Unit 4"],
        description: "Build a 'People also liked' engine similar to Netflix.",
        problem: "Users spend too much time searching for content, leading to 'Subscription Fatigue'.",
        setup: "MovieLens 100k dataset.",
        steps: [
            "Create a User-Item rating matrix.",
            "Calculate similarity using Cosine Similarity.",
            "Predict blank ratings for unwatched movies.",
            "Return top 5 recommendations per user."
        ],
        ipo: { input: "User ratings history", process: "Cosine Similarity Matrix", output: "Top 5 Movie Recommendations" }
    },
    {
        id: "p9",
        title: "Student Dropout Risk Analysis",
        difficulty: "Intermediate",
        tags: ["Education", "Decision Trees", "Unit 4"],
        description: "Identify students at risk of leaving the course based on early engagement metrics.",
        problem: "Universities lose revenue and reputation when students drop out in the first year.",
        setup: "LMS engagement logs (Logins, Quiz scores, Forum posts).",
        steps: [
            "Calculate engagement 'index' for each student.",
            "Build a Decision Tree to find the 'Dropout Threshold'.",
            "Visualize the tree to explain decisions to faculty.",
            "Identify 10 'At-Risk' students for intervention."
        ],
        ipo: { input: "LMS activity logs", process: "Engagement Indexing + Decision Tree", output: "Early Warning List" }
    },
    {
        id: "p10",
        title: "Airline Delay Optimizer",
        difficulty: "Advanced",
        tags: ["Aviation", "Prescriptive Analytics", "Unit 4"],
        description: "Suggest flight path changes to minimize delays during storms.",
        problem: "Weather delays cost the aviation industry millions in fuel and compensation.",
        setup: "Bureau of Transportation Statistics airport data.",
        steps: [
            "Model the probability of delay using Binomial Dist.",
            "Simulate cost of re-routing vs. waiting.",
            "Use optimization to find the lowest-cost path.",
            "Generate an automated re-routing plan."
        ],
        ipo: { input: "Flight schedules + Weather data", process: "Simulation + Optimization", output: "Optimized Flight Re-routes" }
    },
    {
        id: "p11",
        title: "Smart Home Energy Profiling",
        difficulty: "Beginner",
        tags: ["IoT", "Descriptive Stats", "Unit 1"],
        description: "Analyze smart meter data to find peak energy usage periods in a household.",
        problem: "Homeowners pay high bills without knowing which appliances consume the most power.",
        setup: "Hourly energy consumption CSV from a smart plug.",
        steps: [
            "Convert timestamps to 'Peak' and 'Off-Peak' hours.",
            "Calculate average usage per hour category.",
            "Plot a day-night consumption cycle.",
            "Suggest 3 ways to save $50 per month."
        ],
        ipo: { input: "Hourly smart meter logs", process: "Timestamp Analysis + Mean Calculation", output: "Energy Saving Report" }
    },
    {
        id: "p12",
        title: "Uber/Lyft Pricing Simulation",
        difficulty: "Intermediate",
        tags: ["Transport", "Data Cleaning", "Unit 2"],
        description: "Analyze ride-share prices in Boston to find the best time to book a cheap ride.",
        problem: "Surge pricing makes commuting expensive for students during peak hours.",
        setup: "Kaggle Uber vs Lyft dataset.",
        steps: [
            "Clean 'Messy' raw logs with missing distance values.",
            "Group prices by 'Time of Day' and 'Weather'.",
            "Use t-tests to see if Uber is statistically cheaper than Lyft.",
            "Build a 'Price Guide' infographic."
        ],
        ipo: { input: "Uber/Lyft API logs", process: "Data Cleaning + T-Test Analysis", output: "Commuter Price Guide" }
    },
    {
        id: "p13",
        title: "Retail Inventory 'Stock-Out' Logic",
        difficulty: "Beginner",
        tags: ["Supply Chain", "Control Structures", "Unit 2"],
        description: "Build an automated system that alerts when stock levels fall dangerously low.",
        problem: "Manual stock checks lead to 'Empty Shelf' syndrome and lost sales.",
        setup: "Simple inventory matrix in R.",
        steps: [
            "Create a matrix of Items, Quantity, and Min-Level.",
            "Write a For Loop to check every item.",
            "Use an If statement to trigger 'Order Now' alerts.",
            "Print a 'Restock List' for the warehouse manager."
        ],
        ipo: { input: "Current stock counts", process: "For-Loop + If-Logic Check", output: "Automated Restock Report" }
    },
    {
        id: "p14",
        title: "FIFA Player Market Value Audit",
        difficulty: "Intermediate",
        tags: ["Sports", "Outlier Detection", "Unit 3"],
        description: "Identify 'undervalued' players who are high performers but have low salaries.",
        problem: "Sport teams with low budgets need to find hidden gems to stay competitive.",
        setup: "FIFA 24 player database.",
        steps: [
            "Create a scatter plot of Performance Score vs. Value.",
            "Use the Boxplot method to find outliers (Hidden Gems).",
            "Color-code players by age and potential.",
            "Build a 'Moneyball' scout report."
        ],
        ipo: { input: "Player stats database", process: "Scatter Plot + Boxplot Analysis", output: "Undervalued Player List" }
    },
    {
        id: "p15",
        title: "Water Quality Safety Monitor",
        difficulty: "Beginner",
        tags: ["Public Health", "Logic", "Unit 2"],
        description: "Analyze chemical levels in water samples to determine if it is safe for drinking.",
        problem: "Manual testing of rural water samples is slow and prone to human error.",
        setup: "Dataset of PH levels, Chloramines, and Turbidity.",
        steps: [
            "Define 'Safe' ranges for each chemical.",
            "Apply a Logical check across all samples.",
            "Count what percentage of samples are 'Toxic'.",
            "Generate a safety dashboard for the village."
        ],
        ipo: { input: "Water lab results", process: "Logical Range Filtering", output: "Safety Status Dashboard" }
    },
    {
        id: "p16",
        title: "Real-Estate Price Heatmap",
        difficulty: "Intermediate",
        tags: ["Real Estate", "Spatial Analytics", "Unit 3"],
        description: "Visualize home prices across different neighborhoods to find 'hot' markets.",
        problem: "Homebuyers are overwhelmed by property listings and can't find 'affordable' zones.",
        setup: "Zillow dataset + Leaflet R library.",
        steps: [
            "Geocode addresses into Lat/Long coordinates.",
            "Link coordinates with price-per-sqft data.",
            "Create a dynamic interactive map using Leaflet.",
            "Add filter sliders for budget and number of bedrooms."
        ],
        ipo: { input: "Property listings with address", process: "Geocoding + Spatial Mapping", output: "Interactive Price Map" }
    },
    {
        id: "p17",
        title: "HR Attrition Root Cause",
        difficulty: "Advanced",
        tags: ["HR Analytics", "Diagnostic", "Unit 1"],
        description: "Analyze employee surveys and exit interviews to find why people are quitting.",
        problem: "Losing trained staff increases hiring costs and slows down projects.",
        setup: "IBM HR Attrition dataset.",
        steps: [
            "Analyze 'Job Satisfaction' vs. 'Distance from Home'.",
            "Perform a chi-square test on Department vs. Attrition.",
            "Identify the #1 cause of resignation.",
            "Present a strategy to improve retention."
        ],
        ipo: { input: "Employee survey responses", process: "Chi-Square Test + Diagnostic Logic", output: "Attrition Root Cause Report" }
    },
    {
        id: "p18",
        title: "Pizza Delivery Time Predictor",
        difficulty: "Beginner",
        tags: ["Food-Tech", "Normal Distribution", "Unit 4"],
        description: "Determine the probability that a pizza will be 'late' (over 30 mins).",
        problem: "A pizza chain promises '30 mins or free'—they need to know how much they will lose.",
        setup: "Dataset of 5000 delivery times.",
        steps: [
            "Check if delivery times follow a Normal Distribution.",
            "Calculate the Z-score for 30 minutes.",
            "Use pnorm() to find the percentage of late deliveries.",
            "Suggest the 'Safe' promise time (e.g., 35 mins)."
        ],
        ipo: { input: "Delivery time logs", process: "Normal Distribution Modeling", output: "Late-Delivery Probability" }
    },
    {
        id: "p19",
        title: "Spotify Playlist Generator",
        difficulty: "Intermediate",
        tags: ["Music", "Clustering", "Unit 4"],
        description: "Cluster songs by 'BPM' and 'Danceability' to create a Workout vs. Chill playlist.",
        problem: "Generic playlists often mix high-energy and low-energy songs, ruining the mood.",
        setup: "Spotify API data (Energy, Tempo, Acousticness).",
        steps: [
            "Scale the data (Normalizing between 0 and 1).",
            "Apply Hierarchical Clustering.",
            "Cut the tree into 3 clusters (Workout, Study, Party).",
            "Generate tracklists for each mood."
        ],
        ipo: { input: "Song audio features", process: "Hierarchical Clustering", output: "3 Mood-Based Playlists" }
    },
    {
        id: "p20",
        title: "A/B Test for Web Design",
        difficulty: "Advanced",
        tags: ["UX", "Hypothesis Testing", "Unit 4"],
        description: "Analyze which website button color (Blue vs Green) leads to more clicks.",
        problem: "Web designers disagree on aesthetics; need data to prove which design converts more.",
        setup: "Click-stream logs from two different landing pages.",
        steps: [
            "Calculate Conversion Rate for Page A and Page B.",
            "Perform a 2-sample Proportion Test (z-test).",
            "Check the p-value for statistical significance.",
            "Recommend the 'Winning' design to the CEO."
        ],
        ipo: { input: "Click/No-Click logs (A/B)", process: "Z-Test for Proportions", output: "Winning Design Recommendation" }
    }
];

window.projectsList = projectsList;
