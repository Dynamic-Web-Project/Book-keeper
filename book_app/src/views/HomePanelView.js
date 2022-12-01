import Loader from "../components/Loader";
import { Card, Row, Col } from "react-bootstrap";

export function HomePanel(props) {
    function handleErrorMessage(error) {
        if (error)
            return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>
    }

    return (
        <>
            {handleErrorMessage(props.error)}
            {props.loading && <Loader />}
            <div>
                <Row>
                    <Col md={4}>
                        <Card
                            bg="primary"
                            text="white"
                            className="mb-2"
                        >
                            <Card.Header>Income</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {props.income}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card
                            bg="secondary"
                            text="white"
                            className="mb-2"
                        >
                            <Card.Header>Expense</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {props.expense}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card
                            bg="danger"
                            text="white"
                            className="mb-2"
                        >
                            <Card.Header>Balance</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {props.balance}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        </>
    );
}