const Components = {
    // Dashboard Components
    WelcomeCard: (progress) => `
        <div class="welcome-card">
            <div class="welcome-text">
                <h2>Welcome to Data Analytics!</h2>
                <p>Ready to unlock insights? This toolkit is designed for you—no programming background required. We explain everything line by line.</p>
            </div>
            <div class="progress-container">
                <div class="progress-info">
                    <span>Overall Course Progress</span>
                    <span>${progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progress}%"></div>
                </div>
            </div>
        </div>
    `,

    // Instructor Profile Component
    InstructorProfile: () => {
        const instructor = courseData.instructor;
        return `
            <div class="instructor-profile-expanded card" style="border: none; padding: 0; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15); animation: slideUp 0.6s ease-out; background: linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%);">
                <!-- Header Section with Photo -->
                <div style="display: grid; grid-template-columns: 250px 1fr; gap: 30px; padding: 30px; align-items: start; border-bottom: 1px solid var(--border);">
                    <!-- Instructor Photo -->
                    <div style="text-align: center;">
                        <div style="width: 220px; height: 280px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2); border: 3px solid var(--primary); background: linear-gradient(135deg, var(--primary), var(--secondary)); display: flex; align-items: center; justify-content: center;">
                            <img src="${instructor.photo}" alt="${instructor.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'">
                            <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; font-size: 4rem;">
                                <i data-lucide="user" style="width: 80px; height: 80px;"></i>
                            </div>
                        </div>
                        <h3 style="margin-top: 20px; color: var(--text-main); font-size: 1.3rem; margin-bottom: 5px;">${instructor.name}</h3>
                        <p style="color: var(--primary); font-weight: 600; margin: 5px 0; font-size: 0.9rem;">${instructor.title}</p>
                        <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 10px;">${instructor.institution}</p>
                    </div>
                    
                    <!-- Quick Info -->
                    <div>
                        <h2 style="color: var(--text-main); margin-bottom: 15px; font-size: 1.5rem;">Meet Your Instructor</h2>
                        <p style="color: var(--text-muted); font-size: 0.95rem; line-height: 1.8; margin-bottom: 20px;">${instructor.bio}</p>
                        
                        <!-- Recognition Badge -->
                        <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 12px 16px; border-radius: 8px; margin-bottom: 20px;">
                            <p style="color: var(--accent); font-weight: 600; margin: 0 0 5px 0; font-size: 0.9rem;">🏆 ${instructor.recognition.ranking}</p>
                            <p style="color: var(--text-muted); margin: 0; font-size: 0.85rem;">VIDWAN Score: <strong>${instructor.recognition.vidwanScore}</strong></p>
                        </div>
                        
                        <!-- Contact Section -->
                        <div style="margin-bottom: 20px;">
                            <h4 style="color: var(--text-main); margin-bottom: 10px; font-size: 0.95rem; font-weight: 600;">Contact Information:</h4>
                            <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.9rem;">
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i data-lucide="mail" style="width: 16px; height: 16px; color: var(--primary);"></i>
                                    <a href="mailto:${instructor.email}" style="color: var(--primary); text-decoration: none;">${instructor.email}</a>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i data-lucide="mail" style="width: 16px; height: 16px; color: var(--primary);"></i>
                                    <a href="mailto:${instructor.alternateEmail}" style="color: var(--primary); text-decoration: none;">${instructor.alternateEmail}</a>
                                </div>
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <i data-lucide="phone" style="width: 16px; height: 16px; color: var(--primary);"></i>
                                    <span>${instructor.phone.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social Links -->
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <a href="mailto:${instructor.email}" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: var(--primary); color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                                <i data-lucide="mail" style="width: 16px; height: 16px;"></i> Email
                            </a>
                            <a href="${instructor.linkedin}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #0A66C2; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                                <i data-lucide="linkedin" style="width: 16px; height: 16px;"></i> LinkedIn
                            </a>
                            <a href="${instructor.profiles.googleScholar}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #4285F4; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                                <i data-lucide="book-open" style="width: 16px; height: 16px;"></i> Scholar
                            </a>
                            <a href="${instructor.profiles.researchGate}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #00D9FF; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.85rem; transition: all 0.2s;">
                                <i data-lucide="share2" style="width: 16px; height: 16px;"></i> ResearchGate
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Expertise Section -->
                <div style="padding: 24px; border-bottom: 1px solid var(--border);">
                    <h4 style="color: var(--text-main); margin-bottom: 12px; font-size: 1rem; font-weight: 600;">🎯 Expertise Areas:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${instructor.expertise.slice(0, 13).map(exp => `
                            <span style="background: rgba(79, 70, 229, 0.1); color: var(--primary); padding: 6px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 500;">
                                ✓ ${exp}
                            </span>
                        `).join('')}
                    </div>
                </div>

                <!-- Research Portfolio Section -->
                <div style="padding: 24px; border-bottom: 1px solid var(--border);">
                    <h4 style="color: var(--text-main); margin-bottom: 15px; font-size: 1rem; font-weight: 600;">📊 Research Portfolio:</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 0.9rem;">
                        <div>
                            <p style="color: var(--text-muted); margin: 0 0 8px 0; font-weight: 600;">Publications:</p>
                            <ul style="margin: 0; padding-left: 20px; color: var(--text-main);">
                                <li>${instructor.research.publications.scopusIndexed}</li>
                                <li>${instructor.research.publications.journals}</li>
                                <li>${instructor.research.publications.conferences}</li>
                            </ul>
                        </div>
                        <div>
                            <p style="color: var(--text-muted); margin: 0 0 8px 0; font-weight: 600;">Textbooks & Patents:</p>
                            <ul style="margin: 0; padding-left: 20px; color: var(--text-main);">
                                <li>${instructor.research.textbooks.authored}</li>
                                <li>${instructor.research.textbooks.edited}</li>
                                <li>Multiple patents & registrations</li>
                            </ul>
                        </div>
                    </div>
                    <div style="margin-top: 15px; padding: 12px; background: rgba(16, 185, 129, 0.1); border-radius: 8px; font-size: 0.85rem; color: var(--text-main);">
                        <strong>PhD Scholars:</strong> ${instructor.research.phdScholars.awarded} awarded • ${instructor.research.phdScholars.submitted} submitted • ${instructor.research.phdScholars.ongoing} ongoing
                    </div>
                </div>

                <!-- Awards Section -->
                <div style="padding: 24px; border-bottom: 1px solid var(--border);">
                    <h4 style="color: var(--text-main); margin-bottom: 12px; font-size: 1rem; font-weight: 600;">🏆 Awards & Recognition:</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.85rem;">
                        ${instructor.recognition.awards.slice(0, 8).map(award => `
                            <div style="background: rgba(245, 158, 11, 0.05); padding: 10px; border-radius: 6px; border-left: 3px solid var(--accent); color: var(--text-main);">
                                ✓ ${award}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Professional Links Section -->
                <div style="padding: 24px;">
                    <h4 style="color: var(--text-main); margin-bottom: 12px; font-size: 1rem; font-weight: 600;">🔗 Research Profiles:</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <a href="${instructor.profiles.publons}" target="_blank" style="padding: 8px 14px; background: rgba(79, 70, 229, 0.1); color: var(--primary); border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">Publons</a>
                        <a href="${instructor.profiles.googleScholar}" target="_blank" style="padding: 8px 14px; background: rgba(79, 70, 229, 0.1); color: var(--primary); border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">Google Scholar</a>
                        <a href="${instructor.profiles.orcid}" target="_blank" style="padding: 8px 14px; background: rgba(79, 70, 229, 0.1); color: var(--primary); border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">ORCID</a>
                        <a href="${instructor.profiles.scopus}" target="_blank" style="padding: 8px 14px; background: rgba(79, 70, 229, 0.1); color: var(--primary); border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">Scopus</a>
                        <a href="${instructor.profiles.researchGate}" target="_blank" style="padding: 8px 14px; background: rgba(79, 70, 229, 0.1); color: var(--primary); border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">ResearchGate</a>
                        <a href="${instructor.profiles.youtube}" target="_blank" style="padding: 8px 14px; background: rgba(79, 70, 229, 0.1); color: var(--primary); border-radius: 6px; text-decoration: none; font-size: 0.85rem; font-weight: 600; transition: all 0.2s;">YouTube</a>
                    </div>
                </div>
            </div>
        `;
    },

    CourseVideoSection: () => {
        const video = courseData.courseVideo;
        return `
            <div class="course-video-section card" style="border: none; padding: 0; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15); animation: slideUp 0.6s ease-out;">
                <div class="video-container" style="position: relative; width: 100%; padding-bottom: 56.25%; background: #000; overflow: hidden; transition: all 0.3s ease;">
                    <div id="video-placeholder" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center; flex-direction: column; gap: 20px;">
                        <div style="font-size: 3rem;">🎬</div>
                        <h3 style="margin: 0; font-size: 1.5rem;">Welcome to Data Analytics using R</h3>
                        <p style="margin: 0; font-size: 1rem; opacity: 0.9;">Course Overview Video</p>
                        <button id="video-setup-btn" style="margin-top: 20px; padding: 12px 24px; background: white; color: #667eea; border: none; border-radius: 8px; font-weight: 600; cursor: pointer; font-size: 1rem; transition: all 0.2s;">
                            📹 Setup Video
                        </button>
                        <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.8;">Video files not found. Click above to setup.</p>
                    </div>
                    <video 
                        id="course-video"
                        class="course-video-player"
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; display: none;"
                        controls
                        controlsList="nodownload"
                        poster="${video.poster}"
                        ${video.autoplay ? 'autoplay' : ''}
                        ${video.muted ? 'muted' : ''}
                        preload="metadata"
                    >
                        <source src="${video.videoUrl}" type="video/mp4">
                        <source src="${video.videoWebM}" type="video/webm">
                        <p style="color: white; padding: 20px; text-align: center;">Your browser does not support the video tag. Please use a modern browser like Chrome, Firefox, Safari, or Edge.</p>
                    </video>
                    <div class="video-overlay" style="position: absolute; top: 10px; right: 10px; background: rgba(0, 0, 0, 0.7); color: white; padding: 8px 14px; border-radius: 8px; font-size: 0.85rem; font-weight: 600; z-index: 10; backdrop-filter: blur(4px); display: none;">
                        ⏱️ ${video.duration}
                    </div>
                    <div id="video-loading" class="video-loading-indicator" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: none; z-index: 5; text-align: center;">
                        <div class="spinner" style="width: 50px; height: 50px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
                        <p style="color: white; margin-top: 15px; font-size: 0.9rem;">Loading video...</p>
                    </div>
                </div>
                <div class="video-info" style="padding: 24px; background: var(--bg-card); border-top: 1px solid var(--border);">
                    <div style="display: flex; justify-content: space-between; align-items: start; gap: 15px;">
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 8px 0; color: var(--text-main); font-size: 1.2rem;">${video.title}</h3>
                            <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${video.description}</p>
                        </div>
                        <button id="video-help-btn" class="icon-btn" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); padding: 8px 12px; border-radius: 6px; border: none; cursor: pointer; font-size: 0.9rem; transition: all 0.2s;" title="Video help">
                            <i data-lucide="help-circle" style="width: 18px; height: 18px;"></i>
                        </button>
                    </div>
                    <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px;">📹 Course Overview</span>
                        <span class="badge" style="background: rgba(16, 185, 129, 0.1); color: var(--secondary); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px;">✓ Beginner Friendly</span>
                        <span class="badge" style="background: rgba(245, 158, 11, 0.1); color: var(--accent); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px;">⭐ Recommended</span>
                    </div>
                    <div id="video-status" style="margin-top: 12px; padding: 10px 12px; background: rgba(79, 70, 229, 0.05); border-left: 3px solid var(--primary); border-radius: 4px; font-size: 0.85rem; color: var(--text-muted); display: none;">
                        <span id="video-status-text"></span>
                    </div>
                </div>
            </div>
        `;
    },

    UnitCard: (unit) => {
        const completedTopics = unit.topics.filter(t => t.status === 'completed').length;
        const totalTopics = unit.topics.length || 1;
        const progress = Math.round((completedTopics / totalTopics) * 100);

        let statusClass = 'status-lock';
        let statusText = 'Locked';
        if (unit.id === 1) { statusClass = 'status-done'; statusText = 'In Progress'; }

        return `
            <div class="card unit-card" onclick="app.navigateTo('unit', ${unit.id})">
                <span class="unit-status-badge ${statusClass}">${statusText}</span>
                <div class="unit-info">
                    <h3>Unit ${unit.id}: ${unit.title}</h3>
                    <p>${unit.description}</p>
                </div>
                <div class="unit-progress">
                    <div class="progress-bar-sm">
                        <div class="fill" style="width: ${progress}%"></div>
                    </div>
                </div>
            </div>
        `;
    },

    // Sidebar Components
    SidebarNavItem: (topic, isActive) => `
        <div class="nav-item ${isActive ? 'active' : ''} ${topic.status === 'locked' ? 'locked' : ''}" 
             onclick="${topic.status !== 'locked' ? `app.navigateTo('topic', '${topic.id}')` : ''}">
            <i data-lucide="${topic.status === 'completed' ? 'check-circle' : topic.status === 'pending' ? 'circle' : 'lock'}" 
               class="status-icon ${topic.status === 'completed' ? 'check' : topic.status === 'pending' ? 'pending' : 'locked'}"></i>
            <span>${topic.title}</span>
        </div>
    `,

    // Interactive Block Components
    ThreePanelLayout: (block) => `
        <div class="panel-container">
            <div class="panel panel-code">
                <div class="panel-header"><i data-lucide="code"></i> R Code (The Clues)</div>
                <div class="panel-body">
                    <div class="code-wrapper">
                        <button class="copy-btn" onclick="app.copyCode(event)">Copy</button>
                        <pre><code class="language-r">${block.code || ''}</code></pre>
                    </div>
                </div>
            </div>
            <div class="panel panel-explanation">
                <div class="panel-header"><i data-lucide="info"></i> Translation (English)</div>
                <div class="panel-body">
                    <ul>
                        ${(block.explanation || []).map(line => `<li>${line}</li>`).join('')}
                    </ul>
                </div>
            </div>
            <div class="panel panel-output">
                <div class="panel-header"><i data-lucide="terminal"></i> The 'Aha' Moment</div>
                <div class="panel-body">
                    <ul>
                        ${(block.interpretation || []).map(line => `<li>${line}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `,

    ConceptBlock: (block) => `
        <div class="concept-view card" style="display: flex; gap: 30px; align-items: center; margin: 20px 0;">
            <div class="concept-content" style="flex: 1;">
                <h3>${block.title}</h3>
                <p style="font-size: 1.1rem; margin-top: 15px;">${block.content}</p>
            </div>
            ${block.visual ? `
            <div class="concept-visual" style="flex: 1; max-width: 400px;">
                <img src="${block.visual}" alt="${block.title}" style="width: 100%; border-radius: 12px; box-shadow: var(--shadow);">
            </div>` : ''}
        </div>
    `,

    ErrorBlock: (block) => `
        <div class="error-view">
            <div class="error-box">
                <div class="error-title"><i data-lucide="alert-circle"></i> Oops! R got confused</div>
                <pre><code>${block.error}</code></pre>
            </div>
            <div class="card" style="margin-top: 20px;">
                <h3>Why it happened?</h3>
                <p>${block.explanation}</p>
                <h3 style="margin-top:20px;">Correct Version (The 'Good' Code)</h3>
                <div class="code-wrapper">
                    <button class="copy-btn" onclick="app.copyCode(event)">Copy</button>
                    <pre><code class="language-r">${block.correction}</code></pre>
                </div>
            </div>
        </div>
    `,

    VisualizationBlock: (block) => `
        <div class="viz-block" style="background: var(--bg-card); border-radius: 20px; padding: 30px; border: 1px solid var(--border); margin: 20px 0;">
            <h3>📊 ${block.title}</h3>
            <div class="viz-container">
                <div class="panel panel-code">
                    <div class="panel-header"><i data-lucide="code"></i> R Code</div>
                    <div class="panel-body">
                        <div class="code-wrapper">
                            <button class="copy-btn" onclick="app.copyCode(event)">Copy</button>
                            <pre><code class="language-r">${block.code || ''}</code></pre>
                        </div>
                    </div>
                </div>
                <div class="chart-output">
                    <img src="${block.chartUrl}" alt="Chart Output">
                </div>
            </div>
            <div class="panel panel-output" style="margin-top: 20px;">
                <div class="panel-header"><i data-lucide="eye"></i> Interpretation & Fun Fact</div>
                <div class="panel-body">
                    <ul>
                        ${(block.interpretation || []).map(line => `<li>${line}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `,

    NextClassPreview: () => `
        <div class="card next-class-card" style="background: #f8fafc; border-left: 5px solid var(--accent);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <div>
                    <h3 style="color: var(--accent);"><i data-lucide="calendar" style="display:inline-block; vertical-align:middle; margin-right:8px;"></i> Next Class Preview</h3>
                    <p style="font-weight: 600; margin-top: 8px;">Topic: Descriptive Statistics with R</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">We will learn how to find the average (mean) and middle value (median) of your datasets.</p>
                </div>
                <div style="text-align: right;">
                    <span class="badge" style="background: #fef3c7; color: #92400e; padding: 4px 8px; border-radius: 4px; font-size: 0.7rem;">Suggested Prep</span>
                    <p style="font-size: 0.8rem; margin-top: 5px;">Review Basic Math: Mean/Median</p>
                </div>
            </div>
        </div>
    `,

    MCQScreen: (q) => `
        <div class="mcq-view card">
            <div class="mcq-header">
                <span class="badge">Assessment</span>
                <h2>${q.question}</h2>
                ${q.code ? `<div class="code-wrapper"><button class="copy-btn" onclick="app.copyCode(event)">Copy</button><pre><code class="language-r">${q.code}</code></pre></div>` : ''}
            </div>
            <div class="mcq-options" style="display: grid; gap: 12px; margin-top: 24px;">
                ${q.options.map((opt, i) => `
                    <button class="option-btn" onclick="app.checkAnswer(${i})" style="text-align: left; padding: 15px; border-radius: 10px; border: 1px solid var(--border); background: var(--bg-card); cursor: pointer; transition: 0.2s;">
                        ${opt}
                    </button>
                `).join('')}
            </div>
        </div>
    `,

    ActivityBlock: (block) => `
        <div class="card activity-card" style="border: 2px dashed var(--primary); background: rgba(79, 70, 229, 0.02); margin: 30px 0;">
             <div class="topic-header" style="margin-bottom: 20px;">
                <h3>🧪 Try This: ${block.title}</h3>
            </div>
            <div class="activity-prompt">
                <p style="font-size: 1.1rem; font-weight: 500;">${block.prompt}</p>
                ${block.code ? `<div class="code-wrapper"><button class="copy-btn" onclick="app.copyCode(event)">Copy</button><pre><code class="language-r">${block.code}</code></pre></div>` : ''}
            </div>
            <div class="prediction-box" style="margin-top: 24px; padding: 20px; background: var(--bg-main); border-radius: 12px;">
                <p style="font-weight: 600; margin-bottom: 12px;">Your Guess:</p>
                <div style="display: flex; gap: 10px;">
                    <input type="text" id="user-prediction" placeholder="Type your guess here..." style="flex: 1; padding: 12px; border-radius: 8px; border: 1px solid var(--border);">
                    <button class="icon-btn" onclick="app.revealOutcome()" style="background: var(--primary); color: white; padding: 0 20px;">Check Result</button>
                </div>
            </div>
            <div id="outcome-reveal" class="hidden" style="margin-top: 24px; animation: fadeIn 0.5s;">
                <div class="panel panel-output" style="border: 1px solid var(--secondary);">
                    <div class="panel-header" style="color: var(--secondary);"><i data-lucide="check-circle"></i> The Real Deal</div>
                    <div class="panel-body">
                        <p>${block.outcome}</p>
                        <p style="margin-top: 10px; font-weight: 600;">Fun Logic: ${block.reason}</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    Badge: (text, type = 'default') => {
        const colors = {
            Beginner: 'background: #dcfce7; color: #166534;',
            Intermediate: 'background: #fef9c3; color: #854d0e;',
            Advanced: 'background: #fee2e2; color: #991b1b;',
            default: 'background: var(--border); color: var(--text-main);'
        };
        return `<span class="badge" style="${colors[text] || colors.default} font-size: 0.7rem; padding: 4px 8px;">${text}</span>`;
    },

    ProjectCard: (project) => `
        <div class="card project-card" onclick="app.navigateTo('project', '${project.id}')" style="display: flex; gap: 20px; align-items: center; border-left: 5px solid var(--primary); cursor: pointer; transition: transform 0.2s;">
            <div class="project-icon" style="width: 60px; height: 60px; background: rgba(79, 70, 229, 0.1); border-radius: 12px; display:flex; align-items:center; justify-content:center; color: var(--primary);">
                <i data-lucide="briefcase" size="32"></i>
            </div>
            <div class="project-details" style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3>${project.title}</h3>
                    ${Components.Badge(project.difficulty)}
                </div>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${project.description}</p>
                <div style="margin-top: 10px; display: flex; gap: 8px; flex-wrap: wrap;">
                    ${project.tags.map(tag => `<span class="badge" style="background: #f1f5f9; color: #475569; font-size: 0.65rem;">${tag}</span>`).join('')}
                </div>
            </div>
            <div style="margin-left: auto;">
                <button class="icon-btn" style="background: var(--primary); color: white; border-radius: 50%; width: 40px; height: 40px;">
                    <i data-lucide="arrow-right"></i>
                </button>
            </div>
        </div>
    `,

    ProjectDetailsBlock: (p) => `
        <div class="project-view handout-container">
            <header class="handout-header card">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <span class="badge" style="background: var(--primary); color: white; margin-bottom: 10px; display: inline-block;">Project Module</span>
                        <h1>${p.title}</h1>
                        <p class="hook-text">Difficulty: ${p.difficulty} | Domain: ${p.tags[0]}</p>
                    </div>
                </div>
            </header>

            <section class="handout-section card error-theme">
                <h3><i data-lucide="alert-circle"></i> The Problem Statement</h3>
                <p style="font-size: 1.1rem; line-height: 1.7;">${p.problem}</p>
            </section>

            <section class="handout-section card">
                <h3><i data-lucide="settings"></i> Experimental Setup</h3>
                <div class="setup-box" style="background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid var(--border);">
                    <p>${p.setup}</p>
                    <div style="margin-top: 20px;">
                        <h4 style="margin-bottom: 10px; color: var(--primary);">Implementation Steps:</h4>
                        <ol style="padding-left: 20px; line-height: 1.8;">
                            ${p.steps.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </section>

            <section class="handout-section card project-theme">
                <h3><i data-lucide="rocket"></i> Project Logic (IPO)</h3>
                <div class="ipo-box">
                    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
                        <div class="ipo-item">
                            <strong style="color: #ec4899;">[I] Input</strong><br>
                            <p style="font-size: 0.9rem;">${p.ipo.input}</p>
                        </div>
                        <div class="ipo-item">
                            <strong style="color: #ec4899;">[P] Process</strong><br>
                            <p style="font-size: 0.9rem;">${p.ipo.process}</p>
                        </div>
                        <div class="ipo-item">
                            <strong style="color: #ec4899;">[O] Output</strong><br>
                            <p style="font-size: 0.9rem;">${p.ipo.output}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div style="margin-top: 30px;">
                <button class="icon-btn" onclick="app.navigateTo('dashboard')" style="background: var(--primary); color: white; padding: 12px 24px; border-radius: 8px;">
                    <i data-lucide="arrow-left" style="margin-right: 8px;"></i> Back to Project Hub
                </button>
            </div>
        </div>
    `,

    ActivitySlide: (slide) => `
        <div class="topic-header">
            <h2>🧪 Experiential Activity: ${slide.title}</h2>
        </div>
        <div class="card activity-card" style="border: 2px dashed var(--primary); background: rgba(79, 70, 229, 0.02);">
            <div class="activity-prompt">
                <p style="font-size: 1.1rem; font-weight: 500;">${slide.prompt}</p>
                ${slide.code ? `<div class="code-wrapper"><button class="copy-btn" onclick="app.copyCode(event)">Copy</button><pre><code class="language-r">${slide.code}</code></pre></div>` : ''}
            </div>
            <div class="prediction-box" style="margin-top: 24px; padding: 20px; background: var(--bg-main); border-radius: 12px;">
                <p style="font-weight: 600; margin-bottom: 12px;">What do you think will happen?</p>
                <div style="display: flex; gap: 10px;">
                    <input type="text" id="user-prediction" placeholder="Your prediction..." style="flex: 1; padding: 12px; border-radius: 8px; border: 1px solid var(--border);">
                    <button class="icon-btn" onclick="app.revealOutcome()" style="background: var(--primary); color: white; padding: 0 20px;">Reveal Answer</button>
                </div>
            </div>
            <div id="outcome-reveal" class="hidden" style="margin-top: 24px; animation: fadeIn 0.5s;">
                <div class="panel panel-output" style="border: 1px solid var(--secondary);">
                    <div class="panel-header" style="color: var(--secondary);"><i data-lucide="check-circle"></i> The Reality</div>
                    <div class="panel-body">
                        <p>${slide.outcome}</p>
                        <p style="margin-top: 10px; font-weight: 600;">Why? ${slide.reason}</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    HandoutBlock: (h) => `
        <div class="handout-container">
            <header class="handout-header card">
                <div class="handout-title-section">
                    <span class="badge">Course: ${h.courseName}</span>
                    <h1>${h.unitAndTopic}</h1>
                    <p class="hook-text"><em>"${h.hook}"</em></p>
                </div>
            </header>

            <section class="handout-section card">
                <div class="section-grid">
                    <div class="grid-item">
                        <h3><i data-lucide="map-pin"></i> Course Plan Positioning</h3>
                        <p><strong>Position:</strong> ${h.position}</p>
                        <p><strong>Pre-requisites:</strong> ${h.prerequisites}</p>
                        <ul class="outcomes-list">
                            ${h.outcomes.map(o => `<li><i data-lucide="check" size="14"></i> ${o}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="grid-item">
                        <h3><i data-lucide="book-open"></i> Syllabus Mapping</h3>
                        <p><strong>Sub-topics:</strong> ${h.subTopics}</p>
                        <p><strong>Mapping:</strong> ${h.syllabusMapping}</p>
                    </div>
                </div>
            </section>

            <section class="handout-section card">
                <h3><i data-lucide="history"></i> Background & Motivation</h3>
                <div class="content-text">
                    <p>${h.background}</p>
                    <div class="motivation-box">
                        <strong>Why explore this?</strong>
                        <p>${h.motivation}</p>
                    </div>
                </div>
            </section>

            <section class="handout-section card error-theme">
                <h3><i data-lucide="alert-triangle"></i> Problem Statement</h3>
                <p>${h.problemStatement}</p>
            </section>

            <section class="handout-section card">
                <h3><i data-lucide="target"></i> Core Concept & Foundations</h3>
                <div class="concept-content">
                    <p>${h.coreConcept}</p>
                    <div class="terminology">
                        <strong>Terminology:</strong> <code>${h.terminology}</code>
                    </div>
                    <div class="foundations">
                        <h4>Technical Foundations:</h4>
                        <p>${h.technicalFoundations}</p>
                    </div>
                </div>
            </section>

            <section class="handout-section card code-theme">
                <h3><i data-lucide="terminal"></i> R Studio Lab (V${h.rVersion})</h3>
                <div class="code-workflow">
                    <div class="code-header">
                        <span>Platform: ${h.rPlatform}</span>
                        <button class="copy-btn" onclick="app.copyCode(event)">Copy Code</button>
                    </div>
                    <pre><code class="language-r">${h.rCode}</code></pre>
                </div>
            </section>

            ${h.rOutput ? `
            <section class="handout-section card" style="border-left: 6px solid #10b981; background: #f0fdf4;">
                <h3><i data-lucide="play-circle"></i> R Console Output</h3>
                <div style="background: #1e1e1e; padding: 20px; border-radius: 12px; color: #d4d4d4; font-family: 'Courier New', monospace; font-size: 0.85rem; line-height: 1.6; overflow-x: auto;">
                    <pre style="margin: 0; color: #d4d4d4;">${h.rOutput}</pre>
                </div>
            </section>
            ` : ''}

            ${h.plotDescription ? `
            <section class="handout-section card" style="border-left: 6px solid #0ea5e9; background: #f0f9ff;">
                <h3><i data-lucide="bar-chart-2"></i> Visualization Analysis</h3>
                <div>
                    ${h.plotDescription}
                </div>
            </section>
            ` : ''}

            ${h.rInterpretation ? `
            <section class="handout-section card" style="border-left: 6px solid #f59e0b; background: rgba(245, 158, 11, 0.05);">
                <h3><i data-lucide="lightbulb"></i> Understanding the Output</h3>
                <div style="background: white; padding: 20px; border-radius: 12px; border: 1px solid #fbbf24;">
                    <p style="font-size: 1rem; line-height: 1.8; color: var(--text-main);">${h.rInterpretation}</p>
                </div>
            </section>
            ` : ''}

            <section class="handout-section card illustration-section">
                <h3><i data-lucide="layout"></i> Conceptual Illustration</h3>
                <div class="illustration-box">
                    <p>${h.illustration}</p>
                </div>
            </section>

            <section class="handout-section card case-study">
                <h3><i data-lucide="briefcase"></i> Real-Time Case Study</h3>
                <div class="case-grid">
                    <div class="case-step"><strong>Problem:</strong> ${h.caseProblem}</div>
                    <div class="case-step"><strong>Solution:</strong> ${h.caseSolution}</div>
                    <div class="case-step"><strong>Outcome:</strong> ${h.caseOutcome}</div>
                </div>
            </section>

            <section class="handout-section card">
                <h3><i data-lucide="globe"></i> Applications</h3>
                <div class="apps-grid">
                    ${h.applications.map(app => `<div class="app-item"><i data-lucide="chevron-right" size="16"></i> ${app}</div>`).join('')}
                </div>
            </section>

            <section class="handout-section card alert-theme">
                <h3><i data-lucide="shield-off"></i> Challenges & Limitations</h3>
                <p>${h.challenges}</p>
            </section>

            <section class="handout-section card research-theme">
                <h3><i data-lucide="microscope"></i> Research & Open Problems</h3>
                <p>${h.research}</p>
            </section>

            <section class="handout-section card tools-theme">
                <h3><i data-lucide="layers"></i> Tool / Technology Mapping</h3>
                <p>${h.toolMapping}</p>
            </section>

            <section class="handout-section card activity-theme">
                <h3><i data-lucide="test-tube"></i> Experiential Learning Activity</h3>
                <p>${h.experientialActivity}</p>
            </section>

            <section class="handout-section card project-theme">
                <h3><i data-lucide="rocket"></i> Project-Based Learning Idea (IPO)</h3>
                <div class="ipo-box">
                    <strong>Input:</strong> ${h.projectIPO.input}<br>
                    <strong>Process:</strong> ${h.projectIPO.process}<br>
                    <strong>Output:</strong> ${h.projectIPO.output}
                </div>
            </section>

            <section class="handout-section card quiz-theme">
                <h3><i data-lucide="help-circle"></i> Open-Ended Quiz</h3>
                <ol>
                    ${h.quizQuestions.map(q => `<li>${q}</li>`).join('')}
                </ol>
            </section>

            <section class="handout-section card exam-theme">
                <h3><i data-lucide="file-text"></i> Model Examination Questions</h3>
                <div class="exam-questions">
                    <p><strong>5 Marks:</strong></p>
                    <ul>${h.examQuestions5M.map(q => `<li>${q}</li>`).join('')}</ul>
                    <p><strong>10 Marks:</strong></p>
                    <ul>${h.examQuestions10M.map(q => `<li>${q}</li>`).join('')}</ul>
                </div>
            </section>

            <section class="handout-section card next-preview">
                <h3><i data-lucide="arrow-right-circle"></i> Plan for Next Class</h3>
                <p><strong>Next Topic:</strong> ${h.nextTopic}</p>
                <p><strong>Linkage:</strong> ${h.nextLinkage}</p>
                <p><strong>Reading:</strong> ${h.nextReading}</p>
            </section>
        </div>
    `
};
