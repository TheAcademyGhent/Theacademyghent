"use client";

import { FormEvent, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";
import { CLASSES } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

const MOMENTS = ["Overdag", "Vroege avond (17:00–19:00)", "Late avond (19:00–21:00)", "Weekend"];

export default function TrialForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    classSlug: CLASSES[0].slug,
    moment: MOMENTS[0],
    notes: "",
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-surface-hairline focus:border-bone py-3 text-sm placeholder:text-bone-muted/60 focus:outline-none transition-colors";

  const selectClass = `${inputClass} appearance-none`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-20 border border-surface-hairline clip-cut-lg">
        <Check size={36} strokeWidth={1.5} />
        <p className="font-display text-2xl font-bold">Proefles aangevraagd</p>
        <p className="text-bone-muted text-sm max-w-sm">
          We bevestigen je gratis proefles via e-mail of telefoon binnen de
          24 uur, met een concreet lesmoment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input required placeholder="Naam" value={form.name} onChange={update("name")} className={inputClass} />
        <input
          required
          type="email"
          placeholder="E-mailadres"
          value={form.email}
          onChange={update("email")}
          className={inputClass}
        />
      </div>

      <input
        required
        placeholder="Telefoonnummer"
        value={form.phone}
        onChange={update("phone")}
        className={inputClass}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted">
            Gewenste les
          </label>
          <select value={form.classSlug} onChange={update("classSlug")} className={selectClass}>
            {CLASSES.map((c) => (
              <option key={c.slug} value={c.slug} className="bg-ink">
                {c.name} — {c.audience}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label uppercase tracking-widest2 text-[10px] text-bone-muted">
            Voorkeursmoment
          </label>
          <select value={form.moment} onChange={update("moment")} className={selectClass}>
            {MOMENTS.map((m) => (
              <option key={m} value={m} className="bg-ink">
                {m}
              </option>
            ))}
          </select>
        </div>
      </div>

      <textarea
        rows={3}
        placeholder="Opmerkingen (optioneel) — bv. blessures, eerdere ervaring"
        value={form.notes}
        onChange={update("notes")}
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="text-sm text-bone-muted">
          Er ging iets mis. Probeer opnieuw of bel ons rechtstreeks.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-fit">
        {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : "Bevestig aanvraag"}
      </Button>
    </form>
  );
}
