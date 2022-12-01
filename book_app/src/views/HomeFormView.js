import Loader from "../components/Loader";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HomeFormView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function dateOnChange(date) { props.setDate(date) }
    function typeOnChange(event) { props.setType(event.target.value) }
    function inputOnChange(event) { props.setDesc(event.target.value) }
    function numberOnChange(event) { props.setNumber(event.target.value) }

    return (
        <>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                <Form onSubmit={props.handleSubmit}>
                    <Row className="align-items-center">
                        {/* Date selector */}
                        <Col sm={2} className="my-1">
                            <DatePicker
                                required
                                selected={props.date}
                                onChange={dateOnChange}
                                dateFormat="yyyy/MM/dd HH:mm"
                                maxDate={new Date()}
                                isClearable
                                showYearDropdown
                                showTimeSelect
                                className="form-control"
                            />
                        </Col>

                        {/* Income / Expense selector */}
                        <Col sm={2} className="my-1">
                            <Form.Select
                                required
                                value={props.type}
                                onChange={typeOnChange}
                            >
                                <option value="">Type</option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </Form.Select>
                        </Col>

                        {/* Description input */}
                        <Col sm={2} className="my-1">
                            <FormControl
                                required
                                placeholder="Description"
                                value={props.desc}
                                onChange={inputOnChange}
                            />
                        </Col>

                        {/* Number input */}
                        <Col sm={2} className="my-1">
                            <FormControl
                                required
                                placeholder="Number"
                                type="number"
                                value={props.number}
                                onChange={numberOnChange}
                            />
                        </Col>

                        {/* Add-button */}
                        <Col xs="auto" className="my-1">
                            <Button type="submit">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}
