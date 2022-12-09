import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
import '../css/homeView.css';
import "../css/common.css";

function HomeListView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function renderList(array) {
        function listRow(data) {
            return (
                <tr key={data.id}>
                    <td>{data.date.toDate().toString().substr(4, 11)}</td>
                    <td>{data.type}</td>
                    <td>{data.desc}</td>
                    <td>{data.number}</td>
                    <td><Button className="button" id={data.id} onClick={props.handleDelete}>×</Button></td>
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
export default HomeListView;