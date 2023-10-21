import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const text = texts[currentTextIndex];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        // If text is fully displayed, move to the next text
        clearInterval(interval);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) =>
            prevIndex === texts.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000); // Change text after 1 second (adjust as needed)
      }
    }, 100); // Adjust typing speed (lower value for faster typing)

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setCursorVisible((prevVisible) => !prevVisible);
    }, 500); // Adjust blinking speed (500ms for 0.5-second intervals)

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [currentTextIndex, texts]);

  return (
    <div className="typewriter">
      {displayedText}
      <span
    className={`inline-block w-1 h-11 bg-blue-800 ml-2 animate-blink ${
      cursorVisible ? 'visible' : 'invisible'
    }`}
  ></span>
    </div>
  );
};

export default Typewriter;
