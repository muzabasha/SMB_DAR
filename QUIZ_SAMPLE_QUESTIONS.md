# Quiz Sample Questions - All Units

## Unit 1: Introduction to Data Analytics

### Question 1: Big Data Definition
**Question:** What does 'Big Data' refer to?

**Options:**
- A) Data stored in large databases
- B) Data characterized by Volume, Velocity, and Variety (3 V's) ✅
- C) Data that is difficult to analyze
- D) Data from large companies only

**Explanation:** Big Data is defined by the 3 V's: Volume (large amounts), Velocity (fast generation), and Variety (different types). This framework helps us understand the scale and complexity of modern data.

**Difficulty:** Easy

---

### Question 2: Data Types
**Question:** Which of the following is an example of unstructured data?

**Options:**
- A) Customer database in Excel
- B) Social media posts and images ✅
- C) Bank transaction records
- D) Employee payroll spreadsheet

**Explanation:** Unstructured data doesn't fit neatly into rows and columns. Social media posts, images, videos, and text documents are unstructured. Structured data (like databases and spreadsheets) has a defined format.

**Difficulty:** Easy

---

### Question 3: Descriptive Analytics
**Question:** What is the primary goal of descriptive analytics?

**Options:**
- A) To predict future trends
- B) To understand what happened in the past ✅
- C) To recommend actions
- D) To classify data into categories

**Explanation:** Descriptive analytics answers 'What happened?' by summarizing historical data. It uses techniques like aggregation and data mining. Predictive analytics answers 'What will happen?', and prescriptive analytics answers 'What should we do?'

**Difficulty:** Medium

---

### Question 4: Industry Applications
**Question:** Which industry has NOT been significantly impacted by data analytics?

**Options:**
- A) Healthcare - predicting disease outbreaks
- B) Finance - fraud detection
- C) Retail - customer behavior analysis
- D) All industries have been impacted by data analytics ✅

**Explanation:** Data analytics has revolutionized virtually every industry - healthcare uses it for diagnostics, finance for risk management, retail for personalization, manufacturing for quality control, and more. It's a universal tool.

**Difficulty:** Medium

---

### Question 5: Data vs Information
**Question:** What is the difference between data and information?

**Options:**
- A) Data is processed; information is raw
- B) Data is raw facts; information is processed, meaningful data ✅
- C) They are the same thing
- D) Information is always numerical

**Explanation:** Data is raw, unprocessed facts (like '25, 30, 28'). Information is data that has been processed and given context (like 'Average age is 27.7 years'). Analytics transforms data into information.

**Difficulty:** Easy

---

## Unit 2: R Programming Basics

### Question 1: Assignment Operator
**Question:** What does the assignment operator '<-' do in R?

**Options:**
- A) Compares two values
- B) Assigns a value to a variable ✅
- C) Creates a function
- D) Filters data

**Explanation:** The '<-' operator assigns values to variables. For example: x <- 5 assigns the value 5 to variable x. You can also use '=' but '<-' is the R convention. The arrow points toward the variable receiving the value.

**Difficulty:** Easy

---

### Question 2: Vectors
**Question:** What is a vector in R?

**Options:**
- A) A single number
- B) A collection of elements of the same type ✅
- C) A function that returns multiple values
- D) A data frame with rows and columns

**Explanation:** A vector is R's basic data structure - a sequence of elements all of the same type (numeric, character, logical). Created with c(): x <- c(1, 2, 3). Vectors are the foundation of R programming.

**Difficulty:** Easy

---

### Question 3: R Indexing
**Question:** What will this R code return? x <- c(1, 2, 3); x[2]

**Options:**
- A) 1
- B) 2 ✅
- C) 3
- D) Error

**Explanation:** R uses 1-based indexing (unlike Python which uses 0-based). x[2] returns the 2nd element of the vector, which is 2. So x[1]=1, x[2]=2, x[3]=3.

**Difficulty:** Easy

---

### Question 4: if() Statement
**Question:** What is the purpose of the if() statement in R?

**Options:**
- A) To repeat code multiple times
- B) To execute code conditionally based on a logical test ✅
- C) To create a loop
- D) To define a function

**Explanation:** The if() statement executes code only if a condition is TRUE. Syntax: if(condition) { code }. You can add else for alternative code. Example: if(x > 5) { print('x is large') } else { print('x is small') }

**Difficulty:** Medium

---

### Question 5: Matrix vs Data Frame
**Question:** What is the difference between a matrix and a data frame in R?

**Options:**
- A) Matrices are 2D, data frames are 1D
- B) Matrices contain one data type; data frames can mix types ✅
- C) Data frames are faster than matrices
- D) There is no difference

**Explanation:** Matrices are 2D arrays with all elements the same type (all numeric or all character). Data frames are like spreadsheets - each column can be a different type. Data frames are more flexible for real-world data.

**Difficulty:** Medium

---

## Unit 3: Data Visualization

### Question 1: Histograms
**Question:** When should you use a histogram?

**Options:**
- A) To compare categories
- B) To show the distribution of a continuous variable ✅
- C) To show relationships between two variables
- D) To display proportions of a whole

**Explanation:** Histograms show the distribution of ONE continuous variable by dividing it into bins and showing frequency. Use for: ages, salaries, test scores. Bar charts are for categories, scatter plots for relationships, pie charts for proportions.

**Difficulty:** Easy

---

### Question 2: Boxplots
**Question:** What does a boxplot reveal that a histogram might miss?

