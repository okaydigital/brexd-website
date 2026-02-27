"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/animations/ScrollReveal";

const milestones = [
  { year: "1997", key: "1997", color: "#E8B624" },
  { year: "2001", key: "2001", color: "#1B7A3D" },
  { year: "2004", key: "2004", color: "#1E56A0" },
  { year: "2007", key: "2007", color: "#0D2137" },
  { year: "2010", key: "2010", color: "#2E8B57" },
  { year: "2013", key: "2013", color: "#1B7A3D" },
  { year: "2016", key: "2016", color: "#1E56A0" },
  { year: "2018", key: "2018", color: "#E8B624" },
  { year: "2020", key: "2020", color: "#0D2137" },
  { year: "2022", key: "2022", color: "#2E8B57" },
  { year: "2024", key: "2024", color: "#1E56A0" },
  { year: "2025", key: "2025", color: "#E8B624" },
];

export default function Timeline() {
  const t = useTranslations("about");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy">
              {t("history_title")}
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-px" />

          <div className="space-y-8 md:space-y-12">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              const isActive = activeIndex === i;

              return (
                <ScrollReveal
                  key={milestone.year}
                  delay={i * 0.08}
                  direction={isLeft ? "left" : "right"}
                >
                  <div
                    className={`relative flex items-center ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content card */}
                    <div
                      className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                        isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                      }`}
                    >
                      <motion.div
                        whileHover={{ y: -2, scale: 1.01 }}
                        onClick={() => setActiveIndex(isActive ? null : i)}
                        className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                          isActive
                            ? "bg-white shadow-xl border-transparent"
                            : "bg-white/80 border-gray-100 hover:shadow-lg hover:border-transparent"
                        }`}
                      >
                        {/* Color accent */}
                        <div
                          className="absolute top-0 left-0 w-full h-1 rounded-t-2xl transition-all duration-300"
                          style={{ backgroundColor: milestone.color }}
                        />

                        <div
                          className={`flex items-center gap-3 ${
                            isLeft ? "md:justify-end" : "md:justify-start"
                          }`}
                        >
                          <span
                            className="text-2xl md:text-3xl font-black"
                            style={{ color: milestone.color }}
                          >
                            {milestone.year}
                          </span>
                        </div>

                        <p className="mt-2 text-sm md:text-base text-gray-600 leading-relaxed">
                          {t(`timeline.${milestone.key}`)}
                        </p>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 leading-relaxed">
                                {t(`timeline.${milestone.key}_detail`)}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                      <motion.button
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setActiveIndex(isActive ? null : i)}
                        className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] border-white shadow-md transition-all duration-300 ${
                          isActive ? "ring-4 ring-opacity-20" : ""
                        }`}
                        style={{
                          backgroundColor: milestone.color,
                          ...(isActive ? { ringColor: milestone.color } : {}),
                        }}
                        aria-label={`Ver marco de ${milestone.year}`}
                      />
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
