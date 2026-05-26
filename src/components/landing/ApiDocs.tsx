import { motion } from "framer-motion";
import { useState } from "react";
import { Section, SectionTitle } from "./Section";

const METHOD_COLOR: Record<string, string> = {
  GET: "#00f5c4",
  POST: "#00d4ff",
  PATCH: "#f59e0b",
  PUT: "#a78bfa",
  DELETE: "#ef4444",
};

type Endpoint = { m: keyof typeof METHOD_COLOR | string; p: string; r: string; auth?: string };

const GROUPS: { tag: string; accent: string; endpoints: Endpoint[] }[] = [
  {
    tag: "Auth",
    accent: "#00d4ff",
    endpoints: [
      { m: "POST", p: "/api/auth/register", r: "Register patient", auth: "Public" },
      { m: "POST", p: "/api/auth/login", r: "{ token, refreshToken }", auth: "Public · Rate-limited" },
      { m: "POST", p: "/api/auth/refresh", r: "Refresh access token", auth: "Refresh JWT" },
      { m: "POST", p: "/api/auth/logout", r: "Logout and blacklist current token", auth: "JWT" },
      { m: "POST", p: "/api/auth/forgot-password", r: "Request password recovery", auth: "Public" },
      { m: "POST", p: "/api/auth/reset-password", r: "Reset password", auth: "Reset token" },
      { m: "PATCH", p: "/api/auth/change-password", r: "Change password", auth: "JWT" },
    ],
  },
  {
    tag: "Users",
    accent: "#7c3aed",
    endpoints: [
      { m: "GET", p: "/api/users/me", r: "Get authenticated user profile", auth: "JWT" },
      { m: "PATCH", p: "/api/users/me", r: "Update profile", auth: "JWT" },
      { m: "GET", p: "/api/users", r: "List paginated users", auth: "Admin" },
      { m: "GET", p: "/api/users/{id}", r: "Get user detail", auth: "Admin" },
      { m: "PATCH", p: "/api/users/{id}/status", r: "Activate or deactivate user", auth: "Admin" },
      { m: "DELETE", p: "/api/users/{id}", r: "Delete user", auth: "Admin" },
    ],
  },
  {
    tag: "Doctors",
    accent: "#00f5c4",
    endpoints: [
      { m: "GET", p: "/api/doctors", r: "List active doctors", auth: "JWT" },
      { m: "GET", p: "/api/doctors/{id}", r: "Get doctor detail", auth: "JWT" },
      { m: "GET", p: "/api/doctors/specialties", r: "List specialties catalog", auth: "JWT" },
      { m: "POST", p: "/api/doctors", r: "Create doctor", auth: "Admin" },
      { m: "POST", p: "/api/doctors/bulk", r: "Bulk create doctors", auth: "Admin" },
      { m: "PATCH", p: "/api/doctors/{id}", r: "Update doctor data", auth: "Admin" },
      { m: "PATCH", p: "/api/doctors/{id}/status", r: "Activate or deactivate doctor", auth: "Admin" },
    ],
  },
  {
    tag: "Appointments",
    accent: "#00d4ff",
    endpoints: [
      { m: "GET", p: "/api/appointments/availability/{doctorId}", r: "Get available time slots", auth: "JWT" },
      { m: "POST", p: "/api/appointments", r: "Create appointment", auth: "Paciente" },
      { m: "GET", p: "/api/appointments", r: "List user appointments", auth: "JWT" },
      { m: "GET", p: "/api/appointments/{id}", r: "Get appointment detail", auth: "JWT" },
      { m: "PATCH", p: "/api/appointments/{id}/reschedule", r: "Reschedule appointment", auth: "Paciente" },
      { m: "PATCH", p: "/api/appointments/{id}/cancel", r: "Cancel appointment", auth: "Paciente · Médico" },
      { m: "PATCH", p: "/api/appointments/{id}/attend", r: "Mark appointment as attended", auth: "Médico" },
      { m: "GET", p: "/api/appointments/agenda/doctor", r: "Get authenticated doctor agenda", auth: "Médico" },
    ],
  },
  {
    tag: "Medical Records",
    accent: "#f59e0b",
    endpoints: [
      { m: "POST", p: "/api/records/{appointmentId}/recommendations", r: "Create clinical recommendations", auth: "Médico" },
      { m: "GET", p: "/api/records/patient/{patientId}", r: "Get patient medical history", auth: "Paciente · Médico" },
      { m: "GET", p: "/api/records/{id}", r: "Get medical record detail", auth: "JWT" },
    ],
  },
  {
    tag: "Notifications",
    accent: "#a78bfa",
    endpoints: [
      { m: "GET", p: "/api/notifications", r: "List notification inbox (polling)", auth: "JWT" },
      { m: "PATCH", p: "/api/notifications/{id}/read", r: "Mark notification as read", auth: "JWT" },
      { m: "PATCH", p: "/api/notifications/read-all", r: "Mark all notifications as read", auth: "JWT" },
    ],
  },
  {
    tag: "Catalog",
    accent: "#00f5c4",
    endpoints: [
      { m: "GET", p: "/api/catalog/departments", r: "List Colombia departments", auth: "Public" },
      { m: "GET", p: "/api/catalog/cities/{departmentId}", r: "List cities by department", auth: "Public" },
      { m: "GET", p: "/api/health", r: "API health check", auth: "Public" },
    ],
  },
];

