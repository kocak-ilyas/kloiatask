import React from "react";
import Coffee from "./Coffee/Coffee";

const Coffees = (data) => {
  return (
    <div>
      <div>
        {data.coffeesReducer.coffeesTable.length === 0
          ? console.log("loading")
          : data.coffeesReducer.coffeesTable
              .filter(
                (coffee) =>
                  coffee.title
                    .toLowerCase()
                    .search(data.coffeesReducer.filterParameter) > -1
              )
              .map((coffee) => <Coffee coffee={coffee} key={coffee.id} />)}
      </div>
    </div>
  );
};

export default Coffees;
