import React from 'react';

import WorkData from "../data/work";

import {Row, Col, Image} from 'react-bootstrap';

function WorkCard(props) {
    const {work} = props;
    return (<div>
        <a href={work.linkUrl} target="_blank" rel="noreferrer">
            <Image src={work.src} className="highlightedWorkImage"></Image>
        </a>
        <div className="mt-3 px-4">
            <h5><strong>{work.title}</strong></h5>
            <p>{work.description}<br/>
                <a href={work.linkUrl} target="_blank" rel="noreferrer"
                   style={{textDecoration: "none"}} className="primaryLink">{work.linkText}</a>
            </p>
        </div>
    </div>)
}

class FeaturedWorkSection extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section name="work" id="work" className="pt-md-1">
                <Row className="mt-5 my-md-5">
                    <h3 className="text-center mb-5">Highlighted Work</h3>
                    {
                        WorkData.work.map((work, i) => {
                            return (<Col className="text-center mb-4 col-12 col-sm-6 col-xl-3" key={i}>
                                <WorkCard work={work}/>
                            </Col>)
                        })
                    }
                </Row>
            </section>)
    }
}

export default FeaturedWorkSection;