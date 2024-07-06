import React from 'react';
import { Progress, Tag } from 'antd';

const skills = [
  { name: 'JavaScript', level: 90, color: 'magenta' },
  { name: 'React', level: 85, color: 'red' },
  { name: 'Node.js', level: 80, color: 'volcano' },
  { name: 'Express', level: 75, color: 'orange' },
  { name: 'MongoDB', level: 70, color: 'gold' },
  { name: 'HTML & CSS', level: 95, color: 'lime' },
  { name: 'Python', level: 65, color: 'green' },
  { name: 'Machine Learning', level: 60, color: 'cyan' },
];

const Skills = ({darkMode}) => {
  return (
    <div className={`bg-white ${darkMode ? 'dark:bg-gray-900 text-gray-200' : 'text-gray-800'} min-h-screen p-4 transition-all duration-500`}>
      <h1 className="text-center text-4xl font-bold mb-8">My Skills</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-800">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">{skill.name}</span>
              <Tag color={skill.color}>{skill.level}%</Tag>
            </div>
            <Progress percent={skill.level} status="active" strokeColor={skill.color} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
