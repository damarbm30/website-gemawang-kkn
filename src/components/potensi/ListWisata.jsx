import React from "react";
import ItemWisata from "./ItemWisata";

const ListWisata = ({ wisata }) => {
  return (
    <div className="mx-auto flex w-[100%] flex-wrap justify-center gap-12 pb-12">
      {wisata.map((wisata) => (
        <ItemWisata wisata={wisata} key={wisata.id} />
      ))}
    </div>
  );
};

export default ListWisata;
