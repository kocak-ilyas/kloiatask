import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffees } from "./redux/actions";

import Coffees from "./components/Cooffees/Coffees";
import Menu from "./components/Menu";

function App() {
  const dispatch = useDispatch();
  const coffeesReducer = useSelector((state) => state.coffeesReducer);

  useEffect(() => {
    dispatch(getCoffees());
  }, [dispatch]);

  return (
    <div className="App ms-3 me-5">
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
