import React, { useEffect, useState } from 'react';
import { auth, db } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, doc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { HomePanel } from '../views/HomePanelView';
import { HomeForm } from '../views/HomeFormView';
import { HomeList } from '../views/HomeListView';
import { useNavigate } from "react-router-dom";

export default function HomePresenter() {
    const [date, setDate] = useState();
    const [type, setType] = useState();
    const [desc, setDesc] = useState('');
    const [number, setNumber] = useState('');

    const [income, setIncome] = useState();
    const [expense, setExpense] = useState();
    const [balance, setBalance] = useState();

    const [records, setRecords] = useState([]);
    const [loading, setLoading] = useState(true);

    const { currentUser } = auth;
    const navigate = useNavigate();

    /* For making sure to refresh when user is defined */
    const [, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => { setIsAuthenticated(!!user); });
        return () => { unsubscribe(); };
    }, []);

    /* Fetches data from the Firestore database */
    useEffect(() => {
        async function fetchData() {
            if (currentUser) {
                try {
                    const q = query(collection(db, "records"), where("user", "==", doc(db, "users", currentUser.uid)), orderBy("date", "desc"));
                    return onSnapshot(q, (querySnapshot) => {
                        function isIncome(data) { return data.type === "Income"; }
                        function isExpense(data) { return data.type === "Expense"; }

                        let data = [];
                        querySnapshot.forEach((doc) => { data.push({ id: doc.id, ...doc.data() }); });
                        setRecords(data);

                        let totIncome = data.filter(isIncome).map(a => +a.number).reduce((a, b) => a + b, 0);
                        let totExpense = data.filter(isExpense).map(a => +a.number).reduce((a, b) => a + b, 0)
                        setIncome(totIncome);
                        setExpense(totExpense);
                        setBalance(totIncome - totExpense);

                        setLoading(false);
                    });
                } catch (error) { console.log(error); }
            }
        }
        fetchData();
    }, [currentUser]);

    const handleSubmit = async (event) => {
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