import LocationPage from "@/components/sections/LocationPage";

const SappadaPage = () => {
  return (
    <LocationPage
      namespace="sappada"
      backgroundImage={{
        src: "/images/location/sappada_winter2.jpg",
        alt: "Sappada panorama",
      }}
      winter={{
        left: "/images/location/sappada_winter1.jpg",
        right: "/images/location/sappada_winter2.jpg",
      }}
      summer={{
        left: "/images/location/sappada_summer1.jpg",
        right: "/images/location/sappada_summer2.jpg",
      }}
    />
  );
};

export default SappadaPage;
