const config = require('../config');
module.exports = (req,res,next)=>{
  const key = req.header('x-api-key') || req.query.api_key;
  if (config.apiKey && key !== config.apiKey) return res.status(401).json({ error: 'unauthorized' });
  next();
};
