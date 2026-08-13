'use client';

import { ReactNode, forwardRef } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
  border?: boolean;
  shadow?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  (
    {
      children,
      className = '',
      intensity = 'medium',
      border = true,
      shadow = true,
    },
    ref
  ) => {
    const intensityStyles = {
      light: 'bg-white/5 backdrop-blur-sm',
      medium: 'bg-white/10 backdrop-blur-md',
      heavy: 'bg-white/15 backdrop-blur-lg',
    };

    return (
      <div
        ref={ref}
        className={`
          ${intensityStyles[intensity]}
          ${border ? 'border border-white/20' : ''}
          ${shadow ? 'shadow-xl' : ''}
          rounded-2xl
          transition-all
          duration-300
          hover:bg-white/15
          hover:shadow-2xl
          hover:scale-[1.02]
          ${className}
        `}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';
