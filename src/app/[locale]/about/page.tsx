"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { Justify } from "@/components/atoms/Grid/interfaces";
import { useTranslations } from "next-intl";
import classNames from "classnames";
import CardFrame from "@/components/molecules/CardFrame";
import SectionTitle from "@/components/atoms/SectionTitle";

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
          <Row xsJustify={Justify.center}>
            <Col xs={12} md={8} lg={7}>
              <SectionTitle highlight text={"CHI SONO ?"} />
              <p className={classNames("text--p-lg")}>
                Sport all'aria aperta, montagna e natura: sicuramente sono queste
                le esperienze che meglio mi definiscono. Il mio nome è Lorenzo
                Panzera, meglio conosciuto come Panz, e alcuni anni fa sono
                riuscito a trasformare le mie passioni anche in un lavoro,
                diventando maestro di Snowboard, Telemark e Guida Mountain
                Bike. È da qui che voglio partire per raccontarvi meglio cosa
                faccio e cosa offro.
              </p>

              <p className={classNames("text--p-lg")}>
                Che attività offro?Come maestro di snowboard e di telemark ski
                vorrei avvicinare quante più persone possibile a due discipline
                che non hanno in comune solo la neve, ma anche la sensazione di
                libertà, la creatività, l’adrenalina e il divertimento! Vi
                guiderò passo passo dalle basi, se siete dei principianti, o
                perfezionando insieme tecnica e stile se siete più esperti.
              </p>

              <p className={classNames("text--p-lg")}>
                Come guida di mountain bike, uno sport che sta prendendo sempre
                più piede anche grazie alle E-bike, vi porterò alla scoperta dei
                posti più famosi e spettacolari delle Dolomiti, senza
                trascurare, però, anche sentieri e percorsi meno noti ma
                ugualmente meritevoli.
              </p>

              <p className={classNames("text--p-lg")}>
                Dove svolgo queste attività? Partendo dalla mia sede, a Pieve di
                Cadore, solitamente lavoro a Cortina d’Ampezzo, una posizione
                strategica che, però, mi consente di raggiungere tutte le
                principali località delle Dolomiti, a seconda delle vostre
                necessità.
              </p>

              <p className={classNames("text--p-lg")}>
                A prescindere da quello che sceglierete di fare, il mio obiettivo
                principale sarà quello di trasmettervi la stessa passione e lo
                stesso amore che provo per questi sport e per la montagna.
              </p>
            </Col>

            <Col xs={12} md={4} lg={4}>
              <div style={{ maxWidth: 420, margin: '0 auto' }}>
                <CardFrame image="photo_2024-12-17_23-31-21" alt={t("photoAlt")} />
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
      <Footer />
    </main>
  );
};

export default AboutPage;
