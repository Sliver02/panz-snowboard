import { LocationPage } from "@/components/sections/LocationPage";
import heroImage from "@public/images/location/zoldo_summer2.jpg";
import winterMainImage from "@public/images/location/zoldo_winter2.jpg";
import winterInsetImage from "@public/images/location/zoldo_winter3.jpg";
import summerMainImage from "@public/images/location/zoldo_summer.jpg";
import summerInsetImage from "@public/images/location/zoldo_summer3.jpg";

const ZoldoCivettaPage = () => {
	return (
		<LocationPage
			namespace="zoldoCivetta"
			backgroundImage={{
				src: heroImage,
				alt: "Zoldo and Civetta panorama",
			}}
			winter={{
				mainImage: winterMainImage,
				insetImage: winterInsetImage,
			}}
			summer={{
				mainImage: summerMainImage,
				insetImage: summerInsetImage,
			}}
			mapFocus={{ longitude: 12.183, latitude: 46.35, zoom: 11 }}
		/>
	);
};

export default ZoldoCivettaPage;
