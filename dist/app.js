'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = (0, _express2.default)();
server.get('/', function (req, res) {
    res.send('Hello World!');
});

server.listen(8080, function () {
    console.log("listening on port 8080");
});