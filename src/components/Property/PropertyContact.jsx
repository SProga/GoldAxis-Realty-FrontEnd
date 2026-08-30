"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function PropertyContact({ property }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: `I'm interested in ${property?.name || "this property"}.`,
  });

  const update_field = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const submit_form = (event) => {
    event.preventDefault();

    console.log({
      property_id: property?.id,
      property_name: property?.name,
      ...form,
    });
  };

  return (
    <aside className="h-fit rounded-[6px] border border-foreground/10 bg-surface p-5 lg:sticky lg:top-[110px]">
      <h2 className="font-display text-[18px] uppercase text-foreground">
        Interested?
      </h2>

      <p className="mt-2 font-sans text-[12px] leading-5 text-muted">
        Schedule a private viewing of this property.
      </p>

      <form onSubmit={submit_form} className="mt-5 flex flex-col gap-3">
        <input
          type="text"
          value={form.name}
          onChange={(event) => update_field("name", event.target.value)}
          placeholder="Your Name"
          className="h-10 rounded-[4px] border border-foreground/10 bg-background px-3 font-sans text-[12px] text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary/50"
        />

        <input
          type="email"
          value={form.email}
          onChange={(event) => update_field("email", event.target.value)}
          placeholder="Email Address"
          className="h-10 rounded-[4px] border border-foreground/10 bg-background px-3 font-sans text-[12px] text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary/50"
        />

        <input
          type="tel"
          value={form.phone}
          onChange={(event) => update_field("phone", event.target.value)}
          placeholder="Phone Number"
          className="h-10 rounded-[4px] border border-foreground/10 bg-background px-3 font-sans text-[12px] text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary/50"
        />

        <textarea
          value={form.message}
          onChange={(event) => update_field("message", event.target.value)}
          rows={5}
          className="resize-none rounded-[4px] border border-foreground/10 bg-background px-3 py-3 font-sans text-[12px] text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary/50"
        />

        <button
          type="submit"
          className="mt-1 rounded-[4px] bg-primary px-5 py-3 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-background transition-colors hover:bg-primary-light"
        >
          Request Viewing
        </button>
      </form>

      <div className="mt-5 border-t border-foreground/10 pt-5">
        <p className="mb-3 font-sans text-[11px] text-muted">
          Or contact us directly:
        </p>

        <a
          href="tel:+11234567890"
          className="flex items-center gap-2 font-sans text-[11px] text-foreground/80 transition-colors hover:text-primary"
        >
          <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
          <span>(123) 456-7890</span>
        </a>

        <a
          href="mailto:info@prestigeestates.com"
          className="mt-3 flex items-center gap-2 font-sans text-[11px] text-foreground/80 transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
          <span>info@prestigeestates.com</span>
        </a>
      </div>
    </aside>
  );
}
