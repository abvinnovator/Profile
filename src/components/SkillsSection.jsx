import React from 'react';

const categories = [
  {
    name: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Kotlin'],
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS', 'Redux'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'FastAPI'],
  },
  {
    name: 'AI & Automation',
    skills: ['LLM Integration', 'LangGraph', 'RAG', 'AI Agents', 'Browser Automation', 'Chrome Extensions'],
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'Supabase'],
  },
  {
    name: 'Cloud & Tools',
    skills: ['Google Cloud Platform', 'Google Workspace Admin', 'Git', 'REST APIs', 'Chrome API'],
  },
];

const SkillsSection = () => {
  return (
    <div className="skills">
      {categories.map((category, index) => (
        <div key={index} className="skills__category">
          <h3 className="skills__category-name">{category.name}</h3>
          <div className="skills__keys">
            {category.skills.map((skill, i) => (
              <span key={i} className="skill-key">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
