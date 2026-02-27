"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function AboutIntroSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80"
                  alt="Executivo BREXD"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Green accent bar */}
              <div className="absolute top-0 left-0 w-1.5 h-24 bg-brand-green rounded-r" />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-brand-green text-white p-5 rounded-lg shadow-xl max-w-[200px]">
                <p className="text-3xl font-black">1997</p>
                <p className="text-xs text-white/80 mt-1 leading-relaxed">
                  Fundada em São Paulo com visão global
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-brand-green" />
                <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
                  Quem Somos
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
                Uma empresa brasileira com{" "}
                <span className="text-brand-green">alcance global</span>
              </h2>

              <p className="mt-6 text-gray-500 leading-relaxed">
                A BREXD nasceu da visão de integrar o potencial produtivo brasileiro
                aos maiores mercados do mundo. Com escritórios em São Paulo, Miami e
                Shanghai, atuamos como ponte estratégica entre três continentes.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Soluções integradas em 5 segmentos de atuação",
                  "Compliance rigoroso em todas as operações",
                  "Parceiros em 18 países nos 3 continentes",
                  "Certificações ISO 9001, ISO 14001 e GPTW",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-brand-green mt-0.5 shrink-0" />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 mt-8 px-5 py-2.5 border-2 border-brand-green text-brand-green text-sm font-bold rounded hover:bg-brand-green hover:text-white transition-all"
              >
                Conheça nossa história
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
