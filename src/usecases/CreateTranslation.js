class CreateTranslation {
      constructor(databaseGateway) {
        this.databaseGateway = databaseGateway;
      }
    
      async execute(original, translated) {
        const newTranslation = { original, translated };
        await this.databaseGateway.save(newTranslation);
        return newTranslation;
      }
    }
    
    module.exports = CreateTranslation;
    