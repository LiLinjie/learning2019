import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import './style/base.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Page1} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
