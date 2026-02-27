"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Building2, Users, Clock } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const offices = [
  {
    key: "sp",
    icon: "🇧🇷",
    color: "#E8B624",
    team: "180+",
    timezone: "GMT-3",
    founded: "1997",
  },
  {
    key: "miami",
    icon: "🇺🇸",
    color: "#1B7A3D",
    team: "85+",
    timezone: "GMT-5",
    founded: "2007",
  },
  {
    key: "shanghai",
    icon: "🇨🇳",
    color: "#1E56A0",
    team: "85+",
    timezone: "GMT+8",
    founded: "2013",
  },
];

export default function AboutOffices() {
  const t = useTranslations("about");

  return (
    <section className="py-20 md:py-28 bg-brand-navy overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              {t("offices_title")}
            </h2>
            <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
              {t("offices_subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office, i) => (
            <ScrollReveal key={office.key} delay={i * 0.15} direction="up">
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Color accent */}
                <div
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-1.5"
                  style={{ backgroundColor: office.color }}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: office.color + "15" }}
                  >
                    {office.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {t(`offices.${office.key}.city`)}
                    </h4>
                    <p className="text-sm text-white/40">
                      {t(`offices.${office.key}.country`)}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <p className="text-sm font-medium mb-3" style={{ color: office.color }}>
                  {t(`offices.${office.key}.role`)}
                </p>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {t(`offices.${office.key}.description`)}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-xs text-white/40">{office.team}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-xs text-white/40">{office.timezone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-xs text-white/40">{t("offices_since")} {office.founded}</span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
