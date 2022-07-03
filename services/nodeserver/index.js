const express = require('express');
const http = require('http');
const appRouter = require('./routes/appRouter');

const app = express();

app.use(appRouter);

process.on('unhandledRejection', (err) => {
  console.trace(err);
  console.log('Unhandled rej, Xpan shutting down gracefully');
  app.close(() => {
    throw new Error('Unhandled rejection');
  });
});

app.listen(8000);
