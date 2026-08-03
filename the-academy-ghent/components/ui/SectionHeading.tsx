import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "md" | "lg" | "xl";
}

const sizes = {
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl lg:text-6xl",
  xl: "text-5xl md:text-7xl lg:text-8xl",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "lg",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <Reveal>
      <div className={`flex flex-col gap-5 ${alignment}`}>
        {eyebrow && (
          <div className="font-label uppercase tracking-widest2 text-xs text-bone-muted flex items-center gap-3">
            {align === "left" && <span className="h-px w-8 bg-bone-muted" />}
            {eyebrow}
          </div>
        )}
        <h2 className={`font-display font-extrabold leading-[1.05] tracking-tight ${sizes[size]}`}>
          {title}
        </h2>
        {description && (
          <p className="max-w-xl text-bone-muted text-base md:text-lg leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
