"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Cpu,
  ArrowRight,
  ArrowLeft,
  Boxes,
  Users,
  Activity,
  DollarSign,
  Code2,
  Radio,
  BrainCircuit,
  Network,
  Sparkles,
  ShieldCheck,
  MapPin,
  ExternalLink,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SEGMENT_COLOR = "#1E56A0";

const stats = [
  { value: "50+", label: "Sistemas Implantados", icon: Boxes },
  { value: "15,000+", label: "Usuários Ativos", icon: Users },
  { value: "99.9%", label: "Disponibilidade", icon: Activity },
  { value: "$45M", label: "Receita Anual", icon: DollarSign },
];

const services = [
  {
    title: "Software Personalizado",
    desc: "Desenvolvimento de software empresarial sob medida com arquiteturas modernas, design cloud-native e entrega ágil para sistemas de missão crítica.",
    icon: Code2,
  },
  {
    title: "IoT e Automação",
    desc: "Soluções de IoT industrial incluindo redes de sensores, computação de borda e sistemas de controle automatizado para manufatura e logística.",
    icon: Radio,
  },
  {
    title: "IA e Análise de Dados",
    desc: "Modelos de machine learning, análise preditiva e plataformas de inteligência de negócios que transformam dados em insights acionáveis.",
    icon: BrainCircuit,
  },
  {
    title: "Plataformas de Cadeia de Suprimentos",
    desc: "Sistemas de gestão de cadeia de suprimentos de ponta a ponta com visibilidade em tempo real, planejamento de demanda e ferramentas de colaboração multipartidária.",
    icon: Network,
  },
  {
    title: "Transformação Digital",
    desc: "Consultoria estratégica e implementação de transformação digital, modernizando sistemas e processos legados para a era digital.",
    icon: Sparkles,
  },
  {
    title: "Cibersegurança",
    desc: "Serviços de segurança empresarial incluindo detecção de ameaças, auditoria de conformidade, testes de penetração e arquitetura zero-trust.",
    icon: ShieldCheck,
  },
];

const products = [
  {
    title: "BREXD Track",
    category: "Plataforma de Rastreamento de Cargas",
    desc: "Plataforma de rastreamento e visibilidade de cargas em tempo real atendendo todas as operações logísticas da BREXD com GPS, sensores IoT e algoritmos preditivos de ETA.",
    users: "8.000+ usuários",
  },
  {
    title: "AgroVision",
    category: "Monitoramento Agrícola",
    desc: "Plataforma de monitoramento agrícola por satélite e drone fornecendo análise de saúde das culturas, previsão meteorológica e predição de produtividade para produtores.",
    users: "2.500+ fazendas",
  },
  {
    title: "TradeHub",
    category: "Gestão Comercial",
    desc: "Sistema integrado de gestão comercial que gerencia documentação, conformidade, instrumentos financeiros e gestão de contrapartes em todos os segmentos.",
    users: "3.200+ usuários",
  },
  {
    title: "BuildOS",
    category: "BIM para Construção",
    desc: "Plataforma de Modelagem da Informação da Construção (BIM) com cronograma 4D, integração de custos e monitoramento de projetos em tempo real para nossa divisão de Engenharia.",
    users: "1.300+ usuários",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: SEGMENT_COLOR }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-brand-gold/8 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px]" />
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
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-mono text-white/40 uppercase tracking-widest">
                Divisão de Tecnologia
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
              Impulsionando Negócios com{" "}
              <span className="text-brand-gold">Inteligência</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Nossa divisão de Tecnologia constrói plataformas digitais
              inteligentes que impulsionam as operações da BREXD e clientes
              externos, com mais de 50 sistemas atendendo mais de 15.000
              usuários com 99,9% de disponibilidade.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative py-16 border-t border-white/5"
        style={{ backgroundColor: SEGMENT_COLOR }}
      >
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
                A BREXD Tecnologia é a espinha dorsal digital de todo o grupo,
                desenvolvendo e mantendo as plataformas que impulsionam a
                eficiência operacional em todos os segmentos de negócios. Além
                dos sistemas internos, nossa divisão de tecnologia atende
                clientes externos com desenvolvimento de software
                personalizado, soluções de IoT, análise com IA e consultoria em
                transformação digital. Com mais de 50 sistemas em produção,
                mais de 15.000 usuários ativos e 99,9% de disponibilidade,
                entregamos tecnologia de nível empresarial que escala. Nossos
                produtos proprietários -- BREXD Track, AgroVision, TradeHub e
                BuildOS -- representam anos de expertise de domínio traduzidos
                em poderosas ferramentas digitais.
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
                Soluções de tecnologia empresarial construídas para escala e confiabilidade.
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

      {/* Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy">
                Nossos Produtos
              </h2>
              <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
                Plataformas proprietárias construídas a partir de profunda expertise de domínio.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.title} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative h-full rounded-2xl bg-gray-50 border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className="h-2 w-full"
                    style={{ backgroundColor: SEGMENT_COLOR }}
                  />
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full"
                        style={{
                          color: SEGMENT_COLOR,
                          backgroundColor: SEGMENT_COLOR + "12",
                        }}
                      >
                        {product.category}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {product.users}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      {product.desc}
                    </p>
                    <div
                      className="flex items-center gap-2 text-sm font-semibold transition-colors"
                      style={{ color: SEGMENT_COLOR }}
                    >
                      Saiba Mais
                      <ExternalLink className="w-4 h-4" />
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
              Vamos Construir Algo Inteligente
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              De software personalizado a análises impulsionadas por IA, nossa
              equipe de tecnologia entrega soluções que transformam seu negócio.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contate a Divisão de Tecnologia
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
