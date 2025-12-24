"use client";
import Contact from "@/components/organisms/Contact";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("hero");

  return (
    <main>
      <Header />
      <Hero
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage={{
          src: "/images/DDF04065.jpg",
          alt: "Snowboard teacher | Cortina, Faloria, Tofana, Dolomites, Belluno",
          position: "top",
        }}
      />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
