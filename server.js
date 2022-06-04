

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/angular-reactive-form'));

app.get('/*', function (req, res) {
    res.sendFile('index.html',
        { root: 'dist/angular-reactive-form' }
    );
});
app.listen(process.env.PORT || 8080);