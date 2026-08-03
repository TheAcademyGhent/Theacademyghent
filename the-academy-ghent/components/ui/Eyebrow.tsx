interface EyebrowProps {
  children: string;
  className?: string;
  light?: boolean;
}

export default function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-3 font-label uppercase tracking-widest2 text-xs ${
        light ? "text-ink/60" : "text-bone-muted"
      } ${className}`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </div>
  );
}
