import React from "react";

import SocialProofSection from "./SocialProofSection";
import InteractiveImage from "./InteractiveImage";

const heroLines = [
    "Passion for technology",
    "Belief in people",
    "Building lasting value"
];

class HeroSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heroLineIdx: 0,
            fadeoutHero: false
        }
    }

    componentDidMount() {
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
        const {img} = this.props;
        const {heroLineIdx, fadeoutHero} = this.state;

        return ((
            <section id="overview" className="pt-md-5">
                <div className="heroSection mt-3 grid grid-cols-12 gap-8">
                    <div className="flex flex-col col-span-12 lg:col-span-6 text-center lg:text-left">
                        <h1 className={"text-4xl mt-0 md:pt-5 " + (fadeoutHero ? "fadeout" : "")}>
                            <strong>
                                {heroLines[heroLineIdx]}
                            </strong>
                        </h1>
                        <p className="text-gray-500 font-semibold text-2xl mt-3">
                            Hey! I'm <b>Walden</b>. I love building cool things with modern technology and working with
                            teams of other ambitious people to tackle modern problems.
                        </p>
                        <SocialProofSection/>
                    </div>
                    <div className="hidden md:block lg:hidden col-span-1"/>
                    <div className="col-span-12 md:col-span-10 lg:col-span-6">
                        {
                            img &&
                            <InteractiveImage src={img}/>
                        }
                    </div>
                    <div className="hidden md:block lg:hidden col-span-1"/>
                </div>
            </section>));
    }

}

export default HeroSection;