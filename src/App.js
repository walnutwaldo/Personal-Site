import logo from './logo.svg';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import InteractiveImage from "./components/InteractiveImage";
import SocialProofSection from "./components/SocialProofSection"

import SkillsData from "./data/skills";
import WorkData from "./data/work";

console.log(WorkData)

const heroUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Photos%2FHero.png?alt=media&token=5656698f-a8ae-4a57-976e-46ea9e230028";

const softwareEngineeringUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Photos%2FMIT%20Dome.png?alt=media&token=136637ab-a5b7-466c-92e3-81b59b1e09b8";

const resumeUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Yan%20Walden%20Resume.pdf?alt=media&token=2d2da9c0-57af-4aed-962c-b57d9e7dc0e0";
const linkedInUrl = "https://www.linkedin.com/in/waldenyan";
const githubUrl = "https://github.com/walnutwaldo";

const linkedInSocialLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Logos%2Flinkedin.svg?alt=media&token=af11f90e-536a-469b-bb3d-2b08a7b6c7f7";
const githubSocialLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Logos%2Fgithub.svg?alt=media&token=3947cfcb-b8dc-41b2-9eac-22347485e896"

const heroLines = [
  "Passion for technology",
  "Belief in people",
  "Building lasting value"
]

function openEmail() {
  window.open('mailto:waldenyan20@gmail.com?subject=Subject&body=Hi%20Walden%2C', '_blank').focus();
}

function heroSection(heroLineIdx, fadeoutHero) {
  return (
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
    </Row>)
}

function ctaSection1() {
  return (
    <Row className="cta1 mt-5 mb-5">
      <Col className="d-flex flex-column text-center">
        <h5><strong>Interested in what I do?</strong></h5>
        <div>
          <Button className="align-right rounded-pill cta-button me-1" onClick={openEmail}>Get in Touch</Button>
          <Button variant="outline-primary" className="align-left rounded-pill cta-button ms-1"
          onClick={()=>window.open(resumeUrl, "_blank")}>
          Download Resume</Button>
        </div>
        <div className="mt-2">
          <a href={linkedInUrl} target="_blank" className="me-1 socialLogo"><Image src={linkedInSocialLogoUrl} width="38px"></Image></a>
          <a href={githubUrl} target="_blank" className="ms-1 socialLogo"><Image src={githubSocialLogoUrl} width="38px"></Image></a>
        </div>
      </Col>
    </Row>)
}

function skillsSection() {
  return (<>
    {SkillsData.skills.map((skill, i) => {
      let descriptionCol = (
        <Col className={"d-flex flex-column " + (i % 2 == 0 ? "me-5" : "ms-5")}>
          <h1 className="mt-3"><strong>{skill.title}</strong></h1>
          <p>
            {skill.description}
          </p>
          <h2 className="notableWork">Notable Work</h2>
          <ListGroup variant="flush">
            {skill.notableWork.map((work, j) => {
              return <ListGroup.Item>{work}</ListGroup.Item>
            })}
          </ListGroup>
        </Col>)

      let imageCol = (
        <Col>
          <InteractiveImage src={skill.imageUrl}/>
        </Col>)

      return (
        <Row className="skill mt-5">
          {(i % 2 == 0 ? (
            <>{descriptionCol}{imageCol}</>
            ) : (
            <>{imageCol}{descriptionCol}</>
            ))}
        </Row>
      )
    })}
  </>)
}

function featuredWorkSection() {
  return(
    <Row className="mt-5">
      <h3 className="text-center mb-5">Highlighted Work</h3>
      {WorkData.work.map((work, i) => {
        return (<Col className="text-center">
          <a href={work.linkUrl} target="_blank">
            <Image src={work.imageUrl} className="highlightedWorkImage"></Image>
          </a>
          <div className="mt-3">
            <h5><strong>{work.title}</strong></h5>
            <p>{work.description}<br/>
            <a href={work.linkUrl} target="_blank" style={{textDecoration: "none"}} className="workLinkText">{work.linkText}</a></p>
          </div>
        </Col>)
      })}
    </Row>)
}

class App extends React.Component{

  componentDidMount(){
    document.title = "Walden Yan"
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
        <Navbar className="color-nav" expand="lg" sticky="top" variant="light">
          <Container className="mainContainer">
            <Navbar.Brand className="font1" id="nameText">
              <strong>Walden Yan</strong>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Item>
                <Nav.Link href={linkedInUrl} target="_blank">LinkedIn</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href={githubUrl} target="_blank">GitHub</Nav.Link>
              </Nav.Item>
            </Nav>
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
                <Button className="ms-2 rounded-pill" onClick={openEmail}>
                  Contact
                </Button>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <div className="mainBody">
          <Container>
            {heroSection(heroLineIdx, fadeoutHero)}
            {ctaSection1()}
            <br/>
            {skillsSection()}
            {featuredWorkSection()}
          </Container>
        </div>
      </>
    );
  }
}

export default App;
