const server = require('http').createServer();
const io = require('socket.io')(server);
const Redis = require('ioredis');
const redis = new Redis();

redis.subscribe('notifications', function(err, count) {
    //
});

redis.on('message', function(channel, message) {
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});

server.listen(3000);
