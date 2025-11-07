import { createContext,useState } from "react";
import type { JSX } from "react";
import type { AuthContextType } from "../Types/AuthContextType";

const AuthContext = createContext<AuthContextType>({
token:null,
login:()=>{},
logout:()=>{}
})
function AuthProvider({children}:{children:JSX.Element}){
    const [token,setToken] = useState<string|null>(null)
    const login = (newToken:string) => setToken(newToken)
    const logout = ()=> setToken(null)
    return (
        <AuthContext.Provider value={{token,login,logout}}> 
        {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProvider};