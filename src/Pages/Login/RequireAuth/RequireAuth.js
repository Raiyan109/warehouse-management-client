import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext.js";
import Loadingg from "../../Loading/Loading.js";

const RequiredAuth = ({ children }) => {

    // const [loading, error] = useAuthState(auth);
    const { stockAuth, setStockAuth } = useAuth()
    const [ok, setOk] = useState(false)

    const location = useLocation()

    useEffect(() => {
        const authCheck = async () => {
            const { data } = await axios.get('http://localhost:5000/api/users/user-auth', {
                headers: {
                    'Authorization': stockAuth?.token
                }
            })
            if (data.ok) {
                setOk(true)
            }
            else {
                setOk(false)
            }
        }
        if (stockAuth?.token) authCheck()
    }, [stockAuth?.token])

    // if (loading) {
    //     return <Loading></Loading>
    // }

    // if (!ok) {
    //     return <Navigate to='/login' state={{ from: location }} replace />
    // }
    return ok ? children : <Loadingg />
};

export default RequiredAuth;