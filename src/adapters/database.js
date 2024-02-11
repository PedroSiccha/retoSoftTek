class DatabaseAdapter {
      constructor(databaseClient) {
        this.databaseClient = databaseClient;
      }
    
      async save(data) {
            try {
              await this.databaseClient.save(data);
              console.log('Datos guardados correctamente en la base de datos.');
              return true;
            } catch (error) {
              console.error('Error al guardar datos en la base de datos:', error);
              throw new Error('Error al guardar datos en la base de datos');
            }
          }
    
          async getAll() {
            try {
              const allData = await this.databaseClient.getAll();
              console.log('Datos obtenidos correctamente de la base de datos.');
              return allData;
            } catch (error) {
              console.error('Error al obtener datos de la base de datos:', error);
              throw new Error('Error al obtener datos de la base de datos');
            }
          }
          
    }
    
    module.exports = DatabaseAdapter;
    