import * as actionTypes from "../constants/actionTypes";
import { coffeesDB } from "../../db/coffees";
export const getCoffees = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COFFEES, coffeesDB });
  } catch (error) {
    console.log(error);
  }
};
export const changeCategory = (category) => async (dispatch) => {
  try {
    const filteredCoffees =
      category === "all"
        ? coffeesDB
        : coffeesDB?.filter((coffee) => coffee.category === category);
    console.log(filteredCoffees);
    dispatch({ type: actionTypes.CHANGE_CATEGORY, category, filteredCoffees });
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
