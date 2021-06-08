import React from "react";

const Coffee = (data) => {
  return (
    <div className="m-1 p-1">
      <h3>{data.coffee.title}</h3>
      <p>{data.coffee.description}</p>
      <p>Ingredients: {data.coffee.ingredients.join(", ")}</p>
    </div>
  );
};
export default Coffee;
