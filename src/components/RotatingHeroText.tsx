"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  { text: "Running Your Business", emoji: "🚀" },
  { text: "Shipping Code", emoji: "⚡" },
  { text: "Closing Deals", emoji: "💰" },
  { text: "Creating Content", emoji: "✍️" },
  { text: "Analyzing Data", emoji: "📊" },
  { text: "Managing Projects", emoji: "📋" },
  { text: "Processing Payments", emoji: "💳" },
  { text: "Monitoring Systems", emoji: "🔍" },
];

export default function RotatingHeroText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
        requestAnimationFrame(() => {
          setIsTransitioning(false);
        });
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const phrase = PHRASES[currentIndex];

  return (
    <span className={`hero-rotating-word ${isTransitioning ? "hero-rotating-out" : "hero-rotating-in"}`}>
      <span className="hero-rotating-emoji">{phrase.emoji}</span> {phrase.text}
    </span>
  );
}
