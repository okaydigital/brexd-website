"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Shield, Star, Lightbulb, Leaf, Globe, Target, Eye } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const values = [
  { key: "integrity", icon: Shield, color: "#0D2137" },
  { key: "excellence", icon: Star, color: "#E8B624" },
  { key: "innovation", icon: Lightbulb, color: "#1E56A0" },
  { key: "sustainability", icon: Leaf, color: "#2E8B57" },
  { key: "global", icon: Globe, color: "#1B7A3D" },
];

export default function MissionVisionValues() {
  const t = useTranslations("about");

  return (
    <section className="py-20 md:py-28 bg-brand-navy overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {/* Mission */}
          <ScrollReveal direction="left">
            <motion.div
              whileHover={{ y: -2 }}
              className="relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/30 transition-all duration-300 h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-brand-gold to-brand-gold/50" />
              <div className="w-14 h-14 rounded-xl bg-brand-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-brand-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                {t("mission_title")}
              </h3>
              <p className="text-white/50 leading-relaxed text-base md:text-lg">
                {t("mission_text")}
              </p>
            </motion.div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="right">
            <motion.div
              whileHover={{ y: -2 }}
              className="relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/10 hover:border-seg-technology/30 transition-all duration-300 h-full"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-seg-technology to-seg-technology/50" />
              <div className="w-14 h-14 rounded-xl bg-seg-technology/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-seg-technology" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                {t("vision_title")}
              </h3>
              <p className="text-white/50 leading-relaxed text-base md:text-lg">
                {t("vision_text")}
              </p>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              {t("values_title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <ScrollReveal key={value.key} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: value.color + "20" }}
                  >
                    <Icon className="w-7 h-7" style={{ color: value.color }} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {t(`values.${value.key}.title`)}
                  </h4>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {t(`values.${value.key}.text`)}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
