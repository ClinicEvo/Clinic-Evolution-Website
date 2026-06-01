"use client";

import { useRef, useState } from "react";
import { ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function TiltCard({ children, className, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState("");
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -7;
    const tiltY = (x - 0.5) * 7;
    setTiltStyle(`perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(6px)`);
    setGlare({ x: x * 100, y: y * 100, opacity: 0.09 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => {
        setActive(false);
        setTiltStyle("");
        setGlare((g) => ({ ...g, opacity: 0 }));
      }}
      className={className}
      style={{
        ...style,
        transform: tiltStyle || undefined,
        transition: active ? "transform 0.12s ease, box-shadow 0.2s ease" : "transform 0.5s ease, box-shadow 0.3s ease",
        willChange: "transform",
        position: "relative",
      }}
    >
      {/* Spotlight glare that follows the cursor */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}) 0%, transparent 60%)`,
          pointerEvents: "none",
          transition: active ? "opacity 0.1s ease" : "opacity 0.4s ease",
          zIndex: 1,
        }}
      />
      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
