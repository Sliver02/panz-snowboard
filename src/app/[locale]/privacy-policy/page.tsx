"use client";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Section } from "@/components/organisms/Section";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import "@/designSystem/utils.scss";

const PrivacyPolicyPage = () => {
	const t = useTranslations("privacyPage");

	return (
		<main>
			<Header />

			<Section style={{ paddingTop: "12rem" }}>
				<Container>
					<Row xsJustify={Justify.center}>
						<Col xs={12} md={8} lg={8}>
							<SectionTitle highlight text={t("title")} />

							<p className={classNames("text--p-lg")}>{t("description.p1")}</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title3")}</h3>
							<p className={classNames("text--p-lg")}>
								{t.rich("description.p3", { br: () => <br /> })}
							</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title4")}</h3>
							<p className={classNames("text--p-lg")}>
								{t.rich("description.p4", { br: () => <br /> })}
							</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title5")}</h3>
							<p className={classNames("text--p-lg")}>
								{t.rich("description.p5", { br: () => <br /> })}
							</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title6")}</h3>
							<p className={classNames("text--p-lg")}>{t("description.p6")}</p>

							<h3 className={classNames("text--h-sm")}>{t("description.title2")}</h3>
							<p className={classNames("text--p-lg")}>
								{t.rich("description.p2", { br: () => <br /> })}
							</p>
						</Col>
					</Row>
				</Container>
			</Section>

			<Footer />
		</main>
	);
};

export default PrivacyPolicyPage;
