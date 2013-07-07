var message_service = require('message_service');

var config = {
    host: 'foo.example.com',
    port: 8124,
    localAddress: 0
};
var service = message_service.createService();

service.start();
service.addFriend({host: 'node1', port: 8124});
service.sendMessage("I like you a whole lot - ");
service.shutdown();
