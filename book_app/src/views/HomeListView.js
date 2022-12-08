import Loading from "./Loading";
import { Table } from "react-bootstrap";
import '../css/homeListView.css';


var deleteItem;
function HomeListView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }
    
    function renderList(array) {
        function listRow(data) {
            return (
                <tr key={data.id}>
                    <td>{data.date.toDate().toString().substr(4,11)}</td>
                    <td>{data.type}</td>
                    <td>{data.desc}</td>
                    <td>{data.number}</td>
                    <td><button id={data.id} onClick={props.handleDelete} type="submit">x</button></td>
                </tr>
            )
        }
        return array.records.map(listRow);
    }

    return (
        <div className="home-list-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <Table striped bordered hover className="home-list">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>      </th>
                    </tr>
                </thead>
                <tbody>
                    {renderList(props)}
                </tbody>
            </Table>
        </div>
    );
}
export const deleteId = deleteItem;
export default HomeListView;