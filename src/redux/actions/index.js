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
    dispatch({ type: actionTypes.CHANGE_CATEGORY, category, filteredCoffees });
  } catch (error) {
    console.log(error);
  }
};
export const searchCoffees = (filterParameter) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.FİLTER, filterParameter });
  } catch (error) {
    console.log(error);
  }
};
