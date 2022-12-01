import React from 'react';
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, doc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { HomePanel } from '../views/HomePanelView';
import { HomeForm } from '../views/HomeFormView';
import { HomeList } from '../views/HomeListView';
import { useNavigate } from "react-router-dom";

export default function HomePresenter() {
    const [date, setDate] = React.useState();
    const [type, setType] = React.useState();
    const [desc, setDesc] = React.useState('');
    const [number, setNumber] = React.useState('');

    const [income, setIncome] = React.useState();
    const [expense, setExpense] = React.useState();
    const [balance, setBalance] = React.useState();

    const [records, setRecords] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const { currentUser } = auth;
    const navigate = useNavigate();

    /* Subscribes to authentication state and to make sure to refresh when user is defined */
    const [, setAuthState] = React.useState(false);
    function authenticateUser() {
        async function authSetTruthy(user) { setAuthState(!!user); }
        /* Unsubscribe */
        return onAuthStateChanged(auth, authSetTruthy);
    }
    React.useEffect(authenticateUser, []);

    /* Fetches data from the Firestore database */
    function fetchData() {
        async function fetchFromFirebase() {
            if (currentUser) {
                try {
                    const q = query(collection(db, "records"), where("user", "==", doc(db, "users", currentUser.uid)), orderBy("date", "desc"));
                    function snapshot(query) {
                        function isIncome(data) { return data.type === "Income"; }
                        function isExpense(data) { return data.type === "Expense"; }

                        let data = [];
                        query.forEach((doc) => { data.push({ id: doc.id, ...doc.data() }); });
                        setRecords(data);

                        let totIncome = data.filter(isIncome).map(a => +a.number).reduce((a, b) => a + b, 0);
                        let totExpense = data.filter(isExpense).map(a => +a.number).reduce((a, b) => a + b, 0)
                        setIncome(totIncome);
                        setExpense(totExpense);
                        setBalance(totIncome - totExpense);
                        setLoading(false);
                    }
                    return onSnapshot(q, snapshot);
                } catch (error) { console.log(error); }
            }
        }
        fetchFromFirebase();
    }
    React.useEffect(fetchData, [currentUser]);

    /* Submit handler, also pushes data to Firebase */
    async function handleSubmit(event) {
        event.preventDefault();
        if (type === '') { return; }
        if (!currentUser) { navigate("/login"); }

        try {
            await addDoc(collection(db, "records"), {
                date,
                type,
                desc,
                number,
                user: doc(db, "users", currentUser.uid)
            })
            setDesc('');
            setNumber('');
            setDate('');
        } catch (error) { console.log(error); }
    }

    if (currentUser) {
        return (
            <div>
                <HomePanel
                    income={income}
                    expense={expense}
                    balance={balance}
                />
                <hr />
                <HomeForm
                    date={date}
                    setDate={setDate}

                    type={type}
                    setType={setType}

                    desc={desc}
                    setDesc={setDesc}

                    number={number}
                    setNumber={setNumber}

                    handleSubmit={handleSubmit}
                />
                <hr />
                <HomeList
                    loading={loading}
                    records={records}
                />
            </div>
        )
    }
}