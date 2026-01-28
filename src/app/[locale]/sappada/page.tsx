import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Image from "next/image";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const SappadaPage = () => {
  const t = useTranslations("sappada");
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
          src: "/images/location/sappada_summer1.jpg",
          alt: "Sappada panorama",
          position: "center",
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
                  src="/images/location/sappada_winter1.jpg"
                  alt="Sappada winter"
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
            >
              <Col xs={12} md={6} lg={5} className={styles.textCol}>
                <p className="text--p-lg">{t("winterP2")}</p>
              </Col>
              <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                <Image
                  src="/images/location/sappada_winter2.jpg"
                  alt="Sappada winter 2"
                  width={1200}
                  height={800}
                  className={styles.responsiveImage}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Section>

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
                  src="/images/location/sappada_summer1.jpg"
                  alt="Sappada summer"
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
            >
              <Col xs={12} md={6} lg={5} className={styles.textCol}>
                <p className="text--p-lg">{t("summerP2")}</p>
              </Col>
              <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                <Image
                  src="/images/location/sappada_summer2.jpg"
                  alt="Sappada summer 2"
                  width={1200}
                  height={800}
                  className={styles.responsiveImage}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default SappadaPage;
