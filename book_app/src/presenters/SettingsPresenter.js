import React, { useEffect } from "react";
import { auth, onAuthStateChanged } from "../firebaseModel";
import SettingsView from '../views/SettingsView';

export default function Settings() {
    const [user, setUser] = React.useState({});

    /* Make sure to refresh when user is loaded */
    onAuthStateChanged(auth, (user) => { setUser(user); })

    return (
        <SettingsView
            user={user}
        />
    )
}