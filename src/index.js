import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';
import Loader from './views/Home/Loader';

import "assets/scss/material-kit-react.scss?v=1.9.0";

//Importing Pages 
import UserPortal from './views/Home/UserPortal';
import Contact from './views/Helpdesk/Contact';


var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/home" component={UserPortal} />
          
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<Loader />, document.getElementById("loader"));