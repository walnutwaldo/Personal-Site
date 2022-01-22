import React from 'react';
import Image from 'react-bootstrap/Image';

class InteractiveImage extends React.Component{

  constructor(props) {
  	super(props)
  	this.state = { active: false }
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
  			<div className={"interactiveImage rounded" + (active ? " active" : "")}
  			onMouseOver={() => this.makeActive(true)}
  			onMouseOut={() => this.makeActive(false)}>
  	  		<Image src={this.props.src} className="rounded position-relative imageCardImage"/>
  			</div>
  		</>
  	)
  }

}

export default InteractiveImage;