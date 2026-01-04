"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { useTranslations } from "next-intl";
import classNames from "classnames";

const MountainBikePage = () => {
  const t = useTranslations("activities.mountainBike");
  const breadcrumb = useTranslations("breadcrumb");

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={t("heroSubtitle")}
        backgroundImage={{
          src: "/images/20241030_121452.jpg",
          alt: "Mountain bike tours in the Dolomites",
          position: "center",
        }}
        breadcrumbItems={[
          { label: breadcrumb("home"), href: "/" },
          { label: t("title") },
        ]}
      />
      <Section>
        <Container>
          <Row>
            <Col xs={12} lg={10}>
              <p className={classNames("text--p-lg")}>
                {t("extendedDescription")}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </main>
  );
};

export default MountainBikePage;
