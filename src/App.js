import React from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from './screens/HomePage'
import TestPage from './screens/TestPage'



const App = () => (
  <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/test/:testtitle' name="testtitle" component={TestPage}/>
  </Switch>
)

export default App;
