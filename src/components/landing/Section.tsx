import { motion } from "framer-motion";

export function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-28 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ eyebrow, title, subtitle, center }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {eyebrow && (
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[#00d4ff]">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-4xl font-bold md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className={`mt-4 h-[2px] w-24 rounded-full bg-gradient-to-r from-[#00d4ff] via-[#00f5c4] to-[#7c3aed] ${center ? "mx-auto" : ""}`} />
      {subtitle && <p className="mt-5 max-w-2xl text-base text-slate-400">{subtitle}</p>}
    </motion.div>
  );
}