const TAGS = ["All", ...GROUPS.map((g) => g.tag)];

export default function ApiDocs() {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? GROUPS : GROUPS.filter((g) => g.tag === active);
  const total = GROUPS.reduce((n, g) => n + g.endpoints.length, 0);

  return (
    <Section id="api">
      <SectionTitle eyebrow="API REST" title="API REST Documentada" />

      <div className="glass relative overflow-hidden rounded-3xl p-6 md:p-10">
        {/* terminal header */}
        <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-4 font-mono text-xs text-slate-500">swagger-ui · vita-salud-api</span>
          </div>
          <span className="hidden font-mono text-xs text-[#00f5c4] md:inline">OpenAPI 3.0</span>
        </div>

        {/* tag filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {TAGS.map((t) => {
            const group = GROUPS.find((g) => g.tag === t);
            const c = group?.accent ?? "#00d4ff";
            const isActive = active === t;
            return (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-all ${
                  isActive ? "text-[#0a0f1e]" : "border-white/10 bg-white/[0.03] text-slate-400 hover:text-white"
                }`}
                style={isActive ? { background: c, borderColor: c, boxShadow: `0 0 20px ${c}60` } : {}}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* endpoint groups */}
        <div className="space-y-8">
          {visible.map((group) => (
            <div key={group.tag}>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: group.accent, boxShadow: `0 0 10px ${group.accent}` }} />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: group.accent }}>{group.tag}</span>
                <span className="font-mono text-[11px] text-slate-600">· {group.endpoints.length} endpoints</span>
              </div>
              <div className="space-y-2">
                {group.endpoints.map((e, i) => {
                  const color = METHOD_COLOR[e.m] ?? "#94a3b8";
                  return (
                    <motion.div
                      key={`${e.m}-${e.p}`}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-30px" }}
                      transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.4) }}
                      className="group flex flex-col items-start gap-2 rounded-xl border border-white/10 bg-black/30 p-3.5 transition-all hover:border-white/25 hover:bg-black/40 md:flex-row md:items-center md:gap-4"
                      style={{ borderLeft: `3px solid ${color}` }}
                    >
                      <span
                        className="w-16 shrink-0 rounded-md px-2.5 py-1 text-center font-mono text-[11px] font-bold"
                        style={{ background: `${color}20`, color }}
                      >
                        {e.m}
                      </span>
                      <code className="flex-1 break-all font-mono text-xs text-slate-200 md:text-sm">{e.p}</code>
                      <span className="font-mono text-[11px] text-slate-500 md:text-xs">{e.r}</span>
                      {e.auth && (
                        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] text-slate-400">
                          {e.auth}
                        </span>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs text-[#00d4ff] animate-pulse-glow"
        >
          ⚡ {total} endpoints documentados con OpenAPI / Swagger
        </motion.div>
      </div>
    </Section>
  );
}
