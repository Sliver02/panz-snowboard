"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { useTranslations } from "next-intl";
import classNames from "classnames";

const TelemarkPage = () => {
  const t = useTranslations("activities.telemark");
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
          src: "/images/IMG_20241211_124142.jpg",
          alt: "Telemark skiing in the Dolomites",
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

export default TelemarkPage;
