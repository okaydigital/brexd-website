"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, DollarSign, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/* ───────── mapa de cores por segmento ───────── */
const segmentColors: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  Exportação:   { bg: "bg-seg-export/10",       text: "text-seg-export",       border: "border-seg-export/20",       tag: "bg-seg-export"       },
  Importação:   { bg: "bg-seg-import/10",       text: "text-seg-import",       border: "border-seg-import/20",       tag: "bg-seg-import"       },
  Engenharia:   { bg: "bg-seg-engineering/10",  text: "text-seg-engineering",  border: "border-seg-engineering/20",  tag: "bg-seg-engineering"  },
  Agronegócio:  { bg: "bg-seg-agribusiness/10", text: "text-seg-agribusiness", border: "border-seg-agribusiness/20", tag: "bg-seg-agribusiness" },
  Tecnologia:   { bg: "bg-seg-technology/10",   text: "text-seg-technology",   border: "border-seg-technology/20",   tag: "bg-seg-technology"   },
};

/* ───────── dados dos projetos ───────── */
const projects = [
  { title: "Terminal Porto Atlântico",            segment: "Engenharia",   location: "Santos, SP",       year: 2023, value: "$180M"    },
  { title: "Rota da Soja para a China",           segment: "Exportação",   location: "Shanghai-Santos",  year: 2024, value: "$450M/ano" },
  { title: "Linha de Produção CNC",               segment: "Importação",   location: "Campinas, SP",     year: 2023, value: "$45M"     },
  { title: "Plataforma AgroVision",               segment: "Tecnologia",   location: "Nacional",         year: 2024, value: "$12M"     },
  { title: "Rede de Armazenagem de Grãos",        segment: "Agronegócio",  location: "Mato Grosso",      year: 2022, value: "$65M"     },
  { title: "Rodovia BR-163",                      segment: "Engenharia",   location: "MT/PA",            year: 2024, value: "$310M"    },
  { title: "Importação de Dispositivos Médicos",  segment: "Importação",   location: "Miami-SP",         year: 2023, value: "$65M"     },
  { title: "Plataforma BREXD Track",              segment: "Tecnologia",   location: "Global",           year: 2024, value: "$8M"      },
  { title: "Hub de Algodão Premium",              segment: "Agronegócio",  location: "Bahia",            year: 2023, value: "$85M/ano"  },
  { title: "Parque Industrial Campinas",          segment: "Engenharia",   location: "Campinas, SP",     year: 2022, value: "$95M"     },
  { title: "Rota do Café Premium",                segment: "Exportação",   location: "MG-Europa",        year: 2024, value: "$120M/ano" },
  { title: "Plataforma TradeHub",                 segment: "Tecnologia",   location: "São Paulo",        year: 2023, value: "$15M"     },
];

const filters = ["Todos", "Exportação", "Importação", "Engenharia", "Agronegócio", "Tecnologia"] as const;

/* ───────── componente ───────── */
export default function ProjectsPage() {
  const [active, setActive] = useState<string>("Todos");

  const filtered = active === "Todos" ? projects : projects.filter((p) => p.segment === active);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-32 md:py-44 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-seg-technology/10 blur-[120px]" />
          <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Nossos <span className="text-gradient-gold">Projetos</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
              Mais de 500 projetos em 5 segmentos e 3 continentes
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Filtro + Grid ── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {/* Abas de filtro */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-semibold transition-all",
                    active === f
                      ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20"
                      : "bg-white text-gray-500 border border-gray-200 hover:border-brand-navy/30 hover:text-brand-navy"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid de projetos */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => {
              const colors = segmentColors[project.segment];
              return (
                <ScrollReveal key={project.title} delay={i * 0.05} direction="up">
                  <motion.div
                    layout
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                    className="group relative h-full flex flex-col p-7 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Acento de cor no topo */}
                    <div
                      className={cn(
                        "absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-1.5",
                        colors.tag
                      )}
                    />

                    {/* Tag do segmento */}
                    <span
                      className={cn(
                        "self-start inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white mb-4",
                        colors.tag
                      )}
                    >
                      {project.segment}
                    </span>

                    {/* Título */}
                    <h3 className="text-lg font-bold text-brand-navy mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Meta */}
                    <div className="mt-auto space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {project.year}
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="font-semibold text-brand-navy">{project.value}</span>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </motion.div>

          {/* Estado vazio */}
          {filtered.length === 0 && (
            <p className="text-center text-gray-400 mt-16 text-lg">
              Nenhum projeto encontrado para este segmento.
            </p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/10 blur-[120px]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Tem um projeto em mente?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Vamos conversar sobre como a BREXD pode transformar sua visão em realidade.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Iniciar uma Conversa
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
