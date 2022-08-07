import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
//import Header from '../components/Header';
//import FilesList from '../components/FilesList';
import { Home } from '../components/home';

const AppRouter = () => (
  <BrowserRouter>
   <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={Home} path="/" exact={true} />
          <Route component={App} path="/home" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;