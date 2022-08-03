import { SET_ERROR } from "../constants";
import { ShowErrorNotification } from "../helpers";

export const setError = (error)=> {
    ShowErrorNotification("Error", error)
    return {
        type: SET_ERROR,
        payload: error
    };
};
