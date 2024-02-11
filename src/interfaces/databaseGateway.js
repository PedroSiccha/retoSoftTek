class DatabaseGateway {
      constructor(databaseAdapter) {
        this.databaseAdapter = databaseAdapter;
      }
    
      async save(data) {
        return await this.databaseAdapter.save(data);
      }
    
      async getAll() {
        return await this.databaseAdapter.getAll();
      }
    }
    
    module.exports = DatabaseGateway;
    