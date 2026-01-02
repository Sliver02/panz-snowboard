import { Col, Container, Row } from "@/components/atoms/Grid";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  const t = useTranslations("header");

  return (
    <footer className={classNames(styles.footer)}>
      <Container fullWidth>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>{t("classes")}</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href={""}>{t("anukalana")}</Link>
              </li>
              <li>
                <Link href={""}>{t("yin")}</Link>
              </li>
              <li>
                <Link href={""}>{t("kids")}</Link>
              </li>
              <li>
                <Link href={""}>{t("outdoor")}</Link>
              </li>
              <li>
                <Link href={""}>{t("private")}</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>{t("locations")}</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href={""}>{t("belluno")}</Link>
              </li>
              <li>
                <Link href={""}>{t("cortina")}</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>SMUP Yoga</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href={""}>{t("home")}</Link>
              </li>
              <li>
                <Link href={""}>{t("about")}</Link>
              </li>
              <li>
                <Link href={""}>Calendar</Link>
              </li>
              <li>
                <Link href={""}>Contact</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>Social</h3>
            <ul className={styles.footerList}>
              <li>
                <Link
                  href="https://www.instagram.com/smup_yoga/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram size={16} /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/sarah-maria-ursula-pompanin-4492a1100/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin size={16} /> LinkedIn
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className={styles.copyright}>
              <p>
                © 2024 SMUP Yoga - All rights reserved |{" "}
                <Link href={""}>Privacy Policy</Link>
              </p>
              <p>
                Website by{" "}
                <Link
                  href="https://www.jacopopanzera.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jacopo Panzera
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
