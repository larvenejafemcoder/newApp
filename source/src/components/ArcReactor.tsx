import { useEffect, useRef } from 'react';

export default function ArcReactor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let rotation = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const drawArcReactor = () => {
      const centerX = canvas.width / (2 * (window.devicePixelRatio || 1));
      const centerY = canvas.height / (2 * (window.devicePixelRatio || 1));
      const size = Math.min(centerX, centerY) * 0.9;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Outer glow
      const outerGlow = ctx.createRadialGradient(centerX, centerY, size * 0.3, centerX, centerY, size * 1.5);
      outerGlow.addColorStop(0, 'rgba(0, 200, 255, 0.4)');
      outerGlow.addColorStop(0.3, 'rgba(0, 150, 255, 0.2)');
      outerGlow.addColorStop(0.6, 'rgba(0, 100, 255, 0.1)');
      outerGlow.addColorStop(1, 'rgba(0, 50, 255, 0)');
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Outer ring segments (rotating)
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      const numSegments = 10;
      for (let i = 0; i < numSegments; i++) {
        const angle = (i / numSegments) * Math.PI * 2;
        ctx.save();
        ctx.rotate(angle);
        
        // Segment glow
        const segmentGradient = ctx.createLinearGradient(0, -size * 0.85, 0, -size * 0.65);
        segmentGradient.addColorStop(0, 'rgba(0, 200, 255, 0.9)');
        segmentGradient.addColorStop(0.5, 'rgba(100, 220, 255, 1)');
        segmentGradient.addColorStop(1, 'rgba(0, 200, 255, 0.9)');
        
        ctx.fillStyle = segmentGradient;
        ctx.beginPath();
        ctx.roundRect(-size * 0.06, -size * 0.85, size * 0.12, size * 0.2, 4);
        ctx.fill();
        
        ctx.restore();
      }
      ctx.restore();

      // Middle ring (static)
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.6, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.6)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Inner ring with glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.5, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 220, 255, 0.8)';
      ctx.lineWidth = 3;
      ctx.shadowColor = 'rgba(0, 200, 255, 1)';
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Inner triangular segments
      ctx.save();
      ctx.translate(centerX, centerY);
      const numTriangles = 3;
      for (let i = 0; i < numTriangles; i++) {
        const angle = (i / numTriangles) * Math.PI * 2 + rotation * 0.5;
        ctx.save();
        ctx.rotate(angle);
        
        ctx.fillStyle = 'rgba(0, 200, 255, 0.7)';
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.35);
        ctx.lineTo(-size * 0.08, -size * 0.15);
        ctx.lineTo(size * 0.08, -size * 0.15);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
      }
      ctx.restore();

      // Center core - brightest part
      const coreGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size * 0.2);
      coreGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      coreGradient.addColorStop(0.2, 'rgba(200, 240, 255, 1)');
      coreGradient.addColorStop(0.4, 'rgba(0, 200, 255, 0.9)');
      coreGradient.addColorStop(0.7, 'rgba(0, 150, 255, 0.5)');
      coreGradient.addColorStop(1, 'rgba(0, 100, 255, 0)');
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Innermost bright core
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.08, 0, Math.PI * 2);
      ctx.fill();

      // Pulsing ring effect
      const pulseScale = 1 + Math.sin(Date.now() / 500) * 0.05;
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.45 * pulseScale, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 200, 255, ${0.3 + Math.sin(Date.now() / 500) * 0.2})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      rotation += 0.005;
      animationId = requestAnimationFrame(drawArcReactor);
    };

    drawArcReactor();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
      {/* Glow effect behind */}
      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      
      {/* Canvas for the arc reactor */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full"
        style={{ filter: 'drop-shadow(0 0 30px rgba(0, 200, 255, 0.5))' }}
      />
      
      {/* Additional glow layers */}
      <div className="absolute inset-4 rounded-full bg-gradient-radial from-cyan-300/30 via-cyan-500/10 to-transparent blur-xl" />
    </div>
  );
}
