import {Col, Row} from "react-bootstrap";
import {heroLines, heroText} from "../tools/constants";
import {InteractiveImage, SocialProofSection} from "./index";
import React from "react";

const NEW_HERO_TEXT_INTERVAL = 4000;
const TYPE_DELAY = 35;
const CURSOR_FLASH = 600;

class HeroSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heroLineIdx: 0,
            heroChars: 0,
            cursor: true,
            fadeoutHero: false
        }
        this.fadeoutSchedule = null;
        this.cursorFlashInterval = null;

        setInterval(() => {
            const {heroChars, heroLineIdx} = this.state;
            if (heroChars === heroLines[heroLineIdx].length && !this.fadeoutSchedule) {
                this.fadeoutSchedule = setTimeout(this.fadeOutHeroLine.bind(this), NEW_HERO_TEXT_INTERVAL);
                this.cursorFlashInterval = setInterval(() => {
                    this.setState({
                        cursor: !this.state.cursor
                    })
                }, CURSOR_FLASH)
            } else {
                this.setState({
                    heroChars: heroChars + 1
                })
            }
        }, TYPE_DELAY)
    }

    fadeOutHeroLine() {
        clearInterval(this.cursorFlashInterval);
        this.cursorFlashInterval = null;
        this.fadeoutSchedule = null;
        this.setState({
            fadeoutHero: true
        })
        setTimeout(this.nextHeroLine.bind(this), 200);
    }

    nextHeroLine() {
        this.setState({
            heroLineIdx: (this.state.heroLineIdx + 1) % heroLines.length,
            heroChars: 0,
            fadeoutHero: false
        });
    }

    render() {
        const {urls} = this.props;
        const {heroLineIdx, fadeoutHero, heroChars, cursor} = this.state;
        const heroLineInstructions = heroLines[heroLineIdx].slice(0, heroChars)
        let heroLine = '';
        for (const c of heroLineInstructions) {
            if (c == '\b') {
                heroLine = heroLine.slice(0, heroLine.length - 1);
            } else {
                heroLine += c;
            }
        }
        return (
            <section name="overview" id="overview" className="pt-md-5">
                <Row className="heroSection mt-3">
                    <Col className="d-flex flex-column col-12 col-lg-6 text-center text-lg-start">
                        <h1 className={"mt-0 mb-3 mt-md-5 heroTitle " + (fadeoutHero ? " invisible move-left" : "")}>
                            <strong>
                                {heroLine}
                                <span style={{
                                    visibility: (cursor ? "visible" : "hidden")
                                }}>_</span>
                            </strong>
                        </h1>
                        <p className="heroParagraph d-none d-lg-inline">
                            {heroText}
                        </p>
                        <SocialProofSection className={"mt-auto d-none d-xxl-block"}/>
                    </Col>
                    <Col className="d-none d-md-block d-lg-none col-1"/>
                    <Col className="col-12 col-md-10 col-lg-6">
                        <InteractiveImage src={urls['heroImage']}/>
                    </Col>
                    <Col className="d-none d-md-block d-lg-none col-1"/>
                    <Col className="col-12 d-lg-none p-4">
                        <p className="heroParagraph mt-3">
                            {heroText}
                        </p>
                    </Col>
                </Row>
            </section>);
    }
}

export default HeroSection;