import React from "react";
import { useDispatch } from "react-redux";
import { changeCategory, searchCoffees } from "../redux/actions";

const Menu = (data) => {
  const dispatch = useDispatch();

  const getChangeCategory = (category) => {
    dispatch(changeCategory(category));
  };
  const getSearchCoffees = (value) => {
    dispatch(searchCoffees(value));
  };

  return (
    <div>
      <form className="d-flex position-relative pt-3">
        <input
          className="form-control me-2 border-success"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => getSearchCoffees(e.target.value)}
        />
      </form>
      <br />
      <h6
        className={data?.category === "all" ? "text-primary" : "text-secondary"}
        onClick={() => getChangeCategory("all")}
      >
        All Coffees
      </h6>
      <h6
        className={data?.category === "hot" ? "text-primary" : "text-secondary"}
        onClick={() => getChangeCategory("hot")}
      >
        Hot
      </h6>
      <h6
        className={
          data?.category === "iced" ? "text-primary" : "text-secondary"
        }
        onClick={() => getChangeCategory("iced")}
      >
        Iced
      </h6>
    </div>
  );
};

export default Menu;
