import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddItem = () => {
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [supplier, setSupplier] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [photo, setPhoto] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const { data } = axios.post('http://localhost:5000/api/items', {
            name: name,
            price: price,
            desc: desc,
            img: photo,
            supplier: supplier,
            quantity: quantity
        })
        toast.success("Item added successfully")
        navigate('/manageinventory')
    };
    return (
        <div>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto">
                    <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Add new item</h1>

                    {/* <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati sunt dolores deleniti inventore quaerat
                    mollitia?
                </p> */}

                    <form onSubmit={handleSubmit} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">


                        <div>
                            <label className="text-sm font-medium">Name</label>

                            <div className="relative mt-1">
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Enter your name"
                                />

                                {/* <span className="absolute inset-y-0 inline-flex items-center right-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    />
                                </svg>
                            </span> */}
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Description</label>

                            <div className="relative mt-1">
                                <input
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Description"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Supplier</label>

                            <div className="relative mt-1">
                                <input
                                    value={supplier}
                                    onChange={(e) => setSupplier(e.target.value)}
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Supplier name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Price</label>

                            <div className="relative mt-1">
                                <input
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="number"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Price"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Quantity</label>

                            <div className="relative mt-1">
                                <input
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    type="number"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Quantity"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Photo Url</label>

                            <div className="relative mt-1">
                                <input
                                    value={photo}
                                    onChange={(e) => setPhoto(e.target.value)}
                                    type="text"
                                    className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                                    placeholder="Photo URL"
                                />
                            </div>
                        </div>



                        <button

                            type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                            Save
                        </button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;