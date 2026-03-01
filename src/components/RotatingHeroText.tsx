"use client";

import { useState, useEffect, useRef } from "react";

const PHRASES = [
  "Running Your Business",
  "Shipping Code",
  "Closing Deals",
  "Creating Content",
  "Analyzing Data",
  "Managing Projects",
  "Processing Payments",
  "Monitoring Systems",
];

export default function RotatingHeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    // Skip animation on first render
    mounted.current = true;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      const next = (prev: number) => (prev + 1) % PHRASES.length;
      
      // After exit animation, swap text
      setTimeout(() => {
        setCurrentIndex((prev) => {
          const n = next(prev);
          setNextIndex(null);
          return n;
        });
        // After swap, enter
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`hero-rotating-word ${isTransitioning ? "hero-rotating-out" : "hero-rotating-in"}`}
    >
      {PHRASES[currentIndex]}
    </span>
  );
}
