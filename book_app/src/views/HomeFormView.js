import Loading from "./Loading";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../css/homeFormView.css';
import "../css/common.css";

export default function HomeFormView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function dateOnChange(date) { props.setDate(date) }
    function typeOnChange(event) { props.setType(event.target.value) }
    function inputOnChange(event) { props.setDesc(event.target.value) }
    function numberOnChange(event) { props.setNumber(event.target.value) }

    return (
        <div className="home-form-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <Row className="align-items-center">
                <Col>
                    <Form onSubmit={props.handleSubmit} className="home-form">
                        <Row className="align-items-center">
                            {/* Date selector */}
                            <Col sm={2} className="my-1 home-form-element">
                                <DatePicker
                                    required
                                    selected={props.date}
                                    onChange={dateOnChange}
                                    dateFormat="yyyy/MM/dd"
                                    maxDate={new Date()}
                                    isClearable
                                    showYearDropdown
                                    className="form-control"
                                />
                            </Col>

                            {/* Income / Expense selector */}
                            <Col sm={2} className="my-1 home-form-element">
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
                            <Col sm={3} className="my-1 home-form-element">
                                <FormControl
                                    required
                                    placeholder="Description"
                                    value={props.desc}
                                    onChange={inputOnChange}
                                />
                            </Col>

                            {/* Number input */}
                            <Col sm={2} className="my-1 home-form-element">
                                <FormControl
                                    required
                                    placeholder="Amount"
                                    type="number"
                                    value={props.number}
                                    onChange={numberOnChange}
                                />
                            </Col>

                            {/* Add-button */}
                            <Col sm={1} className="my-1 home-form-element">
                                <Button type="submit">Add</Button>
                            </Col>

                            {/* Search-button */}
                            <Col sm={2} className="my-1 home-form-element">
                                <Button href="/search">Search Product</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </div >
    );
}
