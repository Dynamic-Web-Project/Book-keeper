import Loading from "./Loading";
import { Table } from "react-bootstrap";
import '../css/searchResultsView.css';

export default function SearchResults(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
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

                return (
                    <tr key={item.url}>
                        <td><a href={item.url}>{item.name}</a></td>
                        <td className="result-price">{checkPriceType(item.price)}</td>
                    </tr>
                )
            }
            return (response.map(renderTable))
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
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderResults(props.response)}
                </tbody>
            </Table>
        </div>
    );
}
