import React from 'react';
import { useForm } from "react-hook-form";
const AddItem = () => {
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
        <div>
            <div className='h-screen my-2 bg-amber-400 flex justify-center items-center'>
                <form className='w-full max-w-xs bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg' onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='Name' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea placeholder='Description' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("description")} />
                    <input placeholder='Supplier' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' {...register("supplier")} />
                    <input placeholder='Price' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" {...register("price")} />
                    <input placeholder='Quantity' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="number" {...register("quantity")} />
                    <input placeholder='Photo URL' className='text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3' type="text" {...register("img")} />
                    <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4' type="submit" value='Add new item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;