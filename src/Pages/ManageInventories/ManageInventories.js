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
        const url = 'http://localhost:5000/item'
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {
                items.map(item => <ManageInventory
                    key={item._id}
                    item={item}
                ></ManageInventory>)
            }

            <div>
                <button onClick={handleNavigate} className="text-pink-500 text-right float-right animate-bounce background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-14 bg-orange-300" type="button"
                >
                    Add new item
                </button>
            </div>
        </div>
    );
};

export default ManageInventories;