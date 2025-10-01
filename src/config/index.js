const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  apiKey: process.env.API_KEY,
  dbFile: process.env.DB_FILE || 'db.json',
  logLevel: process.env.LOG_LEVEL || 'info'
};
