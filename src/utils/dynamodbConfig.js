// dynamodbConfig.js
const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: '',
  secretAccessKey: ''
});

const dynamoDB = new AWS.DynamoDB();

module.exports = dynamoDB;
