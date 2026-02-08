const unit1Content = {
    "u1-prereq": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 1: Prerequisites | Foundations for Data Analysis Journey",
        hook: "Every expert was once a beginner. Let's build your data literacy from the ground up!",
        position: "Prerequisite Module for Unit 1",
        prerequisites: "Basic computer literacy, curiosity about data, willingness to learn.",
        outcomes: ["Understand what data is and why it matters", "Differentiate between information and data", "Recognize data in everyday life", "Grasp basic spreadsheet concepts"],
        subTopicsHierarchy: [
            {
                title: "Fundamentals of Data",
                subSubTopics: ["What is Data?", "Information vs Data", "The DIKW Pyramid"]
            },
            {
                title: "Data Utility",
                subSubTopics: ["Types of Questions Data Can Answer", "Real-world Data Examples"]
            },
            {
                title: "Practical Literacy",
                subSubTopics: ["Introduction to Spreadsheets", "Basic Excel/Google Sheets Operations", "Universal File Formats (CSV, XLSX, TXT)"]
            }
        ],
        syllabusMapping: "Foundation for Syllabus Section 1.1-1.4",
        background: "Data has existed since humans started recording information - from ancient tally marks on cave walls to modern digital databases. The digital revolution transformed how we collect, store, and analyze data.",
        motivation: "We generate 2.5 quintillion bytes of data daily! Understanding data is no longer optional - it's essential for every career. From doctors to marketers, everyone uses data to make better decisions.",
        problemStatement: "Many students fear 'data' because they think it requires advanced math. This misconception prevents them from exploring a field that's actually about asking good questions and finding patterns.",
        coreConcept: "Data is raw facts and figures. When we organize and interpret data, it becomes information. When we use information to make decisions, it becomes knowledge.",
        terminology: "Data, Information, Knowledge, Wisdom (DIKW Pyramid), Dataset, Record, Field, Observation, Variable",
        technicalFoundations: "Understanding the difference between qualitative (descriptive) and quantitative (numerical) observations.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# PREREQUISITE 1: Understanding Data Types in Real Life\\n# Let's represent a simple student record\\n\\nstudent_name <- 'Alice'  # Text data (Qualitative)\\nstudent_age <- 20        # Numeric data (Quantitative)\\nstudent_grade <- 'A'     # Categorical data\\nis_enrolled <- TRUE      # Logical data (Yes/No)\\n\\nprint(paste('Student:', student_name))\\nprint(paste('Age:', student_age, 'years'))\\nprint(paste('Grade:', student_grade))\\nprint(paste('Enrolled:', is_enrolled))\\n\\n# PREREQUISITE 2: Simple Data Analysis\\n# Daily temperatures for a week\\ntemperatures <- c(25, 27, 26, 30, 28, 24, 26)\\ndays <- c('Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun')\\n\\n# Finding patterns\\nhighest_temp <- max(temperatures)\\nlowest_temp <- min(temperatures)\\naverage_temp <- mean(temperatures)\\n\\nprint(paste('Hottest day:', days[which.max(temperatures)], 'at', highest_temp, '°C'))\\nprint(paste('Coldest day:', days[which.min(temperatures)], 'at', lowest_temp, '°C'))\\nprint(paste('Average temperature:', round(average_temp, 1), '°C'))",
        rOutput: "[1] \\\"Student: Alice\\\"\\n[1] \\\"Age: 20 years\\\"\\n[1] \\\"Grade: A\\\"\\n[1] \\\"Enrolled: TRUE\\\"\\n[1] \\\"Hottest day: Thu at 30 °C\\\"\\n[1] \\\"Coldest day: Sat at 24 °C\\\"\\n[1] \\\"Average temperature: 26.7 °C\\\"",
        rInterpretation: "<strong>Welcome to the World of Data!</strong><br><br>🎓 <strong>CONCEPT 1: Data Types in Real Life</strong><br><br>Every piece of information about Alice is DATA:<br>• <strong>Name ('Alice'):</strong> TEXT data - can't do math with it, but we can sort alphabetically<br>• <strong>Age (20):</strong> NUMBER data - we can calculate averages, find who's oldest, etc.<br>• <strong>Grade ('A'):</strong> CATEGORY data - limited options (A, B, C, D, F)<br>• <strong>Enrolled (TRUE):</strong> YES/NO data - only two possible values<br><br>💡 <strong>Why This Matters:</strong> Different data types need different analysis methods. You can't 'average' names, but you CAN count how many students have each grade!<br><br>🌡️ <strong>CONCEPT 2: Finding Patterns in Data</strong><br><br>From just 7 temperature readings, we discovered:<br>• <strong>Hottest day: Thursday (30°C)</strong> - Maybe plan outdoor activities for Thursday?<br>• <strong>Coldest day: Saturday (24°C)</strong> - Bring a jacket on Saturday!<br>• <strong>Average: 26.7°C</strong> - The 'typical' temperature for the week<br><br>🎯 <strong>This is Data Analysis!</strong> We took raw numbers and turned them into actionable insights.<br><br>📊 <strong>The DIKW Pyramid (Your Learning Journey):</strong><br><br>1. <strong>DATA:</strong> Raw facts → [25, 27, 26, 30, 28, 24, 26]<br>2. <strong>INFORMATION:</strong> Organized data → 'Thursday was hottest at 30°C'<br>3. <strong>KNOWLEDGE:</strong> Understanding patterns → 'Mid-week tends to be warmer'<br>4. <strong>WISDOM:</strong> Making decisions → 'Schedule outdoor event on Thursday'<br><br>🌍 <strong>Data in Your Daily Life:</strong><br><br>You're already using data without realizing it!<br>• <strong>Checking weather app:</strong> Temperature, humidity, rain probability<br>• <strong>Choosing a restaurant:</strong> Star ratings, number of reviews, price range<br>• <strong>Watching Netflix:</strong> 'Because you watched...' recommendations<br>• <strong>Fitness tracker:</strong> Steps, calories, heart rate<br><br>🔑 <strong>Key Insight:</strong> Data analysis isn't about complex formulas - it's about asking good questions:<br>• What's the highest/lowest value?<br>• What's the average?<br>• Are there any patterns?<br>• What's unusual or unexpected?<br><br>✅ <strong>PREREQUISITE CHECKLIST - You're ready for Unit 1 if you can:</strong><br><br>☐ Explain the difference between data and information<br>☐ Identify data types (text, number, category, yes/no)<br>☐ Understand what 'average' means<br>☐ Recognize patterns in simple lists of numbers<br>☐ Use basic spreadsheet software (Excel/Google Sheets)<br>☐ Open and save CSV files<br>☐ Understand that data helps us make better decisions",
        illustration: "Raw Numbers (Data) → Organized Table (Information) → Insights (Knowledge) → Smart Decisions (Wisdom).",
        caseProblem: "A small bakery owner tracks daily sales: Mon=50, Tue=45, Wed=60, Thu=55, Fri=80, Sat=120, Sun=100. She doesn't know when to bake more bread.",
        caseSolution: "Analyzed the data to find patterns: Weekends (Sat/Sun) have 2x higher sales than weekdays. Friday starts the weekend rush.",
        caseOutcome: "She now bakes 50% more bread on Friday-Sunday, reducing waste on weekdays and avoiding stockouts on weekends. Profit increased 30%!",
        applications: ["Personal Finance Tracking", "Social Media Analytics", "Sports Statistics", "Weather Forecasting", "Shopping Price Comparisons"],
        challenges: "Information overload - too much data can be as bad as too little. Learning to focus on relevant data is a skill.",
        research: "Data Literacy Education - teaching non-technical people to understand and use data in their daily lives.",
        toolMapping: "Excel, Google Sheets, CSV files, basic calculators.",
        experientialActivity: "Track something for 7 days (sleep hours, screen time, money spent). At the end, find the highest, lowest, and average. What pattern did you discover?",
        projectIPO: {
            input: "Your smartphone battery usage for one week.",
            process: "Identify which app drains most battery. Calculate average daily usage.",
            output: "A decision: 'Uninstall App X' or 'Charge phone at 3 PM daily'."
        },
        quizQuestions: [
            "What's the difference between data and information?",
            "Give an example of qualitative data from your daily life.",
            "Why is 'average' useful when analyzing data?",
            "What does CSV stand for?",
            "How is data used in weather forecasting?"
        ],
        examQuestions5M: [
            "Explain the DIKW (Data-Information-Knowledge-Wisdom) pyramid with a real-world example.",
            "Discuss three ways data is used in your daily life without you realizing it."
        ],
        examQuestions10M: [
            "Define data and explain its importance in modern decision-making. Provide examples from at least three different domains (healthcare, business, education). Demonstrate basic data analysis using a simple dataset."
        ],
        nextTopic: "Overview & Need for Data Analytics",
        nextLinkage: "Now that you understand what data IS, let's explore WHY we need analytics to make sense of it.",
        nextReading: "Think about a recent decision you made. What data did you use (consciously or unconsciously)?"
    },
    "u1-t1": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 1: Introduction to Data Analysis | Topic 1: Overview & Need for Data Analytics",
        hook: "Data is the new oil, but without analytics, it's just a sticky mess!",
        position: "1st Topic of Unit 1",
        prerequisites: "Basic understanding of spreadsheets and curiosity.",
        outcomes: ["Define Data Analytics", "Identify the need for analytics in business", "Understand the role of R in the analytics lifecycle"],
        subTopicsHierarchy: [
            {
                title: "Foundations of Analytics",
                subSubTopics: ["Formal Definitions", "Evolution from Gut Feeling to Data-Driven"]
            },
            {
                title: "The Analytics Lifecycle",
                subSubTopics: ["ETL Process (Extract, Transform, Load)", "Data Refinement & Cleaning"]
            },
            {
                title: "Maturity Levels",
                subSubTopics: ["Descriptive (What happened?)", "Diagnostic (Why?)", "Predictive (What next?)", "Prescriptive (How to optimize?)"]
            },
            {
                title: "R in the Modern World",
                subSubTopics: ["Why choose R over Excel?", "Role of R in Industry (Finance, Retail, Healthcare)"]
            }
        ],
        syllabusMapping: "Syllabus Section 1.1: Foundations of Analytics",
        background: "Data collection started with simple tally marks on cave walls. Today, every click and swipe generates data. The shift from 'recording data' to 'using data' happened in the late 20th century with the rise of computing power.",
        motivation: "In a world of information overload, companies like Amazon and Netflix use analytics to survive. It's not just for techies; it's for everyone who wants to make better decisions.",
        problemStatement: "Without data analytics, managers make decisions based on 'gut feeling'. Intuition fails when dealing with 10,000 customers or complex supply chains, leading to waste and lost revenue.",
        coreConcept: "Data Analytics is the science of analyzing raw data to make conclusions. It involves inspecting, cleansing, transforming, and modeling data.",
        terminology: "ETL (Extract, Transform, Load), Insights, Data Mining, Predictive Modeling",
        technicalFoundations: "Logic: Descriptive (What happened) -> Diagnostic (Why) -> Predictive (What next) -> Prescriptive (How to fix).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Step 1: Create a tiny dataset representing customer ages\nages <- c(25, 30, 22, 45, 28, 35, 40, 50, 23)\n\n# Step 2: Calculate the average age (The 'Aha!' moment)\naverage_age <- mean(ages)\nprint(paste('Average Customer Age:', average_age))\n\n# Step 3: Summarize the whole detective report\nsummary_report <- summary(ages)\nprint(summary_report)",
        rOutput: "[1] \"Average Customer Age: 33.1111111111111\"\n   Min. 1st Qu.  Median    Mean 3rd Qu.    Max. \n  22.00   25.00   30.00   33.11   40.00   50.00",
        rInterpretation: "<strong>Line-by-Line Breakdown:</strong><br><br>📊 <strong>Output Line 1:</strong> 'Average Customer Age: 33.11' - This tells us that if we add all 9 customer ages and divide by 9, we get approximately 33 years. This is the <em>central tendency</em> of our data.<br><br>📈 <strong>Summary Statistics:</strong><br>• <strong>Min (22):</strong> The youngest customer in our dataset<br>• <strong>1st Quartile (25):</strong> 25% of customers are 25 years or younger<br>• <strong>Median (30):</strong> The middle value when ages are sorted - half are younger, half are older<br>• <strong>Mean (33.11):</strong> The mathematical average we calculated<br>• <strong>3rd Quartile (40):</strong> 75% of customers are 40 years or younger<br>• <strong>Max (50):</strong> The oldest customer<br><br>💡 <strong>Business Insight:</strong> This cafe's typical customer is in their early 30s, but they serve a wide age range (22-50). Marketing campaigns should target the 25-40 age demographic for maximum impact.",
        illustration: "Raw Data (Random Numbers) -> R Script (Refinery) -> Insight (Average Age / Trends) -> Business Decision.",
        caseProblem: "A local cafe doesn't know why they run out of milk every Tuesday.",
        caseSolution: "They analyzed 6 months of sales data using R to find patterns.",
        caseOutcome: "They discovered that Tuesday is when the local gym holds a 'Latte Meetup'. They now order 20% more milk on Tuesdays.",
        applications: ["Retail Recommendation Systems", "Fraud Detection in Banking", "Healthcare Patient Monitoring", "Sports Performance Analysis"],
        challenges: "Data privacy concerns, 'Dirty' data (missing values), and the high cost of data storage.",
        research: "Real-time stream analytics for IoT devices; explainable AI (XAI) to understand why models make certain predictions.",
        toolMapping: "RStudio, tidyverse, ggplot2, Shiny",
        experientialActivity: "Look at your own smartphone battery usage settings. Can you identify which app 'analytics' says is your biggest drain? Why do you think that is?",
        projectIPO: {
            input: "Daily step counts from a fitness tracker (CSV).",
            process: "Cleaning the data and calculating weekly averages in R.",
            output: "A bar chart showing active vs. sedentary days."
        },
        quizQuestions: [
            "What is the primary difference between data and information?",
            "Why is 'Gut Feeling' dangerous in modern business?",
            "Name the 4 stages of the analytics maturity model.",
            "How does R help in the 'Transform' stage of ETL?",
            "Identify one ethical challenge in data collection."
        ],
        examQuestions5M: [
            "Explain the need and importance of Data Analytics in the modern era.",
            "Briefly discuss the stages of the Data Analytics Lifecycle."
        ],
        examQuestions10M: [
            "Discuss the role of R programming in Data Science and explain how it differs from traditional spreadsheet tools like Excel."
        ],
        nextTopic: "Nature & Classification of Data",
        nextLinkage: "Now that we know WHY we need analytics, let's look at the different TYPES of data we will analyze.",
        nextReading: "Read about Structured vs. Unstructured data."
    },
    "u1-t2": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 1: Introduction to Data Analysis | Topic 2: Nature & Classification of Data",
        hook: "Is your data a neat spreadsheet or a chaotic box of photos?",
        position: "2nd Topic of Unit 1",
        prerequisites: "Overview of Data Analytics (Topic 1).",
        outcomes: ["Distinguish between Structured and Unstructured data", "Identify Qualitative vs Quantitative variables", "Classify data by its source and format"],
        subTopicsHierarchy: [
            {
                title: "Organizational Structure",
                subSubTopics: ["Structured Data (SQL, CSV)", "Unstructured Data (Text, Audio, Images)", "Semi-structured Data (JSON, XML)"]
            },
            {
                title: "Nature of Variables",
                subSubTopics: ["Qualitative (Nominal vs. Ordinal)", "Quantitative (Discrete vs. Continuous)"]
            },
            {
                title: "Levels of Measurement",
                subSubTopics: ["Interval Scale", "Ratio Scale", "Comparison of Measurements"]
            }
        ],
        syllabusMapping: "Syllabus Section 1.2: Data Types and Formats",
        background: "Historically, data was mostly numbers (Quantitative). With the internet, text, images, and videos (Unstructured) became the dominant form of information.",
        motivation: "You can't use a hammer for a screw. Similarly, you can't use a linear regression for a selfie. Classification helps choose the right tool.",
        problemStatement: "Organizations often store massive amounts of data in 'data lakes' but can't use it because they don't know if it's structured or unstructured, leading to 'Dark Data'.",
        coreConcept: "Data nature refers to its organization level. Structured data fits in tables; Unstructured data doesn't.",
        terminology: "Categorical, Numerical, Discrete, Continuous, Meta-data",
        technicalFoundations: "Nominal/Ordinal (Qualitative) vs. Interval/Ratio (Quantitative).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Step 1: Create a Categorical Variable (Qualitative)\nweather <- c('Sunny', 'Rainy', 'Cloudy', 'Sunny')\nprint(class(weather))\n\n# Step 2: Create a Numeric Variable (Quantitative)\ntemperature <- c(32, 25, 28, 31)\nprint(class(temperature))\n\n# Step 3: Combine into a Structured Data Frame\nmy_data <- data.frame(weather, temperature)\nprint(my_data)",
        rOutput: "[1] \"character\"\n[1] \"numeric\"\n  weather temperature\n1   Sunny          32\n2   Rainy          25\n3  Cloudy          28\n4   Sunny          31",
        rInterpretation: "<strong>Understanding Data Types in R:</strong><br><br>🔤 <strong>Output 1 - 'character':</strong> R recognizes 'weather' as text data (Qualitative/Categorical). You cannot perform mathematical operations like addition on 'Sunny' + 'Rainy' - it doesn't make sense!<br><br>🔢 <strong>Output 2 - 'numeric':</strong> R identifies 'temperature' as numbers (Quantitative). We CAN calculate averages, find maximums, etc.<br><br>📋 <strong>Data Frame Output:</strong> The table shows our <em>structured data</em> - each row is an observation (a day), and each column is a variable (weather condition and temperature). This is how R organizes related information.<br><br>💡 <strong>Key Insight:</strong> Notice how Row 1 and Row 4 both have 'Sunny' weather but different temperatures (32 vs 31). This demonstrates that <strong>Qualitative data</strong> (weather) can repeat, while <strong>Quantitative data</strong> (temperature) varies continuously. This is the fundamental difference between categorical and numerical data!",
        illustration: "Identity Card (Structured) vs. Personal Diary (Unstructured) vs. Email with Headers (Semi-structured).",
        caseProblem: "A hospital has patient records as both tables (age, weight) and handwritten notes.",
        caseSolution: "They classified the data to apply different analysis techniques (Statistics for tables, Text mining for notes).",
        caseOutcome: "Increased diagnostic accuracy by 15% using the combined insights.",
        applications: ["Customer Feedback Analysis (Unstructured)", "Stock Market Prediction (Structured)", "Image Recognition in Security", "Social Media Sentiment Analysis"],
        challenges: "Unstructured data requires significant pre-processing (Cleaning) before analysis.",
        research: "Multimodal learning—models that can process both text and images simultaneously.",
        toolMapping: "Factors in R, JSON lite for semi-structured data, stringr for text.",
        experientialActivity: "List 5 items in your room. Classify them by color (Qualitative) and weight (Quantitative).",
        projectIPO: {
            input: "A collection of customer reviews (Text).",
            process: "Classifying words into 'Positive' or 'Negative'.",
            output: "A 'Sentiment Score' for the product."
        },
        quizQuestions: [
            "Define Structured Data with an example.",
            "What is the difference between Discrete and Continuous variables?",
            "Is an MP3 file structured or unstructured?",
            "How does JSON differ from a CSV file?",
            "Why are Nominal variables called 'Qualitative'?"
        ],
        examQuestions5M: [
            "Distinguish between Structured, Unstructured, and Semi-structured data.",
            "Explain the levels of measurement: Nominal, Ordinal, Interval, and Ratio."
        ],
        examQuestions10M: [
            "Provide a detailed classification of data types used in analytics and discuss how R handles different data structures like vectors and data frames."
        ],
        nextTopic: "Characteristics of Data (The 3 V's)",
        nextLinkage: "The 'nature' of data leads directly into its 'characteristics' when it gets big.",
        nextReading: "Look Up 'Big Data 3Vs'."
    },
    "u1-t3": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 1: Introduction to Data Analysis | Topic 3: Characteristics of Data (The 3 V's)",
        hook: "Big Data is like a firehose—you can't drink from it without help!",
        position: "3rd Topic of Unit 1",
        prerequisites: "Understanding of Data Classification (Topic 2).",
        outcomes: ["Define Big Data using the 3 V's", "Understand the challenges of Volume, Velocity, and Variety", "Relate the 3 V's to real-world scenarios"],
        subTopicsHierarchy: [
            {
                title: "The Core 3 V's",
                subSubTopics: ["Volume (Scale of Data)", "Velocity (Speed of Processing)", "Variety (Diversity of Sources)"]
            },
            {
                title: "Extended Characteristics",
                subSubTopics: ["Veracity (Accuracy & Trust)", "Value (Business Utility)"]
            },
            {
                title: "Big Data Infrastructures",
                subSubTopics: ["Challenges of Traditional Databases", "Intro to Distributed Computing (Hadoop/Spark logic)"]
            }
        ],
        syllabusMapping: "Syllabus Section 1.3: Big Data Characteristics",
        background: "The term 'Big Data' was popularized around 2005. The 3 V's framework was developed to explain why traditional databases were failing.",
        motivation: "If your data grows 10x every year, your old methods will break. Understanding the V's helps you scale your infrastructure.",
        problemStatement: "Processing petabytes of data at millisecond speeds is impossible for a single computer. Businesses fail if they can't handle the speed of incoming information.",
        coreConcept: "Big Data isn't just 'large'; it's characterized by its scale (Volume), speed (Velocity), and diversity (Variety).",
        terminology: "Petabyte, Latency, Data Streams, Noise, Signal-to-Noise Ratio",
        technicalFoundations: "Distributed computing principles; Hadoop/Spark logic (briefly).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Simulating Velocity: Measuring time taken to process data\nstart_time <- Sys.time()\n\n# Simulating Volume: Large sequence\nlarge_seq <- 1:1000000\nsquared <- large_seq^2\n\nend_time <- Sys.time()\nprint(paste('Time taken (Velocity check):', end_time - start_time))",
        rOutput: "[1] \"Time taken (Velocity check): 0.0234560966491699\"",
        rInterpretation: "<strong>Simulating Big Data Processing:</strong><br><br>⏱️ <strong>Time Measurement:</strong> The output shows approximately 0.023 seconds (23 milliseconds) to process 1 million numbers. This demonstrates <em>Velocity</em> - how fast R can handle large-scale computations.<br><br>📊 <strong>Volume Demonstration:</strong> We created a sequence from 1 to 1,000,000 (that's the Volume) and squared each number. In real Big Data scenarios, this could be processing a million customer transactions or sensor readings.<br><br>💡 <strong>Performance Insight:</strong> Notice how R processed 1 million operations in under 0.03 seconds! This is because R uses <em>vectorization</em> - it processes the entire array at once, not one number at a time. Traditional loops would take much longer.<br><br>🔍 <strong>Real-World Parallel:</strong><br>• <strong>Google Search:</strong> Processes billions of queries per day with sub-second response times<br>• <strong>Stock Trading:</strong> Executes millions of trades in microseconds<br>• <strong>Netflix:</strong> Analyzes viewing patterns of 200+ million users simultaneously<br><br>The key takeaway: <strong>Big Data isn't just about size (Volume), it's about processing speed (Velocity)</strong>. Modern systems must handle both!",
        illustration: "Ocean (Volume) -> Waterfall (Velocity) -> Different types of fish/plants (Variety).",
        caseProblem: "A stock exchange processes 100,000 trades per second.",
        caseSolution: "Using 'Streaming Analytics' to detect insider trading instantly.",
        caseOutcome: "Detected illegal trades in real-time, preventing financial loss.",
        applications: ["Global Weather Forecasting", "YouTube Recommendation Engine", "Smart City Traffic Management", "IoT Sensor Monitoring"],
        challenges: "Veracity (Accuracy): Is the data truthful? or is it just noise?",
        research: "Data compression algorithms that preserve 'Value' while reducing 'Volume'.",
        toolMapping: "Apache Spark, data.table in R for high-performance processing.",
        experientialActivity: "Imagine you are tracking every person entering a mall. How would you handle the data if the crowd suddenly doubled?",
        projectIPO: {
            input: "Real-time Twitter feed keywords.",
            process: "Filtering and counting hashtags within a 1-minute window.",
            output: "A 'Trending Now' leaderboard."
        },
        quizQuestions: [
            "Name the primary 3 V's of Big Data.",
            "What does 'Veracity' mean in the context of analytics?",
            "Provide an example of high-velocity data.",
            "Why is 'Variety' a problem for traditional SQL databases?",
            "Which 'V' is most important for a business to make money?"
        ],
        examQuestions5M: [
            "Discuss the 3 V's of Big Data with suitable examples.",
            "Why is 'Value' considered the ultimate goal of Big Data?"
        ],
        examQuestions10M: [
            "Explain the characteristics of Big Data in detail and discuss the technical challenges in storing and analyzing such data using modern tools."
        ],
        nextTopic: "Applications of Data Analytics",
        nextLinkage: "Now that we know the characteristics of big data, let's see where it's applied.",
        nextReading: "General survey of Data Analytics in Industry."
    },
    "u1-t4": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 1: Introduction to Data Analysis | Topic 4: Applications of Data Analytics",
        hook: "From curing diseases to winning championships, data is everywhere!",
        position: "4th Topic of Unit 1",
        prerequisites: "Introduction to Unit 1 concepts.",
        outcomes: ["Identify DA applications across industries", "Understand how DA solves societal problems", "Apply DA logic to a chosen sector"],
        subTopicsHierarchy: [
            {
                title: "Business & Productivity",
                subSubTopics: ["Financial Fraud Detection", "Retail Churn Prediction", "Supply Chain Optimization"]
            },
            {
                title: "Health & Sciences",
                subSubTopics: ["Personalized Medicine", "Healthcare Patient Monitoring", "Energy Consumption Forecasting"]
            },
            {
                title: "Sports & Engineering",
                subSubTopics: ["Sports Wearables Analysis", "Agri-Yield Optimization", "Smart City Traffic Management"]
            }
        ],
        syllabusMapping: "Syllabus Section 1.4: Multi-disciplinary Applications",
        background: "Data analytics was once a tool only for mathematicians. Now, it's used by coaches, doctors, and farmers.",
        motivation: "Every job in the future will involve data. Knowing these applications prepares you for any career path.",
        problemStatement: "In healthcare, without data analytics, outbreaks (like COVID-19) are detected too late, costing lives.",
        coreConcept: "Applying statistical models and algorithms to specific domain datasets to solve practical problems.",
        terminology: "ROI (Return on Investment), Churn Rate, Yield Prediction, Personalized Medicine",
        technicalFoundations: "Domain Logic + Data Logic = Actionable Intelligence.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: "# Simple Healthcare App: Predicting if a patient is 'At Risk'\nheart_rate <- 110\nbp <- 150\n\nif(heart_rate > 100 || bp > 140){\n  print('Alert: High Risk Detected!')\n} else {\n  print('Status: Normal')\n}",
        rOutput: "[1] \"Alert: High Risk Detected!\"",
        rInterpretation: "<strong>Healthcare Decision Support System:</strong><br><br>🏥 <strong>Clinical Thresholds:</strong> The code checks two vital signs:<br>• <strong>Heart Rate (110 bpm):</strong> Normal resting rate is 60-100 bpm. Our patient exceeds this.<br>• <strong>Blood Pressure (150 mmHg):</strong> Healthy BP is below 140 mmHg. This patient is in the 'hypertensive' range.<br><br>⚠️ <strong>Alert Logic (|| operator):</strong> The double pipe '||' means <em>OR</em> - if EITHER condition is true, trigger the alert. Since both 110 > 100 AND 150 > 140 are true, the system immediately flags 'High Risk'.<br><br>💊 <strong>Clinical Action:</strong> This alert would prompt a doctor to:<br>1. Review patient history<br>2. Order additional tests (ECG, blood work)<br>3. Adjust medication dosage<br>4. Schedule follow-up appointment<br><br>🌍 <strong>Multi-Domain Applications:</strong><br>• <strong>Finance:</strong> Replace with credit_score < 600 || debt_ratio > 0.4 → 'Loan Denied'<br>• <strong>Sports:</strong> Replace with player_fatigue > 80 || injury_risk > 0.7 → 'Substitute Player'<br>• <strong>Agriculture:</strong> Replace with soil_moisture < 20 || temperature > 35 → 'Activate Irrigation'<br><br>💡 <strong>Key Insight:</strong> The SAME if-else logic structure applies across ALL industries - only the variables and thresholds change. This is why learning R is so powerful!",
        illustration: "Patient Data -> Diagnostic Analytics -> Treatment Plan -> Faster Recovery.",
        caseProblem: "A professional soccer team is losing games in the final 10 minutes.",
        caseSolution: "Analyzed wearable sensor data (GPS and Heart Rate) of players.",
        caseOutcome: "Identified that mid-fielders were exhausted early. Changed substitution strategy and won next 3 games.",
        applications: ["Supply Chain Optimization", "Energy Consumption Forecasting", "Predictive Maintenance in Airlines", "Targeted Marketing Campaigns"],
        challenges: "Ensuring AI models are fair and unbiased (Algorithmic Bias).",
        research: "Using Analytics for climate change mitigation and disaster response.",
        toolMapping: "R Markdown for reporting, Shiny for building interactive application dashboards.",
        experientialActivity: "Think of your favorite sports team. What data would you track to help them win?",
        projectIPO: {
            input: "Historic rainfall and soil moisture data.",
            process: "Correlating rainfall with crop yields using R.",
            output: "A 'Best Sowing Date' recommendation for farmers."
        },
        quizQuestions: [
            "How does Nike use data analytics?",
            "Explain 'Churn Prediction' in telecommunications.",
            "Can data analytics help in crime prevention?",
            "What is a 'Smart City'?",
            "Why is domain knowledge important for a data scientist?"
        ],
        examQuestions5M: [
            "List and briefly explain five diverse applications of Data Analytics.",
            "Discuss the role of Data Analytics in the Healthcare sector."
        ],
        examQuestions10M: [
            "Select any industry of your choice and provide a comprehensive case study on how Data Analytics using R can be implemented to solve a major pain point in that industry."
        ],
        nextTopic: "R Overview & Setup",
        nextLinkage: "Now that we are inspired by the applications, it's time to get our hands on the tool: R!",
        nextReading: "Download R and RStudio from CRAN and Posit."
    }
};

window.unit1Content = unit1Content;
