import type { UseFormRegisterReturn } from 'react-hook-form'

function InputComponent({ placeholder, param,type }: { placeholder: string; param: UseFormRegisterReturn;type:string}){
    return (
        <>
        <span>{placeholder}</span>
        <input {...param} type={type} />
        </>
    )
}
export default InputComponent;