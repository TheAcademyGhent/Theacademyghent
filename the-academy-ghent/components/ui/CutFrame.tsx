import Image from "next/image";

interface CutFrameProps {
  src: string;
  alt: string;
  cut?: "sm" | "md" | "lg";
  reverse?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
  overlay?: boolean;
}

const cutClass = {
  sm: "clip-cut-sm",
  md: "clip-cut-md",
  lg: "clip-cut-lg",
};

const cutClassReverse = {
  sm: "clip-cut-sm-r",
  md: "clip-cut-md-r",
  lg: "clip-cut-lg-r",
};

export default function CutFrame({
  src,
  alt,
  cut = "lg",
  reverse = false,
  className = "",
  priority = false,
  sizes = "100vw",
  overlay = true,
}: CutFrameProps) {
  const clip = reverse ? cutClassReverse[cut] : cutClass[cut];

  return (
    <div className={`relative overflow-hidden bg-surface ${clip} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover grayscale contrast-[1.08] brightness-[0.85]"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/10" />
      )}
    </div>
  );
}
