import React from 'react';
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, doc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import HomePanelView from '../views/HomePanelView';
import HomeFormView from '../views/HomeFormView';
import HomeListView from '../views/HomeListView';

export default function Home() {
    const [date, setDate] = React.useState();
    const [type, setType] = React.useState();
    const [desc, setDesc] = React.useState('');
    const [number, setNumber] = React.useState('');

    const [income, setIncome] = React.useState();
    const [expense, setExpense] = React.useState();
    const [balance, setBalance] = React.useState();

    const [records, setRecords] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    /* Make sure to refresh when user is loaded */
    const [user, setUser] = React.useState(auth);
    onAuthStateChanged(auth, (user) => { setUser(user); })

    const navigate = useNavigate();

    /* Fetches data from the Firestore database */
    function fetchData() {
        async function fetchFromFirebase() {
            if (user) {
                try {
                    const q = query(collection(db, "records"), where("user", "==", doc(db, "users", user.uid)), orderBy("date", "desc"));
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
    React.useEffect(fetchData, [user]);

    /* Submit handler, also pushes data to Firebase */
    async function handleSubmit(event) {
        event.preventDefault();
        if (type === '') { return; }
        if (!user) { navigate("/login"); }

        try {
            await addDoc(collection(db, "records"), {
                date,
                type,
                desc,
                number,
                user: doc(db, "users", user.uid)
            })
            setDesc('');
            setNumber('');
            setDate('');
        } catch (error) { console.log(error); }
    }

    if (user) {
        return (
            <div>
                <HomePanelView
                    income={income}
                    expense={expense}
                    balance={balance}
                />
                <hr />
                <HomeFormView
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
                <HomeListView
                    loading={loading}
                    records={records}
                />
            </div>
        )
    }
}