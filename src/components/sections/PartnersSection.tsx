"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";

const partnersRow1 = [
  "Petrobras", "Vale", "JBS", "COFCO", "Caterpillar",
  "Siemens", "Huawei", "Bunge", "Cargill", "KPMG",
];

const partnersRow2 = [
  "Embraer", "WEG", "Natura", "Raízen", "Totvs",
  "SLC Agrícola", "BRF", "Suzano", "Votorantim", "Gerdau",
];

function LogoBox({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-16 px-8 mx-3 bg-gray-50 border border-gray-100 rounded-lg shrink-0">
      <span className="text-[11px] font-bold text-gray-400 tracking-wider uppercase whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="py-20 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10 mb-10">
        <ScrollReveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-gold" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                Parceiros & Clientes
              </span>
              <div className="h-px w-10 bg-brand-gold" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              Empresas que <span className="text-brand-gold">confiam</span> na BREXD
            </h2>
            <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
              Multinacionais e líderes de mercado que escolhem a BREXD como parceira estratégica.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee row 1 - scroll left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div
          className="flex"
          style={{ animation: "scroll-left 30s linear infinite", width: "max-content" }}
        >
          {[...partnersRow1, ...partnersRow1, ...partnersRow1].map((name, i) => (
            <LogoBox key={`r1-${i}`} name={name} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 - scroll right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div
          className="flex"
          style={{ animation: "scroll-right 35s linear infinite", width: "max-content" }}
        >
          {[...partnersRow2, ...partnersRow2, ...partnersRow2].map((name, i) => (
            <LogoBox key={`r2-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
