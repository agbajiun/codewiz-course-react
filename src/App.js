import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component';
import CoursePage from './pages/coursepage/coursepage.component';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/courses" component={CoursePage} />
    </Switch>
  );
}
  /*<div>
        <HomePage />
      </div>*/
export default App;
