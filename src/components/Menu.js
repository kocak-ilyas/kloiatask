import React from "react";
import { useDispatch } from "react-redux";
import { changeCategory, searchCoffees } from "../redux/actions";

const Menu = (data) => {
  const dispatch = useDispatch();

  return (
    <div>
      <form class="d-flex m-4 p-4">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => dispatch(searchCoffees(e.target.value))}
        />
      </form>

      <h6
        className={data?.category === "all" ? "text-primary" : "text-secondary"}
        onClick={() => dispatch(changeCategory("all"))}
      >
        All Coffees
      </h6>
      <h6
        className={data?.category === "hot" ? "text-primary" : "text-secondary"}
        onClick={() => dispatch(changeCategory("hot"))}
      >
        Hot
      </h6>
      <h6
        className={
          data?.category === "iced" ? "text-primary" : "text-secondary"
        }
        onClick={() => dispatch(changeCategory("iced"))}
      >
        Iced
      </h6>
      <hr />
      <hr />
      <hr />
    </div>
  );
};

export default Menu;
