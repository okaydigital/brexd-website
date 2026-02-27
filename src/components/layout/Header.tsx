"use client";

import { useState, useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Início", href: "/" as const },
  { label: "Sobre", href: "/about" as const },
  {
    label: "Segmentos",
    href: "/segments" as const,
    children: [
      { label: "Exportação", href: "/segments/export" as const },
      { label: "Importação", href: "/segments/import" as const },
      { label: "Engenharia", href: "/segments/engineering" as const },
      { label: "Agronegócio", href: "/segments/agribusiness" as const },
      { label: "Tecnologia", href: "/segments/technology" as const },
    ],
  },
  { label: "Projetos", href: "/projects" as const },
  { label: "Parceiros", href: "/partners" as const },
  { label: "Insights", href: "/blog" as const },
  { label: "Contato", href: "/contact" as const },
];

export default function Header() {
  const pathname = usePathname();
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
                  key={link.label}
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
                            key={child.label}
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
                key={link.label}
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

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2.5">
          <Link
            href="/contact"
            className="px-5 py-2 text-[13px] font-semibold bg-brand-green text-white rounded-md hover:bg-brand-green-light transition-colors"
          >
            Fale Conosco
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
                    <div key={link.label}>
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
                                key={child.label}
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
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2.5 text-sm text-gray-600 hover:text-gray-900 rounded-md"
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-3 pt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 text-center text-sm font-semibold bg-brand-navy text-white rounded-md"
                >
                  Fale Conosco
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
