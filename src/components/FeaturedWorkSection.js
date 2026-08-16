import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WorkData from "../data/work";
import WorkCard from "./WorkCard";

const DEFAULT_SHOWN = 3;

function FeaturedWorkSection() {
  const [expanded, setExpanded] = useState(false);

  const allWork = WorkData.work;
  const collapsible = allWork.length > DEFAULT_SHOWN;
  const shown = expanded ? allWork : allWork.slice(0, DEFAULT_SHOWN);

  return (
    <section name="work" id="work" className="pt-md-1">
      <Row className="mt-5 my-md-5 text-center">
        <h3 className="text-center mb-5">Highlighted Work</h3>
        {shown.map((work) => {
          return (
            <Col className="text-center mb-4 col-12 col-lg-4" key={work.title}>
              <WorkCard work={work} />
            </Col>
          );
        })}
        {collapsible ? (
          <div>
            <span
              className="showmorelesstext"
              role="button"
              tabIndex={0}
              onClick={() => setExpanded(!expanded)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setExpanded(!expanded);
                }
              }}
            >
              {expanded ? "Show Less" : "Show More"}
            </span>
            <br />
            <Link to="/work" className="primaryLink">
              See all work
            </Link>
          </div>
        ) : undefined}
      </Row>
    </section>
  );
}

export default FeaturedWorkSection;
