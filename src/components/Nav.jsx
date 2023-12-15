
export const Nav = () => {
    return (
        <nav className="bg-fixed bg-gradient-to-r from-black to-transparent text-white md:fixed w-full top-0 z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <img
                        className="h-8 w-auto z-10 fixed"
                        src="dad"
                        alt="Your Companyy" />
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="flex flex-shrink-0 items-center">
                        </div>
                        <div className="hidden sm:ml-6 sm:block ">
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-white hover:bg-gradient-to-r  hover:from-yellow-400 hover:to-black rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page">
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:bg-gradient-to-r  hover:from-yellow-400 hover:to-black rounded-md px-3 py-2 text-sm font-medium">
                                    About
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:bg-gradient-to-r  hover:from-yellow-400 hover:to-black rounded-md px-3 py-2 text-sm font-medium">
                                    Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:hidden" id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
                </div>
            </div>
        </nav>
    );
};
