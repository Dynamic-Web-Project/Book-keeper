import { setUserId } from 'firebase/analytics';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState, useReducer } from 'react';
import { auth } from '../firebase';

const initialState = {
    currentUser: null
}
const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}
function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN': return { ...state, currentUser: action.payload }
        case 'LOGOUT': return { ...state, currentUser: null }
        default: return state;
    }
}

export function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState)
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
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                dispatch({ type: 'LOGIN', payload: user })
            } else {
                dispatch({type:'LOGOUT'})
            }
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser: state.currentUser, login, signup, logout
    }
    return (
        <AuthContext.Provider value={value} {...props} />
    );
}