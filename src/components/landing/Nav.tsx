import { useEffect, useState } from "react";

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
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass liquid-glass" : ""}`}>
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
