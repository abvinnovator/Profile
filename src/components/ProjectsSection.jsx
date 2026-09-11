import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

// Import markdown files as raw text
import vexaReadme from '../pages/VEXA.md?raw';
import dockReadme from '../pages/Dock.md?raw';
import studentReadme from '../pages/STUDENT_COMMUNITY.md?raw';
import aiSupportReadme from '../pages/AI_SUPPORT_AGENT.md?raw';

const projects = [
  {
    id: 'vexa',
    name: 'Vexa AI',
    subtitle: 'Autonomous Android Phone Automation Assistant',
    tags: ['Kotlin', 'Android Accessibility API', 'FastAPI', 'Groq / OpenRouter', 'Neo4j', 'OKF'],
    description: 'An autonomous personal AI assistant that executes complex multi-step tasks directly on Android devices by analyzing UI hierarchies and executing real actions like tapping, typing, and navigation.',
    image: 'https://res.cloudinary.com/dtonbpwvj/image/upload/v1789152645/WhatsApp_Image_2026-09-12_at_12.16.41_AM_jdcphs.jpg',
    initials: 'VX',
    github: 'https://github.com/abvinnovator',
    live: null,
    readme: vexaReadme,
  },
  {
    id: 'dock',
    name: 'DOCK',
    subtitle: 'Smart Browser Workspace & Instant Snippet Extension',
    tags: ['Chrome Extension Manifest V3', 'React.js', 'TypeScript', 'Turborepo'],
    description: 'A lightweight, 100% local Chrome companion that eliminates tab-switching fatigue with persistent companion windows, instant text snippet expansion (do/shortcuts), and one-click AI dispatch.',
    image: 'https://res.cloudinary.com/dtonbpwvj/image/upload/v1789152675/WhatsApp_Image_2026-08-24_at_1.58.34_AM_z4cve2.jpg',
    initials: 'DK',
    github: 'https://github.com/abvinnovator',
    live: null,
    readme: dockReadme,
  },
  {
    id: 'student-community',
    name: 'Student Community',
    subtitle: 'Full Stack Community & Real-Time Collaboration Platform',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Cloudinary'],
    description: 'Full-stack MERN community platform featuring dynamic feeds, real-time messaging, post interactions, Cloudinary media uploads, and role-based permissions.',
    image: 'https://res.cloudinary.com/dtonbpwvj/image/upload/v1718545792/profile/s7ake4ffc8hg599rrytt.png',
    initials: 'SC',
    github: 'https://github.com/abvinnovator/Student-community',
    live: null,
    readme: studentReadme,
  },
  {
    id: 'ai-support',
    name: 'AI Support Agent',
    subtitle: 'CloudOps AI Simulator & Enterprise RAG Platform',
    tags: ['FastAPI', 'Gemini API', 'LangGraph', 'React.js', 'RAG Pipelines', 'Pinecone'],
    description: 'Enterprise cloud infrastructure simulator combining GCP-inspired architecture design, automated billing intelligence, and multi-agent customer support workflows with RAG and human-in-the-loop approvals.',
    image: 'https://github.com/user-attachments/assets/3e5af530-81c5-4434-ac5f-6e576e46f0a5',
    initials: 'AI',
    github: 'https://github.com/abvinnovator/AI-Agents-RAG',
    live: 'https://ai-agents-rag-rose.vercel.app/',
    readme: aiSupportReadme,
  },
  
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);

  const openProject = (project) => {
    setActiveProject(project);
    // Scroll overlay body to top when opening an article
    const body = document.querySelector('.overlay__body');
    if (body) body.scrollTop = 0;
  };

  const closeProject = () => {
    setActiveProject(null);
    const body = document.querySelector('.overlay__body');
    if (body) body.scrollTop = 0;
  };

  return (
    <div className="projects-v2">
      {/* Project Grid */}
      {!activeProject && (
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openProject(project)}
            >
              <div className="project-card__thumb">
                {project.image ? (
                  <img src={project.image} alt={project.name} className="project-card__img" />
                ) : (
                  <div className="project-card__thumb-placeholder">
                    <span className="project-card__initials">{project.initials}</span>
                    <span className="project-card__thumb-label">{project.name}</span>
                  </div>
                )}
                <span className="project-card__badge">Click to read article ↗</span>
              </div>

              <div className="project-card__info">
                <div className="project-card__header-row">
                  <h3 className="project-card__name">{project.name}</h3>
                  <span className="project-card__arrow">↗</span>
                </div>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tags">
                  {project.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="project-tag project-tag--more">+{project.tags.length - 4}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Expanded Project — Full Article View */}
      {activeProject && (
        <div className="project-article">
          <div className="project-article__topbar">
            <button className="project-article__back" onClick={closeProject}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Projects
            </button>
            <span className="project-article__viewing">Viewing Project Article</span>
          </div>

          {/* Hero image or banner */}
          {activeProject.image ? (
            <div className="project-article__hero">
              <img src={activeProject.image} alt={activeProject.name} />
            </div>
          ) : (
            <div className="project-article__hero project-article__hero--placeholder">
              <span className="project-article__hero-initials">{activeProject.initials}</span>
              <span className="project-article__hero-badge">{activeProject.name} Case Study</span>
            </div>
          )}

          {/* Header info */}
          <div className="project-article__header">
            <h1 className="project-article__title">{activeProject.name}</h1>
            <p className="project-article__subtitle">{activeProject.subtitle}</p>

            <div className="project-article__meta">
              <div className="project-article__tags">
                {activeProject.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-article__links">
                {activeProject.github && (
                  <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="project-article__link">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    Source Code ↗
                  </a>
                )}
                {activeProject.live && (
                  <a href={activeProject.live} target="_blank" rel="noopener noreferrer" className="project-article__link project-article__link--primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="project-article__divider" />

          {/* Article body — rendered markdown */}
          <div className="project-article__body">
            {activeProject.readme ? (
              <div className="markdown-body">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({ node, ...props }) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" />
                    ),
                    img: ({ node, ...props }) => (
                      <img
                        {...props}
                        loading="lazy"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    ),
                  }}
                >
                  {activeProject.readme}
                </ReactMarkdown>
              </div>
            ) : (
              <div className="project-article__fallback">
                <p>{activeProject.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
