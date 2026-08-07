import React, { useEffect, useMemo, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TimelineData from "../data/timeline.json";

export default function TimelineSection() {
  const nodeRefs = useRef([]);
  const [visibleNodes, setVisibleNodes] = useState({});
  const timeline = useMemo(() => TimelineData.timeline, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number(entry.target.dataset.index);
          setVisibleNodes((current) => {
            if (current[index]) {
              return current;
            }

            return {
              ...current,
              [index]: true,
            };
          });
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    nodeRefs.current.forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [timeline]);

  return (
    <section name="timeline" id="timeline" className="pt-md-1">
      <Row className="mt-5 my-md-5">
        <h3 className="text-center mb-5">Journey</h3>
        <Col className="col-12">
          <div className="timelineSection">
            <div className="timeline-line" aria-hidden="true"></div>
            {timeline.map((milestone, index) => {
              const sideClass =
                index % 2 === 0 ? "timeline-node-left" : "timeline-node-right";
              const inViewClass = visibleNodes[index] ? "in-view" : "";

              return (
                <div
                  key={`${milestone.year}-${milestone.title}`}
                  ref={(element) => {
                    nodeRefs.current[index] = element;
                  }}
                  data-index={index}
                  className={`timeline-node ${sideClass} ${inViewClass}`.trim()}
                >
                  <div className="timeline-card-wrapper">
                    <article className="timeline-card">
                      <span className="timeline-year">{milestone.year}</span>
                      <h4 className="timeline-title mt-3 mb-2">{milestone.title}</h4>
                      <p className="timeline-description mb-0">
                        {milestone.description}
                      </p>
                      {milestone.linkText && milestone.linkUrl ? (
                        <a
                          href={milestone.linkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="primaryLink text-decoration-none d-inline-block mt-3"
                        >
                          {milestone.linkText}
                        </a>
                      ) : null}
                    </article>
                  </div>
                  <div className="timeline-marker" aria-hidden="true">
                    <span className="timeline-dot"></span>
                  </div>
                  <div className="timeline-spacer"></div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </section>
  );
}
