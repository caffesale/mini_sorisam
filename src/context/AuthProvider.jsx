import { createContext, useState } from "react"

const AuthContext = createContext({});

export const AuthProvider = ({ children}) => {
    const [ auth, setAuth ] = useState({
        isLogin : false,
        accessToken : undefined
    });

    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;