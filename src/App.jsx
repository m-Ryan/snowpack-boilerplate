import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Frame from '@/components/Frame';
import Home from '@/pages/home';

export default function App() {
  return (
    <Frame>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home }></Route>
        </Switch>
      </BrowserRouter>
    </Frame>

  )
}