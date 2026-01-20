import React from 'react';
import { motion } from 'framer-motion';
import UseTypingAnimation from './UseTypingAnimation';

const Home = ({ darkMode }) => {
    const text = `I am more interested in building projects using the MERN stack + AI. My main aim is to make websites more interactive and user-friendly.`;
    const [displayedText, completedTyping] = UseTypingAnimation(text, 50);

    return (
        <div className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'}`}>
            
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={`absolute -top-[10%] -right-[10%] w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-indigo-900' : 'bg-indigo-300'}`} />
                <div className={`absolute top-[40%] -left-[10%] w-72 h-72 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-blue-900' : 'bg-blue-300'}`} />
            </div>

            <div className="container mx-auto px-6 h-screen flex flex-col md:flex-row items-center justify-center relative z-10">
                
                {/* Text Content - Left Side */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0"
                >
                    <h2 className={`text-lg md:text-xl font-medium tracking-wide mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        Portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Hey, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            BrahmaVamsi
                        </span>
                    </h1>
                    
                    <div className="min-h-[6rem] md:min-h-[5rem] text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        <p>
                            {displayedText}
                            <span className={`inline-block w-[2px] h-[1em] ml-1 align-middle bg-current ${completedTyping ? 'animate-none opacity-0' : 'animate-pulse'}`}></span>
                        </p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-8 flex gap-4 justify-center md:justify-start"
                    >
                        {/* Placeholder for standard CTA to add visual weight, even if not functional yet */}
                        <div className={`h-1 w-24 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
                    </motion.div>
                </motion.div>

                {/* Hero Image - Right Side */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <div className="relative group">
                        {/* Decorative backing for image */}
                        <div className={`absolute -inset-1 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 ${darkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-400 to-purple-400'}`}></div>
                        
                        <img 
                            src="https://avatars.githubusercontent.com/u/144054938?v=4" 
                            alt="BrahmaVamsi"
                            className="relative w-64 h-64 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-2 border-white/10 dark:border-black/10 transform transition-transform duration-500 hover:scale-[1.01]"
                        />
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;
