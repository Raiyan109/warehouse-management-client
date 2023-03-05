import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/addItem')
    }
    const [items, setItems] = useState([])

    useEffect(() => {
        const url = 'https://hiking-warehouse-server.vercel.app/api/items'
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <>
            <div className='ml-10 mt-7'>
                <button onClick={handleNavigate} className="block w-full px-12 py-3 text-md font-bold text-white bg-[#F2921D] border border-transparent duration-300 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-black hover:border-[#F2921D] hover:border-1 focus:outline-none focus:ring transition-all" type="button"
                >
                    Add new item
                </button>
            </div>
            <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-10'>
                {
                    items.map(item => <ManageInventory
                        key={item._id}
                        item={item}
                    ></ManageInventory>)
                }


            </div>

        </>
    );
};

export default ManageInventories;