import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../common/EmptyList";
import { kesenian } from "../../data";

const KesenianPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  // get destination from its id
  useEffect(() => {
    let item = kesenian.find((item) => item.id === parseInt(id));

    if (item) {
      setItem(item);
    }
  }, []);

  return (
    <div>
      <div className="relative top-[40px] bg-zinc-200 pb-12 pt-4 md:top-[80px] md:pt-0">
        <Link
          to="/potensi-daerah"
          className="mb-8 ml-4 inline-block text-2xl font-medium text-gray-400 transition-all hover:text-gray-700 md:pt-4"
        >
          <span>&#8592;</span> Kembali
        </Link>

        {item ? (
          <div className="mx-auto max-w-[1200px]">
            <header className="text-center">
              <p className="text-xs font-medium text-gray-400">Dipublikasikan pada {item.createdAt}</p>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{item.title}</h1>
              <div className="flex justify-center gap-4"></div>
            </header>
            <div className="flex flex-wrap justify-center gap-4">
              {item.img.map((img, index) => (
                <div className="my-2 md:my-4">
                  <img src={img} alt="cover" key={index} className="h-[250px] w-[350px] rounded-2xl px-2 md:px-0" />
                </div>
              ))}
            </div>
            <div className="mx-4 mt-4 max-w-[700px] justify-center rounded-xl bg-white p-4 shadow-2xl md:mx-auto">
              <p className="px-4 text-justify">{item.first}</p>
              {item.second.length > 0 && <p className="mt-4 px-4 text-justify">{item.second}</p>}
              {item.third.length > 0 && <p className="mt-4 px-4 text-justify">{item.third}</p>}
              {item.fourth.length > 0 && <p className="mt-4 px-4 text-justify">{item.fourth}</p>}
            </div>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
    </div>
  );
};

export default KesenianPage;
