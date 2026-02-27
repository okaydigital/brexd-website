"use client";

import { useState, useMemo } from "react";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  TrendingUp,
  Wrench,
  Wheat,
  Cpu,
  Building2,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { getBlogPosts, type BlogPost } from "@/lib/blog-data";

const CATEGORIES = [
  { key: "all", label: "Todos" },
  { key: "global-trade", label: "Comércio Global" },
  { key: "engineering", label: "Engenharia" },
  { key: "agribusiness", label: "Agronegócio" },
  { key: "tech", label: "Tecnologia e Inovação" },
  { key: "company", label: "Notícias da Empresa" },
] as const;

const CATEGORY_COLORS: Record<string, string> = {
  "global-trade": "#0D2137",
  engineering: "#E8B624",
  agribusiness: "#2E8B57",
  tech: "#1E56A0",
  company: "#64748B",
};

const CATEGORY_BG_CLASSES: Record<string, string> = {
  "global-trade": "bg-[#0D2137] text-white",
  engineering: "bg-[#E8B624] text-brand-navy",
  agribusiness: "bg-[#2E8B57] text-white",
  tech: "bg-[#1E56A0] text-white",
  company: "bg-[#64748B] text-white",
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "global-trade": <TrendingUp className="w-4 h-4" />,
  engineering: <Wrench className="w-4 h-4" />,
  agribusiness: <Wheat className="w-4 h-4" />,
  tech: <Cpu className="w-4 h-4" />,
  company: <Building2 className="w-4 h-4" />,
};

const CATEGORY_LABELS: Record<string, string> = {
  "global-trade": "Comércio Global",
  engineering: "Engenharia",
  agribusiness: "Agronegócio",
  tech: "Tecnologia e Inovação",
  company: "Notícias da Empresa",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <ScrollReveal>
      <Link
        href={`/blog/${post.slug}`}
        className="group block relative overflow-hidden rounded-2xl bg-brand-navy text-white"
      >
        {/* Background pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
            style={{ backgroundColor: CATEGORY_COLORS[post.category] }}
          />
        </div>

        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1 max-w-2xl">
              {/* Category badge */}
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
                  CATEGORY_BG_CLASSES[post.category]
                )}
              >
                {CATEGORY_ICONS[post.category]}
                {CATEGORY_LABELS[post.category]}
              </span>

              {/* Label */}
              <div className="mt-4 flex items-center gap-2">
                <span className="px-2 py-0.5 bg-brand-gold/20 text-brand-gold rounded text-xs font-bold uppercase tracking-wider">
                  Destaque
                </span>
              </div>

              {/* Title */}
              <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-black leading-tight group-hover:text-brand-gold transition-colors duration-300">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="mt-4 text-white/60 text-base md:text-lg leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {post.author.name}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {post.readTime} min de leitura
                </span>
              </div>

              {/* CTA */}
              <div className="mt-8 inline-flex items-center gap-2 text-brand-gold font-semibold group-hover:gap-3 transition-all">
                Ler Artigo Completo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Decorative side element */}
            <div className="hidden lg:flex flex-col items-center gap-3 opacity-20">
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center"
                style={{
                  backgroundColor: CATEGORY_COLORS[post.category],
                }}
              >
                <span className="text-white scale-150">
                  {CATEGORY_ICONS[post.category]}
                </span>
              </div>
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent" />
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <ScrollReveal delay={index * 0.08}>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        {/* Color accent bar */}
        <div
          className="h-1 w-full"
          style={{ backgroundColor: CATEGORY_COLORS[post.category] }}
        />

        <div className="flex-1 p-6">
          {/* Category badge */}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider",
              CATEGORY_BG_CLASSES[post.category]
            )}
          >
            {CATEGORY_ICONS[post.category]}
            {CATEGORY_LABELS[post.category]}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-lg font-bold text-brand-navy leading-snug group-hover:text-seg-technology transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-2 text-gray-500 text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="px-6 pb-5 pt-0">
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-3">
              {/* Author avatar placeholder */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{
                  backgroundColor: CATEGORY_COLORS[post.category],
                }}
              >
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700">
                  {post.author.name}
                </p>
                <p className="text-[11px] text-gray-400">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDate(post.date).split(",")[0]}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}m
              </span>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredPosts = useMemo(
    () => getBlogPosts(activeCategory),
    [activeCategory]
  );

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden bg-brand-navy">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-seg-technology/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-sm text-white/70">
                BRE<span className="text-brand-gold font-bold">X</span>D Blog
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Insights{" "}
              <span className="text-gradient-gold">&</span>{" "}
              Análises
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              Perspectivas especializadas sobre comércio global, inovação em
              engenharia, tendências do agronegócio e tecnologia pela equipe de
              liderança da BREXD.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filters + Content */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {/* Category filter tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={cn(
                    "px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                    activeCategory === cat.key
                      ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured post */}
          {featuredPost && <FeaturedPost post={featuredPost} />}

          {/* Remaining posts grid */}
          {remainingPosts.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {remainingPosts.map((post, index) => (
                <PostCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">
                Nenhum post encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
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
              Fique à Frente do Mercado
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Receba nossos últimos insights sobre comércio global, engenharia e
              agronegócio diretamente no seu e-mail.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
