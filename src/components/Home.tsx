import * as React from 'react';
import '../styles/Home.scss';
import { Link } from "react-router-dom";

export class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to the landing page!</h1>
        <hr/>
        <div>
          
          <Link to="/air">Air</Link>
        </div>
        <div>
          <Link to="/water">Water</Link>
        </div>
        <div>
          <Link to="/earth">Earth</Link>
        </div>
        <div>
          <Link to="/fire">Fire</Link>
        </div>
      </div>
    )
  }
}