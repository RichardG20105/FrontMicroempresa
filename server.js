const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/FrontMicroempresa'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/FrontMicroempresa'}),
);

app.listen(process.env.PORT || 4100);