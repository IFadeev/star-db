import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends Component {

  constructor() {
    super();

    this.swapiService = new SwapiService();

    this.state = {
      planet: {},
      loading: true
    }

    this.onPlanetLoaded = planet => {
      this.setState({
        planet,
        loading: false
      });
    }

    this.updatePlanet = () => {
      const id = Math.floor(Math.random()*22)+2;
      this.swapiService.getPlanet(id).then(this.onPlanetLoaded)
    }

  }

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    
    const { planet: {id, name, population, rotationPeriod, diameter}, 
            loading } = this.state;

    if (loading) {
      return <div className="random-planet jumbotron rounded"><Spinner/></div>
    }

     return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg` }/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}