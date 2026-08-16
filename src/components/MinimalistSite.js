import React from "react";
import WritingData from "../data/writing";
import { socials } from "../tools/constants";

const MinimalistSite = () => {
  const containerStyle = {
    padding: "20px",
    paddingBottom: "150px",
    maxWidth: "100%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    overflowY: "auto",
    height: "100vh",
    boxSizing: "border-box",
  };

  const contentStyle = {
    maxWidth: "800px",
    margin: "0 auto",
  };

  const headingStyle = {
    marginBottom: "20px",
  };

  const listStyle = {
    paddingLeft: "20px",
  };

  const linkStyle = {
    color: "#0066cc",
    textDecoration: "none",
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Walden Yan</h1>
        <p>Software engineer, entrepreneur, and technology enthusiast.</p>

        <h2>What drives me</h2>
        <ul style={listStyle}>
          <li>Using software to advance humanity</li>
          <li>Working with exceptional people</li>
        </ul>

        <h2>Highlighted Work</h2>
        <ul style={listStyle}>
          <li>
            <strong>Cognition.ai</strong> - Cofounder. Makers of Devin, an AI
            software engineer.
          </li>
          <li>
            <strong>DeepReason</strong> - Founder &amp; CEO. Advanced formal
            tooling for smart contract auditing.{" "}
            <a href="https://deepreason.xyz/" style={linkStyle}>
              Company Site
            </a>
          </li>
          <li>
            <strong>MIT PRIMES Research</strong> - Conducted research in
            cryptography and machine learning.{" "}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/SyFER.pdf?alt=media&token=81acaedc-d869-4a8e-a776-55ad39634bbf"
              style={linkStyle}
            >
              Read Cryptography Paper
            </a>
          </li>
          <li>
            <strong>IOI Gold</strong> - Achieved gold medal in the International
            Olympiad in Informatics.
          </li>
        </ul>

        <h2>Recent Writing</h2>
        {WritingData.posts.map((post) => (
          <p key={post.url}>
            <strong>{post.title}</strong> - {post.date}
            <br />
            <a
              href={post.url}
              target="_blank"
              rel="noreferrer"
              style={linkStyle}
            >
              Read More
            </a>
          </p>
        ))}

        <h2>Connect</h2>
        <ul style={listStyle}>
          {socials.map((social) => (
            <li key={social.url}>
              <a
                href={social.url}
                target="_blank"
                rel="noreferrer"
                style={linkStyle}
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MinimalistSite;
