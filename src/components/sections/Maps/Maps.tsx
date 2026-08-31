"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Section } from "@/components/organisms/Section";
import classNames from "classnames";
import Image from "next/image";
import mapImage from "@public/images/mappa.png";
import { useTranslations } from "next-intl";

export const Maps = () => {
	const t = useTranslations("maps");
	const general = useTranslations("general");

	return (
		<Section id="locations">
			<Container>
				<Row>
					<Col xs={12}>
						<SectionTitle text={t("title")} highlight uppercase />
					</Col>
				</Row>
				<Row mdAlign={Align.center}>
					<Col xs={12} md={6}>
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "400px",
								marginBottom: "1rem",
							}}
						>
							<Image
								src={mapImage}
								placeholder="blur"
								fill
								style={{ objectFit: "cover" }} // or 'contain'
								sizes="100vw" // or specific sizes
								alt={t("mapAlt")}
							/>
						</div>
						<p className={classNames("text--p-lg")}>{general("intro")}</p>
					</Col>
					<Col xs={12} md={6}></Col>
				</Row>
			</Container>
		</Section>
	);
};
