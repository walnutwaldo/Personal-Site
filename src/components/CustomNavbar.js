import { Button, Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { contactEmail, contactTwitter } from "../tools/utils";
import { socials } from "../tools/constants";

const navItems = [
  {
    text: "Overview",
    href: "#overview",
  },
  {
    text: "Work",
    href: "#work",
  },
  {
    text: "Passions",
    href: "#skills",
  },
];

export default function CustomNavbar(props) {
  const { exitedSplash } = props;
  return (
    <Navbar
      className={"color-nav" + (exitedSplash ? "" : " hidden")}
      expand="lg"
      sticky="top"
      variant="light"
    >
      <Container className="mainContainer">
        <Navbar.Brand className="font1 fontLarge">
          <strong>Walden Yan</strong>
        </Navbar.Brand>
        <Nav className="me-auto d-none d-lg-flex">
          {socials.map((item, i) => {
            return (
              <Nav.Item key={i}>
                <Nav.Link href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </Nav.Link>
              </Nav.Item>
            );
          })}
        </Nav>
        <Navbar.Toggle>
          <div className="navbar-toggle-icon top-bar" />
          <div className="navbar-toggle-icon bottom-bar" />
          <div className="navbar-toggle-icon middle-bar" />
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="text-center">
            {navItems.map((navItem, i) => {
              return (
                <Nav.Link key={i} href={navItem.href}>
                  {navItem.text}
                </Nav.Link>
              );
            })}
            <Nav.Link className={"primaryLink"} onClick={contactEmail}>
              <u>Contact Me</u>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
