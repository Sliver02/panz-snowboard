import { LocationPage } from "@/components/sections/LocationPage";
import heroImage from "@public/images/location/cortina_winter2.jpg";
import winterLeftImage from "@public/images/location/cortina_winter1.jpg";
import winterRightImage from "@public/images/location/cortina_winter3.jpg";
import summerLeftImage from "@public/images/location/cortina_summer1.jpg";
import summerRightImage from "@public/images/location/cortina_summer2.jpg";

const CortinaPage = () => {
	return (
		<LocationPage
			namespace="cortina"
			backgroundImage={{
				src: heroImage,
				alt: "Cortina d'Ampezzo panorama",
			}}
			winter={{
				left: winterLeftImage,
				right: winterRightImage,
			}}
			summer={{
				left: summerLeftImage,
				right: summerRightImage,
			}}
		/>
	);
};

export default CortinaPage;
