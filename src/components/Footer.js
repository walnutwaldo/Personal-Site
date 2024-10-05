import { Col, Container, Row } from "react-bootstrap";
import { socials } from "../tools/constants";
import React from "react";
import { SocialIcon } from "react-social-icons";

function year() {
  return new Date().getFullYear();
}

export default function Footer() {
  return (
    <div className="footer py-2 py-md-4">
      <Container>
        <Row className="text-center">
          <Col className="col-12 my-2 col-md-4 my-md-0 align-middle d-flex flex-column text-md-start">
            <p className="my-auto">
              <strong>Copyright {year()}</strong>
            </p>
          </Col>
          <Col className="col-12 my-2 col-md-4 my-md-0">
            {socials
              .filter((item) => item.image !== undefined)
              .map((item, i) => {
                return (
                  <a
                    href={item.url}
                    key={i}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 socialLogo darkTheme"
                  >
                    <SocialIcon
                      url={item.url}
                      style={{ width: "38px", height: "38px" }}
                      bgColor="#f8fafc"
                    />
                  </a>
                );
              })}
          </Col>
          <Col className="col-12 my-2 col-md-4 my-md-0 text-md-end">
            <strong>Made by yours truly</strong>
            <br />
            waldenyan20@gmail.com
          </Col>
        </Row>
      </Container>
    </div>
  );
}
