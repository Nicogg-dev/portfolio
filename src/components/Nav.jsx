export const Nav = () => {
    return (
        <nav className="bg-fixed bg-gradient-to-r from-black to-transparent text-white md:fixed w-full top-0 z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-20 items-center justify-between">
                    <div className="flex justify-center sm:justify-start w-full h-10 -z-10 sm:fixed">
                        <img
                            className="h-10 w-auto z-10 sm:fixed"
                            src="/chopper.png"
                            alt="logo"
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="flex flex-shrink-0 items-center"></div>
                        <div className="min-[0px]:hidden min-[650px]:block sm:ml-6">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-white hover:text-black hover:bg-gradient-to-r  hover:from-blue-400 hover:to-white rounded-md px-3 py-2 text-base font-medium"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-black hover:bg-gradient-to-r  hover:from-blue-400 hover:to-white rounded-md px-3 py-2 text-base font-medium"
                                >
                                    About
                                </a>
                                <a
                                    href="#proyectos"
                                    className="text-white hover:text-black hover:bg-gradient-to-r  hover:from-blue-400 hover:to-white rounded-md px-3 py-2 text-base font-medium"
                                >
                                    Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a
                        href="#"
                        className="hover:text-black hover:bg-gradient-to-r hover:from-blue-400 hover:to-white  text-white block rounded-md px-3 py-2 text-base font-medium"
                        aria-current="page"
                    >
                        Home
                    </a>
                    <a
                        href="#"
                        className="hover:text-black hover:bg-gradient-to-r hover:from-blue-400 hover:to-white  text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        About
                    </a>
                    <a
                        href="#proyectos"
                        className="hover:text-black hover:bg-gradient-to-r hover:from-blue-400 hover:to-white  text-white block rounded-md px-3 py-2 text-base font-medium"
                    >
                        Projects
                    </a>
                </div>
            </div>
        </nav>
    );
};
