"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  HardHat,
  Lock,
  Building2,
  Award,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const certifications = [
  {
    key: "iso9001",
    icon: ShieldCheck,
    color: "#0D2137",
  },
  {
    key: "iso14001",
    icon: Leaf,
    color: "#2E8B57",
  },
  {
    key: "iso45001",
    icon: HardHat,
    color: "#E8B624",
  },
  {
    key: "iso27001",
    icon: Lock,
    color: "#1E56A0",
  },
  {
    key: "leed",
    icon: Building2,
    color: "#1B7A3D",
  },
  {
    key: "gptw",
    icon: Award,
    color: "#E8B624",
  },
];

export default function Certifications() {
  const t = useTranslations("about");

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-brand-navy">
              {t("certifications_title")}
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              {t("certifications_subtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <ScrollReveal key={cert.key} delay={i * 0.08} direction="up">
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center"
                >
                  {/* Color accent bar */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: cert.color }}
                  />

                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: cert.color + "12" }}
                  >
                    <Icon
                      className="w-8 h-8"
                      style={{ color: cert.color }}
                    />
                  </div>

                  <h4 className="text-sm font-bold text-brand-navy">
                    {t(`certifications.${cert.key}.name`)}
                  </h4>
                  <p className="mt-1 text-xs text-gray-400">
                    {t(`certifications.${cert.key}.label`)}
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
