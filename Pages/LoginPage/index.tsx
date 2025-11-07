import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import type { UserLoginType } from '../../Types/UserLoginType'
import InputComponent from '../../Components/Inputs'
import ApiController from '../../Api/index'
import './index.css'
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'


function LoginPage(){
    const { login,logout } = useContext(AuthContext)
    const { register, handleSubmit } = useForm<UserLoginType>()
    
    const onSubmit: SubmitHandler<UserLoginType> = (data) => {
        async function getToken(){
        const token = await ApiController.login(data) 
        if(await ApiController.verifyToken(token)){
            login(`${token}`)
        } else {
            logout
        }
        }
        getToken()
    }
    return (
    <>
        <div id='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <InputComponent placeholder='Usuário:' param={register("email", { required: true, maxLength: 20 })} type='text'/>
            <InputComponent placeholder="Password" param={register("passwordHash", { required: true, maxLength: 20 })} type="password" />
            <button  type="submit">Login</button>
            </form>
            <span>Não tem conta?</span>
            <a href='/register'>Registre-se</a>
        </div>
    </>
    )
}

export default LoginPage;