import React from 'react';
import { Link } from 'react-router-dom';
import { MoonFilled, SunFilled } from '@ant-design/icons';

const Dashboard = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="flex justify-center py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-0">
      <div className="flex items-center justify-between w-full sm:w-3/4 bg-white dark:bg-gray-800 rounded-full px-6 py-2 shadow-lg">
        <div className="flex items-center space-x-4">
          <img 
            src="https://avatars.githubusercontent.com/u/144054938?v=4" // replace with your logo URL
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
          <nav className="flex space-x-4 sm:space-x-14">
            <Link to='/' className="text-gray-800 dark:text-gray-200 font-semibold">Home</Link>
            <Link to='/about' className="text-gray-800 dark:text-gray-200 font-semibold">About</Link>
            <Link to='/skills' className="text-gray-800 dark:text-gray-200 font-semibold">Skills</Link>
            <Link to='/projects' className="text-gray-800 dark:text-gray-200 font-semibold">Projects</Link>
          </nav>
        </div>
        <button onClick={toggleDarkMode} className="text-gray-800 dark:text-gray-200 focus:outline-none">
          {darkMode ? (
            <SunFilled className="w-6 h-6" />
          ) : (
            <MoonFilled className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
