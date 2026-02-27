"use client";

import { useState, useEffect, useTransition } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const flags: Record<string, { emoji: string; label: string }> = {
  "pt-BR": { emoji: "🇧🇷", label: "Português" },
  en: { emoji: "🇺🇸", label: "English" },
  zh: { emoji: "🇨🇳", label: "中文" },
};

const segmentHrefs = [
  "/segments/export",
  "/segments/import",
  "/segments/engineering",
  "/segments/agribusiness",
  "/segments/technology",
] as const;

const segmentKeys = ["export", "import", "engineering", "agribusiness", "technology"] as const;

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");
  const [, startTransition] = useTransition();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [segmentsOpen, setSegmentsOpen] = useState(false);

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const showDark = isHomePage && !scrolled;

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale as "pt-BR" | "en" | "zh" });
    });
  };

  const navLinks = [
    { label: t("home"), href: "/" as const },
    { label: t("about"), href: "/about" as const },
    {
      label: t("segments"),
      href: "/segments" as const,
      children: segmentKeys.map((key, i) => ({
        label: t(key),
        href: segmentHrefs[i],
      })),
    },
    { label: t("projects"), href: "/projects" as const },
    { label: t("partners"), href: "/partners" as const },
    { label: t("blog"), href: "/blog" as const },
    { label: t("contact"), href: "/contact" as const },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
          : isHomePage
            ? "bg-transparent"
            : "bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1340px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className={cn(
            "text-[22px] font-black tracking-tight transition-colors",
            showDark ? "text-white" : "text-brand-navy"
          )}>
            BRE<span className="text-brand-gold">X</span>D
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
            const hasChildren = "children" in link && link.children;

            if (hasChildren) {
              return (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setSegmentsOpen(true)}
                  onMouseLeave={() => setSegmentsOpen(false)}
                >
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 text-[13px] font-medium transition-colors rounded-md",
                      isActive
                        ? showDark ? "text-brand-gold" : "text-brand-navy"
                        : showDark ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-gray-900"
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn("w-3 h-3 transition-transform", segmentsOpen && "rotate-180")} />
                  </button>

                  <AnimatePresence>
                    {segmentsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-52 rounded-lg bg-white border border-gray-100 shadow-lg p-1.5"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "flex items-center px-3.5 py-2.5 text-[13px] rounded-md transition-colors",
                              pathname === child.href
                                ? "text-brand-navy font-medium bg-gray-50"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3.5 py-2 text-[13px] font-medium transition-colors rounded-md",
                  isActive
                    ? showDark ? "text-brand-gold" : "text-brand-navy"
                    : showDark ? "text-white/80 hover:text-white" : "text-gray-500 hover:text-gray-900"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side — language switcher + CTA */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Language switcher */}
          <div className="flex items-center gap-1 mr-1">
            {Object.entries(flags).map(([loc, { emoji }]) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={cn(
                  "text-lg w-8 h-8 flex items-center justify-center rounded-md transition-all",
                  locale === loc
                    ? "bg-brand-gold/15 ring-1 ring-brand-gold/40 scale-110"
                    : showDark
                      ? "opacity-50 hover:opacity-100 hover:bg-white/10"
                      : "opacity-40 hover:opacity-100 hover:bg-gray-100"
                )}
                title={flags[loc].label}
              >
                {emoji}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            className="px-5 py-2 text-[13px] font-semibold bg-brand-green text-white rounded-md hover:bg-brand-green-light transition-colors"
          >
            {t("getInTouch")}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn("lg:hidden p-2", showDark ? "text-white" : "text-gray-700")}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <nav className="flex flex-col p-4 gap-0.5">
              {navLinks.map((link) => {
                const hasChildren = "children" in link && link.children;

                if (hasChildren) {
                  return (
                    <div key={link.href}>
                      <button
                        onClick={() => setSegmentsOpen(!segmentsOpen)}
                        className="flex w-full items-center justify-between px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 rounded-md"
                      >
                        {link.label}
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", segmentsOpen && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {segmentsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden ml-3"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-3 py-2 text-sm text-gray-400 hover:text-gray-700"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 rounded-md"
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile language switcher */}
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 px-3 mb-3">
                  {Object.entries(flags).map(([loc, { emoji, label }]) => (
                    <button
                      key={loc}
                      onClick={() => switchLocale(loc)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-all",
                        locale === loc
                          ? "bg-brand-gold/15 ring-1 ring-brand-gold/40 font-semibold text-brand-navy"
                          : "text-gray-500 hover:bg-gray-100"
                      )}
                    >
                      <span className="text-base">{emoji}</span>
                      <span className="text-xs">{label}</span>
                    </button>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 text-center text-sm font-semibold bg-brand-navy text-white rounded-md"
                >
                  {t("getInTouch")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
