import type React from "react";
import { Code2, Database, FileJson2, Flame, GitBranch, LockKeyhole, ShieldCheck, Workflow } from "lucide-react";
import { useState } from "react";

export type TechLogoName =
  | "react"
  | "typescript"
  | "vite"
  | "tailwind"
  | "radix"
  | "framer"
  | "lucide"
  | "rhf"
  | "zod"
  | "node"
  | "express"
  | "jwt"
  | "bcrypt"
  | "validator"
  | "rate-limit"
  | "swagger"
  | "cors"
  | "dotenv"
  | "mysql"
  | "sequelize"
  | "migration"
  | "habeas"
  | "vscode"
  | "figma"
  | "dbeaver"
  | "workbench"
  | "npm"
  | "git"
  | "ts-node";

const colors: Record<TechLogoName, string> = {
  react: "#61dafb",
  typescript: "#3178c6",
  vite: "#a78bfa",
  tailwind: "#38bdf8",
  radix: "#e2e8f0",
  framer: "#f0abfc",
  lucide: "#fbbf24",
  rhf: "#ec4899",
  zod: "#2563eb",
  node: "#83cd29",
  express: "#e5e7eb",
  jwt: "#a78bfa",
  bcrypt: "#f97316",
  validator: "#38bdf8",
  "rate-limit": "#ef4444",
  swagger: "#85ea2d",
  cors: "#06b6d4",
  dotenv: "#ecd53f",
  mysql: "#00758f",
  sequelize: "#52b0e7",
  migration: "#fbbf24",
  habeas: "#34d399",
  vscode: "#007acc",
  figma: "#a259ff",
  dbeaver: "#3a8de2",
  workbench: "#f29111",
  npm: "#cb3837",
  git: "#f05033",
  "ts-node": "#3178c6",
};

const simpleIconSlug: Partial<Record<TechLogoName, string>> = {
  react: "react",
  typescript: "typescript",
  vite: "vite",
  tailwind: "tailwindcss",
  radix: "radixui",
  framer: "framer",
  lucide: "lucide",
  rhf: "reacthookform",
  zod: "zod",
  node: "nodedotjs",
  express: "express",
  jwt: "jsonwebtokens",
  swagger: "swagger",
  dotenv: "dotenv",
  mysql: "mysql",
  sequelize: "sequelize",
  vscode: "visualstudiocode",
  figma: "figma",
  dbeaver: "dbeaver",
  npm: "npm",
  git: "git",
};

function Mark({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <span
      className="relative flex h-full w-full items-center justify-center rounded-xl border text-[#0a0f1e]"
      style={{ background: color, borderColor: `${color}80`, boxShadow: `0 0 24px ${color}50` }}
    >
      {children}
    </span>
  );
}

export function TechLogo({ name, className = "" }: { name: TechLogoName; className?: string }) {
  const color = colors[name];
  const [failed, setFailed] = useState(false);
  const slug = simpleIconSlug[name];

  if (slug && !failed) {
    return (
      <span
        className={`relative flex items-center justify-center overflow-hidden rounded-xl border bg-white/[0.06] p-2.5 ${className}`}
        style={{ borderColor: `${color}55`, boxShadow: `0 0 24px ${color}35` }}
      >
        <img
          src={`https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`}
          alt=""
          loading="lazy"
          className="h-full w-full object-contain"
          onError={() => setFailed(true)}
        />
      </span>
    );
  }

  if (name === "react") {
    return (
      <span className={`relative flex items-center justify-center ${className}`} style={{ color }}>
        <svg viewBox="0 0 64 64" className="h-full w-full">
          <circle cx="32" cy="32" r="5.5" fill="currentColor" />
          <ellipse cx="32" cy="32" rx="27" ry="10" fill="none" stroke="currentColor" strokeWidth="3" />
          <ellipse cx="32" cy="32" rx="27" ry="10" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(60 32 32)" />
          <ellipse cx="32" cy="32" rx="27" ry="10" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(120 32 32)" />
        </svg>
      </span>
    );
  }

  if (name === "figma") {
    return (
      <span className={`grid grid-cols-2 grid-rows-3 overflow-hidden rounded-xl ${className}`}>
        <span className="bg-[#f24e1e]" />
        <span className="rounded-r-full bg-[#ff7262]" />
        <span className="bg-[#a259ff]" />
        <span className="rounded-r-full bg-[#1abcfe]" />
        <span className="rounded-bl-full rounded-tl-full bg-[#0acf83]" />
        <span />
      </span>
    );
  }

  const text: Partial<Record<TechLogoName, string>> = {
    typescript: "TS",
    vite: "V",
    tailwind: "~",
    radix: "R",
    framer: "F",
    node: "N",
    express: "EX",
    jwt: "JWT",
    bcrypt: "BC",
    validator: "EV",
    "rate-limit": "RL",
    swagger: "{ }",
    cors: "CORS",
    dotenv: ".env",
    mysql: "SQL",
    sequelize: "S",
    npm: "npm",
    "ts-node": "TS",
  };

  const icon: Partial<Record<TechLogoName, React.ReactNode>> = {
    lucide: <Workflow className="h-6 w-6" />,
    rhf: <FileJson2 className="h-6 w-6" />,
    zod: <ShieldCheck className="h-6 w-6" />,
    migration: <GitBranch className="h-6 w-6" />,
    habeas: <LockKeyhole className="h-6 w-6" />,
    vscode: <Code2 className="h-6 w-6" />,
    dbeaver: <Database className="h-6 w-6" />,
    workbench: <Database className="h-6 w-6" />,
    git: <Flame className="h-6 w-6" />,
  };

  return (
    <span className={`block ${className}`}>
      <Mark color={color}>
        {icon[name] ?? <span className="font-mono text-[10px] font-black leading-none">{text[name]}</span>}
      </Mark>
    </span>
  );
}

export function techColor(name: TechLogoName) {
  return colors[name];
}
