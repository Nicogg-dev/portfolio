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

            <div className="flex flex-col pt-40">
                <h4 id="proyectos" className="text-white font-bold text-4xl text-center">
                    Proyectos
                </h4>
                <div className="grid grid-cols-1 gap-10 m-5 p-5 md:grid-cols-2 rounded-xl">
                    <section className="border-y-2 border-red-500/60 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-black dark:to-red-900 shadow-lg rounded-xl">
                        <h4 className="text-blue-100 font-bold text-3xl my-4 text-center">
                            Gold Bricks
                        </h4>
                        <a
                            href="https://gold-brig.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="rounded-md"
                                src={goldbricks}
                            />
                        </a>
                    </section>
                    <section className="border-y-2 border-red-500/60 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-black dark:to-red-900 shadow-lg rounded-xl">
                        <h4 className="text-blue-100 font-bold text-3xl my-4 text-center ">
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
                    </section>
                </div>
            </div>
        </div>
    );
};
