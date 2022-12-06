import React from "react";
import { auth, onAuthStateChanged } from "../firebaseModel";
import { getProduct } from "../priceAnalyticsAPI";
import SettingsView from '../views/SettingsView';

export default function Settings() {
    const [user, setUser] = React.useState({});

    /* Make sure to refresh when user is loaded */
    onAuthStateChanged(auth, (user) => { setUser(user); })
    async function buttonOnClicked(){
        getProduct('638f1017cf5870603307b71d');
    }

    return (
        <SettingsView
            user={user}
            buttonClicked = {buttonOnClicked}
        />
    )
}