import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import HeaderView from '../views/HeaderView';

export default function Header() {
    const [user, setUser] = React.useState({});

    async function logout() { await signOut(auth); }

    /* Make sure to refresh when user is loaded */
    onAuthStateChanged(auth, (user) => { setUser(user); })

    return (
        <HeaderView
            user={user}
            logout={logout}
        />
    )
}