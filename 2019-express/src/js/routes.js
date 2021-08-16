var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
router.post('/', function (req, res) {
    res.send('POST routes');
});

//export this router to use in our index.js
module.exports = router;