import React from "react";

import WorkData from "../data/work";

import { Row, Col, Image } from "react-bootstrap";
import { socials } from "../tools/constants";

function WorkCard(props) {
  const { work } = props;
  return (
    <div>
      <a href={work.linkUrl} target="_blank" rel="noreferrer">
        <Image src={work.src} className="highlightedWorkImage"></Image>
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
        {/* {numShown < WorkData.work.length ? (
          <span
            class={"showmorelesstext"}
            onClick={() => {
              setNumShown(WorkData.work.length);
            }}
          >
            Show More
          </span>
        ) : numShown > 3 ? (
          <span
            className={"showmorelesstext"}
            onClick={() => {
              setNumShown(Math.min(3, WorkData.work.length));
            }}
          >
            Show Less
          </span>
        ) : undefined} */}
      </Row>
    </section>
  );
}

export default FeaturedWorkSection;
