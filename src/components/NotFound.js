import React from "react";
import { Link } from "react-router-dom";

const containerStyle = {
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
};

const linkStyle = {
  textDecoration: "none",
  color: "#0066cc",
};

const NotFound = () => {
  return (
    <div style={containerStyle}>
      <h1>Page not found</h1>
      <p>There's nothing here, but there is elsewhere.</p>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/" style={linkStyle}>
            Pick a site
          </Link>
        </li>
        <li>
          <Link to="/work" style={linkStyle}>
            See all my work
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NotFound;
