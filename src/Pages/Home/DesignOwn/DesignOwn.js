import React from 'react';

const DesignOwn = () => {
    return (
        <div className='my-5'>
            <a href="" className="relative flex items-end w-full bg-black h-96 group">
                <img
                    alt="Modded Bike"
                    src="https://images.unsplash.com/photo-1605008585816-03ab23ce80af"
                    className="absolute inset-0 object-cover w-full h-full transition-opacity group-hover:opacity-90"
                />

                <div
                    className="relative w-full p-6 tracking-widest text-center text-white transition-colors bg-red-700 sm:w-2/3 group-hover:bg-black"
                >
                    <strong className="text-lg uppercase">
                        Custom Shop
                    </strong>

                    <p className="mt-1 text-xs font-medium uppercase">
                        Design your own
                    </p>
                </div>
            </a>
        </div>
    );
};

export default DesignOwn;