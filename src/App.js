import React, { useEffect } from "react";
import "./App.css";
import Coffees from "./components/Cooffees/Coffees";
import Menu from "./components/Menu";
import { useDispatch, useSelector } from "react-redux";
import { coffeesDB } from "./db/coffees";
import { getCoffees } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
const coffeesReducer = useSelector(state => state.coffeesReducer)
  useEffect(() => {
    dispatch(getCoffees(coffeesDB));
  }, [dispatch]);
  return (
    <div className="App">
      <Menu category={coffeesReducer.category} />
      <Coffees coffeesTable={coffeesReducer.coffeesTable} />
    </div>
  );
}

export default App;
