"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
}

export default function StatCounter({ value, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/[\d.]+/);
  const numericTarget = numericMatch ? parseFloat(numericMatch[0]) : null;
  const suffix = numericMatch ? value.replace(numericMatch[0], "") : "";

  useEffect(() => {
    if (!isInView || numericTarget === null) {
      if (isInView) setDisplay(value);
      return;
    }
    let frame: number;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericTarget);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-2 border-l border-surface-hairline pl-5 md:pl-6"
    >
      <span className="font-display text-4xl md:text-5xl font-extrabold tabular-nums">
        {display}
      </span>
      <span className="font-label uppercase tracking-widest2 text-xs text-bone-muted">
        {label}
      </span>
    </motion.div>
  );
}
