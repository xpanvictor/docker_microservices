const { Router } = require('express');
const commission = require('../controllers/commission');

const appRouter = new Router();

appRouter.get('/', commission.greet);

appRouter.use('/vote', commission.vote);

module.exports = appRouter;
