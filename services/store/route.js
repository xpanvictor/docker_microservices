const { Router } = require('express');
const appRouter = new Router();
const controller = require('./controller');

appRouter.get('/vote', controller.vote);

module.exports = appRouter;
