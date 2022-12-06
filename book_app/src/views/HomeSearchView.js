import Loading from "./Loading";
import { Table } from "react-bootstrap";

export default function HomeSearchView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function renderResults(props) {
        // arr.map(func1).map(func2)
        function renderTable(item) {
            return (
                <tr key={item.url}>
                    <td><a href={item.url}>{item.name}</a></td>
                    <td>{item.price + " " + item.currency}</td>
                </tr>
            )
        }
        return (props.response.map(renderTable))
    }

    return (
        <div className="home-search-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <Table striped bordered hover className="home-search">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {renderResults(props)}
                </tbody>
            </Table>
        </div>
    );
}
