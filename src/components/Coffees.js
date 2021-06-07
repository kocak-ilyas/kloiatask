import React from 'react'
import Coffee from './Coffee'

const Coffees = () => {

    return (
        <div>
            Map Function
            <Coffee />
        </div>
    )
}

export default Coffees

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