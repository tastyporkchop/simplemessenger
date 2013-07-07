var message_service = require('message_service');

var config = {
    host: 'foo.example.com',
    port: 8124,
    localAddress: 0
};

var service = message_service.createService();
service.start();
