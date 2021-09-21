const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/frontmicroempresa'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontmicroempresa/'}),
);

app.listen(process.env.PORT || 4100);