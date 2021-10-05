// React
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// pages
import Home from './Home/Home'
import Login from "./Login_Register/Login";
import Register from "./Login_Register/Register";
import LoginWithEmail from "./Login_Register/LoginWithEmail";
import ForgotPassword from "./Login_Register/ForgotPassword";
import ShoppingCart from "./shopping_cart/shoppingCart";
import ShowProduct from "./ShowProduct/ShowProduct";

// Redux
import { connect } from 'react-redux';
import { addDataAction } from "../actions/products";
import { useDispatch } from "react-redux";
import { addUserAction } from "../actions/authUser";

// Fire base
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App(props){
  const auth = getAuth();
  const dispatch = useDispatch();

  // function to write data to firebase
  function writeUserData(user) {
    const db = getDatabase();
    set(ref(db, 'users/' + user.uid), {
      shoppingCart: "no data",
    });
  }

  // if user signed in, send his id to Redux and put his id in firebase data
  const dbRef = ref(getDatabase());
  onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        dispatch(addUserAction(user.uid));
        // Add user id to my Firestore
        writeUserData(user);
      } 
  });  

  // useEffect to get the data of products from FireBase and send it to Redux store
  useEffect(
      () => get(child(dbRef, `products`)).then((snapshot) => {
      if (snapshot.exists()) {
        const productsData =  snapshot.val();
        dispatch( addDataAction(productsData) );
      } else {
        //console.log("No data available");
      }
      })
      .catch((error) => {
      //console.error(error);
      })  
  );

  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={ () => (<Home  />) } />
        <Route path='/Login' exact render={ () => (<Login />) } />
        <Route path='/Register' exact render={ () => (<Register />) } />
        <Route path='/LoginWithEmail' exact render={ () => (<LoginWithEmail />) } />
        <Route path='/ForgotPassword' exact render={ () => (<ForgotPassword />) } />
        <Route path='/ShoppingCart' exact render={ () => (<ShoppingCart />) } />
        <Route path='/ShowProduct' exact render={ () => (<ShowProduct />) } />
      </Switch>      
    </BrowserRouter>
  )
}

export default connect()(App);
