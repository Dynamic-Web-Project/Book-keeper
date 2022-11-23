import React,{createContext,useContext} from 'react';

const initialState = {
    currentUser:null
}

const AuthContext = createContext()
export function useAuth(){
    return React.usrContext(AuthContext)
}



export function AuthProvider(props) {

    const value={
        currentUser: initialState.currentUser
    }

    return (
        <AuthContext.Provider value={value} {...props} />
        
    );
}
