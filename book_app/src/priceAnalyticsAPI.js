import { API_KEY } from "./apiConfig";

const API_HOST = 'price-analytics.p.rapidapi.com';

function treatHTTPResponse(response) {
    if (response.status !== 200) throw new Error("API problem " + response.status);
    return response.json();
}

export function getProduct(job_id) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        }
    }

    return (
        fetch('https://' + API_HOST + '/poll-job/' + job_id, options)
            .then(treatHTTPResponse)
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
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': API_HOST
        },
        body: encodedParams
    }

    return (
        fetch('https://' + API_HOST + '/search-by-term', options)
            .then(treatHTTPResponse)
    )
}
