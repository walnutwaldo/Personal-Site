import React, { useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Button,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import {
  InteractiveImage,
  SocialProofSection,
  FeaturedWorkSection,
  SkillsSection
} from "./components";

import ChevronDown from "./res/chevron-down.js";

import getStorageUrl from './tools/firebase';

const useSquareSplash = window.innerWidth / window.innerHeight < 1;

const paths = {
  splashImage: `Photos/Splash${useSquareSplash ? 'Square' : ''}.png`,
  splashImageLowRes: `Photos/Splash${useSquareSplash ? 'Square' : ''}.png`,
  heroImage: 'Photos/Hero.png',
  resume: 'Yan Walden Resume.pdf',
  linkedInSocialLogo: 'Social Logos/linkedin.svg',
  githubSocialLogo: 'Social Logos/github.svg'
}

const linkedInUrl = "https://www.linkedin.com/in/waldenyan";
const githubUrl = "https://github.com/walnutwaldo";

const heroLines = [
  "Passion for technology",
  "Belief in people",
  "Building lasting value"
]

function openEmail() {
  window.open('mailto:waldenyan20@gmail.com?subject=Subject&body=Hi%20Walden%2C', '_blank').focus();
}

function heroSection(heroLineIdx, fadeoutHero, urls) {
  return (
    <section name="overview" id="overview" className="pt-md-5">
      <Row className="heroSection mt-3">
        <Col className="d-flex flex-column col-12 col-lg-6 text-center text-lg-start">
          <h1 className={"mt-0 mt-md-5" + (fadeoutHero ? " fadeout" : "")}>
            <strong>
              {heroLines[heroLineIdx]}
            </strong>
          </h1>
          <p className="heroParagraph mt-3">
            Hey! I'm <b>Walden</b>. I love building cool things with modern technology and working with teams of other ambitious people to tackle modern problems.
          </p>
          <SocialProofSection/>
        </Col>
        <Col className="d-none d-md-block d-lg-none col-1"></Col>
        <Col className="col-12 col-md-10 col-lg-6">
          <InteractiveImage src={urls['heroImage']}/>
        </Col>
        <Col className="d-none d-md-block d-lg-none col-1"></Col>
      </Row>
    </section>)
}

function ctaSection1(urls) {
  return (
    <Row className="cta1 my-3 my-md-5">
      <Col className="d-flex flex-column text-center">
        <h5><strong>Interested in what I do?</strong></h5>
        <div>
          <Button className="align-right rounded-pill cta-button me-1 mb-2" onClick={openEmail}>Get in Touch</Button>
          <Button variant="outline-primary" className="align-left rounded-pill cta-button ms-1"
          onClick={()=>window.open(urls['resume'], "_blank")}>
          Download Resume</Button>
        </div>
        <div className="mt-2">
          <a href={linkedInUrl} target="_blank" className="me-1 socialLogo"><Image src={urls['linkedInSocialLogo']} width="38px"></Image></a>
          <a href={githubUrl} target="_blank" className="ms-1 socialLogo"><Image src={urls['githubSocialLogo']} width="38px"></Image></a>
        </div>
      </Col>
    </Row>)
}

function ctaSection2() {
  return (
    <Row className="cta1 mt-3 mb-5">
      <Col className="d-flex flex-column text-center">
        <h5><strong>Want to help me add to this list?</strong></h5>
        <div>
          <Button className="align-right rounded-pill cta-button me-1" onClick={openEmail}>Get in Touch</Button>
        </div>
      </Col>
    </Row>)
}

function splashSection(scrollPosition, urls) {
  const splashOffset = scrollPosition / 2;
  return (
    <div id="splash">
      <div className="text-center d-table splashText">
        <div className="d-table-cell align-middle">
          <span className="fontLarge">Hello, I'm</span>
          <br/>
          <span className="fontLargest font1">Walden Yan</span>
          <br/>
          <span className="continueChevron" style={{
            opacity: 1 - Math.min(1, scrollPosition / window.innerHeight)
          }} onClick={()=>{
            document.getElementById('overview').scrollIntoView();
          }}>
            <ChevronDown/>
          </span>
        </div>
      </div>
      <Image src={urls['splashImageLowRes']} style={{top: splashOffset + "px"}}></Image>
      <Image src={urls['splashImage']} style={{top: splashOffset + "px"}}></Image>
    </div>)
}

function navbarToggle() {
  return (
    <Navbar.Toggle>
      <div className="navbar-toggle-icon top-bar"></div>
      <div className="navbar-toggle-icon bottom-bar"></div>
      <div className="navbar-toggle-icon middle-bar"></div>
    </Navbar.Toggle>
  )
}

function navbar(exitedSplash) {
  return (
    <Navbar className={"color-nav" + (exitedSplash ? "" : " hidden")} expand="md" sticky="top" variant="light">
      <Container className="mainContainer">
        <Navbar.Brand className="font1 fontLarge">
          <strong>Walden Yan</strong>
        </Navbar.Brand>
        <Nav className="me-auto d-none d-md-flex">
          <Nav.Item>
            <Nav.Link href={linkedInUrl} target="_blank">LinkedIn</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href={githubUrl} target="_blank">GitHub</Nav.Link>
          </Nav.Item>
        </Nav>
        {navbarToggle()}
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
              <Button className="ms-2 rounded-pill" onClick={openEmail}>
                Contact
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
}

function footer(urls) {
  return (
    <div className="footer py-2 py-md-4">
      <Container>
        <Row className="text-center">
          <Col className="col-12 my-2 col-md-4 my-md-0 align-middle d-flex flex-column text-md-start">
            <p className="my-auto"><strong>Copyright {year()}</strong></p>
          </Col>
          <Col className="col-12 my-2 col-md-4 my-md-0">
            <a href={linkedInUrl} target="_blank" className="me-1 socialLogo darkTheme"><Image src={urls['linkedInSocialLogo']} width="38px"></Image></a>
            <a href={githubUrl} target="_blank" className="ms-1 socialLogo darkTheme"><Image src={urls['githubSocialLogo']} width="38px"></Image></a>
          </Col>
          <Col className="col-12 my-2 col-md-4 my-md-0 text-md-end"><strong>Made by Walden Yan</strong><br/>waldenyan20@gmail.com</Col>
        </Row>
      </Container>
    </div>
  )
}

function year() {
  return new Date().getFullYear();
}

class App extends React.Component{

  componentDidMount(){
    document.title = "Walden Yan"
  }

  constructor(props) {
    super(props)
    this.state = {
      heroLineIdx: 0,
      fadeoutHero: false,
      scrollPosition: 0,
      exitedSplash: false,
      urls: {}
    }

    setInterval(() => {
      this.setState({
        fadeoutHero: true
      })
      setTimeout(() => this.setState({
        heroLineIdx: (this.state.heroLineIdx + 1) % heroLines.length,
        fadeoutHero: false
      }), 200)
    }, 3000);

    this.loadUrls();
  }

  loadUrls() {
    let proms = []
    let urls = {}
    for (const key in paths) {
      proms.push(getStorageUrl(paths[key]).then((url) => {
        urls[key] = url;
      }).catch((err) => {
        console.error('Failed to load path ' + paths[key]);
      }))
    }
    Promise.allSettled(proms).then(() => {
      this.setState({
        urls: urls
      })
    });
  }

  listenToScroll(event) {
    const target = event.target;
    const scroll = target.scrollTop;

    const intViewportHeight = window.innerHeight;

    if (scroll >= intViewportHeight) {
      this.setState({
        exitedSplash: true
      })
    }

    this.setState({
      scrollPosition: scroll
    })
  }

  render(){
    const { heroLineIdx, fadeoutHero, scrollPosition, exitedSplash, urls } = this.state;

    return (
      <div id="scrollContainer" className={(exitedSplash ? "" : "snap-y-mandatory")} onScroll={this.listenToScroll.bind(this)}>
        {/*exitedSplash? (<></>) : */splashSection(scrollPosition, urls)}
        <div className="scrollStart"></div>
        {navbar(exitedSplash)}
        <div id="mainBody">
          <Container>
            {heroSection(heroLineIdx, fadeoutHero, urls)}
            {ctaSection1(urls)}
            <SkillsSection/>
            <FeaturedWorkSection/>
            {ctaSection2()}
          </Container>
        </div>
        {footer(urls)}
      </div>
    );
  }
}

export default App;
