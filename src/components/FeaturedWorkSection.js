import React from 'react';
import getStorageUrl from '../tools/firebase';

import WorkData from "../data/work";

import { Row, Col, Image } from 'react-bootstrap';

class FeaturedWorkSection extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			urls: {}
		}

		const proms = [];
		const urls = {};
		for (const work of WorkData.work) {
			proms.push(getStorageUrl(work.imagePath).then((url) => {
				urls[work.title] = url;
			}).catch((err) => {
				console.log("Failed to load storage path " + work.imagePath);
			}))
		}
		Promise.allSettled(proms).then(() => {
			this.setState({
				urls: urls
			});
		});
	}

	render() {
		const { urls } = this.state;

		return(
	    <section id="work">
	      <Row className="mt-5 my-md-5">
	        <h3 className="text-center mb-5">Highlighted Work</h3>
	        {WorkData.work.map((work, i) => {
	          return (<Col className="text-center mb-4">
	            <a href={work.linkUrl} target="_blank">
	              <Image src={urls[work.title]} className="highlightedWorkImage"></Image>
	            </a>
	            <div className="mt-3">
	              <h5><strong>{work.title}</strong></h5>
	              <p>{work.description}<br/>
	              <a href={work.linkUrl} target="_blank" style={{textDecoration: "none"}} className="workLinkText">{work.linkText}</a></p>
	            </div>
	          </Col>)
	        })}
	      </Row>
	    </section>)
	}
}

export default FeaturedWorkSection;