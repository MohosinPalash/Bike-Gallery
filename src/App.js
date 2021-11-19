import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/CommonPages/Home/Home/Home';
import Product from './Pages/CommonPages/Product/Product';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/PrivatePagesAdmin/AddProduct/AddProduct';
import ManageProduct from './Pages/PrivatePagesAdmin/ManageProduct/ManageProduct';
import ManageOrder from './Pages/PrivatePagesAdmin/ManageOrder/ManageOrder';
import MakeAdmin from './Pages/PrivatePagesAdmin/MakeAdmin/MakeAdmin';
import MyOrder from './Pages/PrivatePagesUser/MyOrder/MyOrder';
import PaymentGateway from './Pages/PrivatePagesUser/PaymentGateway/PaymentGateway';
import SendReview from './Pages/PrivatePagesUser/SendReview/SendReview';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Product></Product>
            </Route>
            <PrivateRoute exact path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute exact path="/manageProduct">
              <ManageProduct></ManageProduct>
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute exact path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/paymentGateway">
              <PaymentGateway></PaymentGateway>
            </PrivateRoute>
            <PrivateRoute exact path="/sendReview">
              <SendReview></SendReview>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            {/* <PrivateRoute exact path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/review">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/pay">
              <MyOrder></MyOrder>
            </PrivateRoute> */}
            {/* <Route exact path="/transports">
              <Transports></Transports>
            </Route>
            <Route exact path="/placeOrder/:packageId">
              <PlaceOrder></PlaceOrder>
            </Route>
            <Route exact path="/myOrder">
              <MyOrder></MyOrder>
            </Route>
            <Route exact path="/manageOrder">
              <ManageOrder></ManageOrder>
            </Route>
            <Route exact path="/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
