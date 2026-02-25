"use client";
import { useEffect, useState } from "react";

const words = ["Remember", "Learn", "Compound", "Operate", "Scale"];

export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent transition-all duration-400 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
    >
      {words[index]}
    </span>
  );
}
