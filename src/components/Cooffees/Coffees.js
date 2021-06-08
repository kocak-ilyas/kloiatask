import React from "react";
import Coffee from "./Coffee/Coffee";

const Coffees = (data) => {
  console.log(data.coffeesReducer.category);
  console.log(data.coffeesReducer.coffeesTable.length);
  console.log(data.coffeesReducer.filterBy);
  return (
    <div>
      <div>
        {data.coffeesReducer.coffeesTable.length === 0
          ? console.log("loading")
          : data.coffeesReducer.coffeesTable.map((coffee) => (
              <Coffee coffee={coffee} key={coffee.id} />
            ))}
        <h1>sdfsdf</h1>
      </div>
    </div>
  );
};

export default Coffees;
