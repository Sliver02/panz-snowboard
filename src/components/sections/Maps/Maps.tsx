"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Section } from "@/components/organisms/Section";
import { LocationsMap } from "@/components/molecules/LocationsMap";
import { FadeIn } from "@/components/atoms/FadeIn";
import classNames from "classnames";
import { useTranslations } from "next-intl";

export const Maps = () => {
	const t = useTranslations("maps");

	return (
		<Section id="locations">
			<Container>
				<Row mdAlign={Align.center}>
					<Col xs={12} md={7}>
						<div
							style={{
								position: "relative",
								width: "100%",
								height: "500px",
							}}
						>
							<LocationsMap />
						</div>
					</Col>
					<Col xs={12} md={4} mdOffset={1}>
						<FadeIn>
							<SectionTitle text={t("title")} highlight uppercase />
							<p className={classNames("text--p-lg")}>{t("description")}</p>
						</FadeIn>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
