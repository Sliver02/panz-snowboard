import { LocationPage } from "@/components/sections/LocationPage";
import heroImage from "@public/images/location/sappada_winter2.jpg";
import winterLeftImage from "@public/images/location/sappada_winter1.jpg";
import summerLeftImage from "@public/images/location/sappada_summer1.jpg";
import summerRightImage from "@public/images/location/sappada_summer2.jpg";

const SappadaPage = () => {
	return (
		<LocationPage
			namespace="sappada"
			backgroundImage={{
				src: heroImage,
				alt: "Sappada panorama",
			}}
			winter={{
				left: winterLeftImage,
				right: heroImage,
			}}
			summer={{
				left: summerLeftImage,
				right: summerRightImage,
			}}
		/>
	);
};

export default SappadaPage;
