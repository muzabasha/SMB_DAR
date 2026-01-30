const app = {
    state: {
        currentPage: 'dashboard',
        currentUnitId: 1,
        currentTopicId: null,
        currentProjectId: null,
        isDarkMode: false,
        isSidebarOpen: true,
        progress: 0,
        completedTopics: new Set(),
        bookmarkedTopics: new Set(),
        userSettings: {},
        initRetries: 0,
        maxInitRetries: 50
    },

    init() {
        // Verify all content is loaded
        if (!window.unit1Content || !window.unit2Content || !window.unit3Content || !window.unit4Content) {
            if (this.state.initRetries < this.state.maxInitRetries) {
                this.state.initRetries++;
                console.log(`Content files not loaded. Retry ${this.state.initRetries}/${this.state.maxInitRetries}...`);
                setTimeout(() => this.init(), 100);
                return;
            } else {
                console.error('Content files failed to load after maximum retries');
                this.nodes.contentDisplay.innerHTML = `
                    <div class="card" style="background: #fef2f2; border: 2px solid #ef4444; padding: 30px; border-radius: 12px;">
                        <h2 style="color: #991b1b; margin-bottom: 15px;">⚠️ Content Loading Error</h2>
                        <p style="color: #7f1d1d; margin-bottom: 15px;">The application content failed to load. Please try:</p>
                        <ul style="color: #7f1d1d; padding-left: 20px; margin-bottom: 15px;">
                            <li>Refreshing the page (F5 or Ctrl+R)</li>
                            <li>Clearing browser cache (Ctrl+Shift+Delete)</li>
                            <li>Hard refresh (Ctrl+Shift+R)</li>
                            <li>Trying a different browser</li>
                        </ul>
                        <button onclick="location.reload()" style="background: #ef4444; color: white; padding: 10px 20px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Reload Page</button>
                    </div>
                `;
                return;
            }
        }

        this.loadUserData();
        this.cacheDOM();
        this.bindEvents();
        this.calculateProgress();
        this.render();
    },

    loadUserData() {
        // Load user progress from localStorage
        const savedData = localStorage.getItem('r-analytics-progress');
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                this.state.completedTopics = new Set(data.completedTopics || []);
                this.state.bookmarkedTopics = new Set(data.bookmarkedTopics || []);
                this.state.isDarkMode = data.isDarkMode || false;
                this.state.userSettings = data.userSettings || {};

                // Apply theme
                document.body.classList.toggle('dark-mode', this.state.isDarkMode);
            } catch (e) {
                console.error('Error loading user data:', e);
            }
        }
    },

    saveUserData() {
        try {
            const dataToSave = {
                completedTopics: Array.from(this.state.completedTopics),
                bookmarkedTopics: Array.from(this.state.bookmarkedTopics),
                isDarkMode: this.state.isDarkMode,
                userSettings: this.state.userSettings,
                lastAccessed: new Date().toISOString()
            };
            localStorage.setItem('r-analytics-progress', JSON.stringify(dataToSave));
        } catch (e) {
            console.error('Error saving user data:', e);
        }
    },

    cacheDOM() {
        this.nodes = {
            appContainer: document.getElementById('app-container'),
            sidebar: document.getElementById('sidebar'),
            sidebarNav: document.getElementById('sidebar-nav'),
            contentDisplay: document.getElementById('content-display'),
            themeToggle: document.getElementById('theme-toggle'),
            toggleSidebar: document.getElementById('toggle-sidebar'),
            helpBtn: document.getElementById('help-btn'),
            modalOverlay: document.getElementById('modal-overlay'),
            helpModal: document.getElementById('help-modal'),
            sidebarProgressFill: document.getElementById('sidebar-progress-fill'),
            sidebarProgressText: document.getElementById('sidebar-progress-text'),
            footerProgressVal: document.getElementById('footer-progress-val'),
            closeModal: document.querySelector('.close-modal')
        };
    },

    bindEvents() {
        this.nodes.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.nodes.toggleSidebar.addEventListener('click', () => this.toggleSidebar());
        this.nodes.helpBtn.addEventListener('click', () => this.toggleModal('help', true));
        this.nodes.closeModal.addEventListener('click', () => this.toggleModal('help', false));
        this.nodes.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.nodes.modalOverlay) this.toggleModal('help', false);
        });
    },

    calculateProgress() {
        let totalTopics = 0;
        let completedTopics = 0;
        courseData.units.forEach(unit => {
            unit.topics.forEach(topic => {
                totalTopics++;
                if (topic.status === 'completed') completedTopics++;
            });
        });
        this.state.progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
        this.updateProgressUI();
    },

    updateProgressUI() {
        this.nodes.sidebarProgressFill.style.width = `${this.state.progress}%`;
        this.nodes.sidebarProgressText.innerText = `${this.state.progress}%`;
        this.nodes.footerProgressVal.innerText = `${this.state.progress}%`;
    },

    toggleTheme() {
        this.state.isDarkMode = !this.state.isDarkMode;
        document.body.classList.toggle('dark-mode', this.state.isDarkMode);
        this.nodes.themeToggle.querySelector('.moon-icon').classList.toggle('hidden', this.state.isDarkMode);
        this.nodes.themeToggle.querySelector('.sun-icon').classList.toggle('hidden', !this.state.isDarkMode);
    },

    toggleSidebar() {
        this.state.isSidebarOpen = !this.state.isSidebarOpen;
        this.nodes.sidebar.classList.toggle('collapsed', !this.state.isSidebarOpen);
    },

    toggleModal(type, show) {
        this.nodes.modalOverlay.classList.toggle('hidden', !show);
        if (type === 'help') this.nodes.helpModal.classList.toggle('hidden', !show);
    },

    navigateTo(page, id) {
        this.state.currentPage = page;
        if (page === 'unit') {
            this.state.currentUnitId = id;
            this.state.currentTopicId = null;
            this.state.currentProjectId = null;
        } else if (page === 'topic') {
            this.state.currentTopicId = id;
            this.state.currentProjectId = null;
            // Find unit id for this topic
            const unit = courseData.units.find(u => u.topics.some(t => t.id === id));
            this.state.currentUnitId = unit.id;
        } else if (page === 'project') {
            this.state.currentProjectId = id;
            this.state.currentUnitId = null;
            this.state.currentTopicId = null;
        } else if (page === 'quiz') {
            this.state.currentUnitId = id;
            this.state.currentTopicId = null;
            this.state.currentProjectId = null;
        } else {
            this.state.currentUnitId = null;
            this.state.currentTopicId = null;
            this.state.currentProjectId = null;
        }
        this.render();
        window.scrollTo(0, 0);
    },

    render() {
        this.renderSidebar();

        if (this.state.currentPage === 'dashboard') {
            this.renderDashboard();
        } else if (this.state.currentPage === 'unit') {
            this.renderUnitPage();
        } else if (this.state.currentPage === 'topic') {
            this.renderTopicPage();
        } else if (this.state.currentPage === 'project') {
            this.renderProjectPage();
        } else if (this.state.currentPage === 'quiz') {
            this.renderQuizPage();
        }

        // Re-initialize icons and code highlighting after render
        setTimeout(() => {
            try {
                lucide.createIcons();
            } catch (e) {
                console.error('Error initializing Lucide icons:', e);
            }
            try {
                if (window.Prism) window.Prism.highlightAll();
            } catch (e) {
                console.error('Error highlighting code:', e);
            }
        }, 0);
    },

    renderQuizPage() {
        const unitNumber = this.state.currentUnitId;
        this.nodes.contentDisplay.innerHTML = `<div id="quiz-container"></div>`;
        QuizComponent.init(unitNumber);
    },

    renderProjectPage() {
        const project = courseData.projects.find(p => p.id === this.state.currentProjectId);
        if (!project) return;
        this.nodes.contentDisplay.innerHTML = Components.ProjectDetailsBlock(project);
    },

    renderSidebar() {
        let html = '';
        courseData.units.forEach(unit => {
            html += `<div class="nav-unit">
                <div class="unit-header" onclick="app.navigateTo('unit', ${unit.id})">Unit ${unit.id}</div>
                ${unit.topics.map(t => Components.SidebarNavItem(t, this.state.currentTopicId === t.id)).join('')}
            </div>`;
        });
        this.nodes.sidebarNav.innerHTML = html;
        lucide.createIcons();
    },

    renderDashboard() {
        let html = `
            <div class="dashboard-grid">
                ${Components.WelcomeCard(this.state.progress)}

                <section class="course-brief" style="margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div class="card" style="border-top: 4px solid var(--primary);">
                        <h3 style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                            <i data-lucide="target" style="color: var(--primary);"></i> Course Objectives
                        </h3>
                        <ul style="font-size: 0.9rem; line-height: 1.6; padding-left: 20px;">
                            ${courseData.courseObjectives.map(obj => `<li>${obj}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="card" style="border-top: 4px solid var(--secondary);">
                        <h3 style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                            <i data-lucide="award" style="color: var(--secondary);"></i> Course Outcomes
                        </h3>
                        <ul style="font-size: 0.9rem; line-height: 1.6; padding-left: 20px;">
                            ${courseData.courseOutcomes.map(co => `<li>${co}</li>`).join('')}
                        </ul>
                    </div>
                </section>

                <div class="unit-cards-container">
                    ${courseData.units.map(u => Components.UnitCard(u)).join('')}
                </div>

                <section class="quiz-hub" style="margin-top: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px; color: white;">
                    <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
                        <i data-lucide="help-circle" style="color: white;"></i> 📝 Unit Quizzes
                    </h3>
                    <p style="margin: 10px 0 20px 0; opacity: 0.9;">Test your understanding of each unit with interactive quizzes featuring immediate feedback and explanations.</p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                        ${courseData.units.map(u => `
                            <button onclick="app.navigateTo('quiz', ${u.id})" 
                                    style="padding: 20px; background: rgba(255,255,255,0.15); border: 2px solid rgba(255,255,255,0.3); border-radius: 8px; color: white; cursor: pointer; font-size: 16px; font-weight: 600; transition: all 0.3s; text-align: left;">
                                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                    <i data-lucide="book-open" style="color: white;"></i>
                                    <span>Unit ${u.id}</span>
                                </div>
                                <div style="font-size: 12px; opacity: 0.8;">${u.topics.length} topics • 5 questions</div>
                            </button>
                        `).join('')}
                    </div>
                </section>
                
                <section class="project-hub" style="margin-top: 20px;">
                    <h3 style="margin-bottom: 20px;">🚀 Project-Based Learning HUB</h3>
                    <div style="display: grid; gap: 15px;">
                        ${courseData.projects.map(p => Components.ProjectCard(p)).join('')}
                    </div>
                </section>

                <section class="resources-section" style="margin-top: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3>📚 Recommended Resources</h3>
                        <button class="icon-btn" style="font-size: 0.7rem; opacity: 0.5;" onclick="app.runAudit()">Admin Audit</button>
                    </div>
                    <div class="card" style="border-left: 5px solid #10b981;">
                        <p style="font-size: 0.9rem; font-weight: 600;">Core Textbook:</p>
                        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 5px;">
                            W. N. Venables, D.M. Smith and the R Development Core Team, 
                            "An Introduction to R, Notes on R: A Programming Environment for Data Analysis and Graphics", 2008
                        </p>
                    </div>
                </section>

                ${Components.NextClassPreview()}
            </div>
        `;
        this.nodes.contentDisplay.innerHTML = html;
    },

    checkAnswer(index) {
        // Simple visual feedback for now
        const options = document.querySelectorAll('.option-btn');
        options.forEach((btn, i) => {
            if (i === index) {
                btn.style.background = '#d1fae5';
                btn.style.borderColor = '#10b981';
            }
        });
        alert('Good job! In the full version, this will track your score.');
    },

    renderUnitPage() {
        const unit = courseData.units.find(u => u.id === this.state.currentUnitId);
        if (!unit) return;

        let html = `
            <div class="unit-view">
                <div class="card welcome-card" style="background: var(--bg-card); color: var(--text-main); border: 1px solid var(--border);">
                    <h2>Unit ${unit.id}: ${unit.title}</h2>
                    <p>${unit.description}</p>
                    <div class="objectives" style="margin-top: 20px;">
                        <h4>Learning Objectives:</h4>
                        <ul>
                            ${unit.objectives.map(o => `<li>${o}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div class="timeline-container" style="margin-top: 40px;">
                    <h3>Topic Roadmap</h3>
                    <div class="timeline" style="margin-top: 20px; display: flex; flex-direction: column; gap: 15px;">
                        ${unit.topics.map(t => `
                            <div class="nav-item card" onclick="app.navigateTo('topic', '${t.id}')">
                                <i data-lucide="${t.status === 'completed' ? 'check-circle' : 'circle'}"></i>
                                <span>${t.title}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        this.nodes.contentDisplay.innerHTML = html;
    },

    renderTopicPage() {
        const unit = courseData.units.find(u => u.topics.some(t => t.id === this.state.currentTopicId));
        const topic = unit ? unit.topics.find(t => t.id === this.state.currentTopicId) : null;

        if (!topic) {
            this.nodes.contentDisplay.innerHTML = `
                <div class="card">
                    <h2>Topic not found!</h2>
                    <p>The requested topic could not be found.</p>
                    <button class="icon-btn" style="background: var(--primary); color: white; margin-top: 20px; padding: 10px 20px;" onclick="app.navigateTo('dashboard')">Back to Dashboard</button>
                </div>
            `;
            return;
        }

        // Get content using the helper function
        const content = courseData.getTopicContent(topic);

        // Check if content exists and is properly loaded
        const hasValidContent = content &&
            content.length > 0 &&
            content[0] &&
            typeof content[0] === 'object' &&
            content[0].type;

        console.log('Topic:', topic.id, 'Has valid content:', hasValidContent);

        if (!hasValidContent) {
            this.nodes.contentDisplay.innerHTML = `
                <div class="card">
                    <h2>Content Loading...</h2>
                    <p>This topic's content is being prepared. Please check back soon!</p>
                    <div style="margin: 20px 0;">
                        <h3>What you can do meanwhile:</h3>
                        <ul style="margin-top: 10px; padding-left: 20px;">
                            <li>Review the previous topics</li>
                            <li>Check out the project examples</li>
                            <li>Practice with the R console</li>
                            <li>Read the course objectives for this unit</li>
                        </ul>
                    </div>
                    <div style="display: flex; gap: 10px; margin-top: 20px;">
                        <button class="icon-btn" style="background: var(--primary); color: white; padding: 10px 20px;" onclick="app.navigateTo('dashboard')">
                            <i data-lucide="arrow-left" style="margin-right: 8px;"></i>Back to Dashboard
                        </button>
                        <button class="icon-btn" style="background: var(--secondary); color: white; padding: 10px 20px;" onclick="app.navigateTo('unit', ${unit.id})">
                            <i data-lucide="book-open" style="margin-right: 8px;"></i>View Unit ${unit.id}
                        </button>
                    </div>
                </div>
            `;
            return;
        }

        const isCompleted = this.state.completedTopics.has(topic.id);
        const isBookmarked = this.state.bookmarkedTopics.has(topic.id);

        let html = `
            <div class="topic-view">
                <div class="topic-title-bar">
                    <div>
                        <h2>${topic.title}</h2>
                        <p class="topic-meta">Unit ${unit.id} | Interactive Lesson</p>
                    </div>
                    <div class="topic-actions">
                        <button class="icon-btn bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" 
                                onclick="app.toggleBookmark('${topic.id}')" 
                                title="${isBookmarked ? 'Remove bookmark' : 'Bookmark topic'}">
                            <i data-lucide="${isBookmarked ? 'bookmark' : 'bookmark'}"></i>
                        </button>
                        <button class="icon-btn complete-btn ${isCompleted ? 'completed' : ''}" 
                                onclick="app.markTopicCompleted('${topic.id}')" 
                                title="${isCompleted ? 'Already completed' : 'Mark as completed'}"
                                ${isCompleted ? 'disabled' : ''}>
                            <i data-lucide="${isCompleted ? 'check-circle' : 'circle'}"></i>
                            ${isCompleted ? 'Completed' : 'Mark Complete'}
                        </button>
                    </div>
                </div>
                <div class="interactive-flow">
                    ${content.map((block, idx) => `
                        <div class="interactive-block" style="margin-bottom: 40px; animation: slideUp 0.5s ease-out ${idx * 0.1}s both;">
                            ${this.renderBlock(block)}
                        </div>
                    `).join('')}
                </div>
                <div class="topic-footer" style="margin-top: 50px; padding-top: 20px; border-top: 1px solid var(--border);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <button class="icon-btn" style="background: var(--primary); color: white; padding: 12px 24px;" onclick="app.navigateTo('dashboard')">
                            <i data-lucide="arrow-left" style="margin-right: 8px;"></i>Back to Dashboard
                        </button>
                        ${!isCompleted ? `
                        <button class="icon-btn" style="background: var(--secondary); color: white; padding: 12px 24px;" onclick="app.markTopicCompleted('${topic.id}')">
                            <i data-lucide="check-circle" style="margin-right: 8px;"></i>Complete Lesson
                        </button>
                        ` : `
                        <span class="completion-badge" style="background: var(--secondary); color: white; padding: 12px 24px; border-radius: 8px;">
                            <i data-lucide="check-circle" style="margin-right: 8px;"></i>Lesson Completed!
                        </span>
                        `}
                    </div>
                </div>
            </div>
        `;
        this.nodes.contentDisplay.innerHTML = html;

        // Re-initialize icons after rendering
        setTimeout(() => lucide.createIcons(), 0);
    },

    renderBlock(block) {
        if (block.type === 'code-explanation') return Components.ThreePanelLayout(block);
        if (block.type === 'concept') return Components.ConceptBlock(block);
        if (block.type === 'error-slide') return Components.ErrorBlock(block);
        if (block.type === 'visualization') return Components.VisualizationBlock(block);
        if (block.type === 'activity') return Components.ActivityBlock(block);
        if (block.type === 'handout') return Components.HandoutBlock(block);
        return '';
    },

    copyCode(e) {
        // Find the nearest pre/code block to the clicked button
        const btn = e.currentTarget;
        const codeBlock = btn.closest('.code-workflow, .code-wrapper')?.querySelector('code');

        if (codeBlock) {
            navigator.clipboard.writeText(codeBlock.innerText);
            const originalText = btn.innerText;
            btn.innerText = 'Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }
    },

    revealOutcome() {
        const reveal = document.getElementById('outcome-reveal');
        reveal.classList.remove('hidden');
        lucide.createIcons();
    },

    runAudit() {
        console.log("Starting Pedagogical Audit...");
        let report = "--- CONTENT AUDIT REPORT ---\n\n";
        let score = 0;
        let total = 0;

        courseData.units.forEach(u => {
            report += `Unit ${u.id}: ${u.title}\n`;
            u.topics.forEach(t => {
                total++;
                let hasInteractive = t.content && t.content.some(b => b.type === 'activity' || b.type === 'code-explanation');
                let blocks = t.content ? t.content.length : 0;

                if (hasInteractive && blocks > 0) {
                    report += `  ✅ ${t.title} (${blocks} blocks)\n`;
                    score++;
                } else {
                    report += `  ❌ ${t.title} - MISSING CONTENT OR INTERACTIVITY\n`;
                }
            });
        });

        const finalScore = Math.round((score / total) * 100);
        report += `\nFINAL QUALITY SCORE: ${finalScore}%\n`;
        alert(report);
    },

    toggleBookmark(topicId) {
        if (this.state.bookmarkedTopics.has(topicId)) {
            this.state.bookmarkedTopics.delete(topicId);
        } else {
            this.state.bookmarkedTopics.add(topicId);
        }
        this.saveUserData();
        this.render();
    },

    markTopicCompleted(topicId) {
        this.state.completedTopics.add(topicId);

        // Update topic status in courseData
        courseData.units.forEach(unit => {
            const topic = unit.topics.find(t => t.id === topicId);
            if (topic) {
                topic.status = 'completed';
            }
        });

        this.calculateProgress();
        this.saveUserData();
        this.render();
    }
};

// Start the app
document.addEventListener('DOMContentLoaded', () => app.init());
