import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../Loading/Loading.js";
import { useAuth } from "../../../context/AuthContext.js";

const AdminPrivateRoute = ({ children }) => {

    // const [loading, error] = useAuthState(auth);
    const { stockAuth, setStockAuth } = useAuth()
    const [ok, setOk] = useState(false)

    const location = useLocation()

    useEffect(() => {
        const authCheck = async () => {
            const { data } = await axios.get('http://localhost:5000/api/users/admin-auth', {
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
    return ok ? children : <Loading />
};

export default AdminPrivateRoute;