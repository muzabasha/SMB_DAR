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
        }
      ]
    },
    unit3: {
      title: "Data Visualization Virtual Lab",
      description: "Master data visualization through 8 comprehensive exercises. Create professional, publication-ready charts!",
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
        }
      ]
    },
    unit4: {
      title: "Machine Learning Virtual Lab",
      description: "Build and evaluate ML models through 8 hands-on exercises. From regression to classification!",
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
