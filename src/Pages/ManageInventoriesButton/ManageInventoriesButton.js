import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoriesButton = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/manageinventory')
    }
    return (
        <div>
            <button onClick={handleNavigate} className="text-white  text-right float-right animate-bounce background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-14 bg-gradient-to-r from-gray-900 to-blue-900" type="button"
            >
                <i className="fas fa-heart"></i> Manage Inventories
            </button>
        </div>
    );
};

export default ManageInventoriesButton;