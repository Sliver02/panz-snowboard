// Project-specific SEO content. The handling lives in `@/common/seo` (identical across projects).
import { RouteEnum } from "@/common/routeEnum";
import type { Page } from "@/common/seo";
import type { Locale } from "@/i18n/routing";

export const SITE_URL = "https://lorenzopanzera.com";
export const SITE_NAME = "Lorenzo Panzera";

/** `og:locale` value for each supported locale. */
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", it: "it_IT" };

/** Routes that are real pages (RouteEnum entries such as mailto: or #anchors are excluded). */
export type PageRoute = RouteEnum;

// Every page route needs copy in every locale. TypeScript fails the build when one is missing.
// Titles ≤ ~50 chars (SITE_NAME is appended), descriptions ≤ ~160, images under 5 MB.
export const pages: Record<PageRoute, Page> = {
	[RouteEnum.HOME]: {
		image: "20241121_100155.jpg",
		en: {
			title: "Lorenzo Panzera | Snowboard, Telemark & MTB in the Dolomites",
			description:
				"Snowboard and telemark lessons and mountain bike tours with Lorenzo Panzera in Cortina, Cadore, Sappada and Zoldo. Based in Pieve di Cadore, Dolomites.",
		},
		it: {
			title: "Lorenzo Panzera | Snowboard, Telemark e MTB nelle Dolomiti",
			description:
				"Lezioni di snowboard e telemark e tour in mountain bike con Lorenzo Panzera a Cortina, Cadore, Sappada e Zoldo. Base a Pieve di Cadore, Dolomiti.",
		},
	},
	[RouteEnum.ABOUT]: {
		image: "photo_2023-12-22_09-57-05.jpg",
		en: {
			title: "About Lorenzo Panzera",
			description:
				"Meet Lorenzo Panzera, aka Panz: snowboard and telemark instructor and mountain bike guide based in Pieve di Cadore, in the Belluno Dolomites.",
		},
		it: {
			title: "Chi è Lorenzo Panzera",
			description:
				"Conosci Lorenzo Panzera, detto Panz: maestro di snowboard e telemark e guida di mountain bike con base a Pieve di Cadore, nelle Dolomiti Bellunesi.",
		},
	},
	[RouteEnum.SNOWBOARD]: {
		image: "DDF02641.jpg",
		en: {
			title: "Snowboard Lessons in Cortina and Cadore",
			description:
				"Snowboard lessons in the Dolomites for beginners to experts: carving, freestyle, freeride and snow tours around Cortina, Cadore, Sappada and Zoldo.",
		},
		it: {
			title: "Lezioni di Snowboard a Cortina e Cadore",
			description:
				"Lezioni di snowboard nelle Dolomiti per principianti ed esperti: carving, freestyle, freeride e snow tour tra Cortina, Cadore, Sappada e Zoldo.",
		},
	},
	[RouteEnum.TELEMARK]: {
		image: "IMG_20241211_124142.jpg",
		en: {
			title: "Telemark Skiing Lessons in the Dolomites",
			description:
				"Learn telemark with Lorenzo Panzera: free-heel technique, stance and telemark turns for beginners and experienced skiers, around Cortina and Cadore.",
		},
		it: {
			title: "Lezioni di Telemark nelle Dolomiti",
			description:
				"Impara il telemark con Lorenzo Panzera: tecnica a tallone libero, postura e curve telemark per principianti ed esperti, tra Cortina e Cadore.",
		},
	},
	[RouteEnum.MOUNTAIN_BIKE]: {
		image: "2020_Bike_Ebike_67_FrancoisPanchard.jpg",
		en: {
			title: "Mountain Bike Guide and Lessons in the Dolomites",
			description:
				"Guided mountain bike tours and technique lessons in the Dolomites: cross-country, enduro and bike park sessions for all levels, from Cadore and Cortina.",
		},
		it: {
			title: "Guida e Lezioni di Mountain Bike nelle Dolomiti",
			description:
				"Tour guidati e lezioni di tecnica in mountain bike nelle Dolomiti: cross-country, enduro e bike park per tutti i livelli, da Cadore e Cortina.",
		},
	},
	[RouteEnum.CORTINA]: {
		image: "location/cortina_winter2.jpg",
		en: {
			title: "Snowboard, Telemark & MTB in Cortina d'Ampezzo",
			description:
				"Lessons and guided outings with Lorenzo Panzera in Cortina d'Ampezzo, in the UNESCO Dolomites: snowboard and telemark in winter, mountain bike in summer.",
		},
		it: {
			title: "Snowboard, Telemark e MTB a Cortina d'Ampezzo",
			description:
				"Lezioni e uscite guidate con Lorenzo Panzera a Cortina d'Ampezzo, nelle Dolomiti UNESCO: snowboard e telemark d'inverno, mountain bike d'estate.",
		},
	},
	[RouteEnum.SAPPADA]: {
		image: "location/sappada_winter2.jpg",
		en: {
			title: "Snowboard, Telemark & MTB in Sappada",
			description:
				"Lessons and guided outings in Sappada, an alpine village with family-friendly slopes and scenic trails: snowboard and telemark in winter, mountain bike in summer.",
		},
		it: {
			title: "Snowboard, Telemark e MTB a Sappada",
			description:
				"Lezioni e uscite guidate a Sappada, borgo alpino con piste per famiglie e sentieri panoramici: snowboard e telemark d'inverno, mountain bike d'estate.",
		},
	},
	[RouteEnum.ZOLDO_CIVETTA]: {
		image: "location/zoldo_summer2.jpg",
		en: {
			title: "Snowboard, Telemark & MTB in Zoldo and Civetta",
			description:
				"Lessons and guided outings in the Zoldo valley and Civetta massif, away from the busiest resorts: freeride and telemark in winter, mountain bike in summer.",
		},
		it: {
			title: "Snowboard, Telemark e MTB in Zoldo e Civetta",
			description:
				"Lezioni e uscite guidate nella valle di Zoldo e sul Civetta, lontano dai comprensori più affollati: freeride e telemark d'inverno, mountain bike d'estate.",
		},
	},
	[RouteEnum.CADORE]: {
		image: "location/cadore_hero.jpg",
		en: {
			title: "Snowboard, Telemark & MTB in Cadore",
			description:
				"Lessons and guided outings from Pieve di Cadore, a short reach from the Tre Cime di Lavaredo, Lago di Misurina and Lago di Centro Cadore, winter and summer.",
		},
		it: {
			title: "Snowboard, Telemark e MTB in Cadore",
			description:
				"Lezioni e uscite guidate da Pieve di Cadore, a due passi dalle Tre Cime di Lavaredo, dal Lago di Misurina e dal Lago di Centro Cadore, d'inverno e d'estate.",
		},
	},
	[RouteEnum.BOOKING]: {
		image: "DDF02641.jpg",
		en: {
			title: "Book a Lesson or Tour",
			description:
				"Request a snowboard, telemark or mountain bike lesson or tour with Lorenzo Panzera in the Dolomites: choose dates, activity and level.",
		},
		it: {
			title: "Prenota una Lezione o un Tour",
			description:
				"Richiedi una lezione o un tour di snowboard, telemark o mountain bike con Lorenzo Panzera nelle Dolomiti: scegli date, attività e livello.",
		},
	},
	[RouteEnum.PRIVACY_POLICY]: {
		image: "20241121_100155.jpg",
		noindex: true,
		en: {
			title: "Privacy Policy",
			description:
				"How Lorenzo Panzera processes personal data collected through this website.",
		},
		it: {
			title: "Informativa sulla privacy",
			description:
				"Come Lorenzo Panzera tratta i dati personali raccolti tramite questo sito.",
		},
	},
};

