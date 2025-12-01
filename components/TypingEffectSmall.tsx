"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

export function TypingEffectSmall({
  text = "Typing Effect",
}: {
  text: string;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h2 ref={ref} className="tracking-tighter leading-10 text-2xl">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0, delay: index * 0.02 }}
        >
          {letter}
        </motion.span>
      ))}
    </h2>
  );
}
