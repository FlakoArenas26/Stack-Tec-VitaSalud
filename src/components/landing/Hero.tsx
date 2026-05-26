import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Activity, ArrowRight, Users } from "lucide-react";

function MagneticButton({ children, primary, href }: { children: React.ReactNode; primary?: boolean; href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setPos({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.25 });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-200 ${
        primary
          ? "bg-gradient-to-r from-[#00d4ff] to-[#00f5c4] text-[#0a0f1e] glow-cyan hover:scale-[1.03]"
          : "border border-white/20 text-white hover:border-[#00d4ff]/60 hover:bg-white/5"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#00d4ff] opacity-25 blur-[120px] animate-blob" />
        <div className="absolute top-1/3 -right-32 h-[600px] w-[600px] rounded-full bg-[#7c3aed] opacity-25 blur-[140px] animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[#00f5c4] opacity-20 blur-[120px] animate-blob" style={{ animationDelay: "8s" }} />
      </div>
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          {/* heartbeat badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-[#00f5c4]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f5c4] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00f5c4]" />
            </span>
            v1.0 · Full-Stack Medical Platform
          </motion.div>

          {/* heartbeat svg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8 animate-float"
          >
            <svg width="220" height="60" viewBox="0 0 220 60" className="drop-shadow-[0_0_20px_rgba(0,212,255,0.6)]">
              <defs>
                <linearGradient id="heartLine" x1="0" x2="1">
                  <stop offset="0" stopColor="#00d4ff" />
                  <stop offset="0.5" stopColor="#00f5c4" />
                  <stop offset="1" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <path
                d="M0,30 L40,30 L55,30 L65,10 L75,50 L85,20 L95,40 L105,30 L220,30"
                fill="none"
                stroke="url(#heartLine)"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <animate attributeName="stroke-dasharray" from="0,500" to="500,0" dur="2.5s" repeatCount="indefinite" />
              </path>
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl"
          >
            Stack Tec VitaSalud
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-3 font-display text-lg font-medium text-[#00f5c4] md:text-xl"
          >
            Stack tecnológico de la plataforma VitaSalud
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-2xl text-base text-slate-400 md:text-lg"
          >
            Una infografía interactiva construida con código para explicar cómo se integran frontend,
            backend, API REST, seguridad, base de datos, herramientas de desarrollo y decisiones UX/UI
            dentro del proyecto VitaSalud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton primary href="#stack">
              Explorar el Stack
            </MagneticButton>
            <MagneticButton href="#team">
              <Users className="h-4 w-4" /> Conocer al Equipo
            </MagneticButton>
          </motion.div>

          {/* floating stat cards */}
          <div className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { num: "26+", label: "Tecnologías, librerías y frameworks", c: "#00d4ff" },
              { num: "9", label: "Herramientas de desarrollo", c: "#00f5c4" },
              { num: "100%", label: "TypeScript en cliente y servidor", c: "#7c3aed" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.12 }}
                className="glass relative rounded-2xl p-6 animate-float"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="absolute inset-x-6 -top-px h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.c}, transparent)` }} />
                <div className="font-display text-4xl font-bold" style={{ color: s.c }}>{s.num}</div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
                <Activity className="absolute right-5 top-5 h-5 w-5 opacity-30" style={{ color: s.c }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
