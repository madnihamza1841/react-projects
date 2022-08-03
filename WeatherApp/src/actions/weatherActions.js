import { UPDATE_WEATHER_FORECAST } from "../constants";

export const updateWeatherForecast = (data)=> {
    
    let id = data.city.id
    let city = data.city.name
    let dates = []
    let temperatues = []
    let humidities = []
    let pressures = [] 

    for (let i=0; i< data.list.length; i++){
        dates.push(data.list[i].dt_txt)
        temperatues.push(data.list[i].main.temp)
        humidities.push(data.list[i].main.humidity)
        pressures.push(data.list[i].main.pressure)
    };

    let weather_data = {
        'id': id,
        'city': city,
        'dates' : dates,
        'temperatures': temperatues,
        'humidities': humidities,
        'pressures': pressures
    };
    
    
    return {
        type: UPDATE_WEATHER_FORECAST,
        payload: weather_data
    };
};
