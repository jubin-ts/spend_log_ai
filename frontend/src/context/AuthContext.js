import { createContext,useReducer,useEffect} from 'react'

export const AuthContext = createContext()

export const authReducer = (state,action) => {
    switch (action.type) {
        case 'LOGIN':
            return {uuser: action.payload}
        case 'LOGOUT' :
            return {user : null}  
        default :
            return state      
    }
}

export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(authReducer,{
        uuser:null
    })

    useEffect(() => {
        const uuser = JSON.parse(localStorage.getItem('uuser'))

        if (uuser) {
            dispatch ({type: 'LOGIN',payload:uuser})
        }
    },[])

console.log('AuthContext state:', state )

return (
    <AuthContext.Provider value={{...state, dispatch }}  >
        {children}
    </AuthContext.Provider>
)
}