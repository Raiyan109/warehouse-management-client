import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import itemsStyle from './Items.module.css'
const Items = () => {
    const [items, setItems] = useState([])
    const slice = items.slice(0, 6)
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
                slice.map(item => <Item
                    key={item._id}
                    item={item}
                ></Item>)
            }
        </div>
    );
};

export default Items;