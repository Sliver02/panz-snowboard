"use client";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import Image, { StaticImageData } from "next/image";
import { Footer } from "@/components/organisms/Footer";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { Snowflake, Sun } from "lucide-react";
import styles from "./LocationPage.module.scss";
import { CTABooking } from "@/components/sections/CTABooking";
import { LocationsMap, MapFocus } from "@/components/molecules/LocationsMap";
import { CardFrame } from "@/components/molecules/CardFrame";
import { FadeIn } from "@/components/atoms/FadeIn";
import { Paragraphs } from "@/components/atoms/Paragraphs";

export interface SeasonContent {
	/** Import the image so Next generates its blur placeholder. */
	mainImage: StaticImageData;
	/** Optional second photo, shown as a smaller inset over the main one. */
	insetImage?: StaticImageData;
}

export interface LocationPageProps {
	namespace: string; // translation namespace, e.g. "cortina"
	backgroundImage: {
		/** Import the image so Next generates its blur placeholder. */
		src: StaticImageData;
		alt?: string;
		position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
	};
	intro?: boolean;
	winter?: SeasonContent;
	summer?: SeasonContent;
	heroSubtitle?: string;
	/** Small credit line for sourced (non-own-camera) photography, e.g. Wikimedia Commons attribution. */
	imageCredits?: string;
	/** Center/zoom for this location's own map embed. Omit to show the full overview. */
	mapFocus?: MapFocus;
}

interface SeasonSectionProps {
	title: string;
	icon: "winter" | "summer";
	content: SeasonContent;
	paragraphs: string;
	reverse?: boolean;
	imageCredits?: string;
}

const SeasonSection = ({
	title,
	icon,
	content,
	paragraphs,
	reverse,
	imageCredits,
}: SeasonSectionProps) => (
	<Section
		backgroundColor={icon === "winter" ? "var(--palette-blue-100)" : "var(--palette-sand-300)"}
	>
		<Container>
			<Row mdAlign={Align.center} mdReverse={reverse}>
				<Col xs={12} md={7} className={styles.photoCol}>
					<div className={styles.mainPhoto}>
						<CardFrame image={content.mainImage} alt="" />
						{content.insetImage && (
							<div
								className={classNames(styles.insetPhoto, {
									[styles.insetPhotoReverse]: reverse,
								})}
							>
								<Image
									src={content.insetImage}
									alt=""
									fill
									style={{ objectFit: "cover" }}
									placeholder="blur"
								/>
							</div>
						)}
					</div>
				</Col>
				<Col xs={12} md={5} className={styles.textCol}>
					<FadeIn>
						<h3 className={classNames(styles.sectionTitle, styles.seasonTitle)}>
							{icon === "winter" ? (
								<Snowflake size={28} aria-hidden />
							) : (
								<Sun size={28} aria-hidden />
							)}
							{title}
						</h3>
						<Paragraphs text={paragraphs} />
						{imageCredits && (
							<p className={classNames("text--p-xs", styles.imageCredits)}>{imageCredits}</p>
						)}
					</FadeIn>
				</Col>
			</Row>
		</Container>
	</Section>
);

export const LocationPage = ({
	namespace,
	backgroundImage,
	winter,
	summer,
	heroSubtitle,
	imageCredits,
	mapFocus,
}: LocationPageProps) => {
	const t = useTranslations(namespace);
	const breadcrumb = useTranslations("breadcrumb");

	return (
		<main>
			<Header />
			<Hero
				compact
				negative
				title={t("title")}
				subtitle={heroSubtitle ?? t("subtitle")}
				backgroundImage={{
					src: backgroundImage.src,
					alt: backgroundImage.alt ?? t("title"),
					position: backgroundImage.position ?? "center",
				}}
				breadcrumbItems={[{ label: breadcrumb("home"), href: "/" }, { label: t("title") }]}
			/>

			<Section spacing="tight">
				<Container>
					<Row mdAlign={Align.center}>
						<Col xs={12} md={6}>
							<FadeIn>
								<h2 className={styles.sectionTitle}>{t("title")}</h2>
								<Paragraphs text={t("description")} />
							</FadeIn>
						</Col>
						<Col xs={12} md={5} mdOffset={1}>
							<div className={styles.mapContainer}>
								<LocationsMap focus={mapFocus} />
							</div>
						</Col>
					</Row>
				</Container>
			</Section>

			{winter && (
				<SeasonSection
					title={t("winterTitle")}
					icon="winter"
					content={winter}
					paragraphs={`${t("winterP1")}\n\n${t("winterP2")}`}
				/>
			)}

			{summer && (
				<SeasonSection
					title={t("summerTitle")}
					icon="summer"
					content={summer}
					paragraphs={`${t("summerP1")}\n\n${t("summerP2")}`}
					reverse
					imageCredits={imageCredits}
				/>
			)}

			<CTABooking />
			<Footer />
		</main>
	);
};
