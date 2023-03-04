import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="text-white bg-cover bg-center bg-[url('/src/images/pexels-eberhard-grossgasteiger-629166.jpg')]">
                <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-3xl font-extrabold  sm:text-5xl bg-clip-text text-white">
                            Hiking warehouse management
                            <span className="sm:block">
                                with Hiking Inventory.
                            </span>
                        </h1>

                        <p className="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                            Manage multiple warehouses, transfer stock between them and generate reports to get better insights about warehouse management, with Hiking Inventory.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <a className="block w-full px-12 py-3 text-sm font-bold text-black bg-[#F2921D] border border-yellow-600 duration-300 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-[#F2921D] focus:outline-none focus:ring transition-all" href="/get-started">
                                Explore Our Hiking Gear Inventory Today!
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;