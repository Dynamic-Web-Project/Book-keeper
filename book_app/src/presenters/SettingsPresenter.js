import React, { useEffect } from "react";
import { auth, onAuthStateChanged } from "../firebaseModel";
import { getProduct } from "../priceAnalyticsAPI";
import productConst from "../productConst"; /* Mocked JSON data */
import SettingsView from '../views/SettingsView';

export default function Settings() {
    const [user, setUser] = React.useState({});
    // const [results, setResults] = React.useState(productConst.results[0].content);
    let response = productConst[0].results[0].content.offers;
    console.log(response);

    /* Make sure to refresh when user is loaded */
    onAuthStateChanged(auth, (user) => { setUser(user); })

    function buttonOnClicked() {
        // getProduct('638f1017cf5870603307b71d');
        // setResults(productConst.results[0].content);
    }
    React.useEffect(buttonOnClicked, [])

    return (
        <SettingsView
            user={user}
            buttonClicked={buttonOnClicked}
            response={response}
        />
    )
}