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
            <div class="instructor-profile card" style="border: none; padding: 0; overflow: hidden; box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15); animation: slideUp 0.6s ease-out; background: var(--bg-card);">
                <div style="display: grid; grid-template-columns: 320px 1fr; gap: 0; align-items: stretch; min-height: 450px;">
                    <div style="position: relative; background: linear-gradient(135deg, var(--primary), var(--secondary)); overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 20px;">
                        <img src="${instructor.photo}" alt="${instructor.name}" style="width: 100%; height: 100%; object-fit: cover; object-position: center; display: block; border-radius: 12px; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);" />
                    </div>
                    <div style="padding: 30px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <h2 style="color: var(--text-main); margin: 0 0 8px 0; font-size: 1.8rem; font-weight: 700;">${instructor.name}</h2>
                            <p style="color: var(--primary); font-weight: 600; margin: 0 0 4px 0; font-size: 1.05rem;">${instructor.title}</p>
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0 0 16px 0;">${instructor.institution}</p>
                            <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin: 0 0 16px 0;">${instructor.bio}</p>
                            <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.3); padding: 10px 14px; border-radius: 8px; margin-bottom: 16px;">
                                <p style="color: var(--accent); font-weight: 600; margin: 0 0 4px 0; font-size: 0.85rem;">🏆 ${instructor.recognition.ranking}</p>
                                <p style="color: var(--text-muted); margin: 0; font-size: 0.8rem;">VIDWAN Score: <strong>${instructor.recognition.vidwanScore}</strong></p>
                            </div>
                        </div>
                        <div>
                            <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
                                <a href="mailto:${instructor.email}" style="display: inline-flex; align-items: center; gap: 5px; padding: 8px 14px; background: var(--primary); color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.8rem; transition: all 0.2s; cursor: pointer; border: none;">
                                    <i data-lucide="mail" style="width: 14px; height: 14px;"></i> Email
                                </a>
                                <a href="${instructor.linkedin}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 5px; padding: 8px 14px; background: #0A66C2; color: white; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 0.8rem; transition: all 0.2s; cursor: pointer; border: none;">
                                    <i data-lucide="linkedin" style="width: 14px; height: 14px;"></i> LinkedIn
                                </a>
                            </div>
                            <div>
                                <h4 style="color: var(--text-main); margin: 0 0 8px 0; font-size: 0.85rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🎯 Expertise</h4>
                                <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                    ${instructor.expertise.slice(0, 8).map(exp => `<span style="background: rgba(79, 70, 229, 0.1); color: var(--primary); padding: 4px 10px; border-radius: 16px; font-size: 0.75rem; font-weight: 500;">${exp}</span>`).join('')}
                                </div>
                            </div>
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
        </div>
    `
};

