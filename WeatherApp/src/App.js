import React, { useState } from 'react';
import { connect } from 'react-redux'
import ReactNotifications from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import getLocationWeather from './services';
import WeatherForecast from './weatherForecast';
import './App.css';
import { boundWeatherActions, boundErrorActions } from './actions';
import { weatherForecast, error } from './selectors'


function App(props) {

  const [location, setLocation] = useState("")

  const handleChange = (event)=>{
    setLocation(event.target.value) 
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    getLocationWeather(location, props.updateWeatherForecast, props.setError)
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input className="searchBar" type="text" value={location} onChange={handleChange}/> 
          <button className="searchButton" type="submit" onSubmit={handleSubmit}> Search</button> 
        </form>
      </div>

      <div>
      <ReactNotifications/>
      </div>

      <div>
        { !props.Weather.city ? <p></p> : <WeatherForecast/> }
      </div>

    </div>
  );
}

const mapStateToProps = (state)=>{
  return{
    Weather: weatherForecast(state), 
    Error: error(state),
  }
}

const mapDispathToProps = ()=>{
  return {
    updateWeatherForecast: boundWeatherActions.UpdateWeather,
    setError: boundErrorActions.SetError
  } 
} 

export default connect(mapStateToProps, mapDispathToProps)(App)
