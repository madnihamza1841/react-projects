import { UPDATE_WEATHER_FORECAST } from '../constants'

const weatherReducer = (state, action)=>{
    switch(action.type){
        case UPDATE_WEATHER_FORECAST:
            let weatherForecast = action.payload
            return weatherForecast
        default:
            return state
    };
  };

export default weatherReducer