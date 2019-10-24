import React, {Component} from 'react';

import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './people-page.css'
import ErrorIndicator from '../error-indicator/error-indicator';

export default class PeoplePage extends Component {
  constructor() {
    super()

    this.state = {
      selectedPerson: 1,
      error: false
    }

    this.OnPersonSelected = selectedPerson => {
      this.setState({selectedPerson})
    }
  }

  componentDidCatch(){
    this.setState({error:true})
  }

  render() {
    if (this.state.error) {
      return <ErrorIndicator/>
    }
    return (
      <div className="row mb2  margin">       
          <div className="col-md-6">
            <ItemList OnPersonSelected = {this.OnPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson}/>
          </div>
        </div>
    );
  }
}