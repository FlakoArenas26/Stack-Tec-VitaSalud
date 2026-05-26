import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Section, SectionTitle } from "./Section";

const LAYERS = [
  { name: "React SPA", sub: "View", color: "#00d4ff" },
  { name: "Controllers", sub: "HTTP / REST", color: "#00f5c4" },
  { name: "Services", sub: "Lógica de Negocio", color: "#7c3aed" },
  { name: "Models · Sequelize", sub: "Persistencia", color: "#00d4ff" },
  { name: "MySQL 8", sub: "Database", color: "#00f5c4" },
];

const TREE = `vita-salud/
├── Backend/
│   └── src/
│       ├── controllers/   ← Capa Controller
│       ├── services/      ← Lógica de Negocio
│       ├── models/        ← Capa Model (Sequelize)
│       ├── routes/        ← Endpoints REST
│       └── middlewares/   ← Auth · Roles · Rate Limit
└── Frontend/
    └── src/
        ├── routes/        ← Capa View (React)
        ├── components/    ← UI Components
        └── lib/
            └── apiService.ts ← Cliente HTTP centralizado`;

export default function Architecture() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % LAYERS.length), 1100);
    return () => clearInterval(id);
  }, []);

  return (
    <Section id="architecture">
      <SectionTitle
        eyebrow="Arquitectura"
        title="Arquitectura MVC"
        subtitle="Separación clara entre View, Controllers, Services y Models. Añadimos una capa de servicios para aislar la lógica de negocio del transporte HTTP y de la persistencia."
      />

      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12">
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch md:gap-2">
          {LAYERS.map((l, i) => (
            <div key={l.name} className="flex flex-1 items-center gap-2">
              <motion.div
                animate={{
                  scale: active === i ? 1.05 : 1,
                  boxShadow:
                    active === i
                      ? `0 0 40px ${l.color}80, inset 0 0 0 1px ${l.color}`
                      : `inset 0 0 0 1px rgba(255,255,255,0.08)`,
                }}
                transition={{ duration: 0.4 }}
                className="flex-1 rounded-xl bg-white/[0.03] p-4 text-center"
              >
                <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: l.color }}>{l.sub}</div>
                <div className="mt-1 font-display text-sm font-semibold text-white md:text-base">{l.name}</div>
              </motion.div>
              {i < LAYERS.length - 1 && (
                <motion.div
                  animate={{ opacity: active === i ? 1 : 0.3 }}
                  className="hidden h-px w-6 bg-gradient-to-r from-[#00d4ff] to-[#00f5c4] md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <pre className="glass overflow-x-auto rounded-2xl p-6 font-mono text-xs leading-relaxed text-slate-300 md:text-sm">
          <code>{TREE}</code>
        </pre>
      </div>
    </Section>
  );
}
