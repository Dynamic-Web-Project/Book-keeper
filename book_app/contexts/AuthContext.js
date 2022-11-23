import React , {createContext , useContext} from 'react';


const AuthContext = createContext();

export function useAuth(){
    return React.useContext(AuthContext);
}

 export function AuthProvider(){
    const value={
        currentUser: initialState.currentUser
    }
    return (
        <AuthContext.Provider value={value} {...props} />
    );
}

