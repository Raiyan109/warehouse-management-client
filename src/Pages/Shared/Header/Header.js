import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
// import headerStyle from './Header.module.css'
import logo from '../../../images/hiking-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { FaBars, FaTimes } from 'react-icons/fa'
const Header = () => {
    const [menu, setMenu] = useState(false)
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };

    return (

        <nav className="bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link className="flex items-center" to='/'>
                    <img src={logo} className="mr-3 h-10 sm:h-9 text-[#F2921D]" alt="Hiking Logo" />
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

                        <Link to="/" className="block py-2 pr-4 pl-3 text-[#F2921D] bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>

                        <Link to="/blogs" className="block py-2 pr-4 pl-3 text-[#F2921D] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blogs</Link>

                        <Link to="/manage" className="block py-2 pr-4 pl-3 text-[#F2921D] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Manage items</Link>

                        <Link to="/addItem" className="block py-2 pr-4 pl-3 text-[#F2921D] border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Add items</Link>

                        <Link to="/my" className="block py-2 pr-4 pl-3 text-[#F2921D] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My items</Link>

                        {user ? <button class="btn btn-ghost" onClick={logout}>Signout</button> : <Link to="/login" className="block py-2 pr-4 pl-3 text-[#F2921D] hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>}

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;