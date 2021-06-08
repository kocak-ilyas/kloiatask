import React from "react";
import Coffee from "./Coffee/Coffee";

const Coffees = (data) => {
  return (
    <div className="mt-3">
      {data.coffeesReducer.coffeesTable.length === 0 ? (
        <div className="d-flex justify-content-center m-0">
          <div className="spinner-border text-info m-1" role="status"></div>
          <strong className="sr-only text-info pt-2">&nbsp; Loading...</strong>
        </div>
      ) : (
        data.coffeesReducer.coffeesTable
          .filter(
            (coffee) =>
              coffee.title
                .toLowerCase()
                .search(data.coffeesReducer.filterParameter) > -1
          )
          .map((coffee) => <Coffee coffee={coffee} key={coffee.id} />)
      )}
    </div>
  );
};

export default Coffees;
