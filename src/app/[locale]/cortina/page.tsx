import { LocationPage } from "@/components/sections/LocationPage";
import heroImage from "@public/images/location/cortina_winter2.jpg";
import winterMainImage from "@public/images/location/cortina_winter1.jpg";
import winterInsetImage from "@public/images/location/cortina_winter3.jpg";
import summerMainImage from "@public/images/location/cortina_summer1.jpg";
import summerInsetImage from "@public/images/location/cortina_summer2.jpg";

const CortinaPage = () => {
	return (
		<LocationPage
			namespace="cortina"
			backgroundImage={{
				src: heroImage,
				alt: "Cortina d'Ampezzo panorama",
			}}
			winter={{
				mainImage: winterMainImage,
				insetImage: winterInsetImage,
			}}
			summer={{
				mainImage: summerMainImage,
				insetImage: summerInsetImage,
			}}
			mapFocus={{ longitude: 12.1361, latitude: 46.5403, zoom: 11 }}
		/>
	);
};

export default CortinaPage;
