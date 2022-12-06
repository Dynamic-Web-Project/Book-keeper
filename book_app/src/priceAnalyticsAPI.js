import { API_KEY } from "./apiConfig";

const encodedParams = new URLSearchParams();
encodedParams.append("source", "google");
encodedParams.append("country", "se");
encodedParams.append("values", "iphone 11");

const postOptions = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'price-analytics.p.rapidapi.com'
    },
    body: encodedParams
};


const getOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': API_KEY,
		'X-RapidAPI-Host': 'price-analytics.p.rapidapi.com'
	}
};

export function getProduct(job_id){
    return (fetch('https://price-analytics.p.rapidapi.com/poll-job/'+job_id, getOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)))
}


export function searchProduct() {
    return (fetch('https://price-analytics.p.rapidapi.com/search-by-term', postOptions)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err)))
}

