import Loading from "./Loading";
import { Card, Row, Col } from "react-bootstrap";

export default function HomePanelView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function renderCard(headerText, cardText) {
        return (
            <Col md={4}>
                {/* The className param sets the class for modifying in CSS etc. */}
                <Card className={headerText}>
                    <Card.Header>{headerText}</Card.Header>
                    <Card.Body>
                        <Card.Text>{cardText}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    return (
        <div className="home-panel-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <Row className="home-panel">
                {renderCard("Income", props.income)}
                {renderCard("Expense", props.expense)}
                {renderCard("Balance", props.balance)}
            </Row>
        </div>
    );
}
