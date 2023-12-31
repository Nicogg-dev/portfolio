import { useEffect, useState } from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { DiNodejs, DiMysql, DiReact } from "react-icons/di";
import { SiTailwindcss, SiPhp, SiCodeigniter, SiBootstrap, SiReduxsaga } from "react-icons/si";

import colombia from '../img/colombia.png';
import arbolrojo from '../mp4/arbolrojo.mp4';


export const BentoGrid = () => {

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
        <div className="md:mt-20 grid auto-rows-[165px] grid-cols-2 md:grid-cols-4 gap-5 m-4">
            <div className='row-span-2 col-span-2 rounded-xl border-y-2 border-red-600/40 hover:border-red-400/60 bg-gradient-to-bl from-pink-200 to-pink-800 p-4 dark:bg-gradient-to-bl dark:from-red-950 dark:to-black shadow-lg'>
                <span className='flex flex-col justify-center'>

                    <h2 className='text-5xl mt-2 text-gray-200 font-bold'><span className='text-gray-300'>Nico</span>las <span className='text-gray-100'><span className='text-gray-200'>Gira</span>ldo</span></h2>

                </span>
                <p className='text-2xl text-gray-100 font-extralight mt-2 mb-2'>
                    <span className="text-gray-400">Junior</span> <span className="text-red-500">Full-Stack</span> developer
                </p>
                <div className="flex flex-row items-center justify-start gap-4">
                    <a
                        href="https://www.linkedin.com/in/nicolas-giraldo05"
                        target="_blank"
                        className="flex flex-row text-gray-300 items-center gap-1">
                        <FaLinkedin className="text-3xl" style={{ color: 'gray' }} />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/Nicogg-dev"
                        target="_blank"
                        className="flex flex-row text-gray-300 items-center gap-1">
                        <FaGithub className="text-3xl" style={{ color: 'gray' }} />
                        GitHub
                    </a>
                </div>
                <div className="flex flex-row items-center justify-start gap-4">
                    <p className="text-gray-400 font-medium mt-3">Soy una persona comprometida con mi trabajo, tengo ideas innovadoras. Tengo facilidad para relacionarme con las personas, me gusta enfrentar los obstáculos que se presentan y mi misión en la vida es nunca dejar de aprender.</p>
                </div>
            </div>

            <div
                className='relative row-span-1 col-span-1 md:col-span-2 lg:col-span-1 rounded-xl border-t-2 flex flex-col items-center justify-center gap-2 border-red-500/60 bg-gradient-to-t from-red-950 to-white p-4 dark:bg-gradient-to-b dark:from-red-900 dark:to-red-950 shadow-lg'>
                <img
                    className="h-12 w-auto absolute top-5"
                    src={colombia}
                    alt="Bandera de Colombia" />
                <h4 className="text-3xl text-white font-medium">Colombia</h4>
            </div>

            <div
                className='row-span-1 col-span-1 md:col-span-2 lg:row-span-2 lg:col-span-1 rounded-xl p-0 border-y-2 border-red-500/60 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-black dark:to-red-900 shadow-lg'>
                <video
                    className="object-cover h-full w-full rounded-xl lg:block"
                    src={arbolrojo}
                    autoPlay={playVideo}
                    muted loop />
            </div>

            <div
                className='hidden lg:flex col-span-2 md:col-span-1 row-span-1 justify-center rounded-xl border-t-2 border-slate-600/10 bg-gradient-to-t from-white to-red-200 p-4 dark:bg-gradient-to-br dark:from-red-950 dark:to-black shadow-lg'>
                <a
                    className="flex flex-col justify-center items-center h-full w-full p-8"
                    target="_blank"
                    href="https://twitter.com/NicoG_Gg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" fill="none" viewBox="0 0 24 24" >
                        <path fill="#fff" d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77z"></path>
                    </svg>
                    <span className="text-2xl text-white font-medium">@NicoG_Gg</span>
                </a>
            </div>

            <div
                className='hidden lg:flex lg:h-52 row-span-1 rounded-xl border-l-2 border-slate-700/10 bg-gradient-to-t from-white to-red-200 p-4 dark:bg-gradient-to-t dark:from-red-950 dark:to-black shadow-lg'>

            </div>

            <div
                className='hidden lg:flex lg:h-52 row-span-1 rounded-xl border-b-2 border-red-700/40 bg-gradient-to-t from-white to-red-200 p-4 dark:bg-gradient-to-t dark:from-red-950 dark:to-black shadow-lg'>

            </div>

            <div
                className='flex flex-col h-52 row-span-1 col-span-2 md:col-span-4 lg:col-span-2 rounded-xl border-y-2 p-1  border-red-400/50 hover:border-y-2 hover:border-red-300/90 bg-gradient-to-t from-white to-red-200 dark:bg-gradient-to-t dark:from-red-950 dark:to-black shadow-lg'>
                <h4 className="text-yellow-400 text-3xl font-semibold ml-5 mt-2">Tecnologias</h4>
                <div className="grid place-items-center grid-cols-5 gap-4 m-4 pb-2">
                    <section className="flex flex-col justify-center items-center ">
                        <RiJavascriptFill className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200 shadow-2xl">JavaScript</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <DiReact className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">React</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiReduxsaga className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">Redux</p>
                    </section>
                    <section className="flex flex-col justify-center items-center ">
                        <DiNodejs className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">Nodejs</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiPhp className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">PHP</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiCodeigniter className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">Codeigniter</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <DiMysql className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">MySQL</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiTailwindcss className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">TailwindCSS</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiBootstrap className="text-3xl" style={{ color: 'white' }} />
                        <p className="text-gray-200">Bootstrap</p>
                    </section>

                </div>
            </div>
        </div>
    );
};
