const DatabaseAdapter = require('../../adapters/database');
const CreateTranslation = require('../../usecases/CreateTranslation');
const dynamoDB = require('../../utils/dynamodbConfig');

const databaseAdapter = new DatabaseAdapter(dynamoDB);
const createTranslation = new CreateTranslation(databaseAdapter);

module.exports.handler = async (event) => {
  try {
    const { original, translated } = JSON.parse(event.body);
    const newTranslation = await createTranslation.execute(original, translated);
    return {
      statusCode: 201,
      body: JSON.stringify(newTranslation),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
