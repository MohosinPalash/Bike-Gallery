import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/CommonPages/Home/Home/Home';
import Product from './Pages/CommonPages/Product/Product';

function App() {
  return (
    <div className="App">
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

    </div>
  );
}

export default App;
