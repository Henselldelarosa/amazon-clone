import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import { Home, Checkout,Login, Payment } from "./exports";

import {auth} from './firebase'
import { useStateValue } from "./context/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if(authUser) {

        dispatch({
          type:'SET_USER',
          user: authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

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

          <Route path='/payment'>
            <Payment/>
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>

    </>
  );
}

export default App;
