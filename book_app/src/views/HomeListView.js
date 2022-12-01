import Loader from "../components/Loader";
import { Table } from "react-bootstrap";
import * as timeago from "timeago.js";

export default function HomeListView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function renderList(array) {
        function listRow(data) {
            return (
                <tr key={data.id}>
                    <td>{timeago.format(data.date.toDate())}</td>
                    <td>{data.type}</td>
                    <td>{data.desc}</td>
                    <td>{data.number}</td>
                </tr>
            )
        }
        return array.records.map(listRow);
    }

    return (
        <>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderList(props)}
                    </tbody>
                </Table>
            </div>
        </>
    );
}
