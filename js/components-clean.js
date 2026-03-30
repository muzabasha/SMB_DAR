const Components = {
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

    InstructorProfile: () => {
        const instructor = courseData.instructor;
        return `
            <style>
                .profile-grid { display: grid; grid-template-columns: 350px 1fr; min-height: 600px; gap: 0; }
                @media (max-width: 960px) { .profile-grid { grid-template-columns: 1fr; } }
                .profile-sidebar { background: linear-gradient(180deg, var(--bg-card) 0%, rgba(79, 70, 229, 0.03) 100%); border-right: 1px solid var(--border); padding: 30px; display: flex; flex-direction: column; }
                .profile-content { padding: 40px; }
            </style>
            <div class="instructor-profile card" style="border: none; padding: 0; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15); animation: slideUp 0.6s ease-out; background: var(--bg-card);">
                <div class="profile-grid">
                    
                    <!-- Left Sidebar (Photo & Contact) -->
                    <div class="profile-sidebar">
                        
                        <!-- Photo -->
                        <div style="width: 100%; aspect-ratio: 1/1; overflow: hidden; border-radius: 20px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2); margin-bottom: 25px; border: 4px solid white;">
                            <img src="${instructor.photo}" alt="${instructor.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: top;">
                        </div>

                        <!-- Contact Info -->
                        <div style="margin-bottom: 25px;">
                            <h4 style="color: var(--text-main); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 2px solid var(--primary); display: inline-block; padding-bottom: 5px;">Contact</h4>
                            
                            <div style="display: flex; gap: 10px; margin-bottom: 12px; align-items: flex-start;">
                                <i data-lucide="map-pin" style="width: 18px; color: var(--primary); flex-shrink: 0; margin-top: 3px;"></i>
                                <span style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.4;">${instructor.address}</span>
                            </div>

                            <div style="display: flex; gap: 10px; margin-bottom: 8px; align-items: center;">
                                <i data-lucide="mail" style="width: 18px; color: var(--primary); flex-shrink: 0;"></i>
                                <a href="mailto:${instructor.email}" style="font-size: 0.9rem; color: var(--text-muted); text-decoration: none; word-break: break-all;">${instructor.email}</a>
                            </div>

                             <div style="display: flex; gap: 10px; margin-bottom: 8px; align-items: center;">
                                <i data-lucide="phone" style="width: 18px; color: var(--primary); flex-shrink: 0;"></i>
                                <span style="font-size: 0.9rem; color: var(--text-muted);">${instructor.phone.join(', ')}</span>
                            </div>
                        </div>

                        <!-- Profiles -->
                        <div style="margin-bottom: 25px;">
                            <h4 style="color: var(--text-main); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 2px solid var(--primary); display: inline-block; padding-bottom: 5px;">Profiles</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${Object.entries(instructor.profiles).map(([key, url]) => `
                                    <a href="${url}" target="_blank" title="${key}" style="display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; background: white; border: 1px solid var(--border); border-radius: 8px; transition: all 0.2s; box-shadow: 0 2px 5px rgba(0,0,0,0.05); text-decoration: none; font-size: 1.4rem; line-height: 1;">
                                        ${key === 'publons' ? '🅿️' :
                key === 'googleScholar' ? '🎓' :
                    key === 'orcid' ? '🆔' :
                        key === 'scopus' ? '📊' :
                            key === 'researchGate' ? '🔬' :
                                key === 'linkedin' ? '💼' :
                                    key === 'github' ? '🐙' :
                                        '🌐'
            }
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                        
                         <!-- Memberships -->
                         <div>
                            <h4 style="color: var(--text-main); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 2px solid var(--secondary); display: inline-block; padding-bottom: 5px;">Memberships</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                ${instructor.memberships.map(m => `<span style="font-size: 0.75rem; padding: 6px 10px; background: rgba(16, 185, 129, 0.1); color: var(--secondary); border-radius: 6px; border: 1px solid rgba(16, 185, 129, 0.2); font-weight: 500;">${m}</span>`).join('')}
                            </div>
                         </div>

                    </div>

                    <!-- Right Main Content -->
                    <div class="profile-content">
                        
                        <!-- Header -->
                        <div style="margin-bottom: 30px;">
                            <h1 style="font-size: 2rem; margin: 0 0 5px 0; color: var(--text-main); font-weight: 700;">${instructor.name}</h1>
                            <p style="font-size: 1.1rem; color: var(--primary); font-weight: 600; margin: 0;">${instructor.title}</p>
                            <p style="font-size: 1rem; color: var(--text-muted); margin: 5px 0 15px 0;">${instructor.institution}</p>
                            
                            <div style="display: inline-flex; overflow: hidden; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
                                <div style="background: rgba(245, 158, 11, 0.1); padding: 8px 15px; border-right: 1px solid rgba(245, 158, 11, 0.3);">
                                    <span style="font-size: 0.85rem; color: var(--accent); font-weight: 600;">🏆 ${instructor.recognition.ranking}</span>
                                </div>
                                <div style="background: var(--bg-main); padding: 8px 15px;">
                                    <span style="font-size: 0.85rem; color: var(--text-muted);">VIDWAN Score: <strong>${instructor.recognition.vidwanScore}</strong></span>
                                </div>
                            </div>
                        </div>

                        <!-- Bio -->
                        <div style="margin-bottom: 30px;">
                            <p style="font-size: 1rem; line-height: 1.7; color: var(--text-main); margin: 0;">${instructor.bio}</p>
                        </div>

                        <!-- Expertise -->
                        <div style="margin-bottom: 30px;">
                            <h3 style="font-size: 1.1rem; margin-bottom: 15px; color: var(--text-main); display: flex; align-items: center; gap: 10px;">
                                <i data-lucide="zap" style="width: 20px; color: var(--primary);"></i> Areas of Expertise
                            </h3>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${instructor.expertise.map(exp => `<span style="background: var(--bg-main); border: 1px solid var(--border); color: var(--text-main); padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">${exp}</span>`).join('')}
                            </div>
                        </div>

                        <!-- Grid Layout for Stats -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px;">
                            
                            <!-- Education & Stats -->
                            <div style="background: var(--bg-main); border-radius: 12px; padding: 20px; border: 1px solid var(--border);">
                                <h3 style="font-size: 1rem; margin-bottom: 15px; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 8px;">🎓 Education & Experience</h3>
                                <div style="margin-bottom: 12px;">
                                    <strong style="display: block; font-size: 0.9rem; color: var(--primary);">PhD</strong>
                                    <span style="font-size: 0.85rem; color: var(--text-muted);">${instructor.credentials.phd}</span>
                                </div>
                                <div style="margin-bottom: 12px;">
                                    <strong style="display: block; font-size: 0.9rem; color: var(--primary);">Postdoc</strong>
                                    <span style="font-size: 0.85rem; color: var(--text-muted);">${instructor.credentials.postdoc}</span>
                                </div>
                                <div>
                                    <strong style="display: block; font-size: 0.9rem; color: var(--primary);">Experience</strong>
                                    <span style="font-size: 0.85rem; color: var(--text-muted);">${instructor.credentials.experience}</span>
                                </div>
                            </div>

                            <!-- Research Stats -->
                            <div style="background: var(--bg-main); border-radius: 12px; padding: 20px; border: 1px solid var(--border);">
                                <h3 style="font-size: 1rem; margin-bottom: 15px; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 8px;">📊 Research Output</h3>
                                <ul style="list-style: none; padding: 0; margin: 0; font-size: 0.9rem; color: var(--text-muted);">
                                    <li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px;"><i data-lucide="file-text" style="width: 16px; margin-top: 3px; color: var(--secondary);"></i> <span>${instructor.research.publications.scopusIndexed}</span></li>
                                    <li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px;"><i data-lucide="book" style="width: 16px; margin-top: 3px; color: var(--secondary);"></i> <span>${instructor.research.textbooks.authored}</span></li>
                                    <li style="margin-bottom: 8px; display: flex; align-items: flex-start; gap: 8px;"><i data-lucide="award" style="width: 16px; margin-top: 3px; color: var(--secondary);"></i> <span>${instructor.research.patents}</span></li>
                                    <li style="display: flex; align-items: flex-start; gap: 8px;"><i data-lucide="users" style="width: 16px; margin-top: 3px; color: var(--secondary);"></i> <span>${instructor.research.phdScholars.awarded}</span></li>
                                </ul>
                            </div>

                        </div>

                        <!-- Awards List -->
                        <div style="margin-bottom: 30px;">
                            <h3 style="font-size: 1.1rem; margin-bottom: 15px; color: var(--text-main); display: flex; align-items: center; gap: 10px;">
                                <i data-lucide="trophy" style="width: 20px; color: var(--accent);"></i> Key Awards
                            </h3>
                            <div style="background: rgba(245, 158, 11, 0.05); border-radius: 12px; padding: 20px; border: 1px solid rgba(245, 158, 11, 0.1);">
                                <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 12px;">
                                    ${instructor.recognition.awards.slice(0, 5).map(award => `<li style="font-size: 0.9rem; color: var(--text-muted); padding-left: 18px; position: relative;"><span style="position: absolute; left: 0; top: 8px; width: 6px; height: 6px; background: var(--accent); border-radius: 50%;"></span>${award}</li>`).join('')}
                                    <li style="font-size: 0.85rem; font-style: italic; color: var(--primary); margin-top: 5px;">...and ${instructor.recognition.awards.length - 5} more distinctions.</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Roles Section -->
                        <div>
                             <h3 style="font-size: 1.1rem; margin-bottom: 15px; color: var(--text-main); display: flex; align-items: center; gap: 10px;">
                                <i data-lucide="briefcase" style="width: 20px; color: var(--primary);"></i> Leadership & Service
                            </h3>
                            <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 10px;">
                                <strong style="color: var(--text-main);">Leadership:</strong> ${instructor.leadership.current.join(' • ')}
                            </p>
                             <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.6;">
                                <strong style="color: var(--text-main);">Editorial:</strong> Board member for ${instructor.editorial.editorialBoard.slice(0, 2).join(', ')} and senior reviewer for IEEE Transactions.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        `;
    },

    CourseVideoSection: () => {
        const video = courseData.courseVideo;
        return `
            <div class="course-video-section card" style="border: none; padding: 0; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15); animation: slideUp 0.6s ease-out;">
                <!-- Video Container with Aspect Ratio -->
                <div style="position: relative; width: 100%; padding-bottom: 56.25%; background: #000; overflow: hidden;">
                    <!-- Video Element -->
                    <video 
                        id="course-video"
                        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: contain; background: #000;"
                        controls
                        controlsList="nodownload"
                        poster="${video.poster}"
                        preload="metadata"
                    >
                        <source src="${video.videoUrl}" type="video/mp4">
                        <source src="${video.videoWebM}" type="video/webm">
                        <p style="color: white; padding: 20px; text-align: center;">Your browser does not support the video tag. Please use a modern browser like Chrome, Firefox, Safari, or Edge.</p>
                    </video>
                </div>

                <!-- Video Info Section -->
                <div class="video-info" style="padding: 24px; background: var(--bg-card); border-top: 1px solid var(--border);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px;">
                        <div style="flex: 1;">
                            <h3 style="margin: 0 0 8px 0; color: var(--text-main); font-size: 1.3rem; font-weight: 700;">${video.title}</h3>
                            <p style="margin: 0; color: var(--text-muted); font-size: 0.95rem; line-height: 1.6;">${video.description}</p>
                        </div>
                        <div style="text-align: right; flex-shrink: 0;">
                            <span class="badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px; display: inline-block;">⏱️ ${video.duration}</span>
                        </div>
                    </div>

                    <!-- Video Badges -->
                    <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap;">
                        <span class="badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px;">📹 Course Overview</span>
                        <span class="badge" style="background: rgba(16, 185, 129, 0.1); color: var(--secondary); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px;">✓ Beginner Friendly</span>
                        <span class="badge" style="background: rgba(245, 158, 11, 0.1); color: var(--accent); font-size: 0.75rem; padding: 6px 12px; border-radius: 6px;">⭐ Recommended</span>
                    </div>

                    <!-- Video Tips -->
                    <div style="margin-top: 16px; padding: 12px; background: rgba(79, 70, 229, 0.05); border-left: 3px solid var(--primary); border-radius: 4px; font-size: 0.85rem; color: var(--text-muted);">
                        <strong style="color: var(--text-main);">💡 Tip:</strong> Watch this video to get an overview of the course structure and learning objectives.
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

    SidebarNavItem: (topic, isActive) => `
        <div class="nav-item ${isActive ? 'active' : ''} ${topic.status === 'locked' ? 'locked' : ''}" onclick="${topic.status !== 'locked' ? `app.navigateTo('topic', '${topic.id}')` : ''}">
            <i data-lucide="${topic.status === 'completed' ? 'check-circle' : topic.status === 'pending' ? 'circle' : 'lock'}" class="status-icon ${topic.status === 'completed' ? 'check' : topic.status === 'pending' ? 'pending' : 'locked'}"></i>
            <span>${topic.title}</span>
        </div>
    `,

    ThreePanelLayout: (block) => `
        <div class="panel-container">
            <div class="panel panel-code">
                <div class="panel-header"><i data-lucide="code"></i> R Code</div>
                <div class="panel-body">
                    <div class="code-wrapper">
                        <button class="copy-btn" onclick="app.copyCode(event)">Copy</button>
                        <pre><code class="language-r">${block.code || ''}</code></pre>
                    </div>
                </div>
            </div>
            <div class="panel panel-explanation">
                <div class="panel-header"><i data-lucide="info"></i> Explanation</div>
                <div class="panel-body">
                    <ul>${(block.explanation || []).map(line => `<li>${line}</li>`).join('')}</ul>
                </div>
            </div>
            <div class="panel panel-output">
                <div class="panel-header"><i data-lucide="terminal"></i> Output</div>
                <div class="panel-body">
                    <ul>${(block.interpretation || []).map(line => `<li>${line}</li>`).join('')}</ul>
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
        </div>
    `,

    ErrorBlock: (block) => `
        <div class="error-view">
            <div class="error-box">
                <div class="error-title"><i data-lucide="alert-circle"></i> Error</div>
                <pre><code>${block.error}</code></pre>
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
            </div>
        </div>
    `,

    NextClassPreview: () => `
        <div class="card next-class-card" style="background: #f8fafc; border-left: 5px solid var(--accent);">
            <h3 style="color: var(--accent);">Next Class Preview</h3>
            <p>Stay tuned for more content!</p>
        </div>
    `,

    MCQScreen: (q) => `
        <div class="mcq-view card">
            <div class="mcq-header">
                <h2>${q.question}</h2>
            </div>
            <div class="mcq-options" style="display: grid; gap: 12px; margin-top: 24px;">
                ${q.options.map((opt, i) => `<button class="option-btn" onclick="app.checkAnswer(${i})" style="text-align: left; padding: 15px; border-radius: 10px; border: 1px solid var(--border); background: var(--bg-card); cursor: pointer; transition: 0.2s;">${opt}</button>`).join('')}
            </div>
        </div>
    `,

    ActivityBlock: (block) => `
        <div class="card activity-card" style="border: 2px dashed var(--primary); background: rgba(79, 70, 229, 0.02); margin: 30px 0;">
            <h3>🧪 Try This: ${block.title}</h3>
            <p>${block.prompt}</p>
        </div>
    `,

    Badge: (text) => `<span class="badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); padding: 4px 8px; border-radius: 4px; font-size: 0.75rem;">${text}</span>`,

    ProjectCard: (project) => `
        <div class="card project-card" onclick="app.navigateTo('project', '${project.id}')" style="display: flex; gap: 20px; align-items: center; border-left: 5px solid var(--primary); cursor: pointer; transition: transform 0.2s;">
            <div class="project-icon" style="width: 60px; height: 60px; background: rgba(79, 70, 229, 0.1); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--primary);">
                <i data-lucide="briefcase" size="32"></i>
            </div>
            <div class="project-details" style="flex: 1;">
                <h3>${project.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${project.description}</p>
            </div>
        </div>
    `,

    ProjectDetailsBlock: (p) => `
        <div class="project-view handout-container">
            <h1>${p.title}</h1>
            <p>${p.description}</p>
        </div>
    `,

    ActivitySlide: (slide) => `
        <div class="card activity-card">
            <h2>${slide.title}</h2>
            <p>${slide.prompt}</p>
        </div>
    `,

    MindMap: (data) => {
        if (!data) return '';
        return `
            <div class="mindmap-container">
                <div class="mindmap-header">
                    <i data-lucide="network"></i> Topic Mind Map
                </div>
                <div class="mindmap-wrapper">
                    <!-- Central Node -->
                    <div class="mindmap-center">
                        <div class="node central-node">
                            <span>${data.center}</span>
                        </div>
                    </div>
                    
                    <!-- Branches -->
                    <div class="mindmap-branches">
                        ${data.branches.map((branch, bIdx) => `
                            <div class="mindmap-branch" style="--branch-index: ${bIdx}">
                                <div class="node branch-node">
                                    <span class="branch-title">${branch.title}</span>
                                    <ul class="sub-items">
                                        ${branch.subItems.map(item => `<li>${item}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    HandoutBlock: (h) => `
        <div class="handout-container">
            <header class="handout-header card" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); color: white; padding: 30px; border-radius: 12px; margin-bottom: 30px;">
                <h1 style="margin: 0 0 10px 0; font-size: 2rem;">${h.unitAndTopic}</h1>
                <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;"><em>"${h.hook}"</em></p>
            </header>

            ${h.position ? `
            <section class="handout-section card" style="border-left: 5px solid var(--primary); margin-bottom: 20px;">
                <h3 style="color: var(--primary); margin-top: 0;">📍 Course Position</h3>
                <p><strong>Position:</strong> ${h.position}</p>
                <p><strong>Prerequisites:</strong> ${h.prerequisites}</p>
            </section>
            ` : ''}

            ${h.outcomes && h.outcomes.length > 0 ? `
            <section class="handout-section card" style="border-left: 5px solid var(--secondary); margin-bottom: 20px;">
                <h3 style="color: var(--secondary); margin-top: 0;">🎯 Learning Outcomes</h3>
                <ul style="padding-left: 20px;">
                    ${h.outcomes.map(o => `<li style="margin-bottom: 8px;">${o}</li>`).join('')}
                </ul>
            </section>
            ` : ''}

            ${h.mindMap ? Components.MindMap(h.mindMap) : ''}

            ${h.subTopicsHierarchy ? `
            <section class="handout-section card" style="border-left: 5px solid #6366f1; margin-bottom: 20px; background: rgba(99, 102, 241, 0.02);">
                <h3 style="color: #6366f1; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="layers" style="width: 20px;"></i> Topic Hierarchy
                </h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 15px;">
                    ${h.subTopicsHierarchy.map((st, idx) => `
                        <div class="card" style="background: white; padding: 20px; border-radius: 16px; border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.02); animation: slideUp 0.5s ease-out ${idx * 0.15}s both; margin: 0;">
                            <h4 style="color: var(--primary); margin: 0 0 12px 0; font-size: 1.1rem; display: flex; align-items: center; gap: 10px; font-weight: 700;">
                                <span style="background: var(--primary); color: white; width: 24px; height: 24px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;">${idx + 1}</span>
                                ${st.title}
                            </h4>
                            <ul style="padding-left: 15px; margin: 0; list-style-type: none;">
                                ${st.subSubTopics.map(sst => `
                                    <li style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 6px; display: flex; align-items: flex-start; gap: 8px;">
                                        <i data-lucide="chevron-right" style="width: 14px; margin-top: 3px; color: var(--secondary); flex-shrink: 0;"></i>
                                        <span>${sst}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    `).join('')}
                </div>
            </section>
            ` : h.subTopics ? `
             <section class="handout-section card" style="border-left: 5px solid #6366f1; margin-bottom: 20px;">
                <h3 style="color: #6366f1; margin-top: 0;">📚 Sub-topics</h3>
                <p>${h.subTopics}</p>
            </section>
            ` : ''}

            ${h.background ? `
            <section class="handout-section card" style="border-left: 5px solid var(--accent); margin-bottom: 20px;">
                <h3 style="color: var(--accent); margin-top: 0;">📚 Background & Context</h3>
                <p>${h.background}</p>
                ${h.motivation ? `<div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 8px; margin-top: 15px;"><strong>💡 Why This Matters:</strong> ${h.motivation}</div>` : ''}
            </section>
            ` : ''}

            ${h.coreConcept ? `
            <section class="handout-section card" style="border-left: 5px solid #8b5cf6; margin-bottom: 20px;">
                <h3 style="color: #8b5cf6; margin-top: 0;">🧠 Core Concept</h3>
                <p>${h.coreConcept}</p>
                ${h.terminology ? `<p style="margin-top: 15px;"><strong>Key Terms:</strong> ${h.terminology}</p>` : ''}
            </section>
            ` : ''}

            ${h.mathematicalFoundations ? `
            <section class="handout-section card" style="border-left: 5px solid #ef4444; margin-bottom: 20px;">
                <h3 style="color: #ef4444; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="function" style="width: 20px;"></i> Mathematical Foundation
                </h3>
                <div style="background: var(--bg-main); padding: 25px; border-radius: 12px; border: 1px solid var(--border); margin-bottom: 15px;">
                    <div style="font-size: 1.2rem; text-align: center; margin-bottom: 20px; padding: 15px; background: rgba(239, 68, 68, 0.03); border-radius: 8px;">
                        ${h.mathematicalFoundations.equation}
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">
                        ${h.mathematicalFoundations.terms.map(term => `
                            <div style="padding: 10px; background: rgba(239, 68, 68, 0.05); border-radius: 8px; border-left: 3px solid #ef4444;">
                                <strong>${term.symbol}:</strong> ${term.interpretation}
                            </div>
                        `).join('')}
                    </div>
                </div>
                ${h.mathematicalFoundations.illustration ? `
                    <div style="background: #fdf2f2; padding: 15px; border-radius: 8px; border: 1px dashed #ef4444; font-size: 0.9rem; color: #991b1b;">
                        <strong>🎨 Illustration:</strong> ${h.mathematicalFoundations.illustration}
                    </div>
                ` : ''}
            </section>
            ` : ''}

            ${h.stepByStepAlgorithm ? `
            <section class="handout-section card" style="border-left: 5px solid #f97316; margin-bottom: 20px;">
                <h3 style="color: #f97316; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="list-ordered" style="width: 20px;"></i> Step-by-Step Algorithm
                </h3>
                <div style="margin-bottom: 20px;">
                    ${h.stepByStepAlgorithm.steps.map((step, idx) => `
                        <div style="display: flex; gap: 15px; margin-bottom: 12px; align-items: flex-start;">
                            <div style="width: 24px; height: 24px; background: #f97316; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.8rem; font-weight: 700;">${idx + 1}</div>
                            <div style="font-size: 0.95rem; line-height: 1.5; color: var(--text-main);">${step}</div>
                        </div>
                    `).join('')}
                </div>
                ${h.stepByStepAlgorithm.sampleIO ? `
                <div style="background: #fff7ed; padding: 20px; border-radius: 12px; border: 1px solid #ffedd5;">
                    <h4 style="color: #c2410c; margin-top: 0; font-size: 0.95rem; margin-bottom: 12px;">📊 Sample Input/Output Interpretation</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #fed7aa;">
                            <small style="color: #9a3412; font-weight: 700; text-transform: uppercase; font-size: 0.7rem; display: block; margin-bottom: 5px;">Input Data</small>
                            <code style="font-size: 0.85rem; color: var(--text-main);">${h.stepByStepAlgorithm.sampleIO.input}</code>
                        </div>
                        <div style="background: white; padding: 12px; border-radius: 8px; border: 1px solid #fed7aa;">
                            <small style="color: #9a3412; font-weight: 700; text-transform: uppercase; font-size: 0.7rem; display: block; margin-bottom: 5px;">Calculated Output</small>
                            <code style="font-size: 0.85rem; color: var(--text-main);">${h.stepByStepAlgorithm.sampleIO.output}</code>
                        </div>
                    </div>
                    <p style="margin-top: 12px; font-size: 0.85rem; color: #7c2d12; line-height: 1.6; font-style: italic;">
                        <strong>Interpretation:</strong> ${h.stepByStepAlgorithm.sampleIO.interpretation}
                    </p>
                </div>
                ` : ''}
            </section>
            ` : ''}

            ${h.rCode ? `
            <section class="handout-section card" style="border-left: 5px solid #10b981; margin-bottom: 20px;">
                <h3 style="color: #10b981; margin-top: 0;">💻 R Code Example</h3>
                <div style="background: #1e1e1e; color: #d4d4d4; padding: 15px; border-radius: 8px; overflow-x: auto; font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.5;">
                    <pre style="margin: 0; white-space: pre-wrap; word-wrap: break-word;">${h.rCode}</pre>
                </div>
                ${h.rOutput ? `
                <div style="background: #f0fdf4; color: #166534; padding: 15px; border-radius: 8px; margin-top: 15px; font-family: 'Courier New', monospace; font-size: 0.9rem; border-left: 3px solid #10b981;">
                    <strong>Output:</strong>
                    <pre style="margin: 10px 0 0 0; white-space: pre-wrap; word-wrap: break-word;">${h.rOutput}</pre>
                </div>
                ` : ''}
            </section>
            ` : ''}

            ${h.rInterpretation ? `
            <section class="handout-section card" style="border-left: 5px solid #0ea5e9; margin-bottom: 20px;">
                <h3 style="color: #0ea5e9; margin-top: 0;">💡 Interpretation & Insights</h3>
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; line-height: 1.8; color: var(--text-main);">
                    ${h.rInterpretation}
                </div>
            </section>
            ` : ''}

            ${h.caseProblem ? `
            <section class="handout-section card" style="border-left: 5px solid #ec4899; margin-bottom: 20px;">
                <h3 style="color: #ec4899; margin-top: 0;">📋 Real-World Case Study</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                    <div style="background: #fce7f3; padding: 15px; border-radius: 8px;">
                        <strong style="color: #ec4899;">Problem:</strong>
                        <p style="margin-top: 8px; font-size: 0.9rem;">${h.caseProblem}</p>
                    </div>
                    <div style="background: #fef3c7; padding: 15px; border-radius: 8px;">
                        <strong style="color: #f59e0b;">Solution:</strong>
                        <p style="margin-top: 8px; font-size: 0.9rem;">${h.caseSolution}</p>
                    </div>
                    <div style="background: #dcfce7; padding: 15px; border-radius: 8px;">
                        <strong style="color: #10b981;">Outcome:</strong>
                        <p style="margin-top: 8px; font-size: 0.9rem;">${h.caseOutcome}</p>
                    </div>
                </div>
            </section>
            ` : ''}

            ${h.applications && h.applications.length > 0 ? `
            <section class="handout-section card" style="border-left: 5px solid #06b6d4; margin-bottom: 20px;">
                <h3 style="color: #06b6d4; margin-top: 0;">🌍 Real-World Applications</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px;">
                    ${h.applications.map(app => `
                        <div style="background: #f0f9ff; padding: 12px; border-radius: 8px; border-left: 3px solid #06b6d4;">
                            ✓ ${app}
                        </div>
                    `).join('')}
                </div>
            </section>
            ` : ''}

            ${h.experientialActivity ? `
            <section class="handout-section card" style="border-left: 5px solid #f59e0b; margin-bottom: 20px;">
                <h3 style="color: #f59e0b; margin-top: 0;">🧪 Try This Activity</h3>
                <div style="background: #fffbeb; padding: 15px; border-radius: 8px;">
                    ${h.experientialActivity}
                </div>
            </section>
            ` : ''}

            ${h.quizQuestions && h.quizQuestions.length > 0 ? `
            <section class="handout-section card" style="border-left: 5px solid #6366f1; margin-bottom: 20px;">
                <h3 style="color: #6366f1; margin-top: 0;">❓ Self-Check Questions</h3>
                <ol style="padding-left: 20px;">
                    ${h.quizQuestions.map(q => `<li style="margin-bottom: 8px;">${q}</li>`).join('')}
                </ol>
            </section>
            ` : ''}

            ${h.examQuestions5M && h.examQuestions5M.length > 0 ? `
            <section class="handout-section card" style="border-left: 5px solid #8b5cf6; margin-bottom: 20px;">
                <h3 style="color: #8b5cf6; margin-top: 0;">📝 Exam Preparation (5 Marks)</h3>
                <ol style="padding-left: 20px;">
                    ${h.examQuestions5M.map(q => `<li style="margin-bottom: 8px;">${q}</li>`).join('')}
                </ol>
            </section>
            ` : ''}

            ${h.examQuestions10M && h.examQuestions10M.length > 0 ? `
            <section class="handout-section card" style="border-left: 5px solid #d946ef; margin-bottom: 20px;">
                <h3 style="color: #d946ef; margin-top: 0;">📝 Exam Preparation (10 Marks)</h3>
                <ol style="padding-left: 20px;">
                    ${h.examQuestions10M.map(q => `<li style="margin-bottom: 8px;">${q}</li>`).join('')}
                </ol>
            </section>
            ` : ''}

            ${h.advancedDeepDive ? `
            <section class="handout-section card" style="border-left: 5px solid #6366f1; margin-bottom: 20px; background: linear-gradient(to right, rgba(99, 102, 241, 0.05), transparent);">
                <h3 style="color: #6366f1; margin-top: 0; display: flex; align-items: center; gap: 10px;">
                    <i data-lucide="zap" style="width: 20px; color: #f59e0b;"></i> Advanced Deep Dive (For Fast Learners)
                </h3>
                <div style="background: rgba(99, 102, 241, 0.05); padding: 25px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.2);">
                    ${h.advancedDeepDive}
                </div>
            </section>
            ` : ''}
        </div>
    `,

    QuestionBankBlock: (unitId, questions) => {
        return `
        <div class="question-bank-container fade-in">
            <header class="page-header" style="background: linear-gradient(135deg, #6366f1, #a855f7); color: white; padding: 40px; border-radius: 16px; margin-bottom: 30px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
                <div style="display: flex; flex-direction: column; gap: 25px;">
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <div style="background: rgba(255, 255, 255, 0.2); width: 60px; height: 60px; border-radius: 15px; display: flex; align-items: center; justify-content: center;">
                            <i data-lucide="brain" style="width: 35px; height: 35px;"></i>
                        </div>
                        <div>
                            <h1 style="margin: 0; font-size: 2.2rem; font-weight: 800; letter-spacing: -0.025em;">🧠 Unit ${unitId} Question Bank</h1>
                            <p style="margin: 5px 0 0 0; font-size: 1.1rem; opacity: 0.9;">10 Higher Order Thinking (HOT) Questions with Schemes & Solutions</p>
                        </div>
                    </div>
                    
                    <div class="unit-tabs" style="display: flex; gap: 10px; background: rgba(255, 255, 255, 0.1); padding: 5px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.2); align-self: flex-start;">
                        ${[1, 2, 3, 4].map(id => `
                            <button onclick="app.navigateTo('question-bank', ${id})" 
                                    style="padding: 10px 25px; border-radius: 8px; border: none; cursor: pointer; font-weight: 700; font-size: 0.95rem; transition: all 0.3s; 
                                           background: ${unitId == id ? 'white' : 'transparent'}; 
                                           color: ${unitId == id ? '#6366f1' : 'white'};">
                                Unit ${id}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </header>

            <div class="questions-grid" style="display: flex; flex-direction: column; gap: 20px;">
                ${questions.map((q, idx) => `
                    <div class="card question-card" style="border: 1px solid var(--border); padding: 0; border-radius: 15px; overflow: hidden; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); background: var(--bg-card); box-shadow: var(--shadow-sm);">
                        <div class="question-header" style="padding: 25px; border-bottom: 1px solid var(--border); display: flex; gap: 20px; align-items: flex-start; background: rgba(99, 102, 241, 0.02);">
                            <span style="background: linear-gradient(135deg, #6366f1, #818cf8); color: white; width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0; box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);">${idx + 1}</span>
                            <div style="flex-grow: 1;">
                                <h4 style="margin: 0; font-size: 1.15rem; line-height: 1.6; color: var(--text-main); font-weight: 700;">${q.question}</h4>
                            </div>
                        </div>
                        
                        <div class="question-body" style="padding: 25px;">
                            <div style="margin-bottom: 25px;">
                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                                    <div style="background: #eef2ff; color: #6366f1; padding: 6px; border-radius: 6px;">
                                        <i data-lucide="list-checks" style="width: 18px; height: 18px;"></i>
                                    </div>
                                    <strong style="color: var(--text-main); font-size: 0.95rem;">Marking Scheme & Evaluation Criteria</strong>
                                </div>
                                <div style="background: #f8fafc; color: #475569; padding: 15px; border-radius: 10px; font-size: 0.92rem; border-left: 4px solid #6366f1; line-height: 1.6;">
                                    ${q.scheme}
                                </div>
                            </div>
                            
                            <div class="solution-container">
                                <button class="btn show-solution-btn" onclick="const content = this.nextElementSibling; content.classList.toggle('hidden'); this.querySelector('.btn-text').innerText = content.classList.contains('hidden') ? 'Reveal Detailed Solution' : 'Hide Solution'; if(!content.classList.contains('hidden')) { lucide.createIcons(); }" style="background: white; color: #ec4899; border: 2px solid #ec4899; padding: 10px 20px; border-radius: 10px; cursor: pointer; font-size: 0.95rem; display: flex; align-items: center; gap: 10px; font-weight: 700; transition: all 0.2s ease;">
                                    <i data-lucide="eye" style="width: 18px;"></i> <span class="btn-text">Reveal Detailed Solution</span>
                                </button>
                                <div class="solution-content hidden" style="margin-top: 20px; background: #fff1f2; color: #9f1239; padding: 25px; border-radius: 12px; border: 1px solid #fecdd3; line-height: 1.7; animation: slideDown 0.3s ease-out;">
                                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px; color: #e11d48;">
                                        <i data-lucide="check-circle-2" style="width: 20px; height: 20px;"></i>
                                        <h5 style="margin: 0; font-size: 1rem; font-weight: 800;">Academic Solution & Analysis</h5>
                                    </div>
                                    <div style="color: #4b5563; font-size: 1rem;">${q.solution}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <style>
                .hidden { display: none; }
                .question-card:hover { transform: translateY(-6px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); border-color: #6366f1; }
                .show-solution-btn:hover { background: #ec4899 !important; color: white !important; transform: scale(1.02); }
                @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
        </div>
    `;
    }
};

