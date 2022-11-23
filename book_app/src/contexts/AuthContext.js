import React, { createContext, useContext } from 'react';

const AuthContext = createContext();
 
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(){
    return (
        <div>
          <p>Body</p>
        </div>
    );
}