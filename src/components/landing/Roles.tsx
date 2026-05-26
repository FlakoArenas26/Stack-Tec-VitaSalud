import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";

const ROLES = [
  {
    icon: "🧑‍⚕️",
    name: "Paciente",
    accent: "#00d4ff",
    items: [
      "Registro e inicio de sesión",
      "Agendar nuevas citas médicas",
      "Reprogramar y cancelar citas",
      "Consultar historial clínico",
      "Recibir notificaciones en tiempo real",
    ],
  },
  {
    icon: "🩺",
    name: "Médico",
    accent: "#00f5c4",
    items: [
      "Visualizar su agenda diaria",
      "Atender pacientes asignados",
      "Generar recomendaciones clínicas",
      "Alertas de nuevas citas",
      "Acceso por especialidad",
    ],
  },
  {
    icon: "⚙️",
    name: "Administrador",
    accent: "#7c3aed",
    items: [
      "Gestión global de usuarios",
      "Activar / desactivar médicos",
      "Carga masiva de médicos",
      "Visibilidad de todo el sistema",
      "Configuración de la plataforma",
    ],
  },
];

export default function Roles() {
  return (
    <Section id="roles">
      <SectionTitle eyebrow="Roles" title="Actores del Sistema" />
      <div className="grid gap-6 md:grid-cols-3">
        {ROLES.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="group glass relative overflow-hidden rounded-3xl p-8 transition-all"
            style={{ ["--a" as never]: r.accent }}
          >
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: `radial-gradient(circle at 50% 0%, ${r.accent}40, transparent 60%)` }}
            />
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ boxShadow: `inset 0 0 0 1px ${r.accent}, 0 0 40px ${r.accent}50` }}
            />
            <div className="relative">
              <div className="text-5xl">{r.icon}</div>
              <h3 className="mt-5 font-display text-2xl font-bold" style={{ color: r.accent }}>{r.name}</h3>
              <ul className="mt-6 space-y-2.5">
                {r.items.map((it, k) => (
                  <motion.li
                    key={it}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + k * 0.08 }}
                    className="flex items-start gap-2 text-sm text-slate-300"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ background: r.accent }} />
                    {it}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
