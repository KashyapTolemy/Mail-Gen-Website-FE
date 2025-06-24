"use client";
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

const lines = [
  "Getting a job in 2025 is hard.",
  "More competition. More noise.",
  "But we are here to help..."
];

const Loader = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine < lines.length) {
      let charIndex = 0;
      const interval = setInterval(() => {
        setDisplayedText(lines[currentLine].slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === lines[currentLine].length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setDisplayedText('');
          }, 500); 
        }
      }, 50);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => setDone(true), 1000);
    }
  }, [currentLine]);

  if (done) return null; 

  return (
    <div className={styles.loaderContainer}>
      <p className={styles.typing}>{displayedText}</p>
    </div>
  );
};

export default Loader;
