import {Col, Row} from "react-bootstrap";
import {heroLines, heroText} from "../tools/constants";
import {InteractiveImage, SocialProofSection} from "./index";
import React from "react";

class HeroSection extends React.Component {

    constructor(props) {
        super(props);
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
        }, 3000);
    }

    render() {
        const {urls} = this.props;
        const {heroLineIdx, fadeoutHero} = this.state;
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
                            {heroText}
                        </p>
                        <SocialProofSection/>
                    </Col>
                    <Col className="d-none d-md-block d-lg-none col-1"/>
                    <Col className="col-12 col-md-10 col-lg-6">
                        <InteractiveImage src={urls['heroImage']}/>
                    </Col>
                    <Col className="d-none d-md-block d-lg-none col-1"/>
                </Row>
            </section>);
    }
}

export default HeroSection;