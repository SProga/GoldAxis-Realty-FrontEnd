import { Button } from "@/components/UI/Button/Button";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-foreground/10 bg-[#101212] p-5 shadow-[0_12px_35px_rgba(0,0,0,0.2)] md:p-7"
    >
      <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.2em] text-primary">
        Send us a message
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-foreground/70">
            First Name
          </span>
          <input
            type="text"
            placeholder="John"
            className="w-full rounded-sm border border-foreground/10 bg-[#161818] px-3 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-primary focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-foreground/70">
            Last Name
          </span>
          <input
            type="text"
            placeholder="Doe"
            className="w-full rounded-sm border border-foreground/10 bg-[#161818] px-3 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-primary focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-foreground/70">
            Email
          </span>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-sm border border-foreground/10 bg-[#161818] px-3 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-primary focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-foreground/70">
            Phone
          </span>
          <input
            type="tel"
            placeholder="(123) 456-7890"
            className="w-full rounded-sm border border-foreground/10 bg-[#161818] px-3 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-primary focus:outline-none"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-foreground/70">
          Select a service
        </span>
        <select className="w-full rounded-sm border border-foreground/10 bg-[#161818] px-3 py-3 text-sm text-foreground focus:border-primary focus:outline-none">
          <option value="">Select a service</option>
          <option>Property Sales</option>
          <option>Property Rentals</option>
          <option>Property Management</option>
          <option>Investment Advisory</option>
          <option>Market Analysis</option>
        </select>
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-foreground/70">
          Message
        </span>
        <textarea
          rows={5}
          placeholder="Tell us about your real estate needs..."
          className="w-full resize-none rounded-sm border border-foreground/10 bg-[#161818] px-3 py-3 text-sm text-foreground placeholder:text-foreground/35 focus:border-primary focus:outline-none"
        />
      </label>

      <Button type="submit" className="mt-7 w-full justify-center">
        Send Message
      </Button>
    </form>
  );
}
