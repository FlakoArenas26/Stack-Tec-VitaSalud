export default function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#02030a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.08),transparent_32%),linear-gradient(180deg,#02030a_0%,#050712_45%,#02030a_100%)]" />
      <div className="stars-layer stars-layer-a" />
      <div className="stars-layer stars-layer-b" />
      <div className="stars-layer stars-layer-c" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_48%,rgba(0,0,0,0.58)_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] grid-bg" />
    </div>
  );
}
