'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Create trail elements
    const trailCount = 5;
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'fixed pointer-events-none rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-50';
      trail.style.width = `${20 - i * 3}px`;
      trail.style.height = `${20 - i * 3}px`;
      trail.style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out';
      trail.style.opacity = `${0.4 - i * 0.08}`;
      document.body.appendChild(trail);
      trailRef.current.push(trail);
    }

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return;

      setPosition({ x: e.clientX, y: e.clientY });

      // Move trail with delay using CSS transition
      trailRef.current.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${e.clientX - (10 - index * 1.5)}px`;
          trail.style.top = `${e.clientY - (10 - index * 1.5)}px`;
        }, index * 30);
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
    const addHoverEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          cursor?.classList.add('scale-125');
          cursor?.classList.add('bg-gradient-to-r');
          cursor?.classList.add('from-purple-500');
          cursor?.classList.add('to-pink-500');
        });
        el.addEventListener('mouseleave', () => {
          cursor?.classList.remove('scale-125');
          cursor?.classList.remove('bg-gradient-to-r');
          cursor?.classList.remove('from-purple-500');
          cursor?.classList.remove('to-pink-500');
        });
      });
    };

    // Wait for DOM to be ready
    setTimeout(addHoverEffects, 100);

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
        className={`fixed pointer-events-none rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-50 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-90' : 'scale-100'}`}
        style={{
          width: '20px',
          height: '20px',
          left: `${position.x - 10}px`,
          top: `${position.y - 10}px`,
          transition: 'transform 0.1s ease-out, opacity 0.2s ease-out, background 0.3s ease',
          willChange: 'transform, left, top',
        }}
      />
    </>
  );
}
