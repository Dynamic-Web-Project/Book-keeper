import Loading from "./Loading";
import { Card, Row, Col } from "react-bootstrap";
import '../css/homeView.css';
import "../css/common.css";

export default function HomePanelView(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span>{props.error}</span></div>;
    }

    function renderCard(headerText, cardText) {
        return (
            <Col md={4}>
                {/* The className param sets the class for modifying in CSS etc. */}
                <Card className={headerText}>
                    <Card.Header>{headerText}</Card.Header>
                    <Card.Body>
                        {props.loading ?
                            <Loading /> :
                            <Card.Text>{cardText}</Card.Text>
                        }
                    </Card.Body>
                </Card>
            </Col>
        )
    }

    return (
        <div className="home-panel-wrapper">
            {handleErrorMessage(props.error)}
            <Row className="home-panel">
                {renderCard("Income", props.income)}
                {renderCard("Expense", props.expense)}
                {renderCard("Balance", props.balance)}
            </Row>
        </div>
    )
}
