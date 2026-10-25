"use client";
import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
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

function ActiveFooterLink({ href, className, children }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [linkPath, query] = href.split("?");
  const isActive = pathname === linkPath &&
    [...new URLSearchParams(query)].every(([key, value]) => searchParams.get(key) === value);

  return (
    <Link href={href} aria-current={isActive ? "page" : undefined}
      className={`${className} transition-colors duration-200 ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}>
      {children}
    </Link>
  );
}

function FooterLink({ href, className = "", children }) {
  return (
    <Suspense fallback={<Link href={href} className={`${className} text-foreground/80 transition-colors duration-200 hover:text-primary`}>{children}</Link>}>
      <ActiveFooterLink href={href} className={className}>{children}</ActiveFooterLink>
    </Suspense>
  );
}

export default function Footer({ siteSettings }) {
  const settings = siteSettings ?? {};

  const socialIcons = {
    instagram: Instagram,
    facebook: Facebook,
    linkedin: Linkedin,
  };
  const quick_links = [
    { name: "Buy Property", href: "/properties?property_status=sale" },
    {
      name: "Rent Property",
      href: "/properties?property_status=rent",
    },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faq" },
  ];

  const tools = [{ name: "Mortgage Calculator", href: "/mortgage-calculator" }];

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
                <FooterLink
                  key={link.name}
                  href={link.href}
                  className="font-sans ga_text_sm"
                >
                  {link.name}
                </FooterLink>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display ga_text font-medium uppercase text-primary">
              Tools
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              {tools.map((tool) => (
                <FooterLink
                  key={tool.name}
                  href={tool.href}
                  className="font-sans ga_text_sm"
                >
                  {tool.name}
                </FooterLink>
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

                  <p className="font-sans ga_text_sm leading-6 text-foreground/80">
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
            <FooterLink
              href="/privacy"
            >
              Privacy Policy
            </FooterLink>

            <FooterLink
              href="/terms"
            >
              Terms of Service
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
