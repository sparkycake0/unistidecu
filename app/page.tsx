"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [firstClicked, setFirstClicked] = useState(false);
  const [start2, setStart2] = useState(false);
  const router = useRouter();
  firstClicked ? setTimeout(() => router.push("/tree"), 200) : {};
  return (
    <main className="w-full flex flex-col h-full items-center  z-1">
      <motion.button
        initial={{ y: "-100%" }}
        animate={start2 ? { y: 0 } : {}}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed w-3/5 h-3/5 rounded-b-full flex flex-col items-center justify-center pt-110 z-1 bg-linear-to-b from-indigo-400 to-indigo-950 shadow-2xl hover:scale-120 p-24 transition-all outline-none text-5xl"
      >
        Umetnost Programiranja
      </motion.button>
      <motion.div
        initial={{ y: "-100%" }}
        animate={
          firstClicked
            ? { scale: 20, backgroundColor: ["#7c86ff", "#14162E"] }
            : { y: 0 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        onAnimationComplete={() => setStart2(true)}
        onClick={() => setFirstClicked(true)}
        className="fixed cursor-pointer w-[40%] h-[40%] rounded-b-full flex flex-col items-center justify-center pb-20 text-7xl font-bold z-2 bg-indigo-400 shadow-2xl hover:scale-120 transition-all outline-none"
      >
        CodeVision
      </motion.div>
    </main>
  );
}
