import Loader from "../components/Loader";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function HomeForm(props) {
    function handleErrorMessage(error) {
        if (error) {
            return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>
        }
    }

    return (
        <>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                <Form onSubmit={props.handleSubmit}>
                    <Row className="align-items-center">
                        <Col sm={2} className="my-1">
                            <DatePicker
                                required
                                selected={props.date}
                                onChange={(date) => props.setDate(date)}
                                dateFormat="yyyy/MM/dd HH:mm"
                                maxDate={new Date()}
                                isClearable
                                showYearDropdown
                                showTimeSelect
                                className="form-control"
                            />
                        </Col>

                        <Col sm={2} className="my-1">
                            <Form.Select
                                required
                                value={props.type}
                                onChange={(event) => props.setType(event.target.value)}
                            >
                                <option value="">Type</option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </Form.Select>
                        </Col>

                        <Col sm={2} className="my-1">
                            <FormControl
                                required
                                placeholder="Description"
                                value={props.desc}
                                onChange={(event) => props.setDesc(event.target.value)}
                            />
                        </Col>

                        <Col sm={2} className="my-1">
                            <FormControl
                                required
                                placeholder="Number"
                                type="number"
                                value={props.number}
                                onChange={(event) => props.setNumber(event.target.value)}
                            />
                        </Col>

                        <Col xs="auto" className="my-1">
                            <Button type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}