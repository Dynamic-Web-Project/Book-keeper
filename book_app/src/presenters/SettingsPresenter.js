import React from 'react';
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import SettingsView from '../views/SettingsView';

export default function Settings() {
    const [user, setUser] = React.useState({});

    /* Make sure to refresh when user is loaded */
    onAuthStateChanged(auth, (user) => { setUser(user.uid); })

    console.log(user);

    return (
        <SettingsView
            user={user}
        />
    )
}