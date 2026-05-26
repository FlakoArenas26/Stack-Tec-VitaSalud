import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section, SectionTitle } from "./Section";

const RULES = [
  "Solo citas Lunes–Sábado",
  "Horario 07:00–17:00",
  "Mínimo 1 hora de anticipación",
  "Sin citas en domingo",
  "Zona horaria America/Bogotá",
  "Médico activo requerido",
  "Sin solapamiento de citas",
];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);

  return <span ref={ref}>{n}{suffix}</span>;
}

const LIFECYCLE = ["Agendada", "Reprogramada", "Atendida", "Recomendaciones"];

export default function BusinessRules() {
  const ticker = [...RULES, ...RULES];
  return (
    <Section id="rules">
      <SectionTitle eyebrow="Reglas" title="Reglas de Negocio" />

      <div className="glass relative overflow-hidden rounded-2xl py-4">
        <div className="flex w-max gap-12 animate-marquee whitespace-nowrap font-mono text-sm text-slate-300">
          {ticker.map((r, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
              {r}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {[
          { n: 6, s: " días", t: "Hábiles por semana", c: "#00d4ff" },
          { n: 10, s: "", t: "Bloques horarios por día", c: "#00f5c4" },
          { n: 60, s: " min", t: "Anticipación mínima", c: "#7c3aed" },
        ].map((s) => (
          <div key={s.t} className="glass rounded-2xl p-8 text-center">
            <div className="font-display text-6xl font-bold" style={{ color: s.c }}>
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-3 text-sm text-slate-400">{s.t}</div>
          </div>
        ))}
      </div>

      <div className="mt-14 glass rounded-3xl p-8">
        <div className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#00d4ff]">Ciclo de vida</div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-2">
          {LIFECYCLE.map((step, i) => (
            <div key={step} className="flex flex-1 items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex-1 rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="font-mono text-[10px] text-[#00f5c4]">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-1 font-display font-semibold text-white">{step}</div>
              </motion.div>
              {i < LIFECYCLE.length - 1 && <div className="hidden text-[#00d4ff] md:block">→</div>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
