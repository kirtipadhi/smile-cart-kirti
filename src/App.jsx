import { useState } from "react";

import PageNotFound from "components/commons/PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "routes";

import "./App.css";
// eslint-disable-next-line import/extensions
import ProductList from "./components/ProducList";
import Product from "./components/Product";
import CartItemsContext from "./contexts/CartItemsContext";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartItemsContext.Provider value={[cartItems, setCartItems]}>
      <Switch>
        <Route exact component={ProductList} path={routes.products.index} />
        <Route exact component={Product} path={routes.products.show} />
        <Redirect exact from="/" to={routes.products.index} />
        <Route component={PageNotFound} path="*" />
      </Switch>
    </CartItemsContext.Provider>
  );
};

export default App;
