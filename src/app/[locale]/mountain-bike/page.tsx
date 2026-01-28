"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import SectionTitle from "@/components/atoms/SectionTitle";
import PackageCard from "@/components/molecules/PackageCard";
import { useRouter } from "next/navigation";

const MountainBikePage = () => {
  const t = useTranslations("activities.mountainBike");
  const breadcrumb = useTranslations("breadcrumb");
  const router = useRouter();

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={t("heroSubtitle")}
        backgroundImage={{
          src: "/images/2020_Bike_Ebike_67_FrancoisPanchard.jpg",
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
          <Row xsJustify={Justify.center}>
            <Col>
              <p className={classNames("text--p-lg")}>
                {t("extendedDescription")}
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <SectionTitle text={t("packages.title")} center />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <PackageCard
                image="Veneto_Pieve_Cadore"
                title={t("packages.package1.title")}
                subtitle={t("packages.package1.subtitle")}
                price={t("packages.package1.price")}
                onClick={() => router.push("/#contact")}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <PackageCard
                image="photo_2025-04-09_16-51-22"
                title={t("packages.package2.title")}
                subtitle={t("packages.package2.subtitle")}
                price={t("packages.package2.price")}
                onClick={() => router.push("/#contact")}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <PackageCard
                image="vign_resize"
                title={t("packages.package3.title")}
                subtitle={t("packages.package3.subtitle")}
                price={t("packages.package3.price")}
                onClick={() => router.push("/#contact")}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <SectionTitle text={t("brochure.title")} center />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <img
                  src="/images/photo_2025-11-28_10-54-32.jpg"
                  alt="Brochure ITA"
                  style={{
                    width: "100%",
                    height: 320,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    background: "#0f2b30",
                    color: "#fff",
                    padding: 16,
                    flex: "1 1 auto",
                  }}
                >
                  <h4 style={{ margin: 0 }}>{t("brochure.it.title")}</h4>
                  <p style={{ margin: "8px 0 0" }}>
                    {t("brochure.it.subtitle")}
                  </p>
                  <a
                    href="https://www.lorenzopanzera.com/s/Mountain-Bike-Experience-ITA.pdf"
                    className="btn"
                    style={{ marginTop: 12 }}
                  >
                    {t("brochure.download")}
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <img
                  src="/images/photo_2025-11-28_10-54-30.jpg"
                  alt="Brochure ENG"
                  style={{
                    width: "100%",
                    height: 320,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div
                  style={{
                    background: "#0f2b30",
                    color: "#fff",
                    padding: 16,
                    flex: "1 1 auto",
                  }}
                >
                  <h4 style={{ margin: 0 }}>{t("brochure.en.title")}</h4>
                  <p style={{ margin: "8px 0 0" }}>
                    {t("brochure.en.subtitle")}
                  </p>
                  <a
                    href="https://www.lorenzopanzera.com/s/Mountain-Bike-Experience-ENG.pdf"
                    className="btn"
                    style={{ marginTop: 12 }}
                  >
                    {t("brochure.download")}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </main>
  );
};

export default MountainBikePage;