**Options:**
- A) The exact distribution shape
- B) Outliers and quartiles ✅
- C) The mean value
- D) Categorical differences

**Explanation:** Boxplots show the median, quartiles (Q1, Q3), and outliers (dots beyond whiskers). They're excellent for spotting unusual values. Histograms show the full distribution shape but can hide outliers in the tail.

**Difficulty:** Medium

---

### Question 3: Line Graphs
**Question:** Which chart type is BEST for showing a trend over time?

**Options:**
- A) Pie chart
- B) Bar chart
- C) Line graph ✅
- D) Boxplot

**Explanation:** Line graphs are ideal for time-series data because the line connects points chronologically, making trends obvious. Bar charts work for time too, but lines better show continuous change. Pie charts show proportions, boxplots show distributions.

**Difficulty:** Easy

---

### Question 4: Pie Charts
**Question:** What is a major criticism of pie charts?

**Options:**
- A) They are too colorful
- B) Humans are poor at comparing angles; use bar charts instead ✅
- C) They cannot show percentages
- D) They are too simple

**Explanation:** Research shows humans judge bar lengths more accurately than pie slice angles. Pie charts should only be used for 3-6 categories showing parts of a whole. For more categories or precise comparisons, use bar charts.

**Difficulty:** Medium

---

### Question 5: R Plot Parameters
**Question:** What does 'pch=19' do in an R scatter plot?

**Options:**
- A) Sets the line width
- B) Sets the point character to solid circles ✅
- C) Sets the color to black
- D) Sets the plot title

**Explanation:** 'pch' stands for 'plot character'. pch=19 gives solid circles, pch=1 gives hollow circles, pch=15 gives squares. It controls the shape of points in scatter plots and other point-based visualizations.

**Difficulty:** Medium

---

## Unit 4: Statistics & Prescriptive Analytics

### Question 1: Normal Distribution
**Question:** What does a normal distribution represent?

**Options:**
- A) Data that is always accurate
- B) A bell-shaped distribution where most values cluster around the mean ✅
- C) Data without any outliers
- D) A distribution that is always symmetric

**Explanation:** The normal (Gaussian) distribution is bell-shaped with most values near the mean and fewer at the extremes. 68% of data falls within 1 standard deviation of the mean. Many natural phenomena follow this pattern.

**Difficulty:** Easy

---

### Question 2: Linear Regression
**Question:** What is the purpose of linear regression?

**Options:**
- A) To classify data into categories
- B) To find a linear relationship between variables and make predictions ✅
- C) To group similar data points
- D) To remove outliers from data

**Explanation:** Linear regression finds the best-fit line through data points to model the relationship between variables. It answers: 'How does Y change with X?' Used for prediction and understanding relationships.

**Difficulty:** Medium

---

### Question 3: Random Forest
**Question:** What is the main advantage of Random Forest over a single Decision Tree?

**Options:**
- A) It's faster to train
- B) It reduces overfitting by averaging multiple trees ✅
- C) It requires less data
- D) It only works with numerical data

**Explanation:** Random Forest creates many decision trees and averages their predictions. This ensemble approach reduces overfitting (memorizing training data) and improves generalization to new data. It's more robust than a single tree.

**Difficulty:** Hard

---

### Question 4: Prescriptive Analytics
**Question:** What is prescriptive analytics?

**Options:**
- A) Describing what happened in the past
- B) Predicting what will happen in the future
- C) Recommending actions to optimize outcomes ✅
- D) Classifying data into groups

**Explanation:** Prescriptive analytics answers 'What should we do?' It goes beyond prediction to recommend specific actions. Example: Not just 'Sales will drop' but 'Increase marketing budget by 20% to prevent the drop.'

**Difficulty:** Medium

---

### Question 5: Correlation vs Causation
**Question:** What is the difference between correlation and causation?

**Options:**
- A) They are the same thing
- B) Correlation means two variables move together; causation means one causes the other ✅
- C) Causation is always stronger than correlation
- D) Correlation is only for numerical data

**Explanation:** Correlation (r=0.8) means variables move together. Causation means one CAUSES the other. Example: Ice cream sales and drowning deaths correlate (both increase in summer) but neither causes the other - temperature causes both. Always be careful with this distinction!

**Difficulty:** Hard

---

## Summary Statistics

| Unit | Easy | Medium | Hard | Total |
|------|------|--------|------|-------|
| Unit 1 | 3 | 2 | 0 | 5 |
| Unit 2 | 3 | 2 | 0 | 5 |
| Unit 3 | 2 | 3 | 0 | 5 |
| Unit 4 | 1 | 2 | 2 | 5 |
| **Total** | **9** | **9** | **2** | **20** |

## Question Design Principles

1. **Clarity:** Questions are clear and unambiguous
2. **Relevance:** Questions cover key concepts from each unit
3. **Variety:** Mix of recall, application, and analysis
4. **Difficulty:** Progressive difficulty within each unit
5. **Feedback:** Detailed explanations for learning
6. **Real-World:** Examples relate to practical applications

## How Questions Were Selected

- **Unit 1:** Foundational concepts about data and analytics
- **Unit 2:** Essential R programming skills
- **Unit 3:** Practical visualization knowledge
- **Unit 4:** Statistical and ML concepts

Each question tests understanding of core topics that students need to master.

---

**Total Questions:** 20  
**Average Difficulty:** Medium  
**Estimated Quiz Time:** 5-10 minutes per unit  
**Learning Outcome:** Comprehensive understanding of each unit's topics
