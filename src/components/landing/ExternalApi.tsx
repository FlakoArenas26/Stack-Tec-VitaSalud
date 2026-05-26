import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { Section, SectionTitle } from "./Section";

export default function ExternalApi() {
  return (
    <Section id="external-api">
      <SectionTitle
        eyebrow="API Externa"
        title="Departamentos y Ciudades de Colombia"
        subtitle="Integramos una API pública para autocompletar la geolocalización de pacientes y médicos sin mantener catálogos manualmente."
      />

      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 md:p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00d4ff]/15 text-[#00d4ff]">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-white">
                Colombia · Departamentos & Ciudades API
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                REST · JSON · Pública
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Esta API pública nos entrega el listado completo de los 32 departamentos colombianos
            y sus respectivas ciudades. La consumimos desde el backend para hidratar los selectores
            de registro y el perfil del usuario, evitando duplicar datos geográficos en nuestra base.
          </p>
          <div className="mt-6 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 p-3" style={{ borderLeft: "3px solid #00f5c4" }}>
              <span className="rounded bg-[#00f5c4]/20 px-2 py-0.5 text-[10px] font-bold text-[#00f5c4]">GET</span>
              <code className="text-slate-200">/api/catalog/departments</code>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/30 p-3" style={{ borderLeft: "3px solid #00f5c4" }}>
              <span className="rounded bg-[#00f5c4]/20 px-2 py-0.5 text-[10px] font-bold text-[#00f5c4]">GET</span>
              <code className="text-slate-200">/api/catalog/cities/{`{departmentId}`}</code>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass relative overflow-hidden rounded-3xl p-6 md:p-8"
        >
          <div
            className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#00d4ff] opacity-15 blur-3xl"
          />
          <div className="relative">
            <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#00d4ff]">
              <MapPin className="h-3.5 w-3.5" />
              Respuesta de ejemplo
            </div>
            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-slate-300">
              <code>{`{
  "id": 11,
  "departamento": "Bogotá D.C.",
  "ciudades": [
    { "id": 110, "nombre": "Bogotá" }
  ]
},
{
  "id": 5,
  "departamento": "Antioquia",
  "ciudades": [
    { "id": 51, "nombre": "Medellín" },
    { "id": 52, "nombre": "Envigado" },
    { "id": 53, "nombre": "Itagüí" }
  ]
}`}</code>
            </pre>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-xl bg-white/[0.03] p-3">
                <div className="font-display text-2xl font-bold text-[#00d4ff]">32</div>
                <div className="font-mono text-[10px] uppercase text-slate-500">Departamentos</div>
              </div>
              <div className="rounded-xl bg-white/[0.03] p-3">
                <div className="font-display text-2xl font-bold text-[#00f5c4]">1.122</div>
                <div className="font-mono text-[10px] uppercase text-slate-500">Municipios</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
