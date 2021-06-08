import * as actionTypes from "../constants/actionTypes";
import * as initialState from "./initialState";

const coffeesReducer = (state = initialState.coffeesState, action) => {
  switch (action.type) {
    case actionTypes.GET_COFFEES:
      return { ...state, coffeesTable: action?.coffeesDB };
    case actionTypes.CHANGE_CATEGORY:
      return { ...state, category: action?.category };
    case actionTypes.FİLTER:
      return { ...state, filterBy: action?.filterParameter };
    default:
      return state;
  }
};
export default coffeesReducer;
// const coffeesReducer = (state = initialState.coffeesState, action) => {
//   switch (action.type) {
//     case actionTypes.GET_COFFEES:
//       return { ...state, coffeesTable: action?.coffeesDB };
//     case actionTypes.CHANGE_CATEGORY:
//       return {
//         ...state,
//         category: action?.category,
//         coffeesTable: action?.filteredCoffees,
//       };
//     // case actionTypes.FİLTER:
//     //   return { ...state, coffeesTable: action?.filteredCoffees };
//     default:
//       return state;
//   }
// };
// export default coffeesReducer;
