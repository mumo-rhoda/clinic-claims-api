const winston = require('winston');
const config = require('../config');

const logger = winston.createLogger({
  level: config.logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [ new winston.transports.Console() ]
});

const requestLogger = (req,res,next)=>{
  logger.info({ msg: 'req', method: req.method, path: req.path });
  next();
};

const errorLogger = (err, req, res, next)=>{
  logger.error({ msg: 'error', message: err.message, stack: err.stack });
  next(err);
};

module.exports = { logger, requestLogger, errorLogger };
