import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import {
  FeaturedWorkSection,
  SocialProofSection,
} from "./components";
import { ChevronDown } from "feather-icons-react";
import getStorageUrl from "./tools/firebase";
import CustomNavbar from "./components/CustomNavbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import WritingSection from "./components/WritingSection";
import LandingPage from "./components/LandingPage";
import MinimalistSite from "./components/MinimalistSite";
import { SocialIcon } from "react-social-icons";
import { socials } from "./tools/constants";
import { contactTwitter } from "./tools/utils";

const useSquareSplash = window.innerWidth / window.innerHeight < 1;

const paths = {
  splashImage: `Photos/Splash${useSquareSplash ? "Square" : ""}.png`,
  splashImageLowRes: `Photos/Splash${
    useSquareSplash ? "Square" : ""
  }LowRes.png`,
  heroImage: "Photos/Hero.png",
  resume: "Yan Walden Resume.pdf",
};

function ctaSection1(urls) {
  return (
    <Row className="cta1 my-5">
      <Col className="d-flex flex-column text-center">
        <div className="my-2">
          <Button
            className="align-right cta-button m-1"
            onClick={contactTwitter}
          >
            Send a DM
          </Button>
        </div>
        <div className="mt-2">
          {socials
            .filter((item) => item.image !== undefined)
            .map((item, i) => {
              return (
                <a
                  href={item.url}
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                  className="mx-1 socialLogo"
                >
                  <SocialIcon
                    url={item.url}
                    style={{ width: "38px", height: "38px" }}
                    bgColor="#334155"
                  />
                </a>
              );
            })}
        </div>
      </Col>
    </Row>
  );
}

function SplashSection(props) {
  const { scrollPosition, urls } = props;
  const splashOffset = scrollPosition / 2;
  return (
    <div id="splash">
      <div className="text-center d-table splashText">
        <div className="d-table-cell align-middle text-center">
          <span className="fontLarge">Hello, I'm</span>
          <br />
          <span className="fontLargest font1">Walden Yan</span>
          <br />
        </div>
        <span
          className="continueChevron"
          style={{
            opacity: 1 - Math.min(1, scrollPosition / window.innerHeight),
          }}
          onClick={() => {
            document.getElementById("scrollContainer").scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
        >
          <ChevronDown width={32} height={32} />
        </span>
      </div>
      <Image
        src={urls["splashImageLowRes"]}
        style={{ top: splashOffset + "px", filter: `brightness(0.65)` }}
        className={""}
      />
      <Image
        src={urls["splashImage"]}
        style={{
          top: splashOffset + "px",
          filter: `blur(${scrollPosition / 25}px) brightness(0.65)`,
        }}
        className={""}
      />
    </div>
  );
}

class App extends React.Component {
  componentDidMount() {
    this.loadUrls();
  }

  constructor(props) {
    super(props);
    this.state = {
      heroLineIdx: 0,
      fadeoutHero: false,
      scrollPosition: 0,
      exitedSplash: false,
      urls: {},
    };
  }

  loadUrls() {
    let proms = [];
    let urls = {};
    for (const key in paths) {
      proms.push(
        getStorageUrl(paths[key])
          .then((url) => {
            urls[key] = url;
          })
          .catch(() => {
            console.error("Failed to load path " + paths[key]);
          })
      );
    }
    Promise.allSettled(proms).then(() => {
      this.setState({
        urls: urls,
      });
    });
  }

  listenToScroll(event) {
    console.log("scroll event");
    const target = event.target;
    const scroll = target.scrollTop;

    const intViewportHeight = window.innerHeight;

    let newState = {
      scrollPosition: scroll,
    };

    if (scroll >= intViewportHeight) {
      newState.exitedSplash = true;
    }

    this.setState(newState);
  }

  scrollContainerClass(exitedSplash, scrollPosition) {
    return "";
  }

  render() {
    const { heroLineIdx, fadeoutHero, scrollPosition, exitedSplash, urls } =
      this.state;

    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/original"
          element={
            <div
              id="scrollContainer"
              className={this.scrollContainerClass(exitedSplash, scrollPosition)}
              onScroll={this.listenToScroll.bind(this)}
            >
              <SplashSection scrollPosition={scrollPosition} urls={urls} />
              <div className="scrollStart" />
              <CustomNavbar exitedSplash={exitedSplash} />
              <div id="mainBody">
                <Container>
                  <HeroSection
                    heroLineIdx={heroLineIdx}
                    fadeoutHero={fadeoutHero}
                    urls={urls}
                  />
                  <SocialProofSection className={"d-block d-xxl-none mx-auto"} />
                  {ctaSection1(urls)}
                  <FeaturedWorkSection />
                  <WritingSection />
                </Container>
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/minimalist" element={<MinimalistSite />} />
      </Routes>
    );
  }
}

export default App;
