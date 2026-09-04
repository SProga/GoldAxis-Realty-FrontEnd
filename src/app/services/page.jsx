import ServicesFooterCTA from "@/components/Services/page/ServiceFooterCTA";
import ServicesHeader from "@/components/Services/ServicesHeader";
import ServicesList from "@/components/Services/ServicesList";
import { getServicesPageData } from "@/lib/queries/services/services";

export default async function ServicesPage() {
  const service_page = await getServicesPageData();
  console.log("service_page", service_page);

  return (
    <main className="min-h-screen bg-background pt-[86px]">
      <ServicesHeader hero={service_page?.hero} />
      <ServicesList services={service_page?.services || []} />
      <ServicesFooterCTA cta={service_page?.footer_cta} />
    </main>
  );
}
