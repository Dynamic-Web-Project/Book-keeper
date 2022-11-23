import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{createContext,useContext} from 'react';
import { auth } from '../firebase';

const initialState = {
    currentUser:null
}

const AuthContext = createContext()
export function useAuth(){
    return React.useContext(AuthContext)
}

export function AuthProvider(props) {
    const login = (email, password) => {
         return signInWithEmailAndPassword(auth, email, password)
    }
    const value={
        currentUser: initialState.currentUser, login
    }
    return (
        <AuthContext.Provider value={value} {...props} />
    );
}
