import React from 'react';

const InventoryDetail = ({ item }) => {
    const { name, img, description, price, quantity, supplier } = item
    return (
        <div>
            <a
                href=""
                className="block p-4 rounded-lg shadow-sm shadow-indigo-100"
            >
                <img
                    alt=""
                    src={img}
                    className="object-cover w-full h-56 rounded-md"
                />

                <div className="mt-2">
                    <dl>
                        <div>
                            <dt className="sr-only">
                                Price
                            </dt>

                            <dd className="text-sm text-gray-500">
                                ${price}
                            </dd>
                        </div>

                        <div>
                            <dt className="sr-only">
                                Name
                            </dt>

                            <dd className="font-medium">
                                {name}
                            </dd>
                        </div>
                        <div>
                            <dt className="sr-only">
                                Description
                            </dt>

                            <dd className="font-medium">
                                {description}
                            </dd>
                        </div>
                    </dl>

                    <dl className="flex items-center mt-6 space-x-8 text-xs">
                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                                className="w-4 h-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                <dt className="text-gray-500">
                                    Quantity
                                </dt>

                                <dd className="font-medium">
                                    {quantity}
                                </dd>
                            </div>
                        </div>

                        <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                                className="w-4 h-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                <dt className="text-gray-500">
                                    Supplier
                                </dt>

                                <dd className="font-medium">
                                    {supplier}
                                </dd>
                            </div>
                        </div>

                        <button className=" lg:p-2 lg:pl-4 lg:pr-4 md:p-1 md:pl-3 md:pr-3 bg-transparent border-2 border-indigo-500 text-indigo-500 text-base rounded-lg transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Delivered</button>
                        {/* <div className="sm:inline-flex sm:items-center sm:shrink-0">
                            <svg
                                className="w-4 h-4 text-indigo-700"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>

                            <div className="sm:ml-3 mt-1.5 sm:mt-0">
                                <dt className="text-gray-500">
                                    Bedroom
                                </dt>

                                <dd className="font-medium">
                                    4 rooms
                                </dd>
                            </div>
                        </div> */}
                    </dl>
                </div>
            </a>
        </div>
    );
};

export default InventoryDetail;