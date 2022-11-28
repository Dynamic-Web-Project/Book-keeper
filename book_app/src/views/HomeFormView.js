import Loader from "../components/Loader";
import React, { useState } from "react";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import { RiAddFill } from "react-icons/ri";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function HomeForm(props) {
    function handleErrorMessage(error) {
        if (error)
            return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>
    }
    return (
        <>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                <Form>
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
                                <option value="income">Income</option>
                                <option value="expense">Expense</option>
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
                            <Button type="submit"><RiAddFill />Add</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}