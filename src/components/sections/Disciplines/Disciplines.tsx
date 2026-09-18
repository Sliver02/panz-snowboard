"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { CardDisplay } from "@/components/molecules/CardDisplay";
import { Section } from "@/components/organisms/Section";
import { RouteEnum } from "@/common/routeEnum";
import { useTranslations } from "next-intl";
import snowboardImage from "@public/images/DDF02641.jpg";
import telemarkImage from "@public/images/IMG_20241211_124142.jpg";
import mountainBikeImage from "@public/images/20241030_121452.jpg";

export const Disciplines = () => {
	const t = useTranslations("activities");

	return (
		<Section>
			<Container>
				<Row>
					<Col>
						<SectionTitle text={t("title")} center />
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6} lg={4}>
						<CardDisplay
							image={snowboardImage}
							title={t("snowboard.title")}
							href={RouteEnum.SNOWBOARD}
						/>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<CardDisplay
							image={telemarkImage}
							title={t("telemark.title")}
							href={RouteEnum.TELEMARK}
						/>
					</Col>
					<Col xs={12} md={6} lg={4}>
						<CardDisplay
							image={mountainBikeImage}
							title={t("mountainBike.title")}
							href={RouteEnum.MOUNTAIN_BIKE}
						/>
					</Col>
				</Row>
			</Container>
		</Section>
	);
};
