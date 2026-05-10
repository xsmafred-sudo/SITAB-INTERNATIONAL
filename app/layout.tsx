import { themesConfig } from "@/components/templates/notio/notio-themes";
import { ColorThemeSwitcher } from "@/components/theme/color-theme-switcher";
import { ThemeVariables } from "@/components/theme/theme-variables";
import { ColorThemeProvider } from "@/hooks/color-theme-context";
import { ThemeProvider } from "@/components/theme-provider";
import { Aleo } from "next/font/google";
import "./index.css";

const aleo = Aleo({ subsets: ["latin"], variable: "--font-notio-aleo" });
const notioSansFont =
  '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, ui-sans-serif, sans-serif';
const themeNames = ["basil", "forest", "sunny"];

const themeSwatches: Record<string, string> = {
  basil: "oklch(0.6292 0.0458 300.3136)",
  forest: "oklch(0.8348 0.1302 160.9080)",
  sunny: "oklch(0.713 0.1305 61.77)",
};
export const metadata = {
  title: "SITAB INTERNATIONAL | Rénovation, Topographie & VRD au Cameroun",
  description: "Expert en rénovation immobilière, levés topographiques, VRD et domotique au Cameroun. Spécialiste en coulage de sol résine epoxy, curage de canalisations et systèmes intelligents à Yaoundé.",
  keywords: [
    "rénovation immobilière Cameroun", 
    "topographie Yaoundé", 
    "VRD Cameroun", 
    "plomberie Yaoundé", 
    "curage canalisations", 
    "domotique Cameroun", 
    "systèmes intelligents habitat", 
    "SITAB INTERNATIONAL",
    "coulage sol résine epoxy",
    "débouchage canalisations",
    "installation ascenseur maison",
    "levé topographique Soa",
    "détartrage chauffe-eau",
    "BTP Cameroun"
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://sitab-international.com",
  },
  openGraph: {
    title: "SITAB INTERNATIONAL | Experts en Bâtiment, Topographie & Domotique",
    description: "Transformation et maintenance technique de votre habitat au Cameroun. Rénovation, Topographie, VRD et Domotique de pointe.",
    url: "https://sitab-international.com",
    siteName: "SITAB INTERNATIONAL",
    locale: "fr_FR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "SITAB INTERNATIONAL",
  "image": "https://sitab-international.com/logo.png",
  "@id": "https://sitab-international.com",
  "url": "https://sitab-international.com",
  "telephone": "+237697082105",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Montée EKOUNOU, CARROSSELLE",
    "addressLocality": "Yaoundé",
    "addressCountry": "CM"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 3.848,
    "longitude": 11.502
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services SITAB INTERNATIONAL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Rénovation de bâtiment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Levés Topographiques et VRD"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Curage et Débouchage"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Domotique et Systèmes Intelligents"
        }
      }
    ]
  },
  "sameAs": [
    "https://facebook.com/sitabinternational",
    "https://linkedin.com/company/sitabinternational"
  ]
};

export default function NotioTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${aleo.variable} min-h-screen bg-background text-foreground`}
        style={{ fontFamily: notioSansFont }}
      >
        <div
          className={`${aleo.variable} min-h-screen bg-background text-foreground`}
          style={{ fontFamily: notioSansFont }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ColorThemeProvider>
              <ThemeVariables themesConfig={themesConfig} />
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />
              {children}
              <ColorThemeSwitcher
                themeNames={themeNames}
                themeSwatches={themeSwatches}
              />
            </ColorThemeProvider>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
