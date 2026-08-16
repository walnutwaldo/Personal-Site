import React from "react";
import { Image } from "react-bootstrap";

function WorkCard(props) {
  const { work } = props;
  return (
    <div>
      <a href={work.linkUrl} target="_blank" rel="noreferrer">
        <Image
          src={work.src}
          alt={work.title}
          className="highlightedWorkImage"
        />
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

export default WorkCard;
