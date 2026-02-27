"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/animations/ScrollReveal";

const projectsMeta = [
  {
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=900&q=80",
    color: "#0D2137",
  },
  {
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=900&q=80",
    color: "#E8B624",
  },
  {
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900&q=80",
    color: "#2E8B57",
  },
  {
    image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?w=900&q=80",
    color: "#2E8B57",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=900&q=80",
    color: "#1E56A0",
  },
];

const INTERVAL = 6000;

export default function ProjectsShowcase() {
  const t = useTranslations("homeProjects");
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((i: number) => {
    setCurrent(i);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % projectsMeta.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + projectsMeta.length) % projectsMeta.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const step = 50;
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setCurrent((c) => (c + 1) % projectsMeta.length);
          return 0;
        }
        return p + (step / INTERVAL) * 100;
      });
    }, step);
    return () => clearInterval(tick);
  }, []);

  const proj = projectsMeta[current];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                {t("tag")}
              </span>
              <div className="h-px w-10 bg-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              {t("title")} <span className="text-brand-gold">{t("titleHighlight")}</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-lg bg-white border border-gray-100">
            {/* Image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={proj.image}
                    alt={t(`items.${current}.title`)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded text-white"
                  style={{ backgroundColor: proj.color }}
                >
                  {t(`items.${current}.segment`)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-xl md:text-2xl font-black text-brand-navy leading-tight">
                    {t(`items.${current}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{t(`items.${current}.desc`)}</p>
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[0, 1, 2].map((s) => (
                      <div key={s} className="border-l-2 border-brand-gold/30 pl-3">
                        <p className="text-lg font-black text-brand-navy">{t(`items.${current}.stats.${s}.value`)}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider">{t(`items.${current}.stats.${s}.label`)}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 mt-6 text-sm font-bold text-brand-green hover:text-brand-green-light transition-colors"
                  >
                    {t("viewAllCta")}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* Nav */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <button onClick={prev} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-navy hover:border-brand-navy transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5 flex-1">
                  {projectsMeta.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className="relative h-1 rounded-full overflow-hidden flex-1"
                      style={{ backgroundColor: "#e5e7eb" }}
                    >
                      {i === current && (
                        <div className="absolute inset-y-0 left-0 bg-brand-navy rounded-full" style={{ width: `${progress}%` }} />
                      )}
                      {i < current && <div className="absolute inset-0 bg-brand-navy rounded-full" />}
                    </button>
                  ))}
                </div>
                <button onClick={next} className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-brand-navy hover:border-brand-navy transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
