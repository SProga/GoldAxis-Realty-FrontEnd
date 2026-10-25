import ContactFormClient from "@/components/ContactUs/ContactFormClient";
import ContactHero from "@/components/ContactUs/ContactHero";
import ContactInfo from "@/components/ContactUs/ContactInfo";
import { getAppGlobalServer } from "@/lib/init/appGlobalsInit.server";
import { getContactData } from "@/lib/queries/contact/contact";

export const metadata = {
  title: "Contact | Gold Axis",
  description:
    "Get in touch with Gold Axis for luxury property sales, rentals, and tailored real estate guidance in Barbados.",
};

export default async function ContactPage() {
  const { siteSettings } = await getAppGlobalServer();
  const contactData = await getContactData();
  return (
    <main className="pt-[86px] bg-background text-foreground">
      <ContactHero contactData={contactData ?? {}} />
      <section className="mx-auto max-w-[1200px] px-6 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <ContactInfo
            settings={siteSettings ?? {}}
            contactData={contactData ?? {}}
          />
          <ContactFormClient />
        </div>
      </section>
    </main>
  );
}
