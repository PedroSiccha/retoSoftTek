class GetTranslations {
      constructor(databaseGateway) {
        this.databaseGateway = databaseGateway;
      }
    
      async execute() {
        return await this.databaseGateway.getAll();
      }
    }
    
    module.exports = GetTranslations;
    