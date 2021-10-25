import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { useState } from "react";
import { ItemsContext } from "../context";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div>
      <ItemsContext.Provider value={{ items, setItems }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </ItemsContext.Provider>
    </div>
  );
}

export default App;
