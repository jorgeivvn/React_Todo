import React, { Component } from 'react';
import Header from './components/Header';
import MyRoutes from './config/routes';
import { Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <Switch>
        { MyRoutes }
        </Switch>
      </div>
    );
  }
}

export default App;
