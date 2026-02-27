"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";

const tabs = [
  { key: "trade", label: "Comércio & Containers" },
  { key: "engineering", label: "Engenharia & Asfalto" },
  { key: "agribusiness", label: "Agro & Fertilizantes" },
  { key: "technology", label: "Mobilidade Elétrica" },
];

const blogPosts: Record<string, { title: string; excerpt: string; image: string; date: string; read: string }[]> = {
  trade: [
    {
      title: "Logística de containers: como otimizar o transit time entre Santos e Shanghai",
      excerpt: "Estratégias para reduzir o tempo de trânsito e os custos operacionais em rotas transpacíficas.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80",
      date: "22 Fev 2026",
      read: "8 min",
    },
    {
      title: "Demurrage e detention: como evitar custos extras na operação de containers",
      excerpt: "Guia prático para gestão eficiente de prazos e redução de sobretaxas portuárias.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
      date: "18 Fev 2026",
      read: "6 min",
    },
    {
      title: "Cabotagem no Brasil: alternativa competitiva ao transporte rodoviário de containers",
      excerpt: "Análise comparativa de custos e prazos entre cabotagem e frete rodoviário para longas distâncias.",
      image: "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?w=600&q=80",
      date: "12 Fev 2026",
      read: "5 min",
    },
    {
      title: "Novas rotas comerciais: o impacto do Canal de Suez na operação Brasil-Ásia",
      excerpt: "Como as mudanças geopolíticas estão redesenhando corredores marítimos globais.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      date: "05 Fev 2026",
      read: "7 min",
    },
  ],
  engineering: [
    {
      title: "Asfalto modificado por polímero: vantagens técnicas em rodovias de alto tráfego",
      excerpt: "Como o SBS e o EVA estão melhorando a durabilidade do pavimento em climas tropicais.",
      image: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=600&q=80",
      date: "20 Fev 2026",
      read: "7 min",
    },
    {
      title: "Máquinas pesadas: tendências em locação para grandes obras rodoviárias",
      excerpt: "O mercado de locação de escavadeiras, motoniveladoras e rolos compactadores no Brasil.",
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=600&q=80",
      date: "15 Fev 2026",
      read: "9 min",
    },
    {
      title: "Reciclagem de pavimento: economia e sustentabilidade na manutenção rodoviária",
      excerpt: "Técnicas de fresagem e reaproveitamento de material asfáltico em obras de restauração.",
      image: "https://images.unsplash.com/photo-1545459720-aac8509eb02c?w=600&q=80",
      date: "08 Fev 2026",
      read: "6 min",
    },
    {
      title: "Controle de qualidade em usinas de asfalto: parâmetros críticos de produção",
      excerpt: "Os ensaios e especificações que garantem a conformidade do produto final.",
      image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=600&q=80",
      date: "01 Fev 2026",
      read: "5 min",
    },
  ],
  agribusiness: [
    {
      title: "Fertilizantes NPK: tendências de preço e abastecimento para a safra 2026/27",
      excerpt: "Análise do mercado global de fertilizantes e impactos para o produtor brasileiro.",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80",
      date: "21 Fev 2026",
      read: "8 min",
    },
    {
      title: "Frigoríficos de aves: como a automação está elevando a produtividade",
      excerpt: "Tecnologias de abate e processamento que aumentam a eficiência e reduzem custos.",
      image: "https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=600&q=80",
      date: "14 Fev 2026",
      read: "6 min",
    },
    {
      title: "Exportação de frango: mercados árabes e asiáticos ampliam demanda por proteína halal",
      excerpt: "As certificações e padrões exigidos pelos maiores importadores de carne de aves.",
      image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",
      date: "07 Fev 2026",
      read: "7 min",
    },
    {
      title: "Logística de fertilizantes: do porto ao campo em tempo recorde",
      excerpt: "Soluções de armazenagem e transporte que garantem o insumo na hora certa para o plantio.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80",
      date: "02 Fev 2026",
      read: "9 min",
    },
  ],
  technology: [
    {
      title: "Patinetes elétricos no Brasil: regulamentação e oportunidades de mercado",
      excerpt: "O panorama regulatório e o potencial de crescimento da micromobilidade urbana.",
      image: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=600&q=80",
      date: "19 Fev 2026",
      read: "7 min",
    },
    {
      title: "Scooters elétricos: por que a última milha é o maior negócio da mobilidade urbana",
      excerpt: "Dados de mercado e cases de sucesso na distribuição de veículos elétricos leves.",
      image: "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&q=80",
      date: "13 Fev 2026",
      read: "8 min",
    },
    {
      title: "Baterias de lítio: cadeia de suprimento e desafios para o mercado brasileiro",
      excerpt: "Da importação de células à montagem local — os gargalos e oportunidades do setor.",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&q=80",
      date: "06 Fev 2026",
      read: "6 min",
    },
    {
      title: "Assistência técnica como diferencial: rede de serviços para micromobilidade",
      excerpt: "Como a BREXD estruturou uma rede de manutenção que cobre 12 capitais brasileiras.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
      date: "01 Fev 2026",
      read: "5 min",
    },
  ],
};

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState("trade");
  const posts = blogPosts[activeTab];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-green" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">
                Insights & Análises
              </span>
              <div className="h-px w-10 bg-brand-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              Conteúdo que <span className="text-brand-gold">gera valor</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
              Análises especializadas e perspectivas do setor pela nossa equipe global.
            </p>
          </div>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === tab.key
                    ? "bg-brand-navy text-white"
                    : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {tab.label}
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
            {posts.map((post, i) => (
              <Link href="/blog" key={i} className="group block">
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[11px] text-gray-400 mb-2">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.read}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-brand-navy leading-snug group-hover:text-brand-green transition-colors flex-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed line-clamp-2">
                      {post.excerpt}
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
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
