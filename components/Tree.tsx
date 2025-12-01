"use client";
import { Type } from "@/libs/interfaces";
import { JSX } from "react";
import { TypingEffect } from "./TypingEffect";
import { TypingEffectSmall } from "./TypingEffectSmall";
import { TypingEffectSmaller } from "./TypingEffectSmaller";
import { motion } from "framer-motion";
export function Demand({ demand }: { demand: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: demand }).map((_, i) => (
        <div key={i} className="bg-white rounded-full w-3 h-3" />
      ))}
    </div>
  );
}
export function TreeComponent({
  title,
  typesArray,
}: {
  title: string;
  typesArray: Type[] | null;
}) {
  return (
    <div className="flex flex-col gap-1">
      {typesArray?.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            whileInView={{ opacity: 100, translateX: 0 }}
            key={item.title}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex  leading-10 bg-[#14162E] rounded-3xl p-2"
          >
            <div className="flex rounded-2xl bg-[#25294f] w-full">
              <div className="flex flex-col w-[30%]  p-5 rounded-xl">
                <div
                  className={` ${
                    item.difficuly === "lako"
                      ? "text-teal-400"
                      : item.difficuly === "onako"
                      ? "text-amber-300 font-semibold"
                      : "text-rose-600 font-bold"
                  } flex flex-row gap-5  items-center w-max justify-center`}
                >
                  <Icon size={45} />
                  <TypingEffect text={item.title}></TypingEffect>
                </div>
                <TypingEffectSmall text={item.desc}></TypingEffectSmall>
                <TypingEffectSmall
                  text={`Prosecna plata: ${item.avgSalary} RSD`}
                ></TypingEffectSmall>

                <div className="flex items-center gap-5">
                  <TypingEffectSmall text="Potraznja: "></TypingEffectSmall>
                  <Demand demand={item.demand ?? 0} />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    {item.langs.map((lang) => (
                      <h1
                        key={lang}
                        className="font-bold text-md w-max bg-indigo-900  px-4 rounded-full shadow-xl"
                      >
                        {lang}
                      </h1>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tools?.map((tool) => (
                      <h1
                        key={tool}
                        className="font-bold text-md w-max bg-violet-800  px-4 rounded-full shadow-xl"
                      >
                        {tool}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex w-[70%]">
                {item.subType?.map((subItem) => {
                  const Icon = subItem.icon;
                  return (
                    <div
                      key={subItem.title}
                      className="ml-1 text-indigo-300 rounded-xl p-5 flex flex-col justify-between bg-[#14162E] shadow-2xl m-5"
                    >
                      <div className={`flex gap-4 `}>
                        <Icon size={32} />
                        <TypingEffect text={subItem.title}></TypingEffect>
                      </div>
                      <TypingEffectSmaller
                        text={subItem.desc}
                      ></TypingEffectSmaller>

                      <TypingEffectSmaller
                        text={`Plata: ${subItem.avgSalary} RSD`}
                      ></TypingEffectSmaller>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-wrap gap-2">
                          {subItem.langs.map((lang) => (
                            <h1
                              key={lang}
                              className="font-bold text-md w-max bg-indigo-900  px-4 rounded-full shadow-xl"
                            >
                              {lang}
                            </h1>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {subItem.tools?.map((tool) => (
                            <h1
                              key={tool}
                              className="font-bold text-md w-max bg-violet-800  px-4 rounded-full shadow-xl"
                            >
                              {tool}
                            </h1>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
