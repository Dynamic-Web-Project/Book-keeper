import React from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, query, where, orderBy, onSnapshot, deleteDoc } from "firebase/firestore";
import { auth, onAuthStateChanged, db } from "../firebaseModel";
// import { searchProduct, getProduct } from "../priceAnalyticsAPI";
import productConst from "../productConst"; /* Mocked JSON data */
import HomePanelView from "../views/HomePanelView";
import HomeFormView from "../views/HomeFormView";
import HomeListView from "../views/HomeListView";
import HomeSearchView from "../views/HomeSearchView";

export default function Home() {
    const [date, setDate] = React.useState();
    const [type, setType] = React.useState();
    const [desc, setDesc] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [search, setSearch] = React.useState('');

    const [income, setIncome] = React.useState();
    const [expense, setExpense] = React.useState();
    const [balance, setBalance] = React.useState();

    const [records, setRecords] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [show, setShow] = React.useState(true);

    const navigate = useNavigate();

    async function toggleShow() { setShow(!show); }

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

    /* Delete handler, also delete data from firebase */
    async function handleDelete(event) {
        event.preventDefault();
        if (!currentUser) { navigate("/login"); }
        try { await deleteDoc(doc(db, "records", event.currentTarget.id)); }
        catch (error) { console.log(error); }
    }

    let response = productConst[0].results[0].content.offers;
    /* Search submission button handler */
    async function handleSearch(event) {
        event.preventDefault();
        if (search === '') { return; }
        if (!currentUser) { navigate("/login"); }

        toggleShow();
        console.log(response);

        // searchResponse = searchProduct(search);
        // response = getProduct(searchResponse.job_id)
        // console.log("Searching for " + search + " now.");
        // console.log("searchResponse: " + searchResponse);
        // console.log("response: " + response);
    }
    // const [results, setResults] = React.useState(productConst.results[0].content);

    if (currentUser) {
        return (
            show ? (
                <div className='home-wrapper'>
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

                        search={search}
                        setSearch={setSearch}

                        handleSubmit={handleSubmit}
                        handleSearch={handleSearch}
                    />
                    <hr />
                    <HomeListView
                        loading={loading}
                        records={records}

                        handleDelete={handleDelete}
                    />
                </div>
            ) : (
                <HomeSearchView
                    response={response}
                />

            )
        )
    }
}