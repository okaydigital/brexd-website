"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Ship, Package, HardHat, Wheat, Cpu, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const segments = [
  {
    key: "export",
    title: "Exportação",
    icon: Ship,
    color: "#0D2137",
    href: "/segments/export" as const,
    desc: "Conectando a excelência brasileira a mais de 18 países através de comércio confiável de commodities e produtos manufaturados.",
    stats: "US$ 1,8B em volume anual",
  },
  {
    key: "import",
    title: "Importação",
    icon: Package,
    color: "#1B7A3D",
    href: "/segments/import" as const,
    desc: "Sourcing global de máquinas, tecnologia e matérias-primas com acesso direto aos principais hubs de manufatura do mundo.",
    stats: "US$ 1,1B em volume anual",
  },
  {
    key: "engineering",
    title: "Engenharia",
    icon: HardHat,
    color: "#E8B624",
    href: "/segments/engineering" as const,
    desc: "Projetos de construção e infraestrutura de classe mundial com mais de 120 entregas bem-sucedidas.",
    stats: "US$ 2,1B em valor total",
  },
  {
    key: "agribusiness",
    title: "Agronegócio",
    icon: Wheat,
    color: "#2E8B57",
    href: "/segments/agribusiness" as const,
    desc: "1,2 milhão de toneladas de commodities negociadas anualmente, conectando produtores aos mercados globais.",
    stats: "1,2M ton/ano",
  },
  {
    key: "technology",
    title: "Tecnologia",
    icon: Cpu,
    color: "#1E56A0",
    href: "/segments/technology" as const,
    desc: "Soluções digitais inteligentes com IoT, IA e plataformas personalizadas para indústrias modernas.",
    stats: "50+ sistemas implantados",
  },
];

export default function SegmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-seg-technology/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-sm text-white/70">Nossos Segmentos de Negócio</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Cinco Pilares de{" "}
              <span className="text-gradient-gold">Excelência Global</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto">
              Do comércio de commodities à tecnologia de ponta, a BREXD opera em cinco
              segmentos integrados que impulsionam crescimento sustentável e conectividade global.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid de Segmentos */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.key} delay={i * 0.1} direction="up">
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Barra de acento colorida */}
                      <div
                        className="absolute top-0 left-0 w-full h-1.5 transition-all duration-300 group-hover:h-2"
                        style={{ backgroundColor: item.color }}
                      />

                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-16 h-16 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: item.color + "12" }}
                        >
                          <Icon className="w-8 h-8" style={{ color: item.color }} />
                        </div>
                        <span className="text-xs font-mono text-gray-400 mt-2">
                          {item.stats}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-brand-navy mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-500 leading-relaxed mb-8">
                        {item.desc}
                      </p>

                      <div
                        className="flex items-center gap-2 text-sm font-semibold transition-colors"
                        style={{ color: item.color }}
                      >
                        Explorar Segmento
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Pronto para Ser Parceiro da BREXD?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Descubra como nossos segmentos integrados podem criar valor para seu
              negócio em toda a cadeia de suprimentos global.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
