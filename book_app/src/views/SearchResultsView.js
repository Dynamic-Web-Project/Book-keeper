import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
import '../css/searchView.css';
import "../css/common.css";

export default function SearchResults(props) {
    function renderResults(response) {
        if (response) {
            function renderTable(item) {
                /* If the price contains description-like content, do not show currency */
                function checkPriceType(itemType) {
                    if (itemType === 0) { return "Free" }
                    if (/^(\d+,)*(\d+.)*(\d+)$/.test(itemType)) { return itemType + " " + item.currency }
                    else if (itemType === null) { return "Unavailable" }
                    else { return itemType }
                }

                /* Takes the item's name, URL and price, then add to the wish list, also triggers styling changes */
                function addToWishList(item) {
                    let elementId = document.getElementById(item.url);
                    elementId.disabled = true;
                    elementId.innerHTML = "✓";
                    props.handleSubmit(item.name, item.url, item.seller, item.shipping, item.price)
                }

                return (
                    <tr key={item.url} className="table-row">
                        <td><a href={item.url}>{item.name}</a></td>
                        <td className="result-seller">{item.seller}</td>
                        <td className="result-price">{checkPriceType(item.price)}</td>
                        <td className="result-shipping">{checkPriceType(item.shipping)}</td>
                        {item.url ? <td><Button className="button" id={item.url} onClick={() => addToWishList(item)}>+</Button></td> : <td></td>}
                    </tr>
                )
            }
            return (response.map(renderTable))
        } else {
            return (
                <tr>
                    {props.loading ?
                        <td colSpan={5}>{props.loading && <Loading />} Searching, please wait! {props.resultsLoadingProgress} completed...</td> :
                        <td colSpan={5}>Please initiate a search!</td>
                    }
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
