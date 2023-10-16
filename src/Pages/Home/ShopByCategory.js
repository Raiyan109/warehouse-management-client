import React from 'react';
import img1 from '../../images/hiking1.jpg'
import img2 from '../../images/hiking2.jpg'
import img3 from '../../images/hiking3.jpg'
import img4 from '../../images/hiking4.jpg'


const ShopByCategory = () => {
    return (
        <div>
            <div className=' py-12 sm:py-8 lg:py-12 px-5 md:mb-62 ' style={{ fontFamily: '"Lato", sans-serif' }}>


                <div className='flex justify-center items-center'>

                    <div className="flex flex-col mt-8">

                        <div className="container max-w-7xl px-4">

                            <div className="flex flex-wrap justify-center text-center mb-24">
                                <div className="w-full lg:w-6/12 px-4">

                                    <h1 className='text-center text-4xl md:text-6xl'>Manage Your Items by </h1>
                                    <h1 className='text-center text-4xl md:text-6xl mb-14'>Our Warehouse Catagories</h1>
                                </div>
                            </div>


                            <div className="flex flex-wrap">
                                {/* <!-- Member #1 --> */}
                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">

                                        <a href="#" className="mx-auto">
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src={img1} alt='avatar' />
                                        </a>

                                        {/* Detail */}
                                        <div class="text-center mt-6">
                                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                                                Apparel
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Member #2 --> */}
                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">

                                        <a href="#" className="mx-auto">
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src={img2} alt='avatar' />
                                        </a>
                                        {/* Detail */}
                                        <div class="text-center mt-6">
                                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                                                Footwear
                                            </h1>
                                        </div>

                                    </div>
                                </div>

                                {/* <!-- Member #3 --> */}
                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">

                                        <a href="#" className="mx-auto">
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src={img3} alt='avatar' />
                                        </a>

                                        {/* Detail */}
                                        <div class="text-center mt-6">
                                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                                                Instruments
                                            </h1>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Member #4 --> */}
                                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                                    <div className="flex flex-col">
                                        {/* <!-- Avatar --> */}
                                        <a href="#" className="mx-auto">
                                            <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                                                src={img4} alt='avatar' />
                                        </a>

                                        {/* Detail */}
                                        <div class="text-center mt-6">
                                            <h1 class="text-gray-900 text-xl font-bold mb-1">
                                                Backpacks
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;