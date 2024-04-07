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
                            <div className="flex space-x-4 gap-4">

                                <a role="link" className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#">
                                    Home
                                </a>

                                <a role="link" className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#proyectos">
                                    Proyects
                                </a>

                                <a role="link" className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:w-full after:origin-bottom after:scale-x-0 after:bg-blue-400 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100" href="#about">
                                    About
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
