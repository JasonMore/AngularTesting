var restify = require('restify'),
    dummyData = require('./dummyData');

function respond(req, res, next) {
    res.send(dummyData);
}

var server = restify.createServer();

server.get('/dummyData', respond);
server.head('/dummyData', respond);

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});