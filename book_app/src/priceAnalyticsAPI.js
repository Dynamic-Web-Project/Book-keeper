import { API_KEY } from "./apiConfig";

const API_HOST = 'https://price-analytics.p.rapidapi.com';

function treatHTTPResponse(response) {
    if (response.status !== 200) throw new Error("API problem " + response.status);
    return response.json();
}

function transformResult(params) {
    console.log("transformed: "+params.results);
    return params.results;
}

export function getProduct(job_id) {
    return (
        fetch(API_HOST + '/poll-job/' + job_id,
            {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': API_KEY,
                    'X-RapidAPI-Host': API_HOST
                }
            }
        )
            .then(treatHTTPResponse)
            .then(transformResult)
    )
}

export function searchProduct(searchParams) {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source", "google");
    encodedParams.append("country", "se");
    encodedParams.append("values", searchParams);

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '52d3c5199dmshd8a9c2c5d836463p15f626jsn9b8c04124c0e',
            'X-RapidAPI-Host': 'price-analytics.p.rapidapi.com'
        },
        body: encodedParams
    };

    return (
        fetch('https://price-analytics.p.rapidapi.com/search-by-term', options)
            .then(treatHTTPResponse)
            .then(transformResult)
    )

}

