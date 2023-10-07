import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivetRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate();
    if (loading) {
        return <div className="mt-10 ml-14">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    if(!user){
        return navigate('/login')
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivetRouter;