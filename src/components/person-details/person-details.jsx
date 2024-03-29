import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-services';
import ErrorButton from '../error-btn';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class PersonDetails extends Component {

  constructor() {
    super()

    this.swapiService = new SwapiService();

    this.state = {
      person: null
    }

    this.updatePerson = () => {
      const {personId} = this.props;

      if (!personId) {
        return;
      }

      this.swapiService.getPerson(personId).then( person => {
        this.setState({person})
      });
    }
  
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  render() {
  
    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="img perosn"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <div className="button"><ErrorButton/></div>
        </div>
      </div>
    )
  }
}