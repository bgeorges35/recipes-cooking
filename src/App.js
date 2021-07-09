import React from "react";
import Header from "./componenents/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Categories from "./pages/Categories";
import Menu from "./componenents/MenuByCategories";
import Recipe from "./componenents/Recipes";
import Footer from "./pages/Footer";
import { Route, Redirect, useLocation, Switch } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <Header />
      <Switch>
        <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
        <Route exact path="/" component={Home} />
        <Route exact path="/get-started" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/explore-menu" component={Categories} />
      </Switch>
      <Route exact path="/explore-menu/:menu">
        <Menu />
      </Route>
      <Route exact path="/explore-menu/:menu/:recipe">
        <Recipe />
      </Route>
      <Footer />
    </div>
  );
};

export default App;
