import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
class App extends Component {



  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation/>
      <Switch>
<Route path="/" component={Home} exact/>        
<Route path="/first" component={First}/>
<Route path="/second" component={Second}/>
<Route path="/third" component={Third}/>
<Route component={Error} exact/>
</Switch>
</div>
      </BrowserRouter>
    );
  }
}

export default App;
