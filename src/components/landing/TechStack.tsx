import { motion } from "framer-motion";
import { Braces, Database, Layers3, Server, ShieldCheck, Sparkles, Wrench } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { TechLogo, techColor, type TechLogoName } from "./TechLogo";
import { PersonAvatar } from "./PersonAvatar";
import rafaelPhoto from "@/assets/team/rafael.jpeg";

type StackItem = {
  name: string;
  logo: TechLogoName;
  detail: string;
};

const GROUPS: { title: string; label: string; accent: string; icon: typeof Layers3; items: StackItem[] }[] = [
  {
    title: "Frontend",
    label: "Cliente · interfaz",
    accent: "#00d4ff",
    icon: Layers3,
    items: [
      { name: "React 19", logo: "react", detail: "Componentes y experiencia interactiva" },
      { name: "TypeScript", logo: "typescript", detail: "Tipado en componentes, rutas y datos" },
      { name: "Vite 7", logo: "vite", detail: "Servidor de desarrollo y build" },
      { name: "Tailwind CSS 4", logo: "tailwind", detail: "Sistema visual responsive" },
      { name: "Radix UI", logo: "radix", detail: "Primitivas accesibles de UI" },
      { name: "Framer Motion", logo: "framer", detail: "Animaciones y transiciones" },
      { name: "Lucide React", logo: "lucide", detail: "Iconografía funcional" },
      { name: "React Hook Form + Zod", logo: "rhf", detail: "Formularios y validación" },
    ],
  },
  {
    title: "Backend y API",
    label: "Servidor · REST",
    accent: "#00f5c4",
    icon: Server,
    items: [
      { name: "Node.js 18", logo: "node", detail: "Runtime del backend" },
      { name: "Express 4", logo: "express", detail: "Rutas, middlewares y controladores" },
      { name: "JWT", logo: "jwt", detail: "Access token y refresh token" },
      { name: "bcrypt", logo: "bcrypt", detail: "Hash seguro de contraseñas" },
      { name: "express-validator", logo: "validator", detail: "Validación de entrada" },
      { name: "express-rate-limit", logo: "rate-limit", detail: "Protección de endpoints" },
      { name: "Swagger UI / OpenAPI", logo: "swagger", detail: "Documentación y pruebas de API" },
      { name: "cors + dotenv", logo: "dotenv", detail: "Config y variables de entorno" },
    ],
  },
  {
    title: "Datos",
    label: "Persistencia",
    accent: "#7c3aed",
    icon: Database,
    items: [
      { name: "MySQL 8", logo: "mysql", detail: "Base de datos relacional" },
      { name: "Sequelize ORM 6", logo: "sequelize", detail: "Modelos, asociaciones y consultas" },
      { name: "Migraciones", logo: "migration", detail: "Evolución controlada del esquema" },
      { name: "Ley 1581", logo: "habeas", detail: "Datos personales y Habeas Data" },
    ],
  },
  {
    title: "Herramientas",
    label: "IDEs · diseño · gestores",
    accent: "#f59e0b",
    icon: Wrench,
    items: [
      { name: "VS Code", logo: "vscode", detail: "Editor principal de desarrollo" },
      { name: "Figma", logo: "figma", detail: "Diseño base de Valeria" },
      { name: "DBeaver", logo: "dbeaver", detail: "Cliente SQL y revisión de datos" },
      { name: "MySQL Workbench", logo: "workbench", detail: "Modelo relacional y consultas" },
      { name: "Swagger", logo: "swagger", detail: "Pruebas reales de endpoints" },
      { name: "npm", logo: "npm", detail: "Gestión de paquetes y scripts" },
    ],
  },
];

function StackLogo({ item }: { item: StackItem }) {
  const color = techColor(item.logo);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group grid grid-cols-[58px_1fr] gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]"
    >
      <TechLogo name={item.logo} className="h-14 w-14 shrink-0 transition-transform duration-300 group-hover:scale-105" />
      <div className="min-w-0">
        <div className="truncate font-display text-sm font-semibold text-white">{item.name}</div>
        <div className="mt-1 text-xs leading-snug text-slate-400">{item.detail}</div>
        <div className="mt-2 h-0.5 w-10 rounded-full" style={{ background: color }} />
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <Section id="stack">
      <SectionTitle
        eyebrow="Stack"
        title="Arsenal Tecnológico"
        subtitle="Mapa visual de las tecnologías, frameworks, librerías, herramientas e IDEs que sostienen VitaSalud desde la interfaz hasta la base de datos."
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass liquid-glass mb-6 flex flex-col gap-5 rounded-3xl p-5 sm:flex-row sm:items-center sm:p-6"
      >
        <PersonAvatar
          src={rafaelPhoto}
          alt="Rafael José Arenas Restrepo"
          accent="#00d4ff"
          size="lg"
          className="mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00d4ff]">
            Implementación Full-Stack · Rafael
          </div>
          <h3 className="mt-2 font-display text-2xl font-bold text-white">
            Stack convertido en producto funcional
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-400">
            Rafael integró frontend, backend, API, seguridad, documentación y despliegue de la infografía interactiva,
            conectando las decisiones de base de datos y diseño UX/UI con una experiencia navegable para presentar el proyecto.
          </p>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        {GROUPS.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="glass liquid-glass relative overflow-hidden rounded-3xl p-5 sm:p-6"
          >
            <div
              className="absolute inset-0 opacity-25"
              style={{ background: `radial-gradient(circle at 30% 0%, ${group.accent}22, transparent 56%)` }}
            />
            <div className="relative mb-5 flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${group.accent}20`, color: group.accent }}
              >
                <group.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: group.accent }}>
                  {group.label}
                </div>
                <h3 className="font-display text-2xl font-bold text-white">{group.title}</h3>
              </div>
            </div>
            <div className="relative grid gap-3 sm:grid-cols-2">
              {group.items.map((item) => (
                <StackLogo key={item.name} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {[
          { icon: Braces, label: "API", value: "REST documentada con OpenAPI y probada desde Swagger UI", color: "#85ea2d" },
          { icon: ShieldCheck, label: "Seguridad", value: "JWT, refresh token, bcrypt, rate limit y validación de entrada", color: "#00f5c4" },
          { icon: Sparkles, label: "UX", value: "Figma como punto de partida visual y React/Tailwind para convertirlo en interfaz funcional", color: "#a78bfa" },
        ].map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass liquid-glass rounded-2xl p-5 transition-transform hover:-translate-y-1"
          >
            <item.icon className="h-5 w-5" style={{ color: item.color }} />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
            <p className="mt-1 text-sm text-slate-300">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
