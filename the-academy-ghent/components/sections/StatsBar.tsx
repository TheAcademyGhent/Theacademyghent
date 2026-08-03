import StatCounter from "@/components/ui/StatCounter";
import { STATS } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="bg-ink border-y border-surface-hairline">
      <div className="container-academy py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        {STATS.map((stat) => (
          <StatCounter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}
