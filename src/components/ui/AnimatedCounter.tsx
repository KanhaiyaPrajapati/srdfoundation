"use client";

import { useCounter } from "@/hooks/useCounter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCounter(value, 2000, isVisible);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm md:text-base">{label}</div>
    </div>
  );
}
