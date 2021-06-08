import * as actionTypes from "../constants/actionTypes";

export const getCoffees = (coffeesDB) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COFFEES, coffeesDB });
  } catch (error) {
    console.log(error);
  }
};
export const changeCategory = (category) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.CHANGE_CATEGORY, category });
  } catch (error) {
    console.log(error);
  }
};
// export const filter = (coffees, filterParameter) => async (dispatch) => {
//   try {
//     filterParameter===""?
//       {filteredCoffees}=coffees.filter(filterParameter):null
//      dispatch({ type: actionTypes.FİLTER, filteredCoffees });
//   } catch (error) {
//     console.log(error);
//   }
// };
