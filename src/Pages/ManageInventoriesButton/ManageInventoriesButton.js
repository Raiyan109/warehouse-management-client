import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoriesButton = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/manageinventory')
    }
    return (
        <div>
            <button onClick={handleNavigate} className="block w-full px-12 py-3 text-md font-bold text-white bg-[#F2921D] border border-transparent duration-300 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-black hover:border-[#F2921D] hover:border-1 focus:outline-none focus:ring transition-all" type="button"
            >
                <i className="fas fa-heart"></i> Manage Inventories
            </button>
        </div>
    );
};

export default ManageInventoriesButton;