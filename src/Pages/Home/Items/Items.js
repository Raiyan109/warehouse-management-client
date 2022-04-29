import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import itemsStyle from './Items.module.css'
const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>

            {
                items.map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;