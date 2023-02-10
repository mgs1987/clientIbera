import {
  //GET_HOTELS,
  CITIES,
  FILTER_BY_CITY,
  FILTER_BY_STARS,
  GET_ALL_HOTELS,
  GET_HOTEL_BY_ID,
} from "../actions-types/index";

const initialState = {
  hotels: [],
  allHotels: [],
  cities: [],
  hotelDetails: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload,
        allHotels: action.payload,
      };
    case CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case FILTER_BY_CITY:
      let filtered = [];
      if (action.payload === "") {
        filtered = state.allHotels;
      } else {
        filtered = state.allHotels.filter((e) => {
          return e.city === action.payload;
        });
      }
      return {
        ...state,
        hotels: filtered,
      };
    case FILTER_BY_STARS:
      let filterStar = [];
      if (action.payload === "") {
        filterStar = state.allHotels;
      } else {
        filterStar = state.allHotels.filter((e) => {
          return e.stars === parseInt(action.payload);
        });
      }
      return {
        ...state,
        hotels: filterStar,
      };
    case GET_HOTEL_BY_ID:
      return {
        ...state,
        hotelDetails: action.payload,
      };

    default:
      return state;
  }
}
