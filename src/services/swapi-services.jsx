
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
    return res.results;
  }

  async getPlanetAll() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }
  
  async getStarshipAll() {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`)
  }
}

