import { Coach } from "@/types";

function initials(name: string) {
  return name
    .split(" ")
    .filter((w) => w.length > 1)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

interface CoachCardProps {
  coach: Coach;
  compact?: boolean;
}

export default function CoachCard({ coach, compact = false }: CoachCardProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/5] clip-cut-md bg-surface border border-surface-hairline flex items-center justify-center overflow-hidden group">
        <span className="font-display text-6xl md:text-7xl font-extrabold text-bone-muted/25 group-hover:text-bone-muted/40 transition-colors duration-500">
          {initials(coach.name)}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-ink/60 to-transparent" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-bold">{coach.name}</h3>
        <span className="font-label uppercase tracking-widest2 text-[11px] text-bone-muted">
          {coach.role}
        </span>

        {!compact && (
          <>
            <p className="text-bone-muted text-sm leading-relaxed mt-3">{coach.bio}</p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {coach.credentials.map((c) => (
                <li key={c} className="text-xs text-bone-muted flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 bg-bone-muted shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
