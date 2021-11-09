import * as React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AirComponent } from './AirComponent';
import { EarthComponent } from './EarthComponent';
import { FireComponent } from './FireComponent';
import { Home } from './Home';
import { WaterComponent } from './WaterComponent';

export class ElementalRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="air" element={<AirComponent />} />
          <Route path="water" element={<WaterComponent />} />
          <Route path="earth" element={<EarthComponent />} />
          <Route path="fire" element={<FireComponent />} />
        </Routes>
      </BrowserRouter>
    )
  }
}