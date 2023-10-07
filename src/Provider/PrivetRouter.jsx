import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="mt-10 text-center">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRouter;