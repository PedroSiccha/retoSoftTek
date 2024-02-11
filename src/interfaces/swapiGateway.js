const SwapiAdapter = require('../adapters/swapi');

class SwapiGateway {
  constructor() {
    this.swapiAdapter = new SwapiAdapter();
  }

  async getCharacter(id) {
    return await this.swapiAdapter.getCharacter(id);
  }
}

module.exports = SwapiGateway;
