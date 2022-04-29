import React from 'react';

const Blogs = () => {
    return (
        <div className="space-y-4 my-16">
            <details className="group" open>
                <summary
                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                >
                    <h5 className="font-medium text-gray-900">
                        Difference between javascript and nodejs
                    </h5>

                    <svg
                        className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                </p>
            </details>

            <details className="group">
                <summary
                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                >
                    <h5 className="font-medium text-gray-900">
                        When should you use nodejs and when should you use mongodb?
                    </h5>

                    <svg
                        className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                </p>
            </details>

            <details className="group">
                <summary
                    className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                >
                    <h5 className="font-medium text-gray-900">
                        Differences between sql and nosql databases.
                    </h5>

                    <svg
                        className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </summary>

                <p className="px-4 mt-4 leading-relaxed text-gray-700">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                    molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                    voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                    earum similique!
                </p>
            </details>
        </div>
    );
};

export default Blogs;