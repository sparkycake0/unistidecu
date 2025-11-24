"use client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function Home() {
  const [start2, setStart2] = useState(false);
  return (
    <main>
      <div className="w-full h-screen flex flex-col items-center gap-10">
        <motion.h1
          initial={{ y: "-100%", opacity: 0, scale: 0.2 }}
          animate={{ y: [0, 100, 100], opacity: 100, scale: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => setStart2(true)}
          className="text-4xl"
        >
          Uvod u IT
        </motion.h1>
        <motion.h1
          initial={{ y: 200, opacity: 0, scale: 0.2 }}
          animate={
            start2
              ? {
                  y: [200, 100, 100],
                  opacity: 100,
                  scale: 1,
                }
              : {}
          }
          transition={{ duration: 1 }}
          className="text-2xl"
        >
          Dobro dosli u
        </motion.h1>
        <motion.h1
          initial={{ y: 200, opacity: 0, scale: 0.2 }}
          animate={
            start2
              ? {
                  y: [200, 100, 100],
                  opacity: 100,
                  scale: 1,
                }
              : {}
          }
          transition={{ duration: 1 }}
          className="text-2xl"
        >
          Avanturu
        </motion.h1>
      </div>
    </main>
  );
}
