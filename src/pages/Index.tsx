import { Helmet } from "react-helmet";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import PainSection from "@/components/landing/PainSection";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import AgitationBanner from "@/components/landing/AgitationBanner";
import SolutionSection from "@/components/landing/SolutionSection";
import DataVizSection from "@/components/landing/DataVizSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";


const Index = () => {
  return (
    <>
      <Helmet>
        <title>Oscar Tirado Gómez | Mantenimiento Profesional de Piscinas | Inspección Gratis</title>
        <meta
          name="description"
          content="Servicio profesional de mantenimiento de piscinas. Recupera tu tiempo libre con nuestro sistema Oscar Tirado Gómez. Primera inspección de balance químico GRATIS. +500 familias satisfechas."
        />
        <meta
          content="mantenimiento piscinas Zaragoza, limpieza piscinas Zaragoza, balance químico piscina, servicio piscinas, mantenimiento piscinas precio, Oscar Tirado Gómez"
        />
        <meta property="og:title" content="Oscar Tirado Gómez | Mantenimiento Profesional de Piscinas" />
        <meta
          property="og:description"
          content="¿Tu piscina es un placer o una carga? Recupera 80h/año con nuestro servicio profesional. Inspección GRATIS."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.oscartiradogomez.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Oscar Tirado Gómez - Mantenimiento de Piscinas",
              "image": "https://www.oscartiradogomez.com/logo-tg.png",
              "telephone": "+34 650 802 198",
              "email": "info@oscartiradogomez.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Zaragoza",
                "addressRegion": "Zaragoza",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.6488",
                "longitude": "-0.8891" 
              },
              "url": "https://www.oscartiradogomez.com",
              "priceRange": "€€",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  "opens": "08:00",
                  "closes": "19:00"
                }
              ],
              "sameAs": [
                "https://instagram.com/oscartiradogomez"
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <WhatsAppButton />

        <main>
          <HeroSection />
          <PainSection />
          <AgitationBanner />
          <section id="servicios">
            <SolutionSection />
          </section>
          <section id="resultados">
            <DataVizSection />
          </section>
          <TestimonialsSection />
          <PricingSection />
          <section id="faq">
            <FAQSection />
          </section>
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
