import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from 'react-icons/ai'
import { useItem } from '../../context/ItemContext';

let heading = ['Name', 'Responsible Person', 'Users', 'Status', 'Actions']

const ManageInventories = () => {
    const [item, setItem] = useState('')
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/addItem')
    }
    const [items, setItems] = useItem()

    // useEffect(() => {
    //     const i = items.map(i => setItem(i))
    // }, [items])

    // const { _id } = item
    // console.log(_id);

    return (
        <>

            <div class="overflow-x-auto">
                <div className='mt-7 pl-4 md:pl-40 pb-5'>
                    <button onClick={handleNavigate} className="block w-full px-5 py-2 text-md font-bold text-white bg-[#F2921D] border border-transparent duration-300 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-black hover:border-[#F2921D] hover:border-1 focus:outline-none focus:ring transition-all" type="button"
                    >
                        Add new item
                    </button>
                </div>
                <div class="min-w-screen min-h-screen bg-gray-100 flex justify-center font-sans overflow-hidden">

                    <div class="w-full lg:w-5/6">
                        <div class="bg-white shadow-md rounded my-6">
                            <table class="min-w-max w-full table-auto">
                                <thead>
                                    <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        {heading.map((head, headId) => (
                                            <th class="py-3 px-6 text-left" key={headId}>{head}</th>
                                        ))}

                                    </tr>
                                </thead>
                                <tbody class="text-gray-600 text-sm font-light">
                                    {items.map((item) => (
                                        <tr key={item._id} class="border-b border-gray-200 hover:bg-gray-100">
                                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                                <div class="flex items-center">
                                                    <div class="mr-2">
                                                        <img src={item.img} className='w-10 h-10' alt="" />
                                                    </div>
                                                    <span class="font-medium">{item.name}</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-left">
                                                <div class="flex items-center">
                                                    <div class="mr-2">
                                                        <img class="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                    </div>
                                                    <span>Eshal Rosas</span>
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <div class="flex items-center justify-center">
                                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg" />
                                                </div>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                                            </td>
                                            <td class="py-3 px-6 text-center">
                                                <div class="flex item-center justify-center text-xl cursor-pointer">
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg> */}
                                                        <Link to={`/item/${item?._id}`}>
                                                            <AiOutlineEye />
                                                        </Link>
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                        </svg> */}
                                                        <AiOutlineEdit />
                                                    </div>
                                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg> */}
                                                        <AiOutlineDelete />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>





        </>
    );
};

export default ManageInventories;