import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IncreaseQuantity from '../IncreaseQuantity/IncreaseQuantity';
import ManageInventoriesButton from '../ManageInventoriesButton/ManageInventoriesButton';


const Inventory = ({ item }) => {
    const { inventoryId } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        const url = `https://powerful-falls-63819.herokuapp.com/item/${inventoryId}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])



    return (
        <div>
            <section className="relative bg-white">
                <img
                    className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                    src={items?.img}
                    alt=""
                />

                <div className="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

                <div className="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            {items?.name}
                            <strong className="font-extrabold text-rose-700 sm:block">
                                {items?.price}
                            </strong>
                        </h1>

                        <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                            {items?.description}
                        </p>
                        <h1 className="text-sm font-bold sm:text-sm">
                            Quantity : {items?.quantity}

                        </h1>
                        <h1 className="text-sm font-bold sm:text-sm">
                            Supplier : {items?.supplier}

                        </h1>

                        <div className="flex flex-wrap gap-4 mt-8 text-center">
                            <a className="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring" href="/get-started">
                                Delivered
                            </a>



                            {/* <a className="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring" href="/about">
                            Learn More
                        </a> */}
                        </div>
                    </div>

                </div>

            </section>
            <ManageInventoriesButton></ManageInventoriesButton>
            <IncreaseQuantity></IncreaseQuantity>
        </div>


    );
};

export default Inventory;