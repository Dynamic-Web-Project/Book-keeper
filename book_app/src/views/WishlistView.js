import Loading from "./Loading";
import { Row, Col, Table, Button } from "react-bootstrap";
import '../css/wishlistView.css';
import "../css/common.css";

export default function WishlistView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span>{props.error}</span></div>;
    }

    function renderList(array) {
        function listRow(data) {
            /* If the price contains description-like content, do not show currency */
            function checkPriceType(dataType) {
                if (dataType === 0) { return "Free" }
                if (/^(\d+,)*(\d+.)*(\d+)$/.test(dataType)) { return dataType + " " + data.currency }
                else if (dataType === null) { return "Unavailable" }
                else { return dataType }
            }

            return (
                <tr key={data.id} className="table-row">
                    <td><a href={data.url}>{data.name}</a></td>
                    <td className="table-data-seller">{data.seller}</td>
                    <td className="table-data-price">{checkPriceType(data.price)}</td>
                    <td className="table-data-shipping">{checkPriceType(data.shipping)}</td>
                    <td className="table-data-delete"><Button className="button" id={data.id} onClick={props.handleDelete}>×</Button></td>
                </tr>
            )
        }

        if (!array) {
            return (
                <tr>
                    <td colSpan={5}>No products in wish list! Begin by adding some in Search products!</td>
                </tr>
            )
        } else { return (array.records.map(listRow)) }
    }


    return (
        <div className="wishlist-wrapper">
            {handleErrorMessage(props.error)}
            <Row className="align-items-center">
                <Col md="auto" className="my-1">
                    <Button className="button" href="/search"> Back to Search </Button>
                </Col>
                <Col md="auto" className="my-1">
                    <Button className="button" href="/home"> Back to Home</Button>
                </Col>
            </Row>
            <hr />
            <div className="wishlist-results-wrapper">
                <Table striped bordered hover className="wishlist">
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
                        {renderList(props)}
                    </tbody>
                </Table>
            </div>
        </div >

    )
}
