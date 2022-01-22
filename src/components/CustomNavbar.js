import {Button, Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import {contactEmail, contactTwitter} from "../tools/utils";
import {socials} from "../tools/constants";

export default function CustomNavbar(props) {
    const { exitedSplash } = props;
    return (
        <Navbar className={"color-nav" + (exitedSplash ? "" : " hidden")} expand="md" sticky="top" variant="light">
            <Container className="mainContainer">
                <Navbar.Brand className="font1 fontLarge">
                    <strong>Walden Yan</strong>
                </Navbar.Brand>
                <Nav className="me-auto d-none d-md-flex">
                    {socials.map((item, i) => {
                        return (
                            <Nav.Item key={i}>
                                <Nav.Link href={item.url} target="_blank" rel="noreferrer">{item.name}</Nav.Link>
                            </Nav.Item>
                        )
                    })}
                </Nav>
                <Navbar.Toggle>
                    <div className="navbar-toggle-icon top-bar"/>
                    <div className="navbar-toggle-icon bottom-bar"/>
                    <div className="navbar-toggle-icon middle-bar"/>
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="text-center">
                        <Nav.Item>
                            <Nav.Link href="#overview">Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#work">Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className="ms-2 rounded-pill" onClick={contactEmail}>
                                Contact Me
                            </Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}