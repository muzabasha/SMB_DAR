// Topic Mind Map Component
const MindMap = {
    render: () => {
        const units = courseData.units;

        return `
            <div class="mindmap-container">
                <div class="mindmap-header">
                    <h2>📊 Course Mind Map</h2>
                    <p>Visual journey through Data Analytics using R</p>
                </div>

                <div class="mindmap-center">
                    <div class="mindmap-core">
                        <div class="core-icon">📚</div>
                        <h3>Data Analytics<br>using R</h3>
                        <p class="core-subtitle">Interactive Learning Path</p>
                    </div>
                </div>

                <div class="mindmap-branches">
                    ${units.map((unit, index) => `
                        <div class="mindmap-branch branch-${index + 1}" data-unit="${unit.id}">
                            <div class="branch-connector"></div>
                            <div class="branch-node" onclick="app.navigateTo('unit', ${unit.id})">
                                <div class="node-header">
                                    <span class="node-number">Unit ${unit.id}</span>
                                    <span class="node-progress">${Math.round((unit.topics.filter(t => t.status === 'completed').length / unit.topics.length) * 100)}%</span>
                                </div>
                                <h4 class="node-title">${unit.title}</h4>
                                <p class="node-description">${unit.description}</p>
                                <div class="node-topics">
                                    ${unit.topics.slice(0, 3).map(topic => `
                                        <div class="topic-pill ${topic.status}" onclick="event.stopPropagation(); app.navigateTo('topic', '${topic.id}')">
                                            <i data-lucide="${topic.status === 'completed' ? 'check-circle' : topic.status === 'pending' ? 'circle' : 'lock'}" style="width: 12px; height: 12px;"></i>
                                            <span>${topic.title.replace(/📚|Prerequisites:|Overview & Need for|Nature & Classification of|Characteristics of|Applications of/g, '').trim()}</span>
                                        </div>
                                    `).join('')}
                                    ${unit.topics.length > 3 ? `<div class="topic-pill more">+${unit.topics.length - 3} more</div>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="mindmap-legend">
                    <div class="legend-item">
                        <i data-lucide="check-circle" style="width: 16px; height: 16px; color: var(--secondary);"></i>
                        <span>Completed</span>
                    </div>
                    <div class="legend-item">
                        <i data-lucide="circle" style="width: 16px; height: 16px; color: var(--accent);"></i>
                        <span>In Progress</span>
                    </div>
                    <div class="legend-item">
                        <i data-lucide="lock" style="width: 16px; height: 16px; color: var(--text-muted);"></i>
                        <span>Locked</span>
                    </div>
                </div>
            </div>
        `;
    }
};
