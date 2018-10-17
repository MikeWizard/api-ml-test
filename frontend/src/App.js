import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './pages/Header.css';
import Home from './pages/Home';
import List from './pages/List';
import Items from './pages/Items';
import ItemsDetails from './pages/ItemsDetails';
import Header from './pages/Header';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route exact path="/items" component={Items} />
          <Route path="/items/:id" component={ItemsDetails} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;