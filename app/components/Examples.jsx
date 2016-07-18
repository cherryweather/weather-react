var React = require('react');
import { Link } from 'react-router';

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are some examples</p>
      <ol>
        <li>
          <Link to='/?location=Austin'>Austin</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
