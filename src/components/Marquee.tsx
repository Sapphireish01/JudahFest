"use client";

import React from "react";
import { clsx } from "clsx";

interface MarqueeProps {
  text: string;
  variant?: "dark" | "gold" | "ember";
  speed?: "slow" | "normal" | "fast";
  duration?: number; // optional custom animation duration in seconds
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  text,
  variant = "dark",
  speed = "normal",
  duration,
  className,
}) => {
  const variantStyles = {
    dark: "bg-ink text-paper border-y-4 border-paper/20",
    gold: "bg-tertiary-gold text-ink border-y-4 border-ink",
    ember: "bg-secondary text-white border-y-4 border-ink",
  };

  const speedStyles = {
    slow: "animate-marquee [animation-duration:35s]",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  };

  const repeatedItems = Array(10).fill(text);

  return (
    <div
      className={clsx(
        "relative overflow-hidden py-3 font-headline text-3xl md:text-5xl tracking-widest uppercase select-none neo-shadow",
        variantStyles[variant],
        className
      )}
    >
      <div 
        className={clsx("whitespace-nowrap flex gap-8", speedStyles[speed])}
        style={duration ? { animationDuration: `${duration}s` } : undefined}
      >
        {repeatedItems.map((item, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span>{item}</span>
            <img src="/images/JUDAH-PNG.png" alt="JUDAH FEST Emblem" className="w-8 h-8 object-contain inline-block shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};
