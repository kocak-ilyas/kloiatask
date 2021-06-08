import React from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../redux/actions";

const Menu = (data) => {
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" placeholder="Search" />

      <h6
        className={data?.category === "all" ? "text-primary" : "text-secondary"}
        onClick={() => dispatch(changeCategory("all"))}
      >
        All Coffees
      </h6>
      <h6
        className={data?.category === "hot" ? "text-primary" : "text-secondary"}
        onClick={() => dispatch(changeCategory("hot"))}>
        Hot
      </h6>
      <h6
        className={
          data?.category === "iced" ? "text-primary" : "text-secondary"
        }
        onClick={() => dispatch(changeCategory("iced"))}>
        Iced
      </h6>
      <hr />
      <hr />
      <hr />

    </div>
  );
};

export default Menu;
