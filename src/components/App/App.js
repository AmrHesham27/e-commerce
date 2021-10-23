// React
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// scss
import './App.scss'

// pages
import Home from '../Home/Home'
import Login from "../Login_Register/Login";
import Register from "../Login_Register/Register";
import LoginWithEmail from "../Login_Register/LoginWithEmail";
import ForgotPassword from "../Login_Register/ForgotPassword";
import ShoppingCart from "../shopping_cart/shoppingCart";
import ShowProduct from "../ShowProduct/ShowProduct";


// Redux
import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { addUserAction } from "../../actions/authUser";

// Fire base
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// import products
import products from "../products";

function App(){
  const auth = getAuth();
  const dispatch = useDispatch();

  // function to write data to firebase
  function writeUserData(user) {
    const db = getDatabase();
    set(ref(db, 'users/' + user.uid), {
      email: user.email,
    });
  }

  // if user exist in firebase do nothing, if not set his data
  const dbRef = ref(getDatabase());
  const userFirebase = (user) => { get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return;
    } else {
      writeUserData(user);
    }
  }).catch((error) => {
    console.error(error);
  });
  };

  // if user signed in, send his id to Redux and put his id in firebase data
  onAuthStateChanged(auth, (user) => {
    if(user){
        // add user to firebase
        userFirebase(user);
        // add User to Redux store
        dispatch(addUserAction(user.uid));
        // localstorage also
        localStorage.setItem('user',user.uid);
    } 
    // if userLogged out send this info to redux and localStorage
    else{ 
      dispatch(addUserAction(null));
      localStorage.setItem('user','noUser')
    }
  });
  // get the data of products to send it display compnents
  const allProducts = Object.entries({...products.smartPhones, ...products.iot});
  
  return(
    localStorage.getItem('user')!=='noUser'? 
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={ () => (<Home  />) } />
        <Route path='/ShoppingCart' exact render={ () => (<ShoppingCart />) } />
        {allProducts.map(([i,y]) =>
            {return(<Route key={i} path={"/ShowProduct/"+i} exact render={() => (<ShowProduct name={i} data={y} />) }/>)})
        }
      </Switch> 
    </BrowserRouter>
    :
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={ () => (<Home  />) } />
        <Route path='/Login' exact render={ () => (<Login />) } />
        <Route path='/Register' exact render={ () => (<Register />) } />
        <Route path='/LoginWithEmail' exact render={ () => (<LoginWithEmail />) } />
        <Route path='/ForgotPassword' exact render={ () => (<ForgotPassword />) } />
        {allProducts.map(([i,y]) =>
            {return(<Route key={i} path={"/ShowProduct/"+i} exact render={() => (<ShowProduct name={i} data={y} />) }/>)})
        }
      </Switch>    
    </BrowserRouter>
  )
}

export default connect()(App);