import React from "react";
import { Navbar } from "../components/NavBar/NavBar";
import { Switch, Route, Redirect } from "react-router-dom";
import { ProductsList } from "../components/ProductsList";
import Profile from "../components/UserProfile/Profile";
import MercadoPagoSuccesPayment from "../components/CheckOut/MercadoPagoSuccesPayment";
export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/product-list" component={ProductsList} />
        <Route exact path="/user-profile" component={Profile} />
        <Route exact path="/mp-successpayment" component={MercadoPagoSuccesPayment} />
       
      </Switch>
    </>
  );
};