import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';

class InteractiveImage extends React.Component{

  constructor(props) {
  	super(props)
  	this.state = { active: false }
  }

  componentDidMount() {
    document.title = "Walden Yan (WIP)"
  }

  makeActive(b) {
  	this.setState({
  		active: b
  	})
  }

  render() {
  	const {active} = this.state;
  	return (
  		<>
  			<div className={"interactiveImage" + (active ? " active" : "")}
  			onMouseOver={() => this.makeActive(true)}
  			onMouseOut={() => this.makeActive(false)}>
  	  		<Image src={this.props.src} className="position-relative imageCardImage"></Image>
  			</div>
  		</>
  	)
  }

}

export default InteractiveImage;