import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
import '../css/searchView.css';
import "../css/common.css";

export default function SearchResults(props) {
    function renderResults(response) {
        if (props.loading) {
            return (
                <tr>
                    <td colSpan={5}>{props.loading && <Loading />} Searching, please wait! {props.resultsLoadingProgress} completed...</td>
                </tr>
            )
        } else if (!props.loading && response) {
            function renderTable(data) {
                /* If the price contains description-like content, do not show currency */
                function checkPriceType(dataType) {
                    if (dataType === 0) { return "Free" }
                    if (/^(\d+,)*(\d+.)*(\d+)$/.test(dataType)) { return dataType + " " + data.currency }
                    else if (dataType === null) { return "Unavailable" }
                    else { return dataType }
                }

                /* Takes the item's name, URL and price, then add to the wish list, also triggers styling changes */
                function addToWishList(data) {
                    let elementId = document.getElementById(data.url);
                    elementId.disabled = true;
                    elementId.innerHTML = "✓";
                    props.handleSubmit(data.name, data.url, data.seller, data.shipping, data.price, data.currency);
                }

                return (
                    <tr key={data.url} className="table-row">
                        <td><a href={data.url}>{data.name}</a></td>
                        <td className="table-data-seller">{data.seller}</td>
                        <td className="table-data-price">{checkPriceType(data.price)}</td>
                        <td className="table-data-shipping">{checkPriceType(data.shipping)}</td>
                        {data.url ? <td><Button className="button" id={data.url} onClick={() => addToWishList(data)}>+</Button></td> : <td></td>}
                    </tr>
                )
            }
            return (response.map(renderTable))
        } else {
            return (
                <tr>
                    <td colSpan={5}>Please initiate a search!</td>
                </tr>
            )
        }
    }

    return (
        <div className="search-results-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th className="table-seller-column">Seller</th>
                        <th className="table-price-column">Price</th>
                        <th className="table-Shipping-column">Shipping</th>
                        <th className="table-function-column"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderResults(props.response)}
                </tbody>
            </Table>
        </div>
    )
}
