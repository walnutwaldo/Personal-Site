import React from 'react';
import Image from 'next/image';

class InteractiveImage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {active: false}
    }

    render() {
        const {active} = this.state;
        const {src} = this.props;

        console.log(src);
        return (
            <>
                <div className={"interactiveImage relative rounded-lg transition "
                + (active ? "-translate-x-2 translate-y-2" : "")}
                     onMouseOver={() => this.setState({active: true})}
                     onMouseOut={() => this.setState({active: false})}>
                    <Image src={src} className={"rounded-lg position-relative imageCardImage " + (
                        active ? "translate-x-4 -translate-y-4 shadow-lg" : ""
                    )}
                           layout="fill"/>
                </div>
            </>
        )
    }

}

export default InteractiveImage;