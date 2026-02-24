import React from 'react';

const MinimalistSite = () => {
  const containerStyle = {
    padding: '20px',
    paddingBottom: '150px',
    maxWidth: '100%',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    overflowY: 'auto',
    height: '100vh',
    boxSizing: 'border-box',
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const headingStyle = {
    marginBottom: '20px',
  };

  const listStyle = {
    paddingLeft: '20px',
  };

  const linkStyle = {
    color: '#0066cc',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Walden Yan</h1>
        <p>Co-Founder & CPO at <a href="https://cognition.ai/" style={linkStyle}>Cognition AI</a>, building Devin and the future of software engineering.</p>

        <h2>What drives me</h2>
        <ul style={listStyle}>
          <li>Using software to advance humanity</li>
          <li>Working with exceptional people</li>
        </ul>

        <h2>Highlighted Work</h2>
        <ul style={listStyle}>
          <li>
            <strong>Cognition AI</strong> - Co-Founder & CPO. Building Devin, the AI software engineer, and the future of software development.
            {" "}<a href="https://cognition.ai/" style={linkStyle}>Company Site</a>
          </li>
          <li>
            <strong>DeepReason</strong> - Founder &amp; CEO. Advanced formal tooling for smart contract auditing.
            {" "}<a href="https://deepreason.xyz/" style={linkStyle}>Company Site</a>
          </li>
          <li>
            <strong>MIT PRIMES Research</strong> - Conducted research in cryptography and machine learning.
            {" "}<a href="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/SyFER.pdf?alt=media&token=81acaedc-d869-4a8e-a776-55ad39634bbf" style={linkStyle}>
              Read Cryptography Paper
            </a>
          </li>
          <li>
            <strong>IOI Gold</strong> - Achieved gold medal in the International Olympiad in Informatics.
          </li>
        </ul>

        <h2>Recent Writing</h2>
        <p>
          <strong>On Technology, Inequality, Purpose, and the Fermi Paradox</strong> - Nov 15, 2022
          <br />
          Exploring the impact of AI on various industries and its implications for the future.
          <br />
          <a href="https://waldensthoughts.bloggi.co/on-technology-inequality-purpose-and-the-fermi-paradox" style={linkStyle}>Read More</a>
        </p>

        <h2>Connect</h2>
        <ul style={listStyle}>
          <li><a href="https://www.linkedin.com/in/waldenyan" style={linkStyle}>LinkedIn</a></li>
          <li><a href="https://github.com/walnutwaldo" style={linkStyle}>GitHub</a></li>
          <li><a href="https://x.com/walden_yan" style={linkStyle}>X (Twitter)</a></li>
          <li><a href="https://waldensthoughts.bloggi.co/" style={linkStyle}>Writing</a></li>
        </ul>
      </div>
    </div>
  );
};

export default MinimalistSite;
