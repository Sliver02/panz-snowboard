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

const SnowboardPage = () => {
  const t = useTranslations("activities.snowboard");
  const breadcrumb = useTranslations("breadcrumb");
  const router = useRouter();
  // helper to call `t` with non-standard options (avoid TS value-type conflict)
  type TFunc = <T = string | unknown>(
    k: string,
    opts?: Record<string, unknown>,
  ) => T;
  const tAny = t as unknown as TFunc;

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={t("heroSubtitle")}
        backgroundImage={{
          src: "/images/DDF02641.jpg",
          alt: "Snowboard instruction in the Dolomites",
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
                image="DDF02641"
                title={t("packages.package1.title")}
                subtitle={t("packages.package1.subtitle")}
                price={t("packages.package1.price")}
                features={tAny("packages.package1.features", {
                  returnObjects: true,
                })}
                onClick={() => router.push("/#contact")}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <PackageCard
                image="IMG_20241211_124142"
                title={t("packages.package2.title")}
                subtitle={t("packages.package2.subtitle")}
                price={t("packages.package2.price")}
                features={tAny("packages.package2.features", {
                  returnObjects: true,
                })}
                onClick={() => router.push("/#contact")}
              />
            </Col>
            <Col xs={12} md={6} lg={4}>
              <PackageCard
                image="csm_rifugio-lagazuoi-1_2449c8b0c7"
                title={t("packages.package3.title")}
                subtitle={t("packages.package3.subtitle")}
                price={t("packages.package3.price")}
                features={tAny("packages.package3.features", {
                  returnObjects: true,
                })}
                onClick={() => router.push("/#contact")}
              />
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </main>
  );
};

export default SnowboardPage;
