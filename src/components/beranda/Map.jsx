import React from "react";
import WisataMap from "../../assets/img/Wisata.png";

const Map = () => {
  return (
    <main className="mt-12 pb-12">
      <h1 className="mb-12 text-center text-3xl font-bold md:text-4xl">Lokasi dan Jalur Wisata</h1>
      <img src={WisataMap} alt="" className="mx-auto flex max-w-xs rounded-xl md:max-w-4xl" />
      <img src="/assets/designer-1.jpg" alt="" className="mx-auto flex max-w-xs md:max-w-4xl" />
    </main>
  );
};

export default Map;
