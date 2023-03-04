import React from 'react';
import aboutImg from '../../images/DrawKit-daily-life-vector-illustration-12-removebg-preview.png'
import ManageInventoriesButton from '../ManageInventoriesButton/ManageInventoriesButton';
const About = () => {
    return (
        <div className="bg-white lg:[900px] py-12 sm:py-8 lg:py-12 my-20" style={{ fontFamily: '"Lato", sans-serif' }}>
            <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div>
                        <div className="h-80 mt-14 rounded-lg">
                            <img src={aboutImg} loading="lazy" alt="hiking dad and son" className="w-full h-full object-cover object-center" />
                        </div>
                    </div>

                    <div className="md:pt-8">
                        <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6"><span className='text-[#F2921D]'>Welcome</span> to our hiking gear warehouse management website!</h1>

                        <p className="text-gray-500 sm:text-lg mb-6 md:mb-8">
                            We are a team of passionate hikers and outdoor enthusiasts who understand the importance of quality gear and equipment for a safe and enjoyable hiking experience.<br /><br />

                            Our mission is to provide hikers with access to the best hiking gear and equipment at affordable prices. We work hard to ensure that our warehouse is stocked with a wide variety of high-quality products from reputable brands, and our knowledgeable staff are always available to offer expert advice and recommendations.
                        </p>

                        <ManageInventoriesButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;