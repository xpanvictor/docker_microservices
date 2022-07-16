const express = require('express');
const appRouter = require('./route');
const app = express();

app.use(appRouter);

app.listen(2000);
