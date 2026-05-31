import { cn } from "@/lib/utils";

type PersonAvatarProps = {
  src: string;
  alt: string;
  accent: string;
  size?: "md" | "lg" | "xl";
  className?: string;
};

const sizes = {
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
};

export function PersonAvatar({ src, alt, accent, size = "lg", className }: PersonAvatarProps) {
  return (
    <div
      className={cn("relative shrink-0 rounded-3xl p-1", sizes[size], className)}
      style={{
        background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.16))`,
        boxShadow: `0 0 36px ${accent}30`,
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-[1.25rem] object-cover"
        loading="lazy"
      />
    </div>
  );
}
