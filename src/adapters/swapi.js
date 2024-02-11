const axios = require('axios');

class SwapiAdapter {
  constructor() {
    this.baseUrl = 'https://swapi.py4e.com/api';
  }

  async getCharacter(id) {
    const response = await axios.get(`${this.baseUrl}/people/${id}`);
    return response.data;
  }
}

module.exports = SwapiAdapter;
