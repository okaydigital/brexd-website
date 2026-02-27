"use client";

import { useParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Share2,
  Linkedin,
  Twitter,
  Mail,
  TrendingUp,
  Wrench,
  Wheat,
  Cpu,
  Building2,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";
import { getBlogPost, getBlogPosts, type BlogPost } from "@/lib/blog-data";

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
  "global-trade": "Global Trade",
  engineering: "Engineering",
  agribusiness: "Agribusiness",
  tech: "Tech & Innovation",
  company: "Company News",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function RelatedPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex gap-4 p-4 rounded-lg bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all"
    >
      {/* Color accent */}
      <div
        className="w-1 rounded-full flex-shrink-0"
        style={{ backgroundColor: CATEGORY_COLORS[post.category] }}
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-bold text-brand-navy leading-snug group-hover:text-seg-technology transition-colors line-clamp-2">
          {post.title}
        </h4>
        <div className="mt-2 flex items-center gap-3 text-[11px] text-gray-400">
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
    </Link>
  );
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <section className="py-40 text-center">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <h1 className="text-4xl font-black text-brand-navy">
            Post Not Found
          </h1>
          <p className="mt-4 text-gray-500">
            The blog post you are looking for does not exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-navy-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  // Get related posts (same category, exclude current post)
  const relatedPosts = getBlogPosts(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

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
          <div
            className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
            style={{ backgroundColor: CATEGORY_COLORS[post.category] }}
          />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-gold/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
          <ScrollReveal>
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Posts
            </Link>
          </ScrollReveal>

          <div className="max-w-3xl">
            <ScrollReveal delay={0.1}>
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
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              {/* Title */}
              <h1 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                {post.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              {/* Excerpt */}
              <p className="mt-6 text-base md:text-lg text-white/50 leading-relaxed">
                {post.excerpt}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              {/* Author and meta info */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
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
                    <p className="text-sm font-semibold text-white">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-white/40">{post.author.role}</p>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-white/10" />

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Main content */}
            <article className="flex-1 max-w-3xl">
              <ScrollReveal>
                <div
                  className={cn(
                    "prose prose-lg max-w-none",
                    // Heading styles
                    "[&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:text-brand-navy [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-tight",
                    "[&_h3]:text-xl [&_h3]:md:text-2xl [&_h3]:font-bold [&_h3]:text-brand-navy [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:leading-snug",
                    // Paragraph styles
                    "[&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-5 [&_p]:text-base [&_p]:md:text-lg",
                    // First paragraph emphasis
                    "[&>p:first-of-type]:text-lg [&>p:first-of-type]:md:text-xl [&>p:first-of-type]:text-gray-700 [&>p:first-of-type]:leading-relaxed"
                  )}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              {/* Divider */}
              <div className="mt-12 mb-10 h-px bg-gray-200" />

              {/* Share buttons (decorative) */}
              <ScrollReveal>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <Share2 className="w-4 h-4" />
                    Share this article
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#0077B5] hover:text-white text-gray-500 flex items-center justify-center transition-all"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#1DA1F2] hover:text-white text-gray-500 flex items-center justify-center transition-all"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-brand-navy hover:text-white text-gray-500 flex items-center justify-center transition-all"
                      aria-label="Share via Email"
                    >
                      <Mail className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              {/* Author bio */}
              <ScrollReveal>
                <div className="mt-10 p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0"
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
                      <p className="text-base font-bold text-brand-navy">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.author.role} at BREXD
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </article>

            {/* Sidebar */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Back to blog */}
                <ScrollReveal>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-seg-technology transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    All Posts
                  </Link>
                </ScrollReveal>

                {/* Related posts */}
                {relatedPosts.length > 0 && (
                  <ScrollReveal delay={0.1}>
                    <div>
                      <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                        Related Articles
                      </h3>
                      <div className="space-y-3">
                        {relatedPosts.map((relPost) => (
                          <RelatedPostCard key={relPost.slug} post={relPost} />
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                {/* Categories navigation */}
                <ScrollReveal delay={0.2}>
                  <div>
                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                      Categories
                    </h3>
                    <div className="space-y-2">
                      {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                        <Link
                          key={key}
                          href="/blog"
                          className={cn(
                            "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all",
                            post.category === key
                              ? "bg-brand-navy text-white font-semibold"
                              : "text-gray-600 hover:bg-gray-100"
                          )}
                        >
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: CATEGORY_COLORS[key],
                            }}
                          />
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
              Ready to Work with BREXD?
            </h2>
            <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto">
              Connect with our team to explore how we can support your
              international trade, engineering, and agribusiness goals.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 mt-10 px-10 py-5 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl hover:bg-brand-gold-light transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
