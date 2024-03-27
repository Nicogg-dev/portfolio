import { BentoGrid } from "./BentoGrid";
import { useEffect, useState } from "react";

import gifexpertapp from "/gifexpertapp.mp4";
import goldbricks from "/gold-bricks.png";

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

            <div className="flex flex-col pt-40 opacity-90">
                <h4
                    id="proyectos"
                    className="text-white font-bold text-4xl text-center"
                >
                    Proyectos
                </h4>
                <div className="grid grid-cols-1 gap-10 m-5 p-5 md:grid-cols-2 rounded-xl">
                    <section className="border-y-2 border-red-500/60 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-black dark:to-red-900 shadow-lg rounded-xl">
                        <h4 className="text-yellow-100 font-bold text-3xl my-4 text-center">
                            Gold Bricks
                        </h4>
                        <a
                            href="https://gold-brig.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="rounded-md" src={goldbricks} />
                        </a>
                        <p className="text-gray-400 font-medium p-4">
                            Proyecto para la empresa Gold Bricks, para arriendo y venta de: lotes, casas, bodegas, locales y mucho mas.
                        </p>
                        <p className="text-gray-400 font-medium pb-4 px-4">
                            A pedido de un cliente, este proyecto fue realizado con typescript en nextjs, y coneccion con base de datos en sanity, utilizando tailwindcss para el diseño.
                        </p>
                    </section>
                    <section className="border-y-2 border-red-500/60 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-black dark:to-red-900 shadow-lg rounded-xl">
                        <h4 className="text-yellow-100 font-bold text-3xl my-4 text-center ">
                            Gif Expert App
                        </h4>
                        <a
                            className="w-full h-full"
                            href="https://nicogg-dev.github.io/react-gif-expert/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <video
                                className="rounded-md"
                                src={gifexpertapp}
                                autoPlay={playVideo}
                                muted
                                loop
                            />
                        </a>
                        <p className="text-gray-400 font-medium p-4">
                            Proyecto realizado en React, utilizando hooks, y consumiendo la api de giphy.
                        </p>
                        <p className="text-gray-400 font-medium pb-4 px-4">
                            Este proyecto fue realizado siguiendo el curso de React de Fernando Herrera.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
