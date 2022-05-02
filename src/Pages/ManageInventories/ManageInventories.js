import React, { useEffect, useState } from 'react';
import ManageInventory from '../ManageInventory/ManageInventory';

const ManageInventories = () => {
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
        </div>
    );
};

export default ManageInventories;