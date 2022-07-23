import React from "react";
import ItemUsaha from "./ItemUsaha";

const ListUsaha = ({ usaha }) => {
  return (
    <div className="mx-auto flex w-[100%] flex-wrap justify-center gap-12 pb-12">
      {usaha.map((umkm) => (
        <ItemUsaha usaha={umkm} key={umkm.id} />
      ))}
    </div>
  );
};

export default ListUsaha;
