import React from 'react';
import img1 from '../../../images/hikingadventure1.jpg'
import img2 from '../../../images/hikingadventure2.jpg'
import img3 from '../../../images/hikingadventure3.jpg'
import { Link } from 'react-router-dom';

const Adventure = () => {
    return (
        <div>
            <div className=' py-12 sm:py-8 lg:py-12 md:mb-62 px-20 lg:px-32' style={{ fontFamily: '"Lato", sans-serif' }}>
                <h1 className='text-center text-6xl mb-14'>WE ARE HERE FOR EVERY ADVENTURE.</h1>
                <div className='flex justify-center items-center'>
                    <p className='text-center text-xl'>Let our expert team help you make the most of your next adventure. From expert advice to in-store services and Rewards.</p>
                </div>

                <div className='flex justify-center items-center py-9'>
                    <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt="gift-cards"
                                src={img1}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-2xl font-semibold uppercase tracking-widest text-[#F2921D]">
                                    Gift Cards
                                </p>

                                {/* <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> */}

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-md text-white">
                                            Give the gift of adventure with an outdoor warehouse gift card.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt="rewards"
                                src={img2}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-2xl font-semibold uppercase tracking-widest text-[#F2921D]">
                                    Rewards
                                </p>

                                {/* <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> */}

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:-translate-y-10 group-hover:opacity-100"
                                    >
                                        <p className="text-md text-white">
                                            Join Outdoor rewards and get instant savings with member-only pricing.
                                        </p>

                                    </div>
                                    <div
                                        className="translate-y-10 transform opacity-0 transition-all group-hover:-translate-y-2 group-hover:opacity-100"
                                    >

                                        <Link to='signup' className="text-white bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-40">Sign up now</Link>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="group relative block bg-black">
                            <img
                                alt="advice"
                                src={img3}
                                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                            />

                            <div className="relative p-4 sm:p-6 lg:p-8">
                                <p className="text-2xl font-semibold uppercase tracking-widest text-[#F2921D]">
                                    Expert Advice
                                </p>

                                {/* <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p> */}

                                <div className="mt-32 sm:mt-48 lg:mt-64">
                                    <div
                                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                                    >
                                        <p className="text-md text-white">
                                            Our expert team has put together advice articles.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Adventure;