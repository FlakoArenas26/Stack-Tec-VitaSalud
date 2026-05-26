import { motion } from "framer-motion";
import { Database, GitCommit, Users } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { Typewriter } from "./Typewriter";
import { ErDiagram, type ErRelation, type ErTable } from "./ErDiagram";
import { PreviewCarousel } from "./PreviewCarousel";
import dbReference from "@/assets/db-final-reference.png";

const NARRATION = `Hola, soy Miguel Ángel Herrera Oyola, encargado del diseño de la base de datos de VitaSalud.

Cuando arrancamos el proyecto no tenía experiencia en programación, así que mi rol fue pensar el modelo de datos desde el dominio del problema: qué entidades existen en una clínica, cómo se relacionan y qué información mínima necesitamos guardar.

En la versión 0.1, el MVP utiliza solo tres tablas: users, doctors y appointments, con 11 columnas en total. Era lo justo para autenticar a alguien, asociar médicos y registrar una cita.

Después, en reuniones internas con Rafael, fuimos descubriendo qué le faltaba al modelo: control de roles, tipo y número de documento, edad, departamento y ciudad del paciente, tarjeta profesional del médico, años de experiencia, estado activo o inactivo, consultorio, especialidad y campo de recomendaciones clínicas. Rafael me explicaba cómo cada idea encajaba en MySQL y en el ORM Sequelize, y juntos validábamos las relaciones.

El resultado fue la versión 1.0: las mismas tres tablas, pero ahora con 31 columnas, llaves foráneas bien definidas, marcas de tiempo automáticas y campos pensados para cumplir con la Ley 1581 de Habeas Data en Colombia.

En resumen: la base no nació perfecta, evolucionó en equipo, y eso es lo que la hizo sólida.`;

const V1: ErTable[] = [
  {
    name: "users",
    x: 40,
    y: 40,
    accent: "#3b82f6",
    fields: [
      { name: "id", type: "PK" },
      { name: "nombre", type: "AZ" },
      { name: "email", type: "AZ" },
      { name: "password", type: "AZ" },
      { name: "rol", type: "AZ" },
    ],
  },
  {
    name: "doctors",
    x: 600,
    y: 40,
    accent: "#06b6d4",
    fields: [
      { name: "id", type: "PK" },
      { name: "userId", type: "FK" },
      { name: "especialidad", type: "AZ" },
    ],
  },
  {
    name: "appointments",
    x: 320,
    y: 300,
    accent: "#8b5cf6",
    fields: [
      { name: "id", type: "PK" },
      { name: "pacienteId", type: "FK" },
      { name: "doctorId", type: "FK" },
      { name: "fecha", type: "DT" },
      { name: "estado", type: "AZ" },
    ],
  },
];

const RELATIONS: ErRelation[] = [
  { from: "appointments", to: "doctors", fromField: "doctorId", toField: "id", color: "#00f5c4" },
  { from: "appointments", to: "users", fromField: "pacienteId", toField: "id", color: "#00d4ff" },
  { from: "doctors", to: "users", fromField: "userId", toField: "id", color: "#a78bfa" },
];

const RELATION_NOTES = [
  { color: "#00d4ff", text: "appointments.pacienteId referencia users.id para identificar al paciente." },
  { color: "#00f5c4", text: "appointments.doctorId referencia doctors.id para asignar el médico de la cita." },
  { color: "#a78bfa", text: "doctors.userId referencia users.id para reutilizar credenciales y datos base del usuario." },
];

const DB_REFERENCE_SLIDES = [
  {
    src: dbReference,
    title: "Diagrama final real en DBeaver",
    eyebrow: "Vista ampliable",
    description: "Imagen final del modelo entregado, tomada del gestor de base de datos y usada como evidencia del esquema completo.",
    fit: "contain" as const,
  },
];

const VERSION_NOTES = [
  {
    tag: "v0.1 · MVP",
    title: "Modelo inicial",
    text: "El primer esquema priorizaba demostrar el flujo mínimo: un usuario podía autenticarse, un médico podía existir como perfil relacionado y una cita podía guardar paciente, médico, fecha y estado. Era pequeño, útil para validar la idea, pero todavía no cubría datos legales, geográficos ni clínicos.",
    color: "#00d4ff",
  },
  {
    tag: "v1.0 · Final",
    title: "Modelo entregado",
    text: "La versión final mantiene las mismas entidades principales, pero completa el dominio: documento, edad, departamento, ciudad, tarjeta profesional, especialidad, consultorio, experiencia, estado activo, recomendaciones clínicas y marcas createdAt/updatedAt. Las relaciones quedan explícitas con pacienteId, doctorId y userId.",
    color: "#00f5c4",
  },
];

const META = [
  { icon: Database, label: "Motor", value: "MySQL 8" },
  { icon: GitCommit, label: "ORM", value: "Sequelize 6" },
  { icon: Users, label: "Diseño", value: "Miguel Ángel" },
];

export default function DatabaseEvolution() {
  return (
    <Section id="database">
      <SectionTitle
        eyebrow="Base de Datos · Miguel Ángel"
        title="Del Boceto al Esquema Final"
        subtitle="Diseño relacional pensado, iterado y depurado en sesiones de equipo."
      />

      <div className="glass liquid-glass mb-10 rounded-3xl p-6 md:p-8">
        <Typewriter
          text={NARRATION}
          className="font-mono text-sm leading-relaxed text-slate-300 md:text-base"
          cursorColor="#00f5c4"
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {META.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
            >
              <m.icon className="h-3.5 w-3.5 text-[#00f5c4]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                {m.label}
              </span>
              <span className="font-mono text-xs text-slate-200">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-2">
        {VERSION_NOTES.map((note) => (
          <div key={note.tag} className="glass liquid-glass rounded-2xl p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: note.color }}>
              {note.tag}
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-white">{note.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{note.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-[#00d4ff]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00d4ff]">
              v0.1 · MVP
            </span>
            <span className="font-mono text-xs text-slate-500">3 tablas · 11 columnas</span>
          </div>
          <ErDiagram tables={V1} relations={RELATIONS} width={860} height={520} caption="Esquema inicial: relaciones mínimas para validar el flujo" />
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {RELATION_NOTES.map((relation) => (
              <div key={relation.text} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-2 h-1 w-12 rounded-full" style={{ background: relation.color }} />
                <p className="text-xs leading-relaxed text-slate-300">{relation.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded-full bg-[#00f5c4]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#00f5c4]">
              v1.0 · Final
            </span>
            <span className="font-mono text-xs text-slate-500">3 tablas · 31 columnas</span>
          </div>
          <PreviewCarousel slides={DB_REFERENCE_SLIDES} accent="#00f5c4" autoMs={12000} />
        </motion.div>
      </div>
    </Section>
  );
}
