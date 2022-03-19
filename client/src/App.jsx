import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './style/app.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/:language/wallets' component={Wallet} />
        <Route exact path='/:language/get-vac' component={GetVac} />
        <Route exact path='/:language/run-a-node' component={RunANode} />
        <Route exact path='/:language/staking' component={Staking} />

        <Route exact path='/:language/advaced' component={Advaced} />
        <Route exact path='/:language/vac' component={Vace} />
        <Route exact path='/:language/whitepaper' component={Whitepaper} />
        <Route exact path='/:language/upgrades' component={Upgrades} />

        <Route exact path='/:language/development/' component={Development} />
        <Route exact path='/:language/documentation' component={Documentation} />

        <Route exact path='/:language/support/' component={Support} />
      </Switch>
    </Router>
  )
}

export default App
