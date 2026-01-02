"use client";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import { useTranslations } from "next-intl";
import About from "@/components/sections/About";

const Home = () => {
  const t = useTranslations("hero");

  return (
    <main>
      <Header />
      <Hero
        title={
          <>
            <p className="text--h-lg text--color-accent">
              Lorenzo Panzera <br />
            </p>

            {t("title")}
          </>
        }
        subtitle={t("subtitle")}
        backgroundImage={{
          src: "/images/DDF04065.jpg",
          alt: "Snowboard teacher | Cortina, Faloria, Tofana, Dolomites, Belluno",
          position: "top",
        }}
      />
      <About />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
