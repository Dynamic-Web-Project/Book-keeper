import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
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
                    <td >{data.name}</td>
                    <td >{data.price}</td>
                    <td >{data.seller}</td>
                    <td className="table-data-delete"><Button className="button" id={data.id} onClick={props.handleDelete}>×</Button></td>
                </tr>
            )
        }
            return (array.map(listRow))
    }

    return (
        <div className="home-list-wrapper">
            {handleErrorMessage(props.error)}
            <Table striped bordered hover className="home-list">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Seller</th>
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
