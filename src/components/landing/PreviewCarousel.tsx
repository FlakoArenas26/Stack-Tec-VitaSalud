import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

export type PreviewSlide = {
  src: string;
  title: string;
  eyebrow?: string;
  description?: string;
  fit?: "cover" | "contain";
};

export function PreviewCarousel({
  slides,
  accent = "#00d4ff",
  autoMs = 6500,
}: {
  slides: PreviewSlide[];
  accent?: string;
  autoMs?: number;
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const current = slides[active];

  useEffect(() => {
    if (open || slides.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), autoMs);
    return () => window.clearInterval(timer);
  }, [autoMs, open, slides.length]);

  const move = (direction: number) => {
    setActive((index) => (index + direction + slides.length) % slides.length);
  };

  return (
    <>
      <div className="glass liquid-glass overflow-hidden rounded-3xl">
        <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative min-h-[260px] overflow-hidden bg-[#020617] text-left sm:min-h-[380px] lg:min-h-[520px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.src}
                src={current.src}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45 }}
                className={`absolute inset-0 h-full w-full ${current.fit === "contain" ? "object-contain" : "object-cover object-top"}`}
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617] via-[#020617]/55 to-transparent p-5">
              {current.eyebrow && (
                <div className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: accent }}>
                  {current.eyebrow}
                </div>
              )}
              <div className="mt-1 font-display text-2xl font-bold text-white">{current.title}</div>
              {current.description && <p className="mt-1 max-w-2xl text-sm text-slate-300">{current.description}</p>}
            </div>
            <span
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#020617]/75 text-white opacity-90 backdrop-blur transition-transform group-hover:scale-105"
              aria-hidden="true"
            >
              <Maximize2 className="h-4 w-4" />
            </span>
          </button>

          <div className="flex flex-col border-t border-white/10 p-4 lg:border-l lg:border-t-0">
            <div className="mb-4 flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                Vista previa
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-white/25 hover:text-white"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="grid max-h-[460px] gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-1">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`grid grid-cols-[76px_1fr] items-center gap-3 rounded-xl border p-2 text-left transition ${
                    active === index ? "bg-white/[0.08]" : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                  style={{ borderColor: active === index ? `${accent}80` : undefined }}
                >
                  <img src={slide.src} alt="" className="h-12 w-full rounded-lg object-cover object-top" />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-semibold text-white">{slide.title}</span>
                    <span className="block truncate font-mono text-[10px] text-slate-500">{slide.eyebrow ?? "Preview"}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020617]/90 p-3 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
              aria-label="Cerrar vista ampliada"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => move(-1)}
              className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur transition hover:bg-white/15 sm:flex"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={current.src}
              alt={current.title}
              className="max-h-[86vh] max-w-[94vw] rounded-2xl border border-white/10 object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => move(1)}
              className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur transition hover:bg-white/15 sm:flex"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
