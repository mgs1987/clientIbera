import { 
    GET_ALL_HOTELS,
    GET_HOTEL_BY_LOCATION
} from "../actions-types/index";

const initialState = { 
    hotels: [], 
    allHotels:[]
}

export default function rootReducer (state=initialState, action){
    switch(action.type){
        case GET_ALL_HOTELS:
           return {
            ...state,
            hotels: action.payload,
            allHotels: action.payload,
        } 
        case GET_HOTEL_BY_LOCATION:
            return {
                ...state,
                
            }
        default: return state;
    }
}