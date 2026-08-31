import { LocationPage } from "@/components/sections/LocationPage";
import heroImage from "@public/images/location/zoldo_summer2.jpg";
import winterLeftImage from "@public/images/location/zoldo_winter2.jpg";
import winterRightImage from "@public/images/location/zoldo_winter3.jpg";
import summerRightImage from "@public/images/location/zoldo_summer3.jpg";

const ZoldoCivettaPage = () => {
	return (
		<LocationPage
			namespace="zoldoCivetta"
			backgroundImage={{
				src: heroImage,
				alt: "Zoldo and Civetta panorama",
			}}
			winter={{
				left: winterLeftImage,
				right: winterRightImage,
			}}
			summer={{
				left: heroImage,
				right: summerRightImage,
			}}
		/>
	);
};

export default ZoldoCivettaPage;
