import * as React from 'react';
import { Link } from "react-router-dom";
import air from '../images/air.png'

export class AirComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Link to="/">Back</Link>
        </div>
        <div>
          Welcome to the air domain!
        </div>
        <div>
          <img src={air} alt="air" />
        </div>
      </React.Fragment>
    )
  }
}