const courseData = {
    title: "Data Analytics using R",
    semester: "Even Semester 2025-26",
    branch: "Non-CSE Students",
    rVersion: "4.3.3",
    courseMindMap: {
        center: "Data Analytics with R",
        branches: [
            {
                title: "Unit 1: Foundations",
                subItems: ["Data Literacy", "Classification", "Big Data 3Vs", "Applications"]
            },
            {
                title: "Unit 2: Programming",
                subItems: ["R Syntax", "Control Loops", "Vectors/Matrices", "Functions"]
            },
            {
                title: "Unit 3: Visualization",
                subItems: ["Base Graphics", "ggplot2 Logic", "External Data", "Storytelling"]
            },
            {
                title: "Unit 4: Advanced",
                subItems: ["ML Models", "Regression", "Random Forest", "Optimization"]
            }
        ]
    },
    instructor: {
        name: "Dr. Syed Muzamil Basha",
        title: "Professor, School of Computer Science & Engineering",
        email: "muzamilbasha.s@reva.edu.in",
        phone: ["8331977568", "7259421438"],
        linkedin: "https://www.linkedin.com/in/muzamil-basha-syed-19612a25/",
        bio: "Dr. Syed Muzamil Basha is a Professor in the School of Computer Science and Engineering at REVA University, Bangalore, Karnataka, India. He earned his Full time Ph.D. from VIT University, Vellore (Deemed to be University (IoE)) (2016–2019), and has 15 years of teaching and research experience, including 2 years of postdoctoral experience at University of Hail, Kingdom of Saudi Arabia (2020–2022). Dr. Basha is recognized as the 3rd Best Scientist at REVA University (AD Scientific Index 2024) with a VIDWAN Score of 9.5/10.",
        institution: "REVA University, Bangalore, Karnataka, India",
        address: "Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru, Karnataka 560064",
        photo: "assets/DP_profile.png",

        // Academic Credentials
        credentials: {
            phd: "VIT University, Vellore (Deemed to be University (IoE)) (2016–2019)",
            postdoc: "University of Hail, Kingdom of Saudi Arabia (2020–2022)",
            experience: "15 years of teaching and research experience"
        },

        // Recognition & Awards
        recognition: {
            ranking: "3rd Best Scientist at REVA University (AD Scientific Index 2024)",
            vidwanScore: "9.5/10",
            awards: [
                "International Outstanding Teacher Award 2024-25 (Green ThinkerZ Society and NGO Darpan, NITI Aayog, January 2025)",
                "Best Professor for Computer Science Bengaluru North (Karnataka Educational Awards, September 2024)",
                "Best Researcher Award (Knowledge Research Academy, Coimbatore, August 2024)",
                "IEEE R10 Ethics Champion recognition (2023–24)",
                "RAMFOO Outstanding Faculty Award (March 2023)",
                "CHSN-2022 Young Researcher Award (3rd International Conference on Computer Vision, December 2022)",
                "Best Paper Award (IACIT, REVA University, 2021–22)",
                "Raman Research Award (VIT, SCI indexed journal, impact factor 2.101, 2019–20)",
                "Research Award (VIT, high-quality publications, 2018–19)",
                "Best Researcher Award for PhD thesis supervision (Dr. Sailaja Thota, 8th International Conference on ALLAM in Cognitive Science, December 2024)",
                "Certificate of Merit for securing 3rd place in M.Tech at VIT University (2010–11)"
            ]
        },

        // Research Portfolio
        research: {
            publications: {
                scopusIndexed: "65 Scopus-indexed publications",
                journals: "40 journals: 7 Q1, 9 Q2, 10 Q3, 6 Q4",
                conferences: "15 conference proceedings",
                highlights: [
                    "IEEE Transactions on Consumer Electronics",
                    "IEEE Internet of Things Journal",
                    "PLOS ONE",
                    "BMC Medical Imaging"
                ]
            },
            textbooks: {
                authored: "25+ textbooks published with international publishers including Springer and IGI Global",
                edited: "2 edited textbooks"
            },
            patents: "Multiple patents including design registrations and international patents (German Utility Patent, IP Australia Patent)",
            phdScholars: {
                awarded: "3 PhD scholars awarded degrees",
                submitted: "2 Scholars submitted Thesis",
                ongoing: "3 currently under guidance"
            }
        },

        // Leadership & Administrative Roles
        leadership: {
            current: [
                "Research and Innovation Vertical Head at REVA University (June 2021 - Feb 2026)",
                "NBA-NAAC Coordinator",
                "IEEE Computer Society Chair"
            ],
            roles: [
                "Academic Council and Board of Studies member for institutions across Karnataka, Andhra Pradesh, and Tamil Nadu",
                "Session chair and technical program chair for international conferences such as the IDCIoT and WSSE"
            ]
        },

        // Editorial & Review Roles
        editorial: {
            editorialBoard: [
                "American Journal of Health Research",
                "Journal of Ubiquitous Computing and Communication Technologies",
                "Discover Analytics",
                "Journal of Innovative Technology Convergence",
                "Milestone Transactions on Medical Technometrics"
            ],
            seniorReviewer: [
                "IEEE Transactions on Consumer Electronics",
                "IEEE Internet of Things Journal",
                "Plos One"
            ],
            adhocReviewer: [
                "International Journal of Project Management",
                "International Journal of Healthcare Information Systems",
                "Recent Patents on Computer Science"
            ]
        },

        // Expertise Areas
        expertise: [
            "Agentic AI",
            "Natural Language Processing",
            "Big Data Analytics",
            "Blockchain Management",
            "Internet of Things (IoT)",
            "Machine Learning & Deep Learning",
            "Federated Learning",
            "Healthcare Informatics",
            "Cybersecurity"
        ],

        // Professional Memberships
        memberships: [
            "ACM Professional Member",
            "ISTE Lifetime Member"
        ],

        // Research Profiles & Links
        profiles: {
            publons: "https://publons.com/researcher/3362117/syed-muzamil",
            googleScholar: "https://scholar.google.co.in/citations?user=weNQmW0AAAAJ&hl=en",
            orcid: "http://orcid.org/0000-0002-1169-3151",
            scopus: "https://www.scopus.com/authid/detail.uri?authorId=57195586589",
            researchGate: "https://www.researchgate.net/profile/Muzamil_Basha",
            linkedin: "https://www.linkedin.com/in/muzamil-basha-syed-19612a25/",
            github: "https://github.com/muzabasha/SMB_DAR"
        }
    },
    courseVideo: {
        title: "Making Data Memorable",
        description: "Learn how to transform raw data into compelling visual stories. This course overview video introduces you to the fundamentals of data analytics using R and shows you how to create memorable insights from data.",
        duration: "3:45",
        thumbnail: "assets/video-thumbnail.jpg",
        videoUrl: "assets/Making_Data_Memorable.mp4",
        videoWebM: "assets/Making_Data_Memorable.webm",
        autoplay: false,
        controls: true,
        muted: false,
        poster: "assets/video-thumbnail.jpg"
    },
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
