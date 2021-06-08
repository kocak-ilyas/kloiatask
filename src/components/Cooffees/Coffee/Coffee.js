import React from "react";

const Coffee = (data) => {
  return (
    <div className="m-1 p-1">
      <div className="m-0 p-3 text-danger">
        <p>category: {data.coffee.category}</p>
        <p>id: {data.coffee.id}</p>
      </div>
      <h3>{data.coffee.title}</h3>
      <p>{data.coffee.description}</p>
      <p>Ingredients: {data.coffee.ingredients.join(", ")}</p>
      <hr />
    </div>
  );
};
export default Coffee;
