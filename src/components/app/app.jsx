import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-btn'

import './app.css';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 5,
      error: false
    }

    this.OnItemSelected = id => {
      this.setState({
        selectedPerson: id
      })
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
        <div className="row mb2">       
          <div className="col-md-6">
            <ItemList OnItemSelected = {this.OnItemSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  };
}
  
