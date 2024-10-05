import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const containerStyle = {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    marginBottom: '20px',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#0066cc',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Which site do you want?</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link to="/original" style={linkStyle}>
            [site 1] The one I poured my soul into as a freshman
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/minimalist" style={linkStyle}>
            [site 2] The clout hype-wave page that took a few minutes to make
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
