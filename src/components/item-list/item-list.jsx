import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

  constructor(){
    super()

    this.swapiService = new SwapiService();
    
    this.state = {
      peopleList: null,
    }

  }

  componentDidMount() {
    this.swapiService.getPeopleAll().then( peopleList => {
      this.setState({peopleList})
    })
  }

  renderItem(arr) {
    return arr.map( ({id, name}) => {
      return (
        <li className="list-group-item"
          key = {id} 
          onClick = { () => this.props.OnItemSelected(id)}> {name}
        </li>)
    })
  }
  render() {

    const {peopleList} = this.state

    if (!peopleList) {
      return (
        <ul className="jumbotron item-list list-group">
          <Spinner/>
        </ul>
      )
    }
    const items = this.renderItem(peopleList)
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}