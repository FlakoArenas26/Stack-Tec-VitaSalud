import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Section, SectionTitle } from "./Section";

const ROWS = [
  {
    label: "Auth & Security",
    accent: "#00d4ff",
    items: [
      { i: "🔐", t: "JWT con Access + Refresh Token", d: "Sesiones seguras con renovación automática" },
      { i: "🛡️", t: "Control de acceso por roles", d: "Admin · Médico · Paciente" },
      { i: "🔒", t: "Rate limiting + blacklist", d: "Protección en login y logout seguro" },
      { i: "🔑", t: "Recuperación de contraseña", d: "Flujo de cambio y recuperación" },
    ],
  },
  {
    label: "Medical Operations",
    accent: "#00f5c4",
    items: [
      { i: "📅", t: "Agendamiento de citas", d: "Lun–Sáb · 07:00–17:00" },
      { i: "🔄", t: "Reprogramación inteligente", d: "Validación de conflictos horarios" },
      { i: "❌", t: "Cancelación en tiempo real", d: "Notificaciones instantáneas" },
      { i: "🩺", t: "Atención médica", d: "Recomendaciones por especialidad" },
    ],
  },
  {
    label: "Admin & Tech",
    accent: "#7c3aed",
    items: [
      { i: "👥", t: "Gestión de usuarios y médicos", d: "Panel administrativo completo" },
      { i: "📦", t: "Carga masiva de médicos", d: "Bulk creation desde el panel" },
      { i: "📊", t: "Swagger UI interactiva", d: "Explora y prueba la API" },
      { i: "📱", t: "PWA instalable", d: "Acceso offline-ready" },
    ],
  },
];

function TiltCard({ item, accent }: { item: { i: string; t: string; d: string }; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setT({ x, y });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${t.y * -8}deg) rotateY(${t.x * 8}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative overflow-hidden rounded-2xl glass p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `inset 0 0 0 1px ${accent}, 0 0 35px ${accent}40` }}
      />
      <div className="text-3xl">{item.i}</div>
      <h4 className="mt-4 font-display text-base font-semibold text-white">{item.t}</h4>
      <p className="mt-1.5 text-sm text-slate-400">{item.d}</p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <Section id="features">
      <SectionTitle eyebrow="Funcionalidades" title="Funcionalidades del Sistema" />
      <div className="space-y-12">
        {ROWS.map((row) => (
          <div key={row.label}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full" style={{ background: row.accent, boxShadow: `0 0 12px ${row.accent}` }} />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">{row.label}</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {row.items.map((item) => (
                <TiltCard key={item.t} item={item} accent={row.accent} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
