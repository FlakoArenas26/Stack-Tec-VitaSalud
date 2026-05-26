import { motion } from "framer-motion";
import { Code2, Database, Palette } from "lucide-react";
import { Section, SectionTitle } from "./Section";

const TEAM = [
  {
    name: "Rafael José Arenas Restrepo",
    initials: "RA",
    c: "#00d4ff",
    role: "Full-Stack Developer",
    icon: Code2,
    desc: "Implementó la totalidad del frontend en React y del backend en Node + Express. Tradujo a código las ideas de Miguel y Valeria en sesiones internas, dando forma técnica a cada propuesta del equipo.",
  },
  {
    name: "Miguel Ángel Herrera Oyola",
    initials: "MH",
    c: "#00f5c4",
    role: "Database Designer",
    icon: Database,
    desc: "Diseñó el modelo entidad–relación, definió tipos, restricciones y vínculos entre tablas. Acompañó la evolución del esquema desde el MVP hasta la versión final desplegada en MySQL.",
  },
  {
    name: "Valeria Martínez Castañeda",
    initials: "VM",
    c: "#a78bfa",
    role: "UX / UI Designer",
    icon: Palette,
    desc: "Lideró el diseño visual en Figma. Propuso la primera identidad —Ether Health— y refinó la experiencia con el equipo hasta consolidar una interfaz clínica clara, luminosa y funcional para VitaSalud.",
  },
];

export default function Team() {
  return (
    <Section id="team">
      <SectionTitle
        eyebrow="Equipo"
        title="Quién Hizo Qué"
        subtitle="Tres roles, una sola visión. La sinergia del equipo se construyó en reuniones internas donde las ideas de cada quien se transformaron en producto."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {TEAM.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass group relative overflow-hidden rounded-3xl p-8 transition-all hover:-translate-y-1"
          >
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
              style={{ background: m.c }}
            />
            <div className="relative flex items-center gap-4">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl font-display text-xl font-bold"
                style={{ background: `${m.c}20`, color: m.c, boxShadow: `0 0 30px ${m.c}40` }}
              >
                {m.initials}
              </div>
              <div>
                <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider" style={{ color: m.c }}>
                  <m.icon className="h-3 w-3" />
                  {m.role}
                </div>
                <div className="mt-1 font-display text-base font-semibold leading-tight text-white">
                  {m.name}
                </div>
              </div>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-slate-400">{m.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center text-sm text-slate-400">
        <p>
          <span className="text-slate-500">Asignatura:</span> Desarrollo Web ·{" "}
          <span className="text-slate-500">Programa:</span> Ingeniería de Sistemas — 10mo Semestre
        </p>
        <p className="mt-2">
          <span className="text-slate-500">Institución:</span> Fundación Universitaria del Área Andina ·{" "}
          <span className="text-[#00d4ff]">2026</span>
        </p>
      </div>
    </Section>
  );
}
