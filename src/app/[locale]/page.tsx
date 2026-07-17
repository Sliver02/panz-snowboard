"use client";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import HeroStyles from "@/components/organisms/Hero/Hero.module.scss";
import { useTranslations } from "next-intl";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";
import { Maps } from "@/components/sections/Maps";
import { InfiniteText } from "@/components/molecules/InfiniteText";

const Home = () => {
	const t = useTranslations("hero");

	return (
		<main>
			<Header />
			<Hero
				title={
					<>
						<p className={`${HeroStyles.name} text--color-accent`}>
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
			<InfiniteText
				items={[
					"SNOWBOARDING",
					"SKIING",
					"FREERIDE",
					"CARVING",
					"FREESTYLE",
					"OFF-PISTE",
					"BACKCOUNTRY",
					"MOUNTAIN GUIDING",
				]}
			/>
			<Disciplines />

			<Maps />
			<Contact />
			<Footer />
		</main>
	);
};

export default Home;
