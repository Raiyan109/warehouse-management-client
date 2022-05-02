import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = ({ item }) => {
    const { name, img, description, price, quantity, supplier, _id } = item



    return (
        <div>


            <div class="w-64 border">
                <img src={img} class="w-full" alt="..." />
                <div class="p-4">
                    <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{name}</h5>
                    <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{price}</h5>
                    <p>{description}</p>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <button href="#" class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded">Delete</button>
                </div>
            </div>



        </div>
    );
};

export default ManageInventory;