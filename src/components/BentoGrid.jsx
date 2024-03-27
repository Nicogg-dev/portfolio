import { useEffect, useState } from "react";

import { FaLinkedin, FaHtml5, FaCss3 } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { DiNodejs, DiMysql, DiReact } from "react-icons/di";
import {
    SiTailwindcss,
    SiPhp,
    SiCodeigniter,
    SiBootstrap,
    SiReduxsaga,
} from "react-icons/si";

import colombia from "/colombia.png";
import beach from "/beach.mp4";


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
        <div className="md:mt-20 grid auto-rows-[140px] 2xl:auto-rows-[200px] grid-cols-4 md:grid-cols-4 gap-5 m-5 md:mx-10 opacity-95 light">
            <div className="row-span-2 col-span-4 lg:col-span-2 rounded-xl border-y-2 border-blue-600/40 hover:border-blue-400/60 p-4 bg-gradient-to-bl from-blue-950 to-black shadow-lg bg-opacity-70">
                <span className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl mt-2 text-gray-200 font-bold">
                        <span className="text-transparent bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 bg-clip-text">
                            Nicolas Giraldo
                        </span>
                    </h2>
                </span>
                <p className="text-xl md:text-2xl text-gray-100 font-extralight mt-2 mb-2">
                    <span className="text-gray-400">Junior</span>{" "}
                    <span className="text-blue-500">Full-Stack</span> developer
                </p>
                <div className="flex flex-col items-center justify-start gap-4 text-sm md:text-base">
                    <p className="text-gray-400 font-medium mt-3">
                        Estudiante de ultimos semestres de Ingeniería eléctrica,
                        he realizado varios proyectos en el ambito de la
                        electronica desarrollando circuitos electronicos.
                    </p>
                    <p className="text-gray-400 font-medium">
                        Tengo facilidad para relacionarme con las personas, me
                        gusta enfrentar los obstáculos que se presentan, me emociona trabajar en conjunto y compartir experiencias.
                    </p>
                </div>
            </div>

            <div className="relative row-span-1 col-span-2 md:col-span-2 lg:col-span-1 rounded-xl border-t-2 flex flex-col items-center justify-center gap-2 border-blue-500/60 p-4 bg-gradient-to-b from-blue-800 shadow-lg pt-5">
                <img
                    className="h-7 w-auto absolute top-7"
                    src={colombia}
                    alt="Bandera de Colombia"
                />
                <h4 className="text-3xl md:text-4xl font-semibold ml-6 m-4">
                    <span className="text-transparent bg-gradient-to-r from-yellow-400 via-blue-600 to-red-500 bg-clip-text">
                        Colombia
                    </span>
                </h4>
            </div>

            <div className="row-span-2 col-span-2 md:col-span-2 lg:row-span-2 lg:col-span-1 rounded-xl p-0 border-y-2 border-blue-800/60 bg-gradient-to-t shadow-lg">
                <video
                    className="object-cover h-full w-full rounded-xl lg:block"
                    src={beach}
                    autoPlay={playVideo}
                    muted
                    loop
                />
            </div>

            <div className="flex row-span-1 col-span-2 md:col-span-2 lg:col-span-1 rounded-xl border-t-2 justify-center border-blue-500/60 bg-gradient-to-b from-blue-900 to-blue-950" >
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8">
                    <a
                        href="https://www.linkedin.com/in/nicolas-giraldo05"
                        target="_blank"
                        className="flex flex-row text-black items-center"
                        rel="noreferrer"
                    >
                        <button className="group relative inline-flex h-15 items-center justify-center overflow-hidden rounded-md bg-neutral-950 font-medium text-neutral-200 duration-500">
                            <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                                <FaLinkedin
                                    className="text-5xl md:text-6xl"
                                />
                            </div>
                            <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div>
                        </button>

                    </a>
                    <a
                        href="https://github.com/Nicogg-dev"
                        target="_blank"
                        className="flex flex-row text-black items-center gap-1"
                        rel="noreferrer"
                    >
                        <button className="group relative inline-flex h-14 md:h-16 items-center justify-center overflow-hidden rounded-full bg-neutral-950 p-1 font-medium text-neutral-200 duration-500">
                            <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
                                <FaGithub
                                    className="text-5xl md:text-6xl"
                                />
                            </div>
                            <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></div>
                        </button>
                    </a>
                </div>
            </div>

            <div className="hidden lg:flex col-span-2 md:col-span-1 row-span-1 justify-center rounded-xl border-t-2 border-slate-600/30 bg-gradient-to-br from-blue-700 to-black shadow-lg">
                <a
                    className="flex flex-col justify-center items-center h-full w-full p-4 font-bold"
                    target="_blank"
                    href="https://twitter.com/NicoG_Gg"
                    rel="noreferrer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="550"
                        height="550"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="#fff"
                            d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77z"
                        ></path>
                    </svg>
                    <h4 className="text-3xl text-white font-medium">
                        @NicoG_Gg
                    </h4>
                </a>
            </div>

            <div className="flex flex-col h-80 md:h-60 row-span-3 col-span-4 md:col-span-4 rounded-xl border-y-2 p-1 border-b-blue-500 border-t-blue-950/80 hover:border-t-blue-800 hover:border-b-blue-300 bg-gradient-to-t from-blue-900 to-black shadow-lg">
                <h4 className="text-4xl font-semibold ml-2 md:ml-6 m-4">
                    <span className="text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-300 bg-clip-text">
                        Tecnologias
                    </span>
                </h4>
                <div className="grid place-items-center grid-cols-4 md:grid-cols-8 lg:grid-cols-11 m-3 ml-2 md:ml-0 pb-2 gap-y-3">
                    <section className="flex flex-col justify-center items-center">
                        <FaHtml5
                            className="text-4xl"
                            style={{ color: "#E5532D" }}
                        />
                        <p className="text-yellow-50 shadow-2xl text-sm font-medium">
                            HTML
                        </p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <FaCss3 
                            className="text-4xl"
                            style={{ color: "#2D53E5" }}
                        />
                        <p className="text-yellow-50 shadow-2xl text-sm font-medium">
                            CSS
                        </p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiTailwindcss
                            className="text-4xl"
                            style={{ color: "#3ebff8" }}
                        />
                        <p className="text-blue-50 text-sm font-medium">TailwindCSS</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiBootstrap
                            className="text-4xl"
                            style={{ color: "#761af7" }}
                        />
                        <p className="text-blue-50  text-sm font-medium">Bootstrap</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <RiJavascriptFill
                            className="text-4xl"
                            style={{ color: "#F7E025" }}
                        />
                        <p className="text-yellow-50 shadow-2xl text-sm font-medium">
                            JavaScript
                        </p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <DiReact
                            className="text-4xl"
                            style={{ color: "#1BA1CC" }}
                        />
                        <p className="text-blue-50 text-sm font-medium">React</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiReduxsaga
                            className="text-4xl"
                            style={{ color: "#7A50BE" }}
                        />
                        <p className="text-blue-50 text-sm font-medium">Redux</p>
                    </section>
                    <section className="flex flex-col justify-center items-center ">
                        <DiNodejs
                            className="text-4xl"
                            style={{ color: "#8FC708" }}
                        />
                        <p className="text-blue-50 text-sm font-medium">Nodejs</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiPhp
                            className="text-4xl"
                            style={{ color: "#7B7FB5" }}
                        />
                        <p className="text-blue-50 text-sm font-medium">PHP</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <SiCodeigniter
                            className="text-4xl"
                            style={{ color: "#F0472A" }}
                        />
                        <p className="text-blue-50 text-sm font-medium">Codeigniter</p>
                    </section>
                    <section className="flex flex-col justify-center items-center">
                        <DiMysql
                            className="text-4xl"
                            style={{ color: "#086590" }}
                        />
                        <p className="text-blue-50  text-sm font-medium">MySQL</p>
                    </section>
                </div>
            </div>

        </div>
    );
};
