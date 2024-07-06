import React from 'react';

const About = ({ darkMode }) => {
  return (
    <div className={`bg-white ${darkMode ? 'dark:bg-gray-900 text-gray-200' : 'text-gray-800'} min-h-screen p-4 transition-all duration-500`}>
      <h1 className="text-4xl font-bold text-center my-8 md:my-12">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 mx-4 md:mx-12">
        <div className="mb-8">
          <p className="mb-4"><span className="font-semibold">Name:</span> A. Brahma Vamsi</p>
          <p className="mb-4"><span className="font-semibold">Location:</span> Andhra Pradesh, India 📍</p>
          <p className="mb-4"><span className="font-semibold">Degree:</span> Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)</p>
          <p className="mb-4"><span className="font-semibold">Email:</span> <a href="mailto:brahmavamsi1234@gmail.com" className="text-blue-600 dark:text-blue-400">brahmavamsi1234@gmail.com</a></p>
          <p className="mb-4"><span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/brahmavamsi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">linkedin.com/in/brahmavamsi</a></p>
          <p className="mb-4"><span className="font-semibold">GitHub:</span> <a href="https://github.com/abvinnovator" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">github.com/abvinnovator</a></p>
        </div>
        <div className="mb-8">
          <p className="mb-4"><span className="font-semibold">Age:</span> 19 years</p>
          <p className="mb-4"><span className="font-semibold">Career Level:</span> Beginner-level</p>
          <p className="mb-4"><span className="font-semibold">Interests:</span> Full-stack web development, AI integration in web applications, UI/UX design</p>
          <p className="mb-4"><span className="font-semibold">Skills:</span> JavaScript (React, Node.js), Python (Flask), MongoDB, Firebase, HTML/CSS, Git</p>
          <p className="mb-4"><span className="font-semibold">Projects:</span> Check out my projects on <a href="https://github.com/abvinnovator" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">GitHub</a></p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 md:mt-12">
        <a
          href="https://drive.google.com/uc?export=download&id=1CFWYAcJV5jebXrOTVf6tw31KaSu__hFo"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
