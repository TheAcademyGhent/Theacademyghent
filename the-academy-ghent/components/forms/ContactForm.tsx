"use client";

import { FormEvent, useState } from "react";
import { Check, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 text-center py-16 border border-surface-hairline clip-cut-md">
        <Check size={32} strokeWidth={1.5} />
        <p className="font-display text-xl font-bold">Bericht verstuurd</p>
        <p className="text-bone-muted text-sm max-w-xs">
          We nemen zo snel mogelijk contact met je op.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-b border-surface-hairline focus:border-bone py-3 text-sm placeholder:text-bone-muted/60 focus:outline-none transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <input
          required
          placeholder="Naam"
          value={form.name}
          onChange={handleChange("name")}
          className={inputClass}
        />
        <input
          required
          type="email"
          placeholder="E-mailadres"
          value={form.email}
          onChange={handleChange("email")}
          className={inputClass}
        />
      </div>
      <input
        placeholder="Telefoonnummer (optioneel)"
        value={form.phone}
        onChange={handleChange("phone")}
        className={inputClass}
      />
      <textarea
        required
        rows={4}
        placeholder="Je bericht"
        value={form.message}
        onChange={handleChange("message")}
        className={`${inputClass} resize-none`}
      />

      {status === "error" && (
        <p className="text-sm text-bone-muted">
          Er ging iets mis. Probeer opnieuw of mail ons rechtstreeks.
        </p>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-fit">
        {status === "loading" ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          "Verstuur bericht"
        )}
      </Button>
    </form>
  );
}
