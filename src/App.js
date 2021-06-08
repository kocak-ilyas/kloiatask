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
    <div className="App m-1 p-4">
      <Menu category={coffeesReducer.category} />
      <hr />
      <Coffees coffeesReducer={coffeesReducer} />
    </div>
  );
}

export default App;
