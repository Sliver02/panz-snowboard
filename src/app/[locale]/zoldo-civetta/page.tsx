import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import Image from "next/image";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const ZoldoCivettaPage = () => {
  const t = useTranslations("zoldoCivetta");
  const breadcrumb = useTranslations("breadcrumb");

  // short sentence requested for header
  const headerSubtitle = "Zoldo e Civetta offrono esperienze autentiche nelle Dolomiti con piste poco affollate e sentieri selvaggi.";
  const subtitle = headerSubtitle;

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={subtitle}
        backgroundImage={{
          src: "/images/location/zoldo_summer2.jpg",
          alt: "Zoldo and Civetta panorama",
          position: "center",
        }}
        breadcrumbItems={[{ label: breadcrumb("home"), href: "/" }, { label: t("title") }]}
      />

      <Section spacing="tight">
        <Container>
          <Row xsJustify={Justify.center}>
            <Col xs={12} lg={10}>
              <h2 className={styles.sectionTitle}>Zoldo & Civetta</h2>
              <p className="text--p-lg">
                Zoldo and the Civetta massif sit in the heart of the Dolomites and together offer some of the most authentic mountain experiences in the region. Wild, uncrowded slopes and dramatic limestone walls make this area ideal for both winter adventures and summer exploration. Whether you come for technical descents or quiet alpine trails, the area rewards curiosity and bold riding.
              </p>
            </Col>
          </Row>
        </Container>
      </Section>

      <Section>
        <div className={styles.tightSection}>
          <Container>
            <Row xsJustify={Justify.center}>
              <Col xs={12} lg={10}>
                <h3 className={styles.sectionTitle}>Winter — Civetta & Zoldo</h3>
              </Col>
            </Row>

            <Row xsJustify={Justify.center} gap="16px" className={styles.rowBlock}>
              <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                <Image src="/images/location/zoldo_winter2.jpg" alt="Civetta winter" width={1200} height={800} className={styles.responsiveImage} />
              </Col>
              <Col xs={12} md={6} lg={5} className={styles.textCol}>
                <p className="text--p-lg">
                  The Civetta ski area features long, well-prepared runs, steep
                  couloirs and excellent freeride terrain. Zoldo complements the
                  area with quieter valleys, classic telemark lines and a strong
                  mountain culture.
                </p>
              </Col>
            </Row>

            <div className={styles.blockSpacing} />

            <Row xsJustify={Justify.center} gap="16px" className={styles.rowBlock}>
              <Col xs={12} md={6} lg={5} className={styles.textCol}>
                <p className="text--p-lg">
                  In Zoldo you can also arrange night rides — guided evening
                  excursions and moonlit descents that turn familiar slopes into
                  a magical alpine experience under the stars.
                </p>
              </Col>
              <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                <Image src="/images/location/zoldo_winter3.jpg" alt="Zoldo winter" width={1200} height={800} className={styles.responsiveImage} />
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
                <h3 className={styles.sectionTitle}>Summer — Trails & Mountain Bike Tours</h3>
              </Col>
            </Row>

            <Row xsJustify={Justify.center} gap="16px" className={styles.rowBlock}>
              <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                <Image src="/images/location/zoldo_summer2.jpg" alt="Zoldo summer trails" width={1200} height={800} className={styles.responsiveImage} />
              </Col>
              <Col xs={12} md={6} lg={5} className={styles.textCol}>
                <p className="text--p-lg">
                  Summer opens a network of singletrack and high alpine trails.
                  Expect everything from flowing forest trails to long alpine
                  descents and technical enduro lines.
                </p>
              </Col>
            </Row>

            <div className={styles.blockSpacing} />

            <Row xsJustify={Justify.center} gap="16px" className={styles.rowBlock}>
              <Col xs={12} md={6} lg={5} className={styles.textCol}>
                <p className="text--p-lg">
                  Popular mountain bike tours from Zoldo take you through the
                  Cadore valleys, across ridgelines and down into wide, scenic
                  meadows — ideal for guided rides and multi-day excursions.
                </p>
              </Col>
              <Col xs={12} md={6} lg={5} className={styles.imageCol}>
                <Image src="/images/location/zoldo_summer3.jpg" alt="Mountain biking Zoldo" width={1200} height={800} className={styles.responsiveImage} />
              </Col>
            </Row>
          </Container>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default ZoldoCivettaPage;
