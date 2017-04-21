const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.set('port', port);
app.use(express.static(path.join(__dirname, 'dist')));

const server = app.listen(port, () => console.log('Listening on port', port));
module.exports = server;
