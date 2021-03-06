import * as React from 'react';
import { Link } from "react-router-dom";
import earth from '../images/earth.png'
import '../styles/Earth.scss';

export class EarthComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="earth">
          <div>
            <Link to="/">Back</Link>
          </div>
          <div>
            We are on the top of the mountain.
          </div>
          <div>
            <img src={earth} alt="earth" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}