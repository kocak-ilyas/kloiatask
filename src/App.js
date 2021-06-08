import React, { useEffect } from "react";
import "./App.css";
import Coffees from "./components/Cooffees/Coffees";
import Menu from "./components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getCoffees } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const coffeesReducer = useSelector((state) => state.coffeesReducer);

  const getProducts = () => {
    dispatch(getCoffees());
  };

  useEffect(() => {
    getProducts();
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container m-3 p-2">
        <div className="row">
          <div className="col-12 col-lg-3 border border-1 border-success p-4">
            <Menu category={coffeesReducer.category} />
          </div>
          <div className="col-12 col-lg-9 border border-1 border-success p-4">
            <Coffees coffeesReducer={coffeesReducer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
