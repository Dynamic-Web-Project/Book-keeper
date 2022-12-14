import React from 'react';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, doc } from "firebase/firestore";
import { auth, onAuthStateChanged, db } from "../firebaseModel";
import { searchProduct, getProduct } from "../priceAnalyticsAPI";
//import productConst from "../productConst"; /* Mocked JSON data */
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

    /* Used for default if no response available */
    const errorResultData = [{
        "name": "No search results or timed out. Please try another keyword.",
        "url": null
    }]

    /* Search submission button handler */
    async function handleSearch(event) {
        event.preventDefault();
        if (searchQuery === '') { return; }
        if (!currentUser) { navigate("/login"); }
        const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

        setResponse(null);
        setLoading(true);
        setResponse(errorResultData);

        /* First we call searchProduct, then wait 30 seconds and start polling the results */
        try {
            // console.log("Searching for " + searchQuery + " now.");
            const searchProductResponse = await searchProduct(searchQuery);
            // console.log("searchResponse job_id: " + searchProductResponse.job_id);
            // console.log("searchResponse stringify: " + JSON.stringify(searchProductResponse));

            let i = 0;
            while (i < 60) {
                /* Initial wait (30 seconds) */
                while (i < 30) {
                    setResultsLoadingProgress(Math.round((100 / 60) * i + 1) + "%");
                    await waitFor(1000);
                    console.log("i counter:" + i);
                    i++;
                }

                /* Second phase polling (10 x 3 seconds) */
                let getProductResponse;
                let j = 0;
                while (j < 3) {
                    // console.log("j counter:" + j);

                    getProductResponse = await getProduct(searchProductResponse.job_id);
                    // console.log("productResponse [" + j + "] response: " + JSON.stringify(getProductResponse));
                    // console.log("productResponse [" + j + "] status: " + getProductResponse.status);

                    if (getProductResponse?.status === "finished") {
                        setResponse(getProductResponse.results[0].content.offers);
                        i = 60;
                        break;
                    }

                    let k = 0;
                    while (k < 10) {
                        setResultsLoadingProgress(Math.round((100 / 60) * i + 1) + "%");
                        await waitFor(1000);
                        // console.log("i counter:" + i);
                        i++;
                        k++;
                    }
                    j++;
                }
            }
            setLoading(false);
            setResultsLoadingProgress(null);
        } catch (error) {
            console.log("try catch failed: " + error);
            setLoading(false);
        }
    }

    // /* Using mock data */
    // async function handlestuff(event) {
    //     event.preventDefault();
    //     if (searchQuery === '') { return; }
    //     if (!currentUser) { navigate("/login"); }
    //     setResponse(null);
    //     setLoading(true);
    //     const waitFor = delay => new Promise(resolve => setTimeout(resolve, delay));

    //     async function pollResponse() {
    //         /* Initial wait */
    //         let t = 0;
    //         const r = 4;
    //         while (t < 3) {
    //             await waitFor(10000);
    //             t++;
    //             setResultsLoadingProgress(t * 10 + "%");
    //         }

    //         while (t < 5 || t < r) {
    //             t++;
    //         }
    //     }

    //     for (let i = 5; i < 10; i++) {
    //         await waitFor(getRandomInt(10, 100));
    //         setResultsLoadingProgress((i + 1) * 10 + "%");

    //         if (t = 3) {
    //             setResponse(productConst[0].results[0].content.offers);
    //             break;
    //         }
    //     }

    //     pollResponse();
    //     setLoading(false);
    //     setResultsLoadingProgress(null);
    // }

    /* Submit handler, also pushes data to Firebase */
    async function handleSubmit(name, url, seller, shipping, price, currency) {
        if (!currentUser) { navigate("/login"); }

        try {
            await addDoc(collection(db, "wishlist"), {
                name,
                url,
                seller,
                shipping,
                price,
                currency,
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
