import React from 'react'
import { FaDiscord, FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Card, CardGroup } from "react-bootstrap";
import "../css/aboutUs.css";

export default () => {
    return (
        <div className="about-us-wrapper">
            <CardGroup>
                <Card>
                    <Card.Header className="top-header">Book-keeper</Card.Header>
                    <Card.Body>
                        <Card.Text className="top-text">
                            What we decided to create was a live bookkeeping software website.
                            The way users are able to store their bookkeeping records is by creating an account and logging in.
                            This gives them the opportunity to edit their bookkeeping history,
                            add and delete information including date, description,
                            type and amount of income and expenses in real time.
                            Users can also search for price comparisons for the same type of item in different stores and observe information about the item,
                            such as the item name, the store that owns the item, and the price of the item in different stores.
                            Users can use our price comparison analysis API to keep the information about the product they are interested in, such as the price and the name, in the interface, and then later, if the user buys the product, the product can be officially added to the P&L record.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup className="member-info">
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Card.Header>Ruimin Ma</Card.Header>
                    <Card.Body>
                        <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Card.Header>Peter Li</Card.Header>
                    <Card.Body>
                        <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Card.Header>Jingting Zhang</Card.Header>
                    <Card.Body>
                        <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <Card.Header>Duosi Dai</Card.Header>
                    <Card.Body>
                        <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                            <FaLinkedin size={40} />
                        </a>
                    </Card.Body>
                </Card>
            </CardGroup>

            <hr />

            <CardGroup style={{ textAlign: 'center' }}>
                <Card >
                    <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                        <FaGithub size={40} />
                    </a>
                </Card>
                <Card>
                    <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                        <FaDiscord size={40} />
                    </a>
                </Card>
                <Card >
                    <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                        <FaMailBulk size={40} />
                    </a>
                </Card>
            </CardGroup>

            <hr />

            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Text className="bottom-text">
                            A project group from KTH in the course DH2642.
                            <br></br>
                            ©All rights reserved.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
