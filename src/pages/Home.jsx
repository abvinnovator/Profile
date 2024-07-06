import React from 'react';
import UseTypingAnimation from './UseTypingAnimation';

const CursorSVG = () => (
    <svg
        viewBox="8 4 8 16"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor inline-block w-[1ch] mb-1 animate-flicker"
    >
        <rect x="10" y="6" width="4" height="12" fill="#000" />
    </svg>
);

const Home = ({darkMode}) => {
    const text = `I am more interested in building projects using the MERN stack + AI. My main aim is to make websites more interactive and user-friendly.`;
    const [displayedText, completedTyping] = UseTypingAnimation(text, 50);

    return (
        <div className={`bg-white ${darkMode ? 'dark:bg-gray-900 text-gray-200 dark:text-gray-300' : 'text-gray-800'} min-h-screen transition-all duration-500 flex flex-col items-center justify-center p-4`}>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
                <img 
                    src="https://avatars.githubusercontent.com/u/144054938?v=4" 
                    alt="Profile"
                    className="w-40 h-40 rounded-full shadow-lg"
                />
                <div className="text-center md:text-left max-w-md">
                    <h1 className="text-4xl font-bold mb-4">
                        Hey, I'm BrahmaVamsi
                    </h1>
                    <div className="text-lg" style={{ minHeight: '4rem' }}>
                        <span>
                            {displayedText}
                            {!completedTyping && <CursorSVG />}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
