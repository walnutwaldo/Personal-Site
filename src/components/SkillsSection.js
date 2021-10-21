import React from 'react';
import getStorageUrl from '../tools/firebase';
import {
	Col,
  ListGroup,
  Row
} from 'react-bootstrap';
import InteractiveImage from './InteractiveImage';

import SkillsData from "../data/skills";

class SkillsSection extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			urls: {}
		}

		const proms = [];
		const urls = {};
		for (const skill of SkillsData.skills) {
			proms.push(getStorageUrl(skill.imagePath).then((url) => {
				urls[skill.title] = url;
			}).catch((err) => {
				console.log("Failed to load storage path " + skill.imagePath);
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

	  return (<section id="skills">
	    {SkillsData.skills.map((skill, i) => {
	    	const notableWork = (
		      <>
			      <h2 className="notableWork">Notable Work</h2>
		    		<ListGroup variant="flush">
	            {skill.notableWork.map((work, j) => {
	              return <ListGroup.Item>{work}</ListGroup.Item>
	            })}
	          </ListGroup>
	        </>
         )
	      return (
	        <Row className="skill mt-5">
	        	<Col className={"col-12 col-md-6 d-flex flex-column order-2 order-md-1 mx-2 mx-md-0" + (i % 2 == 0 ? "" : " order-lg-2")}>
		          <h1 className="mt-3"><strong>{skill.title}</strong></h1>
		          <p>
		            {skill.description}
		          </p>
		          <div className="d-block d-md-none d-lg-block">{notableWork}</div>
		        </Col>
		        <Col className={"col-12 col-md-6 order-1 order-md-2 mt-0 my-md-auto" + (i % 2 == 0 ? "" : " order-lg-1")}>
		          <InteractiveImage src={urls[skill.title]}/>
		        </Col>
		        <Col className="d-none d-md-block d-lg-none order-3 pt-4">{notableWork}</Col>
	        </Row>
	      )
	    })}
	  </section>)
	}
}

export default SkillsSection;