"use client";

import { useState, useEffect, useCallback } from "react";

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
  const [phase, setPhase] = useState<"visible" | "exiting" | "entering">("visible");

  const rotate = useCallback(() => {
    setPhase("exiting");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
      setPhase("entering");
    }, 500);
    setTimeout(() => {
      setPhase("visible");
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotate, 5000);
    return () => clearInterval(interval);
  }, [rotate]);

  const phrase = PHRASES[currentIndex];

  return (
    <span className="rotating-hero-container">
      <span className={`rotating-hero-phrase rotating-hero-${phase}`}>
        <span className="rotating-hero-emoji">{phrase.emoji}</span>
        {phrase.text}
      </span>
    </span>
  );
}
