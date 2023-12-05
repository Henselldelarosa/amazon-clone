import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import { Home, Checkout,Login, Payment } from "./exports";
import {auth} from './firebase'
import { useStateValue } from "./context/StateProvider";

import {loadStripe} from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51OJqDqAzbdz6FzdbkXg0kwe3HFARvi5ynJ7N3zrULBna6Ro4wChT2Abt22cAnDiqpxZn045RzGUcyIRASZMaHRdj00a542pCzP")

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

            <Elements stripe={promise}>
              <Payment/>
            </Elements>
            
          </Route>

          <Route path='/'>
            <Home/>
          </Route>
        </Switch>

    </>
  );
}

export default App;
