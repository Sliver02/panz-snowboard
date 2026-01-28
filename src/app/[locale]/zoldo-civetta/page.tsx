import { Container, Row, Col } from "@/components/atoms/Grid";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { Justify } from "@/components/atoms/Grid/interfaces";

const ZoldoCivettaPage = () => {
  const t = useTranslations("zoldoCivetta");
  return (
    <Container fullWidth>
      <Row xsJustify={Justify.center}>
        <Col xs={12} md={8}>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.description}>{t("description")}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ZoldoCivettaPage;
