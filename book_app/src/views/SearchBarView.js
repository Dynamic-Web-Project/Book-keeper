import { Form, Row, Col, FormControl, Button } from "react-bootstrap";
import '../css/searchView.css';
import "../css/common.css";

export default function SearchBar(props) {
    function searchProduct(event) { props.handleSearch(event) }
    function searchInputOnChange(event) { props.setSearchQuery(event.target.value) }

    return (
        <div className="search-bar-wrapper">
            <Row className="align-items-center">
                <Col>
                    <Form onSubmit={searchProduct} className="search-bar">
                        <Row className="align-items-center">
                            {/* Search input */}
                            <Col sm={8} className="my-1 search-bar-element">
                                <FormControl
                                    required
                                    placeholder="Search products"
                                    value={props.search}
                                    onChange={searchInputOnChange}
                                />
                            </Col>

                            {/* Search-button */}
                            <Col md="auto" className="my-1 search-bar-element">
                                <Button className="button" type="submit">Search</Button>
                            </Col>

                            {/* Wish List-button */}
                            <Col md="auto" className="my-1 search-bar-element">
                                <Button className="button" href="/wishlist">Wish list</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <p className="search-info">Searches can take from 30 seconds to 1 minute, please be patient. For now, please open the links in new tab (middle or right click).</p>
        </div>
    )
}
