import React, { useState, useEffect } from 'react';
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

const panelContent = {
  experience: <ExperienceSection />,
  skills: <SkillsSection />,
  projects: <ProjectsSection />,
  resume: <ResumeSection />,
  contact: <ContactSection />,
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // default to dark
  });
  const [activePanel, setActivePanel] = useState(null);

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

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const openPanel = (panel) => setActivePanel(panel);
  const closePanel = () => setActivePanel(null);

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
        {activePanel && panelContent[activePanel]}
      </Overlay>
    </div>
  );
}

export default App;
