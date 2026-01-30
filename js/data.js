const courseData = {
    title: "Data Analytics using R",
    semester: "Even Semester 2025-26",
    branch: "Non-CSE Students",
    rVersion: "4.3.3",
    courseObjectives: [
        "To provide a strong foundation in the principles and practices of data analytics.",
        "To equip students with the necessary skills to use R for data manipulation, visualization, and statistical analysis.",
        "To enable students to perform predictive and prescriptive analytics on real-world datasets.",
        "To foster an understanding of data-driven decision-making in diverse domains."
    ],
    courseOutcomes: [
        "CO1: Demonstrate a comprehensive understanding of data types, structures, and analytics lifecycles.",
        "CO2: Write efficient R scripts for data cleaning, transformation, and exploratory data analysis.",
        "CO3: Create professional, insight-driven visualizations using base R and advanced plotting libraries.",
        "CO4: Build and evaluate statistical and machine learning models (Regression, Trees, Forests) to solve complex problems.",
        "CO5: Apply prescriptive analytics techniques to optimize business processes and decision outcomes."
    ],
    units: [
        {
            id: 1,
            title: "Introduction to Data Analysis",
            description: "No more boring lectures. Imagine we are detectives in a world made of information!",
            objectives: [
                "Understand the core philosophy of Data Analytics",
                "Classify different types of data (Structured/Unstructured)",
                "Identify Big Data characteristics (3V's)",
                "Explore real-world applications across industries"
            ],
            topics: [
                { id: "u1-prereq", title: "📚 Prerequisites: Data Literacy Basics", status: "pending", contentKey: "u1-prereq", contentSource: "unit1" },
                { id: "u1-t1", title: "Overview & Need for Data Analytics", status: "completed", contentKey: "u1-t1", contentSource: "unit1" },
                { id: "u1-t2", title: "Nature & Classification of Data", status: "pending", contentKey: "u1-t2", contentSource: "unit1" },
                { id: "u1-t3", title: "Characteristics of Data (The 3 V's)", status: "pending", contentKey: "u1-t3", contentSource: "unit1" },
                { id: "u1-t4", title: "Applications of Data Analytics", status: "pending", contentKey: "u1-t4", contentSource: "unit1" }
            ]
        },
        {
            id: 2,
            title: "R Programming Basics",
            description: "Learning R is like learning to talk to a very literal but very fast assistant.",
            objectives: [
                "Set up R and RStudio environment",
                "Master variables, data types, and assignment",
                "Implement decision logic and loops",
                "Work with Vectors, Matrices, and Arrays"
            ],
            topics: [
                { id: "u2-prereq", title: "📚 Prerequisites: Programming Fundamentals", status: "pending", contentKey: "u2-prereq", contentSource: "unit2" },
                { id: "u2-t1", title: "R Overview & Setup", status: "pending", contentKey: "u2-t1", contentSource: "unit2" },
                { id: "u2-t2", title: "Variables & Data Types", status: "pending", contentKey: "u2-t2", contentSource: "unit2" },
                { id: "u2-t3", title: "Control Structures", status: "pending", contentKey: "u2-t3", contentSource: "unit2" },
                { id: "u2-t4", title: "Array, Matrix, Vectors", status: "pending", contentKey: "u2-t4", contentSource: "unit2" }
            ]
        },
        {
            id: 3,
            title: "Data Visualization using R",
            description: "Turn spreadsheets into masterpieces. Picasso with more math.",
            objectives: [
                "Import data from external sources (CSV/Excel/JSON)",
                "Create basic and advanced charts in R",
                "Apply the Grammar of Graphics principles",
                "Interpret visual patterns and outliers"
            ],
            topics: [
                { id: "u3-prereq", title: "📚 Prerequisites: Visual Literacy", status: "pending", contentKey: "u3-prereq", contentSource: "unit3" },
                { id: "u3-t1", title: "Reading External Data", status: "pending", contentKey: "u3-t1", contentSource: "unit3" },
                { id: "u3-t2", title: "Charts & Graphs", status: "pending", contentKey: "u3-t2", contentSource: "unit3" }
            ]
        },
        {
            id: 4,
            title: "Statistics & Prescriptive Analytics",
            description: "Predicting the future. Crystal ball sold separately.",
            objectives: [
                "Understand Normal and Binomial distributions",
                "Perform Linear Regression modeling",
                "Understand Ensemble models (Random Forest)",
                "Explore Prescriptive Analytics and RL"
            ],
            topics: [
                { id: "u4-prereq", title: "📚 Prerequisites: Statistical Foundations", status: "pending", contentKey: "u4-prereq", contentSource: "unit4" },
                { id: "u4-t1", title: "Normal and Binomial distributions", status: "pending", contentKey: "u4-t1", contentSource: "unit4" },
                { id: "u4-t2", title: "Regression Analysis", status: "pending", contentKey: "u4-t2", contentSource: "unit4" },
                { id: "u4-t3", title: "Random Forest & Decision Trees", status: "pending", contentKey: "u4-t3", contentSource: "unit4" },
                { id: "u4-t4", title: "Prescriptive Analytics & RL", status: "pending", contentKey: "u4-t4", contentSource: "unit4" }
            ]
        }
    ],
    get projects() {
        return window.projectsList || [];
    },

    // Helper function to get content for a topic
    getTopicContent(topic) {
        if (!topic.contentKey || !topic.contentSource) {
            return null;
        }

        const sourceMap = {
            'unit1': window.unit1Content,
            'unit2': window.unit2Content,
            'unit3': window.unit3Content,
            'unit4': window.unit4Content
        };

        const source = sourceMap[topic.contentSource];
        if (!source) {
            console.error(`Content source '${topic.contentSource}' not found`);
            return null;
        }

        const content = source[topic.contentKey];
        if (!content) {
            console.error(`Content key '${topic.contentKey}' not found in ${topic.contentSource}`);
            return null;
        }

        return [content]; // Return as array for compatibility
    }
};
