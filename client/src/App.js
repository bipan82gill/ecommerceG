import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import {useDispatch, useSelector} from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';

function App() {
  const cart = useSelector((state)=>state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state)=> state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = ()=>{
       dispatch(signout());
  }
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
           E- Commerce
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart
          {cartItems.length > 0 && (<span className="badge">{cartItems.length}</span>)}
          </Link>
          { userInfo ? (
            <div className="dropdown">
                <Link to='#'>{userInfo.name}{' '} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                  <li>
                  <Link to="/profile">User Profile
                  </Link>
                  </li>
                  <li>
                  <Link to="/orders/history">Order History
                  </Link>
                  </li>
                    <li>
                  <Link to="#signout" onClick={signoutHandler}>Sign out
                  </Link>
                  </li>
                  </ul>
                  </div>
          ):(
            <Link to="/signin">Sign In</Link>
           
            )
           
}
{ userInfo && userInfo.isSeller && (
  <div className="dropdown">
    <Link to="#seller">
      Seller <i className="fa fa-caret-down"></i>
    </Link>
    <ul className="dropdown-content">
      
      <li>
        <Link to="/productlist/seller">Products</Link>
      </li>
      <li>
        <Link to="/orderlist/seller">Orders</Link>
      </li>
    </ul>
  </div>
) }
        
{ userInfo && userInfo.isAdmin && (
  <div className="dropdown">
    <Link to="#admin">
      Admin <i className="fa fa-caret-down"></i>
    </Link>
    <ul className="dropdown-content">
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/productlist">Products</Link>
      </li>
      <li>
        <Link to="/orderlist">Orders</Link>
      </li>
      <li>
        <Link to="/userlist">Users</Link>
      </li>
    </ul>
  </div>
) }
          
        </div>
        
      </header>
      <main>
            <Route path="/seller/:id" component={SellerScreen}></Route>
            <Route path="/cart/:id?" component={CartScreen}></Route>
            <Route path="/product/:id" component={ProductScreen} exact></Route>
            <Route path="/product/:id/edit" component={ProductEditScreen} exact></Route>
            <Route path="/signin" component={SigninScreen}></Route>
            <Route path='/register' component={RegisterScreen}></Route>
            <Route path="/shipping" component={ShippingAddressScreen}></Route>
            <Route path="/payment" component={PaymentMethodScreen}></Route>
            <Route path="/placeorder" component={PlaceOrderScreen}></Route>
            <Route path="/order/:id" component={OrderScreen}></Route>
            <Route path="/order/history" component={OrderHistoryScreen}></Route>
            <PrivateRoute path="/profile" component={ProfileScreen}></PrivateRoute>
            <SellerRoute path="/productlist/seller" component={ProductListScreen}></SellerRoute>
            <SellerRoute path="/orderlist/seller" component={OrderListScreen}></SellerRoute>
            <AdminRoute path="/productlist" component={ProductListScreen} exact></AdminRoute>
            <AdminRoute path="/orderlist" component={OrderListScreen} exact></AdminRoute>
            <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
            <AdminRoute path="/user/:id/edit" component={UserEditScreen}></AdminRoute>
            <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;
