import React from "react";
import ListUsaha from "./ListUsaha";
import { usaha, wisata, kesenian } from "../../data";
import ListWisata from "./ListWisata";
import ListKesenian from "./ListKesenian";

const PotensiDaerah = () => {
  return (
    <div>
      <h1 className="mb-12 text-center text-3xl mx-4 md:text-4xl font-bold">Usaha Kecil Menengah</h1>
      <ListUsaha usaha={usaha} />
      <h1 className="mb-12 text-center text-3xl mx-4 md:text-4xl font-bold">Wisata dan Budaya</h1>
      <ListWisata wisata={wisata} />
      <h1 className="mb-12 text-center text-3xl mx-4 md:text-4xl font-bold">Kesenian</h1>
      <ListKesenian kesenian={kesenian} />
    </div>
  );
};

export default PotensiDaerah;
