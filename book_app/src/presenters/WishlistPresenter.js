import React from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, query, where, orderBy, onSnapshot, deleteDoc } from "firebase/firestore";
import { auth, onAuthStateChanged, db } from "../firebaseModel";
import WishlistView from "../views/WishlistView";

export default function Wishlist() {
    const [records, setRecords] = React.useState([]);

    const navigate = useNavigate();

    /* Make sure to refresh when user is loaded */
    const { currentUser } = auth;
    const [, setIsAuthenticated] = React.useState(false);
    function userStateChanged() {
        async function authorize(user) { setIsAuthenticated(!!user); }
        return onAuthStateChanged(auth, authorize);
    }
    React.useEffect(userStateChanged, []);

    /* Fetches data from the Firestore database */
    function fetchData() {
        async function fetchFromFirebase() {
            if (currentUser) {
                /* TODO */
            }
        }
        fetchFromFirebase();
    }
    React.useEffect(fetchData, [currentUser]);

    /* Delete handler, also delete data from firebase */
    async function handleDelete(event) {
        event.preventDefault();
        if (!currentUser) { navigate("/login"); }
        try { await deleteDoc(doc(db, "wishlist", event.currentTarget.id)); }
        catch (error) { console.log(error); }
    }

    if (currentUser) {
        return (
            <WishlistView
                records={records}
                handleDelete={handleDelete}
            />
        )
    } else {
        return (<span>You are not logged in.</span>)
    }
}