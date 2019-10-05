
class SwapiService {
  
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
<<<<<<< HEAD
    return res.results;
  }

  async getPlanetAll() {
    const res = await this.getResource(`/planets/`);
    return res.results;
  }
  
  async getStarshipAll() {
    const res = await this.getResource(`/starships/`);
    return res.results;
=======
    return res.results
>>>>>>> 854d5cd5abaec8f14b4215014cd0260ddb427689
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

<<<<<<< HEAD
  getPlanet(id) {
    return this.getResource(`/planets/${id}`)
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}`)
  }
=======
>>>>>>> 854d5cd5abaec8f14b4215014cd0260ddb427689
}

const swapi = new SwapiService();

swapi.getPerson(4).then(p => {
  console.log(p.name )
})

<<<<<<< HEAD
swapi.getPlanet(6).then( p => {
  console.log(p.name)
})

swapi.getStarshipAll().then( p => {
  console.log(p)
})


=======
>>>>>>> 854d5cd5abaec8f14b4215014cd0260ddb427689
// getResource('https://swapi.co/api/people/101010144444/').then( (body) => {
//   console.log(body);
// })
//   .catch( (err) =>{
//     console.error('ee', err)
//   })
