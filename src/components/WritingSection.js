import { Row } from "react-bootstrap";
import React from "react";

export default function WritingSection() {
  return (
    <section name="writing" id="writing" className="pt-md-1">
      <Row className="my-5">
        <h3 className="text-center mb-5">
          <span style={{ fontWeight: 300, opacity: 0.7 }}>(Not so)</span> Recent
          Writing
        </h3>
        <div className="row mx-0">
          <div className={"d-none d-xxl-block col-xxl-1"}></div>
          <div className="col-lg-6 col-xxl-4 pe-lg-4 my-auto">
            <img
              src="https://images.bloggi.co/f517a5a3.png"
              alt="Article Image"
              className={"w-100 rounded-lg"}
            />
          </div>
          <div className="col-lg-6 ps-lg-4 mt-4 mt-lg-0 flex-column">
            <h3>On Technology, Inequality, Purpose, and the Fermi Paradox</h3>
            <p>Nov 15, 2022</p>
            <p>
              ... This AI would be able to strategize any business' resource
              allocation, make many copies of itself to run different parts of
              the organization, iterate over many different product and service
              ideas, and organize the logistics to make this all happen.
              Consider every job that really needs a person in today's world. A
              programmer? Not when robots learn to code. A factory manager? Not
              when robots learn to design and organize themselves. A farmer? Not
              when robots finally figure out how to run a farm on their own. Our
              touchpoint into all of these areas of production will be governed
              by these software AGIs (Artificial General Intelligence), and the
              entire world will become a software API. Scaling farm production
              could be as easy as scaling a cluster of Kubernetes is today ...
            </p>
            {/* <p>
              Everyone has seen the impact of software on productivity, as well
              as its ability to create a ton of wealth, albeit unevenly
              distributed. Software gives enormous economic leverage to
              individuals who know how to code. But I will explain why I think
              this massive economic leverage will also eventually be seen in
              every industry, including those that deal with the physical world,
              from farming to manufacturing, and why I think this will have
              disastrous consequences for economics and social stability. And by
              the end, I hope to accumulate all of this into a possible
              explanation as to why we appear to be alone in the universe.
            </p> */}
            <a
              href={
                "https://waldensthoughts.bloggi.co/on-technology-inequality-purpose-and-the-fermi-paradox"
              }
              className={"primaryLink text-decoration-none"}
            >
              Read More
            </a>
          </div>
          <div className={"d-none d-xxl-block col-xxl-1"}></div>
        </div>
      </Row>
    </section>
  );
}
