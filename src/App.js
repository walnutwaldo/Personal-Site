import React from 'react';
import {Button, Col, Container, Image, Row} from 'react-bootstrap';
import {FeaturedWorkSection, SkillsSection, SocialProofSection} from "./components";

import ChevronDown from "./res/chevron-down.js";

import getStorageUrl from './tools/firebase';
import CustomNavbar from "./components/CustomNavbar";
import {socials} from "./tools/constants";
import {contactEmail, contactTwitter} from "./tools/utils";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

const useSquareSplash = window.innerWidth / window.innerHeight < 1;

const paths = {
    splashImage: `Photos/Splash${useSquareSplash ? 'Square' : ''}.png`,
    splashImageLowRes: `Photos/Splash${useSquareSplash ? 'Square' : ''}LowRes.png`,
    heroImage: 'Photos/Hero.png',
    resume: 'Yan Walden Resume.pdf',
}

function ctaSection1(urls) {
    return (
        <Row className="cta1 my-5">
            <Col className="d-flex flex-column text-center">
                <h5><strong>Want to work together?</strong></h5>
                <div className="my-2">
                    <Button className="align-right cta-button m-1" onClick={contactTwitter}>
                        Send a DM
                    </Button>
                    <Button variant="outline-primary" className="align-left cta-button m-1"
                            onClick={() => window.open(urls['resume'], "_blank")}>
                        Download Resume
                    </Button>
                </div>
                <div className="mt-2">
                    {socials.map((item, i) => {
                        return (
                            <a href={item.url} key={i} target="_blank" rel="noreferrer" className="mx-1 socialLogo">
                                <Image src={item.image} width="38px"/>
                            </a>
                        );
                    })}
                </div>
            </Col>
        </Row>)
}

function ctaSection2() {
    return (
        <Row className="cta1 mt-5 mb-5">
            <Col className="d-flex flex-column text-center">
                <h5><strong>Interested in learning more?</strong></h5>
                <div>
                    <Button className="align-right cta-button me-1" onClick={contactEmail}>
                        Contact Me
                    </Button>
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
                    }} onClick={() => {
                        document.getElementById('overview').scrollIntoView();
                    }}>
            <ChevronDown/>
          </span>
                </div>
            </div>
            <Image src={urls['splashImageLowRes']} style={{top: splashOffset + "px"}} className={""}/>
            <Image src={urls['splashImage']} style={{top: splashOffset + "px", filter: `blur(${scrollPosition / 25}px)`}} className={""}/>
        </div>)
}

class App extends React.Component {

    componentDidMount() {
        this.loadUrls();
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
    }

    loadUrls() {
        let proms = []
        let urls = {}
        for (const key in paths) {
            proms.push(getStorageUrl(paths[key]).then((url) => {
                urls[key] = url;
            }).catch(() => {
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

        let newState = {
            scrollPosition: scroll
        }

        if (scroll >= intViewportHeight) {
            newState.exitedSplash = true
        }

        this.setState(newState)
    }

    render() {
        const {heroLineIdx, fadeoutHero, scrollPosition, exitedSplash, urls} = this.state;

        return (
            <div id="scrollContainer" className={(exitedSplash ? "" : "snap-y-mandatory")}
                 onScroll={this.listenToScroll.bind(this)}>
                {splashSection(scrollPosition, urls)}
                <div className="scrollStart"/>
                <CustomNavbar exitedSplash={exitedSplash}/>
                <div id="mainBody">
                    <Container>
                        <HeroSection heroLineIdx={heroLineIdx} fadeoutHero={fadeoutHero} urls={urls}/>
                        <SocialProofSection className={"d-block d-xxl-none mx-auto"}/>
                        {ctaSection1(urls)}
                        <FeaturedWorkSection/>
                        <SkillsSection/>
                        {ctaSection2()}
                    </Container>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
