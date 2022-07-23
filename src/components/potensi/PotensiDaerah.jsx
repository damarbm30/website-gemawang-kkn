import React from "react";
import ListUsaha from "./ListUsaha";
import { usaha } from "../../data";

const PotensiDaerah = () => {
  return (
    <div>
      <h1 className="mb-12 text-center text-4xl font-bold">Usaha Kecil Menengah</h1>
      <ListUsaha usaha={usaha} />
      <h1 className="mb-12 text-center text-4xl font-bold">Wisata</h1>
      {/* <ListUsaha usaha={usaha} /> */}
    </div>
  );
};

export default PotensiDaerah;
