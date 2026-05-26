import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Typewriter({
  text,
  speed = 18,
  className = "",
  cursorColor = "#00d4ff",
}: {
  text: string;
  speed?: number;
  className?: string;
  cursorColor?: string;
}) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const startedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    setShown("");
    setDone(false);
    let i = 0;
    intervalRef.current = setInterval(() => {
      i += 2;
      if (i >= text.length) {
        setShown(text);
        setDone(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
      } else {
        setShown(text.slice(0, i));
      }
    }, speed);
  };

  const reset = () => {
    startedRef.current = false;
    setShown("");
    setDone(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    },
    [],
  );

  return (
    <motion.p
      onViewportEnter={start}
      onViewportLeave={reset}
      viewport={{ once: false, margin: "-80px" }}
      className={className}
    >
      <span className="whitespace-pre-wrap">{shown}</span>
      {!done && (
        <span
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-1 animate-blink"
          style={{ background: cursorColor }}
        />
      )}
    </motion.p>
  );
}