/**
 * schema.org JSON-LD rendered in the root layout's <head>.
 * Only put facts you have confirmed here: wrong data is worse than none.
 */
export const structuredData = (locale: string) => {
	const isItalian = locale === "it";

	return {
		"@context": "https://schema.org",
		"@type": "SportsActivityLocation",
		name: "Lorenzo Panzera - Snowboard, Telemark & mountain bike Instructor",
		alternateName: "Lorenzo Panzera",
		url: `${SITE_URL}/${locale}`,
		image: `${SITE_URL}/images/20241121_100155.jpg`,
		email: "panzisco@gmail.com",
		telephone: "+39 338 809 0798",
		sameAs: ["https://www.instagram.com/lorenz_panz/"],
		address: {
			"@type": "PostalAddress",
			streetAddress: "Via Galghena 15",
			addressLocality: "Pieve di Cadore",
			postalCode: "32044",
			addressRegion: "Belluno",
			addressCountry: "IT",
		},
		areaServed: [
			{ "@type": "City", name: "Cortina d'Ampezzo" },
			{ "@type": "City", name: "Belluno" },
			{ "@type": "City", name: "Pieve di Cadore" },
			{ "@type": "AdministrativeArea", name: "Cadore" },
			{ "@type": "AdministrativeArea", name: "Ampezzo" },
			{ "@type": "City", name: "Sappada" },
			{ "@type": "AdministrativeArea", name: "Zoldo" },
		],
		priceRange: "€€",
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Snowboard and Mountain Bike Lessons",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Snowboard Lessons",
						description: isItalian
							? "Lezioni di snowboard per esperti e principianti tra le Dolomiti"
							: "Snowboard lessons for experts and beginners in the Dolomites",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Mountain Bike Lessons",
						description: isItalian
							? "Lezioni di mountain bike per esperti e principianti tra le Dolomiti"
							: "Mountain bike lessons for experts and beginners in the Dolomites",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Telemark Lessons",
						description: isItalian
							? "Telemark per esperti e principianti tra le Dolomiti"
							: "Telemark for experts and beginners in the Dolomites",
					},
				},
			],
		},
	};
};
