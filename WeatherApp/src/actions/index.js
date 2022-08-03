import { bindActionCreators } from 'redux'

import {updateWeatherForecast} from './weatherActions'
import { setError } from './errorActions'
import {store} from '../app/store'

export const boundWeatherActions = bindActionCreators(
    {
        UpdateWeather: updateWeatherForecast,
    },
    store.dispatch
)

export const boundErrorActions = bindActionCreators(
    {
        SetError: setError,
    },
    store.dispatch
)