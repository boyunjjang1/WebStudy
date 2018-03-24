const express = require('express');
const path = require('path');

const router = express.Router(); // router 역할만 가지고있음

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, './../res/html', '/index.html'));
    res.render(path.join(__dirname, './../res/html', '/index.html'));
});

router.get('/signup', (req, res) => {
    res.send('signup');
});

router.get('/signin', (req, res) => {
    res.send('signin');
});


module.exports = router;

