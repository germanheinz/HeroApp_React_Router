import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { LoginScreen } from '../login/LoginScreen';
import { MarvelScreen } from '../marvel/MarvelScreen';
import { DcScreen } from '../dc/DcScreen';
import { Navbar } from '../ui/Navbar';

export const AppRouter = () => {
    return (
     <Router>
      <div>
        <Navbar />

        <Switch>
            <Route exact path="/login" component={ LoginScreen } />

            <Route exact path="/marvel" component={ MarvelScreen } />

            <Route exact path="/dc" component={ DcScreen } />
        </Switch>

      </div>
    </Router>
  );
}
