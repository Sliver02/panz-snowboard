"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { useTranslations } from "next-intl";
import classNames from "classnames";

const AboutPage = () => {
  const t = useTranslations("aboutPage");
  const breadcrumb = useTranslations("breadcrumb");

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage={{
          src: "/images/photo_2024-12-17_23-31-21.jpg",
          alt: "Lorenzo Panzera - Snowboard instructor in the Dolomites",
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
                {t("extendedDescription")
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <span key={index}>
                      {paragraph}
                      {index <
                        t("extendedDescription").split("\n\n").length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </main>
  );
};

export default AboutPage;
