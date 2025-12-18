"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import { useTranslations } from "next-intl";

const Home = () => {
  const t = useTranslations("hero");

  return (
    <main>
      <Header />
      <Hero title={t("title")} subtitle={t("subtitle")} />
      <Footer />
    </main>
  );
};

export default Home;
