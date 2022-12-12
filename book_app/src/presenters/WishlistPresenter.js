import React from 'react';
import { useNavigate } from "react-router-dom";
import { collection, doc, query, where, onSnapshot, deleteDoc } from "firebase/firestore";
import { auth, onAuthStateChanged, db } from "../firebaseModel";
import WishlistView from "../views/WishlistView";

export default function Wishlist() {
    const [records, setRecords] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

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
                try {
                    const q = query(collection(db, "wishlist"), where("user", "==", doc(db, "users", currentUser.uid)));
                    function snapshot(query) {
                        let data = [];
                        query.forEach((doc) => { data.push({ id: doc.id, ...doc.data() }); });
                        setRecords(data);
                        setLoading(false);
                    }
                    return onSnapshot(q, snapshot);
                } catch (error) { console.log(error); }
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
                loading={loading}
                records={records}

                handleDelete={handleDelete}
            />
        )
    } else {
        return (<span>You are not logged in.</span>)
    }
}
