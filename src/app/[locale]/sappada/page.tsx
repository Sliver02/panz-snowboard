import { LocationPage } from "@/components/sections/LocationPage";
import heroImage from "@public/images/location/sappada_winter2.jpg";
import winterMainImage from "@public/images/location/sappada_winter1.jpg";
import summerMainImage from "@public/images/location/sappada_summer1.jpg";
import summerInsetImage from "@public/images/location/sappada_summer2.jpg";

const SappadaPage = () => {
	return (
		<LocationPage
			namespace="sappada"
			backgroundImage={{
				src: heroImage,
				alt: "Sappada panorama",
			}}
			winter={{
				mainImage: winterMainImage,
			}}
			summer={{
				mainImage: summerMainImage,
				insetImage: summerInsetImage,
			}}
			mapFocus={{ longitude: 12.683, latitude: 46.567, zoom: 11 }}
		/>
	);
};

export default SappadaPage;
