import axios from "axios";
import { GET_ROOMS_CITIES } from "../actions-types";

// REACT_APP_GET_ALL_ROOMS_CITIES=https://iberahotelsapi-production.up.railway.app/search/
const { REACT_APP_GET_ALL_ROOMS_CITIES } = process.env;
// REACT_APP_GET_ALL_ROOMS_CITY=https://iberahotelsapi-production.up.railway.app/search/?city
// REACT_APP_GET_ALL_ROOMS_CITY=https://iberahotelsapi-production.up.railway.app/search/?city=bue
const { REACT_APP_GET_ALL_ROOMS_CITY } = process.env;

export function getRoomsCities() {
  return async function (dispatch) {
    try {
      const amenities = await axios.get(REACT_APP_GET_ALL_AMENITIES);
      console.log("aca esta amenities.data", amenities.data);
      return dispatch({ type: GET_ROOMS_CITIES, payload: amenities.data });
    } catch (error) {
      console.error(error);
    }
  };
}
