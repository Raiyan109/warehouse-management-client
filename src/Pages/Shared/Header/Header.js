import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { FaBars, FaTimes } from 'react-icons/fa'
import { GiMountains } from 'react-icons/gi'
import { useAuth } from '../../../context/AuthContext';
import Select from '../../../components/Select/Select';


const Header = () => {
    const [menu, setMenu] = useState(false)
    const { stockAuth, setStockAuth } = useAuth()
    const navigate = useNavigate()


    const logout = () => {
        // signOut(auth);
        setStockAuth({
            ...stockAuth,
            user: null,
            token: ''
        })
        localStorage.removeItem('userId')
        localStorage.removeItem('stockAuth')
        navigate('/login')
    };

    return (

        <nav className="bg-stone-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link className="flex items-center" to='/'>
                    {/* <img src={logo} className="mr-3 h-10 sm:h-9 text-[#F2921D]" alt="Hiking Logo" /> */}
                    <GiMountains className="mr-3 h-10 sm:h-9 text-[#F2921D] text-xl" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-[#F2921D]">Hiking Warehouse</span>
                </Link>

                <button
                    onClick={() => setMenu(!menu)}
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    {menu ? <FaTimes /> : <FaBars />}
                    <span className="sr-only">Open main menu</span>
                </button>


                <div className={`md:flex md:items-center w-full md:w-auto ${menu ? "block" : "hidden"}`} id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                        <NavLink to="/" className="block py-3 mt-1 pr-4 pl-3 text-[#F2921D] bg-blue-700 rounded md:bg-transparent md:text-yellow-700 duration-300 md:p-0 dark:text-white">Home</NavLink>

                        {/* <NavLink to="/blogs" className="block py-2 pr-4 pl-3 text-[#F2921D] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 duration-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</NavLink> */}

                        {/* <NavLink to="/manage" className="block py-2 pr-4 pl-3 text-[#F2921D] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 duration-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage items</NavLink> */}

                        {/* <NavLink to="/addItem" className="block py-2 pr-4 pl-3 text-[#F2921D] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 duration-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add items</NavLink> */}

                        {/* <NavLink to="/my" className="block py-2 pr-4 pl-3 text-[#F2921D] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 duration-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My items</NavLink> */}

                        {stockAuth?.user ? <button className="block py-2 pr-4 pl-3 text-[#F2921D] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 duration-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={logout}>Signout</button> : <NavLink to="/login" className="block py-2 pr-4 pl-3 text-[#F2921D] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-yellow-700 duration-200 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</NavLink>}

                        <Select />

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;