"use client";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Image from "next/image";
import Footer from "@/components/organisms/Footer";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

export interface ImagePair {
  left: string;
  right: string;
}

export interface LocationPageProps {
  namespace: string; // translation namespace, e.g. "cortina"
  backgroundImage: {
    src: string;
    alt?: string;
    position?: "center" | "top" | "bottom" | "left" | "right" | undefined;
  };
  intro?: boolean;
  winter?: ImagePair;
  summer?: ImagePair;
  heroSubtitle?: string;
}

const LocationPage = ({
  namespace,
  backgroundImage,
  winter,
  summer,
  heroSubtitle,
}: LocationPageProps) => {
  const t = useTranslations(namespace);
  const breadcrumb = useTranslations("breadcrumb");

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={heroSubtitle ?? t("subtitle")}
        backgroundImage={{
          src: backgroundImage.src,
          alt: backgroundImage.alt ?? t("title"),
          position: backgroundImage.position ?? "center",
        }}
        breadcrumbItems={[
          { label: breadcrumb("home"), href: "/" },
          { label: t("title") },
        ]}
      />

      <Section spacing="tight">
        <Container>
          <Row xsJustify={Justify.center}>
            <Col xs={12} lg={10}>
              <h2 className={styles.sectionTitle}>{t("title")}</h2>
              <p className="text--p-lg">{t("description")}</p>
            </Col>
          </Row>
        </Container>
      </Section>

      {winter && (
        <Section>
          <div className={styles.tightSection}>
            <Container>
              <Row xsJustify={Justify.center}>
                <Col xs={12} lg={10}>
                  <h3 className={styles.sectionTitle}>{t("winterTitle")}</h3>
                </Col>
              </Row>

              <Row
                xsJustify={Justify.center}
                gap="16px"
                className={styles.rowBlock}
              >
                <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                  <Image
                    src={winter.left}
                    alt=""
                    width={1200}
                    height={800}
                    className={styles.responsiveImage}
                  />
                </Col>
                <Col xs={12} md={6} lg={5} className={styles.textCol}>
                  <p className="text--p-lg">{t("winterP1")}</p>
                </Col>
              </Row>

              <div className={styles.blockSpacing} />

              <Row
                xsJustify={Justify.center}
                gap="16px"
                className={styles.rowBlock}
                mdReverse
              >
                <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                  <Image
                    src={winter.right}
                    alt=""
                    width={1200}
                    height={800}
                    className={styles.responsiveImage}
                  />
                </Col>
                <Col xs={12} md={6} lg={5} className={styles.textCol}>
                  <p className="text--p-lg">{t("winterP2")}</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Section>
      )}

      {summer && (
        <Section>
          <div className={styles.tightSection}>
            <Container>
              <Row xsJustify={Justify.center}>
                <Col xs={12} lg={10}>
                  <h3 className={styles.sectionTitle}>{t("summerTitle")}</h3>
                </Col>
              </Row>

              <Row
                xsJustify={Justify.center}
                gap="16px"
                className={styles.rowBlock}
              >
                <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                  <Image
                    src={summer.left}
                    alt=""
                    width={1200}
                    height={800}
                    className={styles.responsiveImage}
                  />
                </Col>
                <Col xs={12} md={6} lg={5} className={styles.textCol}>
                  <p className="text--p-lg">{t("summerP1")}</p>
                </Col>
              </Row>

              <div className={styles.blockSpacing} />

              <Row
                xsJustify={Justify.center}
                gap="16px"
                className={styles.rowBlock}
                mdReverse
              >
                <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                  <Image
                    src={summer.right}
                    alt=""
                    width={1200}
                    height={800}
                    className={styles.responsiveImage}
                  />
                </Col>
                <Col xs={12} md={6} lg={5} className={styles.textCol}>
                  <p className="text--p-lg">{t("summerP2")}</p>
                </Col>
              </Row>
            </Container>
          </div>
        </Section>
      )}

      <Footer />
    </main>
  );
};

export default LocationPage;
