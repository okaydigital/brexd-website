"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Ship,
  Package,
  HardHat,
  Wheat,
  Cpu,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Globe2,
  ChevronDown,
  Play,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import CountUp from "@/components/animations/CountUp";
import { cn } from "@/lib/utils";

/* ════════════════════════════════════════════
   ANIMATION VARIANTS
   ════════════════════════════════════════════ */

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: EASE },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.15, ease: EASE },
  }),
};

/* Helper: animated section wrapper */
function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative min-h-screen flex items-center snap-start overflow-hidden",
        className
      )}
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}

/* ════════════════════════════════════════════
   SEGMENT DATA
   ════════════════════════════════════════════ */

const segments = [
  {
    key: "export",
    title: "Exportação",
    icon: Ship,
    color: "#0D2137",
    href: "/segments/export",
    stat: "US$ 1,8B",
    statLabel: "Volume Anual",
    desc: "Conectamos a excelência brasileira a mais de 18 países, gerenciando commodities agrícolas e produtos manufaturados com rotas otimizadas e 98,7% de pontualidade.",
    highlights: ["450+ rotas ativas", "12 países atendidos", "Conformidade total"],
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80",
  },
  {
    key: "import",
    title: "Importação",
    icon: Package,
    color: "#1B7A3D",
    href: "/segments/import",
    stat: "US$ 1,1B",
    statLabel: "Volume Anual",
    desc: "Acesso direto aos principais hubs de manufatura do mundo. Sourcing global de máquinas industriais, hardware tecnológico e matérias-primas especializadas.",
    highlights: ["200+ fornecedores qualificados", "15 dias de desembaraço", "8 países de origem"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
  },
  {
    key: "engineering",
    title: "Engenharia",
    icon: HardHat,
    color: "#E8B624",
    href: "/segments/engineering",
    stat: "US$ 2,1B",
    statLabel: "Valor Total",
    desc: "Projetos de construção e infraestrutura de classe mundial. De terminais portuários a rodovias, entregamos com segurança zero incidentes e certificação LEED.",
    highlights: ["120+ projetos entregues", "Zero incidentes 2024", "15+ certificados LEED"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    key: "agribusiness",
    title: "Agronegócio",
    icon: Wheat,
    color: "#2E8B57",
    href: "/segments/agribusiness",
    stat: "1,2M ton",
    statLabel: "Por Ano",
    desc: "Do campo ao porto, negociamos soja, milho, algodão e café com rastreabilidade total. Rede de armazenagem com 500 mil toneladas de capacidade.",
    highlights: ["2.500+ produtores parceiros", "12 instalações", "Créditos de carbono"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    key: "technology",
    title: "Tecnologia",
    icon: Cpu,
    color: "#1E56A0",
    href: "/segments/technology",
    stat: "50+",
    statLabel: "Sistemas Implantados",
    desc: "Plataformas de IoT, IA e software personalizado que impulsionam operações de comércio, logística e agronegócio com 99,9% de disponibilidade.",
    highlights: ["15.000+ usuários ativos", "99,9% uptime", "IA e machine learning"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
];

/* ════════════════════════════════════════════
   STATS DATA
   ════════════════════════════════════════════ */

const stats = [
  { value: 28, suffix: "+", label: "Anos de\nExperiência" },
  { value: 500, suffix: "+", label: "Projetos\nEntregues" },
  { value: 18, suffix: "", label: "Países\nAtendidos" },
  { value: 350, suffix: "+", label: "Colaboradores\nGlobais" },
];

/* ════════════════════════════════════════════
   PROJECTS DATA
   ════════════════════════════════════════════ */

const projects = [
  {
    title: "Terminal Porto Atlântico",
    category: "Engenharia",
    date: "2023",
    desc: "Terminal portuário de última geração em Santos com capacidade para 2 milhões de TEUs anuais e tecnologia de automação avançada.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    value: "$180M",
  },
  {
    title: "Rota da Soja para a China",
    category: "Exportação",
    date: "2024",
    desc: "Operação de exportação em larga escala conectando produtores brasileiros a processadores chineses através de terminais dedicados.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80",
    value: "$450M/ano",
  },
  {
    title: "Plataforma AgroVision",
    category: "Tecnologia",
    date: "2024",
    desc: "Sistema de monitoramento agrícola com IoT e IA servindo mais de 2.500 fazendas em todo o Brasil com dados em tempo real.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    value: "$12M",
  },
  {
    title: "Rodovia BR-163",
    category: "Engenharia",
    date: "2024",
    desc: "Expansão e pavimentação de 240km da principal rota de escoamento de grãos do Centro-Oeste ao Porto de Miritituba.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    value: "$310M",
  },
];

/* ════════════════════════════════════════════
   PARTNERS DATA
   ════════════════════════════════════════════ */

const partnerRows = [
  ["Petrobras", "Vale", "JBS", "COFCO", "Caterpillar", "Siemens", "Huawei", "Bunge", "Cargill", "KPMG"],
  ["Embraer", "WEG", "Natura", "Raízen", "Totvs", "SLC Agrícola", "BRF", "Suzano", "Votorantim", "Gerdau"],
];

/* ════════════════════════════════════════════
   OFFICES DATA
   ════════════════════════════════════════════ */

const offices = [
  {
    city: "São Paulo",
    country: "Brasil",
    role: "Sede Global",
    address: "Av. Paulista, 1578 - Bela Vista",
    phone: "+55 11 3042-8800",
    email: "sp@brexd.com",
    since: 1997,
    team: "180+",
  },
  {
    city: "Miami",
    country: "EUA",
    role: "Operações Américas",
    address: "1395 Brickell Ave, Suite 800",
    phone: "+1 305 555 0192",
    email: "miami@brexd.com",
    since: 2007,
    team: "85+",
  },
  {
    city: "Shanghai",
    country: "China",
    role: "Operações Ásia",
    address: "88 Century Avenue, Tower 2, 38F",
    phone: "+86 21 5888 0192",
    email: "shanghai@brexd.com",
    since: 2013,
    team: "85+",
  },
];

/* ════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════ */

export default function Home2Page() {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  /* Auto-rotate segments */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory"
      style={{ scrollBehavior: "smooth" }}
    >
      {/* ════════════════════════════════════════
          SECTION 1 — HERO
          ════════════════════════════════════════ */}
      <Section className="bg-white" id="hero">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                variants={fadeUp}
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 border border-brand-navy/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <span className="text-sm font-medium text-brand-navy/70">
                  Soluções Globais Integradas
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-brand-navy leading-[1.05] tracking-tight"
              >
                Comércio Global,{" "}
                <span className="text-gradient-gold">Engenharia</span> e{" "}
                <span className="text-brand-green">Tecnologia</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed"
              >
                Empresa multinacional conectando Brasil, EUA e China através
                de soluções integradas em exportação, importação, engenharia,
                agronegócio e tecnologia.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex items-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-navy-light transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Fale Conosco
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 text-brand-navy font-semibold border border-brand-navy/15 rounded-xl hover:bg-brand-navy/5 transition-all"
                >
                  Conheça a BREXD
                </Link>
              </motion.div>

              {/* Floating rotating badge */}
              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-12 flex items-center gap-6"
              >
                {segments.slice(0, 5).map((seg) => {
                  const Icon = seg.icon;
                  return (
                    <div
                      key={seg.key}
                      className="group relative flex items-center justify-center w-12 h-12 rounded-xl border border-gray-100 hover:border-transparent hover:shadow-lg transition-all cursor-pointer"
                      style={{ backgroundColor: seg.color + "08" }}
                      title={seg.title}
                    >
                      <Icon className="w-5 h-5" style={{ color: seg.color }} />
                    </div>
                  );
                })}
              </motion.div>
            </div>

            {/* Right: Images composition */}
            <div className="relative">
              <motion.div variants={scaleIn} custom={1} className="relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80"
                    alt="Porto de containers"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent" />
                </div>
              </motion.div>

              {/* Overlapping second image */}
              <motion.div
                variants={scaleIn}
                custom={2}
                className="absolute -bottom-8 -right-4 lg:right-[-30px] z-20 w-[220px] lg:w-[260px]"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/15 border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                    alt="Engenharia"
                    className="w-full h-[160px] lg:h-[180px] object-cover"
                  />
                </div>
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                variants={scaleIn}
                custom={3}
                className="absolute top-6 -left-4 lg:left-[-20px] z-20 bg-white rounded-2xl shadow-xl shadow-brand-navy/8 p-5 border border-gray-50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-brand-navy">18</p>
                    <p className="text-xs text-gray-400 font-medium">Países</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating "since" badge */}
              <motion.div
                variants={fadeIn}
                custom={4}
                className="absolute bottom-12 left-8 z-30 bg-brand-gold px-4 py-2 rounded-full"
              >
                <span className="text-sm font-bold text-brand-navy">Desde 1997</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-300" />
          </motion.div>
        </motion.div>
      </Section>

      {/* ════════════════════════════════════════
          SECTION 2 — SEGMENTS (interactive cards)
          ════════════════════════════════════════ */}
      <Section className="bg-gray-50" id="segments">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <motion.div variants={fadeUp} custom={0} className="mb-12">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              Nossos Segmentos
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-tight">
              Cinco Pilares de{" "}
              <span className="text-gradient-gold">Excelência</span>
            </h2>
          </motion.div>

          {/* Segment cards row */}
          <motion.div variants={fadeUp} custom={1} className="flex flex-col lg:flex-row gap-4">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              const isActive = activeSegment === i;

              return (
                <motion.div
                  key={seg.key}
                  layout
                  onClick={() => setActiveSegment(i)}
                  className={cn(
                    "relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500",
                    isActive
                      ? "lg:flex-[3] min-h-[360px]"
                      : "lg:flex-[1] min-h-[80px] lg:min-h-[360px]"
                  )}
                  style={{ backgroundColor: isActive ? seg.color : "white" }}
                >
                  {isActive ? (
                    /* Expanded card */
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      {/* BG image overlay */}
                      <div className="absolute inset-0">
                        <img
                          src={seg.image}
                          alt={seg.title}
                          className="w-full h-full object-cover opacity-20"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: seg.color + "ee" }}
                        />
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {seg.title}
                            </h3>
                            <span className="text-sm text-white/50">{seg.statLabel}</span>
                          </div>
                          <span className="ml-auto text-3xl font-black text-brand-gold">
                            {seg.stat}
                          </span>
                        </div>

                        <p className="text-white/80 leading-relaxed max-w-lg mb-6">
                          {seg.desc}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                          {seg.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs font-medium text-white/90"
                            >
                              <CheckCircle2 className="w-3 h-3" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="relative z-10">
                        <Link
                          href={seg.href as "/segments/export"}
                          className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-navy font-bold text-sm rounded-xl hover:bg-brand-gold-light transition-all"
                        >
                          Explorar Segmento
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  ) : (
                    /* Collapsed card */
                    <div className="h-full p-6 flex lg:flex-col items-center lg:items-center lg:justify-center gap-3 border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: seg.color + "10" }}
                      >
                        <Icon className="w-5 h-5" style={{ color: seg.color }} />
                      </div>
                      <span className="text-sm font-bold text-brand-navy lg:text-center">
                        {seg.title}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          SECTION 3 — STATS (oversized numbers)
          ════════════════════════════════════════ */}
      <Section className="bg-white" id="stats">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Statement */}
            <div>
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-sm font-medium text-gray-400 uppercase tracking-widest"
              >
                Nossos Números
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-tight"
              >
                Resultados que{" "}
                <span className="text-gradient-gold">Falam</span> por Si
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg"
              >
                Há mais de 28 anos conectamos mercados, entregamos projetos
                e construímos futuros. Nossos números refletem a confiança
                de parceiros em 3 continentes.
              </motion.p>

              {/* Quality + Reliability boxes */}
              <motion.div variants={fadeUp} custom={3} className="flex gap-4 mt-10">
                <div className="flex-1 p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                  <h4 className="text-sm font-bold text-brand-navy mb-1">Qualidade</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Conquistamos a confiança dos nossos clientes através de serviço de qualidade excepcional.
                  </p>
                </div>
                <div className="flex-1 p-5 rounded-2xl border border-gray-100 bg-gray-50/50">
                  <h4 className="text-sm font-bold text-brand-navy mb-1">Confiabilidade</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Garantimos segurança na carga em todas as etapas da entrega.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: Giant numbers */}
            <div>
              <motion.div
                variants={fadeUp}
                custom={1}
                className="grid grid-cols-2 gap-8"
              >
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} variants={fadeUp} custom={i + 1}>
                    <div className="text-center lg:text-left">
                      <p className="text-6xl md:text-7xl lg:text-8xl font-black text-brand-navy leading-none tracking-tighter">
                        <CountUp end={stat.value} duration={2.5} />
                        <span className="text-brand-gold">{stat.suffix}</span>
                      </p>
                      <p className="mt-3 text-sm text-gray-400 font-medium whitespace-pre-line">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          SECTION 4 — ABOUT / VALUE PROPOSITION
          ════════════════════════════════════════ */}
      <Section className="bg-gray-50" id="about">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <motion.span
            variants={fadeUp}
            custom={0}
            className="text-sm font-medium text-gray-400 uppercase tracking-widest"
          >
            Sobre a BREXD
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-tight max-w-4xl"
          >
            Parceiro Global dos Maiores{" "}
            <span className="text-gradient-gold">Líderes do Mercado</span>{" "}
            Há Mais de 28 Anos!
          </motion.h2>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Image side */}
            <motion.div
              variants={scaleIn}
              custom={2}
              className="lg:col-span-2 relative rounded-3xl overflow-hidden min-h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                alt="Escritório BREXD"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
            </motion.div>

            {/* Feature cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Presença em 3 Continentes",
                  desc: "Escritórios estratégicos em São Paulo, Miami e Shanghai garantem operações 24h em todos os fusos horários.",
                  icon: Globe2,
                },
                {
                  title: "Entrega Rápida e Eficiente",
                  desc: "Processos otimizados garantem que seus produtos cheguem ao destino com agilidade, segurança e conformidade total.",
                  icon: Ship,
                },
                {
                  title: "Transparência Total",
                  desc: "Rastreamento em tempo real, relatórios detalhados e comunicação proativa em cada etapa do processo.",
                  icon: CheckCircle2,
                },
                {
                  title: "Tecnologia de Ponta",
                  desc: "Plataformas proprietárias de IoT, IA e analytics que otimizam operações e geram insights acionáveis.",
                  icon: Cpu,
                },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeUp}
                    custom={i + 2}
                    className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors">
                      <Icon className="w-5 h-5 text-brand-navy group-hover:text-brand-gold transition-colors" />
                    </div>
                    <h4 className="text-base font-bold text-brand-navy mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          SECTION 5 — FEATURED PROJECTS (list style)
          ════════════════════════════════════════ */}
      <Section className="bg-white" id="projects">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <div className="flex items-end justify-between mb-14">
            <div>
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-sm font-medium text-gray-400 uppercase tracking-widest"
              >
                Projetos Recentes
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy"
              >
                Projetos em Destaque
              </motion.h2>
            </div>
            <motion.div variants={fadeIn} custom={2} className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setActiveProject((p) => (p - 1 + projects.length) % projects.length)}
                className="p-3 rounded-full border border-gray-200 hover:border-brand-navy hover:bg-brand-navy hover:text-white text-gray-400 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveProject((p) => (p + 1) % projects.length)}
                className="p-3 rounded-full bg-brand-navy text-white hover:bg-brand-navy-light transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Project list */}
          <motion.div variants={fadeUp} custom={2} className="space-y-0 divide-y divide-gray-100">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeUp}
                custom={i + 2}
                className={cn(
                  "group grid grid-cols-1 md:grid-cols-[120px_1fr_1fr_auto] gap-6 items-center py-8 cursor-pointer transition-all duration-300",
                  activeProject === i ? "opacity-100" : "opacity-60 hover:opacity-100"
                )}
                onClick={() => setActiveProject(i)}
              >
                {/* Thumbnail */}
                <div className="w-[120px] h-[80px] rounded-xl overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Title + Category */}
                <div>
                  <span className="text-xs text-gray-400 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed hidden md:block">
                  {project.desc}
                </p>

                {/* Date + Value */}
                <div className="text-right">
                  <p className="text-2xl font-black text-brand-navy">{project.value}</p>
                  <span className="text-xs text-gray-400">{project.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={6} className="mt-10 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-gold transition-colors"
            >
              Ver Todos os Projetos
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          SECTION 6 — PARTNERS
          ════════════════════════════════════════ */}
      <Section className="bg-gray-50" id="partners">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
            <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
              Parceiros e Clientes
            </span>
            <h2 className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy">
              Quem Confia na <span className="text-gradient-gold">BREXD</span>
            </h2>
          </motion.div>

          {/* Marquee rows */}
          <motion.div variants={fadeUp} custom={1} className="space-y-6 overflow-hidden">
            {partnerRows.map((row, rowIdx) => (
              <div key={rowIdx} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                <div
                  className="flex gap-6"
                  style={{
                    animation: `${rowIdx === 0 ? "scroll-left" : "scroll-right"} ${rowIdx === 0 ? "30s" : "35s"} linear infinite`,
                  }}
                >
                  {[...row, ...row, ...row].map((name, i) => (
                    <div
                      key={`${name}-${i}`}
                      className="flex-shrink-0 flex items-center justify-center px-10 py-5 bg-white rounded-2xl border border-gray-100 hover:border-brand-navy/10 hover:shadow-md transition-all"
                    >
                      <span className="text-base font-bold text-gray-400 hover:text-brand-navy whitespace-nowrap transition-colors">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ════════════════════════════════════════
          SECTION 7 — GLOBAL PRESENCE + CTA
          ════════════════════════════════════════ */}
      <Section className="bg-white" id="presence">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: CTA */}
            <div className="flex flex-col justify-center">
              <motion.span
                variants={fadeUp}
                custom={0}
                className="text-sm font-medium text-gray-400 uppercase tracking-widest"
              >
                Presença Global
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="mt-3 text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-tight"
              >
                Escritórios em{" "}
                <span className="text-gradient-gold">3 Continentes</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="mt-6 text-lg text-gray-500 leading-relaxed"
              >
                Com equipes em São Paulo, Miami e Shanghai, garantimos
                operações 24 horas, em todos os fusos horários, com
                conhecimento profundo de cada mercado local.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  Fale Conosco
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>

            {/* Right: Office cards */}
            <div className="space-y-5">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  variants={fadeUp}
                  custom={i + 1}
                  className="group relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy/10 rounded-l-2xl group-hover:bg-brand-gold transition-colors duration-300" />

                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy">
                        {office.city}, {office.country}
                      </h3>
                      <span className="text-xs font-medium text-brand-gold uppercase tracking-wider">
                        {office.role}
                      </span>
                    </div>
                    <span className="text-sm text-gray-300 font-medium">
                      Desde {office.since}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {office.address}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      {office.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      {office.email}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
