import React from "react";
import WisataMap from "../../assets/img/Wisata.png";
import Infografis from "../../assets/img/Infografis.png";

const Map = () => {
  return (
    <main className="mt-12 pb-12">
      <h1 className="mb-12 text-center text-3xl font-bold md:text-4xl">Lokasi dan Jalur Wisata Desa Gemawang</h1>
      <img src={WisataMap} alt="" className="mx-auto mb-12 flex max-w-xs rounded-xl md:max-w-2xl" />
      {/* <h1 className="mb-12 text-center text-3xl font-bold md:text-4xl">Lokasi Wisata dan UMKM Desa Gemawang</h1> */}
      <img src={Infografis} alt="" className="mx-auto mb-4 flex max-w-xs rounded-xl md:max-w-4xl" />
    </main>
  );
};

export default Map;
