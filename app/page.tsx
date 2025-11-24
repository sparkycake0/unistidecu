"use client";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <main>
      <div className="w-full h-screen flex justify-center text-3xl">
        <motion.h1
          initial={{ y: "-100%", opacity: 0, scale: 0.2 }}
          animate={{ y: [0, 100, 100], opacity: 100, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Zrdavo deco
        </motion.h1>
      </div>
    </main>
  );
}
