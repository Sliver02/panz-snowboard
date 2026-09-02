"use client";
import { CTABooking } from "@/components/sections/CTABooking";
import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import HeroStyles from "@/components/organisms/Hero/Hero.module.scss";
import { useTranslations } from "next-intl";
import { About } from "@/components/sections/About";
import { Disciplines } from "@/components/sections/Disciplines";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Maps } from "@/components/sections/Maps";
import { InfiniteText } from "@/components/molecules/InfiniteText";
import heroImage from "@public/images/DDF04065.jpg";

const Home = () => {
	const t = useTranslations("hero");

	return (
		<main>
			<Header />
			<Hero
				negative
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
					src: heroImage,
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
			<InstagramFeed />
			<CTABooking />
			<Footer />
		</main>
	);
};

export default Home;
