// Quiz Data for All Units
const quizData = {
    unit1: {
        title: "Unit 1: Introduction to Data Analysis",
        description: "Test your understanding of data analytics fundamentals, data types, and applications.",
        questions: [
            {
                id: "u1-q1",
                question: "What are the three V's that characterize Big Data?",
                options: [
                    "Volume, Velocity, Variety",
                    "Value, Verification, Validation",
                    "Visual, Verbal, Virtual",
                    "Variable, Vector, Version"
                ],
                correctAnswer: 0,
                explanation: "The 3 V's of Big Data are <strong>Volume</strong> (massive amounts of data), <strong>Velocity</strong> (speed of data generation and processing), and <strong>Variety</strong> (different types and formats of data). These characteristics distinguish Big Data from traditional datasets."
            },
            {
                id: "u1-q2",
                question: "Which of the following is an example of UNSTRUCTURED data?",
                options: [
                    "Excel spreadsheet with sales records",
                    "SQL database table",
                    "Social media posts and images",
                    "CSV file with customer information"
                ],
                correctAnswer: 2,
                explanation: "<strong>Social media posts and images</strong> are unstructured data because they don't fit into predefined tables or schemas. Unstructured data includes text, images, videos, and audio files. In contrast, Excel spreadsheets, SQL tables, and CSV files are structured data with defined rows and columns."
            },
            {
                id: "u1-q3",
                question: "What is the primary goal of Data Analytics?",
                options: [
                    "To collect as much data as possible",
                    "To extract meaningful insights for decision-making",
                    "To create complex visualizations",
                    "To replace human analysts"
                ],
                correctAnswer: 1,
                explanation: "The primary goal of Data Analytics is <strong>to extract meaningful insights for decision-making</strong>. While collecting data, creating visualizations, and using automation are important, the ultimate purpose is to transform raw data into actionable insights that drive better business decisions."
            },
            {
                id: "u1-q4",
                question: "In which industry is Data Analytics used to predict patient readmission rates?",
                options: [
                    "Retail",
                    "Healthcare",
                    "Finance",
                    "Entertainment"
                ],
                correctAnswer: 1,
                explanation: "<strong>Healthcare</strong> uses data analytics extensively to predict patient readmission rates, optimize treatment plans, identify disease patterns, and improve patient outcomes. This predictive capability helps hospitals reduce costs and improve care quality."
            },
            {
                id: "u1-q5",
                question: "What type of data is 'Customer Age' in a database?",
                options: [
                    "Qualitative data",
                    "Categorical data",
                    "Quantitative data",
                    "Unstructured data"
                ],
                correctAnswer: 2,
                explanation: "'Customer Age' is <strong>Quantitative data</strong> because it represents numerical measurements that can be counted or measured. Quantitative data can be used in mathematical operations (average age, age range, etc.). In contrast, qualitative/categorical data represents characteristics or categories (like gender, color, or city)."
            }
        ]
    },
    unit2: {
        title: "Unit 2: R Programming Basics",
        description: "Test your knowledge of R syntax, data types, control structures, and data structures.",
        questions: [
            {
                id: "u2-q1",
                question: "What is the correct way to assign a value to a variable in R?",
                options: [
                    "x = 5 only",
                    "x <- 5 only",
                    "Both x = 5 and x <- 5 work",
                    "x := 5"
                ],
                correctAnswer: 2,
                explanation: "In R, <strong>both x = 5 and x <- 5 work</strong> for variable assignment. However, the arrow operator <code><-</code> is preferred by R style guides because it clearly indicates the direction of assignment and avoids confusion with function arguments. The <code>:=</code> syntax is not valid in base R."
            },
            {
                id: "u2-q2",
                question: "Which data type would R assign to: c(1, 2, 'three', 4)?",
                options: [
      