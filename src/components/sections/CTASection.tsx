"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt="Skyline corporativo"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-navy/92" />
        {/* Gold accent diagonal */}
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1340px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-5 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20">
              <span className="text-[11px] uppercase tracking-[0.15em] text-brand-gold font-bold">
                Próximo Passo
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Vamos construir o futuro{" "}
              <span className="text-brand-gold">juntos?</span>
            </h2>

            <p className="mt-5 text-base text-white/50 max-w-lg mx-auto leading-relaxed">
              Descubra como a BREXD pode impulsionar seus negócios entre continentes.
              Nossa equipe está pronta para atender você.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-brand-gold text-brand-navy text-sm font-bold rounded hover:bg-brand-gold-light transition-colors"
              >
                Enviar Mensagem
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="mailto:contato@brexd.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 text-sm font-medium rounded hover:bg-white/5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@brexd.com
              </a>
              <a
                href="tel:+551130458800"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 text-sm font-medium rounded hover:bg-white/5 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +55 (11) 3045-8800
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
