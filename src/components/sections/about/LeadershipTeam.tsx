"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { ChevronDown, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const leaders = [
  {
    key: "ricardo",
    initials: "RB",
    color: "#E8B624",
  },
  {
    key: "catherine",
    initials: "CM",
    color: "#1B7A3D",
  },
  {
    key: "wei",
    initials: "WZ",
    color: "#1E56A0",
  },
  {
    key: "ana",
    initials: "AF",
    color: "#2E8B57",
  },
  {
    key: "marcus",
    initials: "MT",
    color: "#0D2137",
  },
  {
    key: "juliana",
    initials: "JS",
    color: "#1E56A0",
  },
  {
    key: "diego",
    initials: "DR",
    color: "#E8B624",
  },
  {
    key: "luciana",
    initials: "LM",
    color: "#1B7A3D",
  },
];

export default function LeadershipTeam() {
  const t = useTranslations("about");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy">
              {t("team_title")}
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              {t("team_subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => {
            const isExpanded = expanded === leader.key;

            return (
              <ScrollReveal key={leader.key} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  layout
                  className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Color accent bar */}
                  <div
                    className="h-1.5 w-full"
                    style={{ backgroundColor: leader.color }}
                  />

                  <div className="p-6">
                    {/* Avatar */}
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: leader.color + "15" }}
                    >
                      <span
                        className="text-xl font-black"
                        style={{ color: leader.color }}
                      >
                        {leader.initials}
                      </span>
                    </div>

                    {/* Name & Title */}
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-brand-navy">
                        {t(`team.${leader.key}.name`)}
                      </h4>
                      <p
                        className="text-sm font-medium mt-1"
                        style={{ color: leader.color }}
                      >
                        {t(`team.${leader.key}.title`)}
                      </p>
                    </div>

                    {/* Bio toggle */}
                    <button
                      onClick={() =>
                        setExpanded(isExpanded ? null : leader.key)
                      }
                      className="mt-4 w-full flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={isExpanded ? "Hide bio" : "Show bio"}
                    >
                      <span>{isExpanded ? "Menos" : "Mais"}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500 leading-relaxed text-center">
                            {t(`team.${leader.key}.bio`)}
                          </p>
                          <div className="flex justify-center mt-3">
                            <a
                              href="#"
                              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                              aria-label="LinkedIn profile"
                            >
                              <Linkedin
                                className="w-4 h-4"
                                style={{ color: leader.color }}
                              />
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
