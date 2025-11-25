import React from 'react'
import { FiAlertTriangle } from "react-icons/fi";

export default function ErrorComp({message}){
    return(
        <div className='text-base text-red-600 flex m-2 items-center'> <FiAlertTriangle/> <p className='mx-2'>{message ||  ''}</p></div>
    )
}