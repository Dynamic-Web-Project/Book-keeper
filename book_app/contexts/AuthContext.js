import React , {createContext , useContext} from 'react';
import { auth } from '../src/firebase';

const initialState = {
    currentUser:null
}
const AuthContext = createContext();

export function useAuth(){
    return React.useContext(AuthContext);
}

 export function AuthProvider(){
    const login = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const value={
        currentUser: initialState.currentUser
    }
    return (
        <AuthContext.Provider value={value} {...props} />
    );
}

