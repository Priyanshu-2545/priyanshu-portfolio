'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [
    direction === 'up' ? speed * 100 : -speed * 100,
    direction === 'up' ? -speed * 100 : speed * 100,
  ]);

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
