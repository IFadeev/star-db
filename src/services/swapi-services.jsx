
 export default class SwapiService {
  
  _apiBase = 'https://swapi.co/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} ${res.status}`)
    }
    return await res.json();
  }

  async getPeopleAll() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);;
  }

  async getPlanetAll() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }
  
  async getStarshipAll() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person)
  }

  async getPlanet(id) {
    const planet = await this.getResource(`/planets/${id}`);
    return this._transformPlanet(planet)
  }

  async getStarship(id) {
    const ship = await this.getResource(`/starships/${id}`);
    return this._transformStarship(ship);
  }

  _extractId(item) {
    const id = item.url.match(/\/([0-9]*)\/$/);
    return id[1];
  }

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  }


}
