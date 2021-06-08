import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Coffee from "./Coffee/Coffee";

const Coffees = (data) => {
  return (
    <div>
      <div>
        {data.coffeesTable.length === 0
          ? console.log("loading")
          : data.coffeesTable.map((coffee) => (
              <Coffee coffee={coffee} key={coffee.id} />
            ))}
        <h1>sdfsdf</h1>
      </div>
    </div>
  );
};

export default Coffees;
