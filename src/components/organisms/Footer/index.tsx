import { Col, Container, Row } from "@/components/atoms/Grid";
import { FaInstagram, FaLink } from "react-icons/fa";
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
          <Col xs={12} md={6} lg={2}>
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
          <Col xs={12} md={6} lg={2}>
            <h3 className={styles.footerTitle}>{t("locations")}</h3>
            <ul className={styles.footerList}>
              <li>
                <Link href={RouteEnum.CORTINA}>{t("cortina")}</Link>
              </li>
              <li>
                <Link href={RouteEnum.SAPPADA}>{t("sappada")}</Link>
              </li>
              <li>
                <Link href={RouteEnum.ZOLDO_CIVETTA}>{t("zoldoCivetta")}</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={2}>
            <h3 className={styles.footerTitle}>Social</h3>
            <ul className={styles.footerList}>
              <li>
                <Link
                  href="https://www.instagram.com/lorenz_panz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagram size={16} /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://linktr.ee/LorenzPanz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLink size={16} /> Linktree
                </Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h3 className={styles.footerTitle}>Info</h3>
            <ul className={styles.footerList}>
              <li>
                <span>Tel: <a href="tel:+393388090798">(+39) 338 809 0798</a></span>
              </li>
              <li>
                <span>Email: <a href="mailto:panzisco@gmail.com">panzisco@gmail.com</a></span>
              </li>
              <li>
                <span>PEC: <a href="mailto:panzera.lorenzo@pec.maestrisci.com">panzera.lorenzo@pec.maestrisci.com</a></span>
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
              <p>© 2026 Lorenzo Panzera - All rights reserved | <Link href="/privacy-policy">Privacy Policy</Link></p>
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
