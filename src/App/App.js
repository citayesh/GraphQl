import React, { useEffect, useState } from 'react';
import {Switch, Route,Redirect} from 'react-router-dom'
import './App.css';
import HomePage from '../pages/homepage/HomePage.component';
import ShopPage from '../pages/shoppage/ShopPage.componet';
import  {default as Header}from '../components/header/header.container';
import SigninUp from '../pages/sign-in-up-page/SigninUp.component';
import {default as CheckoutPage} from '../pages/checkout/CheckoutPage.container';
import { auth, createUserProfileDocument } from '../service/firebase/Firebase.utils';


function App (){
  const [currentUser,setCurrentUser]=useState(null)
  useEffect(()=>{
    let unsubscribeFromAuth =true
    if(unsubscribeFromAuth){
    auth.onAuthStateChanged(async userAuth => {
    (setCurrentUser(userAuth))
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        (setCurrentUser({
          id: snapShot.id,
          ...snapShot.data()
        })
       ) })
      }
      setCurrentUser(userAuth)
  })
}
     return ()=>unsubscribeFromAuth=false
    },[])
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
                currentUser ? (
                <Redirect to='/' />
              ) : (
                <SigninUp />
              )
            }
          />
        </Switch>
      </div>
    );
  
  }  
  export default App;