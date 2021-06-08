import * as actionTypes from "../constants/actionTypes";
import * as initialState from "./initialState";

const coffeesReducer = (state = initialState.coffeesState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEES:
      return { ...state, coffeesTable: action?.coffeesDB };
    //  , category:""

    case actionTypes.CHANGE_CATEGORY:
      return { ...state, category: action?.category };
    // case actionTypes.FİLTER:
    //   return { ...state, coffeesTable: action?.filteredCoffees };
    default:
      return state;
  }
};
export default coffeesReducer;
