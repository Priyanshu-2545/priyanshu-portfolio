'use client';

import { useState, useEffect } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  characters?: string;
}

export function TextScramble({
  text,
  className = '',
  speed = 50,
  characters = '!<>-_\\/[]{}—=+*^?#________',
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);

  const scramble = (originalText: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, speed);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    scramble(text);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setDisplayText(text);
  };

  return (
    <span
      className={`inline-block cursor-default ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
}
