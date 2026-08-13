'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function TiltCard({ children, className = '', intensity = 20, onMouseEnter, onMouseLeave }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -intensity;
    const rotateYValue = ((x - centerX) / centerX) * intensity;

    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    onMouseLeave?.();
  };

  const handleMouseEnter = () => {
    onMouseEnter?.();
  };

  return (
    <motion.div
      ref={ref}
      className={`transform-style-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
    >
      <div
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}
