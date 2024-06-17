import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="flex justify-center py-4 bg-white shadow-md sticky top-0 z-0">
            <div className="flex items-center justify-between w-full sm:w-3/4 bg-white rounded-full px-6 py-2 shadow-lg">
                <div className="flex items-center space-x-4">
                    <img 
                        src="https://avatars.githubusercontent.com/u/144054938?v=4" // replace with your logo URL
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <nav className="flex space-x-4 sm:space-x-14">
                        <Link to='/' className="text-gray-800 font-semibold">Home</Link>
                        <Link to='/about' className="text-gray-800 font-semibold">About</Link>
                        <Link to='/skills' className="text-gray-800 font-semibold">Skills</Link>
                        <Link to='/projects' className="text-gray-800 font-semibold">projects</Link>
                        
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
