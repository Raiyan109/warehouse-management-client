import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import itemsStyle from './Items.module.css'
const Items = () => {
    const [items, setItems] = useState([])
    const slice = items.slice(0, 6)
    useEffect(() => {
        const url = 'http://localhost:5000/api/items'
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='lg:h-[600px] sm:h-[450px] py-12 sm:py-8 lg:py-12 px-5 flex justify-center items-center'>
            <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>

                {
                    slice.map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;