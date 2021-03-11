import './App.css';
import { Route, Switch } from 'react-router-dom';

import Root from './components/routerLogin.js';
import Choice from './components/routerChoice.js';
import Waiting from './components/routerWaiting.js';

function App() {
  return (
    <>
      <Switch>
          <Route path="/" component={Root} exact />
          <Route path="/Choice" component={Choice} exact />
          <Route path="/Waiting" component={Waiting} exact />
      </Switch>
    </>
  );
}

export default App;
