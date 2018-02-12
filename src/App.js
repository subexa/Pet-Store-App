import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SelectBreed from './SelectBreed';
import BreedImage from './BreedImage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={SelectBreed} />
          <Route path="/details" component={BreedImage} />
        </div>
      </Router>
    );
  }
}

export default App;
