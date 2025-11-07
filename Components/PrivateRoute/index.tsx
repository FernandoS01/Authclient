import type { JSX } from "react/jsx-runtime";
import LoginPage from "../../Pages/LoginPage";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";


function PrivateRoute({children}:{children: JSX.Element}){
    const { token} = useContext(AuthContext)

    return (
        <>
        {
            token?
            children
            :
            <LoginPage />
        }
        </>
    )
}


export default PrivateRoute;