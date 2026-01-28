import "@/designSystem/globals.scss";
import classNames from "classnames";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter, Anton } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: {
    default:
      "Lorenzo Panzera | Snowboard, Telemark, Mountain bike, Hiking, Dolomites, Cortina",
    template: "%s | Lorenzo Panzera",
  },
  description:
    "Outdoor adventures with Lorenzo Panzera in Cortina d'Ampezzo, Belluno, and Cadore. Snowboard, Telemark, Mountain bike, Hiking in the Dolomites.",
  openGraph: {
    title:
      "Lorenzo Panzera | Snowboard, Telemark, Mountain bike, Hiking, Dolomites, Cortina",
    description:
      "Lorenzo Panzera's outdoor adventures in Cortina d'Ampezzo, Belluno, Cadore. Snowboard, Telemark, Mountain bike, Hiking in the Dolomites.",
    url: "https://lorenzopanzera.com",
    siteName: "Lorenzo Panzera",
    images: [
      {
        url: "https://lorenzopanzera.com/images/20241121_100155.jpg",
        width: 1200,
        height: 630,
        alt: "Lorenzo Panzera in the Dolomites",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lorenzo Panzera | Snowboard, Telemark, Mountain bike, Hiking, Dolomites, Cortina",
    description:
      "Outdoor adventures with Lorenzo Panzera in Cortina d'Ampezzo, Belluno, and Cadore. Snowboard, Telemark, Mountain bike, Hiking in the Dolomites.",
  },
  alternates: {
    canonical: "https://lorenzopanzera.com/",
    languages: {
      en: "https://lorenzopanzera.com/en/",
      it: "https://lorenzopanzera.com/it/",
    },
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Extract the locale from the route params (async for Next.js App Router)
  const { locale } = await params;

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": ["Snowboard", "SportsActivity"],
    name: "Lorenzo Panzera - Snowboard & mountain bike Instructor",
    alternateName: "Lorenzo Panzera - Snowboard & mountain bike Instructor",
    url: `https://lorenzopanzera.com/${locale}/`,
    email: "lorenzopanzera@gmail.com",
    telephone: "+39 366 145 0576",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Via Galghena 15",
      addressLocality: "Pieve di Cadore",
      postalCode: "32044",
      addressRegion: "Belluno",
      addressCountry: "IT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "46.1786",
      longitude: "12.2981",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Cortina d'Ampezzo",
      },
      {
        "@type": "City",
        name: "Belluno",
      },
      {
        "@type": "City",
        name: "Pieve di Cadore",
      },
      {
        "@type": "AdministrativeArea",
        name: "Cadore",
      },
      {
        "@type": "AdministrativeArea",
        name: "Ampezzo",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:30",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Snowboard and Mountain Bike Lessons",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Snowboard Lessons",
            description:
              locale === "it"
                ? "Lezioni di snowboard per esperti e principianti tra le Dolomiti"
                : "Snowboard lessons for experts and beginners in the Dolomites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mountain Bike Lessons",
            description:
              locale === "it"
                ? "Lezioni di mountain bike per esperti e principianti tra le Dolomiti"
                : "Mountain bike lessons for experts and beginners in the Dolomites",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Telemark Lessons",
            description:
              locale === "it"
                ? "Telemark per esperti e principianti tra le Dolomiti"
                : "Telemark for experts and beginners in the Dolomites",
          },
        },
      ],
    },
  };

  // Load the translation messages for the selected locale
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} data-theme="light">
      <head>
        <link
          rel="alternate"
          href="https://lorenzopanzera.com/en/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://lorenzopanzera.com/it/"
          hrefLang="it"
        />
        <link
          rel="alternate"
          href="https://lorenzopanzera.com/"
          hrefLang="x-default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={classNames(inter.variable, anton.variable)}>
        <NextIntlClientProvider messages={messages}>
          <div className={classNames("root")}>{children}</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
