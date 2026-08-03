"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: koppel aan een echte e-mailservice (bv. Mailchimp, Resend, Brevo).
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-sm text-bone-muted">
        <Check size={16} /> Bedankt, je staat op de lijst.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-stretch border-b border-bone-muted/40 focus-within:border-bone">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Je e-mailadres"
        className="bg-transparent flex-1 py-3 text-sm placeholder:text-bone-muted/60 focus:outline-none"
      />
      <button type="submit" aria-label="Inschrijven" className="px-2 text-bone-muted hover:text-bone transition-colors">
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
