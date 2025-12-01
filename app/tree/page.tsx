"use client";
import { motion } from "framer-motion";
import { types } from "@/libs/tree";
import { TreeComponent } from "@/components/Tree";
import { Demand } from "@/components/Tree";
import { useState } from "react";

export default function Tree() {
  const [start2, setStart2] = useState(false);
  return (
    <div className="w-full h-full flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: "-100%", scale: 0 }}
        animate={{ opacity: 100, y: [-100, 0, 0], scale: 1 }}
        transition={{ duration: 1.2, ease: "circInOut" }}
        onAnimationComplete={() => setStart2(true)}
        className="text-center text-6xl font-bold my-12"
      >
        Stablo programerskih poslova
      </motion.h1>
      <div className="w-full flex flex-col items-center h-screen gap-10">
        {types.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={start2 ? { opacity: 100, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              key={item.title}
              className="shadow-xl w-[95vw] text-xl flex flex-col justify-between min-h-[90%] p-7 bg-[#33386b] rounded-4xl"
            >
              <h1
                className={` ${
                  item.difficuly === "lako"
                    ? "text-teal-400"
                    : item.difficuly === "onako"
                    ? "text-amber-300 font-semibold"
                    : "text-rose-600 font-bold"
                } text-4xl text-center text-shadow-lg mb-5 flex gap-3 items-center justify-center`}
              >
                <Icon size={48} />
                {item.title}
              </h1>

              <div className="flex flex-col h-full justify-between overflow-auto gap-5">
                <div className="flex gap-10 flex-col items-center">
                  <div className="flex gap-10 w-full">
                    <div className="gap-5 p-5 flex w-[20%] h-full flex-col text-2xl font-bold bg-[#14162E] shadow-2xl items-center justify-center rounded-xl">
                      <h1>Prosecna plata:</h1>
                      <h1>{item.avgSalary} RSD</h1>
                    </div>

                    <div className="w-[20%] gap-5 p-5 bg-[#14162E] h-full text-2xl font-bold shadow-2xl flex flex-col items-center justify-center rounded-xl">
                      <h1>Potraznja:</h1>
                      <Demand demand={item.demand ?? 0} />
                    </div>

                    <div className="w-[40%] gap-4 p-4 bg-[#14162E] shadow-2xl text-2xl font-bold flex h-full flex-col items-center justify-center rounded-xl">
                      <h1>Alati za programiranje:</h1>
                      <div className="flex flex-wrap gap-2 ">
                        {item.tools?.map((tool) => (
                          <h1
                            key={tool}
                            className="font-bold text-md w-max bg-indigo-950 p-2 px-4 rounded-full shadow-xl"
                          >
                            {tool}
                          </h1>
                        ))}
                      </div>
                    </div>

                    <div className="w-[20%] gap-4 p-4 bg-[#14162E] text-2xl font-bold shadow-2xl flex h-full flex-col items-center justify-center rounded-xl">
                      <h1>Jezici struke:</h1>
                      <div className="flex flex-wrap gap-2">
                        {item.langs.map((lang) => {
                          return (
                            <h1
                              key={lang}
                              className="bg-indigo-950 p-2 px-5 rounded-full"
                            >
                              {lang}
                            </h1>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <h1 className="leading-12 text-3xl italic font-light w-full pl-12">
                    ``{item.desc}``
                  </h1>
                </div>

                <div className="overflow-auto p-2 rounded-[30px] bg-[#14162E] ">
                  <TreeComponent
                    title={item.title}
                    typesArray={item.subType ?? null}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
