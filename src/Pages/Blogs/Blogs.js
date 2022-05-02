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
                    JavaScript is a easy programming language that rolls in any browser JavaScript Engine. And Node JS is an interpreter or running environment for a JavaScript programming language , it needs libraries that can easily be accessed from JavaScript programming for better use.
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
                    If you want to write some kind of detached program or server in Javascript, then you can use nodejs.
                    And, if you need to store data in a way that you can efficiently query or update it later, then you would usually use some form of database.
                    Node.js and MongoDb - These two technologies are for different parts of a typical web server system. You don't replace one for the other. Rather than, you can use them together.
                    You should know that Nodejs is a platform to write js code, and MongoDB is a database which can be used with node.js.
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
                    1. SQL databases are vertically expandable, and NoSQL databases are horizontally ascendable.
                    2. SQL databases are table-based, and NoSQL databases are document, key-value, graph, or wide-column stored.
                    3. SQL databases are better for multi-row deals, and in the other side NoSQL is better for unshaped data like documents or JSON.
                </p>
            </details>
        </div>
    );
};

export default Blogs;