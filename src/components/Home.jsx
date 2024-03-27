import { BentoGrid } from "./BentoGrid";
import { useEffect, useState } from "react";

import gifexpertapp from "/gifexpertapp.mp4";
import goldbricks from "/gold-bricks.png";

import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";

export const Home = () => {
    const [playVideo, setPlayVideo] = useState(true);

    useEffect(() => {
        if (playVideo) {
            const timeoutId = setTimeout(() => {
                setPlayVideo(false);
            }, 4000);

            return () => clearTimeout(timeoutId);
        }
    }, [playVideo]);

    return (
        <div className="mx-5">
            <BentoGrid />

            <div className="flex flex-col opacity-90">
                <h4
                    id="proyectos"
                    className="text-white font-bold text-4xl text-center"
                >
                    <span className="text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-blue-200 bg-clip-text">
                        Experiencia y Proyextos
                    </span>
                </h4>

                <div className="grid grid-cols-1 gap-10 m-5 p-5 md:grid-cols-2 rounded-xl">
                    <section className="grid grid-cols-5 shadow-lg rounded-lg">
                        <div className="col-span-3">
                            <a
                                href="https://gold-brig.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img className="rounded-md w-80 h-72 object-cover" src={goldbricks} style={{ aspectRatio: 16 / 9 }} />
                            </a>
                        </div>

                        <div className="flex flex-col col-span-2">
                            <h4 className="text-yellow-100 font-bold text-3xl pb-2 text-center">
                                Gold Bricks
                            </h4>
                            <div className="flex flex-row place-items-start gap-2">
                                <SiTypescript
                                    className="text-4xl text-bold"
                                    style={{ color: "#ffffff" }}
                                />
                                <TbBrandNextjs
                                    className="text-4xl text-bold"
                                    style={{ color: "#ffffff" }}
                                />
                            </div>

                            <p className="text-gray-300 font-medium">
                                Proyecto a pedido de un cliente, para arriendo y venta de: lotes, casas, bodegas, locales y mucho mas
                                Golden Bricks, fue realizado con typescript en nextjs, y coneccion con base de datos en sanity, utilizando tailwindcss para el diseño.
                            </p>
                        </div>
                    </section>


                    <section className="grid grid-cols-5 shadow-lg rounded-lg">
                        <div className="col-span-3">
                            <a
                                className="w-full h-full"
                                href="https://nicogg-dev.github.io/react-gif-expert/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <video
                                    className="rounded-md w-80 h-72 object-cover"
                                    src={gifexpertapp}
                                    autoPlay={playVideo}
                                    muted
                                    loop
                                />
                            </a>
                        </div>
                        <div className="flex flex-col col-span-2">
                            <h4 className="text-yellow-100 font-bold text-3xl pb-2 text-center">
                                Gif Expert App
                            </h4>
                            <div className="flex flex-row place-items-start gap-2">
                                <FaReact
                                    className="text-4xl text-bold"
                                    style={{ color: "#ffffff" }}
                                />
                                <TbBrandNextjs
                                    className="text-4xl text-bold"
                                    style={{ color: "#ffffff" }}
                                />
                            </div>

                            <p className="text-gray-300 font-medium">
                                Proyecto realizado en React, utilizando hooks, y consumiendo la api de giphy.
                                Este proyecto fue realizado siguiendo el curso de React de Fernando Herrera.
                            </p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};
