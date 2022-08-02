import React from "react";
import { dokumentasi } from "../../dokumentasi";

const Dokumentasi = () => {
  return (
    <div className="relative top-[40px] bg-zinc-200 pt-12 md:top-[80px]">
      <h1 className="text-center text-3xl md:text-4xl font-bold mx-4">Dokumentasi Kegiatan KKN UGM Desa Gemawang 2022</h1>
      <div className="flex flex-wrap justify-center mx-auto mt-12 gap-6 px-2 pb-12">
        {dokumentasi.map((item) => (
          <img src={item.src} alt="dokumentasi" className="w-[320px] md:w-[480px] rounded-2xl"/>
        ))}
      </div>
    </div>
  );
};

export default Dokumentasi;
