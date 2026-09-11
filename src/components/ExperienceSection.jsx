import React from 'react';

const journey = [
  {
    date: 'Feb 2026 — Present',
    company: 'Cognizant',
    title: 'Frontline Engineer',
    current: true,
    points: [
      'Resolve complex technical issues across Google Workspace environments using systematic debugging.',
      'Work with Google Cloud technologies — IAM, cloud services, and infrastructure configurations.',
      'Achieved Google AGWA certification for Workspace administration and enterprise productivity.',
      'Apply Google Cloud fundamentals to improve reliability, security, and operational efficiency.',
    ],
  },
  {
    date: 'Jul 2024 — Jan 2026',
    company: 'TaskLabs',
    title: 'Full Stack Developer',
    current: false,
    points: [
      'Built cmdOS, a Chrome extension for executing commands, web search, launching apps, and AI assistant interaction through a unified command interface.',
      'Developed browser automation workflows with shortcut systems, tab management, and customizable actions.',
    ],
  },
  {
    date: '2022 — 2026',
    company: 'SRKREC',
    title: 'B.Sc Computer Science · GPA 8.8/10',
    current: false,
    points: [
      'Sagi Rama Krishnam Raju Engineering College, Bhimavaram, Andhra Pradesh.',
      'Coursework: Data Structures & Algorithms, DBMS, Web Development.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <div className="experience">
      <div className="journey">
        {journey.map((stop, index) => (
          <div key={index} className={`journey__stop ${stop.current ? 'journey__stop--current' : ''}`}>
            <div className="journey__node" />
            <span className="journey__date">{stop.date}</span>
            <h3 className="journey__company">{stop.company}</h3>
            <span className="journey__title">{stop.title}</span>
            <ul className="journey__points">
              {stop.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
