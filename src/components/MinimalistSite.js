import React from 'react';

const MinimalistSite = () => {
  const bodyStyle = {
    padding: '20px'
  };

  return (
    <div style={bodyStyle}>
      <h1>Walden Yan</h1>
      <p>Software engineer, entrepreneur, and technology enthusiast.</p>

      <h2>What drives me</h2>
      <ul>
        <li>Using software to advance humanity</li>
        <li>Working with exceptional people</li>
      </ul>

      <h2>Highlighted Work</h2>
      <ul>
        <li>
          <strong>Cognition.ai</strong> - Cofounder. Makers of Devin, an AI software engineer.
        </li>
        <li>
          <strong>DeepReason</strong> - Founder &amp; CEO. Advanced formal tooling for smart contract auditing.
          {" "}<a href="https://deepreason.xyz/">Company Site</a>
        </li>
        <li>
          <strong>MIT PRIMES Research</strong> - Conducted research in cryptography and machine learning.
          {" "}<a href="https://firebasestorage.googleapis.com/v0/b/walden-yan-personal-site.appspot.com/o/SyFER.pdf?alt=media&token=81acaedc-d869-4a8e-a776-55ad39634bbf">
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
        <a href="https://waldensthoughts.bloggi.co/on-technology-inequality-purpose-and-the-fermi-paradox">Read More</a>
      </p>

      <h2>Connect</h2>
      <ul>
        <li><a href="https://www.linkedin.com/in/waldenyan">LinkedIn</a></li>
        <li><a href="https://github.com/walnutwaldo">GitHub</a></li>
        <li><a href="https://twitter.com/walden_yan">Twitter</a></li>
        <li><a href="https://waldensthoughts.bloggi.co/">Writing</a></li>
      </ul>
    </div>
  );
};

export default MinimalistSite;
