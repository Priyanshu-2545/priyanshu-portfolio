'use client';

import { motion } from 'framer-motion';

interface GradientTextProps {
  text: string;
  className?: string;
  animated?: boolean;
  colors?: string[];
}

export function GradientText({
  text,
  className = '',
  animated = true,
  colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f97316'],
}: GradientTextProps) {
  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{
        background: animated
          ? `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`
          : `linear-gradient(90deg, ${colors.join(', ')})`,
        backgroundSize: animated ? '300% 100%' : '100% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
      animate={
        animated
          ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }
          : {}
      }
      transition={
        animated
          ? {
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }
          : {}
      }
    >
      {text}
    </motion.span>
  );
}
