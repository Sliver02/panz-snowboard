"use client";
import { LocationPage } from "@/components/sections/LocationPage";
import { useTranslations } from "next-intl";
// Tre Cime di Lavaredo — Daniele Bonaldo, CC BY-SA 4.0, Wikimedia Commons
import heroImage from "@public/images/location/cadore_hero.jpg";
// Tre Cime di Lavaredo, snow — Soluvo, CC BY-SA 4.0, Wikimedia Commons
import winterLeftImage from "@public/images/location/cadore_winter1.jpg";
// Tre Cime di Lavaredo, snow — Jhon Doc98, CC BY-SA 4.0, Wikimedia Commons
import winterRightImage from "@public/images/location/cadore_winter2.jpg";
// Lago di Misurina — Marco Granara, CC BY-SA 4.0, Wikimedia Commons
import summerLeftImage from "@public/images/location/cadore_summer1.jpg";
// Lago di Centro Cadore — Antonio De Lorenzo, CC BY-SA 3.0, Wikimedia Commons
import summerRightImage from "@public/images/location/cadore_summer2.jpg";

const CadorePage = () => {
	const t = useTranslations("cadore");

	return (
		<LocationPage
			namespace="cadore"
			backgroundImage={{
				src: heroImage,
				alt: "Tre Cime di Lavaredo panorama",
			}}
			winter={{
				left: winterLeftImage,
				right: winterRightImage,
			}}
			summer={{
				left: summerLeftImage,
				right: summerRightImage,
			}}
			imageCredits={t("photoCredits")}
		/>
	);
};

export default CadorePage;
