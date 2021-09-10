import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Grid from "../components/Grid";
/* import Category from "../components/Category"; */
import Login from "../components/Login";
import Register from "../components/Register";
import { Product } from "../components/Product";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import { useDispatch } from "react-redux";
import { userLogged } from "../store/userLogged";
import axios from "axios";
/*import Contact from "../components/Contact";  */

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios
      .get("/api/auth/me")
      .then((res) => res.data)
      .then((user) => {
        dispatch(userLogged(user));
        console.log("userLogged: ", user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" render={() => <Grid />} />
        {/*      <Route path="/{:categoryID}" render={() => <Category />} /> */}
        <Route path="/carrito" component={Cart} />
        {/*   <Route exact path="/contacto" render={() => <Contact />} /> */}
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/products/:title" render={() => <Product />} />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
