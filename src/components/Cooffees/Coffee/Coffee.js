import React from "react";

const Coffee = (data) => {
  return (
    <div>
      <h3>Title: {data.coffee.title}</h3>
      <p>description: {data.coffee.description}</p>
      <p>{data.coffee.ingredients.join(", ")}</p>
      <p>category: {data.coffee.category}</p>
      <p>id: {data.coffee.id}</p>
    </div>
  );
};
export default Coffee;
