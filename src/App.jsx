import React, { useState, useEffect, useCallback } from 'react';
import BentoGrid from './components/BentoGrid';
import Overlay from './components/Overlay';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';

const panelTitles = {
  experience: 'Experience',
  skills: 'Skills',
  projects: 'Projects',
  resume: 'Resume',
  contact: 'Contact',
};

// Parse current URL path into { panel, project }
const getRouteState = () => {
  const parts = window.location.pathname.replace(/^\/+/g, '').split('/');
  const panel = parts[0] && panelTitles[parts[0]] ? parts[0] : null;
  const project = parts[0] === 'projects' && parts[1] ? parts[1] : null;
  return { panel, project };
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  const [activePanel, setActivePanel] = useState(() => getRouteState().panel);
  const [activeProjectSlug, setActiveProjectSlug] = useState(() => getRouteState().project);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync state with browser Back/Forward buttons & mobile swipe gestures
  useEffect(() => {
    const handlePopState = () => {
      const { panel, project } = getRouteState();
      setActivePanel(panel);
      setActiveProjectSlug(project);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const openPanel = useCallback((panel) => {
    const newUrl = `/${panel}`;
    if (window.location.pathname !== newUrl) {
      window.history.pushState({ panel }, '', newUrl);
    }
    setActivePanel(panel);
    if (panel !== 'projects') {
      setActiveProjectSlug(null);
    }
  }, []);

  const closePanel = useCallback(() => {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setActivePanel(null);
    setActiveProjectSlug(null);
  }, []);

  const handleSelectProject = useCallback((projectSlug) => {
    const newUrl = projectSlug ? `/projects/${projectSlug}` : '/projects';
    if (window.location.pathname !== newUrl) {
      window.history.pushState({ panel: 'projects', project: projectSlug }, '', newUrl);
    }
    setActiveProjectSlug(projectSlug);
  }, []);

  return (
    <div className="app">
      <BentoGrid
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        onPanelClick={openPanel}
      />

      <Overlay
        isOpen={activePanel !== null}
        title={activePanel ? panelTitles[activePanel] : ''}
        onClose={closePanel}
        className={activePanel === 'resume' ? 'overlay--resume' : ''}
      >
        {activePanel === 'experience' && <ExperienceSection />}
        {activePanel === 'skills' && <SkillsSection />}
        {activePanel === 'projects' && (
          <ProjectsSection
            activeProjectSlug={activeProjectSlug}
            onSelectProject={handleSelectProject}
          />
        )}
        {activePanel === 'resume' && <ResumeSection />}
        {activePanel === 'contact' && <ContactSection />}
      </Overlay>
    </div>
  );
}

export default App;
