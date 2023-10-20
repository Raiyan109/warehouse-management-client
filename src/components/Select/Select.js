import React from 'react';
import './Select.css'
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Select = () => {
    const { stockAuth, setStockAuth } = useAuth()
    return (
        <div>
            <div className=" relative inline-block text-left dropdown">
                <span className="rounded-md shadow-sm"
                ><button className="inline-flex justify-center w-full px-2 py-1 text-xs lg:text-sm font-medium leading-5 text-[#F2921D] transition duration-150 ease-in-out bg-stone-700 border border-none rounded-md hover:text-yellow-700 focus:outline-none focus:border-[#F2921D] focus:shadow-outline-blue active:bg-[#F2921D] active:text-gray-800"
                    type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                        <span>My Account</span>
                        <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </span>
                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                        <div className="px-4 py-3">
                            <p className="text-sm leading-5">Signed in as</p>
                            <p className="text-sm font-semibold leading-5 text-gray-900 truncate">{stockAuth?.user?.name}</p>
                            <p className="text-sm font-bold leading-5 text-gray-900 truncate">({stockAuth?.user?.role === 1 ? 'Admin' : 'User'})</p>
                        </div>
                        <div className="py-1">
                            <Link to='/dashboard' tabindex="0" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Dashboard</Link>

                            {/* <a href="#" tabindex="1" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Support</a>


                            <span role="menuitem" tabindex="-1" className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50" aria-disabled="true">New feature (soon)</span>

                            <a href="#" tabindex="2" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >License</a> */}


                        </div>
                        <div className="py-1">
                            <a href="#" tabindex="3" className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;