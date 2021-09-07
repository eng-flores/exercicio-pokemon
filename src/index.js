import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import SobreMim from './SobreMim'
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const routes = () => (
  <Switch>
    <Route path="/registrar" component={App}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/sobre-mim" component={SobreMim}></Route>
    <Redirect exact from="/" to="registrar"></Redirect>
  </Switch>
)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{routes()}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
