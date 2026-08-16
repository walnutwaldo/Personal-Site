import { Row } from "react-bootstrap";
import React from "react";
import WritingData from "../data/writing";

function PostPreview(props) {
  const { post } = props;
  return (
    <div className="row mx-0">
      <div className={"d-none d-xxl-block col-xxl-1"}></div>
      <div className="col-lg-6 col-xxl-4 pe-lg-4 my-auto">
        <img src={post.image} alt={post.title} className={"w-100 rounded-lg"} />
      </div>
      <div className="col-lg-6 ps-lg-4 mt-4 mt-lg-0 flex-column">
        <h3>{post.title}</h3>
        <p>{post.date}</p>
        <p>{post.excerpt}</p>
        <a
          href={post.url}
          target="_blank"
          rel="noreferrer"
          className={"primaryLink text-decoration-none"}
        >
          Read More
        </a>
      </div>
      <div className={"d-none d-xxl-block col-xxl-1"}></div>
    </div>
  );
}

export default function WritingSection() {
  return (
    <section name="writing" id="writing" className="pt-md-1">
      <Row className="my-5">
        <h3 className="text-center mb-5">
          <span style={{ fontWeight: 300, opacity: 0.7 }}>(Not so)</span> Recent
          Writing
        </h3>
        {WritingData.posts.map((post) => {
          return <PostPreview post={post} key={post.url} />;
        })}
      </Row>
    </section>
  );
}
