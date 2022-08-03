import axios from "axios";

import { OPEN_WEATHERMAP_API_KEY, OPEN_WEATHERMAP_URL } from "./config";


const getLocationWeather = (location, dispatchWeatherCallback, dispatchErrorCallback) => {
    const options = {
        method: 'GET',
        url: OPEN_WEATHERMAP_URL,
        params: {
            q:location,
            appid:OPEN_WEATHERMAP_API_KEY,
        }
    }

    axios.request(options)
    .then(
        (responce) => {
            dispatchWeatherCallback(responce.data)
        }
    )
    .catch(
        (error)=> {
            let error_message = "Data could not be fetched. " + error
            dispatchErrorCallback(error_message)
        }
    )
    };

export default getLocationWeather