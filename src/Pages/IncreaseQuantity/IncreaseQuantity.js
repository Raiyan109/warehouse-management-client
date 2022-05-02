import React from 'react';
import { useForm } from "react-hook-form";

const IncreaseQuantity = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/item`
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='my-2 bg-indigo-200 flex justify-center items-center'>
            <form className='w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg' onSubmit={handleSubmit(onSubmit)}>
                {/* <input className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("firstName", { required: true, maxLength: 20 })} />
                <input className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> */}
                <input placeholder='Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" {...register("quantity")} />
                <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4' type="submit" value='Restock the items' />
            </form>
        </div>
    );
};

export default IncreaseQuantity;