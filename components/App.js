import React from 'react';

import Button from "./Button";
import Image from 'next/image';

import FeaturedWorkSection from "./FeaturedWorkSection";
import SkillsSection from "./SkillsSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";

import ChevronDownIcon from "../public/icons/chevron-down.svg";

import getStorageUrl from '../tools/firebase';

import urls from "../data/urls.json";
import SocialLogos from "./SocialLogos";

function getPaths(useSquareSplash) {
    return {
        splashImage: `Photos/Splash${useSquareSplash ? 'Square' : ''}.png`,
        splashImageLowRes: `Photos/Splash${useSquareSplash ? 'Square' : ''}LowRes.png`,
        heroImage: 'Photos/Hero.png',
        resume: 'Yan Walden Resume.pdf',
        linkedInSocialLogo: 'Social Logos/linkedin.svg',
        githubSocialLogo: 'Social Logos/github.svg'
    };
}

function openEmail() {
    window.open('mailto:waldenyan20@gmail.com?subject=Subject&body=Hi%20Walden%2C', '_blank').focus();
}

function ctaSection1(resourceUrls) {
    return (
        <div className="cta1 my-3 md:my-5 flex grid">
            <div className="flex flex-col text-center">
                <h5 className={"text-lg"}><strong>Interested in what I do?</strong></h5>
                <div className="mt-1">
                    <Button className="align-right cta-button mr-1" onClick={openEmail} filled={true}>Get in
                        Touch</Button>
                    <Button variant="outline-primary" className="align-left cta-button ml-1"
                            onClick={() => window.open(resourceUrls['resume'], "_blank")}>
                        Download Resume</Button>
                </div>
                <div className="mt-1">
                    <SocialLogos logoUrls={resourceUrls}/>
                </div>
            </div>
        </div>)
}

function ctaSection2() {
    return (
        <div className="cta2 mt-3 mb-5 grid">
            <div className="flex flex-col text-center">
                <h5><strong>Want to help me add to this list?</strong></h5>
                <div>
                    <Button className="cta-button mt-1" onClick={openEmail} filled={true}>Get in
                        Touch</Button>
                </div>
            </div>
        </div>)
}

function SplashSection(props) {
    const {scrollPosition, urls, windowHeight} = props;
    return (
        <div id="splash">
            <div className="text-center table splashText">
                <div className="table-cell align-middle">
                    <span className="text-4xl">Hello, I'm</span>
                    <br/>
                    <span className="text-6xl font1">Walden Yan</span>
                    <br/>
                    <span className="text-center" style={{
                        opacity: 1 - Math.min(1, scrollPosition / windowHeight),
                    }} onClick={() => {
                        document.getElementById('overview').scrollIntoView();
                    }}>
                        <ChevronDownIcon className="continueChevron w-8 h-8 absolute inset-x-1/2"/>
                    </span>
                </div>
            </div>
            {
                urls['splashImageLowRes'] &&
                <Image src={urls['splashImageLowRes']} layout="fill"/>
            }
            {
                urls['splashImage'] &&
                <Image src={urls['splashImage']} layout="fill"/>
            }
        </div>)
}

function NavbarToggle(props) {
    const {toggled, setToggle, className} = props;
    return (
        <div className={className + " navbar-toggler " + (toggled ? "" : "collapsed")}
             onClick={() => setToggle(!toggled)}>
            <div className={"navbar-toggle-icon top-bar "}/>
            <div className={"navbar-toggle-icon bottom-bar "}/>
            <div className={"navbar-toggle-icon middle-bar "}/>
        </div>
    )
}

function CustomNavbar(props) {
    const {visible} = props;
    const [toggled, setToggle] = React.useState(false);

    return (
        <div
            className={"sticky top-0 backdrop-blur-sm bg-white/30 z-10 transition " + (visible ? "visible opacity-100" : "invisible opacity-0")}>
            <div className="mainContainer container mx-auto px-2 grid grid-cols-2 items-baseline py-2 justify-items-right">
                <div className={"flex items-baseline gap-4"}>
                    <span className="font1 fontLarge">
                        <strong>Walden Yan</strong>
                    </span>
                    <a className={"hidden md:block"} href={urls['LinkedIn']} target="_blank"
                       rel="noreferrer">LinkedIn</a>
                    <a className={"hidden md:block"} href={urls['GitHub']} target="_blank"
                       rel="noreferrer">GitHub</a>
                </div>
                <div className={"grid md:hidden justify-items-end my-auto"}>
                    <NavbarToggle toggled={toggled} setToggle={setToggle}/>
                </div>
                <div className={"col-span-2 md:col-span-1 justify-right transition " + (toggled ? "black" : "hidden md:block")}>
                    <div className="text-center grid w-full md:flex md:flex-row md:justify-end items-baseline gap-4 text-center">
                        <a href="#overview">Overview</a>
                        <a href="#skills">Skills</a>
                        <a href="#work">Work</a>
                        <Button className="ms-2 rounded-pill" onClick={openEmail}>
                            Contact
                        </Button>
                    </div>
                </div>
            </div>
        </div>)
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            scrollPosition: 0,
            exitedSplash: false,
            urls: {},
            useSquareSplash: false,
            windowHeight: 100
        }
    }

    componentDidMount() {
        this.loadUrls(window.innerWidth / window.innerHeight < 1);
        this.setState({windowHeight: window.innerHeight});

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize.bind(this));
    }

    onWindowResize() {
        this.setState({windowHeight: window.innerHeight});
    }

    loadUrls(useSquareSplash) {
        let proms = []
        let urls = {}
        const paths = getPaths(useSquareSplash);
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

        let newState = {
            scrollPosition: scroll
        }

        if (scroll >= intViewportHeight) {
            newState.exitedSplash = true
        }

        this.setState(newState)
    }

    render() {
        const {scrollPosition, exitedSplash, urls, windowHeight} = this.state;

        return (
            <div id="scrollContainer" className={(exitedSplash ? "" : "snap-y-mandatory")}
                 onScroll={this.listenToScroll.bind(this)}>
                <SplashSection scrollPosition={scrollPosition} urls={urls} windowHeight={windowHeight}/>
                <div className="scrollStart"/>
                <CustomNavbar visible={exitedSplash}/>
                <div id="mainBody">
                    <div className={"container mx-auto px-2"}>
                        <HeroSection img={urls["heroImage"]}/>
                        {ctaSection1(urls)}
                        <SkillsSection/>
                        <FeaturedWorkSection/>
                        {ctaSection2()}
                    </div>
                </div>
                <Footer logoUrls={urls}/>
            </div>
        );
    }
}

export default App;
