import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  const quick_links = [
    { name: "Buy Property", href: "/properties?type=buy" },
    { name: "Rent Property", href: "/properties?type=rent" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Luxury Sales",
    "Premium Rentals",
    "Property Management",
    "Investment Advisory",
    "Market Analysis",
  ];

  return (
    <footer className="border-t border-foreground/5 bg-background px-6 py-16 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div>
            <Link href="/" className="flex items-baseline gap-2">
              <span className="font-display text-[24px] font-semibold uppercase text-primary">
                Prestige
              </span>

              <span className="font-display text-[20px] uppercase text-foreground/80">
                Estates
              </span>
            </Link>

            <p className="mt-5 max-w-[280px] font-sans text-[13px] font-light leading-6 text-muted">
              Redefining luxury real estate with unparalleled service, exclusive
              properties, and a commitment to excellence that transcends
              expectations.
            </p>

            <div className="mt-6 flex items-center gap-5 text-muted">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors duration-200 hover:text-primary"
              >
                <Instagram size={20} strokeWidth={1.6} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors duration-200 hover:text-primary"
              >
                <Facebook size={20} strokeWidth={1.6} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="transition-colors duration-200 hover:text-primary"
              >
                <Linkedin size={20} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-[16px] font-medium uppercase text-primary">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quick_links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-[13px] text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-[16px] font-medium uppercase text-primary">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="font-sans text-[13px] text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-[16px] font-medium uppercase text-primary">
              Contact Us
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.6}
                />

                <p className="font-sans text-[13px] font-light leading-6 text-foreground/80">
                  9876 Sunset Boulevard
                  <br />
                  Beverly Hills, CA 90210
                </p>
              </div>

              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 font-sans text-[13px] text-foreground/80 transition-colors duration-200 hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" strokeWidth={1.6} />
                <span>(123) 456-7890</span>
              </a>

              <a
                href="mailto:info@prestigeestates.com"
                className="flex items-center gap-3 font-sans text-[13px] text-foreground/80 transition-colors duration-200 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" strokeWidth={1.6} />
                <span>info@prestigeestates.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-foreground/10 pt-8 font-sans text-[11px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Prestige Estates. All rights reserved.
          </p>

          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-primary"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-primary"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
