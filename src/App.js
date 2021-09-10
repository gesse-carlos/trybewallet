import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Login, Wallet, NotFound } from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/trybewallet" component={ Login } />
      <Route exact path="/trybewallet/wallet" component={ Wallet } />
      <Route path="*" component={ NotFound } />
    </Switch>
  );
}

export default App;
