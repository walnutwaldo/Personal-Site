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
	      let descriptionCol = (
	        <Col className={"d-flex flex-column " + (i % 2 == 0 ? "me-5" : "ms-5")}>
	          <h1 className="mt-3"><strong>{skill.title}</strong></h1>
	          <p>
	            {skill.description}
	          </p>
	          <h2 className="notableWork">Notable Work</h2>
	          <ListGroup variant="flush">
	            {skill.notableWork.map((work, j) => {
	              return <ListGroup.Item>{work}</ListGroup.Item>
	            })}
	          </ListGroup>
	        </Col>)

	      let imageCol = (
	        <Col>
	          <InteractiveImage src={urls[skill.title]}/>
	        </Col>)

	      return (
	        <Row className="skill mt-5">
	          {(i % 2 == 0 ? (
	            <>{descriptionCol}{imageCol}</>
	            ) : (
	            <>{imageCol}{descriptionCol}</>
	            ))}
	        </Row>
	      )
	    })}
	  </section>)
	}
}

export default SkillsSection;