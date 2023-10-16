import React from 'react';
import { Link } from 'react-router-dom';

const ShopFeatures = () => {
    return (
        <div>
            <section className="p-4 lg:p-8 bg-gray-100 text-gray-800 mt-12">
                <div className="container mx-auto space-y-12">
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?1" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                            <span className="text-xs uppercase text-gray-600">Unlimited Points</span>
                            <h3 className="text-3xl font-bold">Shop and Earn Unlimited Points</h3>
                            <p className="my-6 text-gray-600">The more you shop the more you earn - cash back, free shipping, exclusive offers and more. Discover the perks of Egg Club membership.</p>
                            <button type="button" className='text-white bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40'>Get Started</button>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src="https://source.unsplash.com/640x480/?2" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                            <span className="text-xs uppercase text-gray-600">Stock Deals</span>
                            <h3 className="text-3xl font-bold">Amazing Daily Deals</h3>
                            <p className="my-6 text-gray-600">Stock up on your favorite groceries for less with our unbeatable daily deals! Don't miss out - limited stock</p>
                            <Link to='signup' className="text-white bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40">Sign up now</Link>
                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-50">
                            <span className="text-xs uppercase text-gray-600">Necessities</span>
                            <h3 className="text-3xl font-bold">Shop your weekend hiking gears</h3>
                            <p className="my-6 text-gray-600">Shop from our popular category, Explore special offers and receive grocery on your doorsteps within 1 hour.</p>
                            <button type="button" className="text-white bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40">Start Shopping</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ShopFeatures;