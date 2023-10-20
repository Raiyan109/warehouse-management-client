import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventory = ({ item }) => {
    const { name, img, description, price, quantity, supplier, _id } = item

    const handleItemDelete = _id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log('deleting item with id', _id);
            const url = `https://hiking-warehouse-server.vercel.app/api/items/${_id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }

    }

    return (
        <div>


            <div className="w-64 border">
                <img src={img} className="w-full" alt="..." />
                <div className="p-4">
                    <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{name}</h5>
                    <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">{price}</h5>
                    <p>{description}</p>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <button
                        onClick={() => handleItemDelete(_id)}
                        href="#" className="bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 text-white px-4 py-2 inline-block mt-4 rounded">Delete</button>
                </div>
            </div>


            {/* <!-- component --> */}


        </div>
    );
};

export default ManageInventory;