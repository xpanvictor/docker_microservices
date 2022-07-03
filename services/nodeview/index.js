const express = require('express');
const router = require('./route');
const app = express();

app.use(express.static('./view'));

app.use(router);

app.listen(4000);
