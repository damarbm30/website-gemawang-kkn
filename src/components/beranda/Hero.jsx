import React from "react";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HandymanIcon from '@mui/icons-material/Handyman';
import CoffeeIcon from '@mui/icons-material/Coffee';

const Hero = () => {
  return (
    <main className="flex flex-col bg-zinc-200">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Desa Gemawang</h1>
      <div className="mx-auto mt-12 grid max-w-[1024px] gap-12 md:grid-cols-2">
        <p className="mx-4 text-justify text-lg md:text-2xl">
          Sejarah Desa Gemawang jika dikaitkan dengan cerita masyarakat desa, kata gemawang berasal
          dari akronim <em>gema di awang-awang</em>. Desa Gemawang pada era dahulu telah terdengar
          atau kondang di mana-mana, dikarenakan menjadi salah satu percontohan desa vokasi di
          Indonesia. Mulai dari kegiatan desa, potensi yang dimiliki, sampai keterampilan{" "}
          <em>life skill</em> masyarakatnya
        </p>
        <div className="mx-4 flex min-w-[280px] max-w-[500px] flex-col rounded-xl border border-slate-300 bg-zinc-200 py-2 text-center shadow-xl">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-500 underline">Daftar UMKM Desa</h1>
          <div className="mx-auto my-auto items-center px-4">
            <p className="flex items-center gap-1 px-4 py-2 text-slate-500 text-xl md:text-2xl">
              <RestaurantIcon fontSize="medium" className="text-indigo-600" />
              Makanan
            </p>
            <p className="flex items-center gap-1 px-4 py-2 text-slate-500 text-xl md:text-2xl">
              <CoffeeIcon fontSize="medium" className="text-indigo-600" />
              Minuman
            </p>
            <p className="flex items-center gap-1 px-4 py-2 text-slate-500 text-xl md:text-2xl">
              <CheckroomIcon fontSize="medium" className="text-indigo-600" />
              Pakaian
            </p>
            <p className="flex items-center gap-1 px-4 py-2 text-slate-500 text-xl md:text-2xl">
              <HandymanIcon fontSize="medium" className="text-indigo-600" />
              Kerajinan
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
