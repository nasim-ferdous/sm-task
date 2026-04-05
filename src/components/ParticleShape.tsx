"use client";

import React, { useRef, useEffect } from "react";

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = 1.2;
    this.density = Math.random() * 30 + 5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#ffcc00"; // Golden dots from your image
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }

  update(mouse: { x: number | null; y: number | null; radius: number }) {
    if (mouse.x === null || mouse.y === null) {
      // Return to base position
      this.x += (this.baseX - this.x) * 0.1;
      this.y += (this.baseY - this.y) * 0.1;
      return;
    }

    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = mouse.radius;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      // Smooth return
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 15;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 15;
      }
    }
  }
}

export default function ParticleShape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 600;

    let particlesArray: Particle[] = [];
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100,
    };

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });

    // Create the shape (Approximate the curved "B" shape from your images)
    const init = () => {
      particlesArray = [];
      // Generate points in a stylized double-curve shape
      for (let y = 0; y < 400; y += 4) {
        for (let x = 0; x < 400; x += 4) {
          // Mathematical formula to define the "wing" or curved shape
          const curve1 = Math.sin(y * 0.02) * 100 + 200;
          const curve2 = Math.cos(y * 0.01) * 50 + 250;

          if (
            (x > curve1 && x < curve1 + 80) ||
            (y > 200 && x > curve2 && x < curve2 + 100)
          ) {
            particlesArray.push(new Particle(x + 100, y + 100));
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => {
        p.update(mouse);
        p.draw(ctx);
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => window.removeEventListener("mousemove", () => {});
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full max-w-[500px] object-contain pointer-events-auto"
    />
  );
}
