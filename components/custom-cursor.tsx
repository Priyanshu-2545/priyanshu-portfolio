'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Add hover effect on clickable elements
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    setTimeout(addHoverEffects, 100);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Hide default cursor on desktop
  useEffect(() => {
    if (window.innerWidth > 768) {
      document.body.style.cursor = 'none';
    }
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none rounded-full z-50 transition-all duration-150 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isHovering ? 'scale-150 bg-blue-500' : 'scale-100 bg-blue-600'}`}
      style={{
        width: '12px',
        height: '12px',
        left: `${position.x - 6}px`,
        top: `${position.y - 6}px`,
        willChange: 'transform, left, top',
      }}
    />
  );
}
