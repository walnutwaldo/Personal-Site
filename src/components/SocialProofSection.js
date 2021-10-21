import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
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
			urls: {}
		}

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
		const { urls } = this.state;
		return (
			<div className="my-4 my-lg-auto d-flex flex-row justify-content-between">
				{socialProofs.map(function(socialProof, i){
					const popover = (
						<Popover id="popover-basic">
							<Popover.Header as="h3">{socialProof.name}</Popover.Header>
							<Popover.Body>
								{socialProof.description}
							</Popover.Body>
						</Popover>
						);
					return (
						<OverlayTrigger trigger="hover" placement="top" overlay={popover}>
							<Image className="socialProofLogo d-block" src={urls[socialProof.name]}></Image>
						</OverlayTrigger>
					)
			})}
			</div>
			)
	}

}

export default SocialProofSection;