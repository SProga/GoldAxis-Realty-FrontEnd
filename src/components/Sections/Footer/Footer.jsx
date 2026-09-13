"use client";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import ImageRenderer from "@/components/UI/ImageRenderer/ImageRenderer";

export default function Footer({ siteSettings }) {
  const settings = siteSettings ?? {};

  console.log("settings", settings);

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
  };
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
            <Link href="/">
              {settings.logo?.url ? (
                <ImageRenderer
                  width={64}
                  height={64}
                  src={settings.logo.url}
                  alt={
                    settings.logo.alternativeText ||
                    settings.site_name ||
                    "Home"
                  }
                />
              ) : (
                settings.site_name || "Home"
              )}
            </Link>
            <p className="mt-5 max-w-[280px] font-sans ga_text_sm font-light leading-6 text-muted">
              Redefining luxury real estate with unparalleled service, exclusive
              properties, and a commitment to excellence that transcends
              expectations.
            </p>

            <div className="mt-6 flex items-center gap-5 text-muted">
              {(settings.social_link ?? [])
                .filter((social) => social.link)
                .map((social) => {
                  const Icon = socialIcons[social.title?.toLowerCase()];
                  return (
                    <a
                      key={social.id}
                      href={social.link}
                      aria-label={social.title || "Social media"}
                      className="transition-colors duration-200 hover:text-primary"
                    >
                      {social.icon?.url ? (
                        <ImageRenderer
                          src={social.icon.url}
                          width={20}
                          height={20}
                          alt=""
                        />
                      ) : Icon ? (
                        <Icon size={20} strokeWidth={1.6} />
                      ) : (
                        social.title || "Social media"
                      )}
                    </a>
                  );
                })}
            </div>
          </div>

          <div>
            <h3 className="font-display ga_text font-medium uppercase text-primary">
              Quick Links
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {quick_links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans ga_text_sm text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display ga_text font-medium uppercase text-primary">
              Services
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="font-sans ga_text_sm text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display ga_text font-medium uppercase text-primary">
              Contact Us
            </h3>

            <div className="mt-6 flex flex-col gap-5">
              {settings.address && (
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                    strokeWidth={1.6}
                  />

                  <p className="font-sans ga_text_sm font-light leading-6 text-foreground/80">
                    {settings.address}
                  </p>
                </div>
              )}

              {settings.phone && (
                <a
                  href={`tel:${settings.phone.replace(/[^+\d]/g, "")}`}
                  className="flex items-center gap-3 font-sans ga_text_sm text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  <span>{settings.phone}</span>
                </a>
              )}

              {settings.email && (
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-3 font-sans ga_text_sm text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  <span>{settings.email}</span>
                </a>
              )}
              {settings.whatsapp && (
                <a
                  href={`https://wa.me/${settings.whatsapp.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 font-sans ga_text_sm text-foreground/80 transition-colors duration-200 hover:text-primary"
                >
                  <MessageCircle
                    className="h-4 w-4 text-primary"
                    strokeWidth={1.6}
                  />
                  <span>WhatsApp {settings.whatsapp}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-5 border-t border-foreground/10 pt-8 font-sans text-[11px] text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {settings.site_name}. All rights
            reserved.
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
