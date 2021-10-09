import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import InteractiveImage from "./components/InteractiveImage";

const heroUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Photos%2FHero.png?alt=media&token=5656698f-a8ae-4a57-976e-46ea9e230028";

const heroLines = [
  "Passion for technology",
  "Belief in people"
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
              <Button className="ms-2 rounded-pill primaryButton">
                Contact
              </Button>
            </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <div className="mainBody mt-3">
          <Container>
            <Row>
              <Col>
                <h1 className={"mt-5" + (fadeoutHero ? " fadeout" : "")}>
                  <strong>
                    {heroLines[heroLineIdx]}
                  </strong>
                </h1>
                <p className="heroParagraph mt-3">
                  Hey! I'm <b>Walden</b>. I love building cool things with modern technology and working with teams of other ambitious people to tackle modern problems.
                </p>
                <Row className="mt-5">
                  <Col>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FHarvard.png?alt=media&token=47a68ca5-2f7b-43ab-883f-0f5b6616369d"></Image>
                  </Col>
                  <Col>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FMIT.png?alt=media&token=c2e7130a-dce1-4d9e-9431-70ae6badc1e2"></Image>
                  </Col>
                  <Col>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FWharton.png?alt=media&token=d7a2bfdd-ec65-4b8d-bca8-7b52a3c55741"></Image>
                  </Col>
                  <Col>
                    <Image src="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FIOI.png?alt=media&token=dd9d23ab-85e5-488a-8add-240503da727e"></Image>
                  </Col>
                </Row>
              </Col>
              <Col>
                <InteractiveImage src={heroUrl}/>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default App;
