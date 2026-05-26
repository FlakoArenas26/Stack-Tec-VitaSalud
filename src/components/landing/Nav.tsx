const LINKS = [
  ["Stack", "stack"],
  ["Herramientas", "tools"],
  ["Arquitectura", "architecture"],
  ["Base de Datos", "database"],
  ["UX / UI", "ux"],
  ["API Externa", "external-api"],
  ["API REST", "api"],
  ["Equipo", "team"],
] as const;

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 py-3">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0f1e]/95 via-[#0a0f1e]/75 to-transparent backdrop-blur-xl" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="glass liquid-glass relative flex items-center justify-between rounded-full px-5 py-2.5">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/favicon.svg"
              alt=""
              className="h-8 w-8 rounded-lg shadow-[0_0_24px_rgba(0,212,255,0.35)]"
            />
            <span className="font-display text-lg font-bold text-white">Stack Tec VitaSalud</span>
          </a>
          <nav className="hidden items-center gap-4 xl:flex">
            {LINKS.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="text-sm text-slate-400 transition-colors hover:text-[#00d4ff]">{label}</a>
            ))}
          </nav>
          <a href="#team" className="rounded-full bg-gradient-to-r from-[#00d4ff] to-[#00f5c4] px-4 py-1.5 text-xs font-semibold text-[#0a0f1e] transition-all hover:scale-105">
            Equipo
          </a>
        </div>
      </div>
    </header>
  );
}
