import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsVisible(true);

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });

      // Add glitter particle on move
      if (Math.random() > 0.3) {
        const colors = ['#00d9ff', '#7c5cff', '#ffffff', '#38bdf8'];
        particlesRef.current.push({
          x: mouseX + (Math.random() * 12 - 6),
          y: mouseY + (Math.random() * 12 - 6),
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: (Math.random() - 0.5) * 1.5,
          life: 0,
          maxLife: Math.random() * 30 + 20,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const loop = () => {
      // Smooth trailing ring
      trailX += (mouseX - trailX) * 0.22;
      trailY += (mouseY - trailY) * 0.22;
      setTrailingPos({ x: trailX, y: trailY });

      // Render glitter particles on canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          particlesRef.current.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;
            p.life++;

            const opacity = 1 - p.life / p.maxLife;
            if (p.life >= p.maxLife || opacity <= 0) {
              particlesRef.current.splice(index, 1);
              return;
            }

            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          });
        }
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Glitter Particle Canvas overlay (completely transparent background, non-blocking) */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9997]"
        style={{ width: '100vw', height: '100vh' }}
      />

      {/* Center precise crystal dot */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full bg-gradient-to-r from-[#00d9ff] to-[#7c5cff] transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '7px',
          height: '7px',
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.6 : isHovered ? 1.6 : 1})`,
          boxShadow: '0 0 12px #00d9ff, 0 0 24px #7c5cff'
        }}
      />

      {/* Smooth glowing professional trailing ring */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[#00d9ff]/60 bg-[#00d9ff]/5 backdrop-blur-[0.5px] transition-all duration-100 ease-out"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '52px' : '38px',
          height: isHovered ? '52px' : '38px',
          transform: `translate(-50%, -50%) scale(${isMouseDown ? 0.8 : 1})`,
          boxShadow: isHovered ? '0 0 30px rgba(0, 217, 255, 0.45), inset 0 0 15px rgba(124, 92, 255, 0.3)' : '0 0 15px rgba(0, 217, 255, 0.25)'
        }}
      />
    </>
  );
}
