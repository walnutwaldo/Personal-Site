import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Image from 'react-bootstrap/Image';

import "../style/socialProofSection.scss"

const harvardLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FHarvard.png?alt=media&token=3703446f-670f-4899-a8c7-551246788b5f";
const MITLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FMIT.png?alt=media&token=d3386d1d-8f96-4d8f-80f9-a6e062ab837a";
const whartonLogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FWharton.png?alt=media&token=6a19315e-af92-45ae-879f-8928c9b9a024";
const IOILogoUrl = "https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/Social%20Proof%2FIOI.png?alt=media&token=6ffc4e8d-604a-4fb6-a621-f14d80efb822";

const socialProofs = [
{
	name: "Harvard",
	url: harvardLogoUrl,
	description: "Attending undegrad at Harvard College. Class of 2024. Studying CS and Economics."
},
{
	name: "MIT",
	url: MITLogoUrl,
	description: "Conducted CS research with MIT PRIMES in cryptography and machine learning/NLP."
},
{
	name: "Wharton",
	url: whartonLogoUrl,
	description: "North American finalist in Wharton's High School Investment Competition."
},
{
	name: "International Olympiad in Informatics",
	url: IOILogoUrl,
	description: "Won a gold medal at the IOI in 2020 for the United States."
},
];

class SocialProofSection extends React.Component {

	render() {
		return (
			<div className="mt-auto mb-auto d-flex flex-row justify-content-between">
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
						<Image className="socialProofLogo d-block" src={socialProof.url}></Image>
					</OverlayTrigger>
				)
			})}
			</div>
			)
	}

}

export default SocialProofSection;