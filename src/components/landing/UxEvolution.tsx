import { motion } from "framer-motion";
import { Figma, Palette, Sparkles } from "lucide-react";
import { Section, SectionTitle } from "./Section";
import { Typewriter } from "./Typewriter";
import { PdfPreview } from "./PdfPreview";
import { PreviewCarousel, type PreviewSlide } from "./PreviewCarousel";
import { PersonAvatar } from "./PersonAvatar";
import v1Register from "@/assets/valeria/01-registro.png";
import v1Profile from "@/assets/valeria/02-perfil.png";
import v1Notifications from "@/assets/valeria/03-notificaciones.png";
import v1Settings from "@/assets/valeria/04-configuracion.png";
import v1Schedule from "@/assets/valeria/05-agendar.png";
import v1Specialist from "@/assets/valeria/06-especialista.png";
import v1Exercises from "@/assets/valeria/07-ejercicios.png";
import v1Messages from "@/assets/valeria/08-mensajes.png";
import v1Summary from "@/assets/valeria/09-resumen.png";
import v1Recommendations from "@/assets/valeria/10-recomendaciones.png";
import vitaPdf from "@/assets/VitaSalud.pdf";
import valeriaPhoto from "@/assets/team/valeria.jpeg";

const NARRATION = `Hola, soy Valeria Martínez Castañeda, diseñadora UX/UI de VitaSalud.

Como no tengo experiencia en código, mi aporte fue pensar la experiencia desde el usuario. Abrí Figma y diseñé la primera propuesta de la plataforma, que originalmente llamamos "Ether Health".

Esa primera versión apostaba por una estética cálida: paleta turquesa sobre fondo claro, ilustraciones de profesionales de la salud, formularios amables y mucho énfasis en transmitir confianza humana. Diseñé el landing con registro, el panel del paciente con su historia clínica, el centro de notificaciones y la pantalla de configuración con cumplimiento de Habeas Data.

Cuando le mostré los mockups a Rafael y Miguel, empezamos a iterar. Discutimos escala visual, contraste, accesibilidad, consistencia entre pantallas y qué tan funcional debía ser cada componente frente a lo decorativo. Rafael me propuso qué era viable de implementar con Tailwind CSS y Radix UI; Miguel me ayudó a entender qué datos teníamos que mostrar y de qué tablas venían.

De esas reuniones salió la identidad final: VitaSalud, con una interfaz clínica clara, luminosa y enfocada en tareas reales, componentes funcionales por encima de las ilustraciones, microinteracciones cuidadas y una jerarquía tipográfica depurada usando Space Grotesk e Inter.

El diseño final es la suma de muchas conversaciones. Rafael lo llevó al código, pero la dirección visual la construimos entre los tres.`;

const SHOTS: PreviewSlide[] = [
  { src: v1Register, title: "Registro de pacientes", eyebrow: "Figma · v0.1", description: "Pantalla inicial de Ether Health con tono humano, campos de perfil y mensaje de Habeas Data." },
  { src: v1Profile, title: "Mi perfil / gestión", eyebrow: "Figma · v0.1", description: "Panel del paciente con historia clínica, constantes vitales y próximas citas." },
  { src: v1Notifications, title: "Centro de notificaciones", eyebrow: "Figma · v0.1", description: "Alertas, próximos pasos y recomendaciones de bienestar." },
  { src: v1Settings, title: "Configuración del sistema", eyebrow: "Figma · v0.1", description: "Preferencias, seguridad de cuenta y sección de privacidad." },
  { src: v1Schedule, title: "Agendar cita médica", eyebrow: "Figma · v0.1", description: "Búsqueda de especialistas, filtros y disponibilidad horaria." },
  { src: v1Specialist, title: "Vista del especialista", eyebrow: "Figma · v0.1", description: "Pantalla clínica para registrar evolución, diagnóstico y recomendaciones." },
  { src: v1Exercises, title: "Guía de ejercicios", eyebrow: "Figma · v0.1", description: "Rutinas terapéuticas y navegación por categorías." },
  { src: v1Messages, title: "Asistente de mensajes", eyebrow: "Figma · v0.1", description: "Comunicación médico-paciente con advertencia de seguridad." },
  { src: v1Summary, title: "Resumen de atención", eyebrow: "Figma · v0.1", description: "Cierre de consulta con signos vitales, diagnóstico y plan de manejo." },
  { src: v1Recommendations, title: "Recomendaciones finales", eyebrow: "Figma · v0.1", description: "Prescripción vigente, observaciones y próximos controles." },
];

