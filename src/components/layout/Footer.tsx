"use client";

import { Link } from "@/i18n/navigation";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      {/* Newsletter — fundo verde */}
      <div className="bg-brand-green">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Fique Atualizado</h3>
            <p className="text-white/70 text-sm mt-1">Receba insights sobre comércio global, engenharia e agronegócio.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Digite seu e-mail corporativo"
              className="flex-1 md:w-72 px-4 py-3 bg-white/15 border border-white/20 rounded-l-lg text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
            />
            <button className="px-5 py-3 bg-brand-gold text-brand-navy font-bold text-sm rounded-r-lg hover:bg-brand-gold-light transition-colors flex items-center gap-2">
              Inscrever-se
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-brand-navy text-white">
        <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <Link href="/" className="text-3xl font-black tracking-tight">
                BRE<span className="text-brand-gold">X</span>D
              </Link>
              <p className="mt-4 text-white/50 text-sm leading-relaxed">
                Conectando mercados, construindo futuros.
              </p>
              <div className="mt-6 flex gap-3">
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4 text-white/60" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" aria-label="Instagram">
                  <Instagram className="w-4 h-4 text-white/60" />
                </a>
              </div>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Empresa</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="/projects" className="text-sm text-white/60 hover:text-white transition-colors">Projetos</Link></li>
                <li><Link href="/partners" className="text-sm text-white/60 hover:text-white transition-colors">Parceiros</Link></li>
                <li><Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">Insights</Link></li>
              </ul>
            </div>

            {/* Segmentos */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Segmentos</h4>
              <ul className="space-y-3">
                <li><Link href="/segments/export" className="text-sm text-white/60 hover:text-white transition-colors">Exportação</Link></li>
                <li><Link href="/segments/import" className="text-sm text-white/60 hover:text-white transition-colors">Importação</Link></li>
                <li><Link href="/segments/engineering" className="text-sm text-white/60 hover:text-white transition-colors">Engenharia</Link></li>
                <li><Link href="/segments/agribusiness" className="text-sm text-white/60 hover:text-white transition-colors">Agronegócio</Link></li>
                <li><Link href="/segments/technology" className="text-sm text-white/60 hover:text-white transition-colors">Tecnologia</Link></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                  <span className="text-sm text-white/60">São Paulo, Brasil (Sede)</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                  <span className="text-sm text-white/60">Miami, EUA</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                  <span className="text-sm text-white/60">Shanghai, China</span>
                </li>
                <li className="flex items-start gap-2 mt-4">
                  <Mail className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                  <span className="text-sm text-white/60">contact@brexd.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-brand-gold shrink-0" />
                  <span className="text-sm text-white/60">+55 (11) 3045-8800</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-[1340px] px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">&copy; 2026 BREXD. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors">Política de Privacidade</Link>
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/60 transition-colors">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
