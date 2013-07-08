var message_service = require('message_service');

var config = {
    host: 'foo.example.com',
    port: 8124,
    localAddress: 0
};

var service = message_service.createService();

// register any message handlers at this level
// this simple one just prints the received message
service.on('received_message', function(message) {
    console.log('application receieved data:'+message);
});

service.start();
