import axios from "axios";
import { 
    GET_ALL_HOTELS,
    GET_HOTEL_BY_LOCATION

} from "../actions-types/index";

const { REACT_APP_GET_ALL_HOTELS, REACT_APP_GET_HOTEL_BY_LOCATION }=process.env;

export function getAllHotels(){
    return async function(dispatch){
     try {
        const response = await axios.get(REACT_APP_GET_ALL_HOTELS);
        return dispatch({ type: GET_ALL_HOTELS, payload: response.data})
     } catch (error) {
        console.error(error)
     }
    }
};

export function getHotelByLocation(location){
   return async function(dispatch){
    try {
        const locat = await axios.get(REACT_APP_GET_HOTEL_BY_LOCATION + location);
        return dispatch({type: GET_HOTEL_BY_LOCATION, payload:locat.data})

    } catch(err){
        alert("Sorry, we do not have any of our hotels in the location you need")
    }
   }
}


