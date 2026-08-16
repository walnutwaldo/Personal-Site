import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import WorkData from "../data/work";
import WorkCard from "./WorkCard";
import Footer from "./Footer";

function WorkPage() {
  return (
    <div id="scrollContainer">
      <div id="mainBody">
        <Container>
          <Row className="my-5 text-center">
            <h3 className="mb-2">All Work</h3>
            <p className="mb-5">
              Everything I've built, researched, and competed in.
            </p>
            {WorkData.work.map((work) => {
              return (
                <Col
                  className="text-center mb-4 col-12 col-lg-4"
                  key={work.title}
                >
                  <WorkCard work={work} />
                </Col>
              );
            })}
          </Row>
          <Row className="mb-5 text-center">
            <Col>
              <Link to="/original" className="primaryLink">
                Back to the main site
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default WorkPage;
