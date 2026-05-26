import { motion } from "framer-motion";
import { Section, SectionTitle } from "./Section";
import { Bell } from "lucide-react";

function Mockup({ side, title, message, accent }: { side: string; title: string; message: string; accent: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="glass relative overflow-hidden rounded-3xl p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{side}</span>
        <div className="relative">
          <Bell className="h-5 w-5" style={{ color: accent }} />
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: accent }} />
            <span className="relative inline-flex h-3 w-3 rounded-full" style={{ background: accent }} />
          </span>
        </div>
      </div>
      <div className="mb-4 h-2 w-32 rounded bg-white/10" />
      <div className="mb-2 h-2 w-full rounded bg-white/5" />
      <div className="mb-6 h-2 w-3/4 rounded bg-white/5" />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="rounded-xl border p-4"
        style={{ borderColor: `${accent}60`, background: `${accent}10`, boxShadow: `0 0 30px ${accent}30` }}
      >
        <div className="font-display text-sm font-semibold" style={{ color: accent }}>{title}</div>
        <div className="mt-1 text-xs text-slate-300">{message}</div>
      </motion.div>
    </motion.div>
  );
}

export default function Notifications() {
  return (
    <Section id="notifications">
      <SectionTitle eyebrow="Tiempo real" title="Sistema de Notificaciones" />
      <div className="grid gap-6 md:grid-cols-2">
        <Mockup
          side="Patient Dashboard"
          title="✓ Recomendaciones disponibles"
          message="El médico ha cargado recomendaciones para tu última consulta."
          accent="#00d4ff"
        />
        <Mockup
          side="Doctor Dashboard"
          title="🔔 Nueva cita agendada"
          message="Un paciente ha agendado una cita en tu agenda de mañana."
          accent="#00f5c4"
        />
      </div>
      <p className="mt-6 text-center font-mono text-xs text-slate-400">
        Polling cada 10s · Eventos de foco de ventana · Sincronización entre pestañas
      </p>
    </Section>
  );
}
