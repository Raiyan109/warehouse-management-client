import React from 'react';
import shoe from '../../images/OmarTR_shoes_logo_f77adaf8-dff6-.png'
const About = () => {
    return (
        <div className='bg-[#e0dec9] lg:h-[1000px] mb-17'>
            <div className='flex'>
                <div className='flex-3'>
                    <img className='w-[4000px]' src={shoe} alt="" />
                </div>
                <div className='flex flex-2 justify-center items-center'>
                    <div className=''>
                        <h4>Welcome to our hiking gear warehouse management website! We are a team of passionate hikers and outdoor enthusiasts who understand the importance of quality gear and equipment for a safe and enjoyable hiking experience.

                            Our mission is to provide hikers with access to the best hiking gear and equipment at affordable prices. We work hard to ensure that our warehouse is stocked with a wide variety of high-quality products from reputable brands, and our knowledgeable staff are always available to offer expert advice and recommendations.</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;