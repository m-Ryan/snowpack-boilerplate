import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@/pages/home';
export const router = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}></Route>
    </Switch>
  </BrowserRouter>
);