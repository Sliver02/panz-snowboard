import { Button } from "@/components/atoms/Button";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Paragraphs } from "@/components/atoms/Paragraphs";
import { FadeIn } from "@/components/atoms/FadeIn";
import { CardFrame } from "@/components/molecules/CardFrame";
import { Section } from "@/components/organisms/Section";
import { RouteEnum } from "@/common/routeEnum";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import portraitImage from "@public/images/photo_2024-12-17_23-31-21.jpg";
import styles from "./About.module.scss";

export const About = () => {
	const t = useTranslations("about");
	const general = useTranslations("general");

	return (
		<div className={classNames(styles.about)}>
			<div className={classNames(styles.backgroundGradient)} />
			<Section>
				<Container>
					<Row mdAlign={Align.center}>
						<Col xs={12} md={6}>
							<CardFrame image={portraitImage} alt={t("photoAlt")} />
						</Col>
						<Col xs={12} md={6}>
							<FadeIn>
								<SectionTitle highlight text={t("title")} />
								<Paragraphs text={general("intro")} />
								<Link href={RouteEnum.ABOUT}>
									<Button style={{ marginTop: "1rem" }}>{t("button")}</Button>
								</Link>
							</FadeIn>
						</Col>
					</Row>
				</Container>
			</Section>
		</div>
	);
};
