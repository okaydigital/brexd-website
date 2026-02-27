"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const segments = [
  {
    title: "Exportação",
    desc: "Gestão completa de operações de exportação com foco em containers. Coordenamos embarques de mercadorias brasileiras para mais de 18 países, com despacho aduaneiro, consolidação de cargas e rastreamento porta a porta.",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=900&q=80",
    href: "/segments/export" as const,
    stat: "8.200+",
    statLabel: "containers/ano",
    highlights: ["Despacho aduaneiro completo", "18 países de destino", "Rastreamento em tempo real"],
    color: "#0D2137",
  },
  {
    title: "Importação",
    desc: "Importação estratégica de insumos industriais, maquinário e bens de consumo via containers dos principais hubs da China, Europa e América do Norte, com nacionalização e entrega no destino final.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80",
    href: "/segments/import" as const,
    stat: "4.100+",
    statLabel: "containers/ano",
    highlights: ["Sourcing internacional", "Nacionalização completa", "Entrega porta a porta"],
    color: "#1B7A3D",
  },
  {
    title: "Engenharia",
    desc: "Produção e fornecimento de insumos asfálticos para obras rodoviárias, além de locação e operação de máquinas pesadas — escavadeiras, motoniveladoras, rolos compactadores — para grandes projetos de infraestrutura.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=900&q=80",
    href: "/segments/engineering" as const,
    stat: "2.400 km",
    statLabel: "de rodovias atendidas",
    highlights: ["Insumos asfálticos", "Máquinas pesadas", "Obras rodoviárias"],
    color: "#E8B624",
  },
  {
    title: "Agronegócio",
    desc: "Atuação integrada na cadeia do agro: produção e distribuição de fertilizantes para grandes lavouras e operação de frigoríficos de aves com capacidade de abate e processamento para exportação.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80",
    href: "/segments/agribusiness" as const,
    stat: "860k ton",
    statLabel: "fertilizantes + proteína",
    highlights: ["Fertilizantes NPK", "Frigorífico de aves", "Exportação de proteína"],
    color: "#2E8B57",
  },
  {
    title: "Tecnologia",
    desc: "Fabricação, importação e distribuição de patinetes elétricos e scooters para o mercado latino-americano. Rede própria de assistência técnica e fornecimento de peças originais em todo o Brasil.",
    image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=900&q=80",
    href: "/segments/technology" as const,
    stat: "35k+",
    statLabel: "unidades distribuídas",
    highlights: ["Patinetes elétricos", "Scooters urbanos", "Assistência técnica"],
    color: "#1E56A0",
  },
];

const INTERVAL = 5500;

export default function SegmentsSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((i: number) => {
    setActive((prev) => (prev === i ? prev : i));
    setProgress(0);
  }, []);

  useEffect(() => {
    const step = 50;
    const tick = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActive((a) => (a + 1) % segments.length);
          return 0;
        }
        return prev + (step / INTERVAL) * 100;
      });
    }, step);
    return () => clearInterval(tick);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-brand-navy">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                Nossos Segmentos
              </span>
              <div className="h-px w-10 bg-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Cinco divisões, <span className="text-brand-gold">um objetivo</span> global
            </h2>
          </div>
        </ScrollReveal>

        {/* Vertical accordion */}
        <ScrollReveal>
          <div className="space-y-2">
            {segments.map((seg, i) => {
              const isActive = i === active;
              return (
                <div
                  key={seg.title}
                  className="rounded-xl overflow-hidden transition-shadow"
                >
                  {/* Header row - YELLOW when active */}
                  <button
                    onClick={() => goTo(i)}
                    className={`w-full flex items-center justify-between px-5 md:px-7 py-4 md:py-5 group relative transition-all ${
                      isActive
                        ? "bg-brand-gold"
                        : "bg-white/5 hover:bg-white/10 border border-white/10"
                    }`}
                    style={isActive ? {} : { borderRadius: "0.75rem" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        style={{
                          backgroundColor: isActive ? "#0D2137" : "rgba(255,255,255,0.1)",
                          color: isActive ? "#E8B624" : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {isActive ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`text-sm md:text-base font-bold transition-colors ${
                        isActive ? "text-brand-navy" : "text-white/60"
                      }`}>
                        {seg.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`text-lg md:text-xl font-black transition-colors ${
                        isActive ? "text-brand-navy" : "text-white/20"
                      }`}>
                        {seg.stat}
                      </span>
                      <span className={`hidden md:block text-[10px] uppercase tracking-wider transition-colors ${
                        isActive ? "text-brand-navy/60" : "text-white/20"
                      }`}>
                        {seg.statLabel}
                      </span>
                    </div>

                    {/* Progress in header */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-navy/15 overflow-hidden">
                        <div className="h-full bg-brand-navy transition-none" style={{ width: `${progress}%` }} />
                      </div>
                    )}
                  </button>

                  {/* Expandable content - WHITE bg */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-8 py-6 md:py-8 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                            {/* Image - 3 cols */}
                            <div className="md:col-span-3 relative aspect-[16/9] rounded-lg overflow-hidden">
                              <Image
                                src={seg.image}
                                alt={seg.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 60vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                              <div className="absolute bottom-4 left-4">
                                <span
                                  className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded text-white"
                                  style={{ backgroundColor: seg.color }}
                                >
                                  {seg.title}
                                </span>
                              </div>
                            </div>

                            {/* Text - 2 cols */}
                            <div className="md:col-span-2 flex flex-col justify-between">
                              <div>
                                <div className="flex items-baseline gap-2 mb-4">
                                  <span className="text-3xl font-black text-brand-navy">{seg.stat}</span>
                                  <span className="text-xs text-gray-400 uppercase tracking-wider">{seg.statLabel}</span>
                                </div>
                                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                                  {seg.desc}
                                </p>
                                <div className="space-y-2 mb-5">
                                  {seg.highlights.map((h) => (
                                    <div key={h} className="flex items-center gap-2">
                                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                                      <span className="text-xs font-semibold text-gray-500">{h}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              <Link
                                href={seg.href}
                                className="group inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-green transition-colors"
                              >
                                Saiba mais sobre {seg.title}
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
