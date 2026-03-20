"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Avoid hydration mismatch by not rendering until mounted
  if (!isMounted) return null;

  return (
    <div className="my-2 flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hours", value: timeLeft.hours },
        { label: "Mins", value: timeLeft.minutes },
        { label: "Secs", value: timeLeft.seconds },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-navy-light/60 border border-cyan-400/20 shadow-lg shadow-cyan-900/20 backdrop-blur-md transition-all hover:border-cyan-400/40">
            <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-300">
              {item.value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="mt-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