const TOOLS = [
  { icon: Figma, label: "Herramienta", value: "Figma" },
  { icon: Palette, label: "Sistema", value: "Tailwind CSS 4 + Radix UI" },
  { icon: Sparkles, label: "Diseño", value: "Valeria Martínez" },
];

export default function UxEvolution() {
  return (
    <Section id="ux">
      <SectionTitle
        eyebrow="UX / UI · Valeria"
        title="Del Primer Mockup a la App Entregada"
        subtitle="Iteración visual guiada por sesiones internas, capturas de Figma y contraste con la versión final presentada."
      />

      <div className="glass liquid-glass mb-10 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="mx-auto text-center lg:mx-0">
            <PersonAvatar
              src={valeriaPhoto}
              alt="Valeria Martínez Castañeda"
              accent="#a78bfa"
              size="xl"
            />
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#a78bfa]">
              Valeria Martínez
            </div>
            <div className="text-sm text-slate-400">UX / UI</div>
          </div>
          <div className="min-w-0 flex-1">
            <Typewriter
              text={NARRATION}
              className="font-mono text-sm leading-relaxed text-slate-300 md:text-base"
              cursorColor="#a78bfa"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              {TOOLS.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5"
                >
                  <t.icon className="h-3.5 w-3.5 text-[#a78bfa]" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                    {t.label}
                  </span>
                  <span className="font-mono text-xs text-slate-200">{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-[#a78bfa]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-[#a78bfa]">
          v0.1 · Ether Health
        </span>
        <span className="font-mono text-xs text-slate-500">Diez pantallas base diseñadas por Valeria en Figma</span>
      </div>

      <PreviewCarousel slides={SHOTS} accent="#a78bfa" autoMs={7500} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch"
      >
        <div className="glass liquid-glass flex min-h-[280px] flex-col rounded-2xl p-6 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#a78bfa]">v0.1</div>
          <div className="mt-2 font-display text-2xl font-bold text-white">Ether Health</div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
            Ether Health fue el nombre de la propuesta visual inicial creada en Figma: una versión de exploración
            con paleta clara, ilustraciones médicas y un enfoque emocional pensado para transmitir confianza.
          </p>
          <div className="mt-5 rounded-xl border border-[#a78bfa]/20 bg-[#a78bfa]/10 p-4 text-left">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a78bfa]">
              Punto de partida
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Sirvió para validar dirección visual, confianza, tono clínico y componentes antes de aterrizar los flujos reales.
            </p>
          </div>
        </div>
        <div className="hidden h-full w-px self-stretch bg-gradient-to-b from-[#a78bfa] to-[#00d4ff] lg:block" />
        <div className="lg:hidden h-px w-full bg-gradient-to-r from-[#a78bfa] to-[#00d4ff]" />
        <div className="glass liquid-glass flex min-h-[280px] flex-col rounded-2xl p-6 text-center" style={{ boxShadow: "0 0 40px rgba(0,212,255,0.15)" }}>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#00d4ff]">v1.0</div>
          <div className="mt-2 font-display text-2xl font-bold text-gradient">VitaSalud</div>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-400">
            Interfaz clara · flujos por rol · formularios, agenda, alertas y recomendaciones clínicas
          </p>
          <div className="mt-5 rounded-xl border border-[#00d4ff]/20 bg-[#00d4ff]/10 p-4 text-left">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00d4ff]">
              Referencia de entrega
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              La versión final documentada en el PDF conserva la claridad visual de Ether Health, pero ya aterriza
              la experiencia en los flujos reales de VitaSalud: autenticación, agenda, perfiles, notificaciones,
              consulta médica y recomendaciones postconsulta.
            </p>
          </div>
        </div>
      </motion.div>

      <div className="mt-10">
        <PdfPreview src={vitaPdf} />
      </div>
    </Section>
  );
}
