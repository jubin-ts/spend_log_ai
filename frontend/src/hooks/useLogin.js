import { useState } from "react";
import {useAuthContext} from './useAuthContext'

export const useLoginup = () => {
    const [error , setError] = useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const logup = async (email) => {
        setIsLoading(true);
        setError(null);
      
        const response = await fetch('api/user/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        });
      
        if (!response.ok) {
          const errorResponse = await response.json();
          const errorMessage = errorResponse.error || 'Failed to log up';
          throw new Error(errorMessage);
        }
      
        const json = await response.json();
        localStorage.setItem('user', JSON.stringify(json));
        dispatch({ type: 'LOGIN', payload: json });
        setIsLoading(false);
      };
      

    return { logup, isLoading, error}
}