const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/front-microempresa'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/front-microempresa/'}),
);

app.listen(process.env.PORT || 4100);