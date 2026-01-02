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
              title="Snowboard"
              description="Impariamo insieme le basi dello snowboard, carving, freestyle, freeride e snow tour, 
tutto questo e molto altro."
              button={{
                children: "more info",
                onClick: () => router.push("/snowboard"),
              }}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <CardDisplay
              image="IMG_20241211_124142"
              title="Telemark"
              description="Alla scoperta di una delle discipline più antiche ed originali dello sci, il divertimento è assicurato."
              button={{
                children: "more info",
                onClick: () => router.push("/telemark"),
              }}
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            <CardDisplay
              image="20241030_121452"
              title="Mountain Bike"
              description="Tour organizzati nelle località più spettacolari delle Dolomiti, tecniche di base, enduro e approccio al bike park."
              button={{
                children: "more info",
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
