import logo from './logo.svg';
import './App.scss';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import InteractiveImage from "./components/InteractiveImage";
import SocialProofSection from "./components/SocialProofSection"

const heroUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Photos%2FHero.png?alt=media&token=5656698f-a8ae-4a57-976e-46ea9e230028";

const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Yan%20Walden%20Resume.pdf?alt=media&token=2d2da9c0-57af-4aed-962c-b57d9e7dc0e0";

const heroLines = [
  "Passion for technology",
  "Belief in people",
  "Building lasting value"
]

class App extends React.Component{

  componentDidMount(){
    document.title = "Walden Yan (WIP)"
  }

  constructor(props) {
    super(props)
    this.state = {
      heroLineIdx: 0,
      fadeoutHero: false
    }

    setInterval(() => {
      this.setState({
        fadeoutHero: true
      })
      setTimeout(() => this.setState({
        heroLineIdx: (this.state.heroLineIdx + 1) % heroLines.length,
        fadeoutHero: false
      }), 200)
    }, 3000)
  }

  openEmail() {
    window.open('mailto:waldenyan20@gmail.com?subject=Subject&body=Hi%20Walden%2C', '_blank').focus();
  }

  render(){
    const { heroLineIdx, fadeoutHero } = this.state;
    return (
      <>
        <Navbar expand="lg" sticky="top">
          <Container className="mainContainer">
            <Navbar.Brand className="font1" id="nameText">
              <strong>Walden Yan</strong>
            </Navbar.Brand>
            <Nav>
            <Nav.Item>
              <Nav.Link href="#">Overview</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#work">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button className="ms-2 rounded-pill" onClick={this.openEmail}>
                Contact
              </Button>
            </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <div className="mainBody">
          <Container>
            <Row className="heroSection mt-3">
              <Col className="d-flex flex-column">
                <h1 className={"mt-5" + (fadeoutHero ? " fadeout" : "")}>
                  <strong>
                    {heroLines[heroLineIdx]}
                  </strong>
                </h1>
                <p className="heroParagraph mt-3">
                  Hey! I'm <b>Walden</b>. I love building cool things with modern technology and working with teams of other ambitious people to tackle modern problems.
                </p>
                <SocialProofSection/>
              </Col>
              <Col>
                <InteractiveImage src={heroUrl}/>
              </Col>
            </Row>
            <Row className="cta1 mt-5">
              <Col className="d-flex flex-column text-center">
                <h5><strong>Interested in what I do?</strong></h5>
                <div>
                  <Button className="align-right rounded-pill cta-button me-2" onClick={this.openEmail}>Get in Touch</Button>
                  <Button variant="outline-primary" className="align-left rounded-pill cta-button ms-2"
                  onClick={()=>window.open(resumeUrl, "_blank")}>
                  Download Resume</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
