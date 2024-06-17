import { useState, useEffect } from 'react';

const UseTypingAnimation = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState('');
    const [completedTyping, setCompletedTyping] = useState(false);

    useEffect(() => {
        setCompletedTyping(false);
        let i = 0;

        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, i));
            i++;
            if (i > text.length) {
                clearInterval(intervalId);
                setCompletedTyping(true);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return [displayedText, completedTyping];
};

export default UseTypingAnimation;
