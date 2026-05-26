import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { TechLogo, techColor, type TechLogoName } from "./TechLogo";

const TOOLS: { name: string; role: string; logo: TechLogoName }[] = [
  { name: "VS Code", role: "IDE usado para desarrollar frontend y backend", logo: "vscode" },
  { name: "Git", role: "Control de versiones local del proyecto", logo: "git" },
  { name: "MySQL Workbench", role: "Modelado, revisión de relaciones y consultas", logo: "workbench" },
  { name: "DBeaver", role: "Gestor de BD para inspeccionar datos y tablas", logo: "dbeaver" },
  { name: "Figma", role: "Mockups, flujo visual e identidad base", logo: "figma" },
  { name: "Swagger UI", role: "Pruebas de API y documentación OpenAPI", logo: "swagger" },
  { name: "npm", role: "Instalación de paquetes y ejecución de scripts", logo: "npm" },
  { name: "Vite Dev Server", role: "Servidor local con recarga del frontend", logo: "vite" },
  { name: "ts-node-dev", role: "Recarga del backend durante desarrollo", logo: "ts-node" },
];

const LANGUAGES = [
  { name: "TypeScript", pct: 78, color: "#3178c6" },
  { name: "SQL", pct: 12, color: "#00758f" },
  { name: "CSS", pct: 7, color: "#06b6d4" },
  { name: "JSON · YAML", pct: 3, color: "#a78bfa" },
];

export default function DevTools() {
  return (
    <Section id="tools">
      <SectionTitle
        eyebrow="Herramientas"
        title="Tooling de Desarrollo"
        subtitle="Programas, IDEs y gestores usados para construir, probar, documentar y revisar VitaSalud. Las pruebas de API se realizaron desde Swagger UI."
      />

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TOOLS.map((t, i) => {
          const color = techColor(t.logo);
          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group glass liquid-glass relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div
                className="absolute -right-5 -top-5 h-20 w-20 rounded-full opacity-20 blur-xl transition-opacity group-hover:opacity-50"
                style={{ background: color }}
              />
              <TechLogo name={t.logo} className="relative h-12 w-12 transition-transform group-hover:scale-110" />
              <div className="relative mt-4 font-display text-base font-semibold text-white">{t.name}</div>
              <div className="relative mt-1 text-xs leading-relaxed text-slate-400">{t.role}</div>
              <div className="relative mt-4 h-1 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.04 }}
                  className="h-full rounded-full"
                  style={{ background: color }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="glass liquid-glass mt-10 rounded-3xl p-6 md:p-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-white">Distribución por lenguaje</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
            Backend + Frontend
          </span>
        </div>
        <div className="space-y-3">
          {LANGUAGES.map((l, i) => (
            <div key={l.name}>
              <div className="mb-1 flex items-center justify-between font-mono text-xs">
                <span className="text-slate-300">{l.name}</span>
                <span style={{ color: l.color }}>{l.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${l.color}, ${l.color}80)`, boxShadow: `0 0 20px ${l.color}80` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
