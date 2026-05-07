"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    // Dynamically match canvas size to parent container
    const resize = () => {
      if (!canvasRef.current) return;
      const { offsetWidth } = canvasRef.current.parentElement || {
        offsetWidth: 400,
      };
      const size = Math.min(offsetWidth, 600); // cap at 600px
      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: size * 2,
        height: size * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });

      return globe;
    };

    let globe = resize();

    // Handle resize events
    const handleResize = () => {
      if (globe) globe.destroy();
      globe = resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (globe) globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-auto max-w-[600px] aspect-square ${className}`}
    />
  );
};