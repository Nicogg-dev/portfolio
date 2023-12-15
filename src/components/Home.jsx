import { BentoGrid } from "./BentoGrid";
import { useEffect, useState } from "react";

import gifexpertapp from '../mp4/gifexpertapp.mp4';

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
        <>
            <BentoGrid />

            <div className="flex flex-col pt-40">
                <h4 className="text-yellow-400 font-bold text-3xl text-center mb-10">Proyectos</h4>
                <div
                    className='grid grid-cols-1 gap-10 m-10 p-10 md:grid-cols-2 rounded-xl border-y-2 border-red-500/60 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-black dark:to-red-900 shadow-lg'>
                    <section >
                        <h4 className="text-white text-3xl my-4 text-center ">
                            Gif Expert App
                        </h4>
                        <a href="https://nicogg-dev.github.io/react-gif-expert/" target="_blank">
                            <video
                                className="rounded-xl lg:block"
                                src={gifexpertapp}
                                autoPlay={playVideo}
                                muted loop />
                        </a>
                    </section>
                    <section>
                        <h4 className="text-white text-3xl my-4 text-center ">
                            Gif Expert App
                        </h4>
                        <img className="rounded-lg" alt="" />
                    </section>
                </div>
            </div>
        </>
    );
};
