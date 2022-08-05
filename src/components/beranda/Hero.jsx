import React from "react";
import TerrainIcon from "@mui/icons-material/Terrain";
import FenceIcon from "@mui/icons-material/Fence";

const Hero = () => {
  return (
    <main className="flex flex-col bg-zinc-200">
      <h1 className="text-center text-3xl font-bold md:text-4xl">Desa Gemawang</h1>
      <div className="mx-auto mt-12 grid max-w-[1100px] gap-6 md:grid-cols-2">
        <div>
          <p className="mx-4 text-justify text-lg md:text-2xl">
            Sejarah Desa Gemawang jika dikaitkan dengan cerita masyarakat desa, kata gemawang berasal dari akronim{" "}
            <em>gema di awang-awang</em>. Desa Gemawang pada era dahulu telah terdengar atau kondang di mana-mana,
            dikarenakan menjadi salah satu percontohan desa vokasi di Indonesia
          </p>
          <p className="mx-4 mt-6 text-justify text-lg md:text-2xl">
            Desa Gemawang terdiri dari 7 dusun, yaitu Krajan, Banaran, Pitoro, Sekaja, Jlamprang, Kerep, dan Guyang
            Warak. Di beberapa dusun yang ada tersebar berbagai UMKM seperti makanan dan minuman, <em>fashion</em>, dan
            kerajinan yang dapat dilihat di situs <a href="http://gemawangmendunia.com/" className="text-blue-600 hover:text-blue-500">gemawangmendunia.com</a>. Selain itu, di Desa Gemawang juga terdapat wisata budaya, edukasi, dan alam
          </p>
        </div>
        <div className="mx-4 flex min-w-[280px] flex-col rounded-xl border border-slate-300 bg-zinc-200 text-center shadow-xl">
          <div className="mx-auto my-auto flex flex-col items-center px-4">
            <h2 className="flex py-2 text-2xl font-medium text-slate-500 md:text-3xl">
              <TerrainIcon style={{ fontSize: 40 }} />
              Geografi
            </h2>
            <div className="mx-auto flex w-fit flex-col">
              <p className="flex items-center gap-1 px-4 py-1 text-xl text-slate-500 md:text-2xl">
                Luas wilayah &#8594; 786 ha
              </p>
              <p className="flex items-center gap-1 px-4 py-1 text-xl text-slate-500 md:text-2xl">
                Ketinggian &#8594; 680 mdpl
              </p>
            </div>
            <div className="mx-auto my-auto mt-4 flex flex-col items-center px-4 md:mt-12">
              <h2 className="flex py-2 text-2xl font-medium text-slate-500 md:text-3xl">
                <FenceIcon style={{ fontSize: 40 }} />
                Batas Wilayah
              </h2>
            </div>
            <div className="mx-auto flex w-fit flex-col">
              <p className="flex items-center gap-1 px-4 py-1 text-xl text-slate-500 md:text-2xl">
                Utara &#8594; Pringsurat, Temanggung
              </p>
              <p className="flex items-center gap-1 px-4 py-1 text-xl text-slate-500 md:text-2xl">
                Timur &#8594; Desa Bedono
              </p>
              <p className="flex items-center gap-1 px-4 py-1 text-xl text-slate-500 md:text-2xl">
                Selatan &#8594; Grabag, Magelang
              </p>
              <p className="flex items-center gap-1 px-4 py-1 text-xl text-slate-500 md:text-2xl">
                Barat &#8594; Pringsurat, Temanggung
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
