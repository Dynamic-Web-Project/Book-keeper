import Loading from "./Loading";
import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import '../css/searchBarView.css';

export default function SearchBar(props) {
    function handleErrorMessage(error) {
        if (error) return <div className="errorMessage"><span style={{ color: "white" }}>{props.error}</span></div>;
    }

    function searchInputOnChange(event) { props.setSearchQuery(event.target.value) }

    return (
        <div className="search-bar-wrapper">
            {handleErrorMessage(props.error)}
            {props.loading && <Loading />}
            <Row className="align-items-center">
                <Col>
                    <Form onSubmit={props.handleSearch} className="search-bar">
                        <Row className="align-items-center">
                            {/* Search input */}
                            <Col sm={7} className="my-1 home-form-element">
                                <FormControl
                                    required
                                    placeholder="Search products"
                                    value={props.search}
                                    onChange={searchInputOnChange}
                                />
                            </Col>

                            {/* Search-button */}
                            <Col sm={3} className="my-1 home-form-element">
                                <Button type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                    Searches can take up to 20 seconds, please be patient. For now, please open the links in New Tab.
                </Col>
            </Row>
        </div>
    );
}