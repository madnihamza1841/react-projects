import React from "react"
import { connect } from "react-redux";

import TemperatureGraph from "./temperatureGraph";
import HumidityGraph from "./humidityGraph";
import PressureGraph from "./pressureGraph.js";
import { weatherForecast } from './selectors'


const WeatherForecast = (props)=>{
    let city = props.city;
    console.log("heyyy")

    return (
      <div>
        <div>
          <h1>Location: {city}</h1>
        </div>
        <div>
          <TemperatureGraph/>
        </div>
        <div>
          <HumidityGraph/>
        </div>
        <div>
          <PressureGraph/>
        </div>
      </div>
    );
};

const mapStateToProps = weatherForecast

export default connect(mapStateToProps)(WeatherForecast)