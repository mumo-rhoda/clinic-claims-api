const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const requestLogger = require('./middleware/logger').requestLogger;
const errorLogger = require('./middleware/logger').errorLogger;
const errorHandler = require('./middleware/errorHandler');
const patientsRoutes = require('./routes/patients');
const claimsRoutes = require('./routes/claims');
const config = require('./config');

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(requestLogger);

app.use('/patients', patientsRoutes);
app.use('/claims', claimsRoutes);

app.get('/health', (req,res)=> res.json({ status: 'ok' }));

app.use(errorLogger);
app.use(errorHandler);

module.exports = app;
