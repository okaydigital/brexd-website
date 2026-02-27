"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
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
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import CountUp from "@/components/animations/CountUp";
import { cn } from "@/lib/utils";

/* ════════════════════════════════════════════
   EASING + ANIMATION HELPERS
   ════════════════════════════════════════════ */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* Animated wrapper that triggers children when visible */
function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const offsets = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { y: 0, x: -50 },
    right: { y: 0, x: 50 },
    none: { y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ════════════════════════════════════════════
   DATA
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
    desc: "Conectamos a excelência brasileira a mais de 18 países, gerenciando commodities agrícolas e produtos manufaturados com 98,7% de pontualidade.",
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
    desc: "Acesso direto aos principais hubs de manufatura do mundo. Sourcing global de máquinas, hardware tecnológico e matérias-primas.",
    highlights: ["200+ fornecedores", "15 dias desembaraço", "8 países de origem"],
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
    desc: "Projetos de construção e infraestrutura de classe mundial, com segurança zero incidentes e certificação LEED.",
    highlights: ["120+ projetos entregues", "Zero incidentes 2024", "15+ LEED"],
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
    desc: "Do campo ao porto, negociamos soja, milho, algodão e café com rastreabilidade total e 500 mil ton de capacidade.",
    highlights: ["2.500+ produtores", "12 instalações", "Créditos de carbono"],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    key: "technology",
    title: "Tecnologia",
    icon: Cpu,
    color: "#1E56A0",
    href: "/segments/technology",
    stat: "50+",
    statLabel: "Sistemas",
    desc: "Plataformas de IoT, IA e software personalizado que impulsionam operações com 99,9% de disponibilidade.",
    highlights: ["15.000+ usuários", "99,9% uptime", "IA & ML"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
];

const stats = [
  { value: 28, suffix: "+", label: "Anos de Experiência" },
  { value: 500, suffix: "+", label: "Projetos Entregues" },
  { value: 18, suffix: "", label: "Países Atendidos" },
  { value: 350, suffix: "+", label: "Colaboradores Globais" },
];

const projects = [
  {
    title: "Terminal Porto Atlântico",
    category: "Engenharia",
    categoryColor: "#E8B624",
    date: "2023",
    desc: "Terminal portuário de última geração em Santos com capacidade para 2 milhões de TEUs anuais.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
    value: "$180M",
  },
  {
    title: "Rota da Soja para a China",
    category: "Exportação",
    categoryColor: "#0D2137",
    date: "2024",
    desc: "Operação de exportação em larga escala conectando produtores brasileiros a processadores chineses.",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80",
    value: "$450M/ano",
  },
  {
    title: "Plataforma AgroVision",
    category: "Tecnologia",
    categoryColor: "#1E56A0",
    date: "2024",
    desc: "Sistema de monitoramento agrícola com IoT e IA servindo mais de 2.500 fazendas.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    value: "$12M",
  },
  {
    title: "Rodovia BR-163",
    category: "Engenharia",
    categoryColor: "#E8B624",
    date: "2024",
    desc: "Expansão e pavimentação de 240km da principal rota de escoamento de grãos.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80",
    value: "$310M",
  },
];

const partnerRows = [
  ["Petrobras", "Vale", "JBS", "COFCO", "Caterpillar", "Siemens", "Huawei", "Bunge", "Cargill", "KPMG"],
  ["Embraer", "WEG", "Natura", "Raízen", "Totvs", "SLC Agrícola", "BRF", "Suzano", "Votorantim", "Gerdau"],
];

const offices = [
  { city: "São Paulo", country: "Brasil", role: "Sede Global", address: "Av. Paulista, 1578 - Bela Vista", phone: "+55 11 3042-8800", email: "sp@brexd.com", since: 1997, team: "180+" },
  { city: "Miami", country: "EUA", role: "Operações Américas", address: "1395 Brickell Ave, Suite 800", phone: "+1 305 555 0192", email: "miami@brexd.com", since: 2007, team: "85+" },
  { city: "Shanghai", country: "China", role: "Operações Ásia", address: "88 Century Avenue, Tower 2, 38F", phone: "+86 21 5888 0192", email: "shanghai@brexd.com", since: 2013, team: "85+" },
];

const features = [
  { title: "Presença em 3 Continentes", desc: "Escritórios em São Paulo, Miami e Shanghai garantem operações 24h em todos os fusos.", icon: Globe2 },
  { title: "Entrega Rápida e Eficiente", desc: "Processos otimizados que garantem agilidade, segurança e conformidade total.", icon: Zap },
  { title: "Transparência Total", desc: "Rastreamento em tempo real e comunicação proativa em cada etapa do processo.", icon: Shield },
  { title: "Tecnologia de Ponta", desc: "Plataformas de IoT, IA e analytics que otimizam operações globais.", icon: TrendingUp },
];

/* ════════════════════════════════════════════
   NAV DOTS (side navigation)
   ════════════════════════════════════════════ */
const sectionIds = ["hero", "segments", "stats", "about", "projects", "partners", "presence"];
const sectionLabels = ["Início", "Segmentos", "Números", "Sobre", "Projetos", "Parceiros", "Contato"];

function NavDots({ active }: { active: number }) {
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-end gap-4">
      {sectionIds.map((id, i) => (
        <a
          key={id}
          href={`#${id}`}
          className="group flex items-center gap-3"
        >
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0",
              active === i ? "text-brand-navy opacity-100 translate-x-0" : "text-gray-400"
            )}
          >
            {sectionLabels[i]}
          </span>
          <span
            className={cn(
              "block rounded-full transition-all duration-300",
              active === i
                ? "w-3 h-3 bg-brand-gold shadow-lg shadow-brand-gold/30"
                : "w-2 h-2 bg-gray-300 group-hover:bg-brand-navy"
            )}
          />
        </a>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════ */
export default function Home2Page() {
  const [activeSegment, setActiveSegment] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  /* Auto-rotate segments */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSegment((prev) => (prev + 1) % segments.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* Track active section for nav dots */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx >= 0) setActiveSection(idx);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Parallax for hero */
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(heroProgress, [0, 1], [0, 120]);
  const heroTextY = useTransform(heroProgress, [0, 1], [0, -40]);

  return (
    <>
      <NavDots active={activeSection} />

      {/* ══════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════ */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center bg-white overflow-hidden pt-[72px]"
      >
        {/* Subtle background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-brand-gold/[0.04] blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-green/[0.03] blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1340px] px-6 lg:px-10 w-full py-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text */}
            <motion.div style={{ y: heroTextY }}>
              <Reveal delay={0.1}>
                <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-brand-navy/[0.04] border border-brand-navy/[0.08] mb-8">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-gold" />
                  </span>
                  <span className="text-sm font-medium text-brand-navy/60">
                    Soluções Globais Integradas
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-brand-navy leading-[1.08] tracking-tight">
                  Comércio Global,{" "}
                  <span className="text-gradient-gold">Engenharia</span>{" "}
                  <br className="hidden sm:block" />e{" "}
                  <span className="text-brand-green">Tecnologia</span>
                </h1>
              </Reveal>

              <Reveal delay={0.35}>
                <p className="mt-7 text-lg text-gray-500 max-w-lg leading-relaxed">
                  Empresa multinacional conectando Brasil, EUA e China através
                  de soluções integradas em exportação, importação, engenharia,
                  agronegócio e tecnologia.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-8 py-4 bg-brand-navy text-white font-bold rounded-2xl hover:bg-brand-navy-light transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-brand-navy/15"
                  >
                    Fale Conosco
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 text-brand-navy font-semibold border-2 border-brand-navy/10 rounded-2xl hover:border-brand-navy/25 hover:bg-brand-navy/[0.03] transition-all duration-300"
                  >
                    Conheça a BREXD
                  </Link>
                </div>
              </Reveal>

              {/* Segment icons */}
              <Reveal delay={0.65}>
                <div className="mt-14 flex items-center gap-3">
                  {segments.map((seg, i) => {
                    const Icon = seg.icon;
                    return (
                      <motion.div
                        key={seg.key}
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center justify-center w-12 h-12 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 cursor-pointer"
                        style={{ backgroundColor: seg.color + "08" }}
                        title={seg.title}
                      >
                        <Icon className="w-5 h-5" style={{ color: seg.color }} />
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                          style={{ boxShadow: `0 8px 24px ${seg.color}20` }}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </Reveal>
            </motion.div>

            {/* Right: Images composition with parallax */}
            <motion.div style={{ y: heroImgY }} className="relative lg:h-[520px]">
              <Reveal delay={0.3} direction="right">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-navy/10">
                  <img
                    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&q=80"
                    alt="Porto de containers"
                    className="w-full h-[350px] lg:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
                </div>
              </Reveal>

              {/* Overlapping second image */}
              <Reveal delay={0.55} direction="up">
                <motion.div
                  className="absolute -bottom-6 right-4 lg:right-[-20px] z-20 w-[200px] lg:w-[240px]"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-2xl shadow-brand-navy/20 border-[5px] border-white">
                    <img
                      src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                      alt="Engenharia"
                      className="w-full h-[140px] lg:h-[160px] object-cover"
                    />
                  </div>
                </motion.div>
              </Reveal>

              {/* Floating stat card */}
              <Reveal delay={0.7} direction="left">
                <motion.div
                  className="absolute top-8 -left-2 lg:left-[-24px] z-20 bg-white rounded-2xl shadow-xl shadow-brand-navy/8 p-4 border border-gray-50"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-brand-green/10 flex items-center justify-center">
                      <Globe2 className="w-5 h-5 text-brand-green" />
                    </div>
                    <div>
                      <p className="text-2xl font-black text-brand-navy leading-none">18</p>
                      <p className="text-[11px] text-gray-400 font-medium mt-0.5">Países</p>
                    </div>
                  </div>
                </motion.div>
              </Reveal>

              {/* Floating badge */}
              <Reveal delay={0.85}>
                <motion.div
                  className="absolute bottom-16 left-10 z-30"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="bg-brand-gold px-5 py-2.5 rounded-full shadow-lg shadow-brand-gold/25">
                    <span className="text-sm font-bold text-brand-navy">Desde 1997</span>
                  </div>
                </motion.div>
              </Reveal>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-gray-400 font-semibold tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-4 h-4 text-gray-300" />
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — SEGMENTS (accordion)
          ══════════════════════════════════════ */}
      <section id="segments" className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <Reveal>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
              Nossos Segmentos
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl lg:text-[3.5rem] font-black text-brand-navy leading-tight">
              Cinco Pilares de <span className="text-gradient-gold">Excelência</span>
            </h2>
          </Reveal>

          {/* Desktop: horizontal accordion */}
          <div className="mt-14 hidden lg:flex gap-3 h-[420px]">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              const isActive = activeSegment === i;
              return (
                <motion.div
                  key={seg.key}
                  animate={{ flex: isActive ? 4 : 1 }}
                  transition={{ duration: 0.6, ease: EASE }}
                  onClick={() => setActiveSegment(i)}
                  className="relative cursor-pointer rounded-3xl overflow-hidden"
                >
                  {/* Background image */}
                  <img
                    src={seg.image}
                    alt={seg.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    style={{ transform: isActive ? "scale(1.05)" : "scale(1.2)" }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isActive
                        ? `linear-gradient(to top, ${seg.color}f0, ${seg.color}b0 50%, ${seg.color}70)`
                        : `linear-gradient(to top, ${seg.color}e8, ${seg.color}cc)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-7">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {!isActive && (
                        <span className="text-sm font-bold text-white/80 [writing-mode:vertical-lr] rotate-180 mt-4">
                          {seg.title}
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                        >
                          <div className="flex items-end justify-between mb-4">
                            <h3 className="text-3xl font-black text-white">{seg.title}</h3>
                            <span className="text-3xl font-black text-brand-gold">{seg.stat}</span>
                          </div>

                          <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-md">
                            {seg.desc}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-6">
                            {seg.highlights.map((h) => (
                              <span key={h} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-[11px] font-medium text-white/90">
                                <CheckCircle2 className="w-3 h-3" />
                                {h}
                              </span>
                            ))}
                          </div>

                          <Link
                            href={seg.href as "/segments/export"}
                            className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-gold text-brand-navy font-bold text-sm rounded-xl hover:bg-brand-gold-light transition-all"
                          >
                            Explorar Segmento
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: vertical cards */}
          <div className="mt-10 lg:hidden space-y-4">
            {segments.map((seg, i) => {
              const Icon = seg.icon;
              const isActive = activeSegment === i;
              return (
                <motion.div
                  key={seg.key}
                  layout
                  onClick={() => setActiveSegment(i)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img src={seg.image} alt={seg.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${seg.color}ee, ${seg.color}bb)` }} />

                  <div className="relative z-10 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{seg.title}</h3>
                      </div>
                      <span className="text-xl font-black text-brand-gold">{seg.stat}</span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/70 text-sm mt-4 leading-relaxed">{seg.desc}</p>
                          <Link
                            href={seg.href as "/segments/export"}
                            className="group inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-brand-gold text-brand-navy font-bold text-sm rounded-xl"
                          >
                            Explorar
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — STATS (oversized numbers)
          ══════════════════════════════════════ */}
      <section id="stats" className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left */}
            <div>
              <Reveal>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
                  Nossos Números
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-3 text-3xl md:text-5xl lg:text-[3.5rem] font-black text-brand-navy leading-tight">
                  Resultados que <span className="text-gradient-gold">Falam</span> por Si
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-lg">
                  Há mais de 28 anos conectamos mercados, entregamos projetos
                  e construímos futuros em 3 continentes.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex gap-4 mt-10">
                  <div className="flex-1 p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-green" />
                    </div>
                    <h4 className="text-sm font-bold text-brand-navy mb-1">Qualidade</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Serviço de qualidade excepcional reconhecido por parceiros globais.
                    </p>
                  </div>
                  <div className="flex-1 p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center mb-3">
                      <Shield className="w-4 h-4 text-brand-gold" />
                    </div>
                    <h4 className="text-sm font-bold text-brand-navy mb-1">Confiabilidade</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Segurança e pontualidade em todas as etapas da operação.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Giant numbers */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.12}>
                  <div>
                    <p className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-brand-navy leading-none tracking-tighter">
                      <CountUp end={stat.value} duration={2.5} />
                      <span className="text-brand-gold">{stat.suffix}</span>
                    </p>
                    <p className="mt-2 text-sm text-gray-400 font-medium">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — ABOUT / VALUE PROPOSITION
          ══════════════════════════════════════ */}
      <section id="about" className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <Reveal>
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
              Sobre a BREXD
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-3 text-3xl md:text-5xl lg:text-[3.5rem] font-black text-brand-navy leading-tight max-w-4xl">
              Parceiro Global dos Maiores <span className="text-gradient-gold">Líderes do Mercado</span> Há Mais de 28 Anos
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
            <Reveal delay={0.2} direction="left" className="lg:col-span-2">
              <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-full group">
                <img
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                  alt="Escritório BREXD"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Escritórios em 3 Continentes</p>
                  <p className="text-white/60 text-sm mt-1">São Paulo, Miami e Shanghai</p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Reveal key={feature.title} delay={0.15 + i * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, transition: { duration: 0.25 } }}
                      className="h-full p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="w-11 h-11 rounded-xl bg-brand-navy/5 flex items-center justify-center mb-4 group-hover:bg-brand-gold/10 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
                      </div>
                      <h4 className="text-base font-bold text-brand-navy mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 5 — FEATURED PROJECTS
          ══════════════════════════════════════ */}
      <section id="projects" className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <Reveal>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
                  Projetos Recentes
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-3 text-3xl md:text-5xl lg:text-[3.5rem] font-black text-brand-navy">
                  Projetos em Destaque
                </h2>
              </Reveal>
            </div>
          </div>

          {/* Project cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-400"
                >
                  {/* Image */}
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-[11px] font-bold text-white backdrop-blur-sm"
                        style={{ backgroundColor: project.categoryColor + "cc" }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="text-2xl font-black text-white drop-shadow-lg">
                        {project.value}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-400 font-medium">{project.date}</span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5}>
            <div className="mt-12 text-center">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-navy/10 text-brand-navy font-bold rounded-2xl hover:border-brand-navy/25 hover:bg-brand-navy/[0.03] transition-all duration-300"
              >
                Ver Todos os Projetos
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 6 — PARTNERS
          ══════════════════════════════════════ */}
      <section id="partners" className="relative bg-gray-50 py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <Reveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
                Parceiros e Clientes
              </span>
              <h2 className="mt-3 text-3xl md:text-5xl lg:text-[3.5rem] font-black text-brand-navy">
                Quem Confia na <span className="text-gradient-gold">BREXD</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-5 overflow-hidden">
              {partnerRows.map((row, rowIdx) => (
                <div key={rowIdx} className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                  <div
                    className="flex gap-5"
                    style={{
                      animation: `${rowIdx === 0 ? "scroll-left" : "scroll-right"} ${rowIdx === 0 ? "35s" : "40s"} linear infinite`,
                    }}
                  >
                    {[...row, ...row, ...row].map((name, i) => (
                      <div
                        key={`${name}-${i}`}
                        className="flex-shrink-0 flex items-center justify-center px-8 py-4 bg-white rounded-2xl border border-gray-100 hover:border-brand-navy/10 hover:shadow-lg transition-all duration-300"
                      >
                        <span className="text-sm font-bold text-gray-400 hover:text-brand-navy whitespace-nowrap transition-colors duration-300">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 7 — GLOBAL PRESENCE + CTA
          ══════════════════════════════════════ */}
      <section id="presence" className="relative bg-white py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: CTA */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-[0.15em]">
                  Presença Global
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-3 text-3xl md:text-5xl lg:text-[3.5rem] font-black text-brand-navy leading-tight">
                  Escritórios em <span className="text-gradient-gold">3 Continentes</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                  Com equipes em São Paulo, Miami e Shanghai, garantimos
                  operações 24 horas com conhecimento profundo de cada mercado.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-2xl hover:bg-brand-gold-light transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-xl shadow-brand-gold/20"
                  >
                    Fale Conosco
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Office cards */}
            <div className="space-y-4">
              {offices.map((office, i) => (
                <Reveal key={office.city} delay={i * 0.12} direction="right">
                  <motion.div
                    whileHover={{ x: 8, transition: { duration: 0.25 } }}
                    className="group relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:border-transparent transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl transition-colors duration-300 bg-brand-navy/10 group-hover:bg-brand-gold" />

                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-brand-navy">
                          {office.city}, {office.country}
                        </h3>
                        <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider">
                          {office.role} &middot; {office.team} colaboradores
                        </span>
                      </div>
                      <span className="text-sm text-gray-300 font-medium shrink-0">
                        Desde {office.since}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {office.address}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5" /> {office.phone}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5" /> {office.email}
                      </span>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
