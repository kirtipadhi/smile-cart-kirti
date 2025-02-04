import PageNotFound from "components/commons/PageNotFound";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
// eslint-disable-next-line import/extensions
import ProductList from "./components/ProducList";
import Product from "./components/Product";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/products/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route component={PageNotFound} path="*" />
  </Switch>
);

export default App;
