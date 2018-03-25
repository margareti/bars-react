import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BackButton from '../components/BackButton';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import BarPage from '../components/BarPage';
import Order from '../components/Order';
import ContactPage from '../components/ContactPage';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/bar/:id" component={BarPage} exact={true} />
        <Route path="/order" component={Order} />
        <Route path="/contact" component={ContactPage } />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
