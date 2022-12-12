import Loading from "./Loading";
import { Table, Button,Col } from "react-bootstrap";
import '../css/wishlistView.css';
import "../css/common.css";

export default function WishlistView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span>{props.error}</span></div>;
    }

    function renderList(array) {
        function listRow(data) {
            console.log(data);
            return (
                <tr key={data.id} className="table-row">
                    <td ><a href={data.url} target="_blank" rel="noreferrer">{data.name}</a></td>
                    <td >{data.price}</td>
                    <td >{data.seller}</td>
                    <td>{data.shipping}</td>
                    <td className="table-data-delete"><Button className="button" id={data.id} onClick={props.handleDelete}>×</Button></td>
                </tr>
            )
        }
            return (array.map(listRow))
    }

    return (
        <div className="wishlist-wrapper">
            {handleErrorMessage(props.error)}
            <Col md="auto" className="my-1 search-bar-element">
                <Button className="button" href="/search"> Back to Search </Button>
                <Button className="button" href="/home"> Back to Home</Button>
            </Col>
            <hr></hr>
            <Table striped bordered hover className="wishlist">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price(kr)</th>
                        <th>Seller</th>
                        <th>Shipping(kr)</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderList(props.records)}
                </tbody>
            </Table>
        </div>
        
    )
}
