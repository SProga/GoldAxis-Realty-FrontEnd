import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const defaultDetails = {
  address: "98 Sunset Boulevard, St. Lawrence, Barbados",
  phone: "+1 (246) 555-7890",
  email: "hello@prestigeestates.com",
  hours: "Monday - Friday, 9:00 AM - 5:00 PM\nSaturday By Appointment",
};

export default function ContactInfo({ settings = {} }) {
  const details = {
    address: settings.address || defaultDetails.address,
    phone: settings.phone || defaultDetails.phone,
    email: settings.email || defaultDetails.email,
    hours: settings.business_hours || settings.hours || defaultDetails.hours,
  };

  const blocks = [
    {
      icon: MapPin,
      label: "Office Address",
      value: details.address,
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: details.phone,
      href: `tel:${details.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: details.email,
      href: `mailto:${details.email}`,
    },
    {
      icon: Clock3,
      label: "Business Hours",
      value: details.hours,
      href: null,
    },
  ];

  return (
    <div className="space-y-8 md:pr-6">
      <div>
        <p className="font-display text-[22px] uppercase tracking-[0.1em] text-primary">
          Let&apos;s Start a Conversation
        </p>
        <p className="mt-4 max-w-[420px] text-sm leading-7 text-foreground/70">
          Whether you&apos;re looking to buy, sell, or invest in property, our
          team is here to help. We&apos;ll respond with expert guidance and
          tailored support.
        </p>
      </div>

      <div className="space-y-5">
        {blocks.map(({ icon: Icon, label, value, href }) => (
          <div key={label} className="flex items-start gap-4">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/5 text-primary">
              <Icon className="h-4 w-4" strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-primary/90">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="mt-2 block text-sm leading-6 text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  {value}
                </a>
              ) : (
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-foreground/80">
                  {value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
