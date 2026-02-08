const unit2Content = {
    "u2-prereq": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 2: Prerequisites | Programming Fundamentals",
        hook: "Coding isn't magic - it's just giving very precise instructions to a very literal friend!",
        position: "Prerequisite Module for Unit 2",
        prerequisites: "Basic computer operations, understanding of mathematical operators (+, -, *, /), logical thinking.",
        outcomes: ["Understand what programming is", "Grasp the concept of algorithms", "Learn basic programming logic", "Understand variables and assignment"],
        subTopicsHierarchy: [
            {
                title: "Core Logic Foundations",
                subSubTopics: ["What is Programming?", "The Algorithm Mindset", "Flowcharts & Logical Mapping"]
            },
            {
                title: "Execution Models",
                subSubTopics: ["Sequential Processing", "Input-Process-Output (IPO) Model", "Logical Branching Scenarios"]
            },
            {
                title: "Universal Building Blocks",
                subSubTopics: ["Variables as Named Containers", "Basic Math & Logical Operators", "Commenting & Code Documentation"]
            }
        ],
        syllabusMapping: "Foundation for Syllabus Section 2.1-2.4",
        background: "Programming languages evolved from machine code (1s and 0s) to human-readable languages. R was created in 1993 specifically for statistical computing, making it perfect for data analysis.",
        motivation: "Programming is like writing a recipe. You break down complex tasks into simple steps. Once you learn one language, learning others becomes much easier!",
        problemStatement: "Many beginners think programming requires genius-level math. In reality, it's about logical thinking and breaking problems into smaller pieces.",
        coreConcept: "A program is a sequence of instructions that tells a computer what to do. Variables store data, and operators manipulate that data.",
        terminology: "Algorithm, Variable, Assignment, Operator, Function, Syntax, Bug, Debugging, Comment, Console",
        technicalFoundations: "Sequential execution (code runs line by line, top to bottom), Assignment (storing values in named containers).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# PREREQUISITE 1: What is a Variable?
# Think of it as a labeled box that stores something

my_age <- 25
my_name <- 'Student'

print(paste('Hello,', my_name, '! You are', my_age, 'years old.'))

# PREREQUISITE 2: Basic Math Operators
a <- 10
b <- 3

print(paste('Addition:', a + b))
print(paste('Subtraction:', a - b))
print(paste('Multiplication:', a * b))
print(paste('Division:', a / b))
print(paste('Remainder:', a %% b))
print(paste('Power:', a ^ 2))

# PREREQUISITE 3: Logical Thinking
# Is 10 greater than 5?
result <- 10 > 5
print(paste('Is 10 > 5?', result))

# PREREQUISITE 4: Comments (Notes to yourself)
# This is a comment - R ignores this line
x <- 100  # You can also put comments after code`,
        rOutput: `[1] "Hello, Student ! You are 25 years old."
[1] "Addition: 13"
[1] "Subtraction: 7"
[1] "Multiplication: 30"
[1] "Division: 3.33333333333333"
[1] "Remainder: 1"
[1] "Power: 100"
[1] "Is 10 > 5? TRUE"`,
        rInterpretation: "<strong>Programming Fundamentals Explained:</strong><br><br>📦 <strong>CONCEPT 1: Variables (Storage Boxes)</strong><br><br>• <strong>my_age <- 25:</strong> The arrow (<-) means 'store 25 in a box labeled my_age'<br>• <strong>my_name <- 'Student':</strong> Text must be in quotes ('...' or \\\"...\\\")<br>• <strong>Why use variables?</strong> Instead of typing 25 everywhere, just use my_age. If age changes, update it once!<br><br>💡 <strong>Real-World Analogy:</strong> Variables are like labeled jars in a kitchen. The label (variable name) tells you what's inside (value).<br><br>➕ <strong>CONCEPT 2: Mathematical Operators</strong><br><br>• <strong>Addition (13):</strong> 10 + 3 = 13 (straightforward)<br>• <strong>Subtraction (7):</strong> 10 - 3 = 7<br>• <strong>Multiplication (30):</strong> 10 * 3 = 30 (use * not ×)<br>• <strong>Division (3.333...):</strong> 10 / 3 = 3.33 (R keeps decimals)<br>• <strong>Remainder (1):</strong> 10 %% 3 = 1 (10 divided by 3 leaves remainder 1)<br>• <strong>Power (100):</strong> 10^2 = 10 × 10 = 100<br><br>🎯 <strong>CONCEPT 3: Logical Comparisons</strong><br><br>• <strong>10 > 5 returns TRUE:</strong> R can answer yes/no questions!<br>• <strong>Other comparisons:</strong><br>  - Greater than: ><br>  - Less than: <<br>  - Equal to: ==<br>  - Not equal to: !=<br>  - Greater or equal: >=<br>  - Less or equal: <=<br><br>💬 <strong>CONCEPT 4: Comments (Your Notes)</strong><br><br>• <strong># This is a comment:</strong> R ignores anything after #<br>• <strong>Why comment?</strong> Explain WHY you wrote code, not WHAT it does<br>• <strong>Future you:</strong> Comments help you remember your logic 6 months later!<br><br>🔑 <strong>The Input-Process-Output Model:</strong><br><br>Every program follows this pattern:<br>1. <strong>INPUT:</strong> Get data (user types, file reads, sensor data)<br>2. <strong>PROCESS:</strong> Do something with it (calculate, transform, analyze)<br>3. <strong>OUTPUT:</strong> Show results (print to screen, save to file, display chart)<br><br>Example from our code:<br>• <strong>INPUT:</strong> a = 10, b = 3<br>• <strong>PROCESS:</strong> a + b<br>• <strong>OUTPUT:</strong> print('Addition: 13')<br><br>🐛 <strong>Common Beginner Mistakes:</strong><br><br>1. <strong>Forgetting quotes:</strong> my_name <- Student ❌ (should be 'Student')<br>2. <strong>Wrong arrow:</strong> my_age = 25 (works, but <- is R style)<br>3. <strong>Case sensitivity:</strong> MyAge and myage are DIFFERENT variables!<br>4. <strong>Typos:</strong> print(my_nane) ❌ (should be my_name)<br><br>✅ <strong>PREREQUISITE CHECKLIST - Ready for Unit 2 if you can:</strong><br><br>☐ Explain what a variable is<br>☐ Use <- to assign values<br>☐ Perform basic math operations (+, -, *, /)<br>☐ Understand that code runs line-by-line, top to bottom<br>☐ Write comments using #<br>☐ Recognize TRUE/FALSE as special values<br>☐ Understand that computers are VERY literal (no typos!)<br>☐ Know that programming is just breaking problems into tiny steps",
        illustration: "Recipe (Algorithm) → Ingredients (Variables) → Cooking Steps (Code) → Delicious Meal (Output).",
        caseProblem: "A student wants to calculate their final grade: Midterm (30%), Assignments (20%), Final Exam (50%). Scores are 85, 90, 88.",
        caseSolution: "Used variables and operators: final_grade <- (85*0.3) + (90*0.2) + (88*0.5) = 87.5",
        caseOutcome: "The student can now quickly recalculate if any score changes, instead of redoing math manually each time!",
        applications: ["Automating Repetitive Tasks", "Building Calculators", "Data Entry Validation", "Simple Games", "Personal Budget Trackers"],
        challenges: "Syntax errors (typos, missing quotes) are frustrating for beginners. Remember: computers are literal - they do EXACTLY what you say, not what you mean!",
        research: "Natural Language Programming - writing code in plain English that AI translates to programming languages.",
        toolMapping: "print(), paste(), basic operators (+, -, *, /, %%, ^), assignment (<-).",
        experientialActivity: "Write step-by-step instructions for making a sandwich. Be VERY specific (like explaining to an alien). This is what programming feels like!",
        projectIPO: {
            input: "Your monthly income and expenses.",
            process: "Calculate: savings = income - expenses. Calculate percentage: (savings/income) * 100.",
            output: "Message: 'You saved 25% of your income this month!'"
        },
        quizQuestions: [
            "What does the <- operator do?",
            "Why do we use variables instead of typing values directly?",
            "What's the difference between = and ==?",
            "What happens if you forget quotes around text?",
            "Why are comments important in code?"
        ],
        examQuestions5M: [
            "Explain the Input-Process-Output model with a programming example.",
            "Discuss the importance of variable naming conventions and provide examples of good vs bad variable names."
        ],
        examQuestions10M: [
            "Define an algorithm and explain how it relates to programming. Demonstrate the use of variables, operators, and comments in R with a practical example (e.g., calculating compound interest)."
        ],
        nextTopic: "R Overview & Setup",
        nextLinkage: "Now that you understand programming basics, let's set up R and start writing real code!",
        nextReading: "Think of a repetitive task you do daily. Could a program automate it?"
    },
    "u2-t1": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 2: R Programming Basics | Topic 1: R Overview & Setup",
        hook: "Meet R: The polyglot who speaks math and business perfectly.",
        position: "1st Topic of Unit 2",
        prerequisites: "General overview of Data Analytics.",
        outcomes: ["Install R and RStudio", "Navigate the RStudio IDE", "Configure the working environment"],
        subTopicsHierarchy: [
            {
                title: "The R Ecosystem",
                subSubTopics: ["R vs. RStudio", "CRAN Repository & Versions", "Open Source Philosophy"]
            },
            {
                title: "RStudio Anatomy",
                subSubTopics: ["Console & Script Editor", "Environment & History Pane", "Files, Plots & Help Panel"]
            },
            {
                title: "Environment Management",
                subSubTopics: ["Setting Working Directories", "Project Management in RStudio", "Installing & Loading Packages"]
            }
        ],
        syllabusMapping: "Syllabus Section 2.1: Tool Configuration",
        background: "R was created by Ross Ihaka and Robert Gentleman in 1993. It is an implementation of the S programming language and has since become the gold standard for statistical computing.",
        motivation: "Why R? Because unlike Excel, R can handle millions of rows without crashing and can reproduce your analysis with a single click of a button.",
        problemStatement: "Without a dedicated environment like RStudio, writing R code is like driving a car without a dashboard—you have no idea where your files are or what your variables contain.",
        coreConcept: "R is the language engine; RStudio is the user-friendly interface (IDE) that makes writing R code easier.",
        terminology: "Console, Script, Environment, Global Environment, CRAN",
        technicalFoundations: "Logic: Input -> Interpeter (R) -> Global Environment (Memory) -> Output (Console/Plots).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Check your R version and platform details
