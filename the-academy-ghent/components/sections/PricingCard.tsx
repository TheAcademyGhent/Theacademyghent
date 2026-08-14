import { Check } from "lucide-react";
import { MembershipTier } from "@/types";
import Button from "@/components/ui/Button";
import { CTA_HREF } from "@/lib/constants";

interface PricingCardProps {
  tier: MembershipTier;
}

export default function PricingCard({ tier }: PricingCardProps) {
  const featured = tier.featured;

  return (
    <div
      className={`flex flex-col gap-8 p-8 md:p-10 clip-cut-md border ${
        featured
          ? "bg-bone text-ink border-bone"
          : "bg-ink text-bone border-surface-hairline"
      }`}
    >
      <div className="flex flex-col gap-2">
        {featured && (
          <span className="font-label uppercase tracking-widest2 text-[10px] text-ink/60 mb-1">
            Meest gekozen
          </span>
        )}
        <h3 className="font-display text-2xl font-extrabold">{tier.name}</h3>
        <p className={`text-sm ${featured ? "text-ink/70" : "text-bone-muted"}`}>{tier.idealFor}</p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="font-display text-4xl md:text-5xl font-extrabold">{tier.price}</span>
        <span className={`text-sm ${featured ? "text-ink/60" : "text-bone-muted"}`}>{tier.billing}</span>
      </div>

      <ul className="flex flex-col gap-3 flex-1">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check size={16} className={`mt-0.5 shrink-0 ${featured ? "text-ink" : "text-bone-muted"}`} />
            <span className={featured ? "text-ink/90" : "text-bone/90"}>{f}</span>
          </li>
        ))}
      </ul>

      <Button href="/schrijf-je-in" variant={featured ? "secondary" : "primary"} size="md" className={featured ? "!border-ink !text-ink hover:!bg-ink hover:!text-bone" : ""}>
        Kies {tier.name}
      </Button>
    </div>
  );
}
