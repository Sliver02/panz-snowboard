"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardDisplay from "@/components/molecules/CardDisplay";
import Section from "@/components/organisms/Section";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Disciplines = () => {
  const t = useTranslations("disciplines");
  const router = useRouter();

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
              image="DDF02641"
              title={t("snowboard.title")}
              description={t("snowboard.description")}
              button={{
                children: t("snowboard.button"),
                onClick: () => router.push("/snowboard"),
              }}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <CardDisplay
              image="IMG_20241211_124142"
              title={t("telemark.title")}
              description={t("telemark.description")}
              button={{
                children: t("telemark.button"),
                onClick: () => router.push("/telemark"),
              }}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <CardDisplay
              image="20241030_121452"
              title={t("mountainBike.title")}
              description={t("mountainBike.description")}
              button={{
                children: t("mountainBike.button"),
                onClick: () => router.push("/mountain-bike"),
              }}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Disciplines;
