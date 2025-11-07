import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import type { UserRegisterType } from '../../Types/UserRegister.tsx'
import InputComponent from '../../Components/Inputs/index.tsx'
import ApiController from '../../Api/index.tsx'
import './index.css'

function RegisterPage(){
    let navigate = useNavigate()

    const { register, handleSubmit } = useForm<UserRegisterType>()
    const onSubmit: SubmitHandler<UserRegisterType> = async (data) => {
        if(await ApiController.register(data)){
            navigate('/')
        }
    }

    return (
    <>
        <div id='container'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent placeholder='Nome' param={register("name", { required: true, maxLength: 20 })} type='text'/>
                <InputComponent placeholder='Sobrenome' param={register("surname", { required: true, maxLength: 20 })} type='text'/>
                <InputComponent placeholder='Email' param={register("email", { required: true, maxLength: 20 })} type='text'/>
                <InputComponent placeholder='Senha' param={register("passwordHash", { required: true, maxLength: 20 })} type='password'/>
                <InputComponent placeholder='Data de nascimento' param={register("birth", { required: true})} type='date' />
                <InputComponent placeholder='País' param={register("country", { required: true, maxLength: 20 })} type='text' />
                <button type="submit">Registrar</button>
            </form>
            <span>Já tem conta?</span>
            <a href='/'> Fazer login</a>
        </div>
    </>
    )
}

export default RegisterPage;