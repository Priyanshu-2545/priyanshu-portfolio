'use client';

import { useEffect, useRef } from 'react';

interface ConfettiCelebrationProps {
  trigger?: boolean;
  duration?: number;
  particleCount?: number;
}

export function ConfettiCelebration({
  trigger = false,
  duration = 3000,
  particleCount = 150,
}: ConfettiCelebrationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!trigger) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: particleCount }, () => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 20,
      vy: (Math.random() - 0.5) * 20 - 10,
      size: Math.random() * 8 + 4,
      color: `hsl(${Math.random() * 360}, 70%, 50%)`,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      opacity: 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.5; // gravity
        particle.rotation += particle.rotationSpeed;
        particle.opacity -= 0.01;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        ctx.restore();
      });

      if (particles.some((p) => p.opacity > 0)) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    const timeout = setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, duration);

    return () => clearTimeout(timeout);
  }, [trigger, duration, particleCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: trigger ? 1 : 0 }}
    />
  );
}
