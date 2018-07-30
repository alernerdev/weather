import { FETCH_WEATHER } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // state is all the cities data before + data from the new city.
      // return a new state
      return [action.payload.data, ...state];
  }
  return state;
}
