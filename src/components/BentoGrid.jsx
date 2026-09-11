import React from 'react';
import HeroPanel from './HeroPanel';
import Panel from './Panel';

const BentoGrid = ({ darkMode, toggleDarkMode, onPanelClick }) => {
  return (
    <div className="bento-grid">
      <HeroPanel darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Panel
        className="panel--experience"
        label="01 — Journey"
        title="Experience"
        subtitle="TaskLabs → Cognizant"
        onClick={() => onPanelClick('experience')}
      />

      <Panel
        className="panel--skills"
        label="02 — Stack"
        title="Skills"
        subtitle="JS, TS, Python, React, AI"
        onClick={() => onPanelClick('skills')}
      />

      <Panel
        className="panel--projects"
        label="03 — Work"
        title="Projects"
        subtitle="4 projects"
        onClick={() => onPanelClick('projects')}
      />

      <Panel
        className="panel--resume"
        label="04 — PDF"
        title="Resume"
        subtitle="View directly"
        onClick={() => onPanelClick('resume')}
      />

      <Panel
        className="panel--contact"
        label="05 — Say hi"
        title="Contact"
        onClick={() => onPanelClick('contact')}
      />
    </div>
  );
};

export default BentoGrid;
