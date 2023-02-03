import { 
    GET_ALL_HOTELS,
    CITIES,
    FILTER_BY_CITY
} from "../actions-types/index";

const initialState = { 
    hotels: [], 
    allHotels:[],
    cities:[]
}

export default function rootReducer (state=initialState, action){
    switch(action.type){
        case GET_ALL_HOTELS:
           return {
            ...state,
            hotels: action.payload,
            allHotels: action.payload,
        } 
        case CITIES:
            return {
                ...state,
                cities: action.payload
            }
        case FILTER_BY_CITY:
            let filtered=[]
            if(action.payload === ""){
               filtered = state.allHotels
            } else {
                filtered= state.allHotels.filter((e)=>e.city === action.payload)
            }
            return {
                ...state,
                hotels: filtered
                
            }
        default: return state;
    }
}