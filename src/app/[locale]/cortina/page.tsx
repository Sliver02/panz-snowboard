import LocationPage from "@/components/sections/LocationPage";

const CortinaPage = () => {
  return (
    <LocationPage
      namespace="cortina"
      backgroundImage={{
        src: "/images/location/cortina_winter2.jpg",
        alt: "Cortina d'Ampezzo panorama",
      }}
      winter={{
        left: "/images/location/cortina_winter1.jpg",
        right: "/images/location/cortina_winter3.jpg",
      }}
      summer={{
        left: "/images/location/cortina_summer1.jpg",
        right: "/images/location/cortina_summer2.jpg",
      }}
    />
  );
};

export default CortinaPage;
