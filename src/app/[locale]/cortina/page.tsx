import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import { useTranslations } from "next-intl";

const CortinaPage = () => {
  const t = useTranslations("cortina");
  const breadcrumb = useTranslations("breadcrumb");

  return (
    <main>
      <Header />
      <Hero
        compact
        negative
        title={t("title")}
        subtitle={t("description")}
        backgroundImage={{
          // using an online image for the location hero
          src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Cortina_D%27Ampezzo_panorama.jpg",
          alt: "Cortina d'Ampezzo panorama",
          position: "center",
        }}
        breadcrumbItems={[{ label: breadcrumb("home"), href: "/" }, { label: t("title") }]}
      />

      <Footer />
    </main>
  );
};

export default CortinaPage;
