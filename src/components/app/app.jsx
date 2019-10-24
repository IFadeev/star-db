import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-btn'

import './app.css';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      error: false
    }

  }

  componentDidCatch(){
    this.setState( {error:true} )
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator/>
    }

    return (
      <div>
        <Header />
        <RandomPlanet />
        <div className="row mb2 button-row"> <ErrorButton/></div>
        <PeoplePage/>
        <PeoplePage/>
        <PeoplePage/>
      </div>
    );
  };
}
  
