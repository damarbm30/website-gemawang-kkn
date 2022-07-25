import Hero from "../beranda/Hero";
import Map from "../beranda/Map";

const Beranda = () => {
  return (
    <div className="relative top-[40px] bg-zinc-200 pt-12 md:top-[80px]">
      <Hero />
      <Map />
    </div>
  );
};

export default Beranda;
