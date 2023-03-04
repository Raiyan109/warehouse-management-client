import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])
    const slice = items.slice(0, 4)
    useEffect(() => {
        const url = 'https://hiking-warehouse-server.vercel.app/api/items'
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='lg:h-[600px] sm:h-[450px] py-12 sm:py-8 lg:py-12 px-5 md:mb-62 ' style={{ fontFamily: '"Lato", sans-serif' }}>
            <p className='text-[#F2921D] text-center text-xl'>Check our Warehouse</p>
            <h1 className='text-center text-6xl mb-14'>Explore Recent Projects</h1>
            <div className='flex justify-center items-center'>

                <div className='grid gap-x-8 gap-y-4  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 '>

                    {
                        slice.map(item => <Item
                            key={item._id}
                            item={item}
                        ></Item>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Items;