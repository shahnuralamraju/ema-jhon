
import './App.css';
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail'
import Shipment from './components/Shipment/Shipment';
import Login from './components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} 
from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="app">
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      {/* <h2>Email: {loggedInUser.name}</h2> */}
      <Router>
      <Header></Header>
        <Switch>
          <Route path='/shop'>
            <Shop/>
          </Route>
          <Route path='/review'>
            <Review/>
          </Route>
          <PrivateRoute path='/manage'>
            <Inventory/>
          </PrivateRoute>
          <PrivateRoute path='/shipment'>
            <Shipment/>
          </PrivateRoute>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route exact path='/'>
            <Shop/>
          </Route>
          <Route exact path="/product/:productKey">
              <ProductDetail/>
          </Route>
          <Route path='*'>
             <NotFound/>
          </Route>
        </Switch>
      </Router> 
    </UserContext.Provider>
    </div>
  );

}

export default App;
