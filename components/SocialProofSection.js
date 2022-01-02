import React from "react";

import Image from 'next/image';

import getStorageUrl from '../tools/firebase';

const socialProofs = [
    {
        name: "Harvard",
        path: 'Social Proof/Harvard.png',
        description: "Attending undergrad at Harvard College. Class of 2024. Studying CS and Economics."
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
            urls: {}
        }
    }

    componentDidMount() {
        let urls = {}
        const proms = []
        for (const socialProof of socialProofs) {
            proms.push(getStorageUrl(socialProof.path).then((url) => {
                urls[socialProof.name] = url;
            }).catch((err) => {
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
        const {urls} = this.state;
        return (
            <div className="my-4 lg:my-auto flex flex-row justify-between">
                {socialProofs.map(function (socialProof, i) {
                    const popover = (
                        <div id="popover-basic">
                            <div className="h3">{socialProof.name}</div>
                            <div>
                                {socialProof.description}
                            </div>
                        </div>
                    );
                    return urls[socialProof.name] ?
                        (<div className="socialProofLogo-wrapper" key={i}>
                            <Image className="socialProofLogo d-block" src={urls[socialProof.name]} layout="fill" objectfit="contain"/>
                        </div>)
                        :
                        (<></>)
                })}
            </div>
        )
    }

}

export default SocialProofSection;