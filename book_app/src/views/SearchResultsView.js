import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
import '../css/searchView.css';
import "../css/common.css";

export default function SearchResults(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span>{props.error}</span></div>;
    }

    function renderResults(response) {
        // arr.map(func1).map(func2)
        if (response) {
            function renderTable(item) {
                /* If the price contains description-like content, do not show currency */
                function checkPriceType(string) {
                    if (/^(\d+,)*(\d+.)*(\d+)$/.test(string)) { return item.price + " " + item.currency }
                    else if (string === null) { return "Unavailable" }
                    else { return string }
                }

                /* Adds selected product to wish list */
                function addProductToWishList(item) {
                    // item.handleAdd;
                    return 0;
                }

                return (
                    <tr key={item.url} className="table-row">
                        <td><a href={item.url}>{item.name}</a></td>
                        <td className="result-price">{checkPriceType(item.price)}</td>
                        <td><Button className="button" id={item.name} onClick={addProductToWishList(item)}>+</Button></td>
                    </tr>
                )
            }
            return (response.map(renderTable))
        } else if (props.loading) {
            return (
                <tr>
                    <td colSpan={3}>Searching, please wait!</td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td colSpan={3}>No results.</td>
                </tr>
            )
        }
    }


    return (
        <div className="search-results-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th className="table-price-column">Price</th>
                        <th className="table-function-column"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderResults(props.response)}
                </tbody>
            </Table>
        </div>
    );
}
