import React from 'react';
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged } from "../firebaseModel";
import { searchProduct, getProduct } from "../priceAnalyticsAPI";
import productConst from "../productConst"; /* Mocked JSON data */
import SearchBarView from "../views/SearchBarView";
import SearchResultsView from "../views/SearchResultsView";

export default function Search() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [response, setResponse] = React.useState(null);
    const [loading, setLoading] = React.useState();

    const navigate = useNavigate();

    /* Make sure to refresh when user is loaded */
    const { currentUser } = auth;
    const [, setIsAuthenticated] = React.useState(false);
    function userStateChanged() {
        async function authorize(user) { setIsAuthenticated(!!user); }
        return onAuthStateChanged(auth, authorize);
    }
    React.useEffect(userStateChanged, []);

    /* Search submission button handler */
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

            const getProductResponseFirst = await getProduct(searchProductResponse.job_id);
            console.log("productResponse: " + JSON.stringify(getProductResponseFirst));
            console.log("productResponse status: " + getProductResponseFirst.status);

            /* Currently a bandaid-manual-solution */
            await waitFor(20000);

            const getProductResponse = await getProduct(searchProductResponse.job_id);
            console.log("productResponse 2nd time: " + JSON.stringify(getProductResponse));
            console.log("productResponse status 2nd time: " + getProductResponse.status);

            if (getProductResponse.status === "finished") {
                setResponse(getProductResponse.results[0].content.offers);
                setLoading(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.log("try catch failed: " + error);
            setLoading(false);
        }
    }
    // let response = productConst[0].results[0].content.offers;
    // const [results, setResults] = React.useState(productConst.results[0].content);

    if (response) {
        return (
            <>
                <SearchBarView
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}

                    handleSearch={handleSearch}
                />
                <hr />
                <SearchResultsView
                    loading={loading}
                    response={response}
                />
            </>
        )
    } else {
        return (
            <>
                <SearchBarView
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}

                    handleSearch={handleSearch}
                />
                <hr />
                <SearchResultsView
                    loading={loading}
                />
            </>
        )
    }
}
