import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useLoginup = () => {
    const [error , setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const logup = async (email) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('api/user/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email})
        })
        if (!response.ok) {
            throw new Error('Failed to log up')
        }
        const json = await response.json()

        // if (!response.ok) {
        //     setIsLoading(false)
        //     setError(json.error)

        // }
        if (response.ok) {
            // save user to local storage 
            localStorage.setItem('user',JSON.stringify(json))

            // update auth context 

            dispatch({type:'LOGIN',payload:json})

            setIsLoading(false)
        }
    }

    return { logup, isLoading, error}
}