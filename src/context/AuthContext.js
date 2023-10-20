import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const [stockAuth, setStockAuth] = useState({
        user: null,
        token: ''
    })
    console.log(stockAuth);

    // useEffect(() => {
    //     const data = localStorage.getItem('auth')
    //     if (data) {
    //         const parsedData = JSON.parse(data)
    //         setMernAuth({
    //             ...mernAuth,
    //             user: parsedData.user,
    //             token: parsedData.token
    //         })
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])



    const authInfo = {
        stockAuth, setStockAuth
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

// Custom hook
export const useAuth = () => useContext(AuthContext)