import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoriesButton = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/manageinventory')
    }
    return (
        <div>
            <button onClick={handleNavigate} className="block w-full px-12 py-3 text-sm font-bold text-white bg-[#F2921D] border border-yellow-600 duration-300 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-black focus:outline-none focus:ring transition-all" type="button"
            >
                <i className="fas fa-heart"></i> Manage Inventories
            </button>
        </div>
    );
};

export default ManageInventoriesButton;