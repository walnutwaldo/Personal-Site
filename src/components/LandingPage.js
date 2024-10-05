import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Which site do you want?</h1>
      <ul>
        <li>
          <Link to="/original">
            [site 1] The one I poured my soul into as a freshman
          </Link>
        </li>
        <li>
          <Link to="/minimalist">
            [site 2] The clout hype-wave page that took a few minutes to make
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LandingPage;
