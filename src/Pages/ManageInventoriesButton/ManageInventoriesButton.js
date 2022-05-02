import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoriesButton = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/manageinventory')
    }
    return (
        <div>
            <button onClick={handleNavigate} className="text-pink-500 text-right float-right animate-bounce background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-14 bg-gradient-to-r from-cyan-500 to-blue-500" type="button"
            >
                <i className="fas fa-heart"></i> Manage Inventories
            </button>
        </div>
    );
};

export default ManageInventoriesButton;