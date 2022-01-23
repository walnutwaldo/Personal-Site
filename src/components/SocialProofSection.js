import React from "react";
import Image from 'react-bootstrap/Image';

import getStorageUrl from '../tools/firebase';

const socialProofs = [
    {
        name: "Harvard",
        path: 'Social Proof/Harvard.png',
        description: "Attending undegrad at Harvard College. Class of 2024. Studying CS and Economics."
    },
    {
        name: "MIT",
        path: 'Social Proof/MIT.png',
        description: "Conducted CS research with MIT PRIMES in cryptography and machine learning/NLP."
    },
    {
        name: "Wharton",
        path: 'Social Proof/Wharton.png',
        description: "North American finalist in Wharton's High School Investment Competition."
    },
    {
        name: "International Olympiad in Informatics",
        path: 'Social Proof/IOI.png',
        description: "Won a gold medal at the IOI in 2020 for the United States."
    },
];

class SocialProofSection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            urls: {},
            currIdx: -1
        }
    }

    componentDidMount() {
        let urls = {}
        const proms = []
        for (const socialProof of socialProofs) {
            proms.push(getStorageUrl(socialProof.path).then((url) => {
                urls[socialProof.name] = url;
            }).catch(() => {
                console.error('Failed to load from storage ' + socialProof.path);
            }));
        }
        Promise.allSettled(proms).then(() => {
            this.setState({
                urls: urls
            });
        });
    }

    render() {
        const {urls, currIdx} = this.state;

        const currentSocial = (currIdx === -1) ? null : socialProofs[currIdx];

        const setIdx = (i) => {
            this.setState({
                currIdx: i
            })
        }

        return (
            <div className={"socialProofSection " + this.props.className}>
                <div className="my-4 d-flex flex-row justify-content-between">
                    {socialProofs.map(function (socialProof, i) {
                        return (
                            <div className={"socialProofLogo " + (i === currIdx ? " highlighted" : "")} onMouseOver={
                                () => setIdx(i)
                            } onMouseOut={() => setIdx(-1)}>
                                <Image className={
                                    "d-block "
                                } src={urls[socialProof.name]}/>
                            </div>
                        )
                    })}
                </div>
                <div id="socialProofInfo" className={"text-center "}>
                    <h3>{currentSocial ? currentSocial.name : "What's this?"}</h3>
                    <p>
                        {currentSocial ? currentSocial.description : "Click on each logo to learn more"}
                    </p>
                </div>
            </div>
        )
    }

}

export default SocialProofSection;