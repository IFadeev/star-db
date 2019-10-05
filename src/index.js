
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
    return res.results
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

}

const swapi = new SwapiService();

swapi.getPerson(4).then(p => {
  console.log(p.name )
})

// getResource('https://swapi.co/api/people/101010144444/').then( (body) => {
//   console.log(body);
// })
//   .catch( (err) =>{
//     console.error('ee', err)
//   })
