import "@/designSystem/globals.scss";
import classNames from "classnames";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import ThemeProviderWrapper from "./ThemeProviderWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
});

const rightGrotesk = localFont({
  src: "../../../public/fonts/RightGrotesk.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-grotesk",
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
    "@type": ["YogaStudio", "SportsActivityLocation"],
    name: "SMUP — Sarah Pompanin Yoga",
    alternateName: "SMUP Yoga",
    url: `https://smupyoga.com/${locale}/`,
    email: "smup.yoga@gmail.com",
    telephone: "+39 366 145 0576",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Viale Dolomiti 9",
      addressLocality: "Ponte nelle Alpi",
      postalCode: "32014",
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
        name: "Ponte nelle Alpi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Cadore",
      },
    ],
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "20:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Yoga Classes",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Anukalana Yoga",
            description:
              locale === "it"
                ? "Pratica integrata che unisce asana, pranayama, meditazione e lavoro miofasciale"
                : "Integrated practice combining asana, pranayama, meditation and fascia work",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yin Yoga",
            description:
              locale === "it"
                ? "Sequenze lente e passive con supporti"
                : "Slow passive postures aided by props",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "it" ? "Yoga Bimbi" : "Kids Yoga",
            description:
              locale === "it"
                ? "Lezioni giocose per bambini"
                : "Playful sessions for children",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: locale === "it" ? "Lezioni Private" : "Private Lessons",
            description:
              locale === "it"
                ? "Lezioni private online e in presenza"
                : "Private lessons online and in-person",
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
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="alternate" href="https://smupyoga.com/en/" hrefLang="en" />
        <link rel="alternate" href="https://smupyoga.com/it/" hrefLang="it" />
        <link
          rel="alternate"
          href="https://smupyoga.com/"
          hrefLang="x-default"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={classNames(inter.variable, rightGrotesk.variable)}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProviderWrapper>
            <div className={classNames("root")}>{children}</div>
          </ThemeProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
