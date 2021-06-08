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

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// const dispatch = useDispatch();
// const currentCart = useSelector((state) => state.cartReducer);
// const [totalCart, setTotalCart] = useState(0);

// useEffect(() => {
//     setTotalCart(
//       currentCart.cart.reduce(
//         (total, product) =>
//           total + product.fields.price * product.fields.countOfCart,
//         0
//       )
//     );
//   }, [currentCart]);
// <Button color="danger" size="sm" className="rounded-pill"
// onClick={() => { dispatch(removeToCart(product, currentCart)) }}
// > Remove </Button>
