import React from "react";
import ListUsaha from "./ListUsaha";
import { usaha, wisata, kesenian } from "../../data";
import ListWisata from "./ListWisata";
import ListKesenian from "./ListKesenian";

const PotensiDaerah = () => {
  return (
    <div>
      <h1 className="mx-4 mb-12 text-center text-3xl font-bold md:text-4xl">Usaha Kecil Menengah</h1>
      <ListUsaha usaha={usaha} />
      <h1 className="mx-4 mb-12 text-center text-3xl font-bold md:text-4xl">Wisata dan Budaya</h1>
      <ListWisata wisata={wisata} />
      <h1 className="mx-4 mb-12 text-center text-3xl font-bold md:text-4xl">Kesenian</h1>
      <ListKesenian kesenian={kesenian} />
    </div>
  );
};

export default PotensiDaerah;
