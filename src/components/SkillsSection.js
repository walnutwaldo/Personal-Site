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
	}
	
	componentDidMount(){
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

	  return (<section name="skills" id="skills" className="pt-md-3 my-5">
	    {SkillsData.skills.map((skill, i) => {
	    	const notableWork = (
		      <>
			      <h2 className="notableWork">Notable Work</h2>
		    		<ListGroup variant="flush">
	            {skill.notableWork.map((work, j) => {
	              return <ListGroup.Item key={j}>{work}</ListGroup.Item>
	            })}
	          </ListGroup>
	        </>
         )
	      return (
	        <Row className="skill mt-5" key={i}>
	        	<Col className={"col-12 col-md-5 col-lg-6 d-flex flex-column order-2 order-md-1 mx-2 mx-md-0" + (i % 2 === 0 ? "" : " order-lg-2")}>
		          <h1 className="mt-3"><strong>{skill.title}</strong></h1>
		          <p className={"pe-2"}>
		            {skill.description}
		          </p>
		          <div className="d-block d-md-none d-lg-block">{notableWork}</div>
		        </Col>
		        <Col className={"col-12 col-md-7 col-lg-6 order-1 order-md-2 mt-0 my-md-auto" + (i % 2 === 0 ? "" : " order-lg-1")}>
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