import React from "react";

import WorkData from "../data/work";

import { Row, Col } from "react-bootstrap";

function WorkCard(props) {
  const { work } = props;
  return (
    <div>
      <a href={work.linkUrl} target="_blank" rel="noreferrer">
        {work.title === "Cognition AI" ? (
          <img src={"/images/cognitionai_logo.png"} alt={work.title} className="highlightedWorkImage" />
        ) : (
          <img src={work.src} alt={work.title} className="highlightedWorkImage" />
        )}
      </a>
      <div className="mt-3 px-4">
        <h5>
          <strong>{work.title}</strong>
        </h5>
        <p>
          {work.description}
          <br />
          <a
            href={work.linkUrl}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
            className="primaryLink"
          >
            {work.linkText}
          </a>
        </p>
      </div>
    </div>
  );
}

function FeaturedWorkSection(props) {
  const [numShown, setNumShown] = React.useState(
    Math.min(3, WorkData.work.length)
  );

  return (
    <section name="work" id="work" className="pt-md-1">
      <Row className="mt-5 my-md-5 text-center">
        <h3 className="text-center mb-5">Highlighted Work</h3>
        {WorkData.work.slice(0, numShown).map((work, i) => {
          return (
            <Col className="text-center mb-4 col-12 col-lg-4" key={i}>
              <WorkCard work={work} />
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default FeaturedWorkSection;
