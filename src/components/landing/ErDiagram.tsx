import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

type Field = { name: string; type: "AZ" | "123" | "DT" | "FK" | "PK" };

const TYPE_COLOR: Record<Field["type"], string> = {
  PK: "#fbbf24",
  AZ: "#60a5fa",
  "123": "#34d399",
  DT: "#a78bfa",
  FK: "#f472b6",
};

export type ErTable = {
  name: string;
  fields: Field[];
  x: number;
  y: number;
  accent?: string;
};

export type ErRelation = {
  from: string;
  to: string;
  label?: string;
  fromField?: string;
  toField?: string;
  color?: string;
};

const TABLE_WIDTH = 220;

function TableCard({ table, delay }: { table: ErTable; delay: number }) {
  const accent = table.accent ?? "#3b82f6";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="absolute w-[220px] overflow-hidden rounded-lg border border-white/10 bg-[#111827] font-mono text-[11px] shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
      style={{ left: table.x, top: table.y }}
    >
      <div
        className="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider"
        style={{ background: `${accent}40`, color: "#e0f2fe", borderBottom: `1px solid ${accent}80` }}
      >
        <span className="text-[9px]">▦</span>
        {table.name}
      </div>
      <ul className="divide-y divide-white/5">
        {table.fields.map((f) => (
          <li key={f.name} className="flex items-center gap-2 px-2.5 py-1 text-slate-300">
            <span
              className="rounded-sm px-1 py-px text-[8px] font-bold"
              style={{ background: `${TYPE_COLOR[f.type]}25`, color: TYPE_COLOR[f.type] }}
            >
              {f.type}
            </span>
            <span className={`truncate ${f.type === "PK" ? "font-semibold text-white" : ""}`}>{f.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ErDiagram({
  tables,
  width,
  height,
  caption,
  relations,
}: {
  tables: ErTable[];
  width: number;
  height: number;
  caption?: string;
  relations?: ErRelation[];
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const tableMap = new Map(tables.map((table) => [table.name, table]));
  const visibleRelations =
    relations ??
    tables.slice(0, -1).map((table, index) => ({
      from: table.name,
      to: tables[index + 1].name,
    }));

  useLayoutEffect(() => {
    const update = () => {
      const available = frameRef.current?.clientWidth ?? width;
      setScale(Math.min(1, available / width));
    };
    update();
    const observer = new ResizeObserver(update);
    if (frameRef.current) observer.observe(frameRef.current);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [width]);

  return (
    <div className="glass liquid-glass rounded-2xl p-4 sm:p-6">
      <div
        ref={frameRef}
        className="relative mx-auto overflow-hidden"
        style={{ height: height * scale }}
      >
        <div
          className="relative mx-auto origin-top-left"
          style={{ width, height, transform: `scale(${scale})` }}
        >
          {/* connection lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            width={width}
            height={height}
            style={{ pointerEvents: "none" }}
          >
            <defs>
              <linearGradient id="erLine" x1="0" x2="1">
                <stop offset="0" stopColor="#00d4ff" stopOpacity="0.6" />
                <stop offset="1" stopColor="#7c3aed" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {visibleRelations.map((relation, i) => {
                const t = tableMap.get(relation.from);
                const next = tableMap.get(relation.to);
                if (!t || !next) return null;
                const fromIndex = Math.max(0, t.fields.findIndex((field) => field.name === relation.fromField));
                const toIndex = Math.max(0, next.fields.findIndex((field) => field.name === relation.toField));
                const leftToRight = t.x < next.x;
                const x1 = leftToRight ? t.x + TABLE_WIDTH : t.x;
                const x2 = leftToRight ? next.x : next.x + TABLE_WIDTH;
                const y1 = t.y + 32 + fromIndex * 24;
                const y2 = next.y + 32 + toIndex * 24;
                const gap = Math.abs(x2 - x1);
                const elbow =
                  gap < 90
                    ? (x1 + x2) / 2
                    : leftToRight
                      ? Math.min(x1 + 70 + i * 18, x2 - 24)
                      : Math.max(x1 - 70 - i * 18, x2 + 24);
                const stroke = relation.color ?? "#00d4ff";
                return (
                  <g key={`${relation.from}-${relation.to}-${i}`}>
                    <path
                      d={`M${x1},${y1} L${elbow},${y1} L${elbow},${y2} L${x2},${y2}`}
                      stroke={stroke}
                      strokeWidth="2.2"
                      fill="none"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      opacity="0.82"
                    />
                    <circle cx={x1} cy={y1} r="4.5" fill={stroke} opacity="0.95" />
                    <circle cx={x2} cy={y2} r="4.5" fill={stroke} opacity="0.95" />
                    {relation.label && (
                      <text
                        x={elbow + (leftToRight ? 8 : -8)}
                        y={(y1 + y2) / 2 - 8}
                        textAnchor={leftToRight ? "start" : "end"}
                        className="fill-slate-400 font-mono text-[10px]"
                      >
                        {relation.label}
                      </text>
                    )}
                  </g>
                );
              })}
          </svg>
          {tables.map((t, i) => (
            <TableCard key={t.name} table={t} delay={i * 0.1} />
          ))}
        </div>
      </div>
      {caption && (
        <div className="mt-4 text-center font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
          {caption}
        </div>
      )}
    </div>
  );
}
