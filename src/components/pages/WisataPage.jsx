import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../common/EmptyList";
import { wisata } from "../../data";

const WisataPage = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    // get destination from its id
    useEffect(() => {
        let item = wisata.find((item) => item.id === parseInt(id));

        if (item) {
        setItem(item);
        }
    }, []);

    return (
        <div>
            <div className="relative top-[40px] bg-zinc-200 pb-12 pt-8 md:top-[80px] md:pt-0">
                <Link
                    to="/potensi-daerah"
                    className="mb-8 ml-4 inline-block pt-4 text-2xl font-medium text-gray-400 transition-all hover:text-gray-700"
                >
                    <span>&#8592;</span> Kembali
                </Link>

                {item ? (
                    <div className="my-0 mx-auto max-w-[700px]">
                    <header className="text-center">
                        <p className="text-xs font-medium text-gray-400">
                        Dipublikasikan pada {item.createdAt}
                        </p>
                        <h1 className="text-3xl font-bold mb-4 md:text-4xl">{item.title}</h1>
                        <div className="flex justify-center gap-4">
                        </div>
                    </header>
                    <img src={item.cover} alt="cover" className="w-full rounded-2xl px-2 md:px-0" />
                    <div className="m-2 mt-4 justify-center rounded-xl bg-white p-4 shadow-2xl">
                        <p className="px-4 text-justify">{item.desc}</p>
                        {item.secondDesc.length > 0 && <p className="mt-4 px-4 text-justify">{item.secondDesc}</p>}
                    </div>
                    </div>
                ) : (
                    <EmptyList />
                )}
            </div>
        </div>
      )
    }

export default WisataPage;