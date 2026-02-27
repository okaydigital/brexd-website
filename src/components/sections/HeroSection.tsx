"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    video: "https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4",
    poster: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=1920&q=80",
    tag: "Exportação & Importação",
    title: "Movimentamos mais de",
    highlight: "12 mil containers",
    titleEnd: "por ano entre 3 continentes",
    desc: "Operações integradas de exportação e importação com gestão completa de containers, desembaraço aduaneiro e logística porta a porta em 18 países.",
    cta: "Conheça nossas operações",
    href: "/segments/export" as const,
    accent: "#1B7A3D",
  },
  {
    video: "https://videos.pexels.com/video-files/4430419/4430419-uhd_2560_1440_24fps.mp4",
    poster: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1920&q=80",
    tag: "Engenharia & Infraestrutura",
    title: "Fornecemos insumos para",
    highlight: "2.400 km de rodovias",
    titleEnd: "e obras de infraestrutura pesada",
    desc: "Produção e distribuição de insumos asfálticos, locação de máquinas pesadas e engenharia aplicada a grandes obras rodoviárias e industriais.",
    cta: "Veja nossos projetos",
    href: "/segments/engineering" as const,
    accent: "#E8B624",
  },
  {
    video: "https://videos.pexels.com/video-files/3370949/3370949-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1920&q=80",
    tag: "Agronegócio",
    title: "Processamos",
    highlight: "860 mil toneladas",
    titleEnd: "de fertilizantes e proteína animal",
    desc: "Da produção de fertilizantes à operação de frigoríficos de aves, integramos toda a cadeia do agronegócio brasileiro com destino aos maiores mercados do mundo.",
    cta: "Conheça o agro BREXD",
    href: "/segments/agribusiness" as const,
    accent: "#2E8B57",
  },
  {
    video: "https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_25fps.mp4",
    poster: "https://images.unsplash.com/photo-1593764592116-bfb2a97c642a?w=1920&q=80",
    tag: "Tecnologia & Mobilidade",
    title: "Mais de",
    highlight: "35 mil scooters",
    titleEnd: "elétricos distribuídos na América Latina",
    desc: "Fabricação, importação e distribuição de patinetes elétricos e scooters para o mercado latino-americano, com assistência técnica e peças originais.",
    cta: "Explore nossas soluções",
    href: "/segments/technology" as const,
    accent: "#1E56A0",
  },
];

const INTERVAL = 8000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setProgress(0);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  useEffect(() => {
    const step = 50;
    const tick = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrent((c) => (c + 1) % slides.length);
          return 0;
        }
        return prev + (step / INTERVAL) * 100;
      });
    }, step);
    return () => clearInterval(tick);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] overflow-hidden bg-black">
      {/* Video backgrounds */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <video
            ref={(el) => { videoRefs.current[i] = el; }}
            className="absolute inset-0 w-full h-full object-cover"
            src={s.video}
            poster={s.poster}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "none"}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25" />

      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-20 bg-gradient-to-r from-brand-green via-brand-gold to-brand-green" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-[1340px] w-full px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: slide.accent }} />
                <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-white/80">
                  {slide.tag}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
              >
                {slide.title}{" "}
                <span className="text-brand-gold">{slide.highlight}</span>{" "}
                {slide.titleEnd}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-5 text-sm md:text-base text-white/55 max-w-lg leading-relaxed"
              >
                {slide.desc}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-7 flex flex-wrap items-center gap-3"
              >
                <Link
                  href={slide.href}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 bg-brand-gold text-brand-navy text-sm font-bold rounded hover:bg-brand-gold-light transition-colors"
                >
                  {slide.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/80 text-sm font-medium rounded hover:bg-white/10 transition-colors"
                >
                  Fale Conosco
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all"
                style={{ width: i === current ? "48px" : "24px", backgroundColor: i === current ? "transparent" : "rgba(255,255,255,0.2)" }}
              >
                {i === current && (
                  <>
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                    <div className="absolute inset-y-0 left-0 bg-brand-gold rounded-full" style={{ width: `${progress}%` }} />
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
