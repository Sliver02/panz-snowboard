import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Section from "@/components/organisms/Section";
import { Container, Row, Col } from "@/components/atoms/Grid";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { Justify } from "@/components/atoms/Grid/interfaces";

const SappadaPage = () => {
  const t = useTranslations("sappada");
  const breadcrumb = useTranslations("breadcrumb");

  const fullDesc = t("description");
  const subtitle = fullDesc.split(". ").slice(0, 2).join(". ") + (fullDesc.includes(".") ? "." : "");

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={subtitle}
        backgroundImage={{
          src: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Sappada_panorama.jpg",
          alt: "Sappada panorama",
          position: "center",
        }}
        breadcrumbItems={[{ label: breadcrumb("home"), href: "/" }, { label: t("title") }]}
      />

      <Footer />
    </main>
  );
};

export default SappadaPage;
