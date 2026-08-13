'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail elements
    const trailCount = 8;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'fixed pointer-events-none rounded-full bg-blue-500/30 z-50';
      trail.style.width = `${8 + i * 2}px`;
      trail.style.height = `${8 + i * 2}px`;
      trail.style.transition = 'transform 0.1s ease-out';
      document.body.appendChild(trail);
      trailRef.current.push(trail);
    }

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;

      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Move trail with delay
      trailRef.current.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${e.clientX}px`;
          trail.style.top = `${e.clientY}px`;
        }, index * 20);
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effect on clickable elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor?.classList.add('scale-150');
      });
      el.addEventListener('mouseleave', () => {
        cursor?.classList.remove('scale-150');
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      // Clean up trail elements
      trailRef.current.forEach((trail) => {
        trail.remove();
      });
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
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none rounded-full bg-blue-500 z-50 transition-transform duration-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          width: '12px',
          height: '12px',
          transition: 'transform 0.1s ease-out, opacity 0.2s ease-out',
        }}
      />
    </>
  );
}
