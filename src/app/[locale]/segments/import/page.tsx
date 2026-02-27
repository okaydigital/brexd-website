"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Package,
  ArrowRight,
  ArrowLeft,
  DollarSign,
  Globe2,
  Users,
  Timer,
  Cog,
  Monitor,
  Gem,
  FileSearch,
  Warehouse,
  BadgeCheck,
  MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SEGMENT_COLOR = "#1B7A3D";

const stats = [
  { value: "$1.1B", label: "Volume Anual", icon: DollarSign },
  { value: "8", label: "Países de Origem", icon: Globe2 },
  { value: "200+", label: "Fornecedores Qualificados", icon: Users },
  { value: "15-day", label: "Desembaraço Médio", icon: Timer },
];

const services = [
  {
    title: "Máquinas Industriais",
    desc: "Fornecimento e importação de equipamentos industriais pesados, máquinas CNC e sistemas de linha de produção da Alemanha, Japão e Itália.",
    icon: Cog,
  },
  {
    title: "Hardware Tecnológico",
    desc: "Aquisição de eletrônicos avançados, semicondutores, servidores e equipamentos de rede dos principais fabricantes asiáticos.",
    icon: Monitor,
  },
  {
    title: "Matérias-Primas",
    desc: "Fornecimento estratégico de produtos químicos especiais, ligas avançadas, polímeros e materiais raros para a indústria brasileira.",
    icon: Gem,
  },
  {
    title: "Desembaraço Aduaneiro",
    desc: "Serviços completos de corretagem aduaneira com tempo médio de desembaraço de 15 dias, garantindo processamento de importação rápido e conforme.",
    icon: FileSearch,
  },
  {
    title: "Armazenagem",
    desc: "Instalações de armazéns alfandegados e gerais nos principais portos brasileiros com gestão de estoque e serviços de distribuição.",
    icon: Warehouse,
  },
  {
    title: "Qualificação de Fornecedores",
    desc: "Avaliação rigorosa de fornecedores, auditoria de qualidade e monitoramento contínuo de desempenho para garantir excelência na cadeia de suprimentos.",
    icon: BadgeCheck,
  },
];

const projects = [
  {
    title: "Máquinas CNC da Alemanha",
    location: "Stuttgart, AL para São Paulo, BR",
    value: "$45M",
    desc: "Centros de usinagem CNC de precisão importados dos principais fabricantes alemães para os setores automotivo e aeroespacial brasileiros.",
  },
  {
    title: "Eletrônicos da China",
    location: "Shenzhen, CN para Manaus, BR",
    value: "$180M",
    desc: "Programa de importação de eletrônicos de consumo e industriais em grande escala abastecendo as operações de montagem da Zona Franca de Manaus.",
  },
  {
    title: "Dispositivos Médicos dos EUA",
    location: "Minneapolis, EUA para Rio de Janeiro, BR",
    value: "$65M",
    desc: "Importação de equipamentos avançados de diagnóstico por imagem para grandes redes hospitalares e unidades de saúde.",
  },
];

export default function ImportPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: SEGMENT_COLOR }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
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
                <Package className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-mono text-white/40 uppercase tracking-widest">
                Divisão de Importação
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
              O Mundo a Serviço do{" "}
              <span className="text-brand-gold">Brasil</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Nossa divisão de Importação oferece à indústria brasileira acesso
              direto aos principais polos manufatureiros globais, gerenciando
              $1,1 bilhão em aquisições anuais de mais de 200 fornecedores
              qualificados em 8 países.
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
                A BREXD Importação conecta a indústria brasileira com os
                principais fabricantes e fornecedores do mundo. Nossos
                especialistas em aquisição operam em 8 países-chave, incluindo
                Alemanha, China, Estados Unidos, Japão e Itália, fornecendo desde
                máquinas industriais de precisão até hardware tecnológico
                avançado. Com um rigoroso programa de qualificação de
                fornecedores cobrindo mais de 200 parceiros e um tempo médio de
                desembaraço aduaneiro de apenas 15 dias, garantimos que materiais
                e equipamentos críticos cheguem às operações brasileiras com
                rapidez e confiabilidade.
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
                Soluções completas de importação, da busca de fornecedores à entrega final.
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
                Operações estratégicas de importação que impulsionam a indústria brasileira.
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
              Precisa de Soluções de Sourcing Global?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Nossos especialistas em importação conectam você a fornecedores
              qualificados no mundo todo com suporte completo de desembaraço
              aduaneiro e logística.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contate a Divisão de Importação
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
