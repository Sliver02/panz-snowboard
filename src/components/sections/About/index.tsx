import Button from "@/components/atoms/Button";
import { Col, Container, Row } from "@/components/atoms/Grid";
import { Align, Justify } from "@/components/atoms/Grid/interfaces";
import SectionTitle from "@/components/atoms/SectionTitle";
import CardFrame from "@/components/molecules/CardFrame";
import Section from "@/components/organisms/Section";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";

const About = () => {
  const t = useTranslations("about");

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <CardFrame
              image="photo_2024-12-17_23-31-21"
              alt="Lorenzo Panzera - Snowboard teacher"
            />
          </Col>
          <Col xs={12} md={6}>
            <Row xsJustify={Justify.center} mdAlign={Align.center}>
              <Col>
                <SectionTitle highlight text={"Lorenzo Panzera"} />
                <p className={classNames("text--p-lg")}>
                  Benvenuti! Mi chiamo Lorenzo Panzera, sono maestro di
                  snowboard, telemark e guida mountain bike, in poche parole il
                  mio lavoro è quello di trasmettervi il mio amore per lo sport
                  e la montagna!
                </p>
                <Link href="/about">
                  <Button style={{ marginTop: "1rem" }}>About me</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default About;
