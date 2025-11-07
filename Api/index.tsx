import axios from "axios"
import type { AxiosResponse } from "axios"
import type { UserRegisterType } from "../Types/UserRegister"
import type { UserLoginType } from "../Types/UserLoginType"


class ApiController {
    static url = import.meta.env.VITE_BACKEND_URL

    static async login(props:UserLoginType){
        let token:string|null = null
        await axios.post(`${this.url}/login`,props).then((response:AxiosResponse)=>{
            console.log(response)
            let responseToken = response.data.token
            localStorage.setItem('token',responseToken)
            token = responseToken
        }).catch((err:Error)=>{
            console.log(err)
        })
        return token
    }
    static async register(props:UserRegisterType){
        let registerStatus:true|false = false
        await axios.post(`${this.url}/register`,props).then((response:AxiosResponse)=>{
            console.log(response)
            registerStatus = true
        }).catch((err:Error)=>{
            console.error(err)
            registerStatus = false
        })
        return registerStatus
    }
    static async verifyToken(token:string|null){
        let statusToken:true|false = false
        await axios.get(`${this.url}/`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then((response:AxiosResponse)=>{
            console.log(response)
            statusToken = true
        }).catch((err)=>{
            console.error(err)
            statusToken = false
        })  
        return statusToken
    }
}
export default ApiController;