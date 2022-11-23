import { signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut, onAuthStateChanged} from 'firebase/auth';
import React,{createContext,useContext,useEffect,useState} from 'react';
import { auth } from '../firebase';

const initialState = {
    currentUser:null
}
const AuthContext = createContext()

export function useAuth(){
    return React.useContext(AuthContext)
}

export function AuthProvider(props) {
    const [currentUser, setCurrentUser] = useState(initialState.currentUser);
    const login = (email, password) => {
         return signInWithEmailAndPassword(auth, email, password)
    }
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
   }
    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
            onAuthStateChanged(auth, user => {
              if (user) {
                setCurrentUser(user)
              } else {
                setCurrentUser(null)
              }
            })
         }, [])

    const value={
        currentUser, login , signup , logout
    }
    return (
        <AuthContext.Provider value={value} {...props} />
    );
}