version_info <- R.version
print(version_info$version.string)
print(version_info$platform)

# Basic arithmetic to check the engine
2 + 2

# Listing files in your environment
getwd()`,
        rOutput: `[1] "R version 4.3.3 (2024-02-29 ucrt)"
[1] "x86_64-w64-mingw32"
[1] 4
[1] "D:/Work Load/2025-26 Even Semester/Data Analytics Using R/website"`,
        rInterpretation: "<strong>Verifying Your R Installation:</strong><br><br>🔧 <strong>Version String:</strong> 'R version 4.3.3' confirms you're running a recent, stable release. The date (2024-02-29) shows when this version was compiled. The 'ucrt' indicates Universal C Runtime - a Windows-specific optimization.<br><br>💻 <strong>Platform Architecture:</strong> 'x86_64-w64-mingw32' breaks down as:<br>• <strong>x86_64:</strong> 64-bit processor (can handle large datasets)<br>• <strong>w64:</strong> Windows 64-bit<br>• <strong>mingw32:</strong> Minimalist GNU for Windows (the compiler toolchain)<br><br>➕ <strong>Arithmetic Test (2+2=4):</strong> This simple calculation confirms the R engine is functioning. If this fails, your installation is corrupted!<br><br>📁 <strong>Working Directory:</strong> The path shows where R will look for files and save outputs by default. Think of it as R's 'home folder'. You can change this with <code>setwd()</code>.<br><br>💡 <strong>Why This Matters:</strong><br>• <strong>Reproducibility:</strong> Sharing your R version ensures others can replicate your analysis<br>• <strong>Compatibility:</strong> Some packages require specific R versions<br>• <strong>Debugging:</strong> Error messages often ask 'What version are you using?'",
        illustration: "Installer -> R Engine -> RStudio Shell -> Your First 'Hello World' Script.",
        caseProblem: "A research student is struggling to keep track of 50 different versions of their Excel analysis.",
        caseSolution: "Standardized the analysis using R scripts and RStudio projects.",
        caseOutcome: "Reduced analysis time by 70% and ensured 'Reproduction' (anyone else can run the same code and get the same result).",
        applications: ["Academic Research", "Business Reporting Automation", "Reproducible Science", "Quick Prototyping"],
        challenges: "The initial learning curve for command-line syntax can be intimidating for mouse-click users.",
        research: "Optimization of the R engine for multicore processing (e.g., using the 'future' package).",
        toolMapping: "RStudio IDE, R-Gui, VS Code with R extension.",
        experientialActivity: "Download R and RStudio. Try to change the theme to 'Cobalt' or 'Dracula' in Global Options. Why does a dark theme matter for coders?",
        projectIPO: {
            input: "R and RStudio installers.",
            process: "Following the installation wizard and verifying the version.",
            output: "A working R console ready for analytics."
        },
        quizQuestions: [
            "What does CRAN stand for?",
            "What is the difference between R and RStudio?",
            "Name the 4 main panels in RStudio.",
            "How do you check your current working directory?",
            "Why is 'Open Source' important for R's success?"
        ],
        examQuestions5M: [
            "Discuss the features of RStudio that make it a powerful IDE for Data Scientists.",
            "Explain the steps involved in setting up the R environment on a Windows system."
        ],
        examQuestions10M: [
            "Provide a detailed overview of the history and evolution of R and discuss its advantages and disadvantages compared to other programming languages like Python."
        ],
        nextTopic: "Variables & Data Types",
        nextLinkage: "Now that our tool is ready, let's learn how to store information using R's basic building blocks.",
        nextReading: "Variables and Assignment Operators."
    },
    "u2-t2": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 2: R Programming Basics | Topic 2: Variables & Data Types",
        hook: "In R, everything is an 'Object'. Even your cat (if you have data about it)!",
        position: "2nd Topic of Unit 2",
        prerequisites: "R setup complete.",
        outcomes: ["Use the assignment operator correctly", "Identify Numeric, Character, Logical, and Factor types", "Check and convert data types"],
        subTopicsHierarchy: [
            {
                title: "Assignment Mechanics",
                subSubTopics: ["The Arrow Operator (<-)", "Global vs. Local Environment", "Naming Conventions/Rules"]
            },
            {
                title: "The Atomic Data Types",
                subSubTopics: ["Numeric (Doubles/Integers)", "Character (Strings)", "Logical (TRUE/FALSE)"]
            },
            {
                title: "Categorical Intelligence",
                subSubTopics: ["What are Factors?", "Levels & Labels", "Memory Benefits of Factors"]
            },
            {
                title: "Type Manipulation",
                subSubTopics: ["Checking types with class()", "Implicit vs. Explicit Coercion", "Sanitizing Dirty Data"]
            }
        ],
        syllabusMapping: "Syllabus Section 2.2: Basic Data Structures",
        background: "R's data types are designed to mimic mathematical objects. Logical types for boolean algebra, Numeric for arithmetic, and Factors for categorical statistics.",
        motivation: "If you try to add 'Apple' and 5, R will yell at you. Knowing data types prevents these 'Type Mismatch' errors.",
        problemStatement: "Storing IDs (like 1001) as 'Numbers' can cause problems if you accidentally calculate their average. Some numbers should be treated as Labels.",
        coreConcept: "Variables are named containers for data. Data types tell R how much memory to use and what operations are allowed.",
        terminology: "Coercion, Assignment Operator, Boolean, Literal, Metadata",
        technicalFoundations: "Memory management: Integers vs. Doubles (Floating point).",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Step 1: Assignment
age <- 20
name <- 'Alex'
is_student <- TRUE

# Step 2: Check types
print(class(age))
print(class(name))
print(class(is_student))

# Step 3: Coercion (Forced Change)
age_as_text <- as.character(age)
print(paste('Age is now:', age_as_text))`,
        rOutput: `[1] "numeric"
[1] "character"
[1] "logical"
[1] "Age is now: 20"`,
        rInterpretation: "<strong>Understanding R's Type System:</strong><br><br>📊 <strong>Numeric Type (age = 20):</strong> R automatically recognizes whole numbers as 'numeric' (technically 'double' - a floating-point number). You can perform math: <code>age + 5</code>, <code>age * 2</code>, etc. This uses 8 bytes of memory.<br><br>🔤 <strong>Character Type (name = 'Alex'):</strong> Text data is called 'character' in R. Notice the quotes in the output - they indicate it's a string. You CANNOT do <code>'Alex' + 5</code> - R will throw an error!<br><br>✅ <strong>Logical Type (is_student = TRUE):</strong> Boolean values are either TRUE or FALSE (must be uppercase!). These are used in conditional statements: <code>if(is_student) { give_discount() }</code>. Internally, TRUE = 1 and FALSE = 0.<br><br>🔄 <strong>Type Coercion (as.character):</strong> We forcefully converted the number 20 into the text '20'. Now it's a character! Notice in the output: 'Age is now: 20' - the 20 is surrounded by quotes because it's text, not a number anymore. If you try <code>age_as_text + 5</code>, R will error because you can't add text!<br><br>💡 <strong>Real-World Example:</strong><br>• <strong>Student ID '2024001':</strong> Should be character (you don't calculate averages of IDs!)<br>• <strong>Age '25':</strong> Should be numeric (you calculate average age)<br>• <strong>Passed Exam:</strong> Should be logical TRUE/FALSE<br><br>⚠️ <strong>Common Mistake:</strong> Reading CSV files often imports numbers as characters. Always check with <code>class()</code> and convert with <code>as.numeric()</code> if needed!",
        illustration: "Box Label (Variable Name) -> Content (Value) -> Shape of Content (Data Type).",
        caseProblem: "A survey result shows '1', '0' for Yes/No, but R treats them as numbers.",
        caseSolution: "Converted the numeric column to 'Factor' with labels 'Yes' and 'No'.",
        caseOutcome: "Statistical plots now correctly showed category names instead of meaningless 0s and 1s.",
        applications: ["User Registration Systems", "Database Management", "Survey Processing", "Financial Calculation"],
        challenges: "Implicit coercion can lead to subtle bugs (e.g., adding a string to a vector of numbers turns everything into strings).",
        research: "Development of 'Strict Typing' packages for R to improve software reliability.",
        toolMapping: "class(), str(), as.numeric(), as.factor() functions.",
        experientialActivity: "Try to assign your name to a variable called '5score'. Does it work? Why does R hate variables starting with numbers?",
        projectIPO: {
            input: "Personal profile data (Name, Age, Height).",
            process: "Assigning each to a variable and checking their classes.",
            output: "A summarized profile printed in the console."
        },
        quizQuestions: [
            "What is the symbol for the assignment operator in R?",
            "How does a 'Logical' data type differ from a 'Character'?",
            "What is the result of 10 > 5 in R?",
            "Why are 'Factors' important for categorical data?",
            "What happens if you use '=' instead of '<-'?"
        ],
        examQuestions5M: [
            "Explain the basic data types supported by R with examples.",
            "What is Coercion in R? Distinguish between implicit and explicit coercion."
        ],
        examQuestions10M: [
            "Discuss the naming conventions for variables in R and provide a comprehensive explanation of how R manages different data types in memory."
        ],
        nextTopic: "Control Structures",
        nextLinkage: "Data types are what we HAVE; Control structures are what we DO with them.",
        nextReading: "If-Else and For-Loops."
    },
    "u2-t3": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 2: R Programming Basics | Topic 3: Control Structures",
        hook: "The 'Brain' of your code: Making decisions and repeating tasks effortlessly.",
        position: "3rd Topic of Unit 2",
        prerequisites: "Variables & Data Types.",
        outcomes: ["Implement If-Else logic", "Write For and While loops", "Apply Vectorized functions as alternatives to loops"],
        subTopicsHierarchy: [
            {
                title: "Decision Making Flow",
                subSubTopics: ["Single Conditions (If)", "Mutual Exclusivity (Else)", "Complex Chains (Else If)"]
            },
            {
                title: "Iterative Automation",
                subSubTopics: ["Fixed Iterations (For Loops)", "Conditional Iterations (While Loops)", "Infinite Loops & Exit Safety"]
            },
            {
                title: "Control Overrides",
                subSubTopics: ["Breaking Loops Early (Break)", "Skipping Iterations (Next)", "Handling Errors during Loops"]
            },
            {
                title: "The R-Native Way",
                subSubTopics: ["Why Loops can be slow in R", "Introduction to Vectorization", "Concept of 'Apply' family"]
            }
        ],
        syllabusMapping: "Syllabus Section 2.3: Decision Making and Iteration",
        background: "Control structures are the core of all programming languages since the 1960s. R adds a 'Vectorized' twist which is unique to data science.",
        motivation: "Manually checking 1000 prices for a discount is boring. A loop does it in 0.01 seconds. Decision logic makes your code 'smart'.",
        problemStatement: "Without control structures, code is just a static recipe. It can't adapt to different inputs or handle large batches of work.",
        coreConcept: "Logic gates (If-Else) and Iteration (Loops) allow the program to take different paths based on the data.",
        terminology: "Branching, Iteration, Condition, Nested Loop, Vectorization",
        technicalFoundations: "Algorithm logic: Sequence -> Selection -> Iteration.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Decision Making
