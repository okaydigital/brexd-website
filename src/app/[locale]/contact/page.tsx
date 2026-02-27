"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
} from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/utils";

/* ───────── escritórios ───────── */
const offices = [
  {
    city: "São Paulo",
    tag: "Sede",
    address: "Av. Paulista, 1578 - Bela Vista\nSão Paulo, SP 01310-200, Brasil",
    phone: "+55 11 3042-8800",
    email: "sp@brexd.com",
    timezone: "GMT-3 (BRT)",
  },
  {
    city: "Miami",
    tag: null,
    address: "1395 Brickell Ave, Suite 800\nMiami, FL 33131, EUA",
    phone: "+1 305 555 0192",
    email: "miami@brexd.com",
    timezone: "GMT-5 (EST)",
  },
  {
    city: "Shanghai",
    tag: null,
    address: "88 Century Avenue, Tower 2, 38F\nPudong, Shanghai 200120, China",
    phone: "+86 21 5888 0192",
    email: "shanghai@brexd.com",
    timezone: "GMT+8 (CST)",
  },
];

/* ───────── opções de segmento ───────── */
const segmentOptions = [
  "Exportação",
  "Importação",
  "Engenharia",
  "Agronegócio",
  "Tecnologia",
];

/* ───────── componente ───────── */
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  /* campos do formulário */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [segment, setSegment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-32 md:py-44 overflow-hidden bg-brand-navy">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-gold/10 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] rounded-full bg-seg-technology/8 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Fale <span className="text-gradient-gold">Conosco</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
              Pronto para expandir sua presença global? Nossa equipe está aqui para ajudar.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Formulário + Escritórios ── */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* ── Esquerda: Formulário ── */}
            <ScrollReveal direction="left">
              <div className="p-8 md:p-10 rounded-2xl bg-white border border-gray-100 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-2">
                  Envie uma Mensagem
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Preencha o formulário e retornaremos em até 24 horas.
                </p>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 12 }}
                      >
                        <CheckCircle2 className="w-16 h-16 text-seg-import mb-6" />
                      </motion.div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        Mensagem Enviada!
                      </h3>
                      <p className="text-gray-500 max-w-sm">
                        Obrigado pelo contato. Nossa equipe analisará sua solicitação e responderá em breve.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setEmail("");
                          setCompany("");
                          setSegment("");
                          setMessage("");
                        }}
                        className="mt-8 text-sm font-semibold text-seg-technology hover:underline"
                      >
                        Enviar outra mensagem
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Nome */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-brand-navy mb-1.5">
                          Nome
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Seu nome completo"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-brand-navy mb-1.5">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="voce@empresa.com"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                        />
                      </div>

                      {/* Empresa */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-brand-navy mb-1.5">
                          Empresa
                        </label>
                        <input
                          id="company"
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Nome da sua empresa"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                        />
                      </div>

                      {/* Segmento */}
                      <div>
                        <label htmlFor="segment" className="block text-sm font-semibold text-brand-navy mb-1.5">
                          Segmento de Interesse
                        </label>
                        <select
                          id="segment"
                          value={segment}
                          onChange={(e) => setSegment(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-brand-navy focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all appearance-none"
                        >
                          <option value="" disabled>
                            Selecione um segmento
                          </option>
                          {segmentOptions.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Mensagem */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-brand-navy mb-1.5">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Conte-nos sobre seu projeto ou consulta..."
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-brand-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all resize-none"
                        />
                      </div>

                      {/* Enviar */}
                      <button
                        type="submit"
                        className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-brand-navy text-white font-bold rounded-lg hover:bg-brand-navy-light transition-all hover:scale-[1.01] active:scale-[0.99]"
                      >
                        Enviar Mensagem
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>

            {/* ── Direita: Cards de Escritórios ── */}
            <div className="space-y-6">
              {offices.map((office, i) => (
                <ScrollReveal key={office.city} delay={i * 0.1} direction="right">
                  <div className="relative p-7 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                    {/* Acento */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-navy group-hover:bg-brand-gold transition-colors duration-300" />

                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-brand-navy" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-brand-navy">
                          {office.city}
                        </h3>
                        {office.tag && (
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-gold">
                            {office.tag}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 text-sm text-gray-500">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                        <a
                          href={`mailto:${office.email}`}
                          className="hover:text-brand-navy transition-colors"
                        >
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-400 shrink-0" />
                        <span>{office.timezone}</span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
