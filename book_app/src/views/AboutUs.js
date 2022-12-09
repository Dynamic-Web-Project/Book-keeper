import React from 'react'
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Card, CardGroup } from "react-bootstrap";
import "../css/aboutUs.css";
import "../css/common.css";
import icon1 from "../pictures/peopleIcon1.png";
import icon2 from "../pictures/peopleIcon2.png";
import icon3 from "../pictures/peopleIcon3.png";
import icon4 from "../pictures/peopleIcon4.png";

export default () => {
    return (
        <div className="about-us-wrapper">
            <CardGroup>
                <Card>
                    <Card.Header className="top-header">Book-keeper</Card.Header>
                    <Card.Body>
                        <Card.Text className="top-text">
                            <p>What we decided to create was a live bookkeeping software website.</p>
                            <p>The way users are able to store their bookkeeping records is by creating an account and logging in. This gives them the opportunity to edit their bookkeeping history, add and delete information including date, description, type and amount of income and expenses in real time.</p>
                            <p>Users can also search for price comparisons for the same type of item in different stores and observe information about the item, such as the item name, the store that owns the item, and the price of the item in different stores.</p>
                            <p>Users can use our price comparison analysis API to keep the information about the product they are interested in, such as the price and the name, in the interface, and then later, if the user buys the product, the product can be officially added to the P&L record.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup className="member-info">
                <Card>
                    <Card.Img variant="top" src={icon1} />
                    <Card.Header>Ruimin Ma</Card.Header>
                    <Card.Body>
                        <a href="https://www.linkedin.com/in/ruimin-ma/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={icon4} />
                    <Card.Header>Peter Li</Card.Header>
                    <Card.Body>
                        <a href="https://www.linkedin.com/in/peter-yuanzong-li-33601818a" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={icon3} />
                    <Card.Header>Jinting Zhang</Card.Header>
                    <Card.Body>
                        <a href="https://www.linkedin.com/in/jinting-zhang-8b140721a" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={icon2} />
                    <Card.Header>Duosi Dai</Card.Header>
                    <Card.Body>
                        <a href="https://www.linkedin.com/in/duosi-dai-964218225/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </Card.Body>
                </Card>
            </CardGroup>

            <hr />

            <CardGroup className="contact-info">
                <Card border="light">
                    <a href="https://github.com/Dynamic-Web-Project/Book-keeper" target="_blank" rel="noreferrer">
                        <FaGithub size={40} />
                    </a>
                </Card>
                <Card border="light">
                    <a href="https://discord.gg/MbkhTkEHBV" target="_blank" rel="noreferrer">
                        <FaDiscord size={40} />
                    </a>
                </Card>
                <Card border="light">
                    <a href="mailto:bookkeeper.kthproject@gmail.com" target="_blank" rel="noreferrer">
                        <FaEnvelope size={40} />
                    </a>
                </Card>
            </CardGroup>
            <hr />

            <CardGroup>
                <Card border="light">
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
