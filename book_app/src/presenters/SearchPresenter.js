import React from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc, query, where, orderBy, onSnapshot, deleteDoc } from "firebase/firestore";
import { auth, onAuthStateChanged, db } from "../firebaseModel";
import { searchProduct, getProduct } from "../priceAnalyticsAPI";
import productConst from "../productConst"; /* Mocked JSON data */
import SearchBarView from "../views/SearchBarView";
import SearchResultsView from "../views/SearchResultsView";

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState();
    const [response, setResponse] = React.useState();
    const [loading, setLoading] = React.useState();
    const [resultsLoadingProgress, setResultsLoadingProgress] = React.useState();

    const navigate = useNavigate();

    /* Make sure to refresh when user is loaded */
    const { currentUser } = auth;
    const [, setIsAuthenticated] = React.useState(false);
    function userStateChanged() {
        async function authorize(user) { setIsAuthenticated(!!user); }
        return onAuthStateChanged(auth, authorize);
    }
    React.useEffect(userStateChanged, []);

    /* Search submission button handler */ /*
    async function handleSearch(event) {
        event.preventDefault();
        if (searchQuery === '') { return; }
        if (!currentUser) { navigate("/login"); }

        setLoading(true);
        const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

        try {
            console.log("Searching for " + searchQuery + " now.");

            const searchProductResponse = await searchProduct(searchQuery);
            console.log("searchResponse job_id: " + searchProductResponse.job_id);
            console.log("searchResponse stringify: " + JSON.stringify(searchProductResponse));
            await waitFor(30000);

            let getProductResponse;
            for (let i = 0; i < 3; i++) {
                getProductResponse = await getProduct(searchProductResponse.job_id);
                console.log("productResponse [" + i + "] response: " + JSON.stringify(getProductResponse));
                console.log("productResponse [" + i + "] status: " + getProductResponse.status);

                if (getProductResponse.status === "finished") {
                    setResponse(getProductResponse.results[0].content.offers);
                    setLoading(false);
                    break;
                }
                await waitFor(10000);
            }
            setLoading(false);
        } catch (error) {
            console.log("try catch failed: " + error);
            setLoading(false);
        }
    } */

    const tempData = [{
        "name": "No search results. Please try another keyword.",
        "url": null
    }]

    /* Using mock data */
    async function handleSearch(event) {
        event.preventDefault();
        if (searchQuery === '') { return; }
        if (!currentUser) { navigate("/login"); }
        setResponse(null);
        setLoading(true);
        const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
        }

        const r = getRandomInt(5, 10);

        /* Initial wait */
        for (let i = 0; i < 5; i++) {
            await waitFor(getRandomInt(10, 100));
            setResultsLoadingProgress((i + 1) * 10 + "%");
        }

        for (let i = 5; i < 10; i++) {
            await waitFor(getRandomInt(10, 100));
            setResultsLoadingProgress((i + 1) * 10 + "%");

            if (i + 1 > r) {
                setResponse(productConst[0].results[0].content.offers);
                // setResponse(tempData); 
                setResultsLoadingProgress(null);
                setLoading(false);
            }
        }
    }

    /* Submit handler, also pushes data to Firebase */
    async function handleSubmit(name, url, seller, shipping, price) {
        if (!currentUser) { navigate("/login"); }

        try {
            await addDoc(collection(db, "wishlist"), {
                name,
                url,
                seller,
                shipping,
                price,
                user: doc(db, "users", currentUser.uid)
            })
        } catch (error) { console.log(error); }
    }

    if (currentUser) {
        if (response) {
            return (
                <div className="search-wrapper">
                    <SearchBarView
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}

                        handleSearch={handleSearch}
                    />
                    <hr />
                    <SearchResultsView
                        loading={loading}
                        resultsLoadingProgress={resultsLoadingProgress}

                        response={response}
                        handleSubmit={handleSubmit}
                    />
                    <p className="search-wish-list-tip">Any products that caught your interest? Press the '+' button to add to your wish list!</p>
                </div>
            )
        } else {
            return (
                <div className="search-wrapper">
                    <SearchBarView
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}

                        handleSearch={handleSearch}
                    />
                    <hr />
                    <SearchResultsView
                        loading={loading}
                        resultsLoadingProgress={resultsLoadingProgress}
                    />
                </div>
            )
        }
    }
}
