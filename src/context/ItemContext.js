import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ItemContext = createContext()

export const ItemContextProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const getItems = async () => {
        const { data } = await axios.get('https://hiking-warehouse-server.vercel.app/api/items')
        setItems(data)
    }

    useEffect(() => {
        getItems()
    }, [])

    console.log(items, 'items from itemContext');

    // const itemInfo = {
    //     items, setItems
    // }


    return (
        <ItemContext.Provider value={[items, setItems]}>
            {children}
        </ItemContext.Provider>
    )
}

// Custom hook
export const useItem = () => useContext(ItemContext)