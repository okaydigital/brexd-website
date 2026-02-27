"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  HardHat,
  ArrowRight,
  ArrowLeft,
  FolderKanban,
  DollarSign,
  ShieldCheck,
  Leaf,
  Building2,
  Factory,
  LandPlot,
  ClipboardList,
  Lightbulb,
  Wrench,
  MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SEGMENT_COLOR = "#E8B624";

const stats = [
  { value: "120+", label: "Projetos Entregues", icon: FolderKanban },
  { value: "$2.1B", label: "Valor Total", icon: DollarSign },
  { value: "0", label: "Incidentes de Segurança 2024", icon: ShieldCheck },
  { value: "15+", label: "Certificados LEED", icon: Leaf },
];

const services = [
  {
    title: "Construção Civil",
    desc: "Projetos de construção comercial, residencial e de uso misto em larga escala, com entrega turnkey e padrões de qualidade de classe mundial.",
    icon: Building2,
  },
  {
    title: "Plantas Industriais",
    desc: "Projeto e construção de instalações fabris, plantas de processamento e complexos industriais, do greenfield ao comissionamento.",
    icon: Factory,
  },
  {
    title: "Infraestrutura",
    desc: "Rodovias, pontes, terminais portuários e projetos de infraestrutura pública executados com engenharia de precisão e sustentabilidade.",
    icon: LandPlot,
  },
  {
    title: "Gestão de Projetos",
    desc: "Gestão completa do ciclo de vida do projeto com equipes certificadas PMI, controle de custos, cronograma e coordenação de stakeholders.",
    icon: ClipboardList,
  },
  {
    title: "Consultoria de Engenharia",
    desc: "Estudos de viabilidade, análise estrutural, avaliações de impacto ambiental e consultoria técnica para projetos complexos.",
    icon: Lightbulb,
  },
  {
    title: "Retrofit e Modernização",
    desc: "Renovação e modernização de infraestrutura existente, instalações industriais e edifícios para atender aos padrões atuais.",
    icon: Wrench,
  },
];

const projects = [
  {
    title: "Terminal Porto Atlântico",
    location: "Santos, São Paulo",
    value: "$180M",
    desc: "Expansão de terminal de contêineres de última geração com sistemas automatizados de movimentação de carga, berços de águas profundas e certificação LEED Gold.",
  },
  {
    title: "Parque Industrial Campinas",
    location: "Campinas, São Paulo",
    value: "$95M",
    desc: "Parque industrial multilocatário com 12 instalações fabris sob medida, infraestrutura logística integrada e energia solar.",
  },
  {
    title: "Expansão da Rodovia BR-163",
    location: "Mato Grosso / Pará",
    value: "$310M",
    desc: "Expansão e reabilitação de 450 km de rodovia conectando grandes regiões agrícolas aos portos de exportação do norte, com pontes e sistemas de interseção.",
  },
];

export default function EngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative py-32 md:py-40 overflow-hidden"
        style={{ backgroundColor: "#0D2137" }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ backgroundColor: SEGMENT_COLOR + "15" }}
          />
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
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: SEGMENT_COLOR + "20" }}
              >
                <HardHat className="w-8 h-8" style={{ color: SEGMENT_COLOR }} />
              </div>
              <span className="text-sm font-mono text-white/40 uppercase tracking-widest">
                Divisão de Engenharia
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
              Construindo o Futuro da{" "}
              <span className="text-gradient-gold">Infraestrutura</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Nossa divisão de Engenharia entrega projetos de construção e
              infraestrutura de classe mundial, com mais de 120 entregas
              bem-sucedidas totalizando $2,1 bilhões e um histórico de
              segurança impecável.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section
        className="relative py-16 border-t border-white/5"
        style={{ backgroundColor: "#0D2137" }}
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={i * 0.1} direction="up">
                  <div className="text-center">
                    <Icon className="w-5 h-5 mx-auto mb-3" style={{ color: SEGMENT_COLOR }} />
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
                A BREXD Engenharia é uma das empresas de construção e
                infraestrutura mais respeitadas do Brasil, com um portfólio que
                abrange portos, rodovias, complexos industriais e
                empreendimentos comerciais. Nosso compromisso com a segurança é
                incomparável -- alcançando zero incidentes reportáveis em 2024
                em todos os canteiros ativos. Com mais de 15 projetos
                certificados LEED, lideramos o setor em práticas de construção
                sustentável. Dos estudos de viabilidade ao comissionamento
                final, nossos gerentes de projeto certificados PMI garantem que
                cada projeto atenda aos mais altos padrões de qualidade, prazo
                e desempenho orçamentário.
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
                Capacidades completas de engenharia e construção.
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
                      style={{ backgroundColor: SEGMENT_COLOR + "18" }}
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
                Projetos emblemáticos que definem a infraestrutura brasileira.
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
                        style={{ color: "#0D2137" }}
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
        <div className="absolute inset-0 bg-brand-navy" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ backgroundColor: SEGMENT_COLOR + "15" }}
        />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              Tem um Projeto de Engenharia?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Do conceito ao comissionamento, nossa equipe de engenharia
              entrega projetos no prazo, dentro do orçamento e nos mais
              altos padrões de qualidade.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contate a Divisão de Engenharia
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
