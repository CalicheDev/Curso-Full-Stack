import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPAge';

function AppRouterOne() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/' component={Notfoundpage} />
      </Switch>
    </Router>
  );
}

export default AppRouterOne;
