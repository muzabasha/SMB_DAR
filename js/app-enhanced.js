// Enhanced Data Analytics R Toolkit - All 23 Features Implementation
const app = {
    state: {
        // Core Navigation
        currentPage: 'dashboard',
        currentUnitId: 1,
        currentTopicId: null,
        currentProjectId: null,

        // UI State
        isDarkMode: false,
        isSidebarOpen: true,
        isOfflineMode: false,

        // Progress & Learning
        progress: 0,
        completedTopics: new Set(),
        bookmarkedTopics: new Set(),
        topicNotes: new Map(),
        studyTime: new Map(),
        learningStreak: 0,

        // User Preferences
        userSettings: {
            autoSave: true,
            notifications: true,
            animationsEnabled: true,
            fontSize: 'medium',
            codeTheme: 'dark',
            language: 'en'
        },

        // Advanced Features
        searchHistory: [],
        recentTopics: [],
        achievements: new Set(),
        studyGoals: {
            dailyMinutes: 30,
            weeklyTopics: 5
        },

        // Analytics
        sessionStartTime: null,
        totalStudyTime: 0,
        topicsViewedToday: new Set(),

        // Collaboration (for future)
        sharedNotes: new Map(),
        discussionThreads: new Map()
    },

    // 1. Enhanced Initialization with Offline Support
    async init() {
        try {
            this.state.sessionStartTime = Date.now();
            await this.loadUserData();
            this.setupOfflineSupport();
            this.cacheDOM();
            this.bindEvents();
            this.initializeKeyboardShortcuts();
            this.calculateProgress();
            this.updateLearningStreak();
            this.checkAchievements();
            this.render();
            this.startSessionTracking();
            this.showWelcomeMessage();
        } catch (error) {
            console.error('App initialization failed:', error);
            this.showNotification('App failed to initialize. Please refresh.', 'error');
        }
    },

    // 2. Comprehensive Data Persistence
    async loadUserData() {
        try {
            const savedData = localStorage.getItem('r-analytics-progress');
            if (savedData) {
                const data = JSON.parse(savedData);

                // Restore all user data
                this.state.completedTopics = new Set(data.completedTopics || []);
                this.state.bookmarkedTopics = new Set(data.bookmarkedTopics || []);
                this.state.topicNotes = new Map(data.topicNotes || []);
                this.state.studyTime = new Map(data.studyTime || []);
                this.state.isDarkMode = data.isDarkMode || false;
                this.state.userSettings = { ...this.state.userSettings, ...(data.userSettings || {}) };
                this.state.searchHistory = data.searchHistory || [];
                this.state.recentTopics = data.recentTopics || [];
                this.state.achievements = new Set(data.achievements || []);
                this.state.studyGoals = { ...this.state.studyGoals, ...(data.studyGoals || {}) };
                this.state.totalStudyTime = data.totalStudyTime || 0;
                this.state.learningStreak = data.learningStreak || 0;

                // Apply theme
                document.body.classList.toggle('dark-mode', this.state.isDarkMode);
                this.applyUserSettings();
            }
        } catch (error) {
            console.error('Failed to load user data:', error);
        }
    },

    // 3. Advanced Data Saving with Backup
    saveUserData() {
        try {
            const dataToSave = {
                completedTopics: Array.from(this.state.completedTopics),
                bookmarkedTopics: Array.from(this.state.bookmarkedTopics),
                topicNotes: Array.from(this.state.topicNotes),
                studyTime: Array.from(this.state.studyTime),
                isDarkMode: this.state.isDarkMode,
                userSettings: this.state.userSettings,
                searchHistory: this.state.searchHistory,
                recentTopics: this.state.recentTopics,
                achievements: Array.from(this.state.achievements),
                studyGoals: this.state.studyGoals,
                totalStudyTime: this.state.totalStudyTime,
                learningStreak: this.state.learningStreak,
                lastAccessed: new Date().toISOString(),
                version: '2.0'
            };

            localStorage.setItem('r-analytics-progress', JSON.stringify(dataToSave));

            // Create backup
            localStorage.setItem('r-analytics-backup', JSON.stringify(dataToSave));

            if (this.state.userSettings.notifications) {
                this.showNotification('Progress saved automatically', 'success', 2000);
            }
        } catch (error) {
            console.error('Failed to save user data:', error);
            this.showNotification('Failed to save progress', 'error');
        }
    },

    // 4. Offline Support Setup
    setupOfflineSupport() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(err => {
                console.log('Service Worker registration failed:', err);
            });
        }

        // Detect online/offline status
        window.addEventListener('online', () => {
            this.state.isOfflineMode = false;
            this.showNotification('Back online! 🌐', 'success');
        });

        window.addEventListener('offline', () => {
            this.state.isOfflineMode = true;
            this.showNotification('You\'re offline. Content cached for viewing. 📱', 'info');
        });
    },

    // 5. Enhanced DOM Caching
    cacheDOM() {
        this.nodes = {
            // Core Elements
            appContainer: document.getElementById('app-container'),
            sidebar: document.getElementById('sidebar'),
            sidebarNav: document.getElementById('sidebar-nav'),
            contentDisplay: document.getElementById('content-display'),

            // Navigation
            themeToggle: document.getElementById('theme-toggle'),
            toggleSidebar: document.getElementById('toggle-sidebar'),
            helpBtn: document.getElementById('help-btn'),
            settingsBtn: document.getElementById('settings-btn'),

            // Search
            searchInput: document.getElementById('search-input'),
            searchBtn: document.getElementById('search-btn'),

            // Modals & Panels
            modalOverlay: document.getElementById('modal-overlay'),
            helpModal: document.getElementById('help-modal'),
            settingsPanel: document.getElementById('settings-panel'),
            notesPanel: document.getElementById('notes-panel'),
            achievementsPanel: document.getElementById('achievements-panel'),

            // Progress Elements
            sidebarProgressFill: document.getElementById('sidebar-progress-fill'),
            sidebarProgressText: document.getElementById('sidebar-progress-text'),
            footerProgressVal: document.getElementById('footer-progress-val'),

            // Settings Elements
            closeSettings: document.getElementById('close-settings'),
            themeToggleSettings: document.getElementById('theme-toggle-settings'),
            completedTopicsCount: document.getElementById('completed-topics'),
            bookmarkedTopicsCount: document.getElementById('bookmarked-topics'),
            totalProgressCount: document.getElementById('total-progress'),

            // Control Elements
            closeModal: document.querySelector('.close-modal'),

            // New Advanced Elements
            streakCounter: document.getElementById('streak-counter'),
            studyTimer: document.getElementById('study-timer'),
            achievementBadges: document.getElementById('achievement-badges'),
            quickActions: document.getElementById('quick-actions'),
            breadcrumbs: document.getElementById('breadcrumbs')
        };
    },

    // 6. Comprehensive Event Binding
    bindEvents() {
        // Theme & UI
        this.nodes.themeToggle?.addEventListener('click', () => this.toggleTheme());
        this.nodes.themeToggleSettings?.addEventListener('click', () => this.toggleTheme());
        this.nodes.toggleSidebar?.addEventListener('click', () => this.toggleSidebar());

        // Modals & Panels
        this.nodes.helpBtn?.addEventListener('click', () => this.toggleModal('help', true));
        this.nodes.settingsBtn?.addEventListener('click', () => this.toggleSettings(true));
        this.nodes.closeSettings?.addEventListener('click', () => this.toggleSettings(false));
        this.nodes.closeModal?.addEventListener('click', () => this.toggleModal('help', false));

        // Search
        this.nodes.searchBtn?.addEventListener('click', () => this.performSearch());
        this.nodes.searchInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });
        this.nodes.searchInput?.addEventListener('input', (e) => this.handleSearchInput(e));

        // Modal Overlay
        this.nodes.modalOverlay?.addEventListener('click', (e) => {
            if (e.target === this.nodes.modalOverlay) this.toggleModal('help', false);
        });

        // Auto-save on visibility change
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.saveUserData();
                this.updateSessionTime();
            }
        });

        // Close settings when clicking outside
        document.addEventListener('click', (e) => {
            if (this.nodes.settingsPanel &&
                !this.nodes.settingsPanel.contains(e.target) &&
                !this.nodes.settingsBtn?.contains(e.target) &&
                this.nodes.settingsPanel.classList.contains('open')) {
                this.toggleSettings(false);
            }
        });

        // Prevent data loss on page unload
        window.addEventListener('beforeunload', () => {
            this.saveUserData();
            this.updateSessionTime();
        });
    },

    // 7. Keyboard Shortcuts System
    initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K for search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.nodes.searchInput?.focus();
            }

            // Ctrl/Cmd + B for bookmarks
            if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
                e.preventDefault();
                this.showBookmarks();
            }

            // Ctrl/Cmd + H for help
            if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
                e.preventDefault();
                this.toggleModal('help', true);
            }

            // Ctrl/Cmd + , for settings
            if ((e.ctrlKey || e.metaKey) && e.key === ',') {
                e.preventDefault();
                this.toggleSettings(true);
            }

            // Escape to close modals
            if (e.key === 'Escape') {
                this.closeAllModals();
            }

            // Arrow keys for navigation
            if (this.state.currentPage === 'topic') {
                if (e.key === 'ArrowLeft' && e.altKey) {
                    e.preventDefault();
                    this.navigateToPreviousTopic();
                }
                if (e.key === 'ArrowRight' && e.altKey) {
                    e.preventDefault();
                    this.navigateToNextTopic();
                }
            }
        });
    },

    // 8. Advanced Progress Calculation with Analytics
    calculateProgress() {
        let totalTopics = 0;
        let completedTopics = 0;
        let unitProgress = {};

        courseData.units.forEach(unit => {
            let unitCompleted = 0;
            let unitTotal = 0;

            unit.topics.forEach(topic => {
                totalTopics++;
                unitTotal++;

                if (this.state.completedTopics.has(topic.id)) {
                    completedTopics++;
                    unitCompleted++;
                    topic.status = 'completed';
                } else if (topic.status !== 'locked') {
                    topic.status = 'pending';
                }
            });

            unitProgress[unit.id] = {
                completed: unitCompleted,
                total: unitTotal,
                percentage: unitTotal > 0 ? Math.round((unitCompleted / unitTotal) * 100) : 0
            };
        });

        this.state.progress = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;
        this.state.unitProgress = unitProgress;

        this.updateProgressUI();
        this.checkProgressMilestones();
    },

    // 9. Learning Streak Management
    updateLearningStreak() {
        const today = new Date().toDateString();
        const lastAccess = localStorage.getItem('lastAccessDate');

        if (lastAccess) {
            const lastDate = new Date(lastAccess);
            const todayDate = new Date(today);
            const daysDiff = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));

            if (daysDiff === 1) {
                // Consecutive day
                this.state.learningStreak++;
                this.showNotification(`🔥 ${this.state.learningStreak} day streak!`, 'success');
            } else if (daysDiff > 1) {
                // Streak broken
                if (this.state.learningStreak > 0) {
                    this.showNotification(`Streak reset. Previous: ${this.state.learningStreak} days`, 'info');
                }
                this.state.learningStreak = 1;
            }
        } else {
            this.state.learningStreak = 1;
        }

        localStorage.setItem('lastAccessDate', today);
        this.updateStreakDisplay();
    },

    // 10. Achievement System
    checkAchievements() {
        const achievements = [
            {
                id: 'first_topic',
                name: 'Getting Started',
                description: 'Complete your first topic',
                condition: () => this.state.completedTopics.size >= 1,
                icon: '🎯'
            },
            {
                id: 'five_topics',
                name: 'Learning Momentum',
                description: 'Complete 5 topics',
                condition: () => this.state.completedTopics.size >= 5,
                icon: '📚'
            },
            {
                id: 'unit_complete',
                name: 'Unit Master',
                description: 'Complete an entire unit',
                condition: () => Object.values(this.state.unitProgress || {}).some(unit => unit.percentage === 100),
                icon: '🏆'
            },
            {
                id: 'week_streak',
                name: 'Consistent Learner',
                description: 'Maintain a 7-day learning streak',
                condition: () => this.state.learningStreak >= 7,
                icon: '🔥'
            },
            {
                id: 'bookmark_collector',
                name: 'Bookmark Collector',
                description: 'Bookmark 10 topics',
                condition: () => this.state.bookmarkedTopics.size >= 10,
                icon: '📖'
            },
            {
                id: 'note_taker',
                name: 'Note Taker',
                description: 'Add notes to 5 topics',
                condition: () => this.state.topicNotes.size >= 5,
                icon: '✍️'
            }
        ];

        achievements.forEach(achievement => {
            if (!this.state.achievements.has(achievement.id) && achievement.condition()) {
                this.unlockAchievement(achievement);
            }
        });
    },

    // 11. Enhanced Search with History and Suggestions
    performSearch() {
        const query = this.nodes.searchInput?.value.trim().toLowerCase();
        if (!query) {
            this.showNotification('Please enter a search term', 'info');
            return;
        }

        // Add to search history
        if (!this.state.searchHistory.includes(query)) {
            this.state.searchHistory.unshift(query);
            if (this.state.searchHistory.length > 10) {
                this.state.searchHistory.pop();
            }
        }

        const results = this.searchContent(query);
        this.displaySearchResults(query, results);
        this.saveUserData();
    },

    // 12. Comprehensive Search Algorithm
    searchContent(query) {
        const results = [];
        const queryWords = query.split(' ').filter(word => word.length > 2);

        // Search topics
        courseData.units.forEach(unit => {
            unit.topics.forEach(topic => {
                let score = 0;
                const searchText = `${topic.title} ${unit.title}`.toLowerCase();

                // Exact match gets highest score
                if (searchText.includes(query)) score += 10;

                // Word matches
                queryWords.forEach(word => {
                    if (searchText.includes(word)) score += 5;
                });

                if (score > 0) {
                    results.push({
                        type: 'topic',
                        topic: topic,
                        unit: unit,
                        score: score,
                        isCompleted: this.state.completedTopics.has(topic.id),
                        isBookmarked: this.state.bookmarkedTopics.has(topic.id)
                    });
                }
            });
        });

        // Search projects
        courseData.projects.forEach(project => {
            let score = 0;
            const searchText = `${project.title} ${project.description} ${project.tags.join(' ')}`.toLowerCase();

            if (searchText.includes(query)) score += 10;

            queryWords.forEach(word => {
                if (searchText.includes(word)) score += 5;
            });

            if (score > 0) {
                results.push({
                    type: 'project',
                    project: project,
                    score: score
                });
            }
        });

        // Sort by score
        return results.sort((a, b) => b.score - a.score);
    },

    // 13. Advanced Note-Taking System
    addTopicNote(topicId, note) {
        if (!note.trim()) return;

        const existingNotes = this.state.topicNotes.get(topicId) || [];
        const newNote = {
            id: Date.now(),
            content: note.trim(),
            timestamp: new Date().toISOString(),
            tags: this.extractHashtags(note)
        };

        existingNotes.push(newNote);
        this.state.topicNotes.set(topicId, existingNotes);

        this.saveUserData();
        this.showNotification('Note added successfully! 📝', 'success');
        this.checkAchievements();
    },

    // 14. Study Time Tracking
    startSessionTracking() {
        this.sessionInterval = setInterval(() => {
            this.updateSessionTime();
            this.updateStudyTimer();
        }, 60000); // Update every minute
    },

    updateSessionTime() {
        if (this.state.sessionStartTime) {
            const sessionTime = Date.now() - this.state.sessionStartTime;
            this.state.totalStudyTime += sessionTime;

            // Track time per topic if viewing one
            if (this.state.currentTopicId) {
                const currentTime = this.state.studyTime.get(this.state.currentTopicId) || 0;
                this.state.studyTime.set(this.state.currentTopicId, currentTime + sessionTime);
            }

            this.state.sessionStartTime = Date.now();
        }
    },

    // 15. Enhanced Navigation with History
    navigateTo(page, id) {
        // Save current page to history
        if (this.state.currentPage !== page || this.state.currentTopicId !== id) {
            this.addToRecentTopics(this.state.currentPage, this.state.currentTopicId);
        }

        this.state.currentPage = page;

        if (page === 'unit') {
            this.state.currentUnitId = id;
            this.state.currentTopicId = null;
            this.state.currentProjectId = null;
        } else if (page === 'topic') {
            this.state.currentTopicId = id;
            this.state.currentProjectId = null;

            // Track topic view
            this.state.topicsViewedToday.add(id);

            // Find unit id for this topic
            const unit = courseData.units.find(u => u.topics.some(t => t.id === id));
            if (unit) this.state.currentUnitId = unit.id;

            // Start topic timer
            this.state.sessionStartTime = Date.now();
        } else if (page === 'project') {
            this.state.currentProjectId = id;
            this.state.currentUnitId = null;
            this.state.currentTopicId = null;
        } else {
            this.state.currentUnitId = null;
            this.state.currentTopicId = null;
            this.state.currentProjectId = null;
        }

        this.render();
        this.updateBreadcrumbs();
        window.scrollTo(0, 0);
    },

    // 16. Smart Notification System
    showNotification(message, type = 'info', duration = 4000) {
        if (!this.state.userSettings.notifications) return;

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;

        const icons = {
            success: '✅',
            error: '❌',
            warning: '⚠️',
            info: 'ℹ️'
        };

        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${icons[type] || icons.info}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${this.getNotificationColor(type)};
            color: white;
            padding: 15px 20px;
            border-radius: 12px;
            z-index: 1000;
            animation: slideInRight 0.3s ease-out;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 400px;
            word-wrap: break-word;
        `;

        document.body.appendChild(notification);

        if (duration > 0) {
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.style.animation = 'slideOutRight 0.3s ease-out';
                    setTimeout(() => notification.remove(), 300);
                }
            }, duration);
        }
    },

    // 17. Advanced Settings Management
    applyUserSettings() {
        const { fontSize, codeTheme, animationsEnabled } = this.state.userSettings;

        // Apply font size
        document.documentElement.style.setProperty('--base-font-size',
            fontSize === 'small' ? '14px' : fontSize === 'large' ? '18px' : '16px');

        // Apply code theme
        document.documentElement.setAttribute('data-code-theme', codeTheme);

        // Apply animations
        if (!animationsEnabled) {
            document.documentElement.style.setProperty('--transition', 'none');
        }
    },

    // 18. Export/Import Functionality
    exportUserData() {
        const exportData = {
            completedTopics: Array.from(this.state.completedTopics),
            bookmarkedTopics: Array.from(this.state.bookmarkedTopics),
            topicNotes: Array.from(this.state.topicNotes),
            studyTime: Array.from(this.state.studyTime),
            achievements: Array.from(this.state.achievements),
            totalStudyTime: this.state.totalStudyTime,
            learningStreak: this.state.learningStreak,
            exportDate: new Date().toISOString(),
            version: '2.0'
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `r-analytics-progress-${new Date().toISOString().split('T')[0]}.json`;
        link.click();

        this.showNotification('Progress exported successfully! 📁', 'success');
    },

    // 19. Advanced Analytics Dashboard
    generateAnalytics() {
        const analytics = {
            totalTopicsCompleted: this.state.completedTopics.size,
            totalBookmarks: this.state.bookmarkedTopics.size,
            totalNotes: this.state.topicNotes.size,
            totalStudyTimeHours: Math.round(this.state.totalStudyTime / (1000 * 60 * 60) * 100) / 100,
            currentStreak: this.state.learningStreak,
            topicsViewedToday: this.state.topicsViewedToday.size,
            averageTopicTime: this.calculateAverageTopicTime(),
            completionRate: this.state.progress,
            achievements: this.state.achievements.size,
            unitProgress: this.state.unitProgress
        };

        return analytics;
    },

    // 20. Accessibility Enhancements
    enhanceAccessibility() {
        // Add skip links
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to main content';
        skipLink.className = 'skip-link';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Announce page changes to screen readers
        this.announcePageChange = (message) => {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.className = 'sr-only';
            announcement.textContent = message;
            document.body.appendChild(announcement);

            setTimeout(() => announcement.remove(), 1000);
        };

        // Focus management
        this.manageFocus = (element) => {
            if (element && typeof element.focus === 'function') {
                element.focus();
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };
    },

    // 21. Performance Optimization
    optimizePerformance() {
        // Debounce search input
        this.debouncedSearch = this.debounce(this.performSearch.bind(this), 300);

        // Lazy load content
        this.lazyLoadContent = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    if (element.dataset.src) {
                        element.src = element.dataset.src;
                        element.removeAttribute('data-src');
                        observer.unobserve(element);
                    }
                }
            });
        };

        // Initialize intersection observer for lazy loading
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver(this.lazyLoadContent);
        }
    },

    // 22. Advanced Error Handling
    handleError(error, context = 'Unknown') {
        console.error(`Error in ${context}:`, error);

        // Log error for debugging
        const errorLog = {
            message: error.message,
            stack: error.stack,
            context: context,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href
        };

        // Store error log
        const errorLogs = JSON.parse(localStorage.getItem('error-logs') || '[]');
        errorLogs.push(errorLog);
        if (errorLogs.length > 50) errorLogs.shift(); // Keep only last 50 errors
        localStorage.setItem('error-logs', JSON.stringify(errorLogs));

        // Show user-friendly error message
        this.showNotification('Something went wrong. Please try again.', 'error');

        // Attempt recovery
        this.attemptRecovery(context);
    },

    // 23. Comprehensive Utility Functions
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        }
        return `${minutes}m`;
    },

    extractHashtags(text) {
        const hashtags = text.match(/#\w+/g);
        return hashtags ? hashtags.map(tag => tag.substring(1)) : [];
    },

    getNotificationColor(type) {
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        return colors[type] || colors.info;
    },

    calculateAverageTopicTime() {
        if (this.state.studyTime.size === 0) return 0;

        const totalTime = Array.from(this.state.studyTime.values()).reduce((sum, time) => sum + time, 0);
        return Math.round(totalTime / this.state.studyTime.size / (1000 * 60)); // in minutes
    },

    // Initialize the enhanced application
    start() {
        document.addEventListener('DOMContentLoaded', () => {
            this.init().catch(error => {
                console.error('Failed to start application:', error);
                document.body.innerHTML = `
                    <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif;">
                        <h1>⚠️ Application Error</h1>
                        <p>The application failed to start. Please refresh the page.</p>
                        <button onclick="location.reload()" style="padding: 10px 20px; font-size: 16px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            Refresh Page
                        </button>
                    </div>
                `;
            });
        });
    }
};

// Start the enhanced application
app.start();