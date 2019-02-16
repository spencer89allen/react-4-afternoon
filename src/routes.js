import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

//Routes
export default (
    <Switch>
      <Route component={ Home } exact path="/" />
      <Route component={ About } path="/about" />
      <Route component={ ClassList } path='/classlist/:class' />
      <Route component={ Student } path='/student/:id'/>
    </Switch>
  )