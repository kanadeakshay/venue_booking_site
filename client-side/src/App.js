import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import { useDispatch } from 'react-redux';
import { isUserLoggedIn } from './actions/auth.actions';
import Signup from './containers/Signup';
import ProfilePage from './containers/Profile';
import VenuePage from './containers/Venue';

function App() {

  const dispatch = useDispatch();
  const auth = useDispatch(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/venue" component={VenuePage} />
      </Switch>
    </div>
  );
}

export default App;
