import { LocationPage } from "@/components/sections/LocationPage";

const ZoldoCivettaPage = () => {
	return (
		<LocationPage
			namespace="zoldoCivetta"
			backgroundImage={{
				src: "/images/location/zoldo_summer2.jpg",
				alt: "Zoldo and Civetta panorama",
			}}
			winter={{
				left: "/images/location/zoldo_winter2.jpg",
				right: "/images/location/zoldo_winter3.jpg",
			}}
			summer={{
				left: "/images/location/zoldo_summer2.jpg",
				right: "/images/location/zoldo_summer3.jpg",
			}}
		/>
	);
};

export default ZoldoCivettaPage;
