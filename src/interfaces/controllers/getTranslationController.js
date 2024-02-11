const DatabaseAdapter = require('../../adapters/database');
const GetTranslations = require('../../usecases/GetTranslations');
const dynamoDB = require('../../utils/dynamodbConfig');

const databaseAdapter = new DatabaseAdapter(dynamoDB);
const getTranslations = new GetTranslations(databaseAdapter);

module.exports.handler = async () => {
  try {
    const translations = await getTranslations.execute();
    return {
      statusCode: 200,
      body: JSON.stringify(translations),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
