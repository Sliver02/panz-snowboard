"use client";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { Section } from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { PackageCard } from "@/components/molecules/PackageCard";
import { useRouter } from "next/navigation";
import heroImage from "@public/images/2020_Bike_Ebike_67_FrancoisPanchard.jpg";
import package1Image from "@public/images/Veneto_Pieve_Cadore.jpg";
import package2Image from "@public/images/photo_2025-04-09_16-51-22.jpg";
import package3Image from "@public/images/vign_resize.jpg";

const MountainBikePage = () => {
	const t = useTranslations("activities.mountainBike");
	const breadcrumb = useTranslations("breadcrumb");
	const router = useRouter();

	return (
		<main>
			<Header />
			<Hero
				compact
				negative
				title={t("title")}
				subtitle={t("heroSubtitle")}
				backgroundImage={{
					src: heroImage,
					alt: "Mountain bike tours in the Dolomites",
					position: "center",
				}}
				breadcrumbItems={[{ label: breadcrumb("home"), href: "/" }, { label: t("title") }]}
			/>
			<Section>
				<Container>
					<Row xsJustify={Justify.center}>
						<Col>
							<p className={classNames("text--p-lg")}>{t("extendedDescription")}</p>
						</Col>
					</Row>
					<Row>
						<Col>
							<SectionTitle text={t("packages.title")} center />
						</Col>
					</Row>
					<Row>
						<Col xs={12} md={6} lg={4}>
							<PackageCard
								image={package1Image}
								title={t("packages.package1.title")}
								subtitle={t("packages.package1.subtitle")}
								price={t("packages.package1.price")}
								onClick={() => router.push("/booking?activity=mountain-bike")}
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<PackageCard
								image={package2Image}
								title={t("packages.package2.title")}
								subtitle={t("packages.package2.subtitle")}
								price={t("packages.package2.price")}
								onClick={() => router.push("/booking?activity=mountain-bike")}
							/>
						</Col>
						<Col xs={12} md={6} lg={4}>
							<PackageCard
								image={package3Image}
								title={t("packages.package3.title")}
								subtitle={t("packages.package3.subtitle")}
								price={t("packages.package3.price")}
								onClick={() => router.push("/booking?activity=mountain-bike")}
							/>
						</Col>
					</Row>
				</Container>
			</Section>
			<Footer />
		</main>
	);
};

export default MountainBikePage;
