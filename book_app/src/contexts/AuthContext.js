import { setUserId } from 'firebase/analytics';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState , useReducer} from 'react';
import { auth } from '../firebase';

//test
const initialState = {
    currentUser: null
}
const AuthContext = createContext()

export function useAuth() {
    return React.useContext(AuthContext)
}

function authReducer(state, state) {
    switch (action.type) {
        case 'LOGIN': return { ...state, currentUser: action.payload }
        case 'LOGOUT': return { ...state, currentUser: null }
        default: return state;
    }
}

export function AuthProvider(props) {
    const [state, dispatch] = useReduceer(authReducer, initialState)
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

    const value = {
        currentUser, login, signup, logout
    }
    return (
        <AuthContext.Provider value={value} {...props} />
    );
}