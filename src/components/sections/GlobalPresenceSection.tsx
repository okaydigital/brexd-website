"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const offices = [
  {
    city: "São Paulo",
    country: "Brasil",
    role: "Sede Global",
    year: "1997",
    team: "180+",
    image: "https://images.unsplash.com/photo-1554232456-8727aae0cfa4?w=800&q=80",
    desc: "Centro administrativo, engenharia, agronegócio e hub de tecnologia.",
  },
  {
    city: "Miami",
    country: "Estados Unidos",
    role: "Hub Américas",
    year: "2007",
    team: "85+",
    image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&q=80",
    desc: "Hub de comércio internacional e compliance para as Américas.",
  },
  {
    city: "Shanghai",
    country: "China",
    role: "Operações Ásia",
    year: "2013",
    team: "85+",
    image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?w=800&q=80",
    desc: "Centro de sourcing, logística e porta de entrada para a Ásia.",
  },
];

export default function GlobalPresenceSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-gold">
      <div className="mx-auto max-w-[1340px] px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-brand-navy" />
              <span className="text-xs uppercase tracking-[0.2em] text-brand-navy font-semibold">
                Onde Estamos
              </span>
              <div className="h-px w-10 bg-brand-navy" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight">
              Presença estratégica em três continentes
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offices.map((office, i) => (
            <ScrollReveal key={office.city} delay={i * 0.12}>
              <div className="group rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={`Escritório ${office.city}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-brand-gold" />
                    <span className="text-lg font-black text-white">{office.city}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wider">
                      {office.role}
                    </span>
                    <span className="text-[11px] text-gray-400">Desde {office.year}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{office.desc}</p>
                  <div className="mt-3 pt-3 border-t border-gray-50 flex items-center gap-1.5">
                    <span className="text-sm font-bold text-brand-navy">{office.team}</span>
                    <span className="text-xs text-gray-400">colaboradores</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
