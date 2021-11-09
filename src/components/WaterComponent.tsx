import * as React from 'react';
import { Link } from "react-router-dom";
import water from '../images/water.png'

export class WaterComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/">Back</Link>
        </div>
        <div>
          Welcome to the bottom of the lake.
        </div>
        <div>
          <img src={water} alt="water" />
        </div>
      </React.Fragment>
    )
  }
}