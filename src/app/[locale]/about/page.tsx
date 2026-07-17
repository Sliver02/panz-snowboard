"use client";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { CardFrame } from "@/components/molecules/CardFrame";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CTABooking } from "@/components/sections/CTABooking";

const AboutPage = () => {
	const t = useTranslations("aboutPage");
	const breadcrumb = useTranslations("breadcrumb");

	return (
		<main>
			<Header />
			<Hero
				compact
				negative
				title={t("title")}
				subtitle={t("subtitle")}
				backgroundImage={{
					src: "/images/photo_2023-12-22_09-57-05.jpg",
					alt: "Lorenzo Panzera - Snowboard instructor in the Dolomites",
					position: "center",
				}}
				breadcrumbItems={[{ label: breadcrumb("home"), href: "/" }, { label: t("title") }]}
			/>
			<Section>
				<Container>
					<Row xsJustify={Justify.center}>
						<Col xs={12} md={8} lg={7}>
							<SectionTitle highlight text={t("title")} />

							<p className={classNames("text--p-lg")}>{t("description.p1")}</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title2")}</h3>
							<p className={classNames("text--p-lg")}>
								{t.rich("description.p2", {
									br: () => <br />,
								})}
							</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title3")}</h3>
							<p className={classNames("text--p-lg")}>
								{t.rich("description.p3", {
									br: () => <br />,
								})}
							</p>
						</Col>

						<Col xs={12} md={4} lg={4}>
							<CardFrame
								image="photo_2025-11-28_10-54-35"
								alt={"profile picture of Lorenzo Panzera"}
							/>
						</Col>
					</Row>
				</Container>
			</Section>
			<CTABooking />
			<Footer />
		</main>
	);
};

export default AboutPage;
