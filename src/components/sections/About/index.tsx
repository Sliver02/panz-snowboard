import Button from "@/components/atoms/Button";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardFrame from "@/components/molecules/CardFrame";
import Section from "@/components/organisms/Section";
import { RouteEnum } from "@/common/routeEnum";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("about");
  const general = useTranslations("general");

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <CardFrame image="photo_2024-12-17_23-31-21" alt={t("photoAlt")} />
          </Col>
          <Col xs={12} md={6}>
            <Row mdAlign={Align.center}>
              <Col>
                <SectionTitle highlight text={t("title")} />
                <p className={classNames("text--p-lg")}>{general("intro")}</p>
                <Link href={RouteEnum.ABOUT}>
                  <Button style={{ marginTop: "1rem" }}>{t("button")}</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
