import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import itemStyle from './Item.module.css'
const Item = ({ item }) => {
    const { name, img, description, price, quantity, supplier, _id } = item

    // const params = useParams()
    return (
        <div className='max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <img className='p-8 rounded-t-lg' src={img} alt="" />
            <div className='px-5 pb-5'>
                <h1 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{name}</h1>
                <p>{description}</p>
                <h1>Quantity: {quantity}</h1>
                <h1>Supplier: {supplier}</h1>
                <div className='flex justify-between items-center'>
                    <span className='text-3xl font-bold text-gray-900 dark:text-white'>${price}</span>
                    <Link to={`/item/${_id}`} className='text-white bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Update</Link>
                </div>
            </div>

        </div>
    );
};

export default Item;