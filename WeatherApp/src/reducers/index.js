import weatherReducer from "./weatherReducer";
import errorReducer from "./errorReducer";

const rootReducer = (state, action) =>(
    {
        Weather: weatherReducer(state.Weather, action),
        Error: errorReducer(state.Error, action),
    }
    )

export default rootReducer



