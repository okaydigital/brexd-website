"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/components/animations/ScrollReveal";

const tabKeys = ["trade", "engineering", "agribusiness", "technology"] as const;

const postImages: Record<string, string[]> = {
  trade: [
    "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
    "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=600&q=80",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  ],
  engineering: [
    "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&q=80",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
    "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=600&q=80",
    "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80",
  ],
  agribusiness: [
    "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
    "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80",
    "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
  ],
  technology: [
    "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&q=80",
    "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&q=80",
    "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  ],
};

export default function BlogSection() {
  const t = useTranslations("homeBlog");
  const [activeTab, setActiveTab] = useState<string>("trade");

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-green" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
                {t("tag")}
              </span>
              <div className="h-px w-10 bg-brand-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              {t("title")} <span className="text-brand-gold">{t("titleHighlight")}</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === key
                    ? "bg-brand-navy text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {t(`tabs.${key}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[0, 1, 2, 3].map((i) => (
              <Link href="/blog" key={i} className="group block">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={postImages[activeTab][i]}
                      alt={t(`posts.${activeTab}.${i}.title`)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                      <span>{t(`posts.${activeTab}.${i}.date`)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {t(`posts.${activeTab}.${i}.read`)}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy leading-snug group-hover:text-brand-green transition-colors flex-1">
                      {t(`posts.${activeTab}.${i}.title`)}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                      {t(`posts.${activeTab}.${i}.excerpt`)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green transition-colors"
          >
            {t("viewAllCta")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
