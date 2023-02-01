import axios from "axios";
import { 
    GET_ALL_HOTELS
} from "../actions-types/index";

const { REACT_APP_GET_ALL_HOTELS }=process.env;

export function getAllHotels(){
    return async function(dispatch){
     try {
        const response = await axios.get(REACT_APP_GET_ALL_HOTELS);
        return dispatch({ type: GET_ALL_HOTELS, payload: response.data})
     } catch (error) {
        console.error(error)
     }
    }

}


