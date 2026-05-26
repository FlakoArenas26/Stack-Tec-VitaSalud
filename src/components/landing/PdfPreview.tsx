import { motion } from "framer-motion";
import { ExternalLink, FileText, Maximize2, X } from "lucide-react";
import { useState } from "react";

export function PdfPreview({ src }: { src: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-[#00d4ff]/20 bg-[#00d4ff]/10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#00d4ff]/20 p-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00d4ff]">
              PDF final
            </div>
            <div className="mt-1 font-display text-lg font-bold text-white">Vista previa de VitaSalud.pdf</div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-[#00d4ff]/50 hover:bg-white/5"
            >
              <Maximize2 className="h-4 w-4" />
              Ampliar
            </button>
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#00d4ff] px-4 py-2 text-sm font-semibold text-[#0a0f1e] transition hover:scale-[1.02]"
            >
              <ExternalLink className="h-4 w-4" />
              Abrir
            </a>
          </div>
        </div>
        <div className="relative h-[360px] bg-[#020617] md:h-[520px]">
          <object data={`${src}#view=FitH`} type="application/pdf" className="h-full w-full">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center text-slate-300">
              <FileText className="h-12 w-12 text-[#00d4ff]" />
              <p>El navegador no pudo renderizar el PDF incrustado.</p>
              <a href={src} target="_blank" rel="noreferrer" className="text-[#00d4ff] underline">
                Abrir PDF en una pestaña
              </a>
            </div>
          </object>
        </div>
      </div>

      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-[#020617]/95 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur transition hover:bg-white/15"
            aria-label="Cerrar PDF ampliado"
          >
            <X className="h-5 w-5" />
          </button>
          <object data={`${src}#view=FitH`} type="application/pdf" className="h-full w-full rounded-2xl border border-white/10 bg-[#020617]">
            <div className="flex h-full items-center justify-center text-slate-300">
              <a href={src} target="_blank" rel="noreferrer" className="text-[#00d4ff] underline">
                Abrir PDF en una pestaña
              </a>
            </div>
          </object>
        </motion.div>
      )}
    </>
  );
}
