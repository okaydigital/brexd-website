"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Ship,
  ArrowRight,
  ArrowLeft,
  BarChart3,
  Globe2,
  Route,
  Clock,
  ShoppingCart,
  Factory,
  Truck,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  MapPin,
  DollarSign,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SEGMENT_COLOR = "#0D2137";

const stats = [
  { value: "$1.8B", label: "Volume Anual", icon: DollarSign },
  { value: "12", label: "Países Atendidos", icon: Globe2 },
  { value: "450+", label: "Rotas Ativas", icon: Route },
  { value: "98.7%", label: "Entrega no Prazo", icon: Clock },
];

const services = [
  {
    title: "Comércio de Commodities",
    desc: "Fornecimento estratégico e exportação de commodities agrícolas e minerais brasileiras para mercados globais com preços competitivos.",
    icon: ShoppingCart,
  },
  {
    title: "Produtos Manufaturados",
    desc: "Facilitação de exportação de produtos industriais, componentes automotivos e bens de consumo fabricados no Brasil para todo o mundo.",
    icon: Factory,
  },
  {
    title: "Gestão Logística",
    desc: "Coordenação logística completa, incluindo agenciamento de cargas, operações portuárias e soluções de transporte multimodal.",
    icon: Truck,
  },
  {
    title: "Documentação Comercial",
    desc: "Gestão completa de documentação de exportação, certificados de origem, licenças fitossanitárias e conformidade comercial.",
    icon: FileCheck,
  },
  {
    title: "Inteligência de Mercado",
    desc: "Análise de mercado em tempo real, previsões de preços e consultoria estratégica para maximizar o valor e o timing das exportações.",
    icon: TrendingUp,
  },
  {
    title: "Conformidade e Regulatório",
    desc: "Suporte completo de conformidade regulatória em múltiplas jurisdições, garantindo desembaraço aduaneiro ágil e aderência comercial.",
    icon: ShieldCheck,
  },
];

const projects = [
  {
    title: "Soja Brasileira para a China",
    location: "Santos, BR para Shanghai, CN",
    value: "$450M/yr",
    desc: "Operação de exportação de soja em grande escala abastecendo grandes processadores chineses com soja premium brasileira por meio de terminais portuários dedicados.",
  },
  {
    title: "Café Premium para a Europa",
    location: "Minas Gerais, BR para Hamburgo, AL",
    value: "$120M/yr",
    desc: "Programa de exportação de cafés especiais e premium atendendo torrefadores europeus com cafés brasileiros rastreáveis e de comércio direto.",
  },
  {
    title: "Peças Automotivas para os EUA",
    location: "São Paulo, BR para Detroit, EUA",
    value: "$85M/yr",
    desc: "Cadeia de suprimentos de componentes automotivos de precisão para grandes montadoras, com entrega just-in-time e garantia de qualidade na origem.",
  },
];

export default function ExportPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: SEGMENT_COLOR }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-gold/8 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <ScrollReveal>
            <Link
              href="/segments"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Todos os Segmentos
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <Ship className="w-8 h-8 text-brand-gold" />
              </div>
              <span className="text-sm font-mono text-white/40 uppercase tracking-widest">
                Divisão de Exportação
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
              Conectando o Brasil ao{" "}
              <span className="text-gradient-gold">Mundo</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Nossa divisão de Exportação conecta a excelência brasileira aos
              mercados globais, gerenciando $1,8 bilhão em volume comercial anual
              em 12 países com confiabilidade e conformidade líderes do setor.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-16 bg-brand-navy border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
                  <div className="text-center">
                    <Icon className="w-5 h-5 text-brand-gold mx-auto mb-3" />
                    <p className="text-3xl md:text-4xl font-black text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-white/40 font-medium uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-8">
                Visão Geral
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A BREXD Exportação é a espinha dorsal de nossas operações de
                comércio internacional. Com raízes profundas nos mercados de
                commodities e nos setores industriais brasileiros, construímos uma
                rede robusta abrangendo 12 países na Ásia, Europa e Américas.
                Nossas mais de 450 rotas comerciais ativas garantem que os
                produtos brasileiros cheguem aos mercados globais com eficiência
                incomparável, alcançando uma taxa de entrega no prazo de 98,7%.
                De commodities agrícolas em grande volume a componentes
                automotivos de engenharia de precisão, nossa divisão de
                exportação entrega valor em cada etapa da cadeia de suprimentos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy">
                Nossos Serviços
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Soluções completas de exportação sob medida para suas necessidades de mercado.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.title} delay={i * 0.08} direction="up">
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-1 transition-all duration-300 group-hover:h-1.5"
                      style={{ backgroundColor: SEGMENT_COLOR }}
                    />
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                      style={{ backgroundColor: SEGMENT_COLOR + "12" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: SEGMENT_COLOR }} />
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy">
                Projetos em Destaque
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Histórico comprovado de operações de exportação em grande escala.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative h-full rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: SEGMENT_COLOR }}
                  />
                  <div className="p-8">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs font-mono text-gray-400 uppercase">
                        Valor do Contrato
                      </span>
                      <span
                        className="text-lg font-black"
                        style={{ color: SEGMENT_COLOR }}
                      >
                        {project.value}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: SEGMENT_COLOR }}
        />
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
              Pronto para Exportar com a BREXD?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Deixe nossos especialistas em exportação ajudá-lo a acessar
              mercados globais com confiança, conformidade e vantagem competitiva.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contate a Divisão de Exportação
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
