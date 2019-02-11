import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutUs from './pages/AboutUs';
import WcNavbar from './common/WcNavbar';
import MoviesList from './pages/MoviesList';

/*
  WcNavbar is going to be visible from all of the routes (views/pages)
  because it's outside of the router.

  We create a Switch (like a normal switch) to define the routes.
  The Route components act like the cases for the switch. This means
  that the Switch will try to match the current url with one of those
  defined and if it does, it will show the component that we passed
  to it. If it doesn't it will show a blank page.
*/
class App extends Component {
  render() {
    return (
      <Fragment>
        <WcNavbar />
        <Switch>
          <Route exact path="/" component={AboutUs} />
          <Route path="/movies" component={MoviesList}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
