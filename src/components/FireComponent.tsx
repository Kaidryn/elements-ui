import * as React from 'react';
import { Link } from "react-router-dom";
import fire from '../images/fire.png'
import '../styles/Fire.scss';

export class FireComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="fire">        
          <div>
            <Link to="/">Back</Link>
          </div>
          <div>
            It's a little warm in here...
          </div>
          <div>
            <img src={fire} alt="fire" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}