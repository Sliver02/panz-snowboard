
import { Col, Container, Row } from "@/components/atoms/Grid";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { RouteEnum } from "@/common/routeEnum";
import styles from "./styles.module.scss";


const Footer = () => {
  const t = useTranslations("header");

  return (
    <footer className={classNames(styles.footer)}>
      <Container fullWidth>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>{t("activities")}</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href={RouteEnum.SNOWBOARD}>{t("snowboard")}</Link>
              </li>
              <li>
                <Link href={RouteEnum.TELEMARK}>{t("telemark")}</Link>
              </li>
              <li>
                <Link href={RouteEnum.MOUNTAIN_BIKE}>{t("mountainBike")}</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>{t("about")}</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href={RouteEnum.ABOUT}>{t("about")}</Link>
              </li>
              <li>
                <Link href={RouteEnum.HOME + "#locations"}>{t("locations")}</Link>
              </li>
              <li>
                <Link href={RouteEnum.HOME + "#contact"}>{t("contact")}</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>Social</h3>
            <ul className={styles.footerList}>
              <li>
                <Link
                  href="https://www.instagram.com/lorenzo_panzera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram size={16} /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/lorenzo-panzera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin size={16} /> LinkedIn
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h3 className={styles.footerTitle}>Info</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href="mailto:info@lorenzopanzera.com">info@lorenzopanzera.com</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className={styles.copyright}>
              <p>
                © 2026 Lorenzo Panzera - All rights reserved
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
