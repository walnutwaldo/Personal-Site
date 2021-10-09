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

const harvardLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FHarvard.png?alt=media&token=3703446f-670f-4899-a8c7-551246788b5f";
const MITLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FMIT.png?alt=media&token=b1df02bd-213e-42ad-85e8-f3064488a748";
const whartonLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FWharton.png?alt=media&token=6a19315e-af92-45ae-879f-8928c9b9a024";
const IOILogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FIOI.png?alt=media&token=6ffc4e8d-604a-4fb6-a621-f14d80efb822";

const logoUrls = [harvardLogoUrl, MITLogoUrl, whartonLogoUrl, IOILogoUrl];

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
              <Button className="ms-2 rounded-pill primaryButton" onClick={this.openEmail}>
                Contact
              </Button>
            </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <div className="mainBody mt-3">
          <Container>
            <Row>
              <Col className="d-flex flex-column">
                <h1 className={"mt-5" + (fadeoutHero ? " fadeout" : "")}>
                  <strong>
                    {heroLines[heroLineIdx]}
                  </strong>
                </h1>
                <p className="heroParagraph mt-3">
                  Hey! I'm <b>Walden</b>. I love building cool things with modern technology and working with teams of other ambitious people to tackle modern problems.
                </p>
                <Row className="mt-auto mb-auto">
                  {logoUrls.map(function(logoUrl, i){
                    return (
                      <Col>
                        <Image className="socialProofLogo" src={logoUrl}></Image>
                      </Col>
                    )
                  })}
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