score <- 85
if (score >= 90) {
  print('Grade: A')
} else if (score >= 80) {
  print('Grade: B')
} else {
  print('Grade: C')
}

# Iteration (The Loop)
for (i in 1:5) {
  print(paste('Processing item number', i))
}`,
        rOutput: `[1] "Grade: B"
[1] "Processing item number 1"
[1] "Processing item number 2"
[1] "Processing item number 3"
[1] "Processing item number 4"
[1] "Processing item number 5"`,
        rInterpretation: "<strong>Decision Trees and Automation:</strong><br><br>🎯 <strong>If-Else Logic (Grade B):</strong> The code evaluates conditions <em>sequentially</em>:<br>1. Is score >= 90? NO (85 < 90)<br>2. Is score >= 80? YES! → Execute 'Grade: B' and STOP<br>3. The 'else' block is never reached<br><br>This is called <strong>short-circuit evaluation</strong> - once a condition is true, R skips the rest. If score was 95, it would print 'Grade: A' and never check the 80 threshold.<br><br>🔁 <strong>For Loop (Processing 1-5):</strong> The loop variable <code>i</code> takes each value from the sequence 1:5:<br>• <strong>Iteration 1:</strong> i=1 → 'Processing item number 1'<br>• <strong>Iteration 2:</strong> i=2 → 'Processing item number 2'<br>• ... continues until i=5<br><br>💡 <strong>Real-World Applications:</strong><br>• <strong>E-commerce:</strong> Loop through 1000 products, if(price > 100) apply_discount()<br>• <strong>Healthcare:</strong> Loop through patients, if(temperature > 100) send_alert()<br>• <strong>Education:</strong> Loop through students, if(attendance < 75%) mark_detained()<br><br>⚡ <strong>Performance Tip:</strong> For large datasets (>10,000 items), use <code>ifelse()</code> or <code>sapply()</code> instead of loops - they're 10-100x faster due to vectorization!<br><br>🔑 <strong>Key Concept:</strong> Loops automate repetition, If-Else automates decision-making. Combined, they create <em>intelligent automation</em>!",
        illustration: "Fork in the Road (If-Else) vs. Running in Circles (Loops).",
        caseProblem: "A bank needs to alert patients if their balance drops below $100.",
        caseSolution: "A simple 'For Loop' and 'If' statement to scan all 50,000 accounts.",
        caseOutcome: "Alerts are now sent automatically every morning at 9 AM.",
        applications: ["Automated Email Alerts", "Tax Calculations", "Simulating Game Scenarios", "Batch Data Analysis"],
        challenges: "Loops in R can be slow for massive data; experts use 'Vectorization' or the 'apply' family instead.",
        research: "Parallelizing loops to run on multiple CPU cores simultaneously for Big Data.",
        toolMapping: "if, else, for, while, switch, apply().",
        experientialActivity: "Write down the logic for deciding what to wear today based on the weather. Translate that into R code logic.",
        projectIPO: {
            input: "A list of 10 student marks.",
            process: "Looping through marks and assigning 'Pass/Fail' based on a threshold.",
            output: "A final list of students who passed."
        },
        quizQuestions: [
            "What is the difference between 'For' and 'While' loops?",
            "How do you handle multiple conditions in an 'If' statement?",
            "What is the purpose of 'Else'?",
            "Why is Vectorization preferred over loops in R?",
            "What happens if a loop condition is always TRUE?"
        ],
        examQuestions5M: [
            "Explain the syntax and usage of For loops in R with an example.",
            "Compare and contrast If-Else and Switch statements."
        ],
        examQuestions10M: [
            "Explain why Vectorization is considered more 'R-native' than traditional loops and provide examples of how to replace loops with vectorized functions."
        ],
        nextTopic: "Array, Matrix, Vectors",
        nextLinkage: "Logic works on single values; but usually, data comes in GROUPS (Arrays & Vectors).",
        nextReading: "Dimensions of data structures."
    },
    "u2-t4": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 2: R Programming Basics | Topic 4: Array, Matrix, Vectors",
        hook: "Organizing your data from a simple list to a 3D superpower.",
        position: "4th Topic of Unit 2",
        prerequisites: "Variables and Control Structures.",
        outcomes: ["Create and manipulate Vectors", "Understand Matrix operations (Rows/Cols)", "Handle Multi-dimensional Arrays"],
        subTopicsHierarchy: [
            {
                title: "The 1D Vector",
                subSubTopics: ["Vector Creation (c, seq, rep)", "Vectorized Arithmetic", "Naming Vector Elements"]
            },
            {
                title: "The 2D Matrix",
                subSubTopics: ["Building a Grid (nrow, ncol)", "Row/Column Filling Logic", "RowSums and ColSums"]
            },
            {
                title: "Multi-dimensional Arrays",
                subSubTopics: ["The dim() Attribute", "Stacking Grids", "Real-world Applications (Time-series)"]
            },
            {
                title: "Extraction & Slicing",
                subSubTopics: ["Coordinate Indexing [R, C]", "Logical Filtering", "Negative Indexing (Dropping Data)"]
            }
        ],
        syllabusMapping: "Syllabus Section 2.4: Multi-dimensional Data structures",
        background: "Linear Algebra is the backbone of Data Science. Vectors and Matrices are the primary tools for representing multi-dimensional datasets.",
        motivation: "A single number is a dot. A vector is a line. A matrix is a photo (grid of pixels). This is how computers 'see' complexity.",
        problemStatement: "A list of names is easy, but how do you store a 100x100 grid of satellite temperature data? You need higher-order structures.",
        coreConcept: "Hierarchical storage: Vectors (atoms) -> Matrices (molecules) -> Arrays (substances).",
        terminology: "Dimensionality, Index, Slicing, Scalar, Dimension Attribute",
        technicalFoundations: "Coordinate systems in memory; row-major vs column-major storage.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# Vector (1D)
v <- c(1, 2, 3, 4)

# Matrix (2D: 2 Rows, 2 Columns)
m <- matrix(v, nrow=2, ncol=2)
print(m)

# Array (3D: Like 2 sheets of 2x2 grids)
a <- array(1:8, dim=c(2, 2, 2))
print(a)

# Slicing: Get Row 1 of Matrix
print(m[1, ])`,
        rOutput: `     [,1] [,2]
[1,]    1    3
[2,]    2    4
, , 1

     [,1] [,2]
[1,]    1    3
[2,]    2    5

, , 2

     [,1] [,2]
[1,]    5    7
[2,]    6    8

[1] 1 3`,
        rInterpretation: "<strong>Multi-Dimensional Data Structures:</strong><br><br>📊 <strong>Matrix Output (2x2):</strong> R fills the matrix <em>column-wise</em> by default:<br>• Column 1: [1, 2]<br>• Column 2: [3, 4]<br>Notice the [,1] and [,2] headers - these indicate column numbers. The [1,] and [2,] on the left are row numbers. Think of it as a spreadsheet with coordinates!<br><br>🎲 <strong>Array Output (2x2x2):</strong> This is like having TWO separate 2x2 matrices stacked:<br>• <strong>Layer 1 (, , 1):</strong> Contains values 1,2,3,4 arranged in a 2x2 grid<br>• <strong>Layer 2 (, , 2):</strong> Contains values 5,6,7,8 arranged in a 2x2 grid<br><br>Imagine a Rubik's cube - each face is a matrix, the whole cube is an array!<br><br>✂️ <strong>Slicing (Row 1 = [1, 3]):</strong> The notation <code>m[1, ]</code> means:<br>• <strong>1:</strong> First row<br>• <strong>, (empty):</strong> ALL columns<br>Result: We extract the entire first row, which contains 1 (from column 1) and 3 (from column 2).<br><br>💡 <strong>Real-World Examples:</strong><br>• <strong>Image Processing:</strong> A grayscale photo is a matrix (pixels arranged in rows/columns)<br>• <strong>Time Series:</strong> Stock prices over time = vector (1D)<br>• <strong>Video Data:</strong> Frames x Height x Width = 3D array<br>• <strong>Climate Data:</strong> Temperature[Latitude, Longitude, Time] = 3D array<br><br>🔑 <strong>Indexing Cheat Sheet:</strong><br>• <code>m[1, 2]</code> = Element at row 1, column 2<br>• <code>m[1, ]</code> = Entire row 1<br>• <code>m[, 2]</code> = Entire column 2<br>• <code>m[1:2, 1]</code> = Rows 1-2 from column 1",
        illustration: "A Single Bead (Scalar) -> A String of Beads (Vector) -> A Fabric of Beads (Matrix) -> A Box of Fabrics (Array).",
        caseProblem: "A weather station captures Temperature, Humidity, and Pressure every hour.",
        caseSolution: "Stored the hourly data in a 3-Dimensional Array (Time x Variable x Location).",
        caseOutcome: "Able to pull out 'all temperature recordings for Location A' in a single line of R code.",
        applications: ["Image Processing (Pixels in Matrix)", "Geospatial Analysis", "Time-series Forecasting", "Mathematical Simulations"],
        challenges: "Indices in R start at 1 (unlike Python which starts at 0). This causes confusion for beginners.",
        research: "Sparse matrices—handling huge grids where most values are zero (essential for NLP).",
        toolMapping: "c(), matrix(), array(), dim().",
        experientialActivity: "Imagine a Rubik's cube. How would you represent each small colored square as an element in an Array?",
        projectIPO: {
            input: "Sales data for 3 products across 4 months.",
            process: "Storing data in a 4x3 Matrix and calculating row sums (total sales per month).",
            output: "A summary table of monthly performance."
        },
        quizQuestions: [
            "What is the difference between a Vector and a Matrix?",
            "What does dim(x) <- c(2,3) do to a vector of length 6?",
            "How do you access the element in the 2nd row and 3rd column of a matrix?",
            "What is a 'Scalar'?",
            "Can a matrix contain both text and numbers?"
        ],
        examQuestions5M: [
            "Explain how to create and name rows/columns in an R matrix.",
            "Discuss the indexing and slicing techniques for multi-dimensional arrays in R."
        ],
        examQuestions10M: [
            "Provide a comprehensive comparison of Vectors, Matrices, and Arrays, and illustrate how R handles mathematical operations (like matrix multiplication) across these structures."
        ],
        nextTopic: "Reading External Data",
        nextLinkage: "We know how to store data in R; now let's learn how to BRING it from outside (Excel, CSV, Web).",
        nextReading: "read.csv and data.frame basics."
    }
};

window.unit2Content = unit2Content;
