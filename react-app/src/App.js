import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import { Home, Checkout,Login } from "./exports";

function App() {

  return (
    <>
      <Navigation />
        <Switch>

          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>

    </>
  );
}

export default App;
