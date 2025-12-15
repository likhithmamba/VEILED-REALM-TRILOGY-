import React, { useState, useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  id: number;
  color: string;
  size: number;
}

export const MouseTrail: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Create points frequently for a smooth trail
      requestRef.current++;
      if (requestRef.current % 2 !== 0) return;

      const newPoint = {
        x: e.pageX,
        y: e.pageY,
        id: Date.now(),
        // Mix of Crimson Red and Deep Gold
        color: Math.random() > 0.6 ? '#ca8a04' : '#ef4444',
        size: Math.random() * 4 + 2 // Random size between 2px and 6px
      };

      setPoints(prev => [...prev.slice(-20), newPoint]); // Keep last 20 points
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  // Auto-cleanup old points to create "fading" tail effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(prev => prev.filter(p => Date.now() - p.id < 500));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-screen">
      {points.map((point) => {
        const age = Date.now() - point.id;
        const opacity = 1 - age / 500;
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full blur-[1px]"
            style={{
              left: point.x,
              top: point.y - window.scrollY,
              width: `${point.size}px`,
              height: `${point.size}px`,
              backgroundColor: point.color,
              opacity: opacity,
              transform: `translate(-50%, -50%) scale(${opacity})`,
              boxShadow: `0 0 ${point.size * 2}px ${point.color}`, // Glowing aura
              transition: 'opacity 0.1s linear'
            }}
          />
        );
      })}
    </div>
  );
};