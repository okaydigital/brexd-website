"use client";

import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const statsData = [
  { value: 28, suffix: "+", key: "0" },
  { value: 500, suffix: "+", key: "1" },
  { value: 18, suffix: "", key: "2" },
  { value: 350, suffix: "+", key: "3" },
];

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="bg-brand-green">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <div className="py-8 md:py-10 flex flex-wrap items-center justify-between gap-y-6">
          {statsData.map((stat, i) => (
            <ScrollReveal key={stat.key} delay={i * 0.08} direction="up">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-black text-white">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-white/70">{t(`items.${stat.key}.label`)}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
