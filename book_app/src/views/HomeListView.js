import Loading from "./Loading";
import { Table, Button } from "react-bootstrap";
import '../css/homeView.css';
import "../css/common.css";

export default function HomeListView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span>{props.error}</span></div>;
    }

    function renderList(array) {
        function listRow(data) {
            return (
                <tr key={data.id} className="table-row">
                    <td className="table-data-date">{data.date.toDate().toString().substr(4, 11)}</td>
                    <td className="table-data-type">{data.type}</td>
                    <td className="table-data-description">{data.desc}</td>
                    <td className="table-data-number">{data.number}</td>
                    <td className="table-data-delete"><Button className="button" id={data.id} onClick={props.handleDelete}>×</Button></td>
                </tr>
            )
        }

        if (props.loading) {
            return (
                <tr>
                    <td colSpan={5}>{props.loading && <Loading />}</td>
                </tr>
            )
        } else {
            return (array.records.map(listRow))
        }
    }

    return (
        <div className="home-list-wrapper">
            {handleErrorMessage(props.error)}
            <Table striped bordered hover className="home-list">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderList(props)}
                </tbody>
            </Table>
        </div>
    )
}
