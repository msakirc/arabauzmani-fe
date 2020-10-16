import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import ArabaUzmani from './components/ArabaUzmani';
import Ara from './components/Ara';
import Kesfet from './components/Kesfet';
import ContactPage from './components/ContactPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={ArabaUzmani} exact={true} />
        <Route path="/ara" component={Ara} exact={true} />
        <Route path="/kesfet" component={Kesfet} exact={true} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
