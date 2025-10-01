const app = require('./app');
const config = require('./config');
const Sentry = null; // optional: add Sentry init here

const server = app.listen(config.port, ()=> {
  console.log(`Server running on ${config.port} (env=${config.env})`);
});

process.on('SIGINT', ()=> {
  console.log('SIGINT received, shutting down');
  server.close(()=> process.exit(0));
});
