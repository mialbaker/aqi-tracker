import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import './App.css';

const App = () =>
{
  return(
    <div>
      <div id="background-wrap">
    <div class="x1">
        <div class="cloud"></div>
    </div>

    <div class="x2">
        <div class="cloud"></div>
    </div>

    <div class="x3">
        <div class="cloud"></div>
    </div>

    <div class="x4">
        <div class="cloud"></div>
    </div>

    <div class="x5">
        <div class="cloud"></div>
    </div>
</div>
      <hi>AQI Tracker</hi>
      <Home />
    </div>
  );
}

export default App;