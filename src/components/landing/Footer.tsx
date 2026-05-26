import { TechLogo, type TechLogoName } from "./TechLogo";

const FOOTER_STACK: { label: string; logo: TechLogoName }[] = [
  { label: "React", logo: "react" },
  { label: "TypeScript", logo: "typescript" },
  { label: "Node.js", logo: "node" },
  { label: "Express", logo: "express" },
  { label: "MySQL", logo: "mysql" },
  { label: "Sequelize", logo: "sequelize" },
  { label: "Swagger", logo: "swagger" },
  { label: "Figma", logo: "figma" },
  { label: "DBeaver", logo: "dbeaver" },
  { label: "VS Code", logo: "vscode" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt=""
                className="h-11 w-11 rounded-xl shadow-[0_0_28px_rgba(0,212,255,0.35)]"
              />
              <span className="font-display text-2xl font-bold text-gradient">Stack Tec VitaSalud</span>
            </div>
            <p className="mt-3 max-w-xl text-sm text-slate-400">
              Presentación técnica interactiva del stack, herramientas, arquitectura, API, base de datos y diseño UX/UI usados para construir VitaSalud.
            </p>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
            Desarrollo Web · Ingeniería de Sistemas · 2026
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {FOOTER_STACK.map((item) => (
            <div key={item.label} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
              <TechLogo name={item.logo} className="h-8 w-8 shrink-0" />
              <span className="truncate text-sm text-slate-300">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          <span>
            © 2026 RafArenasDev · Stack Tec VitaSalud · Fundación Universitaria del Área Andina · Desarrollo Web
          </span>
        </div>
      </div>
    </footer>
  );
}
