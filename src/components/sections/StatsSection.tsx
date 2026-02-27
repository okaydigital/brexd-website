"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import CountUp from "@/components/animations/CountUp";

const stats = [
  { value: 28, suffix: "+", label: "anos de mercado" },
  { value: 500, suffix: "+", label: "projetos entregues" },
  { value: 18, suffix: "", label: "países atendidos" },
  { value: 350, suffix: "+", label: "colaboradores" },
];

export default function StatsSection() {
  return (
    <section className="bg-brand-green">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <div className="py-8 md:py-10 flex flex-wrap items-center justify-between gap-y-6">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} direction="up">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl md:text-4xl font-black text-white">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-white/70">{stat.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
