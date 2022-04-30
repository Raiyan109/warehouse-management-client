import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InventoryDetail from '../InventoryDetail/InventoryDetail';

const Inventory = () => {
    const { inventoryId } = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            {/* <h1>this is Inventory {inventoryId}</h1> */}
            {
                items.map(item => <InventoryDetail
                    key={item._id}
                    item={item}
                ></InventoryDetail>)
            }
        </div>
    );
};

export default Inventory;