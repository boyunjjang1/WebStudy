const express = require('express');
const router = require('./routes');

const app = express();

// CRUD

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// routing
app.use('/', router);

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
});