"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import {
  Wheat,
  ArrowRight,
  ArrowLeft,
  Scale,
  Building,
  Container,
  Users,
  ShoppingCart,
  Warehouse,
  Truck,
  Package,
  BookOpen,
  TreePine,
  MapPin,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const SEGMENT_COLOR = "#2E8B57";

const stats = [
  { value: "1.2M", label: "Toneladas por Ano", icon: Scale },
  { value: "12", label: "Instalações", icon: Building },
  { value: "500K", label: "Capacidade em Ton", icon: Container },
  { value: "2,500+", label: "Produtores", icon: Users },
];

const services = [
  {
    title: "Comércio de Commodities",
    desc: "Comercialização estratégica de soja, milho, algodão, café e açúcar em mercados internacionais com preços competitivos e entrega confiável.",
    icon: ShoppingCart,
  },
  {
    title: "Armazenagem de Grãos",
    desc: "Capacidade de 500.000 toneladas em 12 instalações modernas de armazenamento com controle climático, monitoramento de qualidade e serviços de fumigação.",
    icon: Warehouse,
  },
  {
    title: "Logística Agrícola",
    desc: "Rede integrada de transporte multimodal conectando fazendas a portos por rodovias, ferrovias e hidrovias com rastreamento em tempo real.",
    icon: Truck,
  },
  {
    title: "Fornecimento de Insumos",
    desc: "Aquisição e distribuição de sementes, fertilizantes, agroquímicos e equipamentos para mais de 2.500 produtores parceiros em condições competitivas.",
    icon: Package,
  },
  {
    title: "Assessoria Técnica",
    desc: "Consultoria agronômica, análise de solo, planejamento de safra e serviços de agricultura de precisão para maximizar a produtividade e qualidade dos produtores.",
    icon: BookOpen,
  },
  {
    title: "Créditos de Carbono",
    desc: "Programas de sustentabilidade incluindo originação de créditos de carbono, incentivos à agricultura regenerativa e suporte à conformidade ESG.",
    icon: TreePine,
  },
];

const projects = [
  {
    title: "Operações de Soja - Mato Grosso",
    location: "Mato Grosso, Brasil",
    value: "$320M/ano",
    desc: "Operação abrangente de originação, armazenamento e exportação de soja em 8 instalações no Mato Grosso com acesso direto ao Porto de Santos.",
  },
  {
    title: "Comércio de Algodão - Bahia",
    location: "Oeste da Bahia, Brasil",
    value: "$85M/ano",
    desc: "Programa de fornecimento de algodão premium com mais de 400 produtores na região MATOPIBA, abastecendo fabricantes têxteis asiáticos.",
  },
  {
    title: "Café Premium - Minas Gerais",
    location: "Sul de Minas, Brasil",
    value: "$95M/ano",
    desc: "Programa de cafés especiais com relações de comércio direto, certificação em laboratório de qualidade e canais de exportação dedicados para mercados premium.",
  },
];

export default function AgribusinessPage() {
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
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
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
                <Wheat className="w-8 h-8 text-white" />
              </div>
              <span className="text-sm font-mono text-white/40 uppercase tracking-widest">
                Divisão de Agronegócio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight max-w-4xl">
              Alimentando o Mundo com{" "}
              <span className="text-brand-gold">Sustentabilidade</span>
            </h1>
            <p className="mt-6 text-lg text-white/50 max-w-2xl">
              Nossa divisão de Agronegócio conecta mais de 2.500 produtores
              brasileiros aos mercados globais, comercializando 1,2 milhão de
              toneladas de commodities anualmente por meio de 12 instalações
              estrategicamente localizadas.
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
                A BREXD Agronegócio está profundamente inserida no coração
                agrícola do Brasil, operando uma rede verticalmente integrada
                que abrange originação de commodities, armazenagem, logística e
                comércio internacional. Com 12 instalações nas principais
                regiões produtoras e capacidade de armazenamento de 500.000
                toneladas, oferecemos aos produtores compra garantida, preços
                competitivos e serviços de assessoria técnica. Nosso programa
                de créditos de carbono e iniciativas de agricultura regenerativa
                posicionam a BREXD na vanguarda do agronegócio sustentável,
                criando valor para produtores, compradores e o meio ambiente.
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
                Do campo ao porto -- soluções abrangentes de agronegócio.
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
                Operações de agronegócio em larga escala por todo o Brasil.
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
                        Valor Anual
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
              Seja Parceiro do Agronegócio BREXD
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Seja você um produtor em busca de compra garantida ou um
              comprador procurando commodities brasileiras premium, somos
              seu parceiro.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contate a Divisão de Agronegócio
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
