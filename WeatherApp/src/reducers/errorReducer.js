import { SET_ERROR } from '../constants'

const errorReducer = (state, action)=>{

    if (action.type === SET_ERROR){
        let error = action.payload
        return error
    }
    return state
  };

export default errorReducer