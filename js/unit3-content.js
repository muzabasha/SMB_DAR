const unit3Content = {
    "u3-prereq": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3: Prerequisites | Visual Literacy & Data Interpretation",
        hook: "A picture is worth a thousand numbers - but only if you know how to read it!",
        position: "Prerequisite Module for Unit 3",
        prerequisites: "Completion of Units 1-2, basic understanding of charts from school (bar, pie, line).",
        outcomes: ["Understand why visualization matters", "Read and interpret basic charts", "Recognize misleading visualizations", "Choose appropriate chart types"],
        subTopics: "Why Visualize Data?, Chart Types Overview (Bar, Line, Pie, Scatter), Reading Axes and Legends, Color Theory Basics, Misleading Visualizations, Data-Ink Ratio, Chartjunk",
        syllabusMapping: "Foundation for Syllabus Section 3.1-3.2",
        background: "William Playfair invented most modern charts (bar, line, pie) in the late 1700s. Florence Nightingale used visualizations to convince the British government to improve hospital sanitation, saving thousands of lives.",
        motivation: "Your brain processes images 60,000x faster than text! A well-designed chart can reveal patterns invisible in spreadsheets. Bad charts can mislead and cause costly mistakes.",
        problemStatement: "Many people create charts without understanding WHICH chart fits WHICH data. A pie chart for time-series data is like using a hammer to cut bread - wrong tool!",
        coreConcept: "Data visualization is the graphical representation of information. Good visualizations make complex data accessible, reveal patterns, and support decision-making.",
        terminology: "X-axis, Y-axis, Legend, Scale, Trend, Outlier, Distribution, Correlation, Categorical vs Continuous Data",
        technicalFoundations: "Visual variables (length, area, color, position) and how they map to data values.",
        mindMap: {
            center: "Unit 3: Visual Analytics",
            branches: [
                {
                    title: "Chart Literacy",
                    subItems: ["Histograms", "Boxplots", "Scatterplots", "Line Graphs"]
                },
                {
                    title: "Data Sourcing",
                    subItems: ["CSV Import", "Excel Files", "JSON Data", "Cleaning"]
                },
                {
                    title: "Aesthetics",
                    subItems: ["Colors", "Labels", "Scales", "Themes"]
                },
                {
                    title: "Grammar of Graphics",
                    subItems: ["Data Mapping", "Geometries", "Coordinates", "Faceting"]
                }
            ]
        },
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# PREREQUISITE 1: Understanding Data for Visualization
# Monthly sales data
months <- c('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun')
sales <- c(120, 135, 150, 145, 170, 190)

# Simple bar chart
barplot(sales, 
        names.arg = months, 
        col = 'steelblue',
        main = 'Monthly Sales Trend',
        ylab = 'Sales (in thousands)', 
        xlab = 'Month')

# PREREQUISITE 2: Spotting Patterns
print(paste('Lowest sales:', months[which.min(sales)], '-', min(sales), 'k'))
print(paste('Highest sales:', months[which.max(sales)], '-', max(sales), 'k'))
print(paste('Growth from Jan to Jun:', ((sales[6]-sales[1])/sales[1])*100, '%'))

# PREREQUISITE 3: Comparing Multiple Variables
product_A <- c(50, 55, 60, 58, 65, 70)
product_B <- c(70, 80, 90, 87, 105, 120)

# Which product is growing faster?
growth_A <- ((product_A[6] - product_A[1]) / product_A[1]) * 100
growth_B <- ((product_B[6] - product_B[1]) / product_B[1]) * 100

print(paste('Product A growth:', round(growth_A, 1), '%'))
print(paste('Product B growth:', round(growth_B, 1), '%'))`,
        rOutput: `📊 VISUALIZATION OUTPUT:
[Bar Chart Generated - See description below]

📟 CONSOLE OUTPUT:
[1] "Lowest sales: Jan - 120 k"
[1] "Highest sales: Jun - 190 k"
[1] "Growth from Jan to Jun: 58.3333333333333 %"
[1] "Product A growth: 40 %"
[1] "Product B growth: 71.4 %"`,
        plotDescription: `<div style="background: #f0f9ff; padding: 20px; border-radius: 12px; border-left: 6px solid #0ea5e9; margin: 20px 0;">
<h4 style="color: #0369a1; margin-top: 0;">📊 Bar Chart Visualization: Monthly Sales Trend</h4>

<div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 2px solid #e0e0e0;">
<p style="text-align: center; font-weight: bold; color: #333; margin-bottom: 15px;">Monthly Sales Trend</p>
<div style="display: flex; align-items: flex-end; justify-content: space-around; height: 200px; border-left: 2px solid #333; border-bottom: 2px solid #333; padding: 10px;">
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 50px; height: 120px; background: steelblue; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 12px;">Jan</span>
<span style="font-size: 10px; color: #666;">120</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 50px; height: 135px; background: steelblue; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 12px;">Feb</span>
<span style="font-size: 10px; color: #666;">135</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 50px; height: 150px; background: steelblue; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 12px;">Mar</span>
<span style="font-size: 10px; color: #666;">150</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 50px; height: 145px; background: steelblue; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 12px;">Apr</span>
<span style="font-size: 10px; color: #666;">145</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 50px; height: 170px; background: steelblue; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 12px;">May</span>
<span style="font-size: 10px; color: #666;">170</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 50px; height: 190px; background: steelblue; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 12px;">Jun</span>
<span style="font-size: 10px; color: #666;">190</span>
</div>
</div>
<p style="text-align: center; font-size: 11px; color: #666; margin: 5px 0 0 0;">Month</p>
<p style="transform: rotate(-90deg); position: relative; left: -80px; top: -120px; font-size: 11px; color: #666; width: 200px;">Sales (in thousands)</p>
</div>

<h5 style="color: #0369a1;">🔍 What This Chart Shows:</h5>
<ul style="line-height: 1.8;">
<li><strong>Overall Trend:</strong> Upward trajectory from 120k (Jan) to 190k (Jun)</li>
<li><strong>Anomaly Detected:</strong> April shows a dip to 145k (down from March's 150k)</li>
<li><strong>Peak Performance:</strong> June achieved highest sales at 190k</li>
<li><strong>Growth Rate:</strong> 58.3% increase over 6 months</li>
<li><strong>Visual Pattern:</strong> Bars generally increase in height from left to right</li>
</ul>

<h5 style="color: #0369a1;">💡 Why Bar Charts Work Here:</h5>
<ul style="line-height: 1.8;">
<li><strong>Easy Comparison:</strong> Bar heights make it simple to compare months</li>
<li><strong>Categorical Data:</strong> Months are discrete categories (not continuous time)</li>
<li><strong>Clear Baseline:</strong> All bars start at zero (honest representation)</li>
<li><strong>Color Consistency:</strong> Single color (steelblue) keeps focus on values</li>
</ul>

<h5 style="color: #0369a1;">🎯 Business Insights:</h5>
<ul style="line-height: 1.8;">
<li><strong>Investigate April:</strong> Why did sales drop? Holiday? Supply issue?</li>
<li><strong>Replicate June Success:</strong> What worked in June? Marketing campaign?</li>
<li><strong>Forecast Q3:</strong> If trend continues, expect 200k+ in July</li>
</ul>
</div>`,
        rInterpretation: "<strong>Visual Literacy Fundamentals:</strong><br><br>📊 <strong>CONCEPT 1: Why Visualize?</strong><br><br>Compare these two representations of the SAME data:<br>• <strong>Table:</strong> Jan=120, Feb=135, Mar=150, Apr=145, May=170, Jun=190<br>• <strong>Bar Chart:</strong> Instantly shows upward trend with a dip in April<br><br>The chart reveals the pattern in 2 seconds. The table requires mental calculation!<br><br>📈 <strong>CONCEPT 2: Reading Charts (Pattern Recognition)</strong><br><br>From the bar chart, we instantly see:<br>• <strong>Trend:</strong> Generally increasing (good news!)<br>• <strong>Anomaly:</strong> April dipped (investigate why?)<br>• <strong>Range:</strong> Sales vary from 120k to 190k<br>• <strong>Growth:</strong> 58.3% increase in 6 months (strong performance!)<br><br>🎯 <strong>CONCEPT 3: Comparative Analysis</strong><br><br>Product B (71.4% growth) is outperforming Product A (40% growth):<br>• <strong>Business decision:</strong> Invest more in Product B marketing?<br>• <strong>Question to ask:</strong> Why is B growing faster? Better quality? Lower price?<br><br>Without visualization, this insight is buried in numbers!<br><br>🎨 <strong>Chart Selection Guide (The Most Important Skill!):</strong><br><br>• <strong>BAR CHART:</strong> Comparing categories (sales by month, scores by student)<br>• <strong>LINE CHART:</strong> Showing trends over time (stock prices, temperature)<br>• <strong>PIE CHART:</strong> Showing parts of a whole (budget breakdown, market share) - USE SPARINGLY!<br>• <strong>SCATTER PLOT:</strong> Showing relationships (height vs weight, study hours vs grades)<br>• <strong>HISTOGRAM:</strong> Showing distribution (age ranges, test score frequency)<br><br>⚠️ <strong>CRITICAL: Misleading Visualizations!</strong><br><br>Common tricks to watch for:<br>1. <strong>Truncated Y-axis:</strong> Starting at 50 instead of 0 makes small changes look huge<br>2. <strong>Wrong chart type:</strong> Pie chart with 15 slices (impossible to read!)<br>3. <strong>3D effects:</strong> Make it harder to read exact values<br>4. <strong>Dual Y-axes:</strong> Can manipulate perception of correlation<br>5. <strong>Cherry-picked time ranges:</strong> Showing only favorable periods<br><br>🔑 <strong>The Golden Rules of Good Visualization:</strong><br><br>1. <strong>Clarity over beauty:</strong> Function > Form<br>2. <strong>Label everything:</strong> Axes, units, title, data source<br>3. <strong>Use color purposefully:</strong> Not just decoration<br>4. <strong>Keep it simple:</strong> Remove unnecessary elements (chartjunk)<br>5. <strong>Tell a story:</strong> What's the key message?<br><br>✅ <strong>PREREQUISITE CHECKLIST - Ready for Unit 3 if you can:</strong><br><br>☐ Explain why visualization is important<br>☐ Identify X-axis, Y-axis, and legend in a chart<br>☐ Choose appropriate chart for different data types<br>☐ Spot a misleading chart (truncated axis, wrong scale)<br>☐ Read a trend from a line chart<br>☐ Compare values in a bar chart<br>☐ Understand that color should have meaning, not just decoration<br>☐ Know that simpler is usually better",
        illustration: "Raw Data (Numbers) → Visual Encoding (Chart) → Pattern Recognition (Insight) → Decision (Action).",
        caseProblem: "A company's CEO sees a chart showing 'Sales up 300%!' with Y-axis starting at 95 instead of 0. Actual change: 95 to 100 (5% increase).",
        caseSolution: "Data analyst recreated chart with Y-axis starting at 0, revealing the true modest growth.",
        caseOutcome: "CEO made realistic projections instead of over-investing based on misleading chart. Saved company from financial overextension!",
        applications: ["Business Dashboards", "Scientific Research Papers", "News Media Infographics", "Social Media Analytics", "Medical Data Interpretation"],
        challenges: "Balancing simplicity with completeness - too simple loses nuance, too complex loses audience.",
        research: "Perceptual Psychology in Data Visualization - studying how humans interpret visual information to design better charts.",
        toolMapping: "barplot(), plot(), hist(), pie() (use carefully!), colors, labels.",
        experientialActivity: "Find a chart in a news article. Can you identify: What story is it telling? Is the Y-axis manipulated? What chart type is used? Is it the best choice?",
        projectIPO: {
            input: "Your daily step count for 2 weeks (from fitness tracker).",
            process: "Create a line chart showing daily steps. Identify highest/lowest days.",
            output: "Insight: 'I walk 50% more on weekdays than weekends - maybe I should take weekend walks!'"
        },
        quizQuestions: [
            "When should you use a bar chart vs a line chart?",
            "What's wrong with starting a Y-axis at a value other than 0?",
            "Why are pie charts often criticized by data visualization experts?",
            "What does the X-axis typically represent in a time-series chart?",
            "How can color be used effectively in charts?"
        ],
        examQuestions5M: [
            "Explain three ways a chart can be misleading. Provide examples.",
            "Discuss the principles of effective data visualization with reference to Edward Tufte's work."
        ],
        examQuestions10M: [
            "Compare and contrast different chart types (bar, line, scatter, histogram). For each, explain when it should be used, provide an example, and demonstrate creation in R. Discuss common mistakes in chart design."
        ],
        nextTopic: "Reading External Data",
        nextLinkage: "Now that you understand visualization principles, let's learn how to import real-world data into R for analysis!",
        nextReading: "Browse news websites and critically evaluate the charts you see. Are they honest or misleading?"
    },
    "u3-t1": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3: Data Visualization | Topic 1: Reading External Data",
        hook: "Connecting R to the world: Your data is everywhere - CSV, Excel, Web, Databases. R is the universal bridge.",
        position: "1st Topic of Unit 3",
        prerequisites: "Understanding Data Structures (Vectors/Matrices), Basic file system knowledge.",
        outcomes: ["Import CSV and Excel files", "Parse XML and JSON data", "Connect to Web APIs and scrape data", "Query databases from R", "Handle data cleaning during import"],
        subTopics: "CSV (read.csv, read_csv), Excel (readxl, openxlsx), XML (xml2), JSON (jsonlite), Web Scraping (rvest), Databases (DBI, RMySQL, RSQLite), Data Cleaning (na.strings, stringsAsFactors)",
        syllabusMapping: "Syllabus Section 3.1: Data Acquisition from Multiple Sources",
        background: "Early computers required manual data entry. Today, data lives in countless formats across the internet, cloud servers, and databases. R's ecosystem has packages for virtually every data source imaginable.",
        motivation: "80% of data science work is data acquisition and cleaning. Master this, and you're already ahead of most analysts. If you can't get data INTO R, you can't analyze it!",
        problemStatement: "Data comes in messy formats: CSVs with wrong delimiters, Excel files with merged cells, JSON with nested structures, databases requiring authentication. Each source needs different handling.",
        coreConcept: "A 'Data Frame' is R's universal container - regardless of source (CSV, JSON, database), we convert everything into this spreadsheet-like structure for analysis.",
        terminology: "Working Directory, Delimiter, Header, Schema, API, Endpoint, Query, Connection String, Encoding (UTF-8, Latin1), NA (Not Available)",
        technicalFoundations: "Data Pipeline: External Storage → Connection/Parser → R Workspace → Data Frame → Analysis Ready",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# ========================================
# COMPREHENSIVE DATA IMPORT GUIDE
# ========================================

# 1. CSV FILES (Most Common!)
# ========================================
# Basic CSV import
# my_data <- read.csv('sales_data.csv', header = TRUE)

# Advanced CSV with options
# sales <- read.csv('data.csv', 
#                   header = TRUE,           # First row is column names
#                   sep = ',',               # Comma separator
#                   na.strings = c('', 'NA', 'NULL'),  # What means missing?
#                   stringsAsFactors = FALSE)  # Keep text as text

# Modern tidyverse approach (faster!)
# library(readr)
# sales <- read_csv('sales_data.csv')  # Auto-detects types!

print("✓ CSV: Use read.csv() or readr::read_csv()")


# 2. EXCEL FILES (.xlsx, .xls)
# ========================================
# Install: install.packages("readxl")
# library(readxl)

# Read specific sheet
# excel_data <- read_excel('financial_report.xlsx', 
#                          sheet = 'Q1_Sales',      # Sheet name or number
#                          skip = 2,                # Skip first 2 rows
#                          col_names = TRUE)

# List all sheets in Excel file
# excel_sheets('report.xlsx')

print("✓ Excel: Use readxl::read_excel()")


# 3. JSON FILES (Web APIs, NoSQL databases)
# ========================================
# Install: install.packages("jsonlite")
# library(jsonlite)

# From file
# json_data <- fromJSON('api_response.json')

# From URL (API call)
# api_url <- 'https://api.example.com/data'
# web_data <- fromJSON(api_url)

# Example: Simulated JSON structure
json_example <- '{"name": "Alice", "age": 25, "scores": [85, 90, 88]}'
parsed <- jsonlite::fromJSON(json_example)
print("✓ JSON: Use jsonlite::fromJSON()")
print(parsed)


# 4. XML FILES (Legacy systems, RSS feeds)
# ========================================
# Install: install.packages("xml2")
# library(xml2)

# Read XML file
# xml_doc <- read_xml('data.xml')
# xml_data <- xml_find_all(xml_doc, '//record')

# Extract specific nodes
# names <- xml_text(xml_find_all(xml_doc, '//name'))

print("✓ XML: Use xml2::read_xml()")


# 5. WEB SCRAPING (HTML tables, web pages)
# ========================================
# Install: install.packages("rvest")
# library(rvest)

# Scrape table from webpage
# url <- 'https://example.com/data-table'
# webpage <- read_html(url)
# tables <- html_table(webpage)
# my_table <- tables[[1]]  # First table

print("✓ Web Scraping: Use rvest::read_html()")


# 6. DATABASES (SQL: MySQL, PostgreSQL, SQLite)
# ========================================
# Install: install.packages(c("DBI", "RSQLite"))
# library(DBI)

# SQLite example (file-based database)
# con <- dbConnect(RSQLite::SQLite(), 'company.db')
# customers <- dbGetQuery(con, 'SELECT * FROM customers WHERE age > 25')
# dbDisconnect(con)

# MySQL example
# library(RMySQL)
# con <- dbConnect(MySQL(), 
#                  host = 'localhost',
#                  user = 'analyst',
#                  password = 'secret123',
#                  dbname = 'sales_db')
# result <- dbGetQuery(con, 'SELECT * FROM orders LIMIT 100')

print("✓ Databases: Use DBI::dbConnect() + dbGetQuery()")


# ========================================
# BONUS: Checking Imported Data
# ========================================
# Always verify after import!

# Create sample data to demonstrate
sample_data <- data.frame(
  Name = c('Alice', 'Bob', 'Charlie'),
  Age = c(25, 30, 28),
  Salary = c(50000, 60000, 55000)
)

# Essential checks:
str(sample_data)        # Structure: types, dimensions
head(sample_data, 3)    # First 3 rows
summary(sample_data)    # Statistical summary

print("✓ Always verify: str(), head(), summary()")`,
        rOutput: `[1] "✓ CSV: Use read.csv() or readr::read_csv()"
[1] "✓ Excel: Use readxl::read_excel()"
[1] "✓ JSON: Use jsonlite::fromJSON()"
$name
[1] "Alice"

$age
[1] 25

$scores
[1] 85 90 88

[1] "✓ XML: Use xml2::read_xml()"
[1] "✓ Web Scraping: Use rvest::read_html()"
[1] "✓ Databases: Use DBI::dbConnect() + dbGetQuery()"
[1] "✓ Always verify: str(), head(), summary()"

'data.frame':	3 obs. of  3 variables:
 $ Name  : chr  "Alice" "Bob" "Charlie"
 $ Age   : num  25 30 28
 $ Salary: num  50000 60000 55000
 
    Name Age Salary
1  Alice  25  50000
2    Bob  30  60000
3 Charlie  28  55000

     Name                Age            Salary      
 Length:3           Min.   :25.00   Min.   :50000  
 Class :character   1st Qu.:26.50   1st Qu.:52500  
 Mode  :character   Median :28.00   Median :55000  
                    Mean   :27.67   Mean   :55000  
                    3rd Qu.:29.00   3rd Qu.:57500  
                    Max.   :30.00   Max.   :60000`,
        rInterpretation: `<strong>Complete Data Import Mastery:</strong><br><br>

📁 <strong>1. CSV FILES - The Universal Format</strong><br><br>
<div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 10px 0;">
<strong>Why CSV?</strong> 90% of data you'll encounter is in CSV (Comma-Separated Values) format.<br><br>
<strong>Key Parameters:</strong><br>
• <code>header = TRUE</code>: First row contains column names<br>
• <code>sep = ','</code>: Delimiter (could be tab '\\t', semicolon ';', etc.)<br>
• <code>na.strings</code>: Define what represents missing data<br>
• <code>stringsAsFactors = FALSE</code>: Keep text as text (not categories)<br><br>
<strong>💡 Pro Tip:</strong> Use <code>readr::read_csv()</code> - it's 10x faster and auto-detects column types!<br>
<strong>Common Issue:</strong> Wrong delimiter? Check if file uses semicolons (European format) or tabs.
</div><br>

📊 <strong>2. EXCEL FILES - Business Standard</strong><br><br>
<div style="background: #d1fae5; padding: 15px; border-radius: 8px; margin: 10px 0;">
<strong>Why Excel?</strong> Every business uses Excel. You MUST be able to read .xlsx files.<br><br>
<strong>Key Features:</strong><br>
• <code>sheet = 'Q1_Sales'</code>: Specify which sheet (by name or number)<br>
• <code>skip = 2</code>: Skip header rows with logos/titles<br>
• <code>excel_sheets()</code>: List all sheets before importing<br><br>
<strong>💡 Pro Tip:</strong> Excel files often have merged cells, colors, formulas - <code>readxl</code> extracts just the VALUES.<br>
<strong>Common Issue:</strong> Date columns import as numbers? Excel stores dates as "days since 1900-01-01".
</div><br>

🌐 <strong>3. JSON - The Web's Language</strong><br><br>
<div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 10px 0;">
<strong>Why JSON?</strong> Every modern API (Twitter, Google, Facebook) returns JSON.<br><br>
<strong>Structure:</strong> Nested key-value pairs, arrays, objects<br>
• <code>fromJSON(url)</code>: Directly fetch from API<br>
• <code>fromJSON(file)</code>: Read from saved JSON file<br>
• Automatically converts to data frame when possible<br><br>
<strong>Example Output:</strong><br>
<code>$name: "Alice"</code> → Simple value<br>
<code>$scores: [85, 90, 88]</code> → Array becomes vector<br><br>
<strong>💡 Pro Tip:</strong> Use <code>flatten = TRUE</code> to unnest complex JSON structures.<br>
<strong>Common Issue:</strong> Deeply nested JSON? Use <code>tidyr::unnest()</code> to flatten.
</div><br>

📋 <strong>4. XML - Legacy but Still Everywhere</strong><br><br>
<div style="background: #fce7f3; padding: 15px; border-radius: 8px; margin: 10px 0;">
<strong>Why XML?</strong> Government data, RSS feeds, SOAP APIs still use XML.<br><br>
<strong>XPath Queries:</strong><br>
• <code>//record</code>: Find all 'record' nodes<br>
• <code>//name</code>: Extract all 'name' elements<br>
• <code>xml_text()</code>: Get text content<br>
• <code>xml_attr()</code>: Get attributes<br><br>
<strong>💡 Pro Tip:</strong> Learn basic XPath - it's like SQL for XML.<br>
<strong>Common Issue:</strong> Namespaces in XML? Use <code>xml_ns()</code> to handle them.
</div><br>

🕸️ <strong>5. WEB SCRAPING - When There's No API</strong><br><br>
<div style="background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
<strong>Why Scrape?</strong> Not all websites offer APIs. Sometimes you need to extract HTML tables.<br><br>
<strong>Workflow:</strong><br>
1. <code>read_html(url)</code>: Load webpage<br>
2. <code>html_table()</code>: Extract all tables<br>
3. <code>html_nodes()</code>: Target specific elements with CSS selectors<br><br>
<strong>⚠️ Legal Warning:</strong> Check website's <code>robots.txt</code> and Terms of Service!<br>
<strong>💡 Pro Tip:</strong> Use browser's "Inspect Element" to find CSS selectors.<br>
<strong>Common Issue:</strong> JavaScript-rendered content? Use <code>RSelenium</code> for dynamic pages.
</div><br>

🗄️ <strong>6. DATABASES - The Enterprise Standard</strong><br><br>
<div style="background: #f3e8ff; padding: 15px; border-radius: 8px; margin: 10px 0;">
<strong>Why Databases?</strong> Real companies store data in SQL databases (MySQL, PostgreSQL, Oracle).<br><br>
<strong>Connection Process:</strong><br>
1. <code>dbConnect()</code>: Establish connection (needs credentials)<br>
2. <code>dbGetQuery()</code>: Run SQL query, get data frame<br>
3. <code>dbDisconnect()</code>: ALWAYS close connection!<br><br>
<strong>Database Types:</strong><br>
• <strong>SQLite:</strong> File-based, no server needed (great for learning)<br>
• <strong>MySQL/PostgreSQL:</strong> Production databases (need host, user, password)<br>
• <strong>MongoDB:</strong> NoSQL (use <code>mongolite</code> package)<br><br>
<strong>💡 Pro Tip:</strong> Use <code>dbplyr</code> to write dplyr code that translates to SQL!<br>
<strong>Common Issue:</strong> Connection timeout? Check firewall, host address, credentials.
</div><br>

✅ <strong>ESSENTIAL POST-IMPORT CHECKS</strong><br><br>
<div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #16a34a;">
<strong>ALWAYS run these three commands after importing:</strong><br><br>
1. <code>str(data)</code> - <strong>Structure Check</strong><br>
   • Shows: 3 obs. of 3 variables<br>
   • Reveals data types: chr (character), num (numeric)<br>
   • Catches: "Age imported as text instead of number!"<br><br>

2. <code>head(data, 3)</code> - <strong>Preview First Rows</strong><br>
   • Quick visual check<br>
   • Spot: Weird characters, extra columns, header issues<br><br>

3. <code>summary(data)</code> - <strong>Statistical Overview</strong><br>
   • For numbers: Min, Max, Mean, Median<br>
   • For text: Length, Class<br>
   • Reveals: Outliers, missing values (NA's)<br><br>

<strong>🎯 Real-World Workflow:</strong><br>
Import → Check (str/head/summary) → Clean (fix types, handle NAs) → Analyze
</div><br>

🚀 <strong>QUICK REFERENCE TABLE</strong><br><br>
<table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
<tr style="background: #f1f5f9;">
<th style="border: 1px solid #cbd5e1; padding: 8px;">Data Source</th>
<th style="border: 1px solid #cbd5e1; padding: 8px;">Package</th>
<th style="border: 1px solid #cbd5e1; padding: 8px;">Key Function</th>
<th style="border: 1px solid #cbd5e1; padding: 8px;">Use Case</th>
</tr>
<tr>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>CSV</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">base / readr</td>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><code>read.csv()</code></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">90% of data files</td>
</tr>
<tr style="background: #f8fafc;">
<td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Excel</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">readxl</td>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><code>read_excel()</code></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">Business reports</td>
</tr>
<tr>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>JSON</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">jsonlite</td>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><code>fromJSON()</code></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">Web APIs</td>
</tr>
<tr style="background: #f8fafc;">
<td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>XML</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">xml2</td>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><code>read_xml()</code></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">Government data, RSS</td>
</tr>
<tr>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Web</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">rvest</td>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><code>read_html()</code></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">Web scraping</td>
</tr>
<tr style="background: #f8fafc;">
<td style="border: 1px solid #cbd5e1; padding: 8px;"><strong>Database</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">DBI, RSQLite</td>
<td style="border: 1px solid #cbd5e1; padding: 8px;"><code>dbGetQuery()</code></td>
<td style="border: 1px solid #cbd5e1; padding: 8px;">Enterprise data</td>
</tr>
</table>`,
        illustration: "Multiple Sources (CSV, Excel, JSON, XML, Web, DB) → R Connectors → Data Frame → Ready for Analysis",
        caseProblem: "A marketing firm receives data from: CSV exports (Google Analytics), Excel sheets (sales team), JSON (social media APIs), and MySQL database (customer records). Each analyst manually combines them in Excel - taking 8 hours weekly.",
        caseSolution: "Created an R script that automatically imports from all 4 sources, merges them by customer ID, and outputs a unified report. Runs in 2 minutes.",
        caseOutcome: "Saved 32 hours/month. Analysts now focus on insights instead of data wrangling. Error rate dropped from 15% to near-zero.",
        applications: ["Financial Data Aggregation", "Social Media Analytics", "E-commerce Product Catalogs", "Scientific Research Data", "Government Open Data Projects", "Real-time Stock Market Data"],
        challenges: "Encoding issues (UTF-8 vs Latin1), inconsistent date formats across sources, API rate limits, database connection timeouts, nested JSON structures.",
        research: "Apache Arrow for ultra-fast data interchange, GraphQL for efficient API queries, Real-time streaming data with Kafka connectors.",
        toolMapping: "readr, readxl, jsonlite, xml2, rvest, DBI, RMySQL, RSQLite, mongolite, httr (for APIs), data.table::fread (fastest CSV reader).",
        experientialActivity: "Find a public API (e.g., OpenWeatherMap, NASA, GitHub). Get an API key, fetch JSON data using jsonlite, and convert it to a data frame. Compare the raw JSON to the clean data frame!",
        projectIPO: {
            input: "Multiple data sources: sales.csv, inventory.xlsx, customer API (JSON), orders database (SQLite).",
            process: "Import each using appropriate function, merge by product_id, clean missing values, calculate total revenue.",
            output: "Unified dashboard showing: Top products, inventory alerts, customer segments - all from disparate sources!"
        },
        quizQuestions: [
            "What's the difference between read.csv() and read_csv()?",
            "Why would you use stringsAsFactors = FALSE?",
            "How do you read the 3rd sheet from an Excel file?",
            "What does fromJSON() return when given a URL?",
            "Why must you always call dbDisconnect() after database queries?",
            "What's the purpose of the 'skip' parameter in read_excel()?"
        ],
        examQuestions5M: [
            "Explain the difference between CSV and JSON data formats. When would you use each?",
            "Describe the process of connecting to a MySQL database from R and executing a query.",
            "Discuss three common data import issues and how to resolve them in R."
        ],
        examQuestions10M: [
            "Compare and contrast at least 4 different data import methods in R (CSV, Excel, JSON, Database). For each, provide: (a) appropriate R function, (b) a code example, (c) common use cases, (d) potential challenges. Demonstrate importing data from at least two different sources and combining them into a single data frame."
        ],
        nextTopic: "Charts & Graphs",
        nextLinkage: "Now that you can import data from anywhere, let's visualize it to uncover patterns!",
        nextReading: "Practice: Download a CSV from Kaggle and an Excel file from your school. Import both into R and combine them."
    },
    "u3-t2": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3: Data Visualization | Topic 2: Working with R Charts & Graphs",
        hook: "A picture is worth a thousand spreadsheets. Master these 6 charts, and you can tell any data story!",
        position: "2nd Topic of Unit 3",
        prerequisites: "Data imported into R (Topic 1), Understanding of basic statistics.",
        outcomes: ["Create all 6 essential chart types in R", "Choose the right chart for your data", "Customize colors, labels, and aesthetics", "Interpret patterns and outliers visually", "Save plots for reports and presentations"],
        subTopics: "Histogram (distribution), Boxplot (outliers), Bar Chart (categories), Line Graph (trends), Scatterplot (relationships), Pie Chart (proportions), Customization (col, main, xlab, ylab, pch, lwd), Saving Plots (png, pdf, jpeg)",
        syllabusMapping: "Syllabus Section 3.2: Exploratory Data Analysis (EDA) & Visualization",
        background: "William Playfair invented bar charts (1786), line graphs (1786), and pie charts (1801). These foundational visualizations remain the backbone of data communication 200+ years later. R modernized them with the 'Grammar of Graphics'.",
        motivation: "Your brain processes visuals 60,000x faster than text! The right chart can reveal insights in seconds that would take hours to find in raw data. Every data scientist must master these 6 core visualizations.",
        problemStatement: "Choosing the WRONG chart type is worse than no chart at all. A pie chart with 20 slices is unreadable. A line graph for categorical data is misleading. Knowing WHEN to use each chart is the real skill.",
        coreConcept: "Visual encoding: Mapping data values to visual properties (position, length, area, color, shape). Different chart types encode data differently - choose based on what you want to reveal.",
        terminology: "Aesthetics (visual properties), Geometries (chart shapes), Axes, Legend, Title, Distribution, Trend, Correlation, Outlier, Categorical vs Continuous data",
        technicalFoundations: "Coordinate systems (Cartesian), Statistical transformations (binning for histograms, aggregation for bar charts), Visual perception principles.",
        rVersion: "4.3.3",
        rPlatform: "x86_64-w64-mingw32 (ucrt)",
        rCode: `# ========================================
# COMPLETE R VISUALIZATION GUIDE
# All 6 Essential Chart Types
# ========================================

# Sample datasets for demonstrations
set.seed(123)  # For reproducibility

# 1. HISTOGRAM - Show Distribution
# ========================================
# Generate normally distributed data
ages <- rnorm(100, mean = 35, sd = 10)

hist(ages, 
     col = 'skyblue',
     main = 'Age Distribution of Customers',
     xlab = 'Age (years)',
     ylab = 'Frequency',
     breaks = 10)  # Number of bins


# 2. BOXPLOT - Find Outliers
# ========================================
# Sales data with outliers
sales <- c(50, 52, 48, 51, 49, 53, 50, 51, 95, 48, 52)

boxplot(sales,
        col = 'tomato',
        main = 'Daily Sales (with Outlier)',
        ylab = 'Sales ($1000s)',
        horizontal = FALSE)


# 3. BAR CHART - Compare Categories
# ========================================
# Product sales by category
products <- c('Laptop', 'Phone', 'Tablet', 'Watch')
units_sold <- c(120, 250, 80, 150)

barplot(units_sold,
        names.arg = products,
        col = c('#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'),
        main = 'Units Sold by Product',
        xlab = 'Product',
        ylab = 'Units Sold',
        ylim = c(0, 300))


# 4. LINE GRAPH - Show Trends Over Time
# ========================================
# Monthly revenue trend
months <- 1:12
revenue <- c(45, 52, 48, 55, 62, 68, 71, 75, 73, 78, 82, 88)

plot(months, revenue,
     type = 'l',  # 'l' for line
     col = 'darkgreen',
     lwd = 3,  # Line width
     main = 'Monthly Revenue Trend (2023)',
     xlab = 'Month',
     ylab = 'Revenue ($1000s)',
     ylim = c(0, 100))

# Add points on the line
points(months, revenue, pch = 19, col = 'darkgreen')

# Add grid for easier reading
grid()


# 5. SCATTERPLOT - Show Relationships
# ========================================
# Study hours vs Exam scores
study_hours <- c(2, 3, 4, 5, 6, 7, 8, 9, 10, 11)
exam_scores <- c(55, 60, 65, 70, 75, 78, 82, 85, 88, 90)

plot(study_hours, exam_scores,
     pch = 19,  # Solid circles
     col = 'purple',
     cex = 1.5,  # Point size
     main = 'Study Hours vs Exam Scores',
     xlab = 'Hours Studied',
     ylab = 'Exam Score (%)')

# Add trend line
abline(lm(exam_scores ~ study_hours), col = 'red', lwd = 2, lty = 2)


# 6. PIE CHART - Show Proportions (Use Sparingly!)
# ========================================
# Market share by company
companies <- c('Company A', 'Company B', 'Company C', 'Company D')
market_share <- c(35, 28, 22, 15)

pie(market_share,
    labels = paste(companies, '\\n', market_share, '%'),
    col = c('#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'),
    main = 'Market Share Distribution')


# ========================================
# BONUS: Saving Plots
# ========================================
# Save as PNG
# png('my_plot.png', width = 800, height = 600)
# hist(ages, col = 'skyblue')
# dev.off()  # Close the graphics device

# Save as PDF (vector, scalable)
# pdf('my_plot.pdf', width = 8, height = 6)
# hist(ages, col = 'skyblue')
# dev.off()

print("✓ All 6 chart types demonstrated!")
print("✓ Remember: Choose the right chart for your data type!")`,
        rOutput: `[6 Plots Generated - See detailed visualizations below]

📟 CONSOLE OUTPUT:
[1] "✓ All 6 chart types demonstrated!"
[1] "✓ Remember: Choose the right chart for your data type!"`,
        plotDescription: `<div style="background: #f0f9ff; padding: 20px; border-radius: 12px; margin: 20px 0;">

<h3 style="color: #0369a1; text-align: center; margin-top: 0;">📊 Complete R Visualization Gallery</h3>

<!-- ========================================
     1. HISTOGRAM
     ======================================== -->
<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #0ea5e9;">
<h4 style="color: #0369a1; text-align: center; margin-top: 0;">1️⃣ HISTOGRAM: Age Distribution of Customers</h4>
<div style="border: 2px solid #333; padding: 20px; background: #fafafa; border-radius: 8px;">
<p style="text-align: center; font-weight: bold; margin-bottom: 15px;">Age Distribution of Customers</p>
<div style="display: flex; align-items: flex-end; justify-content: center; height: 200px; border-left: 2px solid #333; border-bottom: 2px solid #333; padding: 10px; gap: 3px;">
<div style="width: 35px; height: 25px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 50px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 90px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 140px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 180px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 160px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 120px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 70px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 40px; background: skyblue; border: 1px solid #333;"></div>
<div style="width: 35px; height: 20px; background: skyblue; border: 1px solid #333;"></div>
</div>
<p style="text-align: center; font-size: 11px; color: #666; margin-top: 10px;">Age (years) →</p>
<p style="transform: rotate(-90deg); position: relative; left: -70px; top: -120px; font-size: 11px; color: #666; width: 200px;">Frequency ↑</p>
</div>
<div style="margin-top: 15px; padding: 15px; background: #e0f2fe; border-radius: 6px;">
<h5 style="color: #0369a1; margin-top: 0;">📊 When to Use Histogram:</h5>
<ul style="line-height: 1.8; margin: 10px 0;">
<li><strong>Purpose:</strong> Show distribution of ONE continuous variable</li>
<li><strong>Best for:</strong> Ages, salaries, test scores, temperatures</li>
<li><strong>What it reveals:</strong> Shape (normal, skewed), center, spread, outliers</li>
<li><strong>R Code:</strong> <code>hist(data, col='skyblue', breaks=10)</code></li>
<li><strong>Key insight:</strong> Bell curve = normal distribution (can use parametric tests)</li>
</ul>
</div>
</div>

<!-- ========================================
     2. BOXPLOT
     ======================================== -->
<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #ef4444;">
<h4 style="color: #dc2626; text-align: center; margin-top: 0;">2️⃣ BOXPLOT: Daily Sales (with Outlier Detection)</h4>
<div style="border: 2px solid #333; padding: 40px 20px; background: #fafafa; border-radius: 8px;">
<p style="text-align: center; font-weight: bold; margin-bottom: 15px;">Daily Sales ($1000s)</p>
<div style="display: flex; flex-direction: column; align-items: center; position: relative;">
<!-- Outlier -->
<div style="width: 10px; height: 10px; background: #333; border-radius: 50%; margin-bottom: 30px;"></div>
<!-- Upper whisker -->
<div style="width: 2px; height: 40px; background: #333;"></div>
<!-- Box (IQR) -->
<div style="width: 120px; height: 80px; background: tomato; border: 2px solid #333; position: relative; display: flex; align-items: center; justify-content: center;">
<div style="width: 120px; height: 2px; background: #fff; position: absolute;"></div>
<span style="color: white; font-weight: bold; z-index: 1; font-size: 12px;">Q1-Q3</span>
</div>
<!-- Lower whisker -->
<div style="width: 2px; height: 40px; background: #333;"></div>
<div style="display: flex; justify-content: space-around; width: 200px; margin-top: 10px; font-size: 10px; color: #666;">
<span>Min</span>
<span>Q1</span>
<span>Med</span>
<span>Q3</span>
<span>Max</span>
</div>
</div>
</div>
<div style="margin-top: 15px; padding: 15px; background: #fee2e2; border-radius: 6px;">
<h5 style="color: #dc2626; margin-top: 0;">📦 When to Use Boxplot:</h5>
<ul style="line-height: 1.8; margin: 10px 0;">
<li><strong>Purpose:</strong> Find outliers and compare distributions</li>
<li><strong>Best for:</strong> Salary ranges, quality control, comparing groups</li>
<li><strong>What it reveals:</strong> Median, quartiles, outliers (dots beyond whiskers)</li>
<li><strong>R Code:</strong> <code>boxplot(data, col='tomato', horizontal=FALSE)</code></li>
<li><strong>Key insight:</strong> Outlier at 95 (dot above) - investigate this unusual day!</li>
</ul>
</div>
</div>

<!-- ========================================
     3. BAR CHART
     ======================================== -->
<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #10b981;">
<h4 style="color: #059669; text-align: center; margin-top: 0;">3️⃣ BAR CHART: Units Sold by Product</h4>
<div style="border: 2px solid #333; padding: 20px; background: #fafafa; border-radius: 8px;">
<p style="text-align: center; font-weight: bold; margin-bottom: 15px;">Units Sold by Product</p>
<div style="display: flex; align-items: flex-end; justify-content: space-around; height: 220px; border-left: 2px solid #333; border-bottom: 2px solid #333; padding: 10px;">
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 60px; height: 120px; background: #FF6B6B; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 11px; font-weight: bold;">Laptop</span>
<span style="font-size: 10px; color: #666;">120</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 60px; height: 200px; background: #4ECDC4; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 11px; font-weight: bold;">Phone</span>
<span style="font-size: 10px; color: #666;">250</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 60px; height: 80px; background: #45B7D1; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 11px; font-weight: bold;">Tablet</span>
<span style="font-size: 10px; color: #666;">80</span>
</div>
<div style="display: flex; flex-direction: column; align-items: center;">
<div style="width: 60px; height: 150px; background: #FFA07A; border-radius: 4px 4px 0 0;"></div>
<span style="margin-top: 5px; font-size: 11px; font-weight: bold;">Watch</span>
<span style="font-size: 10px; color: #666;">150</span>
</div>
</div>
<p style="text-align: center; font-size: 11px; color: #666; margin-top: 5px;">Product →</p>
<p style="transform: rotate(-90deg); position: relative; left: -70px; top: -130px; font-size: 11px; color: #666; width: 200px;">Units Sold ↑</p>
</div>
<div style="margin-top: 15px; padding: 15px; background: #d1fae5; border-radius: 6px;">
<h5 style="color: #059669; margin-top: 0;">📊 When to Use Bar Chart:</h5>
<ul style="line-height: 1.8; margin: 10px 0;">
<li><strong>Purpose:</strong> Compare quantities across categories</li>
<li><strong>Best for:</strong> Sales by product, scores by student, revenue by region</li>
<li><strong>What it reveals:</strong> Which category is highest/lowest, relative differences</li>
<li><strong>R Code:</strong> <code>barplot(values, names.arg=labels, col=colors)</code></li>
<li><strong>Key insight:</strong> Phones dominate sales (250 units) - focus marketing here!</li>
</ul>
</div>
</div>

<!-- ========================================
     4. LINE GRAPH
     ======================================== -->
<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #059669;">
<h4 style="color: #047857; text-align: center; margin-top: 0;">4️⃣ LINE GRAPH: Monthly Revenue Trend (2023)</h4>
<div style="border: 2px solid #333; padding: 20px; background: #fafafa; border-radius: 8px; position: relative;">
<p style="text-align: center; font-weight: bold; margin-bottom: 15px;">Monthly Revenue Trend (2023)</p>
<div style="height: 200px; border-left: 2px solid #333; border-bottom: 2px solid #333; position: relative; background: white;">
<!-- Grid lines -->
<div style="position: absolute; width: 100%; height: 1px; background: #ddd; top: 25%;"></div>
<div style="position: absolute; width: 100%; height: 1px; background: #ddd; top: 50%;"></div>
<div style="position: absolute; width: 100%; height: 1px; background: #ddd; top: 75%;"></div>
<!-- Line path -->
<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
<polyline points="10,150 50,120 90,130 130,110 170,85 210,70 250,60 290,50 330,55 370,45 410,35 450,20" 
          stroke="darkgreen" stroke-width="3" fill="none"/>
<!-- Data points -->
<circle cx="10" cy="150" r="4" fill="darkgreen"/>
<circle cx="50" cy="120" r="4" fill="darkgreen"/>
<circle cx="90" cy="130" r="4" fill="darkgreen"/>
<circle cx="130" cy="110" r="4" fill="darkgreen"/>
<circle cx="170" cy="85" r="4" fill="darkgreen"/>
<circle cx="210" cy="70" r="4" fill="darkgreen"/>
<circle cx="250" cy="60" r="4" fill="darkgreen"/>
<circle cx="290" cy="50" r="4" fill="darkgreen"/>
<circle cx="330" cy="55" r="4" fill="darkgreen"/>
<circle cx="370" cy="45" r="4" fill="darkgreen"/>
<circle cx="410" cy="35" r="4" fill="darkgreen"/>
<circle cx="450" cy="20" r="4" fill="darkgreen"/>
</svg>
</div>
<p style="text-align: center; font-size: 11px; color: #666; margin-top: 5px;">Month (Jan-Dec) →</p>
<p style="transform: rotate(-90deg); position: relative; left: -70px; top: -120px; font-size: 11px; color: #666; width: 200px;">Revenue ($1000s) ↑</p>
</div>
<div style="margin-top: 15px; padding: 15px; background: #d1fae5; border-radius: 6px;">
<h5 style="color: #047857; margin-top: 0;">📈 When to Use Line Graph:</h5>
<ul style="line-height: 1.8; margin: 10px 0;">
<li><strong>Purpose:</strong> Show trends and changes over time</li>
<li><strong>Best for:</strong> Stock prices, temperature, website traffic, sales trends</li>
<li><strong>What it reveals:</strong> Upward/downward trends, seasonality, sudden changes</li>
<li><strong>R Code:</strong> <code>plot(x, y, type='l', col='darkgreen', lwd=3)</code></li>
<li><strong>Key insight:</strong> Consistent upward trend - revenue growing steadily!</li>
</ul>
</div>
</div>

<!-- ========================================
     5. SCATTERPLOT
     ======================================== -->
<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #a855f7;">
<h4 style="color: #9333ea; text-align: center; margin-top: 0;">5️⃣ SCATTERPLOT: Study Hours vs Exam Scores</h4>
<div style="border: 2px solid #333; padding: 20px; background: #fafafa; border-radius: 8px; position: relative;">
<p style="text-align: center; font-weight: bold; margin-bottom: 15px;">Study Hours vs Exam Scores</p>
<div style="height: 200px; border-left: 2px solid #333; border-bottom: 2px solid #333; position: relative; background: white;">
<!-- Scatter points -->
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 8%; bottom: 15%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 18%; bottom: 25%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 28%; bottom: 35%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 38%; bottom: 45%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 48%; bottom: 55%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 58%; bottom: 62%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 68%; bottom: 70%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 78%; bottom: 78%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 88%; bottom: 85%;"></div>
<div style="width: 14px; height: 14px; background: purple; border-radius: 50%; position: absolute; left: 95%; bottom: 92%;"></div>
<!-- Trend line -->
<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
<line x1="10" y1="180" x2="480" y2="10" stroke="red" stroke-width="2" stroke-dasharray="5,5"/>
</svg>
</div>
<p style="text-align: center; font-size: 11px; color: #666; margin-top: 5px;">Hours Studied →</p>
<p style="transform: rotate(-90deg); position: relative; left: -70px; top: -120px; font-size: 11px; color: #666; width: 200px;">Exam Score (%) ↑</p>
</div>
<div style="margin-top: 15px; padding: 15px; background: #f3e8ff; border-radius: 6px;">
<h5 style="color: #9333ea; margin-top: 0;">🔵 When to Use Scatterplot:</h5>
<ul style="line-height: 1.8; margin: 10px 0;">
<li><strong>Purpose:</strong> Show relationship between TWO continuous variables</li>
<li><strong>Best for:</strong> Height vs weight, price vs demand, advertising vs sales</li>
<li><strong>What it reveals:</strong> Positive/negative correlation, linear/non-linear patterns</li>
<li><strong>R Code:</strong> <code>plot(x, y, pch=19, col='purple'); abline(lm(y~x))</code></li>
<li><strong>Key insight:</strong> Strong positive correlation - more study = higher scores!</li>
</ul>
</div>
</div>

<!-- ========================================
     6. PIE CHART
     ======================================== -->
<div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #f59e0b;">
<h4 style="color: #d97706; text-align: center; margin-top: 0;">6️⃣ PIE CHART: Market Share Distribution</h4>
<div style="border: 2px solid #333; padding: 20px; background: #fafafa; border-radius: 8px;">
<p style="text-align: center; font-weight: bold; margin-bottom: 15px;">Market Share Distribution</p>
<div style="display: flex; justify-content: center; align-items: center; height: 220px;">
<svg width="200" height="200" viewBox="0 0 200 200">
<!-- Company A: 35% (126 degrees) -->
<path d="M 100 100 L 100 0 A 100 100 0 0 1 187 50 Z" fill="#FF6B6B"/>
<text x="130" y="40" font-size="12" fill="white" font-weight="bold">A: 35%</text>
<!-- Company B: 28% (101 degrees) -->
<path d="M 100 100 L 187 50 A 100 100 0 0 1 150 187 Z" fill="#4ECDC4"/>
<text x="150" y="110" font-size="12" fill="white" font-weight="bold">B: 28%</text>
<!-- Company C: 22% (79 degrees) -->
<path d="M 100 100 L 150 187 A 100 100 0 0 1 13 150 Z" fill="#45B7D1"/>
<text x="70" y="170" font-size="12" fill="white" font-weight="bold">C: 22%</text>
<!-- Company D: 15% (54 degrees) -->
<path d="M 100 100 L 13 150 A 100 100 0 0 1 100 0 Z" fill="#FFA07A"/>
<text x="40" y="80" font-size="12" fill="white" font-weight="bold">D: 15%</text>
</svg>
</div>
<div style="display: flex; justify-content: center; gap: 15px; margin-top: 10px; flex-wrap: wrap;">
<span style="font-size: 11px;"><span style="display: inline-block; width: 15px; height: 15px; background: #FF6B6B; border-radius: 3px; vertical-align: middle;"></span> Company A</span>
<span style="font-size: 11px;"><span style="display: inline-block; width: 15px; height: 15px; background: #4ECDC4; border-radius: 3px; vertical-align: middle;"></span> Company B</span>
<span style="font-size: 11px;"><span style="display: inline-block; width: 15px; height: 15px; background: #45B7D1; border-radius: 3px; vertical-align: middle;"></span> Company C</span>
<span style="font-size: 11px;"><span style="display: inline-block; width: 15px; height: 15px; background: #FFA07A; border-radius: 3px; vertical-align: middle;"></span> Company D</span>
</div>
</div>
<div style="margin-top: 15px; padding: 15px; background: #fef3c7; border-radius: 6px;">
<h5 style="color: #d97706; margin-top: 0;">🥧 When to Use Pie Chart:</h5>
<ul style="line-height: 1.8; margin: 10px 0;">
<li><strong>Purpose:</strong> Show parts of a whole (proportions that sum to 100%)</li>
<li><strong>Best for:</strong> Market share, budget breakdown, survey results (few categories)</li>
<li><strong>What it reveals:</strong> Relative proportions, which slice is largest</li>
<li><strong>R Code:</strong> <code>pie(values, labels=names, col=colors)</code></li>
<li><strong>⚠️ WARNING:</strong> Use ONLY for 3-6 categories. More = unreadable!</li>
<li><strong>Key insight:</strong> Company A leads with 35% market share</li>
</ul>
</div>
</div>

<!-- ========================================
     DECISION TREE
     ======================================== -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 8px; color: white;">
<h4 style="color: white; text-align: center; margin-top: 0;">🎯 CHART SELECTION DECISION TREE</h4>
<div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 6px; backdrop-filter: blur(10px);">
<p style="font-weight: bold; margin-bottom: 10px;">Ask yourself:</p>
<ul style="line-height: 2;">
<li><strong>How many variables?</strong>
  <ul style="margin-left: 20px;">
    <li>ONE → Histogram or Boxplot</li>
    <li>TWO → Scatterplot or Line Graph</li>
    <li>CATEGORIES → Bar Chart or Pie Chart</li>
  </ul>
</li>
<li><strong>What type of data?</strong>
  <ul style="margin-left: 20px;">
    <li>Continuous (numbers) → Histogram, Scatterplot, Line</li>
    <li>Categorical (groups) → Bar Chart, Pie Chart</li>
  </ul>
</li>
<li><strong>What do you want to show?</strong>
  <ul style="margin-left: 20px;">
    <li>Distribution → Histogram</li>
    <li>Outliers → Boxplot</li>
    <li>Comparison → Bar Chart</li>
    <li>Trend over time → Line Graph</li>
    <li>Relationship → Scatterplot</li>
    <li>Proportions → Pie Chart (max 6 slices!)</li>
  </ul>
</li>
</ul>
</div>
</div>

</div>`,
        rInterpretation: `<strong>Mastering R Visualizations:</strong><br><br>

<div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #3b82f6;">
<h4 style="color: #1e40af; margin-top: 0;">🎨 The Art of Choosing the Right Chart</h4>

<strong>Golden Rule:</strong> The chart type should match your data type and your question!<br><br>

<table style="width: 100%; border-collapse: collapse; margin: 10px 0; background: white;">
<tr style="background: #f1f5f9; font-weight: bold;">
<td style="border: 1px solid #cbd5e1; padding: 10px;">Chart Type</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Data Type</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Question Answered</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Example</td>
</tr>
<tr>
<td style="border: 1px solid #cbd5e1; padding: 10px;"><strong>Histogram</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">1 Continuous</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">What's the distribution?</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Age distribution</td>
</tr>
<tr style="background: #f8fafc;">
<td style="border: 1px solid #cbd5e1; padding: 10px;"><strong>Boxplot</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">1 Continuous</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Any outliers?</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Salary ranges</td>
</tr>
<tr>
<td style="border: 1px solid #cbd5e1; padding: 10px;"><strong>Bar Chart</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">1 Categorical</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Which category is highest?</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Sales by product</td>
</tr>
<tr style="background: #f8fafc;">
<td style="border: 1px solid #cbd5e1; padding: 10px;"><strong>Line Graph</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">2 Continuous (time)</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">What's the trend?</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Stock prices over time</td>
</tr>
<tr>
<td style="border: 1px solid #cbd5e1; padding: 10px;"><strong>Scatterplot</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">2 Continuous</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Is there a relationship?</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Height vs Weight</td>
</tr>
<tr style="background: #f8fafc;">
<td style="border: 1px solid #cbd5e1; padding: 10px;"><strong>Pie Chart</strong></td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Categorical (3-6)</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">What's the proportion?</td>
<td style="border: 1px solid #cbd5e1; padding: 10px;">Market share</td>
</tr>
</table>
</div>

<div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #f59e0b;">
<h4 style="color: #d97706; margin-top: 0;">⚠️ Common Mistakes to Avoid</h4>
<ul style="line-height: 1.8;">
<li><strong>Pie chart with 15 slices</strong> → Use bar chart instead!</li>
<li><strong>Line graph for categorical data</strong> → Lines imply continuity (use bar chart)</li>
<li><strong>3D charts</strong> → Harder to read, distorts perception</li>
<li><strong>Too many colors</strong> → Stick to 4-6 max, use meaningful color schemes</li>
<li><strong>Missing labels</strong> → Always label axes, add title, include units!</li>
<li><strong>Truncated Y-axis</strong> → Can mislead (make small changes look huge)</li>
</ul>
</div>

<div style="background: #dcfce7; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #16a34a;">
<h4 style="color: #15803d; margin-top: 0;">🎨 Customization Parameters Explained</h4>

<strong>Colors:</strong><br>
• <code>col = 'red'</code> - Named colors<br>
• <code>col = '#FF6B6B'</code> - Hex codes (more precise)<br>
• <code>col = c('red', 'blue', 'green')</code> - Multiple colors<br><br>

<strong>Point Styles (pch):</strong><br>
• <code>pch = 19</code> - Solid circle<br>
• <code>pch = 1</code> - Hollow circle<br>
• <code>pch = 15</code> - Solid square<br>
• <code>pch = 17</code> - Solid triangle<br><br>

<strong>Line Styles:</strong><br>
• <code>lwd = 3</code> - Line width (thickness)<br>
• <code>lty = 1</code> - Solid line<br>
• <code>lty = 2</code> - Dashed line<br><br>

<strong>Labels:</strong><br>
• <code>main = 'Title'</code> - Chart title<br>
• <code>xlab = 'X-axis label'</code><br>
• <code>ylab = 'Y-axis label'</code><br>
• <code>ylim = c(0, 100)</code> - Y-axis range<br>
</div>

<div style="background: #e0e7ff; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #6366f1;">
<h4 style="color: #4f46e5; margin-top: 0;">💾 Saving Plots for Reports</h4>

<strong>Method 1: PNG (for PowerPoint, Word)</strong><br>
<code>png('my_chart.png', width=800, height=600)</code><br>
<code>hist(data, col='skyblue')</code><br>
<code>dev.off()  # IMPORTANT: Close the device!</code><br><br>

<strong>Method 2: PDF (for publications, scalable)</strong><br>
<code>pdf('my_chart.pdf', width=8, height=6)</code><br>
<code>hist(data, col='skyblue')</code><br>
<code>dev.off()</code><br><br>

<strong>Method 3: JPEG (smaller file size)</strong><br>
<code>jpeg('my_chart.jpg', quality=90)</code><br>
<code>hist(data, col='skyblue')</code><br>
<code>dev.off()</code><br>
</div>

<div style="background: #fce7f3; padding: 15px; border-radius: 8px; margin: 15px 0; border-left: 4px solid #ec4899;">
<h4 style="color: #be123c; margin-top: 0;">🚀 Pro Tips from Data Visualization Experts</h4>
<ol style="line-height: 1.8;">
<li><strong>Less is More:</strong> Remove unnecessary gridlines, borders, 3D effects</li>
<li><strong>Color with Purpose:</strong> Use color to highlight important data, not decoration</li>
<li><strong>Tell a Story:</strong> Every chart should answer ONE clear question</li>
<li><strong>Know Your Audience:</strong> Executives want simple, analysts want detailed</li>
<li><strong>Test Readability:</strong> Can you understand it in 5 seconds? If not, simplify!</li>
<li><strong>Use Consistent Scales:</strong> When comparing charts, keep axes the same</li>
<li><strong>Add Context:</strong> Include benchmarks, targets, or comparison lines</li>
</ol>
</div>`,
        illustration: "Raw Data → Choose Chart Type → Customize Aesthetics → Interpret Patterns → Communicate Insights",
        caseProblem: "A sales manager presents quarterly results using a pie chart with 12 slices (one per month). The CEO can't tell which months performed best.",
        caseSolution: "Recreated as a line graph showing monthly trend, with bar chart overlay for quarterly totals. Added target line for context.",
        caseOutcome: "CEO immediately spotted Q3 underperformance and seasonal pattern. Adjusted Q4 strategy, resulting in 15% revenue increase.",
        applications: ["Business Dashboards (KPIs)", "Scientific Research Papers", "Marketing Campaign Reports", "Financial Analysis", "Quality Control Monitoring", "Academic Presentations"],
        challenges: "Choosing wrong chart type, over-complicating with too many elements, misleading scales, poor color choices for colorblind viewers.",
        research: "Interactive visualizations with Plotly and Shiny, 3D visualizations in VR/AR, Real-time streaming data dashboards, AI-generated chart recommendations.",
        toolMapping: "Base R: hist(), boxplot(), barplot(), plot(), pie(). Advanced: ggplot2, plotly, lattice, highcharter.",
        experientialActivity: "Find 3 charts in news articles. For each: (1) Identify the chart type, (2) What question does it answer? (3) Is it the best choice? (4) How would you improve it?",
        projectIPO: {
            input: "Student exam scores dataset (100 students, 5 subjects).",
            process: "Create: (1) Histogram of overall scores, (2) Boxplot by subject to find outliers, (3) Bar chart of average by subject, (4) Scatterplot of Math vs Science scores.",
            output: "A 4-panel visualization revealing: score distribution is normal, Physics has outliers, Math has highest average, strong correlation between Math and Science."
        },
        quizQuestions: [
            "When should you use a histogram vs a boxplot?",
            "Why are pie charts criticized by data visualization experts?",
            "What does 'pch=19' do in a scatterplot?",
            "How do you add a trend line to a scatterplot?",
            "What's the difference between 'type=\"l\"' and 'type=\"p\"' in plot()?",
            "Why should you avoid 3D charts?"
        ],
        examQuestions5M: [
            "Explain the difference between bar charts and histograms with examples.",
            "Discuss three principles of effective data visualization.",
            "Describe when to use a scatterplot vs a line graph."
        ],
        examQuestions10M: [
            "Compare and contrast all 6 chart types covered (Histogram, Boxplot, Bar Chart, Line Graph, Scatterplot, Pie Chart). For each, provide: (a) purpose, (b) appropriate data types, (c) R code example, (d) interpretation guidance, (e) common mistakes to avoid. Create a decision tree diagram to help choose the right chart type."
        ],
        nextTopic: "Unit 4: Statistics & Machine Learning",
        nextLinkage: "You can now visualize data beautifully! Next, we'll use statistics to make predictions and decisions.",
        nextReading: "Practice: Create all 6 chart types using the built-in 'mtcars' dataset in R. Which chart reveals the most interesting pattern?"
    },
    "u3-t3": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3, Topic 3 | ggplot2 Grammar of Graphics",
        hook: "ggplot2: Where art meets science in data visualization!",
        position: "Topic 3 of 6 in Unit 3",
        prerequisites: "Basic R plotting, understanding of data frames.",
        outcomes: ["Master ggplot2 syntax and layering", "Create professional visualizations", "Understand aesthetic mappings", "Apply themes and customizations"],
        subTopics: "ggplot2 Philosophy, Aesthetic Mappings, Geometries (geoms), Scales, Facets, Themes, Layering",
        syllabusMapping: "Unit 3: Data Visualization - Advanced Graphics",
        rVersion: "4.3.3",
        rCode: `library(ggplot2)

# Sample data
data <- data.frame(
  x = 1:10,
  y = c(2, 4, 3, 5, 7, 6, 8, 9, 10, 11),
  category = rep(c("A", "B"), each = 5)
)

# Basic ggplot
ggplot(data, aes(x = x, y = y)) +
  geom_point() +
  geom_line() +
  labs(title = "My First ggplot", x = "X Axis", y = "Y Axis") +
  theme_minimal()

# With color mapping
ggplot(data, aes(x = x, y = y, color = category)) +
  geom_point(size = 3) +
  geom_smooth(method = "lm", se = FALSE) +
  theme_bw()`,
        rInterpretation: "<strong>ggplot2 Grammar of Graphics:</strong><br><br>📊 <strong>Layered Approach:</strong> ggplot2 builds plots in layers - data + aesthetics + geometries + themes.<br><br>🎨 <strong>Aesthetic Mappings:</strong> aes() maps data to visual properties (x, y, color, size, shape).<br><br>📈 <strong>Geometries:</strong> geom_point(), geom_line(), geom_bar() define how data is displayed.<br><br>🎯 <strong>Professional Output:</strong> Publication-ready graphics with minimal code.",
        nextReading: "Advanced ggplot2 techniques and faceting."
    },
    "u3-t4": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3, Topic 4 | Advanced Visualizations & Faceting",
        hook: "One plot is good, multiple plots are better!",
        position: "Topic 4 of 6 in Unit 3",
        prerequisites: "ggplot2 basics from previous topic.",
        outcomes: ["Create multi-panel plots with faceting", "Build complex visualizations", "Use advanced geoms", "Combine multiple plots"],
        subTopics: "Facet Wrap, Facet Grid, Heatmaps, Violin Plots, Density Plots, Combining Plots, Annotations",
        syllabusMapping: "Unit 3: Data Visualization - Advanced Techniques",
        rVersion: "4.3.3",
        rCode: `library(ggplot2)

# Faceting example
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point() +
  facet_wrap(~ cyl) +
  labs(title = "MPG vs Weight by Cylinders")

# Heatmap
ggplot(mtcars, aes(x = factor(cyl), y = factor(gear), fill = mpg)) +
  geom_tile() +
  scale_fill_gradient(low = "white", high = "red") +
  labs(title = "Heatmap of MPG")`,
        rInterpretation: "<strong>Advanced Visualizations:</strong><br><br>🔲 <strong>Faceting:</strong> Split data into multiple panels for comparison.<br><br>🌡️ <strong>Heatmaps:</strong> Show relationships using color intensity.<br><br>🎻 <strong>Violin Plots:</strong> Combine box plots with density plots for richer insights.",
        nextReading: "Interactive visualizations with plotly."
    },
    "u3-t5": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3, Topic 5 | Interactive Plots with plotly",
        hook: "Make your plots come alive with interactivity!",
        position: "Topic 5 of 6 in Unit 3",
        prerequisites: "ggplot2 knowledge, basic HTML understanding.",
        outcomes: ["Create interactive visualizations", "Add hover tooltips", "Enable zoom and pan", "Build dashboards"],
        subTopics: "plotly Basics, Converting ggplot to plotly, Hover Information, 3D Plots, Animations, Dashboards",
        syllabusMapping: "Unit 3: Data Visualization - Interactive Graphics",
        rVersion: "4.3.3",
        rCode: `library(plotly)

# Interactive scatter plot
plot_ly(mtcars, x = ~wt, y = ~mpg, type = 'scatter', mode = 'markers',
        marker = list(size = 10, color = ~hp, colorscale = 'Viridis'),
        text = ~paste('Car:', rownames(mtcars), '<br>HP:', hp))

# Convert ggplot to interactive
library(ggplot2)
p <- ggplot(mtcars, aes(x = wt, y = mpg)) + geom_point()
ggplotly(p)`,
        rInterpretation: "<strong>Interactive Visualizations:</strong><br><br>🖱️ <strong>Hover Tooltips:</strong> Show detailed information on mouse hover.<br><br>🔍 <strong>Zoom & Pan:</strong> Users can explore data interactively.<br><br>📊 <strong>Dashboards:</strong> Combine multiple interactive plots for comprehensive analysis.",
        nextReading: "Data storytelling principles."
    },
    "u3-t6": {
        type: "handout",
        courseName: "Data Analytics using R",
        unitAndTopic: "Unit 3, Topic 6 | Data Storytelling & Best Practices",
        hook: "Data tells stories - learn to be a great storyteller!",
        position: "Topic 6 of 6 in Unit 3",
        prerequisites: "All previous visualization topics.",
        outcomes: ["Apply data storytelling principles", "Choose appropriate chart types", "Design for audience", "Avoid common pitfalls"],
        subTopics: "Storytelling Framework, Chart Selection, Color Theory, Accessibility, Common Mistakes, Presentation Tips",
        syllabusMapping: "Unit 3: Data Visualization - Communication",
        rVersion: "4.3.3",
        rCode: `# Best Practices Example
library(ggplot2)

# GOOD: Clear, focused visualization
ggplot(mtcars, aes(x = wt, y = mpg)) +
  geom_point(color = "steelblue", size = 3) +
  geom_smooth(method = "lm", se = FALSE, color = "red") +
  labs(
    title = "Fuel Efficiency Decreases with Vehicle Weight",
    subtitle = "Analysis of 32 automobiles (1973-74 models)",
    x = "Weight (1000 lbs)",
    y = "Miles per Gallon",
    caption = "Source: Motor Trend Magazine"
  ) +
  theme_minimal() +
  theme(plot.title = element_text(face = "bold", size = 14))`,
        rInterpretation: "<strong>Data Storytelling:</strong><br><br>📖 <strong>Clear Message:</strong> Every visualization should answer a specific question.<br><br>🎨 <strong>Design Principles:</strong> Use color purposefully, minimize clutter, maximize data-ink ratio.<br><br>👥 <strong>Know Your Audience:</strong> Technical vs. executive audiences need different approaches.<br><br>✅ <strong>Best Practices:</strong> Label axes, add titles, cite sources, use accessible colors.",
        nextReading: "Unit 3 Virtual Lab - Practice your visualization skills!"
    },
    "u3-lab": {
        type: "virtual-lab",
        unitId: 3
    }
};

window.unit3Content = unit3Content;
