"use client";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import Section from "@/components/organisms/Section";
import classNames from "classnames";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Maps = () => {
  const t = useTranslations("maps");

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <SectionTitle text={t("title")} highlight uppercase />
          </Col>
        </Row>
        <Row mdAlign={Align.center}>
          <Col xs={6}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "400px",
                marginBottom: "1rem",
              }}
            >
              <Image
                src={"/images/mappa.png"}
                fill
                style={{ objectFit: "cover" }} // or 'contain'
                sizes="100vw" // or specific sizes
                alt={t("mapAlt")}
              />
            </div>
            <p className={classNames("text--p-lg")}>
              {t("description")}
            </p>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </Section>
  );
};

export default Maps;
