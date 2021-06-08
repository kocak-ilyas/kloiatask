import React, { useEffect } from "react";
import "./App.css";
import Coffees from "./components/Cooffees/Coffees";
import Menu from "./components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { getCoffees } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const coffeesReducer = useSelector((state) => state.coffeesReducer);
  useEffect(() => {
    dispatch(getCoffees());
  }, [dispatch]);
  return (
    <div className="App">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2">
          <div className="col">
            <Menu category={coffeesReducer.category} />
          </div>
          <div className="col-10">
            <Coffees coffeesReducer={coffeesReducer} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
