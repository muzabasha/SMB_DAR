// Virtual Lab Component - NEP 2020 Experiential Learning (Enhanced)
const VirtualLab = {
  currentUnit: null,
  currentExercise: 0,
  userCode: '',

  labs: {
    unit2: {
      title: "R Programming Virtual Lab",
      description: "Master R programming through 10 progressive hands-on exercises. From basics to advanced concepts!",
      exercises: [
        {
          id: 1,
          title: "Variables & Data Types",
          difficulty: "Beginner",
          instruction: "Create variables of different types and explore R's data type system. Learn how R stores and handles different kinds of data.",
          detailedSteps: [
            "1. Create a numeric variable 'my_age' with your age",
            "2. Create a character variable 'my_name' with your name",
            "3. Create a logical variable 'is_student' set to TRUE",
            "4. Calculate your birth year (2026 - age)",
            "5. Print all variables with descriptive messages",
            "6. Use class() to check the type of each variable"
          ],
          starterCode: `# Exercise 1: Variables & Data Types
# Learn about R's fundamental data types

# Step 1: Create numeric variable
my_age <- 

# Step 2: Create character variable (use quotes!)
my_name <- 

# Step 3: Create logical variable
is_student <- 

# Step 4: Calculate birth year
birth_year <- 2026 - my_age

# Step 5: Print information
print(paste("Name:", my_name))
print(paste("Age:", my_age))
print(paste("Birth Year:", birth_year))
print(paste("Student Status:", is_student))

# Step 6: Check data types
print(paste("Type of my_age:", class(my_age)))
print(paste("Type of my_name:", class(my_name)))
print(paste("Type of is_student:", class(is_student)))
`,
          solution: `my_age <- 20
my_name <- "Alice"
is_student <- TRUE
birth_year <- 2026 - my_age

print(paste("Name:", my_name))
print(paste("Age:", my_age))
print(paste("Birth Year:", birth_year))
print(paste("Student Status:", is_student))

print(paste("Type of my_age:", class(my_age)))
print(paste("Type of my_name:", class(my_name)))
print(paste("Type of is_student:", class(is_student)))`,
          hint: "Remember: Numbers don't need quotes, text needs quotes ('...' or \"...\"), TRUE/FALSE are special logical values",
          expectedOutput: "Name: Alice\nAge: 20\nBirth Year: 2006\nStudent Status: TRUE\nType of my_age: numeric\nType of my_name: character\nType of is_student: logical",
          learningPoints: [
            "R has three basic data types: numeric, character, logical",
            "Use <- for assignment (preferred) or = (also works)",
            "class() function reveals the data type",
            "Logical values are TRUE/FALSE (all caps, no quotes)"
          ]
        },
        {
          id: 2,
          title: "Vectors & Statistical Analysis",
          difficulty: "Beginner",
          instruction: "Work with vectors to analyze student test scores. Calculate statistics and identify patterns in the data.",
          detailedSteps: [
            "1. Create a vector of 10 test scores (0-100)",
            "2. Calculate mean, median, and standard deviation",
            "3. Find minimum and maximum scores",
            "4. Count how many students scored above 80",
            "5. Calculate the percentage of students who passed (>= 60)",
            "6. Identify the position of the highest score"
          ],
          starterCode: `# Exercise 2: Vectors & Statistical Analysis
# Analyze student performance data

# Step 1: Create vector of 10 test scores
scores <- c(78, 92, 65, 88, 95, 72, 85, 90, 67, 82)

# Step 2: Calculate statistics
avg_score <- 
median_score <- 
std_dev <- 

# Step 3: Find extremes
min_score <- 
max_score <- 

# Step 4: Count high performers (>80)
high_performers <- 

# Step 5: Calculate pass rate (>=60)
passed_count <- 
pass_rate <- (passed_count / length(scores)) * 100

# Step 6: Find position of highest score
top_position <- 

# Print results
print(paste("Average Score:", round(avg_score, 2)))
print(paste("Median Score:", median_score))
print(paste("Standard Deviation:", round(std_dev, 2)))
print(paste("Range:", min_score, "to", max_score))
print(paste("High Performers (>80):", high_performers))
print(paste("Pass Rate:", round(pass_rate, 1), "%"))
print(paste("Top scorer at position:", top_position))
`,
          solution: `scores <- c(78, 92, 65, 88, 95, 72, 85, 90, 67, 82)

avg_score <- mean(scores)
median_score <- median(scores)
std_dev <- sd(scores)

min_score <- min(scores)
max_score <- max(scores)

high_performers <- sum(scores > 80)

passed_count <- sum(scores >= 60)
pass_rate <- (passed_count / length(scores)) * 100

top_position <- which.max(scores)

print(paste("Average Score:", round(avg_score, 2)))
print(paste("Median Score:", median_score))
print(paste("Standard Deviation:", round(std_dev, 2)))
print(paste("Range:", min_score, "to", max_score))
print(paste("High Performers (>80):", high_performers))
print(paste("Pass Rate:", round(pass_rate, 1), "%"))
print(paste("Top scorer at position:", top_position))`,
          hint: "Use mean(), median(), sd(), min(), max(), sum(), which.max() functions. For counting, use sum() with a condition like scores > 80",
          expectedOutput: "Average: 81.4\nMedian: 83.5\nStd Dev: 10.45\nRange: 65 to 95\nHigh Performers: 6\nPass Rate: 100%\nTop position: 5",
          learningPoints: [
            "Vectors are created with c() function",
            "R has built-in statistical functions",
            "Logical conditions (scores > 80) create TRUE/FALSE vectors",
            "sum() on logical vectors counts TRUE values",
            "which.max() returns the position, not the value"
          ]
        },
        {
          id: 3,
          title: "Control Flow - Grade Calculator",
          difficulty: "Intermediate",
          instruction: "Build a grade calculator using if-else statements. Convert numeric scores to letter grades with detailed feedback.",
          detailedSteps: [
            "1. Create a variable 'score' with a test score",
            "2. Use nested if-else to assign letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)",
            "3. Add plus/minus grades (e.g., A-, B+)",
            "4. Calculate GPA points (A=4.0, B=3.0, C=2.0, D=1.0, F=0.0)",
            "5. Print grade, GPA, and personalized message"
          ],
          starterCode: `# Exercise 3: Control Flow - Grade Calculator
# Convert numeric scores to letter grades

score <- 87  # Try different values!

# Determine letter grade
if (score >= 90) {
  letter_grade <- "A"
  gpa <- 4.0
  message <- "Excellent work!"
} else if (score >= 80) {
  letter_grade <- 
  gpa <- 
  message <- 
} else if (score >= 70) {
  # TODO: Complete for C grade
  
} else if (score >= 60) {
  # TODO: Complete for D grade
  
} else {
  # TODO: Complete for F grade
  
}

# Add plus/minus (bonus challenge!)
if (score %% 10 >= 7 && letter_grade != "A" && letter_grade != "F") {
  letter_grade <- paste0(letter_grade, "+")
} else if (score %% 10 <= 2 && letter_grade != "F") {
  letter_grade <- paste0(letter_grade, "-")
}

# Print results
print(paste("Score:", score))
print(paste("Grade:", letter_grade))
print(paste("GPA:", gpa))
print(paste("Feedback:", message))
`,
          solution: `score <- 87

if (score >= 90) {
  letter_grade <- "A"
  gpa <- 4.0
  message <- "Excellent work!"
} else if (score >= 80) {
  letter_grade <- "B"
  gpa <- 3.0
  message <- "Good job!"
} else if (score >= 70) {
  letter_grade <- "C"
  gpa <- 2.0
  message <- "Satisfactory"
} else if (score >= 60) {
  letter_grade <- "D"
  gpa <- 1.0
  message <- "Needs improvement"
} else {
  letter_grade <- "F"
  gpa <- 0.0
  message <- "Please see instructor"
}

if (score %% 10 >= 7 && letter_grade != "A" && letter_grade != "F") {
  letter_grade <- paste0(letter_grade, "+")
} else if (score %% 10 <= 2 && letter_grade != "F") {
  letter_grade <- paste0(letter_grade, "-")
}

print(paste("Score:", score))
print(paste("Grade:", letter_grade))
print(paste("GPA:", gpa))
print(paste("Feedback:", message))`,
          hint: "Use if-else if-else chain. %% is modulo operator (remainder). paste0() joins strings without spaces",
          expectedOutput: "Score: 87\nGrade: B+\nGPA: 3.0\nFeedback: Good job!",
          learningPoints: [
            "if-else chains evaluate conditions top to bottom",
            "First TRUE condition executes, rest are skipped",
            "%% operator gives remainder (87 %% 10 = 7)",
            "Nested conditions allow complex logic",
            "paste0() concatenates without spaces"
          ]
        },
        {
          id: 4,
          title: "Loops - Data Processing",
          difficulty: "Intermediate",
          instruction: "Use for loops to process data. Calculate running totals, apply transformations, and generate reports.",
          detailedSteps: [
            "1. Create a vector of daily sales for a week",
            "2. Use a for loop to calculate cumulative sales",
            "3. Find days with sales above average",
            "4. Calculate daily growth rate",
            "5. Generate a weekly summary report"
          ],
          starterCode: `# Exercise 4: Loops - Data Processing
# Process weekly sales data

# Daily sales (in thousands)
daily_sales <- c(45, 52, 48, 61, 58, 67, 72)
days <- c("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

# Calculate cumulative sales
cumulative <- numeric(length(daily_sales))
total <- 0

for (i in 1:length(daily_sales)) {
  total <- total + daily_sales[i]
  cumulative[i] <- total
  print(paste(days[i], "- Sales:", daily_sales[i], "K, Cumulative:", cumulative[i], "K"))
}

# Calculate average
avg_sales <- mean(daily_sales)
print(paste("\\nAverage Daily Sales:", round(avg_sales, 2), "K"))

# Find above-average days
print("\\nAbove Average Days:")
for (i in 1:length(daily_sales)) {
  if (daily_sales[i] > avg_sales) {
    print(paste(days[i], "-", daily_sales[i], "K"))
  }
}

# Calculate growth rate
print("\\nDaily Growth Rate:")
for (i in 2:length(daily_sales)) {
  growth <- ((daily_sales[i] - daily_sales[i-1]) / daily_sales[i-1]) * 100
  print(paste(days[i], ":", round(growth, 1), "%"))
}

# Weekly summary
print(paste("\\nWeekly Total:", sum(daily_sales), "K"))
print(paste("Best Day:", days[which.max(daily_sales)], "-", max(daily_sales), "K"))
print(paste("Worst Day:", days[which.min(daily_sales)], "-", min(daily_sales), "K"))
`,
          solution: `daily_sales <- c(45, 52, 48, 61, 58, 67, 72)
days <- c("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

cumulative <- numeric(length(daily_sales))
total <- 0

for (i in 1:length(daily_sales)) {
  total <- total + daily_sales[i]
  cumulative[i] <- total
  print(paste(days[i], "- Sales:", daily_sales[i], "K, Cumulative:", cumulative[i], "K"))
}

avg_sales <- mean(daily_sales)
print(paste("\\nAverage Daily Sales:", round(avg_sales, 2), "K"))

print("\\nAbove Average Days:")
for (i in 1:length(daily_sales)) {
  if (daily_sales[i] > avg_sales) {
    print(paste(days[i], "-", daily_sales[i], "K"))
  }
}

print("\\nDaily Growth Rate:")
for (i in 2:length(daily_sales)) {
  growth <- ((daily_sales[i] - daily_sales[i-1]) / daily_sales[i-1]) * 100
  print(paste(days[i], ":", round(growth, 1), "%"))
}

print(paste("\\nWeekly Total:", sum(daily_sales), "K"))
print(paste("Best Day:", days[which.max(daily_sales)], "-", max(daily_sales), "K"))
print(paste("Worst Day:", days[which.min(daily_sales)], "-", min(daily_sales), "K"))`,
          hint: "for (i in 1:n) loops from 1 to n. Use i as index to access vector elements. \\n creates new line in output",
          expectedOutput: "Cumulative sales, growth rates, and weekly summary",
          learningPoints: [
            "for loops iterate over sequences",
            "1:n creates sequence from 1 to n",
            "Use loop variable as index: vector[i]",
            "numeric(n) creates empty numeric vector of length n",
            "Loops are useful for sequential processing"
          ]
        },
        {
          id: 5,
          title: "Functions - Temperature Converter",
          difficulty: "Intermediate",
          instruction: "Create reusable functions for temperature conversion. Learn function parameters, return values, and documentation.",
          detailedSteps: [
            "1. Create celsius_to_fahrenheit() function",
            "2. Create fahrenheit_to_celsius() function",
            "3. Create celsius_to_kelvin() function",
            "4. Add input validation (check for absolute zero)",
            "5. Test with various temperatures"
          ],
          starterCode: `# Exercise 5: Functions - Temperature Converter
# Build a temperature conversion toolkit

# Function 1: Celsius to Fahrenheit
celsius_to_fahrenheit <- function(celsius) {
  # Formula: F = (C * 9/5) + 32
  fahrenheit <- (celsius * 9/5) + 32
  return(fahrenheit)
}

# Function 2: Fahrenheit to Celsius
fahrenheit_to_celsius <- function(fahrenheit) {
  # TODO: Implement this function
  # Formula: C = (F - 32) * 5/9
  
}

# Function 3: Celsius to Kelvin
celsius_to_kelvin <- function(celsius) {
  # TODO: Implement this function
  # Formula: K = C + 273.15
  
}

# Function 4: Universal converter with validation
convert_temperature <- function(value, from_unit, to_unit) {
  # Validate input
  if (from_unit == "C" && value < -273.15) {
    return("Error: Below absolute zero!")
  }
  
  # Convert to Celsius first
  if (from_unit == "F") {
    celsius <- fahrenheit_to_celsius(value)
  } else if (from_unit == "K") {
    celsius <- value - 273.15
  } else {
    celsius <- value
  }
  
  # Convert from Celsius to target
  if (to_unit == "F") {
    result <- celsius_to_fahrenheit(celsius)
  } else if (to_unit == "K") {
    result <- celsius_to_kelvin(celsius)
  } else {
    result <- celsius
  }
  
  return(round(result, 2))
}

# Test the functions
print(paste("0°C =", celsius_to_fahrenheit(0), "°F"))
print(paste("32°F =", fahrenheit_to_celsius(32), "°C"))
print(paste("0°C =", celsius_to_kelvin(0), "K"))
print(paste("100°F to K:", convert_temperature(100, "F", "K")))
`,
          solution: `celsius_to_fahrenheit <- function(celsius) {
  fahrenheit <- (celsius * 9/5) + 32
  return(fahrenheit)
}

fahrenheit_to_celsius <- function(fahrenheit) {
  celsius <- (fahrenheit - 32) * 5/9
  return(celsius)
}

celsius_to_kelvin <- function(celsius) {
  kelvin <- celsius + 273.15
  return(kelvin)
}

convert_temperature <- function(value, from_unit, to_unit) {
  if (from_unit == "C" && value < -273.15) {
    return("Error: Below absolute zero!")
  }
  
  if (from_unit == "F") {
    celsius <- fahrenheit_to_celsius(value)
  } else if (from_unit == "K") {
    celsius <- value - 273.15
  } else {
    celsius <- value
  }
  
  if (to_unit == "F") {
    result <- celsius_to_fahrenheit(celsius)
  } else if (to_unit == "K") {
    result <- celsius_to_kelvin(celsius)
  } else {
    result <- celsius
  }
  
  return(round(result, 2))
}

print(paste("0°C =", celsius_to_fahrenheit(0), "°F"))
print(paste("32°F =", fahrenheit_to_celsius(32), "°C"))
print(paste("0°C =", celsius_to_kelvin(0), "K"))
print(paste("100°F to K:", convert_temperature(100, "F", "K")))`,
          hint: "Functions use function(parameters) { body }. return() sends value back. Call functions by name: function_name(arguments)",
          expectedOutput: "0°C = 32°F\n32°F = 0°C\n0°C = 273.15K\n100°F to K: 310.93",
          learningPoints: [
            "Functions encapsulate reusable code",
            "Parameters are inputs, return values are outputs",
            "Functions can call other functions",
            "Input validation prevents errors",
            "DRY principle: Don't Repeat Yourself"
          ]
        },
        {
          id: 6,
          title: "Student Grade Management System",
          difficulty: "Advanced",
          instruction: "Build a complete student grade management system that handles multiple subjects, calculates weighted GPAs, identifies at-risk students, generates report cards, and provides class-wide statistical analysis. Use data frames, custom functions, and conditional logic.",
          detailedSteps: [
            "1. Create a data frame with 15+ students, 5 subjects, and attendance records",
            "2. Write a function to calculate weighted GPA (labs=20%, midterm=30%, final=50%)",
            "3. Classify students into grade categories (A+, A, B+, B, C, D, F)",
            "4. Identify at-risk students (GPA < 2.0 OR attendance < 75%)",
            "5. Generate per-subject statistics (mean, median, pass rate, top scorer)",
            "6. Create a formatted report card for each student",
            "7. Rank students and identify top 3 and bottom 3 performers"
          ],
          starterCode: `# Exercise 6: Student Grade Management System
# Build a comprehensive grade tracking and analysis system

# --- Step 1: Create student database ---
set.seed(42)
n_students <- 15
students <- data.frame(
  id = paste0("STU", sprintf("%03d", 1:n_students)),
  name = c("Aarav", "Priya", "Rohan", "Sneha", "Vikram",
           "Ananya", "Karthik", "Divya", "Arjun", "Meera",
           "Rahul", "Pooja", "Siddharth", "Kavya", "Nikhil"),
  math_lab = sample(40:100, n_students, replace=TRUE),
  math_mid = sample(35:100, n_students, replace=TRUE),
  math_final = sample(30:100, n_students, replace=TRUE),
  sci_lab = sample(45:100, n_students, replace=TRUE),
  sci_mid = sample(40:100, n_students, replace=TRUE),
  sci_final = sample(35:100, n_students, replace=TRUE),
  eng_lab = sample(50:100, n_students, replace=TRUE),
  eng_mid = sample(40:100, n_students, replace=TRUE),
  eng_final = sample(35:100, n_students, replace=TRUE),
  attendance = sample(60:100, n_students, replace=TRUE),
  stringsAsFactors = FALSE
)

# --- Step 2: Weighted GPA calculator ---
calc_weighted_score <- function(lab, mid, final) {
  return(round(lab * 0.20 + mid * 0.30 + final * 0.50, 2))
}

students$math_score <- calc_weighted_score(students$math_lab, students$math_mid, students$math_final)
students$sci_score <- calc_weighted_score(students$sci_lab, students$sci_mid, students$sci_final)
students$eng_score <- calc_weighted_score(students$eng_lab, students$eng_mid, students$eng_final)
students$overall_avg <- round((students$math_score + students$sci_score + students$eng_score) / 3, 2)

# --- Step 3: Grade classification ---
assign_grade <- function(score) {
  ifelse(score >= 90, "A+",
    ifelse(score >= 80, "A",
      ifelse(score >= 70, "B+",
        ifelse(score >= 60, "B",
          ifelse(score >= 50, "C",
            ifelse(score >= 40, "D", "F"))))))
}

students$math_grade <- assign_grade(students$math_score)
students$sci_grade <- assign_grade(students$sci_score)
students$eng_grade <- assign_grade(students$eng_score)
students$overall_grade <- assign_grade(students$overall_avg)

# --- Step 4: Identify at-risk students ---
students$at_risk <- students$overall_avg < 50 | students$attendance < 75
at_risk_list <- students[students$at_risk == TRUE, c("id", "name", "overall_avg", "attendance")]
cat("=== AT-RISK STUDENTS ===\\n")
if(nrow(at_risk_list) > 0) {
  for(i in 1:nrow(at_risk_list)) {
    cat(sprintf("  %s (%s): Avg=%.1f%%, Attendance=%d%%\\n",
        at_risk_list$name[i], at_risk_list$id[i],
        at_risk_list$overall_avg[i], at_risk_list$attendance[i]))
  }
} else { cat("  No at-risk students\\n") }

# --- Step 5: Subject-wise statistics ---
cat("\\n=== SUBJECT STATISTICS ===\\n")
subjects <- list(Math=students$math_score, Science=students$sci_score, English=students$eng_score)
for(subj in names(subjects)) {
  scores <- subjects[[subj]]
  cat(sprintf("\\n%s: Mean=%.1f, Median=%.1f, Pass Rate=%.0f%%, Top=%s (%.1f)\\n",
      subj, mean(scores), median(scores),
      sum(scores >= 40)/length(scores)*100,
      students$name[which.max(scores)], max(scores)))
}

# --- Step 6: Rank students ---
students$rank <- rank(-students$overall_avg, ties.method="first")
ranked <- students[order(students$rank), c("rank","name","overall_avg","overall_grade")]
cat("\\n=== TOP 3 STUDENTS ===\\n")
for(i in 1:3) cat(sprintf("  #%d: %s - %.1f%% (%s)\\n", ranked$rank[i], ranked$name[i], ranked$overall_avg[i], ranked$overall_grade[i]))
cat("\\n=== BOTTOM 3 STUDENTS ===\\n")
bottom <- tail(ranked, 3)
for(i in 1:nrow(bottom)) cat(sprintf("  #%d: %s - %.1f%% (%s)\\n", bottom$rank[i], bottom$name[i], bottom$overall_avg[i], bottom$overall_grade[i]))

cat("\\n=== CLASS SUMMARY ===\\n")
cat(sprintf("Total Students: %d\\n", n_students))
cat(sprintf("Class Average: %.1f%%\\n", mean(students$overall_avg)))
cat(sprintf("At-Risk Count: %d\\n", sum(students$at_risk)))
cat(sprintf("Grade Distribution: A+=%d, A=%d, B+=%d, B=%d, C=%d, D=%d, F=%d\\n",
    sum(students$overall_grade=="A+"), sum(students$overall_grade=="A"),
    sum(students$overall_grade=="B+"), sum(students$overall_grade=="B"),
    sum(students$overall_grade=="C"), sum(students$overall_grade=="D"),
    sum(students$overall_grade=="F")))`,
          solution: `# Complete solution - the starter code IS the full solution. Run it to see results.`,
          hint: "Use data.frame() for structured data. ifelse() handles vectorized conditions. sprintf() formats output strings. rank() with negative values gives descending order.",
          expectedOutput: "AT-RISK STUDENTS list, SUBJECT STATISTICS with mean/median/pass rates, TOP 3 and BOTTOM 3 rankings, CLASS SUMMARY with grade distribution",
          learningPoints: [
            "Data frames store structured multi-column data",
            "Custom functions enable code reuse across subjects",
            "Vectorized ifelse() efficiently classifies entire columns",
            "Logical indexing filters rows by complex conditions",
            "sprintf() creates formatted professional output"
          ]
        },
        {
          id: 7,
          title: "E-Commerce Data Pipeline & Analytics",
          difficulty: "Advanced",
          instruction: "Build a data processing pipeline for an e-commerce platform. Clean messy transaction data, handle missing values, detect anomalies, calculate customer lifetime value, perform RFM segmentation, and generate a business intelligence dashboard summary.",
          detailedSteps: [
            "1. Generate messy e-commerce data with missing values and outliers",
            "2. Clean data: handle NAs, fix negative prices, remove duplicates",
            "3. Calculate per-customer metrics (total spend, order count, avg order)",
            "4. Perform RFM (Recency, Frequency, Monetary) segmentation",
            "5. Detect anomalous transactions (Z-score > 2)",
            "6. Calculate revenue by category and identify top products",
            "7. Generate executive summary with KPIs"
          ],
          starterCode: `# Exercise 7: E-Commerce Data Pipeline & Analytics
# Process raw transaction data into business insights

# --- Step 1: Generate messy e-commerce data ---
set.seed(123)
n_orders <- 200
raw_data <- data.frame(
  order_id = paste0("ORD", sprintf("%04d", 1:n_orders)),
  customer_id = paste0("CUST", sprintf("%03d", sample(1:50, n_orders, replace=TRUE))),
  product = sample(c("Laptop","Phone","Tablet","Headphones","Charger","Case","Cable","Mouse","Keyboard","Monitor"),
                   n_orders, replace=TRUE),
  category = sample(c("Electronics","Accessories","Peripherals"), n_orders, replace=TRUE),
  quantity = sample(1:5, n_orders, replace=TRUE),
  unit_price = round(runif(n_orders, 5, 1500), 2),
  date = as.Date("2025-01-01") + sample(0:364, n_orders, replace=TRUE),
  stringsAsFactors = FALSE
)

# Inject messiness: NAs, negatives, duplicates
raw_data$unit_price[sample(1:n_orders, 10)] <- NA
raw_data$quantity[sample(1:n_orders, 5)] <- -1
raw_data <- rbind(raw_data, raw_data[sample(1:n_orders, 8), ])

cat(sprintf("Raw data: %d rows, %d NAs in price, %d negative quantities\\n",
    nrow(raw_data), sum(is.na(raw_data$unit_price)), sum(raw_data$quantity < 0, na.rm=TRUE)))

# --- Step 2: Clean the data ---
clean_data <- raw_data[!duplicated(raw_data$order_id), ]
clean_data <- clean_data[!is.na(clean_data$unit_price), ]
clean_data$quantity[clean_data$quantity < 0] <- 1
clean_data$total <- clean_data$quantity * clean_data$unit_price

cat(sprintf("Clean data: %d rows (removed %d dirty rows)\\n",
    nrow(clean_data), nrow(raw_data) - nrow(clean_data)))

# --- Step 3: Customer metrics ---
customer_stats <- aggregate(cbind(total, quantity) ~ customer_id, data = clean_data, FUN = sum)
order_counts <- as.data.frame(table(clean_data$customer_id))
names(order_counts) <- c("customer_id", "order_count")
customer_stats <- merge(customer_stats, order_counts, by="customer_id")
customer_stats$avg_order <- round(customer_stats$total / customer_stats$order_count, 2)
customer_stats <- customer_stats[order(-customer_stats$total), ]

cat("\\n=== TOP 5 CUSTOMERS BY REVENUE ===\\n")
for(i in 1:min(5, nrow(customer_stats))) {
  cat(sprintf("  %s: $%.2f (%d orders, avg $%.2f)\\n",
      customer_stats$customer_id[i], customer_stats$total[i],
      customer_stats$order_count[i], customer_stats$avg_order[i]))
}

# --- Step 4: RFM Segmentation ---
ref_date <- as.Date("2025-12-31")
rfm <- data.frame(
  customer_id = customer_stats$customer_id,
  recency = as.numeric(ref_date - tapply(clean_data$date, clean_data$customer_id, max)[customer_stats$customer_id]),
  frequency = customer_stats$order_count,
  monetary = customer_stats$total
)
rfm$r_score <- ifelse(rfm$recency <= 90, 3, ifelse(rfm$recency <= 180, 2, 1))
rfm$f_score <- ifelse(rfm$frequency >= 5, 3, ifelse(rfm$frequency >= 3, 2, 1))
rfm$m_score <- ifelse(rfm$monetary >= quantile(rfm$monetary, 0.75), 3,
               ifelse(rfm$monetary >= quantile(rfm$monetary, 0.25), 2, 1))
rfm$segment <- ifelse(rfm$r_score + rfm$f_score + rfm$m_score >= 8, "Champion",
               ifelse(rfm$r_score + rfm$f_score + rfm$m_score >= 5, "Loyal", "At-Risk"))

cat("\\n=== RFM SEGMENTS ===\\n")
seg_table <- table(rfm$segment)
for(s in names(seg_table)) cat(sprintf("  %s: %d customers\\n", s, seg_table[s]))

# --- Step 5: Anomaly detection ---
z_scores <- abs((clean_data$total - mean(clean_data$total)) / sd(clean_data$total))
anomalies <- clean_data[z_scores > 2, ]
cat(sprintf("\\n=== ANOMALIES DETECTED: %d transactions ===\\n", nrow(anomalies)))

# --- Step 6: Revenue by category ---
cat("\\n=== REVENUE BY CATEGORY ===\\n")
cat_rev <- aggregate(total ~ category, data=clean_data, FUN=sum)
cat_rev <- cat_rev[order(-cat_rev$total), ]
for(i in 1:nrow(cat_rev)) cat(sprintf("  %s: $%.2f\\n", cat_rev$category[i], cat_rev$total[i]))

# --- Step 7: Executive Summary ---
cat("\\n========== EXECUTIVE SUMMARY ==========\\n")
cat(sprintf("Total Revenue: $%.2f\\n", sum(clean_data$total)))
cat(sprintf("Total Orders: %d\\n", nrow(clean_data)))
cat(sprintf("Unique Customers: %d\\n", length(unique(clean_data$customer_id))))
cat(sprintf("Avg Order Value: $%.2f\\n", mean(clean_data$total)))
cat(sprintf("Data Quality: %.1f%% clean rate\\n", nrow(clean_data)/nrow(raw_data)*100))`,
          solution: `# Complete solution - the starter code IS the full pipeline. Run it to see all outputs.`,
          hint: "Use aggregate() for group-by operations. is.na() detects missing values. duplicated() finds duplicate rows. Z-score = (value - mean) / sd identifies outliers.",
          expectedOutput: "Data cleaning summary, TOP 5 CUSTOMERS, RFM SEGMENTS, ANOMALIES, REVENUE BY CATEGORY, EXECUTIVE SUMMARY with KPIs",
          learningPoints: [
            "Real-world data requires cleaning before analysis",
            "aggregate() performs SQL-like GROUP BY operations in R",
            "RFM segmentation is a key marketing analytics technique",
            "Z-scores detect statistical outliers effectively",
            "Data pipelines transform raw data into actionable insights"
          ]
        },
        {
          id: 8,
          title: "Hospital Patient Tracker & Health Analytics",
          difficulty: "Advanced",
          instruction: "Design a hospital patient management system that tracks admissions, diagnoses, vitals, treatment outcomes, and generates health analytics. Implement triage classification, length-of-stay prediction, and department-wise performance metrics.",
          detailedSteps: [
            "1. Create patient records with demographics, vitals, and diagnosis",
            "2. Implement triage classification based on vital signs",
            "3. Calculate length of stay and treatment costs",
            "4. Analyze outcomes by department and diagnosis",
            "5. Identify readmission patterns and high-risk patients",
            "6. Generate department performance dashboard",
            "7. Create patient discharge summary reports"
          ],
          starterCode: `# Exercise 8: Hospital Patient Tracker & Health Analytics
# Comprehensive patient management and health analytics system

# --- Step 1: Patient database ---
set.seed(99)
n_patients <- 30
patients <- data.frame(
  patient_id = paste0("PAT", sprintf("%04d", 1:n_patients)),
  name = paste0("Patient_", 1:n_patients),
  age = sample(18:85, n_patients, replace=TRUE),
  gender = sample(c("M","F"), n_patients, replace=TRUE),
  department = sample(c("Cardiology","Neurology","Orthopedics","General","Pulmonology"),
                      n_patients, replace=TRUE),
  diagnosis = sample(c("Hypertension","Fracture","Pneumonia","Migraine","Diabetes",
                       "Asthma","Cardiac Arrest","Stroke","Arthritis","Infection"),
                     n_patients, replace=TRUE),
  bp_systolic = sample(90:180, n_patients, replace=TRUE),
  bp_diastolic = sample(60:120, n_patients, replace=TRUE),
  heart_rate = sample(55:130, n_patients, replace=TRUE),
  temperature = round(runif(n_patients, 97.0, 104.0), 1),
  admit_date = as.Date("2025-01-01") + sample(0:300, n_patients, replace=TRUE),
  stay_days = sample(1:21, n_patients, replace=TRUE),
  daily_cost = sample(c(2000,3500,5000,7500,10000), n_patients, replace=TRUE),
  outcome = sample(c("Recovered","Improved","Referred","Readmitted"), n_patients,
                   replace=TRUE, prob=c(0.5,0.25,0.15,0.10)),
  stringsAsFactors = FALSE
)

# --- Step 2: Triage classification ---
triage_classify <- function(bp_sys, hr, temp) {
  score <- 0
  if(bp_sys > 160 | bp_sys < 90) score <- score + 3
  else if(bp_sys > 140 | bp_sys < 100) score <- score + 1
  if(hr > 110 | hr < 60) score <- score + 3
  else if(hr > 100 | hr < 65) score <- score + 1
  if(temp > 102) score <- score + 3
  else if(temp > 100) score <- score + 1
  if(score >= 6) return("CRITICAL")
  else if(score >= 3) return("URGENT")
  else return("STABLE")
}

patients$triage <- mapply(triage_classify, patients$bp_systolic,
                          patients$heart_rate, patients$temperature)

cat("=== TRIAGE DISTRIBUTION ===\\n")
triage_tbl <- table(patients$triage)
for(t in names(triage_tbl)) cat(sprintf("  %s: %d patients\\n", t, triage_tbl[t]))

# --- Step 3: Cost analysis ---
patients$total_cost <- patients$stay_days * patients$daily_cost
cat("\\n=== COST ANALYSIS ===\\n")
cat(sprintf("Total Hospital Revenue: $%s\\n", format(sum(patients$total_cost), big.mark=",")))
cat(sprintf("Average Cost per Patient: $%s\\n", format(round(mean(patients$total_cost)), big.mark=",")))
cat(sprintf("Most Expensive Case: %s ($%s, %d days)\\n",
    patients$patient_id[which.max(patients$total_cost)],
    format(max(patients$total_cost), big.mark=","),
    patients$stay_days[which.max(patients$total_cost)]))

# --- Step 4: Department performance ---
cat("\\n=== DEPARTMENT PERFORMANCE ===\\n")
depts <- unique(patients$department)
for(d in sort(depts)) {
  dept_data <- patients[patients$department == d, ]
  recovery_rate <- sum(dept_data$outcome %in% c("Recovered","Improved")) / nrow(dept_data) * 100
  cat(sprintf("  %s: %d patients, Avg Stay=%.1f days, Recovery=%.0f%%, Avg Cost=$%s\\n",
      d, nrow(dept_data), mean(dept_data$stay_days), recovery_rate,
      format(round(mean(dept_data$total_cost)), big.mark=",")))
}

# --- Step 5: Readmission & high-risk analysis ---
readmitted <- patients[patients$outcome == "Readmitted", ]
cat(sprintf("\\n=== READMISSION ANALYSIS ===\\n"))
cat(sprintf("Readmission Rate: %.1f%% (%d of %d)\\n",
    nrow(readmitted)/n_patients*100, nrow(readmitted), n_patients))
high_risk <- patients[patients$triage == "CRITICAL" & patients$age > 60, ]
cat(sprintf("High-Risk Elderly (Critical + Age>60): %d patients\\n", nrow(high_risk)))

# --- Step 6: Diagnosis statistics ---
cat("\\n=== TOP DIAGNOSES ===\\n")
diag_tbl <- sort(table(patients$diagnosis), decreasing=TRUE)
for(i in 1:min(5, length(diag_tbl))) {
  d <- names(diag_tbl)[i]
  d_data <- patients[patients$diagnosis == d, ]
  cat(sprintf("  %s: %d cases, Avg Stay=%.1f days, Avg Cost=$%s\\n",
      d, diag_tbl[i], mean(d_data$stay_days),
      format(round(mean(d_data$total_cost)), big.mark=",")))
}

# --- Step 7: Summary dashboard ---
cat("\\n========== HOSPITAL DASHBOARD ==========\\n")
cat(sprintf("Total Patients: %d\\n", n_patients))
cat(sprintf("Overall Recovery Rate: %.1f%%\\n",
    sum(patients$outcome %in% c("Recovered","Improved"))/n_patients*100))
cat(sprintf("Critical Cases: %d (%.1f%%)\\n",
    sum(patients$triage=="CRITICAL"), sum(patients$triage=="CRITICAL")/n_patients*100))
cat(sprintf("Avg Length of Stay: %.1f days\\n", mean(patients$stay_days)))
cat(sprintf("Total Revenue: $%s\\n", format(sum(patients$total_cost), big.mark=",")))`,
          solution: `# Complete solution - the starter code IS the full system. Run to see all analytics.`,
          hint: "Use mapply() to apply functions across multiple columns. table() counts frequencies. Logical indexing with & combines conditions. format(big.mark=',') adds thousand separators.",
          expectedOutput: "TRIAGE DISTRIBUTION, COST ANALYSIS, DEPARTMENT PERFORMANCE metrics, READMISSION ANALYSIS, TOP DIAGNOSES, HOSPITAL DASHBOARD summary",
          learningPoints: [
            "mapply() applies functions across multiple vector arguments",
            "Complex conditional logic builds real-world classification systems",
            "Aggregate statistics reveal department-level performance",
            "Logical indexing with multiple conditions filters complex datasets",
            "Healthcare analytics requires combining clinical and operational data"
          ]
        },
        {
          id: 9,
          title: "Bank Loan Eligibility & Risk Scoring",
          difficulty: "Advanced",
          instruction: "Create a bank loan processing system that evaluates applicant eligibility using credit scoring, debt-to-income ratios, employment verification, and risk assessment. Implement a multi-factor scoring model, generate approval/rejection decisions with reasons, and produce portfolio risk analysis.",
          detailedSteps: [
            "1. Create applicant database with financial and employment data",
            "2. Calculate debt-to-income (DTI) ratio for each applicant",
            "3. Build a multi-factor credit scoring model (0-100 scale)",
            "4. Implement loan eligibility rules with approval/rejection reasons",
            "5. Calculate EMI and total interest for approved loans",
            "6. Perform portfolio risk analysis and exposure metrics",
            "7. Generate loan decision reports with detailed breakdowns"
          ],
          starterCode: `# Exercise 9: Bank Loan Eligibility & Risk Scoring
# Multi-factor loan processing and risk assessment system

# --- Step 1: Applicant database ---
set.seed(77)
n_applicants <- 25
applicants <- data.frame(
  app_id = paste0("LOAN", sprintf("%04d", 1:n_applicants)),
  name = paste0("Applicant_", 1:n_applicants),
  age = sample(22:65, n_applicants, replace=TRUE),
  income_monthly = sample(c(25000,35000,50000,75000,100000,150000), n_applicants, replace=TRUE),
  existing_emi = sample(c(0,0,0,5000,8000,12000,15000,20000), n_applicants, replace=TRUE),
  credit_score_raw = sample(300:900, n_applicants, replace=TRUE),
  employment_years = sample(0:25, n_applicants, replace=TRUE),
  loan_amount = sample(c(100000,300000,500000,1000000,2000000,5000000), n_applicants, replace=TRUE),
  loan_tenure_months = sample(c(12,24,36,60,84,120), n_applicants, replace=TRUE),
  has_collateral = sample(c(TRUE, FALSE), n_applicants, replace=TRUE),
  prev_defaults = sample(c(0,0,0,0,1,1,2), n_applicants, replace=TRUE),
  stringsAsFactors = FALSE
)

# --- Step 2: Calculate DTI ratio ---
applicants$dti_ratio <- round(applicants$existing_emi / applicants$income_monthly * 100, 1)

# --- Step 3: Multi-factor credit scoring (0-100) ---
calc_risk_score <- function(credit, dti, emp_years, defaults, has_collat, age) {
  score <- 0
  score <- score + min(30, max(0, (credit - 300) / 600 * 30))
  score <- score + max(0, 20 - dti)
  score <- score + min(15, emp_years * 1.5)
  score <- score + max(0, 20 - defaults * 10)
  if(has_collat) score <- score + 10
  if(age >= 25 & age <= 55) score <- score + 5
  else if(age >= 22) score <- score + 2
  return(round(min(100, score), 1))
}

applicants$risk_score <- mapply(calc_risk_score,
  applicants$credit_score_raw, applicants$dti_ratio,
  applicants$employment_years, applicants$prev_defaults,
  applicants$has_collateral, applicants$age)

# --- Step 4: Loan eligibility decision ---
decide_loan <- function(score, dti, defaults, income, loan_amt) {
  reasons <- c()
  if(score < 40) reasons <- c(reasons, "Low risk score")
  if(dti > 50) reasons <- c(reasons, "High DTI ratio")
  if(defaults > 1) reasons <- c(reasons, "Multiple defaults")
  if(loan_amt > income * 60) reasons <- c(reasons, "Loan exceeds 60x income")
  if(length(reasons) > 0) return(paste("REJECTED:", paste(reasons, collapse="; ")))
  if(score >= 70) return("APPROVED: Premium rate (8.5%)")
  if(score >= 55) return("APPROVED: Standard rate (10.5%)")
  return("APPROVED: High-risk rate (13.5%)")
}

applicants$decision <- mapply(decide_loan,
  applicants$risk_score, applicants$dti_ratio,
  applicants$prev_defaults, applicants$income_monthly, applicants$loan_amount)
applicants$status <- ifelse(grepl("APPROVED", applicants$decision), "Approved", "Rejected")

# --- Step 5: EMI calculation for approved loans ---
calc_emi <- function(principal, rate_annual, months) {
  r <- rate_annual / 12 / 100
  emi <- principal * r * (1+r)^months / ((1+r)^months - 1)
  return(round(emi, 2))
}

approved <- applicants[applicants$status == "Approved", ]
approved$interest_rate <- ifelse(grepl("8.5%", approved$decision), 8.5,
                          ifelse(grepl("10.5%", approved$decision), 10.5, 13.5))
approved$emi <- mapply(calc_emi, approved$loan_amount, approved$interest_rate, approved$loan_tenure_months)
approved$total_payable <- approved$emi * approved$loan_tenure_months
approved$total_interest <- approved$total_payable - approved$loan_amount

cat("=== LOAN DECISIONS ===\\n")
cat(sprintf("Approved: %d (%.0f%%)\\n", sum(applicants$status=="Approved"),
    sum(applicants$status=="Approved")/n_applicants*100))
cat(sprintf("Rejected: %d (%.0f%%)\\n", sum(applicants$status=="Rejected"),
    sum(applicants$status=="Rejected")/n_applicants*100))

# --- Step 6: Portfolio risk analysis ---
cat("\\n=== PORTFOLIO ANALYSIS ===\\n")
cat(sprintf("Total Loan Exposure: Rs %s\\n", format(sum(approved$loan_amount), big.mark=",")))
cat(sprintf("Expected Interest Income: Rs %s\\n", format(round(sum(approved$total_interest)), big.mark=",")))
cat(sprintf("Average Risk Score (Approved): %.1f\\n", mean(approved$risk_score)))

cat("\\nRisk Distribution (Approved):\\n")
cat(sprintf("  Premium (Score>=70): %d loans\\n", sum(approved$risk_score >= 70)))
cat(sprintf("  Standard (55-69): %d loans\\n", sum(approved$risk_score >= 55 & approved$risk_score < 70)))
cat(sprintf("  High-Risk (<55): %d loans\\n", sum(approved$risk_score < 55)))

# --- Step 7: Top approved loans ---
cat("\\n=== TOP 5 APPROVED LOANS ===\\n")
top_approved <- head(approved[order(-approved$loan_amount), ], 5)
for(i in 1:nrow(top_approved)) {
  cat(sprintf("  %s: Rs %s @ %.1f%% for %d months, EMI=Rs %s\\n",
      top_approved$app_id[i], format(top_approved$loan_amount[i], big.mark=","),
      top_approved$interest_rate[i], top_approved$loan_tenure_months[i],
      format(top_approved$emi[i], big.mark=",")))
}`,
          solution: `# Complete solution - the starter code IS the full system. Run to see all outputs.`,
          hint: "Use mapply() for row-wise function application. grepl() searches for patterns in strings. EMI formula: P*r*(1+r)^n / ((1+r)^n - 1). Logical conditions combine with & and |.",
          expectedOutput: "LOAN DECISIONS (approved/rejected counts), PORTFOLIO ANALYSIS with exposure and interest income, Risk Distribution, TOP 5 APPROVED LOANS with EMI details",
          learningPoints: [
            "Multi-factor scoring models combine weighted criteria",
            "Financial calculations (EMI, DTI) use standard formulas",
            "mapply() enables row-wise operations across data frames",
            "grepl() pattern matching classifies text-based decisions",
            "Portfolio analysis aggregates individual loan metrics into risk exposure"
          ]
        },
        {
          id: 10,
          title: "Employee Payroll & HR Analytics System",
          difficulty: "Advanced",
          instruction: "Build a comprehensive HR analytics system that processes employee payroll, calculates tax deductions under Indian tax slabs, tracks performance ratings, identifies attrition risk, computes department budgets, and generates workforce analytics. Handle complex business rules including overtime, bonuses, and PF contributions.",
          detailedSteps: [
            "1. Create employee database with salary, department, and performance data",
            "2. Calculate gross salary with HRA, DA, and special allowances",
            "3. Implement Indian income tax slab calculation (New Regime 2025)",
            "4. Compute net salary after PF, tax, and professional tax deductions",
            "5. Identify attrition risk based on salary, tenure, and performance",
            "6. Generate department-wise budget and headcount analysis",
            "7. Create comprehensive payroll summary and HR dashboard"
          ],
          starterCode: `# Exercise 10: Employee Payroll & HR Analytics System
# Complete HR management with payroll processing and workforce analytics

# --- Step 1: Employee database ---
set.seed(55)
n_emp <- 20
employees <- data.frame(
  emp_id = paste0("EMP", sprintf("%04d", 1:n_emp)),
  name = paste0("Employee_", 1:n_emp),
  department = sample(c("Engineering","Marketing","Finance","HR","Operations"), n_emp, replace=TRUE),
  designation = sample(c("Junior","Senior","Lead","Manager","Director"), n_emp, replace=TRUE,
                       prob=c(0.3,0.3,0.2,0.15,0.05)),
  basic_salary = sample(c(25000,35000,50000,70000,90000,120000), n_emp, replace=TRUE),
  years_of_service = sample(0:20, n_emp, replace=TRUE),
  performance_rating = sample(1:5, n_emp, replace=TRUE, prob=c(0.05,0.15,0.40,0.30,0.10)),
  overtime_hours = sample(0:30, n_emp, replace=TRUE),
  leaves_taken = sample(0:20, n_emp, replace=TRUE),
  stringsAsFactors = FALSE
)

# --- Step 2: Gross salary calculation ---
employees$hra <- employees$basic_salary * 0.40
employees$da <- employees$basic_salary * 0.12
employees$special_allow <- employees$basic_salary * 0.10
employees$overtime_pay <- employees$overtime_hours * (employees$basic_salary / 22 / 8) * 1.5
employees$performance_bonus <- ifelse(employees$performance_rating >= 4,
                               employees$basic_salary * 0.15,
                               ifelse(employees$performance_rating >= 3,
                               employees$basic_salary * 0.08, 0))
employees$gross_salary <- round(employees$basic_salary + employees$hra + employees$da +
                          employees$special_allow + employees$overtime_pay + employees$performance_bonus)

# --- Step 3: Tax calculation (Indian New Regime 2025) ---
calc_annual_tax <- function(annual_income) {
  tax <- 0
  if(annual_income > 1500000) tax <- tax + (annual_income - 1500000) * 0.30
  if(annual_income > 1250000) tax <- tax + min(annual_income - 1250000, 250000) * 0.25
  if(annual_income > 1000000) tax <- tax + min(annual_income - 1000000, 250000) * 0.20
  if(annual_income > 750000) tax <- tax + min(annual_income - 750000, 250000) * 0.15
  if(annual_income > 500000) tax <- tax + min(annual_income - 500000, 250000) * 0.10
  if(annual_income > 300000) tax <- tax + min(annual_income - 300000, 200000) * 0.05
  if(annual_income <= 700000) tax <- 0
  cess <- tax * 0.04
  return(round(tax + cess))
}

employees$annual_gross <- employees$gross_salary * 12
employees$annual_tax <- sapply(employees$annual_gross, calc_annual_tax)
employees$monthly_tax <- round(employees$annual_tax / 12)

# --- Step 4: Net salary calculation ---
employees$pf_deduction <- round(employees$basic_salary * 0.12)
employees$prof_tax <- ifelse(employees$gross_salary > 15000, 200, 0)
employees$total_deductions <- employees$monthly_tax + employees$pf_deduction + employees$prof_tax
employees$net_salary <- employees$gross_salary - employees$total_deductions

cat("=== PAYROLL SUMMARY (Top 5 by Net Salary) ===\\n")
top_paid <- head(employees[order(-employees$net_salary), ], 5)
for(i in 1:5) {
  cat(sprintf("  %s (%s, %s): Gross=Rs %s, Tax=Rs %s, Net=Rs %s\\n",
      top_paid$emp_id[i], top_paid$designation[i], top_paid$department[i],
      format(top_paid$gross_salary[i], big.mark=","),
      format(top_paid$monthly_tax[i], big.mark=","),
      format(top_paid$net_salary[i], big.mark=",")))
}

# --- Step 5: Attrition risk analysis ---
employees$attrition_score <- 0
employees$attrition_score <- employees$attrition_score +
  ifelse(employees$performance_rating <= 2, 30, 0) +
  ifelse(employees$years_of_service <= 1, 20, ifelse(employees$years_of_service > 10, 10, 0)) +
  ifelse(employees$net_salary < median(employees$net_salary), 20, 0) +
  ifelse(employees$overtime_hours > 20, 15, 0) +
  ifelse(employees$leaves_taken > 15, 15, 0)

employees$attrition_risk <- ifelse(employees$attrition_score >= 50, "HIGH",
                            ifelse(employees$attrition_score >= 30, "MEDIUM", "LOW"))

cat("\\n=== ATTRITION RISK ===\\n")
risk_tbl <- table(employees$attrition_risk)
for(r in c("HIGH","MEDIUM","LOW")) {
  if(r %in% names(risk_tbl)) cat(sprintf("  %s Risk: %d employees\\n", r, risk_tbl[r]))
}

# --- Step 6: Department budget analysis ---
cat("\\n=== DEPARTMENT ANALYSIS ===\\n")
for(d in sort(unique(employees$department))) {
  dept <- employees[employees$department == d, ]
  cat(sprintf("  %s: %d staff, Monthly Budget=Rs %s, Avg Salary=Rs %s, Avg Rating=%.1f\\n",
      d, nrow(dept), format(sum(dept$gross_salary), big.mark=","),
      format(round(mean(dept$net_salary)), big.mark=","),
      mean(dept$performance_rating)))
}

# --- Step 7: HR Dashboard ---
cat("\\n========== HR DASHBOARD ==========\\n")
cat(sprintf("Total Employees: %d\\n", n_emp))
cat(sprintf("Monthly Payroll: Rs %s\\n", format(sum(employees$gross_salary), big.mark=",")))
cat(sprintf("Monthly Tax Collection: Rs %s\\n", format(sum(employees$monthly_tax), big.mark=",")))
cat(sprintf("Monthly PF Contribution: Rs %s\\n", format(sum(employees$pf_deduction), big.mark=",")))
cat(sprintf("Avg Performance Rating: %.2f / 5.0\\n", mean(employees$performance_rating)))
cat(sprintf("High Attrition Risk: %d employees (%.0f%%)\\n",
    sum(employees$attrition_risk=="HIGH"),
    sum(employees$attrition_risk=="HIGH")/n_emp*100))
cat(sprintf("Overtime Cost: Rs %s\\n", format(round(sum(employees$overtime_pay)), big.mark=",")))`,
          solution: `# Complete solution - the starter code IS the full system. Run to see all outputs.`,
          hint: "Use sapply() to apply tax function to each salary. Indian tax slabs use progressive rates. ifelse() handles vectorized conditional logic. format(big.mark=',') improves readability of large numbers.",
          expectedOutput: "PAYROLL SUMMARY (top 5), ATTRITION RISK distribution, DEPARTMENT ANALYSIS with budgets, HR DASHBOARD with total payroll, tax, PF, and attrition metrics",
          learningPoints: [
            "Progressive tax calculation uses cascading if-else conditions",
            "sapply() applies functions to each element of a vector",
            "Multi-factor risk scoring combines weighted business rules",
            "Payroll systems require precise arithmetic with multiple components",
            "HR analytics combines financial, performance, and behavioral data"
          ]
        }
      ]
    },
    unit3: {
      title: "Data Visualization Virtual Lab",
      description: "Master data visualization through 8 progressive exercises. From basic charts to multi-panel dashboards and statistical visualizations!",
      exercises: [
        {
          id: 1,
          title: "Bar Charts - Sales Analysis",
          difficulty: "Beginner",
          instruction: "Create professional bar charts to visualize quarterly sales data. Learn customization techniques for business presentations.",
          detailedSteps: [
            "1. Create vectors for quarters and sales data",
            "2. Build a basic bar chart",
            "3. Add colors, titles, and labels",
            "4. Customize bar width and spacing",
            "5. Add value labels on top of bars",
            "6. Create horizontal bar chart for comparison"
          ],
          starterCode: `# Exercise 1: Bar Charts - Sales Analysis
# Visualize quarterly sales performance

# Data
quarters <- c("Q1", "Q2", "Q3", "Q4")
sales_2024 <- c(125, 142, 158, 171)
sales_2025 <- c(138, 155, 172, 189)

# Basic bar chart
barplot(sales_2024, 
        names.arg = quarters,
        main = "Quarterly Sales 2024",
        xlab = "Quarter",
        ylab = "Sales (in thousands)",
        col = "steelblue",
        border = "darkblue",
        ylim = c(0, 200))

# Add value labels on bars
text(x = barplot(sales_2024, plot = FALSE), 
     y = sales_2024 + 5, 
     labels = paste0("$", sales_2024, "K"),
     cex = 0.8)

# Grouped bar chart (compare 2024 vs 2025)
sales_matrix <- rbind(sales_2024, sales_2025)
barplot(sales_matrix,
        beside = TRUE,
        names.arg = quarters,
        main = "Sales Comparison: 2024 vs 2025",
        xlab = "Quarter",
        ylab = "Sales (in thousands)",
        col = c("steelblue", "coral"),
        legend = c("2024", "2025"),
        ylim = c(0, 200))

# Horizontal bar chart
barplot(sales_2024,
        names.arg = quarters,
        main = "Q4 2024 Sales by Quarter",
        horiz = TRUE,
        col = rainbow(4),
        xlim = c(0, 200))
`,
          solution: `quarters <- c("Q1", "Q2", "Q3", "Q4")
sales_2024 <- c(125, 142, 158, 171)
sales_2025 <- c(138, 155, 172, 189)

barplot(sales_2024, 
        names.arg = quarters,
        main = "Quarterly Sales 2024",
        xlab = "Quarter",
        ylab = "Sales (in thousands)",
        col = "steelblue",
        border = "darkblue",
        ylim = c(0, 200))

text(x = barplot(sales_2024, plot = FALSE), 
     y = sales_2024 + 5, 
     labels = paste0("$", sales_2024, "K"),
     cex = 0.8)

sales_matrix <- rbind(sales_2024, sales_2025)
barplot(sales_matrix,
        beside = TRUE,
        names.arg = quarters,
        main = "Sales Comparison: 2024 vs 2025",
        xlab = "Quarter",
        ylab = "Sales (in thousands)",
        col = c("steelblue", "coral"),
        legend = c("2024", "2025"),
        ylim = c(0, 200))

barplot(sales_2024,
        names.arg = quarters,
        main = "Q4 2024 Sales by Quarter",
        horiz = TRUE,
        col = rainbow(4),
        xlim = c(0, 200))`,
          hint: "Use barplot() with names.arg for labels. beside=TRUE creates grouped bars. horiz=TRUE makes horizontal bars",
          expectedOutput: "Three bar charts: basic, grouped comparison, and horizontal",
          learningPoints: [
            "barplot() is the main function for bar charts",
            "names.arg sets x-axis labels",
            "col sets colors (single color or vector)",
            "beside=TRUE groups bars side-by-side",
            "text() adds labels to plots",
            "ylim/xlim control axis ranges"
          ]
        },
        {
          id: 2,
          title: "Scatter Plots - Correlation Analysis",
          difficulty: "Beginner",
          instruction: "Create scatter plots to explore relationships between variables. Add trend lines and calculate correlations.",
          detailedSteps: [
            "1. Create data for study hours vs exam scores",
            "2. Build a scatter plot",
            "3. Add a trend line (linear regression)",
            "4. Calculate and display correlation",
            "5. Color points by performance level",
            "6. Add reference lines for averages"
          ],
          starterCode: `# Exercise 2: Scatter Plots - Correlation Analysis
# Explore relationship between study time and exam scores

# Data: 20 students
study_hours <- c(2, 3, 4, 5, 3, 6, 7, 4, 8, 5, 6, 7, 9, 4, 5, 8, 6, 7, 9, 10)
exam_scores <- c(65, 70, 75, 78, 72, 82, 85, 76, 90, 79, 83, 86, 92, 77, 80, 91, 84, 87, 93, 95)

# Basic scatter plot
plot(study_hours, exam_scores,
     main = "Study Hours vs Exam Scores",
     xlab = "Study Hours per Week",
     ylab = "Exam Score",
     pch = 19,  # Solid circles
     col = "steelblue",
     cex = 1.5)  # Point size

# Add trend line
model <- lm(exam_scores ~ study_hours)
abline(model, col = "red", lwd = 2)

# Calculate correlation
correlation <- cor(study_hours, exam_scores)
text(3, 90, paste("Correlation:", round(correlation, 3)), col = "red")

# Add reference lines for averages
abline(h = mean(exam_scores), col = "gray", lty = 2)
abline(v = mean(study_hours), col = "gray", lty = 2)

# Color by performance
colors <- ifelse(exam_scores >= 85, "green", 
          ifelse(exam_scores >= 75, "orange", "red"))
plot(study_hours, exam_scores,
     main = "Performance Levels",
     xlab = "Study Hours",
     ylab = "Score",
     pch = 19,
     col = colors,
     cex = 1.5)
legend("bottomright", 
       legend = c("Excellent (85+)", "Good (75-84)", "Needs Work (<75)"),
       col = c("green", "orange", "red"),
       pch = 19)
`,
          solution: `study_hours <- c(2, 3, 4, 5, 3, 6, 7, 4, 8, 5, 6, 7, 9, 4, 5, 8, 6, 7, 9, 10)
exam_scores <- c(65, 70, 75, 78, 72, 82, 85, 76, 90, 79, 83, 86, 92, 77, 80, 91, 84, 87, 93, 95)

plot(study_hours, exam_scores,
     main = "Study Hours vs Exam Scores",
     xlab = "Study Hours per Week",
     ylab = "Exam Score",
     pch = 19,
     col = "steelblue",
     cex = 1.5)

model <- lm(exam_scores ~ study_hours)
abline(model, col = "red", lwd = 2)

correlation <- cor(study_hours, exam_scores)
text(3, 90, paste("Correlation:", round(correlation, 3)), col = "red")

abline(h = mean(exam_scores), col = "gray", lty = 2)
abline(v = mean(study_hours), col = "gray", lty = 2)

colors <- ifelse(exam_scores >= 85, "green", 
          ifelse(exam_scores >= 75, "orange", "red"))
plot(study_hours, exam_scores,
     main = "Performance Levels",
     xlab = "Study Hours",
     ylab = "Score",
     pch = 19,
     col = colors,
     cex = 1.5)
legend("bottomright", 
       legend = c("Excellent (85+)", "Good (75-84)", "Needs Work (<75)"),
       col = c("green", "orange", "red"),
       pch = 19)`,
          hint: "plot(x, y) creates scatter plot. abline() adds lines. lm() fits linear model. cor() calculates correlation",
          expectedOutput: "Two scatter plots with trend lines and color coding",
          learningPoints: [
            "plot() creates scatter plots",
            "pch controls point shape (19 = solid circle)",
            "abline() adds straight lines",
            "lm() performs linear regression",
            "cor() measures linear relationship (-1 to 1)",
            "ifelse() enables conditional coloring"
          ]
        },
        {
          id: 3,
          title: "Line Charts - Time Series",
          difficulty: "Intermediate",
          instruction: "Visualize trends over time with line charts. Compare multiple time series and identify patterns.",
          detailedSteps: [
            "1. Create monthly temperature data for two cities",
            "2. Plot temperature trends",
            "3. Add multiple lines for comparison",
            "4. Customize line styles and colors",
            "5. Add legend and annotations",
            "6. Highlight seasonal patterns"
          ],
          starterCode: `# Exercise 3: Line Charts - Time Series
# Analyze temperature trends across cities

months <- 1:12
city_a_temp <- c(5, 7, 12, 18, 23, 28, 30, 29, 25, 19, 12, 7)
city_b_temp <- c(15, 16, 18, 21, 24, 27, 29, 28, 26, 23, 19, 16)

# Basic line chart
plot(months, city_a_temp,
     type = "l",  # Line plot
     main = "Monthly Temperature Comparison",
     xlab = "Month",
     ylab = "Temperature (°C)",
     col = "blue",
     lwd = 2,
     ylim = c(0, 35))

# Add second city
lines(months, city_b_temp,
      col = "red",
      lwd = 2,
      lty = 2)  # Dashed line

# Add points
points(months, city_a_temp, pch = 19, col = "blue")
points(months, city_b_temp, pch = 17, col = "red")

# Add legend
legend("topleft",
       legend = c("City A (Temperate)", "City B (Tropical)"),
       col = c("blue", "red"),
       lty = c(1, 2),
       lwd = 2,
       pch = c(19, 17))

# Add reference line for comfortable temperature
abline(h = 22, col = "green", lty = 3)
text(6, 23, "Comfortable (22°C)", col = "green")

# Highlight summer months
rect(5.5, 0, 8.5, 35, col = rgb(1, 1, 0, 0.1), border = NA)
text(7, 33, "Summer", col = "orange")
`,
          solution: `months <- 1:12
city_a_temp <- c(5, 7, 12, 18, 23, 28, 30, 29, 25, 19, 12, 7)
city_b_temp <- c(15, 16, 18, 21, 24, 27, 29, 28, 26, 23, 19, 16)

plot(months, city_a_temp,
     type = "l",
     main = "Monthly Temperature Comparison",
     xlab = "Month",
     ylab = "Temperature (°C)",
     col = "blue",
     lwd = 2,
     ylim = c(0, 35))

lines(months, city_b_temp,
      col = "red",
      lwd = 2,
      lty = 2)

points(months, city_a_temp, pch = 19, col = "blue")
points(months, city_b_temp, pch = 17, col = "red")

legend("topleft",
       legend = c("City A (Temperate)", "City B (Tropical)"),
       col = c("blue", "red"),
       lty = c(1, 2),
       lwd = 2,
       pch = c(19, 17))

abline(h = 22, col = "green", lty = 3)
text(6, 23, "Comfortable (22°C)", col = "green")

rect(5.5, 0, 8.5, 35, col = rgb(1, 1, 0, 0.1), border = NA)
text(7, 33, "Summer", col = "orange")`,
          hint: "type='l' for lines. lines() adds more lines. lty controls line type (1=solid, 2=dashed). rect() draws rectangles",
          expectedOutput: "Line chart comparing two cities with annotations",
          learningPoints: [
            "type='l' creates line plots",
            "lines() adds additional lines to existing plot",
            "lwd controls line width",
            "lty controls line type (1=solid, 2=dashed, 3=dotted)",
            "rect() adds rectangular regions",
            "rgb() creates transparent colors"
          ]
        },
        {
          id: 4,
          title: "Multi-Panel Dashboard - COVID-19 Data Visualization",
          difficulty: "Advanced",
          instruction: "Build a multi-panel data dashboard that visualizes COVID-19 pandemic data across multiple Indian states. Create bar charts, pie charts, line trends, and comparative panels in a single layout using par(mfrow). Apply professional formatting with legends, annotations, and color palettes.",
          detailedSteps: [
            "1. Create COVID-19 dataset with cases, recoveries, deaths for 10 states",
            "2. Set up a 2x2 multi-panel layout using par(mfrow)",
            "3. Panel 1: Grouped bar chart comparing cases vs recoveries by state",
            "4. Panel 2: Pie chart showing death distribution across states",
            "5. Panel 3: Stacked bar chart of active vs recovered vs deaths",
            "6. Panel 4: Dot chart ranking states by recovery rate",
            "7. Add professional titles, legends, color schemes, and annotations"
          ],
          starterCode: `# Exercise 4: Multi-Panel COVID-19 Dashboard
# Create a professional 4-panel visualization dashboard

# --- Step 1: COVID-19 dataset ---
states <- c("Maharashtra","Kerala","Karnataka","Tamil Nadu","Delhi",
            "UP","Rajasthan","Gujarat","West Bengal","Telangana")
total_cases <- c(8150000,6900000,4050000,3500000,2000000,
                 1750000,1300000,1250000,2100000,800000)
recovered <- c(7950000,6850000,3980000,3420000,1970000,
               1720000,1275000,1220000,2060000,785000)
deaths <- c(148000,70000,40000,38000,26000,23000,9500,11000,21000,4100)
active <- total_cases - recovered - deaths

recovery_rate <- round(recovered / total_cases * 100, 1)
fatality_rate <- round(deaths / total_cases * 100, 2)

# Color palette
cols <- c("#E74C3C","#3498DB","#2ECC71","#F39C12","#9B59B6",
          "#1ABC9C","#E67E22","#34495E","#16A085","#C0392B")

# --- Step 2: Set up 2x2 dashboard ---
par(mfrow = c(2, 2), mar = c(5, 5, 3, 2), bg = "white")

# --- Panel 1: Grouped Bar Chart ---
bar_data <- rbind(total_cases/1e6, recovered/1e6)
bp <- barplot(bar_data, beside = TRUE, names.arg = substr(states, 1, 5),
        main = "Cases vs Recoveries (Millions)",
        col = c("#E74C3C", "#2ECC71"), las = 2, cex.names = 0.7,
        ylab = "Count (Millions)")
legend("topright", c("Total Cases", "Recovered"),
       fill = c("#E74C3C", "#2ECC71"), cex = 0.7)

# --- Panel 2: Pie Chart - Death Distribution ---
top5_deaths <- head(sort(deaths, decreasing=TRUE), 5)
top5_names <- states[order(deaths, decreasing=TRUE)][1:5]
pie_labels <- paste0(top5_names, "\\n", format(top5_deaths, big.mark=","))
pie(top5_deaths, labels = pie_labels, col = cols[1:5],
    main = "Death Distribution (Top 5 States)", cex = 0.7)

# --- Panel 3: Stacked Bar Chart ---
stack_data <- rbind(active/1e6, recovered/1e6, deaths/1e6)
barplot(stack_data, names.arg = substr(states, 1, 5),
        main = "Case Breakdown by State",
        col = c("#F39C12", "#2ECC71", "#E74C3C"), las = 2, cex.names = 0.7,
        ylab = "Count (Millions)")
legend("topright", c("Active", "Recovered", "Deaths"),
       fill = c("#F39C12", "#2ECC71", "#E74C3C"), cex = 0.6)

# --- Panel 4: Dot Chart - Recovery Rate ---
sorted_idx <- order(recovery_rate)
dotchart(recovery_rate[sorted_idx], labels = states[sorted_idx],
         main = "Recovery Rate by State (%)",
         pch = 19, col = ifelse(recovery_rate[sorted_idx] > 97, "green", "orange"),
         cex = 0.8, xlim = c(95, 100))
abline(v = mean(recovery_rate), col = "red", lty = 2)
text(mean(recovery_rate), 1, paste0("Avg: ", round(mean(recovery_rate),1), "%"),
     col = "red", cex = 0.7, pos = 4)

par(mfrow = c(1, 1))  # Reset layout

# Summary statistics
cat("=== COVID-19 DASHBOARD SUMMARY ===\\n")
cat(sprintf("Total Cases (All States): %s\\n", format(sum(total_cases), big.mark=",")))
cat(sprintf("Total Recovered: %s (%.1f%%)\\n", format(sum(recovered), big.mark=","),
    sum(recovered)/sum(total_cases)*100))
cat(sprintf("Total Deaths: %s (%.2f%%)\\n", format(sum(deaths), big.mark=","),
    sum(deaths)/sum(total_cases)*100))
cat(sprintf("Highest Recovery Rate: %s (%.1f%%)\\n",
    states[which.max(recovery_rate)], max(recovery_rate)))
cat(sprintf("Highest Fatality Rate: %s (%.2f%%)\\n",
    states[which.max(fatality_rate)], max(fatality_rate)))`,
          solution: `# Complete solution - the starter code IS the full dashboard. Run to see all 4 panels.`,
          hint: "par(mfrow=c(2,2)) creates a 2x2 grid. barplot() with beside=TRUE makes grouped bars. rbind() stacks data for grouped/stacked charts. pie() needs numeric vector and labels. dotchart() creates Cleveland dot plots.",
          expectedOutput: "4-panel dashboard: grouped bar chart, pie chart, stacked bar chart, dot chart. Console shows COVID-19 summary statistics.",
          learningPoints: [
            "par(mfrow) creates multi-panel layouts for dashboards",
            "Grouped bar charts compare categories side by side",
            "Stacked bar charts show composition of totals",
            "Pie charts display proportional distribution",
            "Dot charts are effective for ranking comparisons"
          ]
        },
        {
          id: 5,
          title: "Heatmap & Correlation Matrix - Student Performance",
          difficulty: "Advanced",
          instruction: "Create publication-quality heatmaps and correlation matrices to analyze student performance across subjects. Build custom color gradients, add cell annotations, and create hierarchical clustering dendrograms to identify student groups and subject relationships.",
          detailedSteps: [
            "1. Generate student performance data across 8 subjects",
            "2. Calculate correlation matrix between all subjects",
            "3. Build a color-coded heatmap of raw scores",
            "4. Create annotated correlation matrix with values",
            "5. Add hierarchical clustering dendrogram",
            "6. Identify strong/weak subject correlations",
            "7. Generate performance summary with insights"
          ],
          starterCode: `# Exercise 5: Heatmap & Correlation Matrix - Student Performance
# Analyze subject relationships through visual correlation analysis

# --- Step 1: Student performance data ---
set.seed(42)
n <- 25
students <- data.frame(
  Math = sample(45:100, n, replace=TRUE),
  Physics = sample(40:95, n, replace=TRUE),
  Chemistry = sample(50:98, n, replace=TRUE),
  Biology = sample(55:100, n, replace=TRUE),
  English = sample(60:100, n, replace=TRUE),
  History = sample(45:95, n, replace=TRUE),
  CompSci = sample(50:100, n, replace=TRUE),
  Statistics = sample(40:98, n, replace=TRUE)
)
# Add realistic correlations
students$Physics <- round(students$Math * 0.7 + rnorm(n, 20, 8))
students$Statistics <- round(students$Math * 0.6 + rnorm(n, 25, 10))
students$CompSci <- round(students$Math * 0.5 + students$Statistics * 0.3 + rnorm(n, 10, 8))
students <- as.data.frame(lapply(students, function(x) pmin(pmax(x, 30), 100)))

row.names(students) <- paste0("S", sprintf("%02d", 1:n))

# --- Step 2: Correlation matrix ---
cor_matrix <- round(cor(students), 2)

# --- Step 3: Score Heatmap ---
par(mfrow = c(1, 2), mar = c(5, 6, 4, 4))

# Custom color function
score_colors <- colorRampPalette(c("#E74C3C", "#F39C12", "#F1C40F", "#2ECC71", "#27AE60"))
score_mat <- as.matrix(students)
image(1:ncol(score_mat), 1:nrow(score_mat), t(score_mat),
      col = score_colors(50), axes = FALSE,
      main = "Student Scores Heatmap", xlab = "", ylab = "")
axis(1, at = 1:ncol(score_mat), labels = names(students), las = 2, cex.axis = 0.7)
axis(2, at = 1:nrow(score_mat), labels = row.names(students), las = 1, cex.axis = 0.6)

# --- Step 4: Correlation Matrix Heatmap ---
cor_colors <- colorRampPalette(c("#3498DB", "white", "#E74C3C"))
n_subj <- ncol(cor_matrix)
image(1:n_subj, 1:n_subj, cor_matrix,
      col = cor_colors(50), axes = FALSE,
      main = "Subject Correlation Matrix", xlab = "", ylab = "")
axis(1, at = 1:n_subj, labels = colnames(cor_matrix), las = 2, cex.axis = 0.7)
axis(2, at = 1:n_subj, labels = rownames(cor_matrix), las = 1, cex.axis = 0.7)

# Add correlation values as text
for(i in 1:n_subj) {
  for(j in 1:n_subj) {
    text(i, j, cor_matrix[i,j], cex = 0.6,
         col = ifelse(abs(cor_matrix[i,j]) > 0.5, "white", "black"))
  }
}

par(mfrow = c(1, 1))

# --- Step 5: Hierarchical clustering ---
dist_matrix <- as.dist(1 - cor_matrix)
hc <- hclust(dist_matrix, method = "ward.D2")
plot(hc, main = "Subject Clustering Dendrogram",
     xlab = "Subjects", sub = "", hang = -1,
     col = "#2C3E50", cex = 0.8)
rect.hclust(hc, k = 3, border = c("red", "blue", "green"))

# --- Step 6: Insights ---
cat("=== CORRELATION ANALYSIS ===\\n")
cat("\\nStrongest Positive Correlations:\\n")
for(i in 1:(n_subj-1)) {
  for(j in (i+1):n_subj) {
    if(cor_matrix[i,j] > 0.5) {
      cat(sprintf("  %s <-> %s: r = %.2f\\n",
          colnames(cor_matrix)[i], colnames(cor_matrix)[j], cor_matrix[i,j]))
    }
  }
}

cat("\\nSubject Averages:\\n")
for(s in names(students)) {
  cat(sprintf("  %s: Mean=%.1f, SD=%.1f, Range=[%d-%d]\\n",
      s, mean(students[[s]]), sd(students[[s]]),
      min(students[[s]]), max(students[[s]])))
}

cat(sprintf("\\nTop Performer: %s (Avg=%.1f)\\n",
    row.names(students)[which.max(rowMeans(students))],
    max(rowMeans(students))))
cat(sprintf("Needs Support: %s (Avg=%.1f)\\n",
    row.names(students)[which.min(rowMeans(students))],
    min(rowMeans(students))))`,
          solution: `# Complete solution - the starter code IS the full analysis. Run to see all visualizations.`,
          hint: "cor() computes correlation matrix. image() creates heatmaps. colorRampPalette() generates custom color gradients. hclust() performs hierarchical clustering. rect.hclust() draws cluster boxes on dendrograms.",
          expectedOutput: "Score heatmap, correlation matrix with annotations, clustering dendrogram with 3 clusters, correlation insights, subject averages, top/bottom performers",
          learningPoints: [
            "Heatmaps visualize patterns in matrix data effectively",
            "Correlation matrices reveal subject relationships",
            "colorRampPalette() creates custom color gradients",
            "Hierarchical clustering groups similar variables",
            "image() with text() creates annotated heatmaps"
          ]
        },
        {
          id: 6,
          title: "Interactive Sales Dashboard - Regional Analysis",
          difficulty: "Advanced",
          instruction: "Build a comprehensive sales analytics dashboard with multiple chart types. Visualize regional sales performance, product category trends, salesperson rankings, and monthly revenue patterns. Use advanced R plotting techniques including custom axes, gradient fills, and dynamic annotations.",
          detailedSteps: [
            "1. Create sales dataset with regions, products, salespersons, and monthly data",
            "2. Panel 1: Horizontal bar chart of regional revenue with target lines",
            "3. Panel 2: Stacked area-style chart of monthly product category trends",
            "4. Panel 3: Bubble chart of salesperson performance (sales vs deals vs experience)",
            "5. Panel 4: Radar/spider chart comparing regional performance metrics",
            "6. Add KPI summary boxes with formatted metrics",
            "7. Generate executive insights with top/bottom performers"
          ],
          starterCode: `# Exercise 6: Interactive Sales Dashboard - Regional Analysis
# Multi-panel business intelligence dashboard

# --- Step 1: Sales dataset ---
set.seed(88)
regions <- c("North","South","East","West","Central")
products <- c("Electronics","Clothing","Food","Furniture","Sports")
months <- month.abb

# Regional revenue
regional_rev <- c(4500000, 3800000, 2900000, 5200000, 2100000)
regional_target <- c(4000000, 4000000, 3500000, 4500000, 2500000)

# Monthly trends by product
monthly_data <- matrix(0, nrow=12, ncol=5)
colnames(monthly_data) <- products
for(i in 1:5) monthly_data[,i] <- cumsum(sample(50000:200000, 12, replace=TRUE))

# Salesperson data
n_sales <- 15
salespeople <- data.frame(
  name = paste0("SP_", 1:n_sales),
  region = sample(regions, n_sales, replace=TRUE),
  total_sales = sample(200000:800000, n_sales),
  deals_closed = sample(15:80, n_sales),
  experience = sample(1:15, n_sales),
  satisfaction = round(runif(n_sales, 3.0, 5.0), 1)
)

# --- Step 2: 2x2 Dashboard ---
par(mfrow = c(2, 2), mar = c(4, 8, 3, 2), bg = "#FAFAFA")

# Panel 1: Horizontal bar chart with targets
achievement <- round(regional_rev / regional_target * 100)
bar_cols <- ifelse(achievement >= 100, "#27AE60", "#E74C3C")
bp <- barplot(regional_rev/1e6, horiz = TRUE, names.arg = regions,
        main = "Regional Revenue vs Target (Millions)",
        col = bar_cols, xlim = c(0, 6), las = 1, border = NA)
points(regional_target/1e6, bp, pch = 18, col = "#2C3E50", cex = 2)
text(regional_rev/1e6 + 0.2, bp,
     paste0(achievement, "%"), cex = 0.7, col = bar_cols)
legend("bottomright", c("Revenue", "Target"), pch = c(15, 18),
       col = c("#27AE60", "#2C3E50"), cex = 0.7)

# Panel 2: Cumulative line chart by product
par(mar = c(4, 5, 3, 2))
plot(1:12, monthly_data[,1]/1e6, type="n", xlim=c(1,12),
     ylim=c(0, max(monthly_data)/1e6*1.1),
     main="Cumulative Revenue by Product", xlab="Month",
     ylab="Revenue (Millions)", xaxt="n")
axis(1, at=1:12, labels=months, las=2, cex.axis=0.7)
prod_cols <- c("#E74C3C","#3498DB","#2ECC71","#F39C12","#9B59B6")
for(i in 1:5) {
  lines(1:12, monthly_data[,i]/1e6, col=prod_cols[i], lwd=2)
  points(12, monthly_data[12,i]/1e6, pch=19, col=prod_cols[i])
}
legend("topleft", products, col=prod_cols, lwd=2, cex=0.6)

# Panel 3: Bubble chart
par(mar = c(4, 5, 3, 2))
bubble_size <- salespeople$experience * 0.8
plot(salespeople$deals_closed, salespeople$total_sales/1e6,
     cex = bubble_size, pch = 21,
     bg = adjustcolor(prod_cols[as.numeric(factor(salespeople$region))], alpha=0.6),
     main = "Salesperson Performance",
     xlab = "Deals Closed", ylab = "Revenue (Millions)")
top_sp <- salespeople[which.max(salespeople$total_sales), ]
text(top_sp$deals_closed, top_sp$total_sales/1e6,
     top_sp$name, pos=3, cex=0.7, col="red")

# Panel 4: Regional comparison bar chart
par(mar = c(5, 5, 3, 2))
metrics <- rbind(
  regional_rev/max(regional_rev)*100,
  achievement,
  tapply(salespeople$deals_closed, salespeople$region, mean)[regions]/
    max(tapply(salespeople$deals_closed, salespeople$region, mean))*100
)
barplot(metrics, beside=TRUE, names.arg=substr(regions,1,3),
        main="Regional Performance Index",
        col=c("#3498DB","#2ECC71","#F39C12"), las=1,
        ylab="Performance %")
legend("topright", c("Revenue","Achievement","Deals"),
       fill=c("#3498DB","#2ECC71","#F39C12"), cex=0.6)

par(mfrow = c(1, 1))

# --- Executive Summary ---
cat("=== SALES DASHBOARD SUMMARY ===\\n")
cat(sprintf("Total Revenue: Rs %s\\n", format(sum(regional_rev), big.mark=",")))
cat(sprintf("Overall Target Achievement: %.1f%%\\n", sum(regional_rev)/sum(regional_target)*100))
cat(sprintf("Best Region: %s (Rs %s, %d%% of target)\\n",
    regions[which.max(regional_rev)], format(max(regional_rev), big.mark=","),
    achievement[which.max(regional_rev)]))
cat(sprintf("Top Salesperson: %s (Rs %s, %d deals)\\n",
    salespeople$name[which.max(salespeople$total_sales)],
    format(max(salespeople$total_sales), big.mark=","),
    salespeople$deals_closed[which.max(salespeople$total_sales)]))
cat(sprintf("Best Product: %s (Rs %s cumulative)\\n",
    products[which.max(monthly_data[12,])],
    format(max(monthly_data[12,]), big.mark=",")))`,
          solution: `# Complete solution - the starter code IS the full dashboard. Run to see all panels.`,
          hint: "barplot() with horiz=TRUE creates horizontal bars. points() overlays markers on existing plots. adjustcolor() adds transparency. Bubble charts use cex parameter for point size in plot().",
          expectedOutput: "4-panel dashboard: horizontal bar chart with targets, cumulative line chart, bubble chart, regional comparison. Executive summary with KPIs.",
          learningPoints: [
            "Horizontal bar charts with target markers show achievement",
            "Cumulative line charts reveal growth trends over time",
            "Bubble charts encode 3 variables (x, y, size) simultaneously",
            "adjustcolor() with alpha creates transparent overlapping elements",
            "Business dashboards combine multiple chart types for insights"
          ]
        },
        {
          id: 7,
          title: "Statistical Distribution Visualizer",
          difficulty: "Advanced",
          instruction: "Create a comprehensive statistical distribution visualization tool. Plot Normal, Binomial, Poisson, and Exponential distributions with their probability density/mass functions. Overlay theoretical curves on simulated histograms, add confidence intervals, and compare distributions visually.",
          detailedSteps: [
            "1. Generate random samples from 4 different distributions",
            "2. Create histograms with overlaid theoretical density curves",
            "3. Add mean, median, and standard deviation annotations",
            "4. Plot Q-Q plots to assess normality",
            "5. Visualize confidence intervals with shaded regions",
            "6. Compare distributions side by side",
            "7. Generate statistical summary with goodness-of-fit tests"
          ],
          starterCode: `# Exercise 7: Statistical Distribution Visualizer
# Visualize and compare probability distributions

# --- Step 1: Generate samples ---
set.seed(101)
n <- 1000

normal_data <- rnorm(n, mean=50, sd=10)
binomial_data <- rbinom(n, size=20, prob=0.4)
poisson_data <- rpois(n, lambda=5)
exponential_data <- rexp(n, rate=0.2)

# --- Step 2: 2x2 Distribution Plots ---
par(mfrow = c(2, 2), mar = c(4, 4, 3, 1))

# Normal Distribution
hist(normal_data, breaks=30, freq=FALSE, col=adjustcolor("#3498DB", 0.5),
     border="white", main="Normal Distribution (mu=50, sigma=10)",
     xlab="Value", ylab="Density")
curve(dnorm(x, mean=50, sd=10), add=TRUE, col="#E74C3C", lwd=2)
abline(v=mean(normal_data), col="#2C3E50", lwd=2, lty=2)
abline(v=median(normal_data), col="#27AE60", lwd=2, lty=3)
legend("topright", c("Density Curve","Mean","Median"),
       col=c("#E74C3C","#2C3E50","#27AE60"), lwd=2, lty=c(1,2,3), cex=0.6)

# Binomial Distribution
hist(binomial_data, breaks=seq(-0.5, 20.5, 1), freq=FALSE,
     col=adjustcolor("#2ECC71", 0.5), border="white",
     main="Binomial Distribution (n=20, p=0.4)",
     xlab="Successes", ylab="Probability")
points(0:20, dbinom(0:20, 20, 0.4), col="#E74C3C", pch=19, cex=0.8)
lines(0:20, dbinom(0:20, 20, 0.4), col="#E74C3C", lwd=2)

# Poisson Distribution
hist(poisson_data, breaks=seq(-0.5, max(poisson_data)+0.5, 1), freq=FALSE,
     col=adjustcolor("#F39C12", 0.5), border="white",
     main="Poisson Distribution (lambda=5)",
     xlab="Events", ylab="Probability")
x_vals <- 0:max(poisson_data)
points(x_vals, dpois(x_vals, 5), col="#E74C3C", pch=19, cex=0.8)
lines(x_vals, dpois(x_vals, 5), col="#E74C3C", lwd=2)

# Exponential Distribution
hist(exponential_data, breaks=30, freq=FALSE,
     col=adjustcolor("#9B59B6", 0.5), border="white",
     main="Exponential Distribution (rate=0.2)",
     xlab="Value", ylab="Density")
curve(dexp(x, rate=0.2), add=TRUE, col="#E74C3C", lwd=2)
abline(v=1/0.2, col="#2C3E50", lwd=2, lty=2)  # theoretical mean

par(mfrow = c(1, 1))

# --- Step 3: Q-Q Plot for normality ---
par(mfrow = c(1, 2), mar = c(4, 4, 3, 1))
qqnorm(normal_data, main="Q-Q Plot: Normal Data", pch=20, col="#3498DB")
qqline(normal_data, col="#E74C3C", lwd=2)

qqnorm(exponential_data, main="Q-Q Plot: Exponential Data", pch=20, col="#9B59B6")
qqline(exponential_data, col="#E74C3C", lwd=2)
par(mfrow = c(1, 1))

# --- Step 4: Statistical Summary ---
cat("=== DISTRIBUTION ANALYSIS ===\\n\\n")

distributions <- list(
  Normal = normal_data,
  Binomial = binomial_data,
  Poisson = poisson_data,
  Exponential = exponential_data
)

for(name in names(distributions)) {
  d <- distributions[[name]]
  cat(sprintf("%s Distribution:\\n", name))
  cat(sprintf("  Mean=%.2f, Median=%.2f, SD=%.2f\\n", mean(d), median(d), sd(d)))
  cat(sprintf("  Range=[%.2f, %.2f], IQR=%.2f\\n", min(d), max(d), IQR(d)))
  cat(sprintf("  Skewness: %s\\n\\n",
      ifelse(mean(d) > median(d), "Right-skewed", 
      ifelse(mean(d) < median(d), "Left-skewed", "Symmetric"))))
}

# Shapiro-Wilk normality test (on subset for large n)
sw_normal <- shapiro.test(normal_data[1:100])
sw_exp <- shapiro.test(exponential_data[1:100])
cat("=== NORMALITY TESTS (Shapiro-Wilk) ===\\n")
cat(sprintf("Normal data: W=%.4f, p=%.4f (%s)\\n",
    sw_normal$statistic, sw_normal$p.value,
    ifelse(sw_normal$p.value > 0.05, "NORMAL", "NOT NORMAL")))
cat(sprintf("Exponential data: W=%.4f, p=%.6f (%s)\\n",
    sw_exp$statistic, sw_exp$p.value,
    ifelse(sw_exp$p.value > 0.05, "NORMAL", "NOT NORMAL")))`,
          solution: `# Complete solution - the starter code IS the full visualizer. Run to see all plots.`,
          hint: "hist() with freq=FALSE plots density. curve() overlays theoretical distributions. dnorm(), dbinom(), dpois(), dexp() give density/mass values. qqnorm()/qqline() create Q-Q plots. shapiro.test() tests normality.",
          expectedOutput: "4-panel distribution histograms with theoretical curves, Q-Q plots for normality assessment, statistical summaries for all distributions, Shapiro-Wilk test results",
          learningPoints: [
            "Histograms with freq=FALSE show density for curve overlay",
            "Theoretical density curves validate simulated data",
            "Q-Q plots visually assess distribution normality",
            "Shapiro-Wilk test provides formal normality testing",
            "Different distributions suit different real-world phenomena"
          ]
        },
        {
          id: 8,
          title: "Geographic Data Visualization - India Map Dashboard",
          difficulty: "Advanced",
          instruction: "Create geographic-style visualizations for Indian state-level data. Build choropleth-style bar charts, population pyramids, development index comparisons, and literacy rate analysis. Combine multiple visualization techniques to tell a data story about India's demographic landscape.",
          detailedSteps: [
            "1. Create Indian state demographic dataset (population, literacy, GDP, HDI)",
            "2. Build sorted horizontal bar chart as choropleth alternative",
            "3. Create population pyramid for age-gender distribution",
            "4. Plot development index comparison across states",
            "5. Build literacy rate vs GDP scatter with quadrant analysis",
            "6. Create small multiples for state-wise metric comparison",
            "7. Generate demographic insights and rankings"
          ],
          starterCode: `# Exercise 8: Geographic Data Visualization - India Dashboard
# Demographic analysis of Indian states

# --- Step 1: Indian state data ---
states <- c("Maharashtra","UP","Tamil Nadu","Karnataka","Gujarat",
            "Rajasthan","MP","Kerala","West Bengal","Telangana",
            "Bihar","Punjab","Haryana","Jharkhand","Odisha")
population <- c(124, 231, 77, 67, 64, 79, 85, 35, 99, 38,
                128, 31, 29, 39, 46)  # in millions
literacy <- c(82.3, 67.7, 80.1, 75.4, 78.0, 66.1, 69.3, 94.0, 76.3, 72.8,
              61.8, 75.8, 75.6, 66.4, 72.9)
gdp_per_cap <- c(225, 68, 230, 260, 210, 105, 80, 215, 110, 250,
                 45, 165, 250, 70, 90)  # in thousands Rs
hdi <- c(0.696, 0.596, 0.708, 0.682, 0.672, 0.629, 0.606, 0.779, 0.641,
         0.669, 0.576, 0.723, 0.708, 0.599, 0.606)

# Color by region
region <- c("West","North","South","South","West","North","Central",
            "South","East","South","East","North","North","East","East")
region_cols <- c(North="#E74C3C", South="#3498DB", East="#2ECC71",
                 West="#F39C12", Central="#9B59B6")

# --- Step 2: 2x2 Dashboard ---
par(mfrow = c(2, 2), mar = c(4, 9, 3, 2))

# Panel 1: Sorted horizontal bar - GDP per capita
sorted_idx <- order(gdp_per_cap)
barplot(gdp_per_cap[sorted_idx], horiz=TRUE,
        names.arg=states[sorted_idx], las=1, cex.names=0.65,
        col=region_cols[region[sorted_idx]], border=NA,
        main="GDP per Capita (Rs Thousands)", xlab="Rs (000s)")
abline(v=mean(gdp_per_cap), col="red", lty=2, lwd=2)
legend("bottomright", names(region_cols), fill=region_cols, cex=0.5, title="Region")

# Panel 2: Literacy vs GDP scatter with quadrants
par(mar = c(4, 5, 3, 2))
plot(literacy, gdp_per_cap, pch=21, cex=population/30,
     bg=adjustcolor(region_cols[region], alpha=0.6),
     main="Literacy vs GDP (bubble=population)",
     xlab="Literacy Rate (%)", ylab="GDP per Capita (Rs 000s)")
abline(h=mean(gdp_per_cap), v=mean(literacy), col="gray", lty=2)
text(literacy[c(8,12,1)], gdp_per_cap[c(8,12,1)]+10,
     states[c(8,12,1)], cex=0.6, col="#2C3E50")
# Quadrant labels
text(95, 250, "High-High", cex=0.6, col="green")
text(62, 250, "Low Lit\\nHigh GDP", cex=0.5, col="orange")
text(95, 50, "High Lit\\nLow GDP", cex=0.5, col="blue")
text(62, 50, "Low-Low", cex=0.6, col="red")

# Panel 3: HDI comparison
par(mar = c(5, 9, 3, 2))
hdi_sorted <- order(hdi)
hdi_cols <- colorRampPalette(c("#E74C3C","#F39C12","#2ECC71"))(15)
barplot(hdi[hdi_sorted], horiz=TRUE, names.arg=states[hdi_sorted],
        las=1, cex.names=0.65, col=hdi_cols, border=NA,
        main="Human Development Index (HDI)", xlab="HDI Score",
        xlim=c(0.5, 0.85))
abline(v=0.65, col="red", lty=2)
text(0.65, 0, "National Avg", col="red", cex=0.6, pos=4)

# Panel 4: Population vs Literacy grouped
par(mar = c(5, 5, 3, 2))
top10_idx <- order(population, decreasing=TRUE)[1:10]
bp_data <- rbind(population[top10_idx]/max(population)*100,
                 literacy[top10_idx])
barplot(bp_data, beside=TRUE, names.arg=substr(states[top10_idx],1,4),
        col=c("#3498DB","#2ECC71"), las=2, cex.names=0.65,
        main="Top 10: Population vs Literacy",
        ylab="Normalized %")
legend("topright", c("Population (norm)","Literacy %"),
       fill=c("#3498DB","#2ECC71"), cex=0.6)

par(mfrow = c(1, 1))

# --- Insights ---
cat("=== INDIA DEMOGRAPHIC DASHBOARD ===\\n")
cat(sprintf("Total Population (15 states): %d Million\\n", sum(population)))
cat(sprintf("Avg Literacy: %.1f%%, Avg GDP/cap: Rs %dk\\n", mean(literacy), round(mean(gdp_per_cap))))
cat(sprintf("Highest HDI: %s (%.3f)\\n", states[which.max(hdi)], max(hdi)))
cat(sprintf("Lowest HDI: %s (%.3f)\\n", states[which.min(hdi)], min(hdi)))
cat(sprintf("Most Literate: %s (%.1f%%)\\n", states[which.max(literacy)], max(literacy)))
cat(sprintf("Highest GDP/cap: %s (Rs %dk)\\n", states[which.max(gdp_per_cap)], max(gdp_per_cap)))
cat(sprintf("Correlation (Literacy vs GDP): r = %.3f\\n", cor(literacy, gdp_per_cap)))
cat(sprintf("Correlation (HDI vs Literacy): r = %.3f\\n", cor(hdi, literacy)))`,
          solution: `# Complete solution - the starter code IS the full dashboard. Run to see all panels.`,
          hint: "barplot() with horiz=TRUE and sorted data creates ranked charts. Bubble charts use cex for size. colorRampPalette() creates gradient colors. abline() adds reference lines for quadrant analysis.",
          expectedOutput: "4-panel India dashboard: GDP bar chart, literacy-GDP scatter, HDI comparison, population-literacy grouped bars. Demographic insights with correlations.",
          learningPoints: [
            "Sorted horizontal bars effectively rank geographic data",
            "Bubble charts encode 3+ variables in scatter plots",
            "Quadrant analysis divides scatter plots into meaningful segments",
            "Color gradients (colorRampPalette) show continuous scales",
            "Correlation analysis quantifies relationships between development indicators"
          ]
        }
      ]
    },
    unit4: {
      title: "Machine Learning Virtual Lab",
      description: "Build and evaluate ML models through 7 hands-on exercises. From regression to classification, clustering, and ensemble methods!",
      exercises: [
        {
          id: 1,
          title: "Linear Regression - House Price Prediction",
          difficulty: "Intermediate",
          instruction: "Build a linear regression model to predict house prices based on size. Learn model building, evaluation, and interpretation.",
          detailedSteps: [
            "1. Create dataset of house sizes and prices",
            "2. Visualize the relationship with scatter plot",
            "3. Build linear regression model",
            "4. Make predictions for new houses",
            "5. Calculate R-squared and RMSE",
            "6. Visualize predictions vs actual values"
          ],
          starterCode: `# Exercise 1: Linear Regression - House Price Prediction
# Predict house prices based on square footage

# Data: 15 houses
size_sqft <- c(1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800)
price_k <- c(150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430)

# Visualize relationship
plot(size_sqft, price_k,
     main = "House Size vs Price",
     xlab = "Size (sq ft)",
     ylab = "Price ($1000s)",
     pch = 19,
     col = "steelblue",
     cex = 1.5)

# Build linear model
model <- lm(price_k ~ size_sqft)

# Display model summary
print(summary(model))

# Add regression line
abline(model, col = "red", lwd = 2)

# Make predictions
new_sizes <- c(1500, 2500, 3500)
predictions <- predict(model, newdata = data.frame(size_sqft = new_sizes))

print("\\nPredictions for new houses:")
for (i in 1:length(new_sizes)) {
  print(paste(new_sizes[i], "sq ft:", round(predictions[i], 2), "K"))
}

# Calculate R-squared
r_squared <- summary(model)$r.squared
print(paste("\\nR-squared:", round(r_squared, 4)))

# Calculate RMSE
residuals <- price_k - predict(model)
rmse <- sqrt(mean(residuals^2))
print(paste("RMSE:", round(rmse, 2), "K"))

# Visualize predictions
plot(size_sqft, price_k,
     main = "Actual vs Predicted Prices",
     xlab = "Size (sq ft)",
     ylab = "Price ($1000s)",
     pch = 19,
     col = "blue")
points(size_sqft, predict(model), pch = 4, col = "red", cex = 1.5)
abline(model, col = "red", lwd = 2)
legend("topleft", 
       legend = c("Actual", "Predicted"),
       pch = c(19, 4),
       col = c("blue", "red"))
`,
          solution: `size_sqft <- c(1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800)
price_k <- c(150, 170, 190, 210, 230, 250, 270, 290, 310, 330, 350, 370, 390, 410, 430)

plot(size_sqft, price_k,
     main = "House Size vs Price",
     xlab = "Size (sq ft)",
     ylab = "Price ($1000s)",
     pch = 19,
     col = "steelblue",
     cex = 1.5)

model <- lm(price_k ~ size_sqft)
print(summary(model))
abline(model, col = "red", lwd = 2)

new_sizes <- c(1500, 2500, 3500)
predictions <- predict(model, newdata = data.frame(size_sqft = new_sizes))

print("\\nPredictions for new houses:")
for (i in 1:length(new_sizes)) {
  print(paste(new_sizes[i], "sq ft:", round(predictions[i], 2), "K"))
}

r_squared <- summary(model)$r.squared
print(paste("\\nR-squared:", round(r_squared, 4)))

residuals <- price_k - predict(model)
rmse <- sqrt(mean(residuals^2))
print(paste("RMSE:", round(rmse, 2), "K"))

plot(size_sqft, price_k,
     main = "Actual vs Predicted Prices",
     xlab = "Size (sq ft)",
     ylab = "Price ($1000s)",
     pch = 19,
     col = "blue")
points(size_sqft, predict(model), pch = 4, col = "red", cex = 1.5)
abline(model, col = "red", lwd = 2)
legend("topleft", 
       legend = c("Actual", "Predicted"),
       pch = c(19, 4),
       col = c("blue", "red"))`,
          hint: "lm(y ~ x) builds model. predict() makes predictions. summary() shows model details. R-squared measures fit quality",
          expectedOutput: "Model summary, predictions, R-squared, RMSE, and visualization",
          learningPoints: [
            "lm() performs linear regression",
            "Formula syntax: dependent ~ independent",
            "predict() generates predictions for new data",
            "R-squared: proportion of variance explained (0-1)",
            "RMSE: average prediction error",
            "Higher R-squared = better fit"
          ]
        },
        {
          id: 2,
          title: "Classification - Iris Species",
          difficulty: "Intermediate",
          instruction: "Build a classification model to identify iris species. Learn about confusion matrices and accuracy metrics.",
          detailedSteps: [
            "1. Load and explore iris dataset",
            "2. Split data into training and testing sets",
            "3. Build logistic regression model",
            "4. Make predictions on test set",
            "5. Create confusion matrix",
            "6. Calculate accuracy, precision, and recall"
          ],
          starterCode: `# Exercise 2: Classification - Iris Species
# Classify iris flowers using machine learning

# Load iris dataset
data(iris)
print(head(iris))
print(paste("Total samples:", nrow(iris)))

# For simplicity, binary classification: setosa vs others
iris$is_setosa <- ifelse(iris$Species == "setosa", 1, 0)

# Split data: 70% training, 30% testing
set.seed(123)  # For reproducibility
train_indices <- sample(1:nrow(iris), 0.7 * nrow(iris))
train_data <- iris[train_indices, ]
test_data <- iris[-train_indices, ]

print(paste("Training samples:", nrow(train_data)))
print(paste("Testing samples:", nrow(test_data)))

# Build logistic regression model
model <- glm(is_setosa ~ Sepal.Length + Sepal.Width + Petal.Length + Petal.Width,
             data = train_data,
             family = binomial)

print(summary(model))

# Make predictions
probabilities <- predict(model, newdata = test_data, type = "response")
predictions <- ifelse(probabilities > 0.5, 1, 0)

# Confusion Matrix
actual <- test_data$is_setosa
confusion_matrix <- table(Predicted = predictions, Actual = actual)
print("\\nConfusion Matrix:")
print(confusion_matrix)

# Calculate metrics
accuracy <- sum(predictions == actual) / length(actual)
true_positive <- sum(predictions == 1 & actual == 1)
false_positive <- sum(predictions == 1 & actual == 0)
false_negative <- sum(predictions == 0 & actual == 1)
true_negative <- sum(predictions == 0 & actual == 0)

precision <- true_positive / (true_positive + false_positive)
recall <- true_positive / (true_positive + false_negative)
f1_score <- 2 * (precision * recall) / (precision + recall)

print(paste("\\nAccuracy:", round(accuracy * 100, 2), "%"))
print(paste("Precision:", round(precision, 3)))
print(paste("Recall:", round(recall, 3)))
print(paste("F1-Score:", round(f1_score, 3)))
`,
          solution: `data(iris)
print(head(iris))
print(paste("Total samples:", nrow(iris)))

iris$is_setosa <- ifelse(iris$Species == "setosa", 1, 0)

set.seed(123)
train_indices <- sample(1:nrow(iris), 0.7 * nrow(iris))
train_data <- iris[train_indices, ]
test_data <- iris[-train_indices, ]

print(paste("Training samples:", nrow(train_data)))
print(paste("Testing samples:", nrow(test_data)))

model <- glm(is_setosa ~ Sepal.Length + Sepal.Width + Petal.Length + Petal.Width,
             data = train_data,
             family = binomial)

print(summary(model))

probabilities <- predict(model, newdata = test_data, type = "response")
predictions <- ifelse(probabilities > 0.5, 1, 0)

actual <- test_data$is_setosa
confusion_matrix <- table(Predicted = predictions, Actual = actual)
print("\\nConfusion Matrix:")
print(confusion_matrix)

accuracy <- sum(predictions == actual) / length(actual)
true_positive <- sum(predictions == 1 & actual == 1)
false_positive <- sum(predictions == 1 & actual == 0)
false_negative <- sum(predictions == 0 & actual == 1)
true_negative <- sum(predictions == 0 & actual == 0)

precision <- true_positive / (true_positive + false_positive)
recall <- true_positive / (true_positive + false_negative)
f1_score <- 2 * (precision * recall) / (precision + recall)

print(paste("\\nAccuracy:", round(accuracy * 100, 2), "%"))
print(paste("Precision:", round(precision, 3)))
print(paste("Recall:", round(recall, 3)))
print(paste("F1-Score:", round(f1_score, 3)))`,
          hint: "glm() with family=binomial for classification. set.seed() ensures reproducible results. Confusion matrix shows prediction quality",
          expectedOutput: "Model summary, confusion matrix, and performance metrics",
          learningPoints: [
            "glm() with family=binomial for logistic regression",
            "Train-test split prevents overfitting",
            "set.seed() makes random splits reproducible",
            "Confusion matrix shows TP, FP, TN, FN",
            "Accuracy = correct predictions / total",
            "Precision = TP / (TP + FP)",
            "Recall = TP / (TP + FN)"
          ]
        },
        {
          id: 3,
          title: "Multiple Linear Regression - Employee Salary Prediction",
          difficulty: "Advanced",
          instruction: "Build a multiple linear regression model to predict employee salaries based on experience, education, department, and performance. Perform feature analysis, check regression assumptions (normality, homoscedasticity), calculate VIF for multicollinearity, and compare models using adjusted R-squared and AIC.",
          detailedSteps: [
            "1. Create employee dataset with salary and multiple predictors",
            "2. Explore data with correlation matrix and scatter plots",
            "3. Build full multiple regression model",
            "4. Check assumptions: residual normality, homoscedasticity",
            "5. Calculate VIF to detect multicollinearity",
            "6. Perform stepwise feature selection using AIC",
            "7. Compare models and generate prediction intervals"
          ],
          starterCode: `# Exercise 3: Multiple Linear Regression - Salary Prediction
# Predict salaries using multiple features with assumption checking

# --- Step 1: Employee dataset ---
set.seed(42)
n <- 100
employees <- data.frame(
  experience = sample(1:25, n, replace=TRUE),
  education = sample(c(12,14,16,18,20), n, replace=TRUE, prob=c(0.1,0.2,0.35,0.25,0.1)),
  performance = round(runif(n, 2.0, 5.0), 1),
  dept_code = sample(1:4, n, replace=TRUE),
  certifications = sample(0:5, n, replace=TRUE)
)
employees$salary <- round(15000 + employees$experience * 3500 +
                   employees$education * 2000 + employees$performance * 5000 +
                   employees$dept_code * 1500 + employees$certifications * 1000 +
                   rnorm(n, 0, 8000))

# --- Step 2: Exploratory analysis ---
cat("=== CORRELATION MATRIX ===\\n")
cor_mat <- round(cor(employees), 3)
print(cor_mat)

par(mfrow = c(2, 2), mar = c(4, 4, 2, 1))
plot(employees$experience, employees$salary/1000, pch=20, col="#3498DB",
     xlab="Experience (years)", ylab="Salary (thousands)", main="Experience vs Salary")
plot(employees$education, employees$salary/1000, pch=20, col="#2ECC71",
     xlab="Education (years)", ylab="Salary (thousands)", main="Education vs Salary")
plot(employees$performance, employees$salary/1000, pch=20, col="#E74C3C",
     xlab="Performance Rating", ylab="Salary (thousands)", main="Performance vs Salary")
hist(employees$salary/1000, breaks=20, col="#F39C12", border="white",
     main="Salary Distribution", xlab="Salary (thousands)")
par(mfrow = c(1, 1))

# --- Step 3: Full regression model ---
model_full <- lm(salary ~ experience + education + performance + dept_code + certifications,
                 data = employees)
cat("\\n=== FULL MODEL SUMMARY ===\\n")
print(summary(model_full))

# --- Step 4: Assumption checking ---
par(mfrow = c(2, 2))
plot(model_full)
par(mfrow = c(1, 1))

# Shapiro-Wilk test on residuals
sw_test <- shapiro.test(residuals(model_full))
cat(sprintf("\\nResidual Normality (Shapiro-Wilk): W=%.4f, p=%.4f (%s)\\n",
    sw_test$statistic, sw_test$p.value,
    ifelse(sw_test$p.value > 0.05, "Normal", "Non-normal")))

# --- Step 5: VIF (manual calculation) ---
cat("\\n=== VARIANCE INFLATION FACTORS ===\\n")
predictors <- c("experience","education","performance","dept_code","certifications")
for(pred in predictors) {
  formula_vif <- as.formula(paste(pred, "~ ."))
  r2 <- summary(lm(formula_vif, data=employees[, predictors]))$r.squared
  vif_val <- 1 / (1 - r2)
  cat(sprintf("  %s: VIF = %.2f %s\\n", pred, vif_val,
      ifelse(vif_val > 5, "(HIGH - multicollinearity!)", "(OK)")))
}

# --- Step 6: Model comparison ---
model_reduced <- lm(salary ~ experience + education + performance, data = employees)
cat("\\n=== MODEL COMPARISON ===\\n")
cat(sprintf("Full Model:    Adj R2=%.4f, AIC=%.1f\\n",
    summary(model_full)$adj.r.squared, AIC(model_full)))
cat(sprintf("Reduced Model: Adj R2=%.4f, AIC=%.1f\\n",
    summary(model_reduced)$adj.r.squared, AIC(model_reduced)))
cat(sprintf("Better Model: %s\\n",
    ifelse(AIC(model_full) < AIC(model_reduced), "Full", "Reduced")))

# --- Step 7: Predictions ---
new_emp <- data.frame(experience=10, education=16, performance=4.0,
                      dept_code=2, certifications=3)
pred <- predict(model_full, new_emp, interval="prediction", level=0.95)
cat(sprintf("\\nPrediction for new employee:\\n"))
cat(sprintf("  Predicted Salary: Rs %s\\n", format(round(pred[1]), big.mark=",")))
cat(sprintf("  95%% Prediction Interval: [Rs %s, Rs %s]\\n",
    format(round(pred[2]), big.mark=","), format(round(pred[3]), big.mark=",")))`,
          solution: `# Complete solution - the starter code IS the full analysis. Run to see all outputs.`,
          hint: "lm() fits linear models. summary() shows coefficients and R-squared. VIF = 1/(1-R2) from regressing each predictor on others. AIC() compares models (lower is better). predict() with interval='prediction' gives confidence bands.",
          expectedOutput: "Correlation matrix, 4-panel scatter plots, full model summary with coefficients, diagnostic plots, VIF values, model comparison (AIC), salary prediction with 95% interval",
          learningPoints: [
            "Multiple regression models multiple predictors simultaneously",
            "VIF detects multicollinearity between predictors",
            "Diagnostic plots check regression assumptions",
            "AIC enables objective model comparison",
            "Prediction intervals quantify uncertainty in forecasts"
          ]
        },
        {
          id: 4,
          title: "Decision Tree & Random Forest - Customer Churn Prediction",
          difficulty: "Advanced",
          instruction: "Build decision tree and random forest models to predict customer churn for a telecom company. Compare model performance, analyze feature importance, tune hyperparameters, and generate business recommendations based on churn drivers.",
          detailedSteps: [
            "1. Create telecom customer dataset with usage and demographic features",
            "2. Split data into training (70%) and testing (30%) sets",
            "3. Build a decision tree classifier and visualize rules",
            "4. Build a random forest with multiple trees",
            "5. Compare accuracy, precision, recall between models",
            "6. Analyze feature importance rankings",
            "7. Generate churn risk scores and business recommendations"
          ],
          starterCode: `# Exercise 4: Decision Tree & Random Forest - Churn Prediction
# Predict customer churn using tree-based models

# --- Step 1: Telecom customer data ---
set.seed(123)
n <- 300
customers <- data.frame(
  tenure_months = sample(1:72, n, replace=TRUE),
  monthly_charge = round(runif(n, 20, 120), 2),
  total_charges = NA,
  contract_type = sample(c(0,1,2), n, replace=TRUE, prob=c(0.4,0.35,0.25)),
  tech_support = sample(c(0,1), n, replace=TRUE),
  online_security = sample(c(0,1), n, replace=TRUE),
  num_complaints = sample(0:8, n, replace=TRUE, prob=c(0.3,0.2,0.15,0.1,0.08,0.07,0.05,0.03,0.02)),
  payment_delay = sample(0:5, n, replace=TRUE)
)
customers$total_charges <- customers$tenure_months * customers$monthly_charge

# Generate churn based on features
churn_prob <- 1 / (1 + exp(-(
  -2 + customers$num_complaints * 0.5 - customers$tenure_months * 0.03 +
  customers$monthly_charge * 0.01 - customers$contract_type * 0.8 -
  customers$tech_support * 0.5 + customers$payment_delay * 0.3)))
customers$churn <- ifelse(runif(n) < churn_prob, 1, 0)

cat(sprintf("Dataset: %d customers, Churn Rate: %.1f%%\\n",
    n, mean(customers$churn)*100))

# --- Step 2: Train/Test split ---
set.seed(42)
train_idx <- sample(1:n, 0.7*n)
train <- customers[train_idx, ]
test <- customers[-train_idx, ]
cat(sprintf("Train: %d, Test: %d\\n", nrow(train), nrow(test)))

# --- Step 3: Decision Tree (manual implementation) ---
# Simple tree: split on complaints and tenure
tree_predict <- function(complaints, tenure, contract) {
  if(complaints >= 4) return(1)
  if(tenure < 12 & contract == 0) return(1)
  if(complaints >= 2 & tenure < 24) return(1)
  return(0)
}

train$tree_pred <- mapply(tree_predict, train$num_complaints,
                          train$tenure_months, train$contract_type)
test$tree_pred <- mapply(tree_predict, test$num_complaints,
                         test$tenure_months, test$contract_type)

# --- Step 4: Random Forest (manual ensemble of rule-based trees) ---
# Simulate multiple trees with different feature subsets
forest_predict <- function(data) {
  tree1 <- ifelse(data$num_complaints >= 3 & data$tenure_months < 24, 1, 0)
  tree2 <- ifelse(data$monthly_charge > 80 & data$contract_type == 0, 1, 0)
  tree3 <- ifelse(data$payment_delay >= 3 | data$num_complaints >= 5, 1, 0)
  tree4 <- ifelse(data$tenure_months < 12 & data$tech_support == 0, 1, 0)
  tree5 <- ifelse(data$num_complaints >= 2 & data$online_security == 0, 1, 0)
  
  votes <- tree1 + tree2 + tree3 + tree4 + tree5
  return(ifelse(votes >= 3, 1, 0))  # majority vote
}

train$rf_pred <- forest_predict(train)
test$rf_pred <- forest_predict(test)

# --- Step 5: Model evaluation ---
eval_model <- function(actual, predicted, name) {
  tp <- sum(actual == 1 & predicted == 1)
  tn <- sum(actual == 0 & predicted == 0)
  fp <- sum(actual == 0 & predicted == 1)
  fn <- sum(actual == 1 & predicted == 0)
  accuracy <- (tp + tn) / length(actual)
  precision <- ifelse(tp + fp > 0, tp / (tp + fp), 0)
  recall <- ifelse(tp + fn > 0, tp / (tp + fn), 0)
  f1 <- ifelse(precision + recall > 0, 2*precision*recall/(precision+recall), 0)
  cat(sprintf("\\n=== %s ===\\n", name))
  cat(sprintf("Confusion Matrix:\\n"))
  cat(sprintf("  Predicted:  No Churn  Churn\\n"))
  cat(sprintf("  No Churn:   %4d     %4d\\n", tn, fp))
  cat(sprintf("  Churn:      %4d     %4d\\n", fn, tp))
  cat(sprintf("Accuracy:  %.3f\\n", accuracy))
  cat(sprintf("Precision: %.3f\\n", precision))
  cat(sprintf("Recall:    %.3f\\n", recall))
  cat(sprintf("F1-Score:  %.3f\\n", f1))
  return(c(accuracy, precision, recall, f1))
}

cat("\\n========== MODEL COMPARISON (Test Set) ==========")
dt_metrics <- eval_model(test$churn, test$tree_pred, "DECISION TREE")
rf_metrics <- eval_model(test$churn, test$rf_pred, "RANDOM FOREST")

# --- Step 6: Feature importance (based on correlation with churn) ---
cat("\\n\\n=== FEATURE IMPORTANCE ===\\n")
features <- c("num_complaints","tenure_months","monthly_charge",
              "contract_type","tech_support","payment_delay","online_security")
importance <- abs(sapply(features, function(f) cor(customers[[f]], customers$churn)))
imp_sorted <- sort(importance, decreasing=TRUE)
for(i in 1:length(imp_sorted)) {
  bar <- paste(rep("#", round(imp_sorted[i]*50)), collapse="")
  cat(sprintf("  %-18s: %.3f %s\\n", names(imp_sorted)[i], imp_sorted[i], bar))
}

# --- Step 7: Business recommendations ---
cat("\\n=== CHURN RISK SEGMENTS ===\\n")
customers$risk_score <- (customers$num_complaints/8*30 +
                        (1-customers$tenure_months/72)*25 +
                        customers$monthly_charge/120*20 +
                        (1-customers$contract_type/2)*15 +
                        customers$payment_delay/5*10)
customers$risk_level <- ifelse(customers$risk_score > 60, "HIGH",
                        ifelse(customers$risk_score > 40, "MEDIUM", "LOW"))
risk_tbl <- table(customers$risk_level)
for(r in c("HIGH","MEDIUM","LOW")) {
  cat(sprintf("  %s Risk: %d customers (%.1f%%)\\n", r, risk_tbl[r], risk_tbl[r]/n*100))
}`,
          solution: `# Complete solution - the starter code IS the full analysis. Run to see all outputs.`,
          hint: "Decision trees use if-else rules to split data. Random forests combine multiple trees via majority voting. Confusion matrix: rows=actual, cols=predicted. F1 = 2*precision*recall/(precision+recall). Feature importance can be approximated by correlation with target.",
          expectedOutput: "Dataset summary, train/test split, DECISION TREE confusion matrix and metrics, RANDOM FOREST confusion matrix and metrics, FEATURE IMPORTANCE rankings, CHURN RISK SEGMENTS",
          learningPoints: [
            "Decision trees create interpretable if-else classification rules",
            "Random forests combine multiple trees for better accuracy",
            "Majority voting reduces individual tree overfitting",
            "Confusion matrices reveal TP, FP, TN, FN trade-offs",
            "Feature importance identifies key drivers for business action"
          ]
        },
        {
          id: 5,
          title: "K-Means Clustering - Customer Segmentation",
          difficulty: "Advanced",
          instruction: "Implement K-Means clustering from scratch to segment retail customers based on purchasing behavior. Determine optimal K using the elbow method, visualize clusters in 2D, profile each segment, and generate targeted marketing recommendations for each customer group.",
          detailedSteps: [
            "1. Create customer purchasing dataset (frequency, monetary, recency)",
            "2. Standardize features for fair distance calculation",
            "3. Implement elbow method to find optimal K",
            "4. Run K-Means clustering with optimal K",
            "5. Visualize clusters in 2D scatter plots",
            "6. Profile each cluster with descriptive statistics",
            "7. Generate marketing strategy per segment"
          ],
          starterCode: `# Exercise 5: K-Means Clustering - Customer Segmentation
# Segment customers using unsupervised learning

# --- Step 1: Customer purchasing data ---
set.seed(42)
n <- 200
customers <- data.frame(
  cust_id = paste0("C", sprintf("%04d", 1:n)),
  frequency = c(sample(1:5, 60, replace=TRUE),
                sample(8:15, 70, replace=TRUE),
                sample(20:40, 70, replace=TRUE)),
  monetary = c(round(runif(60, 50, 500)),
               round(runif(70, 800, 3000)),
               round(runif(70, 3000, 15000))),
  recency = c(sample(60:180, 60, replace=TRUE),
              sample(15:60, 70, replace=TRUE),
              sample(1:20, 70, replace=TRUE))
)
customers$avg_order <- round(customers$monetary / customers$frequency, 2)

cat(sprintf("Dataset: %d customers\\n", n))
cat(sprintf("Frequency: %.1f - %.1f (mean=%.1f)\\n",
    min(customers$frequency), max(customers$frequency), mean(customers$frequency)))
cat(sprintf("Monetary: Rs %.0f - Rs %.0f (mean=Rs %.0f)\\n",
    min(customers$monetary), max(customers$monetary), mean(customers$monetary)))

# --- Step 2: Standardize features ---
features <- customers[, c("frequency", "monetary", "recency")]
scaled_features <- as.data.frame(scale(features))
cat("\\nStandardized features (mean~0, sd~1):\\n")
cat(sprintf("  Frequency: mean=%.2f, sd=%.2f\\n", mean(scaled_features$frequency), sd(scaled_features$frequency)))
cat(sprintf("  Monetary:  mean=%.2f, sd=%.2f\\n", mean(scaled_features$monetary), sd(scaled_features$monetary)))
cat(sprintf("  Recency:   mean=%.2f, sd=%.2f\\n", mean(scaled_features$recency), sd(scaled_features$recency)))

# --- Step 3: Elbow method ---
wss <- numeric(10)
for(k in 1:10) {
  km <- kmeans(scaled_features, centers=k, nstart=10)
  wss[k] <- km$tot.withinss
}

par(mfrow = c(2, 2), mar = c(4, 4, 3, 1))
plot(1:10, wss, type="b", pch=19, col="#3498DB",
     main="Elbow Method", xlab="Number of Clusters (K)",
     ylab="Within-Cluster SS")
abline(v=3, col="red", lty=2)
text(3.5, wss[3], "Optimal K=3", col="red", cex=0.8)

# --- Step 4: K-Means with K=3 ---
set.seed(42)
km_result <- kmeans(scaled_features, centers=3, nstart=25)
customers$cluster <- km_result$cluster

# --- Step 5: Visualize clusters ---
cluster_cols <- c("#E74C3C", "#3498DB", "#2ECC71")

plot(customers$frequency, customers$monetary,
     col=cluster_cols[customers$cluster], pch=19, cex=0.8,
     main="Clusters: Frequency vs Monetary",
     xlab="Purchase Frequency", ylab="Total Monetary (Rs)")
points(km_result$centers[,1]*sd(features$frequency)+mean(features$frequency),
       km_result$centers[,2]*sd(features$monetary)+mean(features$monetary),
       pch=8, cex=3, col="black", lwd=3)
legend("topleft", paste("Cluster", 1:3), col=cluster_cols, pch=19, cex=0.7)

plot(customers$recency, customers$monetary,
     col=cluster_cols[customers$cluster], pch=19, cex=0.8,
     main="Clusters: Recency vs Monetary",
     xlab="Days Since Last Purchase", ylab="Total Monetary (Rs)")

plot(customers$frequency, customers$recency,
     col=cluster_cols[customers$cluster], pch=19, cex=0.8,
     main="Clusters: Frequency vs Recency",
     xlab="Purchase Frequency", ylab="Days Since Last Purchase")

par(mfrow = c(1, 1))

# --- Step 6: Cluster profiles ---
cat("\\n=== CLUSTER PROFILES ===\\n")
for(k in 1:3) {
  cl <- customers[customers$cluster == k, ]
  cat(sprintf("\\nCluster %d (%d customers, %.0f%%):\\n", k, nrow(cl), nrow(cl)/n*100))
  cat(sprintf("  Avg Frequency: %.1f purchases\\n", mean(cl$frequency)))
  cat(sprintf("  Avg Monetary:  Rs %.0f\\n", mean(cl$monetary)))
  cat(sprintf("  Avg Recency:   %.0f days\\n", mean(cl$recency)))
  cat(sprintf("  Avg Order Val: Rs %.0f\\n", mean(cl$avg_order)))
}

# --- Step 7: Marketing strategy ---
cat("\\n=== MARKETING RECOMMENDATIONS ===\\n")
segment_names <- c("Budget Shoppers", "Regular Buyers", "Premium Customers")
strategies <- c(
  "Discount coupons, flash sales, loyalty program enrollment",
  "Cross-sell campaigns, bundle offers, referral rewards",
  "VIP treatment, early access, personal account manager"
)
for(k in 1:3) {
  cl <- customers[customers$cluster == k, ]
  cat(sprintf("\\n%s (Cluster %d):\\n", segment_names[k], k))
  cat(sprintf("  Strategy: %s\\n", strategies[k]))
  cat(sprintf("  Revenue Potential: Rs %s\\n", format(sum(cl$monetary), big.mark=",")))
}`,
          solution: `# Complete solution - the starter code IS the full analysis. Run to see all outputs.`,
          hint: "scale() standardizes features. kmeans() performs clustering. The elbow method plots within-cluster SS vs K. Cluster centers need to be un-scaled for interpretation. table() counts cluster sizes.",
          expectedOutput: "Elbow method plot, 3 cluster scatter plots, CLUSTER PROFILES with averages, MARKETING RECOMMENDATIONS per segment with revenue potential",
          learningPoints: [
            "K-Means groups data points by minimizing within-cluster distance",
            "Feature standardization ensures equal weighting across variables",
            "Elbow method identifies optimal number of clusters",
            "Cluster profiling translates statistics into business segments",
            "Unsupervised learning discovers patterns without labeled data"
          ]
        },
        {
          id: 6,
          title: "Logistic Regression - Disease Risk Prediction",
          difficulty: "Advanced",
          instruction: "Build a logistic regression model to predict diabetes risk based on patient health metrics. Implement the full ML pipeline: data preprocessing, model training, ROC curve analysis, threshold optimization, and risk stratification. Calculate odds ratios to interpret feature effects on disease probability.",
          detailedSteps: [
            "1. Create patient health dataset with diabetes outcome",
            "2. Explore data distributions and class balance",
            "3. Build logistic regression model with glm()",
            "4. Interpret coefficients as odds ratios",
            "5. Plot ROC curve and calculate AUC",
            "6. Optimize classification threshold",
            "7. Generate patient risk scores and stratification"
          ],
          starterCode: `# Exercise 6: Logistic Regression - Disease Risk Prediction
# Predict diabetes risk with interpretable ML model

# --- Step 1: Patient health data ---
set.seed(99)
n <- 250
patients <- data.frame(
  age = sample(25:75, n, replace=TRUE),
  bmi = round(rnorm(n, 27, 5), 1),
  glucose = round(rnorm(n, 110, 30)),
  bp_systolic = sample(100:170, n, replace=TRUE),
  family_history = sample(c(0,1), n, replace=TRUE, prob=c(0.6,0.4)),
  physical_activity = sample(0:7, n, replace=TRUE),
  smoking = sample(c(0,1), n, replace=TRUE, prob=c(0.7,0.3))
)
patients$bmi <- pmax(patients$bmi, 16)
patients$glucose <- pmax(patients$glucose, 60)

# Generate diabetes outcome
log_odds <- -8 + patients$age*0.04 + patients$bmi*0.08 +
            patients$glucose*0.03 + patients$bp_systolic*0.01 +
            patients$family_history*0.8 - patients$physical_activity*0.15 +
            patients$smoking*0.5
patients$diabetes <- ifelse(runif(n) < 1/(1+exp(-log_odds)), 1, 0)

cat(sprintf("Dataset: %d patients, Diabetes Rate: %.1f%%\\n", n, mean(patients$diabetes)*100))

# --- Step 2: Exploratory analysis ---
cat("\\n=== FEATURE MEANS BY OUTCOME ===\\n")
features <- c("age","bmi","glucose","bp_systolic","family_history","physical_activity","smoking")
for(f in features) {
  m0 <- mean(patients[[f]][patients$diabetes==0])
  m1 <- mean(patients[[f]][patients$diabetes==1])
  cat(sprintf("  %-20s: No Diabetes=%.1f, Diabetes=%.1f\\n", f, m0, m1))
}

# --- Step 3: Train/Test split & model ---
set.seed(42)
train_idx <- sample(1:n, 0.7*n)
train <- patients[train_idx, ]
test <- patients[-train_idx, ]

model <- glm(diabetes ~ age + bmi + glucose + bp_systolic +
             family_history + physical_activity + smoking,
             data=train, family=binomial)

cat("\\n=== LOGISTIC REGRESSION SUMMARY ===\\n")
print(summary(model))

# --- Step 4: Odds ratios ---
cat("\\n=== ODDS RATIOS ===\\n")
or <- exp(coef(model))
ci <- exp(confint.default(model))
for(i in 2:length(or)) {
  cat(sprintf("  %-20s: OR=%.3f [%.3f, %.3f] %s\\n",
      names(or)[i], or[i], ci[i,1], ci[i,2],
      ifelse(ci[i,1] > 1, "RISK FACTOR", ifelse(ci[i,2] < 1, "PROTECTIVE", "Not significant"))))
}

# --- Step 5: Predictions & ROC curve ---
test$prob <- predict(model, test, type="response")

# Manual ROC curve
thresholds <- seq(0, 1, 0.01)
tpr <- fpr <- numeric(length(thresholds))
for(i in 1:length(thresholds)) {
  pred <- ifelse(test$prob >= thresholds[i], 1, 0)
  tp <- sum(pred==1 & test$diabetes==1)
  fp <- sum(pred==1 & test$diabetes==0)
  fn <- sum(pred==0 & test$diabetes==1)
  tn <- sum(pred==0 & test$diabetes==0)
  tpr[i] <- tp / max(1, tp + fn)
  fpr[i] <- fp / max(1, fp + tn)
}

par(mfrow = c(1, 2), mar = c(4, 4, 3, 1))
plot(fpr, tpr, type="l", col="#E74C3C", lwd=2,
     main="ROC Curve", xlab="False Positive Rate", ylab="True Positive Rate")
abline(0, 1, col="gray", lty=2)

# AUC (trapezoidal)
auc <- sum(diff(sort(fpr)) * (head(sort(tpr),-1) + tail(sort(tpr),-1))/2)
auc <- abs(auc)
text(0.6, 0.3, sprintf("AUC = %.3f", auc), cex=1.2, col="#E74C3C")

# --- Step 6: Threshold optimization ---
f1_scores <- numeric(length(thresholds))
for(i in 1:length(thresholds)) {
  pred <- ifelse(test$prob >= thresholds[i], 1, 0)
  tp <- sum(pred==1 & test$diabetes==1)
  fp <- sum(pred==1 & test$diabetes==0)
  fn <- sum(pred==0 & test$diabetes==1)
  prec <- ifelse(tp+fp>0, tp/(tp+fp), 0)
  rec <- ifelse(tp+fn>0, tp/(tp+fn), 0)
  f1_scores[i] <- ifelse(prec+rec>0, 2*prec*rec/(prec+rec), 0)
}
best_threshold <- thresholds[which.max(f1_scores)]

plot(thresholds, f1_scores, type="l", col="#3498DB", lwd=2,
     main="F1 Score vs Threshold", xlab="Threshold", ylab="F1 Score")
abline(v=best_threshold, col="red", lty=2)
text(best_threshold+0.05, max(f1_scores), sprintf("Best=%.2f", best_threshold), col="red")
par(mfrow = c(1, 1))

# --- Step 7: Risk stratification ---
test$risk_class <- ifelse(test$prob > 0.7, "HIGH",
                   ifelse(test$prob > 0.4, "MEDIUM", "LOW"))
cat("\\n=== RISK STRATIFICATION ===\\n")
for(r in c("HIGH","MEDIUM","LOW")) {
  grp <- test[test$risk_class == r, ]
  actual_rate <- mean(grp$diabetes) * 100
  cat(sprintf("  %s Risk: %d patients, Actual Diabetes Rate: %.1f%%\\n",
      r, nrow(grp), actual_rate))
}

cat(sprintf("\\nOptimal Threshold: %.2f (F1=%.3f)\\n", best_threshold, max(f1_scores)))`,
          solution: `# Complete solution - the starter code IS the full pipeline. Run to see all outputs.`,
          hint: "glm() with family=binomial fits logistic regression. predict(type='response') gives probabilities. exp(coef()) converts log-odds to odds ratios. ROC plots TPR vs FPR at different thresholds.",
          expectedOutput: "Feature means by outcome, logistic regression summary, ODDS RATIOS with confidence intervals, ROC curve with AUC, F1 vs threshold plot, RISK STRATIFICATION with actual diabetes rates",
          learningPoints: [
            "Logistic regression models binary outcomes using log-odds",
            "Odds ratios quantify feature effects on outcome probability",
            "ROC curves visualize classifier performance across thresholds",
            "AUC summarizes overall model discrimination ability",
            "Threshold optimization balances precision and recall"
          ]
        },
        {
          id: 7,
          title: "Complete ML Pipeline - Student Performance Prediction",
          difficulty: "Advanced",
          instruction: "Build an end-to-end machine learning pipeline that predicts student exam performance. Implement data preprocessing, feature engineering, multiple model comparison (Linear Regression, KNN, Decision Rules), cross-validation, ensemble predictions, and model deployment simulation with new student predictions.",
          detailedSteps: [
            "1. Create comprehensive student dataset with academic and behavioral features",
            "2. Engineer new features from existing data",
            "3. Build 3 different prediction models",
            "4. Implement k-fold cross-validation manually",
            "5. Create ensemble model combining all three",
            "6. Compare all models on test set with multiple metrics",
            "7. Deploy: predict scores for new incoming students"
          ],
          starterCode: `# Exercise 7: Complete ML Pipeline - Student Performance
# End-to-end ML with model comparison and ensemble

# --- Step 1: Student dataset ---
set.seed(42)
n <- 200
students <- data.frame(
  study_hours = round(runif(n, 0.5, 8), 1),
  attendance = sample(50:100, n, replace=TRUE),
  prev_gpa = round(runif(n, 1.5, 4.0), 2),
  sleep_hours = round(rnorm(n, 7, 1.5), 1),
  extracurricular = sample(0:5, n, replace=TRUE),
  parent_education = sample(c(10,12,14,16,18), n, replace=TRUE, prob=c(0.15,0.25,0.3,0.2,0.1)),
  internet_hours = round(runif(n, 0, 6), 1)
)
students$sleep_hours <- pmax(pmin(students$sleep_hours, 12), 3)

# Generate exam score
students$exam_score <- round(20 + students$study_hours * 5 +
                      students$attendance * 0.2 + students$prev_gpa * 8 -
                      abs(students$sleep_hours - 7) * 2 +
                      students$parent_education * 0.3 -
                      students$internet_hours * 1.5 +
                      rnorm(n, 0, 5))
students$exam_score <- pmax(pmin(students$exam_score, 100), 15)

# --- Step 2: Feature engineering ---
students$study_efficiency <- round(students$study_hours * students$attendance / 100, 2)
students$sleep_quality <- ifelse(students$sleep_hours >= 6 & students$sleep_hours <= 8, 1, 0)
students$screen_ratio <- round(students$internet_hours / (students$study_hours + 0.1), 2)

cat("=== DATASET OVERVIEW ===\\n")
cat(sprintf("Students: %d, Features: %d\\n", nrow(students), ncol(students)-1))
cat(sprintf("Exam Score: Mean=%.1f, SD=%.1f, Range=[%.0f, %.0f]\\n",
    mean(students$exam_score), sd(students$exam_score),
    min(students$exam_score), max(students$exam_score)))

# --- Step 3: Train/Test split ---
set.seed(42)
train_idx <- sample(1:n, 0.7*n)
train <- students[train_idx, ]
test <- students[-train_idx, ]

features <- c("study_hours","attendance","prev_gpa","sleep_hours",
              "extracurricular","parent_education","internet_hours",
              "study_efficiency","sleep_quality","screen_ratio")

# Model 1: Linear Regression
model_lm <- lm(exam_score ~ ., data=train[, c(features, "exam_score")])
test$pred_lm <- predict(model_lm, test)

# Model 2: KNN (manual implementation)
knn_predict <- function(train_data, test_point, k=5) {
  distances <- sqrt(rowSums((sweep(as.matrix(train_data[,features]),
                    2, as.numeric(test_point[features])))^2))
  nearest <- order(distances)[1:k]
  return(mean(train_data$exam_score[nearest]))
}

# Scale for KNN
train_scaled <- train
test_scaled <- test
for(f in features) {
  mu <- mean(train[[f]]); s <- sd(train[[f]])
  train_scaled[[f]] <- (train[[f]] - mu) / max(s, 0.001)
  test_scaled[[f]] <- (test[[f]] - mu) / max(s, 0.001)
}

test$pred_knn <- sapply(1:nrow(test_scaled), function(i) {
  knn_predict(train_scaled, test_scaled[i,], k=5)
})

# Model 3: Rule-based (decision rules)
test$pred_rules <- 25 +
  ifelse(test$study_hours > 4, 15, ifelse(test$study_hours > 2, 8, 0)) +
  ifelse(test$attendance > 85, 12, ifelse(test$attendance > 70, 6, 0)) +
  test$prev_gpa * 7 +
  ifelse(test$sleep_quality == 1, 5, -3) -
  test$internet_hours * 1.2

# --- Step 4: Ensemble (average of 3 models) ---
test$pred_ensemble <- round((test$pred_lm + test$pred_knn + test$pred_rules) / 3, 1)

# --- Step 5: Evaluation ---
calc_metrics <- function(actual, predicted, name) {
  rmse <- sqrt(mean((actual - predicted)^2))
  mae <- mean(abs(actual - predicted))
  r2 <- 1 - sum((actual - predicted)^2) / sum((actual - mean(actual))^2)
  cat(sprintf("  %-15s: RMSE=%.2f, MAE=%.2f, R2=%.3f\\n", name, rmse, mae, r2))
  return(c(rmse, mae, r2))
}

cat("\\n=== MODEL COMPARISON (Test Set) ===\\n")
m1 <- calc_metrics(test$exam_score, test$pred_lm, "Linear Reg")
m2 <- calc_metrics(test$exam_score, test$pred_knn, "KNN (k=5)")
m3 <- calc_metrics(test$exam_score, test$pred_rules, "Rule-Based")
m4 <- calc_metrics(test$exam_score, test$pred_ensemble, "Ensemble")

# --- Step 6: Visualization ---
par(mfrow = c(1, 2), mar = c(4, 4, 3, 1))
plot(test$exam_score, test$pred_ensemble, pch=20, col="#3498DB",
     main="Ensemble: Predicted vs Actual",
     xlab="Actual Score", ylab="Predicted Score")
abline(0, 1, col="red", lwd=2)

# Model comparison bar chart
model_names <- c("LinReg","KNN","Rules","Ensemble")
r2_vals <- c(m1[3], m2[3], m3[3], m4[3])
barplot(r2_vals, names.arg=model_names, col=c("#3498DB","#2ECC71","#F39C12","#E74C3C"),
        main="R-squared Comparison", ylab="R2", ylim=c(0,1))
par(mfrow = c(1, 1))

# --- Step 7: Predict for new students ---
cat("\\n=== PREDICTIONS FOR NEW STUDENTS ===\\n")
new_students <- data.frame(
  study_hours=c(6,2,4.5), attendance=c(92,65,80),
  prev_gpa=c(3.5,2.0,3.0), sleep_hours=c(7,5,8),
  extracurricular=c(2,0,3), parent_education=c(16,12,14),
  internet_hours=c(1,5,2.5),
  study_efficiency=c(5.52,1.3,3.6), sleep_quality=c(1,0,1),
  screen_ratio=c(0.17,2.5,0.56)
)
for(i in 1:3) {
  pred <- predict(model_lm, new_students[i,])
  cat(sprintf("  Student %d: Study=%.1fh, Attend=%d%%, GPA=%.1f -> Predicted: %.1f/100\\n",
      i, new_students$study_hours[i], new_students$attendance[i],
      new_students$prev_gpa[i], pred))
}`,
          solution: `# Complete solution - the starter code IS the full pipeline. Run to see all outputs.`,
          hint: "lm() for linear regression. KNN uses Euclidean distance to find nearest neighbors. Ensemble averages multiple model predictions. RMSE = sqrt(mean(errors^2)). R2 = 1 - SS_res/SS_tot.",
          expectedOutput: "Dataset overview, MODEL COMPARISON table (RMSE, MAE, R2 for all 4 models), predicted vs actual scatter plot, R2 bar chart, predictions for 3 new students",
          learningPoints: [
            "Feature engineering creates informative derived variables",
            "Multiple models capture different patterns in data",
            "KNN makes predictions based on similar training examples",
            "Ensemble methods combine models for better predictions",
            "RMSE, MAE, and R2 evaluate regression model quality"
          ]
        }
      ]
    }
  },

  render: (unitId) => {
    const lab = VirtualLab.labs[`unit${unitId}`];
    if (!lab) return '<p>Lab not available for this unit.</p>';

    VirtualLab.currentUnit = unitId;
    VirtualLab.currentExercise = 0;

    const firstEx = lab.exercises[0];

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
                                    <div style="flex: 1;">
                                        <div class="exercise-title">${ex.title}</div>
                                        <div class="exercise-difficulty">${ex.difficulty || 'Beginner'}</div>
                                    </div>
                                    <i data-lucide="check-circle" class="exercise-check hidden"></i>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="lab-workspace">
                        <div class="exercise-header">
                            <div>
                                <h3 id="current-exercise-title">${firstEx.title}</h3>
                                <span class="difficulty-badge" id="difficulty-badge">${firstEx.difficulty || 'Beginner'}</span>
                            </div>
                            <div class="exercise-actions">
                                <button class="btn-hint" onclick="VirtualLab.showHint()">
                                    <i data-lucide="lightbulb"></i> Hint
                                </button>
                                <button class="btn-steps" onclick="VirtualLab.showSteps()">
                                    <i data-lucide="list"></i> Steps
                                </button>
                                <button class="btn-solution" onclick="VirtualLab.showSolution()">
                                    <i data-lucide="eye"></i> Solution
                                </button>
                            </div>
                        </div>

                        <div class="exercise-instruction" id="exercise-instruction">
                            ${firstEx.instruction}
                        </div>

                        <div class="code-editor-container">
                            <div class="editor-header">
                                <span>R Code Editor</span>
                                <button class="btn-run" onclick="VirtualLab.runCode()">
                                    <i data-lucide="play"></i> Run Code
                                </button>
                            </div>
                            <textarea id="code-editor" class="code-editor" spellcheck="false">${firstEx.starterCode}</textarea>
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
    document.getElementById('difficulty-badge').textContent = exercise.difficulty || 'Beginner';
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

  showSteps: () => {
    const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
    const exercise = lab.exercises[VirtualLab.currentExercise];
    if (exercise.detailedSteps) {
      const steps = exercise.detailedSteps.join('\n');
      alert(`📋 Detailed Steps:\n\n${steps}`);
    } else {
      alert('No detailed steps available for this exercise.');
    }
  },

  showSolution: () => {
    const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
    const exercise = lab.exercises[VirtualLab.currentExercise];
    if (confirm('Are you sure you want to see the solution? Try solving it yourself first!')) {
      document.getElementById('code-editor').value = exercise.solution;

      // Show learning points if available
      if (exercise.learningPoints) {
        setTimeout(() => {
          const points = exercise.learningPoints.join('\n• ');
          alert(`✅ Solution loaded!\n\n📚 Key Learning Points:\n• ${points}`);
        }, 500);
      }
    }
  },

  runCode: () => {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('code-output');
    const lab = VirtualLab.labs[`unit${VirtualLab.currentUnit}`];
    const exercise = lab.exercises[VirtualLab.currentExercise];

    // Simulate R code execution
    output.innerHTML = `
            <div class="output-message output-info">
                <i data-lucide="info"></i>
                <div>
                    <strong>Simulated Execution</strong>
                    <p>In a production environment, this would execute your R code on a server.</p>
                    <p><strong>Expected Output:</strong> ${exercise.expectedOutput}</p>
                    <p>Compare your code with the solution to verify correctness.</p>
                </div>
            </div>
            <div class="output-code">
                <pre><code class="language-r">${code}</code></pre>
            </div>
            ${exercise.learningPoints ? `
            <div class="learning-points">
                <h4>💡 Key Learning Points:</h4>
                <ul>
                    ${exercise.learningPoints.map(point => `<li>${point}</li>`).join('')}
                </ul>
            </div>
            ` : ''}
        `;

    lucide.createIcons();
    if (window.Prism) window.Prism.highlightAll();
  },

  clearOutput: () => {
    document.getElementById('code-output').innerHTML = '<p class="output-placeholder">Run your code to see output here...</p>';
  }
};
