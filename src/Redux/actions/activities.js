import axios from "axios";
import { GET_ALL_ACTIVITIES } from "../actions-types";

const { REACT_ALL_GET_ALL_ACTIVITIES } = process.env;

export function getActivities() {
  return async function (dispatch) {
    try {
      const services = await axios.get(REACT_ALL_GET_ALL_ACTIVITIES);

      return dispatch({ 
            type: GET_ALL_ACTIVITIES, 
            payload: services.data });
    } catch (err) {
      console.error(err);
    }
  };
}
