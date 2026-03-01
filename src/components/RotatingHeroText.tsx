"use client";

import { useState, useEffect, useCallback } from "react";

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
  const [isAnimating, setIsAnimating] = useState(false);

  const rotate = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
      setIsAnimating(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotate, 5000);
    return () => clearInterval(interval);
  }, [rotate]);

  return (
    <span className="rotating-hero-wrapper">
      <span
        className={`rotating-hero-text ${isAnimating ? "rotating-hero-exit" : "rotating-hero-enter"}`}
        key={currentIndex}
      >
        {PHRASES[currentIndex]}
      </span>
    </span>
  );
}
