"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, Truck } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

/* ───────── dados dos parceiros ───────── */
type PartnerCategory = "Parceiros Estratégicos" | "Clientes" | "Fornecedores";

interface Partner {
  name: string;
  category: PartnerCategory;
}

const partners: Partner[] = [
  // Parceiros Estratégicos
  { name: "Petrobras",        category: "Parceiros Estratégicos" },
  { name: "Vale",             category: "Parceiros Estratégicos" },
  { name: "JBS",              category: "Parceiros Estratégicos" },
  { name: "COFCO",            category: "Parceiros Estratégicos" },
  { name: "Caterpillar",      category: "Parceiros Estratégicos" },
  { name: "Siemens",          category: "Parceiros Estratégicos" },
  { name: "Huawei",           category: "Parceiros Estratégicos" },
  { name: "Bunge",            category: "Parceiros Estratégicos" },
  { name: "Cargill",          category: "Parceiros Estratégicos" },
  { name: "KPMG",             category: "Parceiros Estratégicos" },
  // Clientes
  { name: "Whirlpool",        category: "Clientes" },
  { name: "Embraer",          category: "Clientes" },
  { name: "WEG",              category: "Clientes" },
  { name: "Natura",           category: "Clientes" },
  { name: "SLC Agrícola",     category: "Clientes" },
  { name: "CCR Group",        category: "Clientes" },
  { name: "Magazine Luiza",   category: "Clientes" },
  { name: "Porto Seguro",     category: "Clientes" },
  // Fornecedores
  { name: "Bosch",            category: "Fornecedores" },
  { name: "Mitsubishi",       category: "Fornecedores" },
  { name: "Samsung Heavy",    category: "Fornecedores" },
  { name: "Thyssen Krupp",    category: "Fornecedores" },
  { name: "Dow Chemical",     category: "Fornecedores" },
  { name: "John Deere",       category: "Fornecedores" },
];

const filters = ["Todos", "Clientes", "Parceiros Estratégicos", "Fornecedores"] as const;

const categoryMeta: Record<PartnerCategory, { icon: typeof Building2; color: string }> = {
  "Parceiros Estratégicos": { icon: Handshake, color: "text-brand-gold" },
  Clientes:                 { icon: Building2,  color: "text-seg-technology" },
  Fornecedores:             { icon: Truck,      color: "text-seg-import" },
};

/* ───────── componente ───────── */
export default function PartnersPage() {
  const [active, setActive] = useState<string>("Todos");

  const filtered =
    active === "Todos"
      ? partners
      : partners.filter((p) => p.category === active);

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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-gold/10 blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-seg-import/8 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Nossos <span className="text-gradient-gold">Parceiros</span> e Clientes
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
              Construindo relacionamentos duradouros com líderes do setor em todo o mundo
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

          {/* Grid de parceiros */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
          >
            {filtered.map((partner, i) => {
              const meta = categoryMeta[partner.category];
              const Icon = meta.icon;
              return (
                <ScrollReveal key={partner.name} delay={i * 0.03} direction="up">
                  <motion.div
                    layout
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-brand-navy/5 flex items-center justify-center transition-colors">
                      <Icon className={cn("w-6 h-6 text-gray-300 group-hover:text-brand-navy transition-colors", meta.color)} />
                    </div>
                    <span className="text-sm font-bold text-gray-600 group-hover:text-brand-navy text-center transition-colors">
                      {partner.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-300 font-medium">
                      {partner.category}
                    </span>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 mt-16 text-lg">
              Nenhum parceiro encontrado para esta categoria.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
