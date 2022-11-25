import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import HeaderView from '../views/HeaderView';

export default function HeaderPresenter() {
    const [user, setUser] = useState({});

    async function logout() {
        await signOut(auth);
    }
    onAuthStateChanged(auth, (user) => {
        setUser(user);
    })

    return (
        <div>
            <HeaderView user={user}
                logout={logout} />
        </div>
    )
}